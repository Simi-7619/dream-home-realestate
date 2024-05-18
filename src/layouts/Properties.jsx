import { useLoaderData } from "react-router-dom";
import Property from "./Property";

const Properties = () => {
    const properties = useLoaderData()
    return (
        <div className="my-12">
            <h1 className=" text-4xl font-semibold md:text-5xl text-center">Featured <span className="text-logoGreen">Properties</span></h1>
            <p className="px-8 mt-8 mb-12 text-lg text-center w-1/2 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            <div>
                {
                    properties.map(property=><Property key={property.id} property={property}/>)
                }
            </div>
        </div>
    );
};

export default Properties;