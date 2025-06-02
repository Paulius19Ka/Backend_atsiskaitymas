import { connectToDB } from "./helper.js";

const dynamicQuery = () => {
  const settings = {
    filter: {},
    sort: { title: 1 },
    skip: 0,
    limit: 10
  };

  return settings;
};

const getAllBooks = async (req, res) => {
  const client = await connectToDB();
  try{
    const settings = dynamicQuery();
    const DB_RESPONSE = await client.db('Library').collection('books').find().sort(settings.sort).skip(settings.skip).limit(settings.limit).toArray();
    res.send(DB_RESPONSE);
  } catch(err){
    console.log(err);
    res.status(500).send({ error: err, message: `Something went wrong with the server.` });
  } finally{
    await client.close();
  }
};

const getSpecificBook = async (req, res) => {
  const { id } = req.params;
  const client = await connectToDB();
  let filter = { _id: id };
  try{
    const DB_RESPONSE = await client.db('Library').collection('books').findOne(filter);
    res.send(DB_RESPONSE);
  } catch(err){
    console.log(err);
    res.status(500).send({ error: err, message: `Something went wrong with the server.` });
  } finally{
    await client.close();
  }
};

export { getAllBooks, getSpecificBook };