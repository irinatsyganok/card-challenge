import React, { Component } from 'react';
import Card from './components/Card';
import Title from './components/Title';

var App = React.createClass({

getInitialState() {
    return {
      pack : newDeck(),
      selectedCards: []
    }
  },
  selectCard: function(card) {
      const pack = [...this.state.pack];
      const selectedCards = [...this.state.selectedCards]
      selectedCards.push(card);

      let index = pack.indexOf(card);
      if (index > -1) {
        pack.splice(index, 1);
    }
      this.setState( {
          pack,
          selectedCards
      });
  },
  shuffle : function(pack) {
    let currentIndex = pack.length, tempValue, randomIndex;
    while(0!== currentIndex) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex-=1;

        tempValue = pack[currentIndex];
        pack[currentIndex] = pack[randomIndex];
        pack[randomIndex] = tempValue;
    }
    this.setState({
      pack
    });
  },
  render() {
      const { pack, selectedCards } = this.state;
    return (
        <div className="container">
            <Title name="The card challenge" />

            <button onClick={() => this.shuffle(pack)}> Shuffle </button>
            {pack.map((card) => {
                return(
                    <Card key={card.id} handleClick={()=> this.selectCard(card)} card={card} />    
                );
            })}

            <div> Selected Cards
              {selectedCards.length >=1 ? selectedCards.map((card) => {
                  return (
                    <Card key={card.id} card={card} />    
                  );
              }) : <div> No Cards Selected </div>}  

            </div>

        </div>
    )
  }
});

let newDeck = () => {
    const suits = ['&diams;', '&hearts;', '&spades;', '&clubs;'];
    const cards = Array.from({ length: 9 }, (v, k) => k + 2).concat([ 'Jack', 'Queen', 'King', 'Ace' ]);
    return suits.reduce((acc, suit, i) => {
        cards.map((name, j) => {
            acc.push({suit, name: String(name), value: j + 1, suitValue: i + 1});
        });
        return acc;
    }, []);
};
  

export default App;
