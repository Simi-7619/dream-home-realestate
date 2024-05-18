import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '/logo.png'
const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-200 pt-10 ">
            <aside>
                <img src={logo} alt="" className="w-[100px]" />
                <p className="font-bold text-lg">Dream Home Realestate Industries Ltd.</p>
                <p>Providing reliable tech since 1992</p>
                <fieldset className="form-control w-80">
                    <p className="font-bold mb-2">Join Our Newsletter</p>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn bg-logoGreen text-white join-item">Subscribe</button>
                    </div>
                </fieldset>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 -mt-3">
                    <FaFacebook className="text-3xl font-bold text-logoGreen" />
                    <FaYoutube className="text-3xl font-bold text-logoGreen" />
                    <FaTwitter className="text-3xl font-bold text-logoGreen" />
                    <FaInstagram className="text-3xl font-bold text-logoGreen" />
                </div>
            </nav>
            <div className="bg-gray-300 w-full p-6">
            <p><small>Copyright © 2024 - All right reserved</small></p>

            </div>
        </footer>
    );
};

export default Footer;