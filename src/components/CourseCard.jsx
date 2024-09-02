import { Link } from "react-router-dom"

const CourseCard = ({ title, courseImage, duration }) => {
    return (
        <div className="card bg-white  w-[300px] rounded-md shadow-xl cursor-pointer">
            <Link to="/courses" className="rounded-md">
                <figure>
                    <img
                        src={courseImage}
                        className="h-44 w-full  bg-cover"
                        alt="image"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="font-poppins text-lg font-semibold text-gray-500">{title}</h2>
                    <p>{duration}</p>

                </div>
            </Link>
        </div>
    )
}

export default CourseCard