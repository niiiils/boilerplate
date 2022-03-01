module.exports = (app) => {
    app.get('/api/acme', (req, res) => {
        res.send('The API works!');
    });
}