import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, type TextInputProps } from '@anton-ui/react'

const meta: Meta<TextInputProps> = {
  title: 'Typography/Text Input',
  component: TextInput,
  decorators: [(Story) => (
    <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">
        E-mail address
      </Text>
      {Story()}
    </Box>
  )],
}

export default meta

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
