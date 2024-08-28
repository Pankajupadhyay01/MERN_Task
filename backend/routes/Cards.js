import express from 'express'
import { createCard, getCards, getIndividualCard } from '../controller/Card.js';
const router = express.Router()

router.route("/").get((req, res) => res.send("pankaj"))

router.route("/addRequest").post(createCard)
router.route("/getCards").get(getCards)
router.route("/cards/:title").get(getIndividualCard)

export default router;