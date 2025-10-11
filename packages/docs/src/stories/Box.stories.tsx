import type { StoryObj, Meta } from '@storybook/react'

import { Box, type BoxProps } from '@anton-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
}

export default meta

export const Primary: StoryObj<BoxProps> = {
}
