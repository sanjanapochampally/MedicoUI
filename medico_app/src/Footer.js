import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white">
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998', color:"white", border:"1px solid white"}} href="https://www.facebook.com/" role="button"><i className="fab fa-facebook-f" /></a>
                            {/* Twitter */}
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee',color:"white", border:"1px solid white" }} href="https://twitter.com/" role="button"><i className="fab fa-twitter" /></a>
                            {/* Google */}
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39', color:"white", border:"1px solid white" }} href="https://www.google.com/" role="button"><i className="fab fa-google" /></a>
                            {/* Instagram */}
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac', color:"white", border:"1px solid white" }} href="https://www.instagram.com/" role="button"><i className="fab fa-instagram" /></a>
                            {/* Linkedin */}
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca', color:"white", border:"1px solid white" }} href="https://www.linkedin.com/" role="button"><i className="fab fa-linkedin-in" /></a>
                            {/* Github */}
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333', color:"white", border:"1px solid white" }} href="https://github.com/ZainShafi/Doctor-Appointment-Booking-v2" role="button"><i className="fab fa-github" /></a>
                        </section>
                        {/* Section: Social media */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2022 Copyright: Medic'O.com
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        );
    }
}

export default Footer;