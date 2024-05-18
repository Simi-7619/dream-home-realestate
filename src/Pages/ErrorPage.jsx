import errorImg from '../assets/404.gif'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Dream Home | Error</title>
            </Helmet>
            <div className='flex flex-col items-center'>
                <img src={errorImg} alt="" />
                <Link to='/'>
                    <p className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6
                 text-white hover:text-logoGreen bg-logoGreen border border-logoGreen rounded-lg shadow-md md:w-auto hover:bg-transparent focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-logoGreen">
                        Back to Home
                    </p>
                </Link>
            </div>
        </>
    );
};

export default ErrorPage;