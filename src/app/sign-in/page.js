"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
// export const metadata = {
//     title: 'Sign-in',
//     description: 'Generated by Techkilla',
// }
const Login = () => {
    const [isLoad, setIsLoad] = useState(false)
    const router = useRouter();
    const [cookies, setCookies] = useCookies()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    useEffect(() => {
        if (cookies?.auth) {
            router.push('/');
        }
    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        setIsLoad(true)
        event.preventDefault();
        try {
            const res = await axios.post(`https://techkilla-server.vercel.app/auth`, formData)
            if (res?.data?.status) {
                setCookies('auth', res?.data?.token)
                router.push('/');
            }
        } catch (error) {
            setIsLoad(false)
            console.log(error)
        }
    }
    return (
        <>
            <div className='sign-in-main'>
                <div className="main">
                    <form onSubmit={!isLoad ? handleSubmit : () => { }}>
                        <h3 className='text-center mb-4'>Login </h3>
                        <input type="text" className='form-control form-input my-3 py-2' name='username' value={formData?.username} onChange={handleChange} placeholder='username' />
                        <input type="text" className='form-control form-input my-3 py-2' name='password' value={formData?.password} onChange={handleChange} placeholder='password' />
                        <button className='btn btn-primary submit'>Submit</button>
                    </form>
                </div>
            </div>

            {
                isLoad ?
                    <div className="d-flex justify-content-center align-items-center loadder-wraper">
                        <div class="spinner-border text-light" style={{ width: '3rem', height: '3rem' }} role="status"> </div>
                    </div>
                    : ''
            }
        </>
    )
}

export default Login
