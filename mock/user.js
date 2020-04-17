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
      userId: 'asdasd',
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
          userId: 'qwcxzasdas',
          loginType: 1,
          loginFrom: 'local',
        },
      },
      200,
    )
  },
  'POST /api/login': (req, res) => {
    console.log(req)
    if (req.body.username === 'admin' && req.body.password === '123456') {
      res.send({
        success: true,
        error: null,
        data: {
          currentUser: {
            role: {
              roleType: 1,
              roleName: 'admin',
              privaceVersion: '0.0.1',
            },
            userName: 'admin',
            userId: 'aaa',
          },
          authority: {
            logined: true,
            userId: 'qwcxzasdas',
            loginType: 1,
            loginFrom: 'local',
          },
          trace: {
            lastLoginStatus: 'success',
            lastLoginIp: '174.1.0.152',
          },
          userModules: {},
        },
      })
    } else {
      res.send({
        success: false,
        error: 'Invalid Password',
      })
    }
  },
}
