import computing from '../assets/images/computing.jpg'
import ai from '../assets/images/ai.jpg'
import iot from '../assets/images/iot.jpg'
import quantum from '../assets/images/quantum.jpg'
import data from '../assets/images/data.jpg'
import web from '../assets/images/web.jpg'
import robotics from '../assets/images/robotics.jpg'
import blockchain from '../assets/images/blockchain.jpg'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'

const Offer = () => {
    return (
        <div className="bg-blue-50 md:min-h-[450px] md:py-6">
            <h1 className='text-center md:py-4 font-poppins text-lg'>What we offer</h1>
            <div className='md:flex md:gap-x-10 md:my-6 md:w-[1000px] md:mx-auto '>
                <CourseCard
                    courseImage={robotics}
                    title="Robotic Process Automation"
                    duration="40 Hrs"

                />
                <CourseCard
                    courseImage={ai}
                    title="Artificial Language and Machine Learning "
                    duration="30 Hrs"
                />
                <CourseCard
                    courseImage={blockchain}
                    title="Blockchain"
                    duration="30 Hrs"
                />
            </div>
            <div className='text-center mt-8 pb-6'>
                <button className='bg-primary px-4 py-4 text-white justify-center items-center font-poppins rounded-md text-md transition ease-linear duration-500 hover:bg-blue-800'>
                    <Link to="/courses">
                        Browse More Courses
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Offer