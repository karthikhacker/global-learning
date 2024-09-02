import CoursePreview from "../components/CoursePreview"
import { courseData } from "../data"


const Courses = () => {
    return (
        <div className='md:h-full bg-blue-50 pt-36 px-10 py-10'>
            <div className="md:w-[900px] md:mx-auto md:grid grid-cols-3 md:gap-x-20 md:gap-y-10">
                {courseData.map(item => (
                    <CoursePreview
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.img}

                    />
                ))}
            </div>
        </div>
    )
}

export default Courses