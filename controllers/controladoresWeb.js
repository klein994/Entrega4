const controladoresWeb = {
    root: (req, res) => {
        res.redirect('/index');
    },

    index: (req, res) => {
        res.sendFile('index.html', { root: 'views' });
    }
}

module.exports = { controladoresWeb }