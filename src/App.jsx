import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Logo from './assets/png/logo.png';
import MapImg from './assets/svg/map.svg';
import WhatsAppImg from './assets/svg/whatsapp.svg';
import KebabImg from './assets/png/special_kebab.png';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container_wrapper">
        <header id="Header">
          <ul className='flex items-center justify-between pt-[16px]'>
            <li>
              <a href="#" className='round_left_btn text-white'>
                <span>Call Us</span>
              </a>
            </li>
            <li>
              <a href="#" className='round_full_btn'>
                <img src={MapImg} className='w-[43px] h-[43px] mr-[0.86px]' alt="" />
                <span>Google Map</span> </a>
            </li>
            <li>
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </li>
            <li>
              <a href="#" className='round_full_btn'>
                <img className='w-[57.4px] h-[57.57px] mr-[7.79px]' src={WhatsAppImg} alt="" />
                <span className='leading-[74%] text-[28px]'>Order by <br /> WhatsApp</span>
              </a>
            </li>
            <li>
              <a href="#" className='round_right_btn'>
                <span>Order Online</span>
              </a>
            </li>
          </ul>
        </header>

        <main>
          <section className='hero_section'>
            <h2>مشاوي خاصه</h2>
            <h1 className=''>
              Special kebab
            </h1>
            <img src={KebabImg} alt="img" />
          </section>

          <section className="minor_shape_section">
            <div className="section_content">
              <div className="box box_1">
                <h2>
                  <span>Best Special kebab</span>
                  <span>أفضل الكباب الخاص</span>
                </h2>

              </div>
              <div className="box box_2">
                <p>
                  Our original principles since 1998 <br />
                  serving premium quality food, <br />
                  warm hospitality, a nice ambiance.
                </p>
              </div>
              <div className="box box_3">
                <p>
                  في مطعم نانو كباب نلتزم بتقديم أطباق شهي
                  <br />
                  ومميزة، وضيافة دافئة، وجو ممتع نتشاركه.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
