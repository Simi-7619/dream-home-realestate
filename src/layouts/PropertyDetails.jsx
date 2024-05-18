import { Link, useLoaderData, useParams } from "react-router-dom";
import PropertyBanner from "./PropertyBanner";
import { MdOutlineZoomInMap } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtubBold } from "react-icons/pi";
import { IoMdCall } from "react-icons/io";

const PropertyDetails = () => {
    const properties = useLoaderData()
    const { id } = useParams()
    const property = properties.find(property => property.id === id)
    console.log(property)

    const { estate_title, price, location, facilities, bath, bed, area, status, description } = property
    return (
        <div>
            <PropertyBanner />
            <div className="">
                <div className="my-12 xl:w-[1400px] xl:mx-auto mx-10 space-y-3">
                    <h1 className="text-2xl font-medium ">{estate_title} (<small>At</small> {location})</h1>
                    <div className="md:flex gap-8 py-4">
                        <div className="flex gap-1 items-center">
                            <MdOutlineZoomInMap className="text-4xl text-logoGreen" />
                            <p className="text-base font-semibold">{area} sqf</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <LuBedDouble className="text-4xl text-logoGreen" />
                            <p className="text-base font-semibold">{bed} beds</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <PiBathtubBold className="text-4xl text-logoGreen" />
                            <p className="text-base font-semibold">{bath} Baths</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {
                            facilities.map(facility => <p key={id} className="bg-green-50 font-semibold px-5 border border-green-200 py-2 rounded-3xl text-logoGreen">{facility}</p>)
                        }
                    </div>
                    <p className="lg:w-4/5">{description}</p>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold text-center text-white bg-logoGreen py-3">At a glance</h2>
                    <div className=" my-12 xl:w-[1400px] xl:mx-auto mx-10 ">
                        <div className="space-y-3 flex gap-12 justify-center">
                            <div className="flex gap-4 items-center">
                                <p><b>Area: </b></p>
                                <p className="bg-green-50 font-semibold px-5 border border-green-200 py-2 rounded-3xl text-logoGreen">{area} Square fit</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <p><b>Location: </b></p>
                                <p className="bg-green-50 font-semibold px-5 border border-green-200 py-2 rounded-3xl text-logoGreen">{location}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <p><b>Total Cost: </b></p>
                                <p className="bg-green-50 font-semibold px-5 border border-green-200 py-2 rounded-3xl text-logoGreen">{price}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <p><b>Property for: </b></p>
                                <p className="bg-green-50 font-semibold px-5 border border-green-200 py-2 rounded-3xl text-logoGreen">{status}</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="text-center my-12">
                                <p className="mb-3 text-xl font-medium">Interested? Lets have it</p>
                                <div className="flex gap-5 justify-center">
                                    <Link to={`/`}>
                                        <button className="rounded-2xl px-4 py-2 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                            <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                            <span className="relative">Book Now</span>
                                        </button>
                                    </Link>
                                    <Link to="/">
                                        <button className="rounded-2xl px-4 py-2 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                            <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                            <span className="relative">Visit More</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default PropertyDetails;