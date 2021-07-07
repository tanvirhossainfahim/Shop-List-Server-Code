const Product = require("./Schema");

exports.getAllProduct = (req, res) => {
  Product.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.createProduct = (req, res) => {
  const { product, weight, price, imageUrl } = req.body;
  const postProduct = new Product({
    product,
    weight,
    price,
    imageUrl,
  });
  postProduct
    .save()
    .then(() => {
      Product.find()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { product, weight, price } = req.body;
  Product.findByIdAndUpdate(
    { _id: id },
    { $set: { product, weight, price } },
    { new: true }
  )
    .then(() => {
      getAllProduct();
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete({ _id: id })
    .then(() => {
      getAllProduct();
    })
    .catch((err) => {
      res.json(err);
    });
};

//order post in database
const Order = require("./Order/OrderSchema");
exports.readOrder = (req, res) => {
  Order.find({ uid: req.query.uid })
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.postOrder = (req, res) => {
  const { name, price, image, uid } = req.body;
  const orderPost = new Order({
    name,
    price,
    image,
    uid,
  });
  orderPost.save().then(() => {
    Order.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
