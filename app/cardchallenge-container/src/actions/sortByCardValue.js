import SORT_BY_CARD_VALUE_SUCCESS from './actionTypes';

function sortByCardValueSuccess(selectedCards){
    return {
        type: SORT_BY_CARD_VALUE_SUCCESS,
        selectedCards
    }
}

export default function sortByCardValue(selectedCards) {
    dispatch(sortByCardValue(selectedCards));
}