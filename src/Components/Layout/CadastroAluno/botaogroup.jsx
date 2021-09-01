import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function SplitButton() {

    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Selecione uma opção">
                <Dropdown.Item  as="button"><div onClick={() => click()}>Salvar e sair</div></Dropdown.Item>
                <Dropdown.Item  as="button"><div onClick={() => click()}>Salvar e continuar</div></Dropdown.Item>
            </DropdownButton>
        </>
    );
}

function click(){
        alert("Chamou")
}