"use client"
import { Container } from 'react-bootstrap'
import Template from '@/Components/Date-Template'
import Aside from '@/Components/aside'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'



export default function DateTemplate() {
    const router = useRouter();
    const [cookies] = useCookies()
    useEffect(() => {
        // if (!cookies?.auth) {
        //     router.push('/sign-in');
        // }
    }, [cookies?.auth, router])

    return (
        <>
            <div className="main">
                <Aside />
                <main>
                    <Container>
                        <Template />
                    </Container>
                </main>
            </div>
        </>
    )
}
