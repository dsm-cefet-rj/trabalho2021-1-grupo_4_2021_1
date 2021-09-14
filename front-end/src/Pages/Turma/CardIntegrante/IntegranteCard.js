import React from "react";
import './IntegranteCard.css';



export default function IntegranteCard(props) {

    const mostraAlunos = props.alunos.map((alunos) =>
        <li>{alunos}</li>)

    return (<>

        <div class="integrantes">


           
                <table className="professor">

                    <thead>
                        <tr>
                            <th>Professor</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {props.professor}
                        </tr>

                    </tbody>
                </table>
           
          
                <table className="alunos">


                    <tr>
                        <th>Alunos</th>
                    </tr>



                    <tr>
                        <td>{mostraAlunos}</td>
                    </tr>

                </table>
            </div>
        




    </>);


}