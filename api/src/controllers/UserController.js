const AtlasClient = require('../services/atlas');

class UserController {
  async index(req, res) {
    const { id } = req.params;

    const response = await AtlasClient.getUserById({ _id: id });

    return res.json(response);
  }

  async store(req, res) {
    const { username, password, email } = req.body;

    const response = await AtlasClient.createUser({ username, password, email });

    return res.json(response);
  }

  async show(req, res) {
    const response = await AtlasClient.getAllUsers({});

    return res.json(response);
  }
}

module.exports = new UserController();
