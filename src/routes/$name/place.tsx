import { createFileRoute } from '@tanstack/react-router'
import './place.css'
import { Header } from '../../components/Header'

export const Route = createFileRoute('/$name/place')({
  component: Place,
})

function Place() {
  return (
    <section>
      <Header />
      <h2>S</h2>
    </section>
  )
}
