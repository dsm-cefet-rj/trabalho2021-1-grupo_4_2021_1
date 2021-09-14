import React from "react";
import './IntegranteCard.css';



export default function IntegranteCard(props){




    return(<>

        <div class="integrantes">

            <table className="professor">

                <thead>
                    <tr>
                    <th>Professor</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{props.professor}</td>
                    </tr>

                </tbody>
            </table>

            <table className="alunos">

               
                <tr>
                <th>Alunos</th>
                </tr>
        

             
                <tr>
                    <td>{props.alunos}</td>   
                </tr>
            
            </table>
        </div>




    </>);


}