import video from '@/assets/videos/header-landing.mp4'
import Button from '@/components/elements/Button'

import leagueLogo from '@/assets/images/league-logo.png'
import valorantLogo from '@/assets/images/valorant-logo.png'
import rocketLogo from '@/assets/images/rocket-logo.png'
import csgoLogo from '@/assets/images/csgo-logo.png'
import { arrayBuffer } from 'stream/consumers'

const Home = () => {
  const winnersTestimonials = [
    {
      name: 'Albert Sheng',
      subtitle: 'Won a Gaming PC',
      text: "As a new creator, winning a new computer from Elite Esports has helped me achieve my dreams. I can record and edit high-quality videos. Definitely can't wait to compete again.",
    },
    {
      name: 'Cody Moss',
      subtitle: 'Won $10,000 USD',
      text: "I can't believe my eyes when my team won. I finally have enough money to travel around the world, and I'm looking forward to the next tournament!",
    },
  ]
  return (
    <>
      <div className='bg-[#ce0037] grid-background relative'>
        <div className='lg:grid lg:grid-cols-2 !py-28 sm:!py-24 lg:!py-48 content'>
          <div>
            <h3 className='text-xl font-medium text-white'>Elite Esports</h3>
            <h1 className='text-5xl md:text-7xl font-bold text-white uppercase mt-2'>
              THE
              <br />
              HOME OF
              <br />
              CHAMPIONS
            </h1>
            <h3 className='text-xl font-medium text-white uppercase mt-2'>
              Competitive Esport Tournaments
            </h3>
            <div className='flex space-x-2 mt-10'>
              <Button secondary>Register</Button>
              <Button outlined>Tournament Info</Button>
            </div>
          </div>
          <div className='mt-8 lg:mt-0 lg:pr-0'>
            <div className='w-full'>
              <div className='rounded-t-xl overflow-hidden'>
                <video
                  src={video}
                  className='w-full'
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <div className='bg-neutral-900 text-neutral-500 rounded-b-xl flex items-center'>
                <div className='flex-auto flex items-center justify-evenly'>
                  <button
                    type='button'
                    className='hidden sm:block lg:hidden xl:block'
                    aria-label='Previous'
                  >
                    <svg width='24' height='24' fill='none'>
                      <path
                        d='m10 12 8-6v12l-8-6Z'
                        fill='currentColor'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M6 6v12'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                  <button type='button' aria-label='Rewind 10 seconds'>
                    <svg width='24' height='24' fill='none'>
                      <path
                        d='M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M5 5v3.111c0 .491.398.889.889.889H9'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                </div>
                <button
                  type='button'
                  className='bg-neutral-800 text-neutral-300 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-neutral-900/5 shadow-md flex items-center justify-center'
                  aria-label='Pause'
                >
                  <svg width='30' height='32' fill='currentColor'>
                    <rect x='6' y='4' width='4' height='24' rx='2' />
                    <rect x='20' y='4' width='4' height='24' rx='2' />
                  </svg>
                </button>
                <div className='flex-auto flex items-center justify-evenly'>
                  <button type='button' aria-label='Skip 10 seconds'>
                    <svg width='24' height='24' fill='none'>
                      <path
                        d='M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M19 5v3.111c0 .491-.398.889-.889.889H15'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='hidden sm:block lg:hidden xl:block'
                    aria-label='Next'
                  >
                    <svg width='24' height='24' fill='none'>
                      <path
                        d='M14 12 6 6v12l8-6Z'
                        fill='currentColor'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M18 6v12'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute w-full bottom-0 top-auto'>
          <svg
            className='w-full h-8 absolute bottom-0'
            x='0'
            y='0'
            viewBox='0 0 2560 100'
            preserveAspectRatio='none'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              className='fill-neutral-900'
              points='0,100 2560,100 0,0 0,0'
            ></polygon>
          </svg>
          <svg
            className='w-full h-8 absolute bottom-0'
            x='0'
            y='0'
            viewBox='0 0 2560 100'
            preserveAspectRatio='none'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              className='fill-neutral-900'
              points='2560,100 2560,0 0,100'
            ></polygon>
          </svg>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 content relative'>
        <div>
          <p className='absolute text-[#1b1b1b] z-0 whitespace-nowrap transform translate-y-[-4.5rem] translate-x-[-9rem] font-bold text-[7rem] uppercase'>
            Elite Esports //
          </p>
          <h1 className='relative text-4xl font-bold text-white'>
            We Are Elite Esports
          </h1>
          <p className='mt-8 text-neutral-400'>
            We bring together millions of passionate gamers globally to compete
            in a variety of games from League of Legends, Valorant,
            Counterstrike, Rocket League, and more. Gamers have the opportunity
            to utilize their skills and display complex teamwork and leadership.
          </p>
          <div className='grid grid-cols-2 mt-8 gap-4 sm:pr-32'>
            <div className='rounded-sm grid place-items-center p-4 bg-neutral-800'>
              <img
                src={leagueLogo}
                alt='League of Legends logo'
                className='w-full'
              />
            </div>
            <div className='rounded-sm grid place-items-center p-4 bg-neutral-800'>
              <img
                src={rocketLogo}
                alt='Rocket League logo'
                className='w-full'
              />
            </div>
            <div className='rounded-sm grid place-items-center p-4 bg-neutral-800'>
              <img src={valorantLogo} alt='Valorant logo' className='w-full' />
            </div>
            <div className='rounded-sm grid place-items-center p-4 bg-neutral-800'>
              <img
                src={csgoLogo}
                alt='CSGO logo'
                className='brightness-0 invert w-full'
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className='lg:grid lg:grid-cols-2 content'>
        <div>
          <p className='absolute text-[#1b1b1b] z-0 whitespace-nowrap transform translate-y-[-4.5rem] translate-x-[-9rem] font-bold text-[7rem] uppercase'>
            Fair //
          </p>
          <h1 className='relative text-4xl font-bold text-white'>
            Adaptive And Competitive Bracket System
          </h1>
        </div>
      </div>
      <div className='content'>
        <div>
          <p className='absolute text-[#1b1b1b] z-0 whitespace-nowrap transform translate-y-[-4.5rem] translate-x-[-9rem] font-bold text-[7rem] uppercase'>
            Rewarding //
          </p>
          <h1 className='relative text-4xl font-bold text-white'>
            We Give Out Real Prizes
          </h1>
          <p className='mt-8 text-neutral-400'>
            A tournament isn't one without its prizes. That's why we partnered
            with dozens of companies to bring you an opportunity to win cash
            prizes and gifts valued up to $20,000 USD. Check out what our
            winners say.
          </p>
          <div className='grid grid-cols-4 gap-4'>
            {winnersTestimonials.map((testimonial) => (
              <div className='testimonial-card'>
                <p>{testimonial.text}</p>
                <div>
                  <p className='mt-6 font-bold'>{testimonial.name}</p>
                  <p>{testimonial.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 content'>
        <div>
          <p className='absolute text-[#1b1b1b] z-0 whitespace-nowrap transform translate-y-[-4.5rem] translate-x-[-9rem] font-bold text-[7rem] uppercase'>
            Community //
          </p>
          <h1 className='relative text-4xl font-bold text-white'>
            Play With Popular Teams And Hundreds of Content Creators
          </h1>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 content'>
        <div>
          <p className='absolute text-[#1b1b1b] z-0 whitespace-nowrap transform translate-y-[-4.5rem] translate-x-[-9rem] font-bold text-[7rem] uppercase'>
            News //
          </p>
          <h1 className='relative text-4xl font-bold text-white'>
            News & Updates
          </h1>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 content'>
        <div>
          <p className='absolute text-[#1b1b1b] z-0 whitespace-nowrap transform translate-y-[-4.5rem] translate-x-[-9rem] font-bold text-[7rem] uppercase'>
            News //
          </p>
          <h1 className='relative text-4xl font-bold text-white'>
            Register. Play. Win. Sleep. Repeat.
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
