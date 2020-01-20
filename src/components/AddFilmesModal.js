import React from 'react';
import claquete from '../img/claquete.svg';


export default class AddFilmesModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            novo_filme: {
                id: 4,
                titulo: 'Era Uma Vez',
                descricao: 'Um garoto da favela que trabalha num quiosque de uma prestigiosa praia do Rio de Janeiro se apaixona pela filha de um milionário. Eles seguem o romance apesar das objeções do pai da menina.',
                status: 'Já Vi',
                img_path: 'https://enquantoocioso.files.wordpress.com/2008/08/eraumavez.jpg',
                nota: 2.0,
            },
        }
    }

    clickAddFilme = (event) => {
        event.preventDefault();
        this.props.AddFilme(this.state.novo_filme);
    }

    clickCancelar = (event) => {
        event.preventDefault();
        this.props.cancelar();
    }



    render() {
        return(
            <div className="overlay">
                <section className="addFilmesModal">
                    <div class="modal-padding row">
                        <figure class="claquete">
                            <img src={claquete} alt="claquete"></img>
                        </figure>
                        <section className="add-filmes-section">
                            <h1>Adicionar novo Filme:</h1>
                            <form className="adicionar-filme-form">
                                <label>Nome:</label>
                                <input type="text" name="nome"></input>

                                <label>Descrição:</label>
                                <input type="text" name="descricao"></input>

                                <label>Status:</label>
                                <input type="text" name="status"></input>

                                <label>Imagem de exibição</label>
                                <div class="form-select-img">
                                    <input type="text" name="img_path"></input>
                                    <button className="form-button">Adicionar Imagem</button>
                                </div>

                                <label>Nota:</label>
                                <div>

                                </div>

                                <div className="botoes-form-cont">
                                    <button onClick={this.clickCancelar} className="unfocus-button">cancelar</button>
                                    <button onClick={this.clickAddFilme} className="form-button">feito</button>
                                </div>

                            </form>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}