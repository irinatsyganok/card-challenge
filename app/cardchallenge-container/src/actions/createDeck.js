import CREATE_DECK_SUCCESS from './actionTypes';

function createDeckSuccess(){
    return {
        type: CREATE_DECK
    }
}

export default function createDeck() {
    dispatch(createDeck());
}