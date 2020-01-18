import React from 'react';

export default class CategoriasModal extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <nav className="CategoriasModal">
                <div className="modal-item">Quero Ver</div>
                <div className="modal-item">Já Vistos</div>

            </nav>
        );
    }
}
