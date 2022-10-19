import clientPromise from "../mongodb";

export default async function handler(req, res) {
const client = await clientPromise;
const db = client.db("nextbd");
// get api countries data
const urlFetch = "https://restcountries.com/v2/all";
let data = await fetch(`${urlFetch}`)
let json = await data.json()

// check in documents exists
const allPosts = await db.collection("countries").find({}).toArray();


if (allPosts.length == 0) {
    await db.collection("countries").insertMany(json);
    res.json(200);

}else{
    res.json(400);
}

}
