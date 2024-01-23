const app = require('./app');
const db = require("./db");

db.connect()
.then(() => console.log("Connected to MongoDB: " + db.url))
.catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
