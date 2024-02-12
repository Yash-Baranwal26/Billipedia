import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import India from './Component/India/India'
import United_Kingdom from './Component/United Kingdom/United_Kingdom'
import China from './Component/China/China'
import GautamAdani from './Component/India/GautamAdani'
import MukeshAmbani from './Component/India/MukeshAmbani'
import America from './Component/America/America'
import RatanTata from './Component/India/RatanTata'
import NR_NarayanMurthy from './Component/India/NR_NarayanMurthy'
import Azim_Premji from './Component/India/Azim_Premji'
import Elon_Musk from './Component/America/Elon_Musk'
import Jeff_Bezos from './Component/America/Jeff_Bezos'
import Warren_Buffet from './Component/America/Warren_Buffet'
import Jim_Ratcliffe from './Component/United Kingdom/Jim_Ratcliffe'
import Lakshmi_Mittal from './Component/United Kingdom/Lakshmi_Mittal'
import Jack_Ma from './Component/China/Jack_Ma'

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
        <Route path='/ratanTata' element={<RatanTata/>}/>
        <Route path='/nrMurthy' element={<NR_NarayanMurthy/>}/>
        <Route path='/azimPremji' element={<Azim_Premji/>}/>
        <Route path='/elonMusk' element={<Elon_Musk/>}/>
        <Route path='/jeffBezos' element={<Jeff_Bezos/>}/>
        <Route path='/warrenBuffet' element={<Warren_Buffet/>}/>
        <Route path='/jimRatcliffe' element={<Jim_Ratcliffe/>}/>
        <Route path='/laxmiMittal' element={<Lakshmi_Mittal/>}/>
        <Route path='/jackMa' element={<Jack_Ma/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

