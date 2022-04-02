import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/components/Home'
import Sources from '@/components/Sources'

const App = () => {
  return (
    <>
      <div className='fixed w-full z-50 bg-neutral-900'>
        <div className='flex justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white py-4'>
          <a href="/"><h3 className='text-lg font-bold'>Elite Esports</h3></a>
          <div className='hidden sm:flex'>
            <a href="https://discord.gg/FWGEX2b8" className='text-lg px-4'>Community</a>
            <a href="/sources" className='text-lg px-4'>Sources</a>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sources' element={<Sources />}></Route>
      </Routes>
      <footer className='text-white body-font bg-neutral-800'>
        <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <a className='flex font-extrabold text-6xl title-font items-center md:justify-start justify-center text-white'>
              Elite Esports
            </a>
            <p className='mt-2 text-md text-neutral-400'>Giving Gamers Money</p>
          </div>
          <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4 text-lg'>
              <nav className='list-none mb-10'>
                <li className='py-1'>
                  <a
                    href='/'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    Home
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/sources'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    Sources
                  </a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4 text-lg'>
              <nav className='list-none mb-10'>
                <li className='py-1'>
                  <a
                    href='https://discord.gg/FWGEX2b8'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    Discord
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='https://instagram.com'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    Instagram
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='https://twitter.com'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    Twitter
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='https://youtube.com'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    YouTube
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='https://tiktok.com'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    TikTok
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='https://twitch.tv'
                    className='text-neutral-400 hover:text-neutral-200'
                  >
                    Twitch
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className='bg-neutral-900'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-neutral-400 text-sm text-center sm:text-left'>
              {' '}
              © 2022 Elite Esports{' '}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
