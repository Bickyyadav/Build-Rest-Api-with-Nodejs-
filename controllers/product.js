import { Product } from '../models/product';

export const getAllProducts = async (req, res) => {
    //------calling data from the database in data and also passed in data
  const data = await Product.find({});
  res.status(200).json({
    data,
  });
};

export const getAllProductsTesting = async (req, res) => {
  res.status(200).json({
    msg: 'i am gettingAllProductsTesing',
  });
};
