import clientPromise from "../../mongodb";

export default async function handler(req, res) {
const client = await clientPromise;
const db = client.db("nextbd");
// get api continent data
const urlFetch = "https://pkgstore.datahub.io/core/continent-codes/continent-codes_json/data/60d6baef1250bc2b01fd0148dccca518/continent-codes_json.json";
let data = await fetch(`${urlFetch}`)
let json = await data.json()

// check in documents exists
const allPosts = await db.collection("continents").find({}).toArray();


if (allPosts.length == 0) {
    await db.collection("continents").insertMany(json);
    res.json(200);

}else{
    res.json(400);
}

}
