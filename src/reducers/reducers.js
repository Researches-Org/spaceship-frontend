import {
    GET_GAME_SUCCEED,
    GET_GAME_FAILED,
    AUTOPILOT_GAME_FAILED,
    CHALLENGE_SUCCEED,
    CHALLENGE_FAILED,
    SALVO_SUCCEED,
    SALVO_FAILED,
    AUTOPILOT_GAME_SUCCEED,
} from '../actions/types';

const initialState = () => {
  return {
    game: null,
    salvoResponse: null,
    autopilotSuccessMessage: '',
    error: null,
  };
};

export const reducer = (state = initialState(), action) => {

    switch (action.type) {
        case GET_GAME_SUCCEED:
            return {
                ...state,
                game: action.data,
                error: null,
            };
        case GET_GAME_FAILED:
            return {
                ...state,
                error: action.data,
            };
        case SALVO_SUCCEED:
            return {
                ...state,
                salvoResponse: action.data,
                error: null,
            };
        case SALVO_FAILED:
            return {
                ...state,
                error: action.data,
            };
        case CHALLENGE_SUCCEED:
            return {
                ...state,
                game: action.data,
                error: null,
            };
        case CHALLENGE_FAILED:
            return {
                ...state,
                error: action.data,
            };
        case AUTOPILOT_GAME_SUCCEED:
            return {
                ...state,
                autopilotSuccessMessage: 'Autopilot configured successfully',
            };
        case AUTOPILOT_GAME_FAILED:
            return {
                ...state,
                error: action.data,
            };
        default:
            return state;
    }
};