import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validationButtonForm);
  }

  validationButtonForm = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    let isTextValuesValid = false;
    let isNumberValuesLessThan90 = false;
    let isNumberValuesLessThan210 = false;
    let isNumberValuesNegative = false;

    if (cardName === '' || cardDescription === ''
     || cardImage === '' || cardRare === '') {
      isTextValuesValid = false;
    } else {
      isTextValuesValid = true;
    }
    const att1 = Number(cardAttr1);
    const att2 = Number(cardAttr2);
    const att3 = Number(cardAttr3);
    const attributeSumMax = 210;
    const attributeIndividualMax = 90;

    if ((att1 + att2 + att3) <= attributeSumMax) {
      isNumberValuesLessThan210 = true;
    } else {
      isNumberValuesLessThan210 = false;
    }
    if (att1 <= attributeIndividualMax
      && att2 <= attributeIndividualMax
      && att3 <= attributeIndividualMax) {
      isNumberValuesLessThan90 = true;
    } else {
      isNumberValuesLessThan90 = false;
    }
    if (att1 < 0 || att2 < 0 || att3 < 0) {
      isNumberValuesNegative = false;
    } else {
      isNumberValuesNegative = true;
    }

    this.setState(() => ({
      isSaveButtonDisabled: !(isNumberValuesNegative
        && isNumberValuesLessThan90
        && isNumberValuesLessThan210
        && isTextValuesValid),
    }));
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;
    const card = {
      name: cardName,
      description: cardDescription,
      atri1: cardAttr1,
      atri2: cardAttr2,
      atri3: cardAttr3,
      image: cardImage,
      raridade: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((estadoAnterior) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [...estadoAnterior.cardList, card],
    }));
  };

  removeCard = (cardName, trunfo) => {
    const { cardList } = this.state;
    const cardRemove = cardList.filter((CardCurrent) => CardCurrent !== cardName);
    if (trunfo) {
      this.setState({
        cardList: cardRemove,
        cardTrunfo: false,
      });
    } else {
      this.setState({
        cardList: cardRemove,
      });
    }
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      cardTrunfo,
      cardList } = this.state;
    return (
      <section>
        <h1>Tryunfo - One Piece </h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardList={ cardList }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {cardList.map((card) => (
          <div key={ card.name }>
            <Card
              key={ card.name }
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.atri1 }
              cardAttr2={ card.atri2 }
              cardAttr3={ card.atri3 }
              cardImage={ card.image }
              cardRare={ card.raridade }
              cardTrunfo={ card.trunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.removeCard(card, card.trunfo) }
            >
              Excluir
            </button>
          </div>))}
      </section>
    );
  }
}

export default App;
