export default function Header(){
    return(
        <header className="masthead text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5" src="https://i.ibb.co/nnrPLjb/morsa-Icon.png" alt="..." />
                    <h1 className="masthead-heading text-uppercase mb-0">Morsa Developer</h1>
                <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><p>Aspiraciones</p></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Web developer - Movil developer - Game Developer</p>
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light " href="/#contact">
                        Contacto
                    </a>
                </div>
        </header>
    );
}