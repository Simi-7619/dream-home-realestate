import { LuBedDouble } from "react-icons/lu";
import { MdOutlineZoomInMap } from "react-icons/md";
import { PiBathtubBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Property = ({ property }) => {
    const { image, estate_title, price, location, facilities, bath, bed, area, status, id } = property
    AOS.init();

    return (
        <div className="border border-gray-100 rounded-2xl hover:shadow-md p-3" 
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="flex-grow space-y-5 ">
                <img src={image} alt="Property-Image" className="rounded-t-2xl" />
                <h3 className="text-xl font-semibold"><b>{estate_title}</b> at {location}</h3>
                <div className="md:flex gap-8 border-y py-4 border-gray-200">
                    <div className="flex gap-1 items-center">
                        <MdOutlineZoomInMap className="text-2XL text-logoGreen" />
                        <p className="text-base font-semibold">{area} sqf</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <LuBedDouble className="text-2xl text-logoGreen" />
                        <p className="text-base font-semibold">{bed} beds</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <PiBathtubBold className="text-2xl text-logoGreen" />
                        <p className="text-base font-semibold">{bath} Baths</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p><b>Price:</b> ${price}</p>
                    <p><b>Status:</b> ${status}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        facilities.map(facility => <p key={id} className="bg-green-50 font-semibold px-5 border border-green-200 py-2 rounded-3xl text-logoGreen">{facility}</p>)
                    }
                </div>
            </div>

            <Link to={`/${id}`}>
                <button className="mt-6 rounded-2xl px-4 py-2 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">View Property</span>
                </button>
            </Link>

        </div>
    );
};

export default Property;

