const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', project: 'spanner-pipeline-server' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
