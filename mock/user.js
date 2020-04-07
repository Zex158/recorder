module.exports = {
  'GET /api/currentUser': {
    success: true,
    error: null,
    message: null,
    data: {
      role: {
        roleType: 1,
        roleName: 'admin',
        privaceVersion: '0.0.1',
      },
      userName: 'admin',
    },
  },
  'GET /api/currentUserModule': {
    success: true,
    error: null,
    message: null,
    data: {},
  },
  'GET /api/currentUser/trace': {
    success: true,
    error: null,
    message: null,
    data: {
      lastLoginStatus: 'success',
      lastLoginIp: '174.1.0.152',
    },
  },
  'GET /api/authentication': (req, res) => {
    res.send(
      {
        success: true,
        error: null,
        message: null,
        data: {
          logined: false,
          userId: null,
          loginType: null,
          loginFrom: null,
        },
      },
      200,
    )
  },
}
