var apiKey = require('./../.env').apiKey;

Repos = function() {

};

Repos.prototype.getRepos = function(name, displayFunction){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayFunction(name, response.login, response.html_url, response.repo_url);
    console.log(response.login + " " + response.html_url);
  }).fail(function(error){
    $('.showUser').text("This Username " + name + " is " + error.responseJSON.message + "." +
    "Please Enter the Correct Username");
  });
};


exports.reposModule = Repos;

//might change to exports.getRepos = Repos;
//write Get repos method
//using response.public_repos
//avatar .attr("src", response.avatar_url);
//author: response.name
