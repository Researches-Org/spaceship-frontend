const SPACESHIP_SERVICE_URL = 'http://192.168.15.7:8080/xl-spaceship/user/game/';

function ensureOk(response) {
    if (!response.ok) {
        throw response;
    }
    return response;
}

function handleError(error, onError) {
    if (error.json) {
        error.json()
            .then(e => onError({ message: e.message, error: e.error }))
            .catch(ex => onError({ message: 'Error processing request', error: 'Error' }));
    
    } else {
        onError({ message: error.message, error: error.stack });
    }
}

export default class SpaceshipClient {

    static listGames(onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(ensureOk)
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch(error => handleError(error, onError));
    }

    static getGame(gameId, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + gameId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(ensureOk)
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch(error => handleError(error, onError));
    }

    static salvo(gameId, salvoCmd, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + gameId + '/fire', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(salvoCmd)
        })
        .then(ensureOk)
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch(error => handleError(error, onError));
    }

    static challenge(challengeCmd, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + 'new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(challengeCmd)
        })
        .then(ensureOk)
        .then((response) => response.json())
        .then((responseJson) => {
            onSuccess(responseJson);
        })
        .catch(error => handleError(error, onError));
    }

    static autopilot(gameId, onSuccess, onError) {
        fetch(SPACESHIP_SERVICE_URL + gameId + '/auto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(ensureOk)
        .then((response) => onSuccess())
        .catch(error => handleError(error, onError));
    }

}
