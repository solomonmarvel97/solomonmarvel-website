import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { inquiryForms, isInquiryIntent, type InquiryFieldKey, type InquiryIntent } from '../src/profile/inquiries'

type ContactBody = {
  intent?: string
  name?: string
  email?: string
  company?: string
  industry?: string
  workflow?: string
  timeline?: string
  role?: string
  message?: string
  /** Honeypot - leave empty; bots often fill it. */
  website?: string
}

const MAX_NAME = 120
const MAX_EMAIL = 254
const MAX_COMPANY = 160
const MAX_SHORT = 200
const MAX_MESSAGE = 5000

function trim(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function parseIntent(value: unknown): InquiryIntent {
  return isInquiryIntent(value) ? value : 'engagement'
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  let body: ContactBody
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as ContactBody
  } catch {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  if (trim(body.website, 200)) {
    return res.status(200).json({ ok: true })
  }

  const intent = parseIntent(body.intent)
  const config = inquiryForms[intent]
  const name = trim(body.name, MAX_NAME)
  const email = trim(body.email, MAX_EMAIL)
  const company = trim(body.company, MAX_COMPANY)
  const industry = trim(body.industry, MAX_SHORT)
  const workflow = trim(body.workflow, MAX_MESSAGE)
  const timeline = trim(body.timeline, MAX_SHORT)
  const role = trim(body.role, MAX_SHORT)
  const message = trim(body.message, MAX_MESSAGE)

  const extras: Record<InquiryFieldKey, string> = {
    industry,
    workflow,
    timeline,
    role,
    message,
  }

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' })
  }

  for (const field of config.fields) {
    if (field.required && !extras[field.key]) {
      return res.status(400).json({ error: `${field.label} is required` })
    }
  }

  const to = process.env.CONTACT_TO_EMAIL || 'solomonmarvel@hotmail.com'
  const from = process.env.CONTACT_FROM_EMAIL || 'Solomon Marvelous <noreply@solomonmarvel.com>'

  const resend = new Resend(apiKey)

  const detailLines = [
    `Type: ${config.emailLabel}`,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    industry ? `Industry: ${industry}` : null,
    role ? `Role: ${role}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    workflow ? `Workflow:\n${workflow}` : null,
    message ? `Message:\n${message}` : null,
  ].filter((line): line is string => line !== null)

  const textLines = [
    `New ${config.emailLabel.toLowerCase()} from solomonmarvelous.com`,
    '',
    ...detailLines,
  ]

  const htmlBlocks = [
    `<p style="margin: 0 0 16px;">New <strong>${escapeHtml(config.emailLabel)}</strong> from <strong>solomonmarvelous.com</strong></p>`,
    `<p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p style="margin: 0 0 4px;"><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    company ? `<p style="margin: 0 0 4px;"><strong>Company:</strong> ${escapeHtml(company)}</p>` : '',
    industry ? `<p style="margin: 0 0 4px;"><strong>Industry:</strong> ${escapeHtml(industry)}</p>` : '',
    role ? `<p style="margin: 0 0 4px;"><strong>Role:</strong> ${escapeHtml(role)}</p>` : '',
    timeline ? `<p style="margin: 0 0 4px;"><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>` : '',
    workflow ? `<p style="margin: 16px 0 4px;"><strong>Workflow:</strong></p><p style="margin: 0; white-space: pre-wrap;">${escapeHtml(workflow)}</p>` : '',
    message ? `<p style="margin: 16px 0 4px;"><strong>Message:</strong></p><p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>` : '',
  ].filter(Boolean)

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #1a1a1a;">
      ${htmlBlocks.join('\n      ')}
    </div>
  `.trim()

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `${config.emailLabel} from ${name}`,
      text: textLines.join('\n'),
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Failed to send message. Please try again.' })
    }

    return res.status(200).json({ ok: true, intent })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
