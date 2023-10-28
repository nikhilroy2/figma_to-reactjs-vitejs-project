import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Logo from './assets/png/logo.png';
import MapImg from './assets/svg/map.svg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container_wrapper">
        <header id="Header">
          <ul>
            <li>
              <a href="#" className='round_left_btn text-white'>
                <span>Call Us</span>
              </a>
            </li>
            <li>
              <a href="#" className='round_full_btn'>
                <img src={MapImg} className='w-[43px] h-[43px]' alt="" />
                 <span>Google Map</span> </a>
            </li>
            <li>
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                Order by WhatsApp
              </a>
            </li>
            <li>
              <a href="#">
                Order Online
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}

export default App
