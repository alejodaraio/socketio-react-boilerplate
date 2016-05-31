import React from 'react';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    HEADER
                </header>

                <div>
                    {this.props.children}
                </div>

                <footer>FOOTER</footer>
            </div>
        );
    }
}

export default Main;