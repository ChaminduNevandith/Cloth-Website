import {Link} from 'react-router-dom';
import img1 from '../../assets/Aboutu.webp'
import img2 from '../../assets/Aboutus2.webp'
import img3 from '../../assets/kelly256.jpg'


function AboutUs() {
    return ( 
        <section>
        
            <div className="relative mb-10">
                <img src={img3} alt="" className="md:w-full md:h-auto w-auto h-[250px] brightness-50" />
                <p className="absolute inset-x-0 text-xl font-bold text-center text-white transform -translate-y-1/2 top-1/2">ABOUT US</p>
                <p className="absolute inset-x-0 text-sm text-center text-white mt-4 transform -translate-y-1/2 top-[55%]">Feel Gorgeous. Love. Kelly Felder.</p>
            </div>


            <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="md:w-[600px] md:h-[500px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img
                        className="object-cover transition-transform duration-300 ease-in-out transform shadow-md md:ml-52 hover:scale-110 mb-7"
                        src={img1}
                        alt="Placeholder"
                    />
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-20 md:text-left md:ml-20">
                    <h2 className="mb-3 text-xl font-bold text-center">OUR BRAND</h2>
                    
                    <p className="text-sm text-center">
                        We are on a mission of empowering women, around the world by giving them confidence in their own sense of fashion and 
                        style. Kelly Felder is a bold and progressive fashion brand inspired by realistic aims and objectives. Our designs and 
                        styles are inspired by our customers, diverse cultures and positive global influences. creating a brand which encompasses 
                        everything it means to be a woman on the go, in the dynamic the world today
                    </p>
                    <Link
                        className='flex items-center justify-center w-32 h-8 mx-auto mt-10 font-bold text-center text-white bg-black hover:text-black hover:bg-white mb-7'
                        to='/'
                    >
                        EXPLORE
                    </Link>

                </div>
            </div>


            <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
                <div className="md:w-[600px] md:h-[500px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:ml-[-150px]">
                    <img
                        className="object-cover transition-transform duration-300 ease-in-out transform shadow-md md:ml-52 hover:scale-110 mb-7"
                        src={img2}
                        alt="Placeholder"
                    />
                </div>

                <div className="w-full text-center md:w-1/2 md:pl-20 md:text-left md:ml-[-50px]">
                    <h2 className="mb-3 text-xl font-bold text-center">OUR PRODUCT</h2>
                    <p className="text-sm text-center">
                        We create styles designed by our in-house talent which are made to equip millennial women with outfits to conquer all phases of life. 
                        We constantly provide our angels with new, alluring collections and styles in the form of ready-to-go outfits. Established in 2007, 
                        Kelly Felder has risen through the extremely competitive ranks in the Sri Lankan fashion industry to be the leading fashion brand 
                        in the Island that single handedly caters to any and all fashion related requirements of every woman.
                    </p>
                    <Link
                        className='flex items-center justify-center w-32 h-8 mx-auto mt-10 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                        to='/'
                    >
                        EXPLORE
                    </Link>
                </div>
                <br />
                <br />
            </div>
            <br />
            <br />
            
        </section>
     );
}

export default AboutUs;