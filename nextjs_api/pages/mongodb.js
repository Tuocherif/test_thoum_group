import { MongoClient } from 'mongodb'

const uri = 'mongodb://dbapi:dbapi123@ac-vzwqwgj-shard-00-00.wzhpvcs.mongodb.net:27017,ac-vzwqwgj-shard-00-01.wzhpvcs.mongodb.net:27017,ac-vzwqwgj-shard-00-02.wzhpvcs.mongodb.net:27017/?ssl=true&replicaSet=atlas-o7vaej-shard-0&authSource=admin&retryWrites=true&w=majority';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}


client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise
