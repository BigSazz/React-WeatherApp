const React = require('react');

// let Examples = React.createClass({
//     render: function () {
//         return(
//             <h3>Examples Component</h3>
//         );
//     }
// });

let Examples = (props) => {
    return(
        <h3>Examples</h3>
        <p>Welcome to the Examples page!</p>
    );
};

module.exports = Examples;