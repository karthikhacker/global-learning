import touchImage from '../assets/images/get_in_touch.jpg';
import TextInput from './TextInput';

const Modal = () => {
    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box md:max-w-3xl">
                <h3 className="text-md font-poppins text-primary">
                    Have queries? Talk to our expert. We are happy to help you 24/7!!
                </h3>
                <div className='flex gap-x-6 my-4'>
                    <div>
                        <img src={touchImage} className='md:w-[280px]' alt="touch" />
                    </div>
                    <form>
                        <div className='flex gap-x-2 my-6'>
                            <TextInput placeholder="Enter Name" />
                            <TextInput placeholder="Enter Name" />
                        </div>
                        <div className='w-full text-center my-6 items-center justify-center'>
                            <TextInput placeholder="Phone number" />
                        </div>
                        <div className='w-full text-center my-6 items-center justify-center'>
                            <TextInput placeholder="Enter message" />
                        </div>
                        <button className='w-full items-center bg-primary py-4 px-2 font-poppins rounded-3xl text-white'>
                            Submit Now
                        </button>
                    </form>

                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>

    )
}

export default Modal