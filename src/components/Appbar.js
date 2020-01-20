import React from 'react';
import CategoriasModal from './CategoriasModal';
import AddFilmesModal from './AddFilmesModal';


export default class Appbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categorias_modal: true,
            add_filmes_modal: false,
        }
    }

    changeCategoriaModal = () => {
        this.setState({
            categorias_modal: !this.state.categorias_modal
        })
    }

    abrirMenu = () => {
        console.log('Abrir Menu')
        return(
            <CategoriasModal/>
        );
    }

    fecharMenu = () => {
        console.log('Fechar Menu')
        return(
            false
        );
    }




    // changeAddFilmeModal = () => {
    //     console.log('Change Modal');
    //     this.setState({
    //         add_filmes_modal: !this.state.add_filmes_modal
    //     })
    //     console.log(this.state.add_filmes_modal);
    // }

    // abrirModal = () => {
    //     return(
    //         <AddFilmesModal fecharModal={this.changeAddFilmeModal}/>
    //     );
    // }

    // fecharModal = () => {
    //     return(
    //         false
    //     );
    // }

    render() {
        return(
            <header className="Appbar">
                <span className="logo">ToDoFlix</span>
                {/* { this.state.add_filmes_modal ? this.abrirModal() : this.fecharModal() } */}
                    <nav className="row">
                        <button onClick={this.changeCategoriaModal} className="button">
                            categorias
                            { this.state.categorias_modal ? this.fecharMenu() : this.abrirMenu() }
                        </button>

                        <button onClick={this.props.changeAddFilmeModal} className="button">
                            Adicionar Filme
                        </button>
                        
                    </nav>

                    
            </header>
            
        );
    }
}

