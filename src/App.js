import React, { useState } from 'react'
import India from './Component/India'
import America from './Component/America'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import United_Kingdom from './Component/United_Kingdom'
import China from './Component/China'
import GautamAdani from './Component/GautamAdani'
import MukeshAmbani from './Component/MukeshAmbani'

export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<India/>}/>
        <Route path='/america' element={<America/>}/>
        <Route path='/unitedKingdom' element={<United_Kingdom/>}/>
        <Route path='/china' element={<China/>}/>
        <Route path='/gautam_Adani' element={<GautamAdani/>}/>
        <Route path='/mukeshAmbani' element={<MukeshAmbani/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

