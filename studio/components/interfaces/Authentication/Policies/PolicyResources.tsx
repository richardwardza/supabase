import { FC } from 'react'

interface Props {
  policyLinkPrompt: string
}

const PolicySelection: FC<Props> = ({
  policyLinkPrompt = '',
}) => {
  return (
    
        <p className="text-scale-1100 text-sm">
          {policyLinkPrompt}{' '}
          <a
            target="_blank"
            className="text-brand-900 hover:text-brand-1200 transition-colors"
            href="https://supabase.com/docs/guides/auth#policies"
          >
            here
          </a>
          .
        </p>
  )
}

export default PolicySelection
