const app = require('../app');
const { DEV_PORT } = require('../common/config');
const { connectToDB } = require('../common/db/mongodb');
const prefill = require('../common/db/prefill');

const port = process.env.PORT || DEV_PORT;

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

connectToDB(() => {});

