/* eslint-disable no-useless-constructor */
import React from 'react';

export default class CategoriasModal extends React.Component{

    constructor(props) {
        super(props);
    }

    mudarCategoria = (n_categoria) => {
        this.props.mudarCategoria(n_categoria);
    }

    render() {
        return(
            <nav className="CategoriasModal">
                <div onClick={this.props.mostrarNVistos} className="modal-item">Quero Ver</div>
                <div onClick={this.props.mostrarJaVistos} className="modal-item">Já Vistos</div>

            </nav>
        );
    }
}
