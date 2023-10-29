import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Logo from './assets/png/logo.png';
import MapImg from './assets/svg/map.svg';
import WhatsAppImg from './assets/svg/whatsapp.svg';
import KebabImg from './assets/png/special_kebab.png';
import InstagramImg from './assets/svg/instagram.svg';
import FBImg from './assets/svg/facebook.svg';
import TwitterImg from './assets/svg/twitter.svg';
import WhatsappIcon from './assets/svg/whatsapp_icon.svg';
import TiktokImg from './assets/svg/tiktok.svg';
import SnapChatImg from './assets/svg/snapechat.svg';
function App() {
  const [count, setCount] = useState(0)
  const social_list = [
    {
      id: 1,
      name: 'instagram',
      link: '#',
      img: InstagramImg
    },
    {
      id: 2,
      name: 'facebook',
      link: '#',
      img: FBImg
    },
    {
      id: 3,
      name: 'twitter',
      link: '#',
      img: TwitterImg
    },
    {
      id: 4,
      name: 'whatsapp',
      link: '#',
      img: WhatsappIcon
    },
    {
      id: 5,
      name: 'tiktok',
      link: '#',
      img: TiktokImg
    },
    {
      id: 5,
      name: 'snapchat',
      link: '#',
      img: SnapChatImg
    },
  ]
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
              <div className="box box_4">
                <button className="order_btn">
                  Order Now
                </button>
              </div>

              <div className="box box_5">
                <ul className="social_list">
                  <li>
                    <h4>
                      Follow Us
                    </h4>
                  </li>

                  {
                    social_list.map(v => {
                      return (
                        <li key={v.id}>
                          <a href={v.link}>
                            <img src={v.img} alt={v.name} />
                          </a>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
