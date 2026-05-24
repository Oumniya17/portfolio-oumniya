import { render, screen } from '@testing-library/react'
import Experience from '../components/Experience/Experience'

test('renders experience tag', () => {
  render(<Experience />)
  expect(screen.getByText('EXPERIENCE & EDUCATION')).toBeInTheDocument()
})

test('renders timeline items', () => {
  render(<Experience />)
  expect(screen.getByText('Front-End Intern at Scorizer')).toBeInTheDocument()
  expect(screen.getByText('Web Application Development (DAW)')).toBeInTheDocument()
  expect(screen.getByText('Personal Projects')).toBeInTheDocument()
})

test('renders download cv button', () => {
  render(<Experience />)
  expect(screen.getByText('Download CV ↓')).toBeInTheDocument()
})

test('renders what drives me cards', () => {
  render(<Experience />)
  expect(screen.getByText('Creativity')).toBeInTheDocument()
  expect(screen.getByText('Problem Solving')).toBeInTheDocument()
  expect(screen.getByText('Continuous Learning')).toBeInTheDocument()
  expect(screen.getByText('Making an Impact')).toBeInTheDocument()
})