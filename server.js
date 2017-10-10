const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// converting https to http
app.use((req, res, next) => {
    if (res.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server stated on port: ${port}` );
});