const User = require('./models/User');
const jwt = require('jsonwebtoken');

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

    const userExists = await User.findOne({ email });

    if(userExists) {
      return res(null, {
        error: 'Email already in use',
        status: 'error'
      })   
    }

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

    return res('null', {
      message: 'User deleted successfully',
      status: 'ok'
    });
  },

  async authenticate(req, res) {
    const { email, password } = req.request;

    const user = await User.findOne({ email });

    if (!user) {
      return res(null, {
        error: "User not found",
        status: 'error'
      });
    }

    if(password !== user.password) {
      return res(null, {
        error: "Password is incorrect",
        status: 'error'
      });
    }

    const token = jwt.sign({ id: user.id }, 'supersecret', { expiresIn: "1d"});

    return res(null, {
      user,
      status: 'ok',
      token
    });
  }
};
