const mongoUrl = () => {
  const connectString = process.env.CSC_MONGO_CONNECT_STRING || process.env.MONGO_CONNECT_STRING || '';
  const username = process.env.CSC_MONGO_USERNAME || process.env.MONGO_USERNAME;
  const password = process.env.CSC_MONGO_PASSWORD || process.env.MONGO_PASSWORD;

  return connectString
    .replace(/<username>/, username)
    .replace(/<password>/, password);
};

export default {
  mongo: {
    url: mongoUrl(),
    database: 'chris-streaming-code' || process.env.CSC_MONGO_DATABASE || process.env.MONGO_DATABASE
  }
};