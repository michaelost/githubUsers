var axios = require('axios');


(async function () {
  var getGithubUsers = async function (userName) {
    const response = await axios.get('https://api.github.com/users/michaelost/followers');
    const followers = response.data.map(f => {
      return {
        login: f.login,
        id: f.id,
        followers: f.followers_url,
      }
    })
    return followers;
  }

  var users = await getGithubUsers();

  console.log('users', users);

})()

