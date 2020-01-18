import React from 'react';


export default class AddFilmesModal extends React.Component{
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div onClick={this.props.fecharModal} className="safe-area">
                <section className="addFilmesModal">
    
                </section>
            </div>
        );
    }
}