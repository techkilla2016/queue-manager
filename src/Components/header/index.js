import Link from 'next/link'
import React from 'react'
import { IoArrowUndoSharp } from 'react-icons/io5'
const Header = ({ Heading, icon, isback }) => {
    return (
        <header>
            <div className="header">
                <div className="Heading d-flex align-items-center">
                    {
                        isback ? <Link href={isback} className='btn back-btn'><IoArrowUndoSharp /></Link> : ''
                    }
                    <strong className='px-3'>
                        <span>{icon}</span>
                        <span className='px-2'>{Heading}</span>
                    </strong>
                </div>
            </div>
        </header>
    )
}

export default Header
