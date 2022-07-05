const User = require('./models/User');

module.exports =  {
  async getUserById(req, res) {
    const user = await User.findById(req.request._id);

    return res(null, {
      user,
      status: 'ok'
    });
  },

  async getAllUsers(req, res) {
    const users = await User.find();

    return res(null, {
      users,
      status: 'ok'
    })
  },

  async createUser(req, res) {
    const { email, username, password } = req.request;

    const user = await User.create({
      username,
      password,
      email
    });

    return res(null, {
      user,
      status: 'ok'
    });
  }
};
