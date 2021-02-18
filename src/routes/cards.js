const Card = require('../models/card');

module.exports = function (app) {
  // Get all the cards
  app.get('/cards', async function (req, res) {
    const cards = await Card.find({});
    return res.send(cards);
  });

  // Get card using id
  app.get('/cards/:id', async function (req, res) {
    const cardId = req.params.id;
    const card = await Card.find({ _id: cardId });
    return res.send({
      status: 200,
      message: card,
    });
  });

  // Create a new card
  app.post('/cards', async function (req, res) {
    const cardJson = req.body;
    // TODO: Validate JSON data
    const card = new Card({
      ...cardJson,
      grid: [...Array(49)],
      startDate: Date.now(),
    });
    try {
      await card.save();
    } catch {
      // TODO: Catch error
    }
    return res.send({
      status: 200,
      message: 'Card successfully saved!',
      _id: card._id,
    });
  });

  // Update a card's grid; handles cell click
  app.put('/cards/:id/:cellIdx', async function (req, res) {
    const cardId = req.params.id;
    const cellIdx = req.params.cellIdx;
    const { value } = req.body;

    // Build update field
    const field = {
      [`grid.${cellIdx}`]: value,
    };
    const data = await Card.updateOne({ _id: cardId }, { $set: field });

    try {
      return res.send({
        status: 200,
        message: 'Card successfully updated!',
      });
    } catch (err) {
      console.error('Err:', err);
    }
  });

  // Update a card using id
  app.put('/cards/:id', async function (req, res) {
    const cardId = req.params.id;
    const cardJson = req.body;
    await Card.updateOne({ _id: cardId }, { $set: { ...cardJson } });
    return res.send({
      status: 200,
      message: 'Card successfully updated!',
    });
  });

  // Delete a card using id
  app.delete('/cards/:id', async function (req, res) {
    const cardId = req.params.id;
    await Card.deleteOne({ _id: cardId });
    return res.send({
      status: 200,
      message: 'Card successfully deleted!',
    });
  });
};
