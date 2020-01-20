import React from 'react';
import CategoriasModal from './CategoriasModal';


export default class Appbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }






    render() {
        return(
            <header className="Appbar">
                <span className="logo">ToDoFlix</span>
                    <nav className="row">
                        <button onClick={ this.props.changeCategoriaModal } className="button">
                            categorias
                            { this.props.renderModal() }
                        </button>
                        

                        <button onClick={this.props.changeAddFilmeModal} className="button">
                            Adicionar Filme
                        </button>
                        
                    </nav>

                    
            </header>
            
        );
    }
}

