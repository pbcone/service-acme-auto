import { Router } from 'express';
export default ({config}) => {
  let api = Router();
  api.post('/order', (req, res) => {
    let model = ['anvil','wile','roadrunner'];
    let pkg = ['std','super','elite'];

    if (!model.includes(req.query.model)) {
      res.status(400).json({ error: 'Could not order requested model' })
    }
    if (!pkg.includes(req.query.package)) {
      res.status(400).json({ error: 'Could not order requested package' })
    }
    console.log('Order Recieved from ', req.query.api_key);
    res.json({order: '1000'});
  });

  return api;
}
