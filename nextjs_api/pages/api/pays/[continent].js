import clientPromise from "../../mongodb";

export default async function handler(req, res) {
    const { continent } = req.query
    const client = await clientPromise;
    const db = client.db("nextbd");
    if (continent === "North America" || continent ==="South America") {
        
        const allPosts = await db.collection("countries").find({
            region : "Americas",
        }).toArray();
        res.send(allPosts);
    }else{
        
        const allPosts = await db.collection("countries").find({
            region : continent,
        }).toArray();
        res.send(allPosts);
    }
    
    
  }