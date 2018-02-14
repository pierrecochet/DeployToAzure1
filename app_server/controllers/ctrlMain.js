const index = function(req, res) {
    res.render('index', { title: 'Simple'});
};

module.exports = {
    index
};