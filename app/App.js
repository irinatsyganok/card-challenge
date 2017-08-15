import React, { Component } from 'react';
import Card from './components/Card';
import Title from './components/Title';

var App = React.createClass({

getInitialState() {
    return {
      pack : newDeck()
    }
  },
  selectCard: function(card) {
      const selectedCards = [];
      let updatedPack = this.state.pack;
      selectedCards.push(card);
      var index = updatedPack.indexOf(card);
      if (index > -1) {
        updatedPack.splice(index, 1);
        }
      this.setState( {
          updatedPack,
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
      const { pack } = this.state;
    return (
        <div className="container">
            <Title name="The card challenge" />

            <button onClick={() => this.shuffle(pack)}> Shuffle </button>
            {pack.map((card) => {
                return(
                    <Card key={card.id} handleClick={()=> this.selectCard(card)}card={card} />    
                );
            })}
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
