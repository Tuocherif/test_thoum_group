
export default async function handler(req, res) {
    const urlFetch = "https://pkgstore.datahub.io/core/continent-codes/continent-codes_json/data/60d6baef1250bc2b01fd0148dccca518/continent-codes_json.json";
    let data = await fetch(`${urlFetch}`)
    let json = await data.json()
    res.send(json);
  }
  