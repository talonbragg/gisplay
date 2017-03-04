function followers(un) {
  fetch('https://api.github.com/users/' + un)
    .then(res => {
      return res.json
    })
    .then(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].site_admin !== true) {
          console.log(data[i].following)
        }
    });
}
