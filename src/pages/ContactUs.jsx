import contact from '../assets/images/contact.jpg'
import Swal from 'sweetalert2'

const ContactUs = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("access_key", "47ecc25e-a856-4005-8f41-c6bd45160177");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully !",
                icon: "success"
            });
            e.target.reset();
        } else {
            console.log("Error", data);
        }
    }
    return (
        <div className='md:h-[100vh] bg-blue-50 pt-24'>
            <div className='md:w-[900px] md:py-6 px-4 bg-white md:mx-auto md:flex md:gap-x-2'>
                <div className='flex-1'>
                    <h1 className='text-center my-4 font-poppins text-lg font-semibold'>Contact Us</h1>
                    <form className='text-center md:w-[280px] md:mx-auto' onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <input
                                className='input input-bordered input-sm w-full'
                                placeholder='Name'
                                name="name"
                                required="true"
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                className='input input-bordered input-sm w-full'
                                placeholder='Phone Number'
                                name="phoneNumber"
                                required="true"
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                className='input input-bordered input-sm w-full'
                                placeholder='Email Address'
                                name="email"
                                required="true"

                            />
                        </div>
                        <div className='mb-4'>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Your message" name='message' required="true"
                            ></textarea>

                        </div>
                        <button className='btn btn-primary  btn-sm w-full rounded-md'>Submit</button>
                    </form>
                </div>
                <div>
                    <img src={contact} className='w-80 rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs