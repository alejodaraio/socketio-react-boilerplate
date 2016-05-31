import ConnectorWrapper from './../ConnectorWrapper';

export default class SocketConnector extends ConnectorWrapper {

    constructor(connector, hostname) {
        
        super();

        this.connector = connector;
        this.hostname = hostname;
    }
}