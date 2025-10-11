import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, type BoxProps } from '@anton-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
}

export default meta

export const Primary: StoryObj<BoxProps> = {
}
