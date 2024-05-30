import React from "react";

import "./cart.css";

const CartPage = () => {
  return (

    <div className="cart cart-bg">
      {/* Lista de pedidos */}
      <div className="cart-list">
        <div className="cart-title">
          <h1>Carrinho de compras</h1>
        </div>
        <div>
          <div className="cart-price">
            <p>Preço</p>
          </div>
          <div>
            <ul>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
              <li>
                <img src="./" />
                <div className="list-items">
                  <p>Limpador de Aquários</p>
                  <p>Em estoque</p>
                  <div>
                    <button>Excluir</button>
                    <button>Salvar para mais tarde</button>
                    <button>Compartilhar</button>
                  </div>
                </div>
                <h2>R$ 34,99</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Subtotal */}
      <div className="cart-subtotal">
        <div>
          <h1>Subtotal(2 produtos): <span className="total">R$104,97</span></h1>
          <button>Fechar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
