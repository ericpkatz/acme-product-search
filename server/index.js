const port = process.env.PORT || 3000;
const app = require('./app');
const { conn, Product } = require('./db');

app.listen(port, async()=> {
  try {
    console.log(`listening on port ${port}`)
    //seed data
    await conn.sync({ force: true });
    await Promise.all([
      Product.create({ name: 'foo' }),
      Product.create({ name: 'foop', inStock: false }),
      Product.create({ name: 'bar', inStock: false }),
      Product.create({ name: 'bazz'}),
      Product.create({ name: 'quq'}),
      Product.create({ name: 'quq!!', inStock: false}),


    ]);
    console.log('seeded');
  }
  catch(ex){
    console.log(ex);
  }
});
