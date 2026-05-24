import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar/Navbar'

test('renders logo', () => {
  render(<Navbar />)
  expect(screen.getByText('<Oum.dev/>')).toBeInTheDocument()
})

test('renders nav links', () => {
  render(<Navbar />)
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('About')).toBeInTheDocument()
  expect(screen.getByText('Projects')).toBeInTheDocument()
  expect(screen.getByText('Skills')).toBeInTheDocument()
  expect(screen.getByText('Experience')).toBeInTheDocument()
  expect(screen.getByText('Contact')).toBeInTheDocument()
})

test('renders talk button', () => {
  render(<Navbar />)
  const button = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'button' &&
      element.className === 'talk-btn'
  })
  expect(button).toBeInTheDocument()
})