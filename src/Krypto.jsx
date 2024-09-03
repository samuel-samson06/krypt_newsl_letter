import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'

function Krypto() {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default Krypto
