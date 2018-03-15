const simplestuff = function(req, res) {
    res.render('simplestuff',{
        reasons:[
            {reason:"Responsive",advantage:"cool"},
            {reason:"Contain a lot of implementation",advantage:"faster"},
            {reason:"It's really good-looking",advantage:"good front-end"}
        ]});
};

module.exports = {
    simplestuff
};