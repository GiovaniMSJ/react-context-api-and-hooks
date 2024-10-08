import * as actionsTypes from './actionstypes'

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({type: actionsTypes.INCREASE}),
        decrease: () => dispatch({type: actionsTypes.DECREASE}),
        reset: () => dispatch({type: actionsTypes.RESET}),
        setCounter: (payload) => dispatch({type: actionsTypes.SET_COUNTER , payload}),
        asyncIncrease: () => asyncIncreaseFn(dispatch),
        asyncError: () => asyncErrorFn(dispatch)
    };
};

const asyncIncreaseFn = async (dispatch) => {
    dispatch({type: actionsTypes.ASYNC_INCREASE_START});

    return await new Promise(r => {
        setTimeout(() => {
            dispatch({type: actionsTypes.ASYNC_INCREASE_END});
            r('REOLVED');
        } , 2000)
    });
}

const asyncErrorFn = async (dispatch) => {
    dispatch({type: actionsTypes.ASYNC_INCREASE_START});

    return await new Promise((resolve , rejact) => {
        setTimeout(() => {
            dispatch({type: actionsTypes.ASYNC_INCREASE_ERROR});
            rejact(new Error('Deu ruim'));
        } , 2000)
    });
}