import React from 'react';
import Card from './Components/Card';

const App = React.createClass({
  getInitialState: () => {
  const pack = newDeck();
    return { pack };
  },
  render() {
    return (
        <div>
            {this.state.pack.map((card) => {
                return(
                    <Card key={card.id} card={card} />
                );
            })}
        </div>
    )
  }
});


let newDeck = () =>{
    const suits = ['&diams;', '&hearts;', '&spades;', '&clubs;'];
    const cards = Array.from({ length: 9 }, (v, k) => k + 2).concat([ 'Jack', 'Queen', 'King', 'Ace' ]);
    return suits.reduce((acc, suit, i) => {
        cards.map((name, j) => {
            acc.push({suit, name: String(name), value: j + 1, suitValue: i + 1});
            console.log(suit);
        });
        return acc;
    }, []);
};
  

export default App;
