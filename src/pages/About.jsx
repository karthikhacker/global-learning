import aboutImage from '../assets/images/about.jpg'

const About = () => {
    return (
        <div className="bg-white h-[100vh] mt-20 px-8">
            <div className="w-full my-4">
                <h1 className="text-center text-2xl font-semibold font-sans ">About Us</h1>
            </div>
            <div className='md:flex md:gap-4 my-8'>
                <div className='md:basis-[50%] font-sans'>
                    <p className='font-medium mb-4 tracking-wide leading-8 text-gray-500'>
                        Indunil Technologies is parent company of Globallearning360.com, we are an experienced IT training company committed to equipping IT professionals with the skills and knowledge required to excel in their careers. We strive to deliver best-in-class training and development solutions tailored to cater to the unique needs of our learners. Our courses are carefully crafted by the team of our industry experts to keep pace with the ever-evolving demands of the IT industry.
                    </p>
                    <p className='font-medium mb-4 tracking-wide leading-8 text-gray-500'>

                        Our mission is to empower individuals and organisations to achieve their full potential through transformative training and expert consulting in the cloud and other niche technology domains. We strive to exceed client expectations, foster continuous growth, and create lasting impact. By delivering innovative solutions and personalised guidance, we are committed to being the catalyst for positive change and future success.
                    </p>
                    <p className='font-medium mb-4 tracking-wide leading-8 text-gray-500'>
                        We are passionate about empowering every student with the necessaryskills and knowledge by providing the ultimate technical training experience. Delivered in an environment that supports quality adoption & understanding. We successfully enable and deploy IT solutions across our valued customer ecosystems.
                    </p>
                </div>
                <div className=' md:basis-[50%]'>
                    <img src={aboutImage} className='rounded-md mt-2' alt="image-about" />
                </div>
            </div>
        </div>
    )
}

export default About