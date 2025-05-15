import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default connectDB;
export { client };
