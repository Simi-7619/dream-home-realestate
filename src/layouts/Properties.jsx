import { useLoaderData } from "react-router-dom";
import Property from "./Property";


const Properties = () => {
    const properties = useLoaderData()
    console.log(properties)
    return (
        <div className="my-12 xl:w-[1400px] xl:mx-auto mx-10">
            <div className="animate__animated animate__slideInDown">
                <p className="text-logoGreen font-bold text-center text-base">Most Demanding</p>
                <h1 className=" text-4xl font-semibold md:text-5xl text-center">Featured <span className="text-logoGreen">Properties</span></h1>
                <p className="px-8 mt-8 mb-12 text-lg text-center lg:w-1/2 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    properties.map(property => <Property key={property.id} property={property} />)
                }
            </div>
        </div>
    );
};

export default Properties;