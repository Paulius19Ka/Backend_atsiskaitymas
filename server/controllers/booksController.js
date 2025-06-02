import { validate as uuidValidate } from 'uuid';

import { connectToDB } from "./helper.js";

const dynamicQuery = (reqQuery) => {
  const settings = {
    filter: {},
    sort: {},
    skip: 0,
    limit: 100
  };

  if(Object.keys(reqQuery).length){
    Object.keys(reqQuery).forEach(key => {
      console.log(key);
      const [queryAction, queryKey, queryOperator] = key.split('_');
      if(queryAction === 'sort'){
        settings.sort[queryKey] = Number(reqQuery[key]);
      } else if(queryAction === 'filter'){
        if(!queryOperator){
          // operator does not exist
          if(isNaN(reqQuery[key])){
            // value is not a number
            settings.filter[queryKey] = { $regex: new RegExp(reqQuery[key], 'i')};
          } else {
            settings.filter[queryKey] = Number(reqQuery[key]);
          };
        } else {
          if(!settings.filter[queryKey]){
            // empty object to pass multiple filter conditions into, so that $gte and $lte works together
            settings.filter[queryKey] = {};
          };
          settings.filter[queryKey][`$${queryOperator}`] = reqQuery[key];
        };
      };
    });
  };

  return settings;
};

const getAllBooks = async (req, res) => {
  const client = await connectToDB();
  try{
    console.log(req.query);
    const settings = dynamicQuery(req.query);
    const DB_RESPONSE = await client.db('Library').collection('books').find(settings.filter).sort(settings.sort).skip(settings.skip).limit(settings.limit).toArray();
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

  // check if id is a valid uuid
  if(!uuidValidate(id)){
    return res.status(400).send({ error: `[${id}] is not a valid id. The id must be a valid uuid.` })
  }

  let filter = { _id: id };
  try{
    const DB_RESPONSE = await client.db('Library').collection('books').findOne(filter);
    if(!DB_RESPONSE){
      return res.status(404).send({ error: `Book [id: ${id}] was not found.`});
    };
    res.send(DB_RESPONSE);
  } catch(err){
    console.log(err);
    res.status(500).send({ error: err, message: `Something went wrong with the server.` });
  } finally{
    await client.close();
  }
};

export { getAllBooks, getSpecificBook };