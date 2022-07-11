const AtlasClient = require('../services/atlas');

class UserController {
  async index(req, res) {
    const { id } = req.params;

    const response = await AtlasClient.getOrderById({ _id: id });

    return res.json({
      user: {
        _id: response.user._id,
        email: response.user.email,
        username: response.user.password,
      },
      status: response.status
    });
  }

  async store(req, res) {
    const { username, password, email } = req.body;

    const response = await AtlasClient.createUser({ username, password, email });

    if(response.error) {
      return res.json({
        error: response.error,
        status: response.status
      });
    }

    return res.json({
      user: {
        _id: response.user._id,
        email: response.user.email,
        username: response.user.password,
      },
      status: response.status
    });
  }

  async show(req, res) {
    const response = await AtlasClient.getAllUsers({});

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const { username, password, email } = req.body;

    const response = await AtlasClient.updateUser({ _id: id, username, password, email });

    return res.json(response);
  }
  
  async remove(req, res) {
    const { id } = req.params;

    const response = await AtlasClient.deleteUser({ _id: id });

    return res.json(response);
  }

  async authenticate(req, res) {
    const { email, password } = req.body;

    const response = await AtlasClient.authenticate({ email, password });

    if(response.error) {
      return res.json({
        error: response.error,
        status: response.status
      });
    }

    return res.json({
      user: {
        _id: response.user._id,
        email: response.user.email,
        username: response.user.password,
      },
      status: response.status,
      token: response.token
    });
  }
}

module.exports = new UserController();
