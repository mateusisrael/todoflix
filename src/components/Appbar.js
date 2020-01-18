import React from 'react';
import AddFilmeModal from './AddFilmeModal';


export default class Appbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
        }
    }

    changeModal = () => {
        console.log('Change Modal');
        this.setState({
            modal: !this.state.modal
        })
        console.log(this.state.modal);
    }

    abrirMenu = () => {
        console.log('Abrir Menu')

        return(
            <AddFilmeModal/>
        );
    }
    fecharMenu = () => {
        console.log('Fechar Menu')

        return(
            false
        );
    }

    render() {
        return(
            <header className="Appbar">
                <span className="logo">ToDoFlix</span>

                    <nav className="row">
                        <button onClick={this.changeModal} className="button">
                            categorias
                            { this.state.modal ? this.fecharMenu() : this.abrirMenu() }
                        </button>

                        <button className="button">
                            Adicionar Filme
                        </button>
                        
                    </nav>

                    
            </header>
            
        );
    }
}
