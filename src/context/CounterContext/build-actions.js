import * as actionsTypes from './actionstypes'

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({type: actionsTypes.INCREASE}),
    };
};