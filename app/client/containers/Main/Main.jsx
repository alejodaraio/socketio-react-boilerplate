import React from 'react';

var App = React.createClass({

    render: function () {

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
});

module.exports = App;