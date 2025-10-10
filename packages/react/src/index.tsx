import { styled } from '@stitches/react'

const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$md',
  backgroundColor: '$ignite500',
})

export function App() {
  return <Button>Hello world</Button>
}
