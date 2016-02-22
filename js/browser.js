var githubRequest = require('../js/github-request');
$(function() {
  $("#userInput").submit(function(e) {
    e.preventDefault();

    var data = githubRequest($("#userName").val());
  });
});
