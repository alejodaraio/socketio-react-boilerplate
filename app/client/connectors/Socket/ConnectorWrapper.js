export default class ConnectorWrapper {

    constructor(connector, hostname) {
        this.connector = connector;
        this.hostname = hostname;
    }

    connect() {
        this.connector(this.hostname);
    }
}