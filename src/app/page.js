"use client"
import { Container } from 'react-bootstrap'
import Dashbord from '@/Components/dashbord'
import Aside from '@/Components/aside'

export default function Home() {
  return (
    <>
      <div className="main">
        <Aside />
        <main>
          <Container>
            <Dashbord />
          </Container>
        </main>
      </div>
    </>
  )
}
