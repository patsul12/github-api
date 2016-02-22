function githubRequest(username) {
  var url = "https://api.github.com/users/" + username + "/repos";
  var request = $.ajax({
    url: url,
    method: "GET",
    dataType: "json"
  });

  request.done(function(data, status) {
    $(".results").empty();
    for (var i = 0; 1 < data.length; i++) {
      $(".results").append("<a href='" + data[i].html_url + "'><div class=result><p>" + data[i].name + "</p>"+
                            "<p>" + data[i].description + "</p></div></a>");
    }
    return data;
  });
}

module.exports = githubRequest;
