import React from "react";
import './btn.css'
import { BiWorld } from "react-icons/bi";

export default function Card(props) {
    return (
        <div>
            <button type="submit" className="btn" onClick={()=>{location.pathname = 'prova'}}>{props.materia}</button>
        </div>

    );
}
