const AtlasClient = require('../services/atlas');

class UserController {
  async show(req, res) {
    const { id } = req.params;

    const response = await AtlasClient.getUserById({ id });

    return res.json(response);
  }
}

module.exports = new UserController();
