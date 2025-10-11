import type { StoryObj, Meta } from '@storybook/react'

import { Heading, type HeadingProps } from '@anton-ui/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por Padrão, o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    }
  },
}
