const SPACESHIP_SERVICE_URL = 'http://localhost:8080/xl-spaceship/user/game/';

export default class SpaceshipClient {

    static getGame(gameId, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + gameId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch((error) => {
            onError(error.stack);
        });
    }

    static salvo(gameId, salvoCmd, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + gameId + '/fire', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(salvoCmd)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch((error) => {
            onError(error.stack);
        });
    }

    static challenge(challengeCmd, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + 'new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(challengeCmd)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch((error) => {
            onError(error.stack);
        });
    }

    static autopilot(gameId, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + gameId + '/auto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => onSuccess())
        .catch((error) => {
            onError(error.stack);
        });
    }

}
