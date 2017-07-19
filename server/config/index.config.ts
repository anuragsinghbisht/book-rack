const config = {
  port: process.env.PORT || 8080,
  db: {
    url: 'mongodb://localhost:27017/book-rack-test'
  }
};

export default config;
