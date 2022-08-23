import { useState } from "react"

export default function DarkMode () {
    const [mode, setMode] = useState(false)
    const handleClick = () => {
        setMode(!mode)
    }
    return (
      <div className={`page ${mode && 'dark-mode'}`}>
        <button className='dark-mode-button' onClick={handleClick}>Dark Mode</button>
        <button className='light-mode-button' onClick={handleClick}>Light Mode</button>
      </div>
    )
  }