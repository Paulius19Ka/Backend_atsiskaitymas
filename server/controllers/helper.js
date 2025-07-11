import { MongoClient } from "mongodb";

const DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@${process.env.DB_CLUSTER}.${process.env.DB_CLUSTER_ID}.mongodb.net/`;

const connectToDB = async () => {
  return await MongoClient.connect(DB_CONNECTION_STRING);
};

export { connectToDB };