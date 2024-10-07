const FloatingFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[120px] lg:h-[158px] flex items-center justify-center">
            <div className="relative w-[90%] xl:w-[1152px] h-full flex items-center justify-center pb-4 overflow-hidden">
                
               
                <img 
                    src="/images/footer/footer3.png" 
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0" 
                    alt="Footer Background" 
                />
                
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                    <h1 className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white">
                        Shaping Tomorrow's Competencies <span className="text-[#4AB371]">In Organizations & Teams</span>
                    </h1>

                    
                    <div className="flex space-x-4 mt-4">
                        <button className="sm:w-[180px] w-[150px] sm:h-[50px] h-[40px] rounded-lg bg-[#4AB371] text-white text-md hover:bg-[#3a8e5f]">
                            Join Community
                        </button>
                        <button className="sm:w-[180px] w-[150px] sm:h-[50px] h-[40px] rounded-lg bg-white text-blue-600 text-md hover:bg-gray-200">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FloatingFooter;
