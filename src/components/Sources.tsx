const Sources = () => {
  const images = [
    'https://unsplash.com',
    'https://materialdesignicons.com',
    'https://worldvectorlogo.com',
    'https://www.twitch.tv/spicalol',
    'https://www.twitch.tv/chintophat',
    'https://www.twitch.tv/keeoh',
  ]

  const documents = [
    'https://drive.google.com/file/d/1SGcdn0igU3i-_vJnjo9SwhkGeQr-rwtZ/view?usp=sharing',
  ]
  return (
    <>
      <div className='bg-[#ce0037] grid-background relative'>
        <div className='content'>
          <h1 className='text-5xl md:text-7xl font-bold text-white uppercase mt-2'>
            Sources
          </h1>
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

      <div className='content'>
        <h3 className='font-bold text-white text-4xl'>Resources</h3>
        <p className='text-neutral-400'>
          Resources were obtained from Unsplash, WorldVectorLogo, and Twitch and
          are royalty free and falls under fair use
        </p>
        <ul className='list-disc list-inside'>
          {images.map((image) => (
            <li className='text-neutral-400'>
              <a href={image}>{image}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='content'>
        <h3 className='font-bold text-white text-4xl'>Downloadable Documents</h3>
        <ul className='list-disc list-inside'>
          {documents.map((image) => (
            <li className='text-neutral-400'>
              <a href={image}>{image}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sources
