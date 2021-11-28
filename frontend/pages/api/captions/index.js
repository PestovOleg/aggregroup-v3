import { data } from "../../../data/captions"

export default function handler(req, res) {
    res.status(200).json(data)
  }