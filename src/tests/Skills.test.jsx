import { render, screen } from '@testing-library/react'
import Skills from '../components/Skills/Skills'

test('renders skills tag', () => {
  render(<Skills />)
  expect(screen.getByText('TECHNOLOGIES & TOOLS')).toBeInTheDocument()
})

test('renders all skills', () => {
  render(<Skills />)
  expect(screen.getByText('HTML5')).toBeInTheDocument()
  expect(screen.getByText('CSS3')).toBeInTheDocument()
  expect(screen.getByText('JavaScript')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  expect(screen.getByText('Sass')).toBeInTheDocument()
  expect(screen.getByText('Git')).toBeInTheDocument()
  expect(screen.getByText('GitHub')).toBeInTheDocument()
  expect(screen.getByText('MySQL')).toBeInTheDocument()
  expect(screen.getByText('Figma')).toBeInTheDocument()
})