import React from "react";
import './btn.css'
import { useHistory } from "react-router-dom";

export default function Card(props) {
    const history = useHistory();

    return (
        <div>
            <button type="submit" className="button" onClick={()=>{history.push(props.destino)}}>{props.materia}</button>
        </div>

    );
}
