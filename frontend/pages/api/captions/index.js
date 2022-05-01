import { data } from "../../../data/captions"

export default function handler(req, res) {
  console.log("отработал")
  res.status(200).json(data)
}