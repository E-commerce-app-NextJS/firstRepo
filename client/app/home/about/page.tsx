import Contenair from "../Contenair"



function About() {
    

    return (
    <div>

<Contenair>

<section className="container mx-auto mt-8 p-8 bg-slate-200 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
            
            <div className="md:w-1/2 md:pr-8">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <p className="text-gray-600 mb-6">Welcome to Your Clothing Store, where fashion meets comfort. We are passionate
                    about providing you with the latest trends and high-quality clothing that suits your style.</p>

                <p className="text-gray-600 mb-6">At Your Clothing Store, we believe that everyone deserves to look and feel
                    their best. That's why we carefully curate our collections to offer a diverse range of styles for every
                    occasion.</p>

                <p className="text-gray-600 mb-6">Our mission is to make fashion accessible and enjoyable for everyone. Whether
                    you're looking for casual wear, work attire, or something for a special event, we've got you covered with
                    clothing that combines style and affordability.</p>

                <p className="text-gray-600 mb-6">We value our customers and strive to provide an excellent shopping experience.
                    Our team is dedicated to staying ahead of the fashion curve, ensuring that our collections are always
                    fresh and exciting.</p>

                <p className="text-gray-600 mb-6">Thank you for choosing Your Clothing Store. We look forward to helping you
                    express your unique style and make every day a fashion statement.</p>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-50" >
                <img src="https://images.business.com/app/uploads/2022/03/23031501/shopping_bernardbodo_getty-3.jpg" alt="About Us" className="w-full h-auto rounded-lg"/>
            </div>
        </div>
    </section>

        </Contenair>
        

    </div>
        
    )
}

export default About
