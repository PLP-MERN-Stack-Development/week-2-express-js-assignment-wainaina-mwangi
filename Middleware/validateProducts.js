const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || !price || !category || inStock === undefined) {
    return res.status(400).json({ message: 'Missing required product fields' });
  }
  next();
};
module.exports = validateProduct;
