const {app} = require('./app');
const { connectToMongoDB } = require('./config/database');

connectToMongoDB();



app.listen(process.env.PORT, () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});