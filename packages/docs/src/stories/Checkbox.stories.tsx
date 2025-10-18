import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox, type CheckboxProps } from '@anton-ui/react'

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [(Story) => (
    <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
      {Story()}
      <Text size="sm">
        Accept terms of use
      </Text>
    </Box>
  )],
}

export default meta

export const Primary: StoryObj<CheckboxProps> = {
}
