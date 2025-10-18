import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextArea, type TextAreaProps } from '@anton-ui/react'

const meta: Meta<TextAreaProps> = {
  title: 'Typography/Text Area',
  component: TextArea,
  decorators: [(Story) => (
    <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">
        Observations
      </Text>
      {Story()}
    </Box>
  )],
}

export default meta

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
