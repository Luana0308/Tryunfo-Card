import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="name-input">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            cols="10"
            rows="5"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          <select
            name=""
            id=""
            data-testid="rare-input"
          >
            Raridade
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
