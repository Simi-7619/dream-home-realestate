import 'animate.css';

const About = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-center p-6 mx-auto lg:flex-row">
                <div className="flex items-center justify-center p-6">
                    <img src="https://i.ibb.co/6gb5KRr/download-33.png" alt="" className="w-full object-contain " />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-4 animate__animated animate__slideInRight">
                    <p className="text-logoGreen font-bold text-base">Our Story: Core Value</p>
                    <h1 className=" text-4xl font-semibold md:text-5xl ">Efficiency.Control.<br />
                        <span className="text-logoGreen">Transparency</span>
                    </h1>
                    <p className="my-6 mb-8 text-lg sm:mb-12">Towntor developed a platform for the Real Estate marketplace that allows buyers and sellers to
                        easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers.
                        Towntor is Real Estate Redefined.
                    </p>
                    <div className=" mt-12">
                        <a href="#_" className=" rounded px-7 py-3 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Learn More</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;