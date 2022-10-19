import clientPromise from "../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextbd");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      let myPost = await db.collection("continents").insertMany(bodyObject);
      res.json('ok');
      break;
    case "GET":
      const allPosts = await db.collection("continents").find({}).toArray();
      res.json(allPosts);
      break;
  }
}
