import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { inquiryForms, isInquiryIntent, type InquiryFieldKey, type InquiryIntent } from '../src/profile/inquiries.js'

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
  const reply_to = process.env.CONTACT_REPLY_TO_EMAIL || 'me@solomonmarvel.com'

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

  const detailRows = [
    ['Name', escapeHtml(name)],
    ['Email', escapeHtml(email)],
    company ? ['Company', escapeHtml(company)] : null,
    industry ? ['Industry', escapeHtml(industry)] : null,
    role ? ['Role', escapeHtml(role)] : null,
    timeline ? ['Timeline', escapeHtml(timeline)] : null,
    workflow ? ['Workflow', escapeHtml(workflow)] : null,
    message ? ['Message', escapeHtml(message)] : null,
  ].filter((row): row is [string, string] => row !== null)

  const detailRowsHtml = detailRows.map(([label, value]) => `
    <tr>
      <td style="width: 30%; padding: 12px 16px; border-bottom: 1px solid #e5e7eb; vertical-align: top; color: #6b7280; font-size: 13px; font-weight: 600;">${label}</td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; vertical-align: top; color: #111827; font-size: 14px; white-space: pre-wrap;">${value}</td>
    </tr>`).join('')

  const emailShell = (content: string) => `
    <!doctype html>
    <html>
      <body style="margin: 0; padding: 24px 12px; background: #f3f4f6; font-family: Arial, Helvetica, sans-serif; color: #111827;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">${escapeHtml(config.emailLabel)} from Solomon Marvelous</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 28px 32px; background: #171717; color: #ffffff;">
              <p style="margin: 0 0 8px; color: #a3a3a3; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;">Solomon Marvelous</p>
              <h1 style="margin: 0; font-size: 24px; line-height: 1.25; font-weight: 700;">${escapeHtml(config.emailLabel)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 32px;">${content}</td>
          </tr>
          <tr>
            <td style="padding: 20px 32px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; line-height: 1.5;">
              Solomon Marvelous · Vertical AI integrations<br />
              <a href="https://solomonmarvelous.com" style="color: #4b5563;">solomonmarvelous.com</a>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `.trim()

  const ownerHtml = emailShell(`
    <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">New inquiry received from the website.</p>
    <h2 style="margin: 0 0 24px; font-size: 20px; line-height: 1.3;">${escapeHtml(config.emailLabel)}</h2>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border: 1px solid #e5e7eb; border-radius: 8px; border-collapse: separate; overflow: hidden;">
      ${detailRowsHtml}
    </table>
    <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.6;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
  `)

  const visitorHtml = emailShell(`
    <p style="margin: 0 0 16px; font-size: 16px;">Hi ${escapeHtml(name)},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6;">Thanks for sending your ${escapeHtml(config.emailLabel.toLowerCase())} request. I have received the details below and will review them shortly.</p>
    <h2 style="margin: 24px 0 12px; font-size: 16px;">Your request</h2>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border: 1px solid #e5e7eb; border-radius: 8px; border-collapse: separate; overflow: hidden;">
      ${detailRowsHtml}
    </table>
    <p style="margin: 24px 0 16px; font-size: 14px; line-height: 1.6;">I will reply by email if this is a good fit. You can reply directly to this confirmation if you need to add anything.</p>
    <p style="margin: 0; font-size: 15px; font-weight: 700;">Solomon Marvelous</p>
  `)

  try {
    const resend = new Resend(apiKey)
    const { error: visitorError } = await resend.emails.send({
      from,
      to: [email],
      replyTo: reply_to,
      subject: `Request for ${config.emailLabel} received`,
      html: visitorHtml,
    })

    if (visitorError) {
      console.error('Visitor email error:', visitorError)
      return res.status(502).json({ error: 'Failed to send message. Please try again.' })
    }

    const { error: ownerError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `${config.emailLabel} from ${name}`,
      text: textLines.join('\n'),
      html: ownerHtml,
    })

    if (ownerError) {
      console.error('Owner email error:', ownerError)
      return res.status(502).json({ error: 'Failed to send message. Please try again.' })
    }

    return res.status(200).json({ ok: true, intent })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
