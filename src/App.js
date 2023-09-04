import axios from 'axios'
import {useEffect,useState} from 'react';
import './App.css';
import Card from './Card';


function App() {

  const [produtos, setProdutos] = useState([])

  useEffect (() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((resposta) => {
      setProdutos(resposta.data);
    });
  },[]);

    return (
        <div className='row'>
              {produtos.map((produto) => {
                return <div className='col-sm-3'>
                <Card
                  titulo={produto.title}
                  imagem={produto.image}
                  preco={produto.body}
                />    
                </div>    
              })}
          </div>

  );
  
}

export default App;
