const React = require('react');
const {Link} = require('react-router');

// let Examples = React.createClass({
//     render: function () {
//         return(
//             <h3>Examples Component</h3>
//         );
//     }
// });

let Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Welcome to the Examples page! Here are a few locations to try out:</p>
            <ul>
                <li>
                    <Link to='/?location=Abuja'>Abuja, NG</Link>
                </li>
                <li>
                    <Link to='/?location=Cape town'>Cape Town, SA</Link>
                </li>
            </ul>
        </div>
    );
};

module.exports = Examples;