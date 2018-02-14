const simplestuff = function(req, res) {
    res.render('simplestuff',{
        reasons:[
            "Responsive",
            "Contain a lot of implementation",
            "It's really good-looking"
        ]});
};

module.exports = {
    simplestuff
};