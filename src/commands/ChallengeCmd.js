class SpaceshipProtocol {

    constructor(hostname, port) {
        this.hostname = hostname;
        this.port = port;
    }

    getHostname() {
        return this.hostname;
    }

    getPort() {
        return this.port;
    }
}

export default class ChallengeCmd {

    constructor(hostname, port) {
        this.spaceship_protocol = new SpaceshipProtocol(hostname, port);
    }

    getSpaceship_protocol() {
        return this.spaceship_protocol;
    }
}
