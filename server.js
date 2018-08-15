var axios = require('axios');
var users = [];
axios.get('https://api.github.com/users/michaelost/followers').then(function (response) {
console.log('response.data', response.data);
  const followers = response.data
    .map(f => {
      return {
        login: f.login,
        id: f.id,
        followers: f.followers_url,
      }
    })
    users = followers;
  console.log('followers', followers);
})
