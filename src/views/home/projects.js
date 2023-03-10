import { NavLink } from "react-router-dom";

export default function ProjectSection({imagen, txtSeccion, id}){
    return( 
        <NavLink to={`/${id}`} className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <h3>{txtSeccion}</h3>
                    </div>
                </div>
                <img className="img-fluid" src={imagen} alt="..." />
            </div>
        </NavLink>
    );
}