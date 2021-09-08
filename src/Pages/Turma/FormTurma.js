
import React, {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {addTurmaServer, updateTurmaServer, selectTurmasById} from './TurmasSlice'
import {turmaSchema} from './TurmaSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';


export default function FormTurma(props){

    const history = useHistory();
    const dispatch = useDispatch()
    let { id } = useParams();
    
    const turmaFound = useSelector(state => selectTurmasById(state, id))
    const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(turmaSchema)
        });
        

    const [turmaOnLoad] = useState(
        id ? turmaFound ?? turmaSchema.cast({}): turmaSchema.cast({}));

    const [actionType, ] = useState(
        id ? turmaFound 
                ? 'turmas/updateTurma'
                : 'turmas/addTurma'
                : 'turmas/addTurma');


    function onSubmit(turma){
        if(actionType === 'turmas/addTurma'){
            dispatch(addTurmaServer(turma));
        }else{
            dispatch(updateTurmaServer({...turma, id: turmaFound.id}));
        }
        
        history.push('/turmas');
    }
    let pageTitle;
    if(actionType === 'turmas/addTurma'){
        pageTitle = 'Novo Turma';
    }else{
        pageTitle = 'Alteração de Turma';
    }
    
    return(<>
            <h1>{pageTitle}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome:
                <input type="text" name="nome" id="nome"  defaultValue={turmaOnLoad.nome} ref={register} />
                &nbsp;<span id="nome_err_msg">{errors.nome?.message}</span>
            </label>
            <br/>
            <label>
                Sigla:
                <input type="text" name="sigla" id="sigla"  defaultValue={turmaOnLoad.sigla} ref={register} />
                &nbsp;<span id="sigla_err_msg">{errors.sigla?.message}</span>
            </label>
            <br/>
            <br/>   
            <Button type="submit" id="Salvar" name="btn_salvar_turma" variant="contained" color="primary">Salvar</Button>
            </form>
          </>
    );
}