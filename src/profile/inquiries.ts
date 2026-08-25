export const inquiryIntents = ['diagnostic', 'sprint', 'partnership', 'engagement'] as const

export type InquiryIntent = (typeof inquiryIntents)[number]

export type InquiryFieldKey = 'industry' | 'workflow' | 'timeline' | 'role' | 'message'

export type InquiryField = {
  key: InquiryFieldKey
  label: string
  placeholder: string
  type: 'text' | 'textarea'
  required: boolean
}

export type InquiryFormConfig = {
  title: string
  subtitle: string
  submit: string
  successTitle: string
  successBody: string
  emailLabel: string
  fields: InquiryField[]
}

export const inquiryForms: Record<InquiryIntent, InquiryFormConfig> = {
  diagnostic: {
    title: 'Vertical AI diagnostic',
    subtitle: 'A short working session on where AI would grow or scale the operation, and where it would not.',
    submit: 'Book the diagnostic',
    successTitle: 'Request sent.',
    successBody: 'Thanks. I will reply to your email if a diagnostic session is a fit.',
    emailLabel: 'Vertical AI diagnostic',
    fields: [
      {
        key: 'industry',
        label: 'Industry',
        placeholder: 'Fintech, banking, recruitment, education, payments…',
        type: 'text',
        required: true,
      },
      {
        key: 'message',
        label: 'Where is growth constrained?',
        placeholder: 'The workflow, the bottleneck, and what you have already tried.',
        type: 'textarea',
        required: true,
      },
    ],
  },
  sprint: {
    title: 'Vertical AI sprint',
    subtitle: 'A scoped engagement that designs and ships one production integration inside a workflow you already run.',
    submit: 'Request a sprint',
    successTitle: 'Request sent.',
    successBody: 'Thanks. I will reply with whether a sprint is the right next step.',
    emailLabel: 'Vertical AI sprint',
    fields: [
      {
        key: 'industry',
        label: 'Industry',
        placeholder: 'Fintech, banking, recruitment, education, payments…',
        type: 'text',
        required: true,
      },
      {
        key: 'workflow',
        label: 'Which workflow should ship first?',
        placeholder: 'Underwriting, onboarding, matching, tutoring, payouts…',
        type: 'textarea',
        required: true,
      },
      {
        key: 'timeline',
        label: 'When do you need this in production?',
        placeholder: 'e.g. 4 to 8 weeks, or a specific date',
        type: 'text',
        required: false,
      },
    ],
  },
  partnership: {
    title: 'Vertical AI partnership',
    subtitle: 'I architect and lead the industry-specific system that becomes how you grow: AI in production, with the roadmap to scale it.',
    submit: 'Discuss a partnership',
    successTitle: 'Request sent.',
    successBody: 'Thanks. I will reply if a partnership conversation makes sense.',
    emailLabel: 'Vertical AI partnership',
    fields: [
      {
        key: 'role',
        label: 'Your role',
        placeholder: 'Founder, operator, product lead…',
        type: 'text',
        required: false,
      },
      {
        key: 'industry',
        label: 'Industry',
        placeholder: 'Fintech, banking, recruitment, education, payments…',
        type: 'text',
        required: true,
      },
      {
        key: 'message',
        label: 'What should this system become?',
        placeholder: 'The operation you want AI to live inside, and the outcome you need at scale.',
        type: 'textarea',
        required: true,
      },
    ],
  },
  engagement: {
    title: 'Vertical AI engagement',
    subtitle: 'Tell me the industry, the workflow, and the outcome you need. I reply by email if it is a fit.',
    submit: 'Send inquiry',
    successTitle: 'Message sent.',
    successBody: "Thanks - I'll reply to your email as soon as I can.",
    emailLabel: 'Vertical AI engagement',
    fields: [
      {
        key: 'message',
        label: 'How can I help?',
        placeholder: 'Vertical, workflow, and what you need in production.',
        type: 'textarea',
        required: true,
      },
    ],
  },
}

export function isInquiryIntent(value: unknown): value is InquiryIntent {
  return typeof value === 'string' && (inquiryIntents as readonly string[]).includes(value)
}
