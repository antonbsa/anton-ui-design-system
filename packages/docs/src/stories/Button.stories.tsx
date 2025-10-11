import type { StoryObj, Meta } from '@storybook/react'

import { Button, type ButtonProps } from '@anton-ui/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
}

export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create account'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    )
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
