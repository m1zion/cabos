const Footer = () =>{
    return (
        <footer className="bg-gray-900 text-white px-6 py-10 mt-16 w-[100%]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Contact Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p>Email: info@cabos.com</p>
                    <p>Phone: +52 123 456 7890</p>
                    <p>Location: Cabo San Lucas, Mexico</p>
                </div>
                {/* Info Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Information</h3>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                {/* Links Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <p>Tours</p>
                    <p>Experiences</p>
                    <p>Accomodation</p>
                </div>
            </div>
            <div className="text-center text-sm mt-10 text-gray-400">
                &copy; {new Date().getFullYear()} Cabos. All rights reserved.
            </div>
    </footer>
    )
}
export default Footer