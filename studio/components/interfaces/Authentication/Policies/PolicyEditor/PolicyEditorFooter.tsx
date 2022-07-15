import { FC } from 'react'
import { Button } from '@supabase/ui'
import PolicyResources from '../PolicyResources'

interface Props {
  showTemplates: boolean
  onViewTemplates: () => void
  onReviewPolicy: () => void
}

const PolicyEditorFooter: FC<Props> = ({ showTemplates, onViewTemplates, onReviewPolicy }) => (
  <div className="dark:border-dark flex w-full justify-between px-6 py-4">
    <PolicyResources policyLinkPrompt="Need help? Check out the Policy resources" />
    <div className="flex gap-2">
      {showTemplates && (
        <Button type="default" onClick={onViewTemplates}>
          View templates
        </Button>
      )}
      <Button type="primary" onClick={onReviewPolicy}>
        Review
      </Button>
    </div>
  </div>
)

export default PolicyEditorFooter
