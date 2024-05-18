import { FaFileCircleQuestion } from "react-icons/fa6";

const Faq = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 my-12">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="text-logoGreen font-bold text-center text-base">How it Works</p>
                <h1 className=" text-4xl font-semibold md:text-5xl text-center">FAQs</h1>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 mt-6 lg:px-12 xl:px-32">
                    <div className="space-y-3 border p-3 border-green-200">
                        <h3 className="font-semibold text-xl">What are the key steps involved in buying a single-family home?</h3>
                        <p className="mt-1 dark:text-gray-600">Buying a single-family home involves determining your budget, getting pre-approved for a mortgage,
                         finding a real estate agent, searching for homes that meet your criteria, making a competitive offer, conducting a home inspection to 
                         uncover any potential issues, and finalizing the purchase by closing with all necessary documents and ownership transfer.</p>
                    </div>
                    <div className="space-y-3 border p-3 border-green-200">
                        <h3 className="font-semibold  text-xl">How do I determine the right neighborhood for my family?</h3>
                        <p className="mt-1 dark:text-gray-600">To choose the right neighborhood, consider the quality of local schools, safety and crime rates,
                         proximity to amenities like parks and grocery stores, commute times to work or frequently visited places, and the overall community vibe
                          by visiting at different times to ensure it fits your lifestyle.</p>
                    </div>
                    <div className="space-y-3 border p-3 border-green-200">
                        <h3 className="font-semibold  text-xl">What should I look for during a home inspection?</h3>
                        <p className="mt-1 dark:text-gray-600">During a home inspection, focus on the structural integrity of the foundation, roof, and walls; 
                        ensure plumbing and electrical systems are up to code; check the HVAC system for efficient operation; look for signs of pest infestations;
                         and inspect for water damage or mold, as these can lead to costly repairs.</p>
                    </div>
                    <div className="space-y-3 border p-3 border-green-200">
                        <h3 className="font-semibold  text-xl">What are the common costs associated with buying a single-family home?</h3>
                        <p className="mt-1 dark:text-gray-600">Common costs include the down payment (typically 3% to 20% of the purchase price), closing costs
                         (2% to 5% of the loan amount), home inspection fees (around $300 to $500), property taxes based on the home's assessed value, homeowners
                          insurance required by lenders, and moving costs for services and supplies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;