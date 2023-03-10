import Header from "./header";
import ProjectSection from "./projects";
import "./../../App.css";
import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <>
        <Header/>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Portafolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <ProjectSection id={0} imagen={"assets/img/portfolio/pc.png"} txtSeccion="Proyectos Web Escolares"/>
                    <ProjectSection id={1} imagen={"assets/img/portfolio/movil.png"} txtSeccion="Proyectos Movil Escolares"/>
                    <ProjectSection id={2} imagen={"assets/img/portfolio/iot.png"} txtSeccion="Proyectos IOT Escolares"/>
                    <ProjectSection id={3} imagen={"assets/img/portfolio/user.png"} txtSeccion="Proyectos Propios"/>
                    <ProjectSection id={4} imagen={"assets/img/portfolio/code.png"} txtSeccion="Cursos vistos"/>
                    <ProjectSection id={5} imagen={"assets/img/portfolio/other.png"} txtSeccion="Otras Habilidades"/>
                </div>
            </div>
        </section>
        <section className="about text-white mb-0" id="/#about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">Sobre mí</h2>
                <img className="col-lg-4 ms-auto miFoto" src="https://i.ibb.co/ZJMK8cC/miFoto.png" alt="..." />
                <div className="row">
                    <div className="col-lg-5 ms-auto"><p className="leadAbout">Nacido en San Luis Rio Colorado, Sonora, México en el año 1999. De nombre Luis Otoniel Morfin Samaniego. Gran aficionado de las tecnologías y como se pueden crear maravillas con solo 0s y 1s.</p></div>
                    <div className="col-lg-5 me-auto"><p className="leadAbout">Disfruto de mis ratos libres jugando videojuegos, trabajando en proyectos propios, con la música y mis instrumentos o viendo series</p></div>
                    <div className="col-lg-12 ms-auto text-center mt-4">
                        <NavLink to={"cv/cvEspanol.pdf"}  className="btn btn-xl btn-outline-light">
                        <i className="fa-regular fa-file"></i>{" "}
                            CV (Español)
                        </NavLink>
                        <NavLink to={"cv/cvEnglish.pdf"}  className="btn btn-xl btn-outline-light">
                        <i className="fa-regular fa-file"></i>{" "}
                            CV (English)
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    );
}