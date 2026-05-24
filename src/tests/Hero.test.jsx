import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero/Hero'

test('renders hero title', () => {
  render(<Hero />)
  expect(screen.getByText('people love.')).toBeInTheDocument()
})

test('renders buttons', () => {
  render(<Hero />)
  expect(screen.getByText('View my work →')).toBeInTheDocument()
  expect(screen.getByText('Download CV ↓')).toBeInTheDocument()
})

test('renders availability card', () => {
  render(<Hero />)
  expect(screen.getByText('Currently')).toBeInTheDocument()
  expect(screen.getByText(/at Scorizer/i)).toBeInTheDocument()
})