const {
  getAllProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  postOrder,
  readOrder,
} = require("./controller");

const router = require("express").Router();

router.get("/", getAllProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

// Order Product
router.get("/order", readOrder);
router.post("/order", postOrder);

module.exports = router;
