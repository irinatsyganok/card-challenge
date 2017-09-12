import SORT_BY_SUIT_VALUE_SUCCESS from './actionTypes';

function sortBySuitValueSuccess(selectedCards) {
    return {
        type: SORT_BY_SUIT_VALUE_SUCCESS,
        selectedCards
    }
}

export default function sortBySuitValue(selectedCards) {
    dispatch(sortBySuitValue(selectedCards));
}