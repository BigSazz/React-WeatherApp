const React = require('react');

// let About = React.createClass({
//     render: function () {

//     }
// });

// Using stateless functional components
let About = (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to the About page</p>
        </div>
    );
};

module.exports = About;