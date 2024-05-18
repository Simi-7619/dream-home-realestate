import 'animate.css'

const Slider4 = () => {
    return (
        <section className="bg-sliderOne bg-cover bg-no-repeat dark:text-gray-800 h-screen flex items-center">
        <div className="animate__animated animate__slideInDown  container mx-auto flex flex-col justify-center items-center px-4 py-16 text-center md:py-32 md:px-5 lg:px-20 xl:max-w-3xl">
            <h1 className="text-4xl font-bold text-white leading-none md:leading-[60px] lg:leading-4xl md:text-5xl lg:text-6xl">We will help you find
                Your <span className="text-logoGreen">Dream</span> Home
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg text-white">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            <div className="flex flex-wrap justify-center">
                <a href="#_" className="relative rounded px-7 py-3 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Get Started</span>
                </a>
            </div>
        </div>
    </section>
    );
};

export default Slider4;