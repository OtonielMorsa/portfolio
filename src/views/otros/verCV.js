import { useParams } from "react-router-dom";
import "./../../App.css";

function VerCV() {
    const params = useParams();
    const cv = params.cvp
    console.log(params.cvp);
    return (
        <div className="pdfReader">
            <embed className="pdf" src={`/assets/${cv}`} type="application/pdf" width="100%" height="100%" />
        </div>
    );
  }
  
  export default VerCV;