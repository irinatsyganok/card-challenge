import SHUFFLE_DECK_SUCCESS from './actionTypes';

function shuffleDeckSuccess(deck) {
    return {
        type: SHUFFLE_DECK,
        deck
    }
}

export default function shuffleDeck(deck){
    dispatch(shuffleDeck(deck));
}