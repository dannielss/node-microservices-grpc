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
  },

  async updateUser(req, res) {
    const { _id, email, username, password } = req.request;

    await User.findByIdAndUpdate({ _id }, { email, username, password });

    return res(null, {
      message: 'User updated successfully',
      status: 'ok'
    });
  },

  async deleteUser(req, res) {
    const { _id } = req.request;

    await User.findByIdAndRemove({ _id });

    return res(null, {
      message: 'User deleted successfully',
      status: 'ok'
    });
  }
};
