import { connectToDB } from "./helper.js";

const getAllBooks = async (req, res) => {
  const client = await connectToDB();
  try{
    const DB_RESPONSE = await client.db('Library').collection('books').find().sort().toArray();
    res.send(DB_RESPONSE);
  } catch(err){
    console.log(err);
    res.status(500).send({ error: err, message: `Something went wrong with the server.` });
  } finally{
    await client.close();
  }
};

export { getAllBooks };