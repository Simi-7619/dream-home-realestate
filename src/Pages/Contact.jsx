import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
    return (
        <div className=" w-[90%] lg:w-4/5 xl:w-[1440px] mx-auto my-12">
            <div className='bg-green-50 rounded-2xl py-16 my-12'>
                <h1 className='text-3xl font-bold text-center'>Contact Us</h1>
            </div>
            <div className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 my-4 pb-4">Our contact page is your gateway to reaching out, whether you have a question, feedback, or just want to say hello! We value your input and are eager to assist you in any way we can. Dont hesitate to drop us a line through the form below or connect with us via email or phone. We look forward to hearing from you!</p>
                        <div className="space-y-4">
                            <p className="flex gap-2 items-center">
                                <IoLocation className="text-2xl text-logoGreen" />
                                <span className="text-lg">123 Main Street, Anytown, USA</span>
                            </p>
                            <p className="flex gap-2 items-center">
                                <IoMdCall className="text-2xl text-logoGreen" />
                                <span className="text-lg">123456789</span>
                            </p>
                            <p className="flex gap-2 items-center">
                                <FaEnvelope className="text-2xl text-logoGreen" />
                                <span className="text-lg">contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm border border-logoGreen p-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm border border-logoGreen p-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" placeholder="type here..." className="block w-full rounded-md border border-logoGreen p-2"></textarea>
                        </label>
                        <button className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-lg
                        text-white hover:text-logoGreen bg-logoGreen border border-logoGreen rounded-lg shadow-md md:w-auto hover:bg-transparent focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-[#252728]">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;