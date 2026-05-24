import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact/Contact'

test('renders contact heading', () => {
  render(<Contact />)
  const heading = screen.getByRole('heading', { level: 2 })
  expect(heading).toBeInTheDocument()
})

test('renders form inputs', () => {
  render(<Contact />)
  expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument()
})

test('renders contact info', () => {
  render(<Contact />)
  expect(screen.getByText('oumniya.chah@gmail.com')).toBeInTheDocument()
  expect(screen.getByText('Seville, Spain')).toBeInTheDocument()
})

test('renders footer', () => {
  render(<Contact />)
  expect(screen.getByText('© 2026 Oumniya Chahidi. All rights reserved.')).toBeInTheDocument()
})