import Voluntarios from "../assets/images/voluntarios-panelao-solidario.jpeg"

function Hero () {
    return (
       <div>
            <section className=" z-10 -mt-21 relative md:z-0 md:mt-0 h-[100vh] overflow-hidden -mx-4">
                <img 
                    src={Voluntarios}
                    alt="Voluntários do Panelão Solidário"
                    className="w-full h-full block object-cover object-[40%_30%] md:object-[center_30%] "
                ></img>

                <div className="z-20 absolute inset-0 bg-image"></div>
            </section>
            
       </div> 
    )
}

export default Hero;