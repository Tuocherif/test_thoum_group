
export default async function handler(req, res) {

    let store = await fetch("http://localhost:3000/api/continent/storecontinent");
    let storeResponse = await store.json();

    if (storeResponse === 200) {
        let response = await fetch("http://localhost:3000/api/continent/post", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let allPosts = await response.json();
        res.send(allPosts);
    }else{
        let response = await fetch("http://localhost:3000/api/continent/post", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let allPosts = await response.json();
        res.send(allPosts);
    }  
}