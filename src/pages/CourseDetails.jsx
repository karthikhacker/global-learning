import { useParams } from "react-router-dom"
import { courseData } from "../data";

const CourseDetails = () => {
    const params = useParams();
    const data = courseData[params.id];
    console.log(data);
    return (
        <div className="mt-32 h-[100vh]">
            <div className="flex gap-x-4 md:w-[1000px] md:mx-auto px-2 py-2">
                <div className="md:flex-1">
                    <h2 className="font-poppins text-2xl font-semibold text-center">{data.title}</h2>
                    <h3 className="text-left mt-7 font-poppins font-medium">Course Overview</h3>
                    <p className="text-sm md:w-[65%] leading-6 mt-4">{data.overview}</p>
                    <div className="flex items-center mt-6 gap-x-6">
                        <h3 className="font-poppins text-gray-700  font-medium">Course Duration :</h3>
                        <p className="font-poppins text-sm font-semibold">40 Hrs</p>
                    </div>
                </div>
                <div className="text-center">
                    <img src={data.img} className="text-center" />
                </div>
            </div>
        </div>
    )
}

export default CourseDetails