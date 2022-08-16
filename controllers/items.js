const Item = require('../models/item');

module.exports = {
    create,
    new: newItem,
    index,
    delete: deleteItem,
    edit,
    update,
    show,

};

// an index function that will show the items in a shop
function index(req, res) {
    Item.find({}, function(err, items) {
        res.render('items/index', { items });
    })
};

function show(req, res) {
    Item.findById(req.params.id, function(err, item) {
        res.render('items/show', { item });
    })
    
};

function newItem(req, res) {
    res.render('items/new');
};

// needs a create item function
function create(req, res){
    req.body.user = req.user._id;
    console.log(req.body)
    const item = new Item({
        name: req.body.name,
        price: req.body.price
    });
    //console.log(item)
    item.save(function(err) {
        if(err) {
            console.log(err)
            return res.redirect('/items/new');
        }
        console.log(item);
        res.redirect('/items');
    });
}

// needs an update item function
function edit(req, res) {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render('items/edit', {
            item: foundItem
        })
    })
};

function update(req, res) {
    Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (err, updatedItem) => {
            res.redirect(`/items/${req.params.id}`);
        }
    )
};

// needs a delete item function
function deleteItem(req, res, next) {
    Item.findById(req.params.id).then(function(item) {
        if(!item) return res.redirect('/items');
        item.remove(req.params.id).then(function(){
            res.redirect('/items');
        })
    }).catch(function(err) {
        return next(err);
    });
};