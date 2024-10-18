import React from 'react'
import '../styles/header.css'
import Logo from '../assets/logo.svg'
import Search from '../assets/search.svg'

export default function Header() {
    return (
        <React.Fragment>
            <header className='w-full'>
                <div className='flex  px-40 py-10 align-center justify-evenly'>
                    <div id="logo-wrapper" className='flex'>
                        <img src={Logo} alt="Logo Digital College"className='size-10'/>
                        <h1 className='font-semibold text-[--primary] text-4xl'>Digital Store</h1>
                    </div>
                    <div className='bg-[--light-gray-3] w-80 flex items-center justify-between rounded p-2'>
                        <span>Tênis</span>
                        <img src={Search} alt="Busca por produto" className='size-6'/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}