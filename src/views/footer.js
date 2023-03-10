import "./../App.css";

export default function Footer(){
    return(
        <footer className="footer text-center" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mb-5 mb-lg-0 row">
                        <h4 className="text-uppercase mb-4">Contacto</h4>
                        <p className="col-lg-12 ms-auto lead"  >
                            <a href="https://www.facebook.com/profile.php?id=100090156397571"><i className="fa-brands fa-facebook"></i></a>
                             {" "}Otro Morsa
                        </p>
                        <p className="col-lg-12 ms-auto lead"  >
                            <a href="/"><i className="fa-solid fa-envelope"></i></a>
                            {" "}otoniel.morsa@gmail.com
                        </p>  
                        <p className="col-lg-12 ms-auto lead"  >
                            <a href="https://www.linkedin.com/in/otoniel-morfin-samaniego-969579269"><i className="fa-brands fa-linkedin"></i></a>
                            {" "}www.linkedin.com/in/otoniel-morfin-samaniego-969579269
                        </p>  
                        <p className="col-lg-12 ms-auto lead"  >
                            <a href="/"><i className="fa-solid fa-phone"></i></a>
                            {" "}6531327840
                        </p>              
                    </div>
                    <div className="col-lg-3">
                        <h4 className="text-uppercase mb-4">Conocimientos</h4>
                        <p className="col-lg-12 ms-auto"  >
                            <a href="/"><i className="fa-solid fa-code"></i></a>
                            {" "}Flutter & Dart (Android & Windows)
                        </p> 
                        <p className="col-lg-12 ms-auto"  >
                            <a href="/"><i className="fa-solid fa-code"></i></a>
                            {" "}JQuery JavaScript
                        </p> 
                        <p className="col-lg-12 ms-auto"  >
                            <a href="/"><i className="fa-solid fa-code"></i></a>
                            {" "}React y React Native
                        </p> 
                        <p className="col-lg-12 ms-auto"  >
                            <a href="/"><i className="fa-solid fa-code"></i></a>
                            {" "}GodotScript
                        </p> 
                    </div>
                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Locación</h4>
                        <p className="mb-0">
                            San Luis Rio Colorado
                            <br />
                            Sonora México
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}