 const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(cors());              // ✅ Allows frontend to talk to backend
app.use(express.json());      // ✅ Parses JSON request body

app.use(userRoutes);          // ✅ Routes for signup/login

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
