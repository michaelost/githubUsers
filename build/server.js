function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = require('axios');

_asyncToGenerator(function* () {
  var getGithubUsers = (() => {
    var _ref2 = _asyncToGenerator(function* (userName) {
      const response = yield axios.get('https://api.github.com/users/michaelost/followers');
      const followers = response.data.map(function (f) {
        return {
          login: f.login,
          id: f.id,
          followers: f.followers_url
        };
      });
      return followers;
    });

    return function getGithubUsers(_x) {
      return _ref2.apply(this, arguments);
    };
  })();

  var users = yield getGithubUsers();

  console.log('users', users);
})();
