import { Link } from 'react-router-dom'
import aboutImage from '../assets/images/aboutus_2.jpg'
import building from '../assets/images/building.png'
import smallImage from '../assets/images/small_image_1.png'

const AboutSection = () => {
    return (
        <div className="flex my-2  gap-10 h-[470px]">
            <div className=' md:basis-[40%]'>
                <img src={aboutImage} alt="About image" className='w-[380px] mx-auto' />
            </div>
            <div className=' md:basis-[60%]'>
                <h1 className='mt-8 text-left font-poppins text-lg font-semibold'>About Us</h1>
                <div className='my-2'>
                    <h1 className='text-lg font-poppins font-semibold'>EXPERIENCE AN IMMERSIVE LEARNING STYLE WITH US
                    </h1>
                    <p className='font-poppins font-light text-sm my-2'>
                        Come, step into the world of immersive learning, and unleash your full potential with our cutting-edge training programs. Join our collaborative learning environment and take your skills to new heights to spark your curiosity and transform your career.
                    </p>
                </div>
                <div className='my-2'>
                    <h2 className='text-center font-poppins font-semibold text-xl'>Customized Courses</h2>
                    <div className='my-4 md:flex gap-x-4 items-center'>
                        <img src={smallImage} />
                        <p className='font-poppins text-sm'>
                            Take your skills to the next level with customized courses with tailored learning meant to give you the competitive edge you need to succeed in your career.
                        </p>
                    </div>
                </div>
                <div className='my-2'>
                    <h2 className='text-center font-poppins font-semibold text-xl'>Exposure to Practical Skills
                    </h2>
                    <div className='my-4 md:flex gap-x-4 items-center'>
                        <img src={building} className='w-14' />
                        <p className='font-poppins text-sm'>
                            Gain the skills and experience you need to succeed in the real world with our practical, hands-on training approach. Get ahead in your career by using the tools that give you exposure to real-world situations and challenges.
                        </p>
                    </div>
                </div>
                <div className='w-full text-center'>
                    <button className='bg-primary text-white px-4 py-2 items-center justify-center text-center rounded-3xl transition ease delay-500 hover:bg-blue-800'>
                        <Link to="/about">Know About As</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AboutSection