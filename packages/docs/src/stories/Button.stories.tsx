import type { StoryObj, Meta } from '@storybook/react'

import { Button, type ButtonProps } from '@anton-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
}

export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
}
