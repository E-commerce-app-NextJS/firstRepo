import Contenair from "../Contenair"



function Contact() {
    

    return (
       <Contenair>
            <section className="container mx-auto mt-8 p-8 bg-slate-200 shadow-lg rounded-lg  " >
            <h1 className="text-3xl font-bold mb-6 flex item-center justify-center mb-50">Contact Us</h1>
            <p className="text-gray-600 mb-6">Feel free to get in touch with us! Whether you have questions about our products, need assistance with an order, or just want to say hello, we're here for you. You can reach us through the contact form below, drop us an email at [your@email.com], or give us a call at (555) 123-4567. Our dedicated team is committed to providing you with the best possible experience, and we look forward to hearing from you soon!</p>
    
          
            <form bg-slate-700 className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-600">Your Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md"/>
                </div>
    
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-600">Your Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md"/>
                </div>
    
                <div className="col-span-2 mb-4">
                    <label  className="block text-sm font-medium text-gray-600">Your Message</label>
                    <textarea id="message" name="message"  className="mt-1 p-2 w-full border rounded-md"></textarea>
                </div>
    
                <div className="col-span-2">
                    <button type="submit"
                        className="w-full bg-slate-700 text-white p-2 rounded-md hover:bg-slate-500 transition duration-300">Send
                        Message</button>
                </div>
            </form>
        </section>

       </Contenair>
        
    )
}

export default Contact