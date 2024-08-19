import express from 'express';
import mongoose from 'mongoose';
import authRoutes from '../routes/auth.js';
import jobRoutes from '../routes/jobs.js';

const app = express();
app.use(express.json());

mongoose.connect('your_mongo_db_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
