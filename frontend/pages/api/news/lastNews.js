import { data } from "../../../data/lastNews"

export default function handler(req, res) {
    res.status(200).json(data)
  }