import React from 'react';

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

                        <button className="button">
                            Adicionar Filme
                        </button>

                    </nav>

                </nav>

            </header>
        );
    }
}

