const express = require("express")
const router = express.Router()
const {getMovie , movieFunc} = require("../movie/movieSave")



/**
 * @swagger
 * /savemovie:
 *   post:
 *     summary: Yeni bir film kaydet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'Inception'
 *               director:
 *                 type: string
 *                 example: 'Christopher Nolan'
 *               year:
 *                 type: integer
 *                 example: 2010
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Film başarıyla kaydedildi'
 */
router.post("/savemovie", movieFunc);

/**
 * @swagger
 * /getmovie:
 *   get:
 *     summary: Film bilgilerini getir
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 movies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: 'Inception'
 *                       director:
 *                         type: string
 *                         example: 'Christopher Nolan'
 *                       year:
 *                         type: integer
 *                         example: 2010
 */
router.get("/getmovie", getMovie);


module.exports = router