import video from '@/assets/videos/header-landing.mp4'
import Button from '@/components/elements/Button'

const Home = () => {
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
            <h3 className='text-xl font-medium text-white uppercase mt-2'>Competitive Esport Tournaments</h3>
            <div className="flex space-x-2 mt-10">
              <Button secondary>Register</Button>
              <Button outlined>Tournament Info</Button>
            </div>
          </div>
          <div className='mt-8 lg:mt-0 lg:pr-0'>
            <div className="w-full bg-black rounded-sm overflow-hidden">
                <video src={video} className="w-full" autoPlay muted loop></video>
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
      <div className='bg-neutral-900'>
        <div className='content h-screen'>
          <h1 className='text-4xl font-bold text-white'>
            Who Are We?
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
