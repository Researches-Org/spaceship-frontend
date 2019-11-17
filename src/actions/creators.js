import {
    GET_GAME_SUCCEED,
    GET_GAME_FAILED,
    AUTOPILOT_GAME_SUCCEED,
    AUTOPILOT_GAME_FAILED,
    CHALLENGE_SUCCEED,
    CHALLENGE_FAILED,
    SALVO_SUCCEED,
    SALVO_FAILED,
} from './types';

import SpaceshipClient from '../integration/SpaceshipClient';

function getGameSucceed(game) {
    return {
        type: GET_GAME_SUCCEED,
        data: game,
    }
};

function getGameFailed(error) {
    return {
        type: GET_GAME_FAILED,
        data: error,
    };
};

export const getGameAction = (gameId) => {

    return (dispatch) => {

        SpaceshipClient.getGame(gameId, function (game) {
            dispatch(getGameSucceed(game));

        },
        function (error) {
           dispatch(getGameFailed(error));
        });

    };

};

function salvoSucceed(salvoResponse) {
    return {
        type: SALVO_SUCCEED,
        data: salvoResponse,
    }
};

function salvoFailed(error) {
    return {
        type: SALVO_FAILED,
        data: error,
    };
};

export const salvoAction = (gameId, salvoCmd) => {

    return (dispatch) => {

        SpaceshipClient.salvo(gameId, salvoCmd, function (salvoResponse) {
            dispatch(salvoSucceed(salvoResponse));

        },
        function (error) {
           dispatch(salvoFailed(error));
        });

    };

};

function challengeSucceed(challengeResponse) {
    return {
        type: CHALLENGE_SUCCEED,
        data: challengeResponse,
    }
};

function challengeFailed(error) {
    return {
        type: CHALLENGE_FAILED,
        data: error,
    };
};

export const challengeAction = (challengeCmd) => {

    return (dispatch) => {

        SpaceshipClient.challenge(challengeCmd, function (challengeResponse) {
            dispatch(challengeSucceed(challengeResponse));

        },
        function (error) {
           dispatch(challengeFailed(error));
        });

    };

};

function autopilotSucceed() {
    return {
        type: AUTOPILOT_GAME_SUCCEED,
    }
};

function autopilotFailed(error) {
    return {
        type: AUTOPILOT_GAME_FAILED,
        data: error,
    };
};

export const autopilotAction = (gameId) => {

    return (dispatch) => {

        SpaceshipClient.autopilot(gameId, function () {
            dispatch(autopilotSucceed());
        },
        function (error) {
           dispatch(autopilotFailed(error));
        });

    };

};