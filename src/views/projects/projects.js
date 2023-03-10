import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proyecto from "./oneProject";
import projectJson from './proyectos.json';

export default function Project(){
    const params = useParams();
    const {id} = params;
    const [projects, setProjects] = useState([]);
    const [projectsResul, setProjectsResul] = useState([]);
    useEffect(()=>{
        setProjects(projectJson[id]);
        setProjectsResul(projectJson[id].projects);
    },[]);
    
    return(
        <section className="projectView text-white mb-0">
            <div className="container">
                <h1 className="page-section-heading text-center text-uppercase text-white">{projects.titulo}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa-solid fa-user"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {
                    projectsResul.map((project, index) => <Proyecto key={index} id={index+1} project={project} idSeccion={id}/>)
                }
            </div>
        </section>
    );
}



