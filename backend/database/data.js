import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Adminum',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: true
    },
    {
      name: 'Userum',
      email: 'user@example.com',
      password: bcrypt.hashAsync('123456', 8),
      isAdmin: false
    },
  ],
  product: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 120,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 19,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product'
    }
  ]
}

export default { data };