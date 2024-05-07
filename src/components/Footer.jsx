import logo from "../../public/logo_aiem.png"
import logo1 from "../../public/aiem_assets/BalcomB.png"
import { FaYoutube ,FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin ,FaGlobe} from "react-icons/fa";


const Footer = () => {
    return ( 
        

<footer class="bg-[#139bcd] shadow  font-custom1 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.aiem.ma/" class="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="w-20" alt="Flowbite Logo" />
                <img src={logo1} class="w-40" alt="Flowbite Logo" />
                
            </a>
            <ul class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium  sm:mb-0 text-white font-custom1">
                <li>
                    <a href="https://www.aiem.ma/" target="_blank" ><FaGlobe  className="text-3xl mx-5 mt-3 hover:text-gray-200" /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/AIEMOfficiel" target="_blank" ><FaSquareFacebook className="text-3xl mx-5 mt-3 hover:text-gray-200" /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@aiemofficiel7470" target="_blank" ><FaYoutube className="text-3xl mx-5 mt-3 hover:text-gray-200" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/association-des-ing%C3%A9nieurs-de-l-ecole-mohammadia/" target="_blank" > <FaLinkedin className="text-3xl mx-5 mt-3 hover:text-gray-200" /></a>
                </li>
               
                
            </ul>
        </div>
        <hr class="my-6  sm:mx-auto lg:my-8" />
        <span class="block text-sm  sm:text-center text-white ">© 2024 <a target="_blank" href="https://www.linkedin.com" class="hover:underline">Reda™</a>. All Rights Reserved.</span>
    </div>
</footer>


     );
}
 
export default Footer;