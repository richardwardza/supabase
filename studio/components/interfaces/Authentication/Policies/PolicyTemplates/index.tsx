import { Button } from '@supabase/ui'
import { FC, useState } from 'react'
import { isEmpty } from 'lodash'

import TemplatesList from './TemplatesList'
import TemplatePreview from './TemplatePreview'
import { PolicyTemplate } from './PolicyTemplates.constants'
import { PolicyRoles } from '../PolicyEditor'
import PolicyResources from '../PolicyResources'

interface Props {
  templates: PolicyTemplate[]
  templatesNote: string
  onUseTemplate: (template: PolicyTemplate) => void
}

const PolicyTemplates: FC<Props> = ({
  templates = [],
  templatesNote = '',
  onUseTemplate = () => {},
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0])
  return (
    <div>
      <div className="dark:border-dark flex justify-between border-t">
        <TemplatesList
          templatesNote={templatesNote}
          templates={templates}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <TemplatePreview selectedTemplate={selectedTemplate} />
      </div>
      <div className="dark:border-dark flex w-full items-center justify-between gap-3 border-t px-6 py-4">
        <PolicyResources policyLinkPrompt="Need help? Check out the Policy resources" />
        <div className="flex gap-2">
          <span className="text-scale-900 text-sm">
            This will override any existing code you've written
          </span>
          <Button
            type="primary"
            disabled={isEmpty(selectedTemplate)}
            onClick={() => onUseTemplate(selectedTemplate)}
          >
            Use this template
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PolicyTemplates
