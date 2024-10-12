import { useState } from 'react'
import Currency from './components/Currency'
import './App.css'

function App() {

  return (
    <div style={{ display:'flex',flexDirection:'column', justifyItems:'center',alignItems:'center'}}>
      <Currency/>
    </div>
  )
}

export default App
