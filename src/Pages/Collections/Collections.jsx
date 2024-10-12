import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import img1 from '../../assets/col1.webp'
import img2 from '../../assets/col2.webp'
import img3 from '../../assets/col3.webp'
import img4 from '../../assets/col4.webp'
import img5 from '../../assets/col5.webp'
import img6 from '../../assets/col6.webp'
import img7 from '../../assets/col7.webp'
import img8 from '../../assets/col8.webp'
import img9 from '../../assets/col9.webp'
import img10 from '../../assets/col10.webp'
import img11 from '../../assets/col11.webp'

function Collections() {

    return (  
        <section>
           
            <div className='m-20'>
                <div>
                    <p className='ml-16 text-2xl font-bold'>COLLECTIONS</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-10">
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img1} 
                                alt="LINEN" 
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/Kelly'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">KELLY FELDER</p>
                        <p className="text-sm text-center text-gray-600">732 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/Kelly'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                  
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img2} 
                                alt="LINEN" 
                            />
                            
                       
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/Redvers'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">REDVERS BULLER</p>
                        <p className="text-sm text-center text-gray-600">114 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/Redvers'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img3} 
                                alt="LINEN" 
                            />
                            
                        
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/scylla'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">SCYLLA ZELUS</p>
                        <p className="text-sm text-center text-gray-600">108 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/scylla'
                        >
                            SHOP NOW
                        </Link> 
                    </div>
                </div>



                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-10">
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img4} 
                                alt="LINEN" 
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/Evening'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">EVENING WEAR</p>
                        <p className="text-sm text-center text-gray-600">113 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/Evening'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                  
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img5} 
                                alt="LINEN" 
                            />
                            
                       
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/workwear'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">WORK WEAR</p>
                        <p className="text-sm text-center text-gray-600">172 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/workwear'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img6} 
                                alt="LINEN" 
                            />
                            
                        
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/Denim'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">DENIM</p>
                        <p className="text-sm text-center text-gray-600">43 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/Denim'
                        >
                            SHOP NOW
                        </Link> 
                    </div>
                </div>




                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-10">
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img7} 
                                alt="LINEN" 
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/Essential'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">ESSENTIALS</p>
                        <p className="text-sm text-center text-gray-600">111 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/Essential'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                  
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img8} 
                                alt="LINEN" 
                            />
                            
                       
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/linen'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">LINEN</p>
                        <p className="text-sm text-center text-gray-600">99 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/linen'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img9} 
                                alt="LINEN" 
                            />
                            
                        
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/over'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">OVERSIZED T-SHIRTS</p>
                        <p className="text-sm text-center text-gray-600">45 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/over'
                        >
                            SHOP NOW
                        </Link> 
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-10">
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img10} 
                                alt="LINEN" 
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/crop'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">CROP TOPS</p>
                        <p className="text-sm text-center text-gray-600">100 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/crop'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                  
                    <div className="relative w-[380px] h-[540px] bg-white flex flex-col items-center">
                        <div className="relative">
                            <img 
                                className="w-[380px] h-[380px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={img11} 
                                alt="LINEN" 
                            />
                            
                       
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <Link
                                    className='flex items-center justify-center w-10 h-10 transition-colors bg-gray-400 hover:bg-gray-200'
                                    to='/Dress'
                                >
                                    <FaPlus className="text-lg text-black" />
                                </Link>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-2xl font-bold text-center text-black cursor-pointer hover:underline">DRESSES</p>
                        <p className="text-sm text-center text-gray-600">325 products</p>
                        
                        <Link
                            className='flex items-center justify-center w-32 h-8 mx-auto mt-8 font-bold text-center text-white bg-black hover:text-black hover:bg-white'
                            to='/Dress'
                        >
                            SHOP NOW
                        </Link> 
                    </div>

                </div>
 
            </div>
            
            <br />
            <br />
       
        </section>
    );
}

export default Collections;