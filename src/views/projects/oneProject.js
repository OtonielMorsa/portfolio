import { Carousel } from "react-bootstrap";

export default function Proyecto({ project, idSeccion, id }) {
  let rowCol = "";
  const imagenes = project.imagenes;
  project.dispositivo === "PC"
    ? (rowCol = "col-lg-12 ms-auto")
    : (rowCol = "col-lg-6 ms-auto");

  const InfoProyecto = (
    <div className={rowCol}>
      <h1 className="page-section-heading text-center text-white">
        {project.titulo}{" "}
        <span className="txtLenguaje">({project.lenguajes})</span>
      </h1>
      <br />
      <p className="lead">
        {project.descripcion}
        <span>
          {project.partner ? (
            <>
              Desarrollado con:{" "}
              <a href={project.partner[1]}>{`${project.partner[0]}`}</a>{" "}
            </>
          ) : (
            ""
          )}
        </span>
      </p>
      <br />
      <h2 className="detalles">
        {project["materia/curso"] ? (
          <>
            {idSeccion === "4" ? "Curso realizado: " : "Materia escolar: "}
            <a href={project["materia/curso"][1]} className="txtLenguaje">
              {project["materia/curso"][0]}
            </a>
          </>
        ) : (
          <></>
        )}
      </h2>
      <br />
      <h2 className="detalles">
        {project.fechaRealizado ? (
          <>
            Fecha de elaboración:{" "}
            <span className="txtLenguaje">{project.fechaRealizado}</span>
          </>
        ) : (
          <></>
        )}
      </h2>
    </div>
  );
  const CarruselImagenes = project.imagenes ? (
    <Carousel className={rowCol}>
      {imagenes.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="projectImage zoom" src={img} alt="First slide" />{" "}
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <div className={rowCol}>
        <iframe className="videos" title="video" src={project.videos}></iframe>
    </div>
  );
  return (
    <div className="row project">
      {id % 2 === 0 && project.dispositivo === "movil"
        ? CarruselImagenes
        : InfoProyecto}
      {id % 2 === 0 && project.dispositivo === "movil"
        ? InfoProyecto
        : CarruselImagenes}
    </div>
  );
}
