// components/sections/About.jsx
const About = () => {
    return (
        <section id="about" className="py-24 bg-white px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1673310535178-7c6069f28917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1bGslMjBMaW5lbiUyMGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Fabric Manufacturing"
                        className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                    />
                 
                </div>

                <div>
                    <h2 className="text-3xl font-serif text-[#2C3E50] mb-6">ABOUT PAREKH LINEN

</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                       Parekh Linen is a trusted manufacturers and supplier of the high standard
quality of the Bedsheets and Linen, from lower range to higher range with
different TC at reasonable and low price range with best and premium quality,
with Quality Assurance and Quality Seal.
                    </p>
                
              
                </div>
            </div>
        </section>
    );
};

export default About;