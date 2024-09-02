import { Link } from "react-router-dom";

const CoursePreview = ({ id, title, image, noOfCourses }) => {
    return (
        <div className="bg-white shadow-xl md:w-[300px] px-4 py-4 transition ease-out duration-700 hover:bg-primary hover:text-white">
            <Link to={`/courses/details/${id}`}>
                <img src={image} className="w-44 h-32 mx-auto" />
                <h1 className="text-center font-poppins text-lg my-6">{title}</h1>
                <p className="text-sm mt-8 font-poppins  text-center">10 courses</p>
            </Link>
        </div>
    )
}

export default CoursePreview