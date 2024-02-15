const express = require('express');
const router = express.Router();
const Caixa = require('../../models/caixa');

router.get('/', async (req, res) => {
    try {
      const caixas = await Caixa.findAll();
      res.json(caixas);
    } catch (error) {
      console.error('Erro ao consultar caixas:', error);
      res.status(500).json({ error: 'Erro ao consultar caixas' });
    }
  });
  
module.exports= router;
