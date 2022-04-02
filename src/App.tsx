import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/components/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <footer className='text-gray-600 body-font bg-gray-50'>
        <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <a className='flex font-extrabold text-6xl title-font items-center md:justify-start justify-center text-gray-900'>
              {' '}
              PWR.{' '}
            </a>
            <p className='mt-2 text-md text-gray-500'>
              {' '}
              Developing high-class eco-friendly technologies for the advancing
              society.{' '}
            </p>
          </div>
          <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4 text-lg'>
              <nav className='list-none mb-10'>
                <li className='py-1'>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Home
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/technology'
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Technology
                  </a>
                </li>
                <li className='py-1'>
                  <a
                    href='/specifications'
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Specifications
                  </a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4 text-lg'>
              <nav className='list-none mb-10'>
                <li className='py-1'>
                  <a href='/about' className='text-gray-600 hover:text-gray-800'>
                    About
                  </a>
                </li>
                <li className='py-1'>
                  <a href='/sources' className='text-gray-600 hover:text-gray-800'>
                    Sources
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className='bg-gray-100'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-500 text-sm text-center sm:text-left'>
              {' '}
              © 2021 PWR. Technologies{' '}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
