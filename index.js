import express from "express"
import cors from "cors"
// Initialize the express app
const app = express();

// CORS configuration to allow all origins for testing (or replace '*' with your frontend URL for production)
const corsOptions = {
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));  // Use CORS middleware

// Sample route for testing
app.get('/', (req, res) => {
  res.json({ message: "Hello from Express Backend!" });
});

// Simple route for API
app.get('/api/test', (req, res) => {
  res.json({ message: "API is working!" });
});

// Start the server on a specified port (3000 by default)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
