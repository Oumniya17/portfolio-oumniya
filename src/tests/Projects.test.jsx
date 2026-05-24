import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects/Projects'

test('renders projects tag', () => {
  render(<Projects />)
  expect(screen.getByText('FEATURED PROJECTS')).toBeInTheDocument()
})

test('renders all project titles', () => {
  render(<Projects />)
  expect(screen.getByText('Moodify')).toBeInTheDocument()
  expect(screen.getByText('Mercado de Emociones')).toBeInTheDocument()
  expect(screen.getByText('Fury of Thor')).toBeInTheDocument()
})

test('renders github and demo links', () => {
  render(<Projects />)
  const githubLinks = screen.getAllByText('GitHub')
  const demoLinks = screen.getAllByText('Live Demo')
  expect(githubLinks).toHaveLength(3)
  expect(demoLinks).toHaveLength(3)
})