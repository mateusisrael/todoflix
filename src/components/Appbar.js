import React from 'react';
import AddFilmeModal from './components/AddFilmeModal';


export default class Appbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <header className="Appbar">
                <span class="logo">ToDoFlix</span>

                <nav>
                    <nav>
                        <button className="button">
                            categorias
                        </button>

                        <div className="button">
                            Adicionar Filme
                            <AddFilmeModal/>
                        </div>

                    </nav>

                </nav>

            </header>
        );
    }
}

