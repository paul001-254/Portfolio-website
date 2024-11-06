import ProfilePic from '../assets/DP.jpg'

const hero = () => {
  return (
    <section className='text-white'>
        <div className="flex justify-around items-center p-10 space-x-10 lg:flex-row text-white ">
          <div className='lg:w-1/2'>
            <p className='text-slate-300 text-2x1 mb-5 '>Hi, </p>
            <h1 className='text-5xl font-bold mb-2'>I'm Paul Gathungu <br />Website designer</h1>
            <hr />
            <p className='mt-5 text-2xl text-slate-300 font-sans'>A dedicated website developer
             with a passion for creating impactful and inspiring projects.
             With a focus on user-centered design and responsive web development,
             i bring ideas to life through creativity, innovation, and precision.
             Here, you'll find a selection of my work that showcases my skills and commitment to excellence.
             Let's connect and explore how I can contribute to your next project!</p>
          </div>
          <div>
            <img src={ProfilePic} alt="" width={250} height={250} className=' rounded-full w-full border-8 border-white'/>
          </div>
        </div>
        <div className='text-left px-20'>
            <h1 className='text-3xl mt-10'>About me</h1>
                <p className='mt-5 mb-5 font-sans text-2x1 text-slate-300'>I'm a passionate and focused on delivering creative, high-quality solutions.  
                 <br />Explore my work below and let's create something remarkable together!</p>
            <button className='transition duration-700 ease-in-out bg-orange-500 drop-shadow px-6 py-2 text-white font-semibold rounded-full shadow-md hover:bg-red-900'>
                show more...
            </button>
        </div>
       
    </section>
  )
}

export default hero
