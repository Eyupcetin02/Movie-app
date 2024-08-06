const express = require('express');
const app = express.Router();

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Örnek bir GET isteği
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
 *                   example: 'Örnek yanıt'
 */
app.get('/example', (req, res) => {
  res.json({ message: 'Örnek yanıt' });
});

/**
 * @swagger
 * /example:
 *   post:
 *     summary: Örnek bir POST isteği
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'John Doe'
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
 *                   example: 'Veri alındı'
 */
app.post('/register', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Veri alındı: ${name}` });
});

/**
 * @swagger
 * /example/{id}:
 *   put:
 *     summary: Örnek bir PUT isteği
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Güncellenecek öğenin ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Jane Doe'
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
 *                   example: 'Öğe güncellendi'
 */
app.put('/example/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ message: `Öğe güncellendi: ${id}, ${name}` });
});

/**
 * @swagger
 * /example/{id}:
 *   delete:
 *     summary: Örnek bir DELETE isteği
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Silinecek öğenin ID'si
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
 *                   example: 'Öğe silindi'
 */
app.delete('/example/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Öğe silindi: ${id}` });
});

module.exports = app;
