import React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import MyList from './components/MyList';
import capitao_img from './img/capitc3a3o-fantc3a1stico1.png';
import corra_img from './img/images1.png'
import AddFilmesModal from './components/AddFilmesModal';
import CategoriasModal from './components/CategoriasModal';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addfilmes_modal: false,
      filmes: [
        {
            id: 0,
            titulo: 'Capitão Fantástico',
            descricao: 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
            status: 'quero ver',
            img_path: capitao_img,
            nota: 5.0,
        },
        {
            id: 1,
            titulo: 'Corra!',
            descricao: 'Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente amigáveis da sua namorada.',
            status: 'quero ver',
            img_path: corra_img,
            nota: 2.0,
        },
        {
          id: 2,
          titulo: 'Era Uma Vez',
          descricao: 'Um garoto da favela que trabalha num quiosque de uma prestigiosa praia do Rio de Janeiro se apaixona pela filha de um milionário. Eles seguem o romance apesar das objeções do pai da menina.',
          status: 'ja vi',
          img_path: 'https://enquantoocioso.files.wordpress.com/2008/08/eraumavez.jpg',
          nota: 3.0,
        },
      ],

      categoria: undefined,

    }
  }



  clickChangeAddFilmeModal = () => {
    this.setState({
        add_filmes_modal: !this.state.add_filmes_modal
    })
  }

  abrirModal = () => {
    return(
        <AddFilmesModal
          filmes_cont={this.state.filmes.length}
          AddFilme={this.AddFilme}
          cancelar={this.clickChangeAddFilmeModal}
        />
    );
  }

  fecharModal = () => {
    return(
      false
    );
  }

  AddFilme = (n_filme) => {
    this.setState({
      filmes: this.state.filmes.concat(n_filme)
    });
  }

  changeCategoriaModal = () => {
    this.setState({
        categorias_modal: !this.state.categorias_modal
    })
  } 

  renderModal = () => {
    switch(this.state.categorias_modal){
        case true: return (
          <CategoriasModal
            mostrarNVistos={this.mostrarNVistos}
            mostrarJaVistos={this.mostrarJaVistos}
          />
        );
        case false: return;
    }
  }

  mostrarJaVistos = () => {
    this.setState({
      categoria: "ja vi"
    })
  }

  mostrarNVistos = () => {
    this.setState({
      categoria: "quero ver"
    })
  }


  render() {
    return (
      <div className="App">
        <body>
        { this.state.add_filmes_modal ? this.abrirModal() : this.fecharModal() }
        <Appbar
          renderModal={this.renderModal}
          changeCategoriaModal={this.changeCategoriaModal}
          changeAddFilmeModal={this.clickChangeAddFilmeModal}
        />

          <div className="capa"></div>
          <MyList categoria={this.state.categoria} filmes={this.state.filmes}/>

        </body>
      </div>
    );
  }

}

