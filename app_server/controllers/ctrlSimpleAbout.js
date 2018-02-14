const simpleabout = function(req, res) {
    res.render('simpleabout',{ name: 'Pierre Cochet'});
};

module.exports = {
    simpleabout
};