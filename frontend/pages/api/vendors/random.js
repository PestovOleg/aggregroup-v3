import { data } from "../../../data/randomVendors"

export default function handler(req, res) {
    res.status(200).json(data)
  }