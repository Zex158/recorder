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
          logined: true,
          userId: 'z5sqwDSw2aTz201',
          loginType: 'local',
          loginFrom: null,
        },
      },
      200,
    )
  },
}
