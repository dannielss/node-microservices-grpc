module.exports =  {
  async getUserById(call, callback) {
    const users = [
      {
        id: 1,
        username: 'Daniel',
        email: "daniel@hotmail.com",
        password: "1234"
      },
      {
        id: 2,
        username: 'Daniel',
        email: "daniel@hotmail.com",
        password: "1234"
      },
    ];

    return callback(null, {
      user: users.filter(user => user.id === +call.request.id)[0],
      status: 'ok'
    });
  }
};
