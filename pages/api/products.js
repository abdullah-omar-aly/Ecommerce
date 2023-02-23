// export default function handler(req, res) {
//     if (req.method === 'GET') {
//       // Process a POST request
//     } else {
//       // Handle any other HTTP method
//     }
//   }
import { products } from "../../dummyData"

export default function handler(req, res) {
    console.log(req.query)
    const {_page , _limit} = req.query
    const page = parseInt(_page) -1 || 0
    const limit = parseInt(_limit) || 3
    const productsData = products.slice(page * limit , page * limit + limit)
    // console.log("response" ,response)
    res.status(200).json({
      productsData ,
      productsCount: 20 
    })
  }