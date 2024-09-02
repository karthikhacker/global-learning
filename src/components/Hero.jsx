import hero_image from '../assets/images/hero.jpg';
import { animate, motion } from "framer-motion"
import Modal from './Modal';
const slideUp = (delay) => {
    return {
        initial: {
            y: '100%',
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay
            }
        }
    }
}
const Hero = () => {


    return (
        <div className=" md:flex   mt-36 bg-white  min-h-[300px]">
            <div className="font-poppins md:basis-[90%] px-24 items-center justify-end md:w-[500px]   ">
                <motion.h1 variants={slideUp(0.5)} initial="initial" whileInView="animate"
                    className="text-md font-poppins font-extrabold text-primary">EXCELLENCE IN EDUCATION</motion.h1>
                <motion.h1 variants={slideUp(1.3)} initial="initial" whileInView="animate" className="text-4xl font-poppins text-secondary mt-6">
                    Start Better Learning
                </motion.h1>
                <motion.h1 variants={slideUp(1.4)} initial="initial" whileInView="animate" className="text-4xl font-poppins text-secondary mt-2 mb-4">
                    Future From Here
                </motion.h1>
                <motion.p variants={slideUp(1.5)} initial="initial" whileInView="animate" className="w-[300px] font-poppins text-secondary mt-10 font-normal text-md tracking-wide leading-6">
                    We are a one-stop solution for all your needs that in fact we never find the termination stop. Stop searching, enjoy the process.
                </motion.p>
                <button className="bg-primary text-white px-2 py-2 font-poppins text-md rounded-md my-4" onClick={() => document.getElementById('my_modal_4').showModal()}>
                    Get started
                </button>
                <Modal />
            </div>
            <div className='basis-[40%]'>
                <div>
                    <motion.img
                        initial={{ opacity: 0, x: 0, y: 80 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.3 }}
                        src={hero_image} alt="hero_image" className='w-[100%] h-[380px]'
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero