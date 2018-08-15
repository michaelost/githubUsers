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

  function sortArray(arr) {
    var sortedUsers = [];
    sortedUsers = arr.sort(function(a, b) {
      if (a.login < b.login)
        return -1;
      if (a.login > b.login)
        return 1;
    })
     return sortedUsers;
  }
  var followers = await getGithubUsers()
  var sortedUsers = sortArray(followers)
  console.log('sortedUsers', sortedUsers);


})()
