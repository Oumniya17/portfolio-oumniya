import { render, screen } from '@testing-library/react'
import About from '../components/About/About'

test('renders about tag', () => {
  render(<About />)
  expect(screen.getByText('ABOUT ME')).toBeInTheDocument()
})

test('renders about title', () => {
  render(<About />)
  expect(screen.getByText('More about me')).toBeInTheDocument()
})

test('renders about cards', () => {
  render(<About />)
  expect(screen.getByText('Clean Code and scalable solutions')).toBeInTheDocument()
  expect(screen.getByText('Responsive design for all devices')).toBeInTheDocument()
  expect(screen.getByText('User experience is a priority')).toBeInTheDocument()
  expect(screen.getByText('Always learning and improving')).toBeInTheDocument()
})