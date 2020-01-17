import React from 'react';

export default class AddFilmeModal extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <nav className="AddFilmeModal">
                <div className="modal-item">Quero Ver</div>
                <div className="modal-item">Já Vistos</div>

            </nav>
        );
    }
}
