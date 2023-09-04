import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ titulo, imagem, preco }) {

    return (
                <div className="card">
                    <img src= {imagem} className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{titulo}</h5>
                            <p class="card-text">R${preco}</p>
                            <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>

    );
}