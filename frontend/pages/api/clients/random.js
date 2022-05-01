import { data } from "../../../data/randomClients"

export default function handler(req, res) {
  res.status(200).json(data)
}