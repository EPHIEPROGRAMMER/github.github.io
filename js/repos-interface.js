var Repos = require('./../js/repos.js').reposModule;

var displayData = function(name, userData, reposData, moreData) {
  $('.showUser').append("<h2> The username " + name + " is found as " + userData + ". </h2>");

  $('#showRepos').append("<h2><a href=" + reposData + ">Click here to see " + name + " repositories.</a>" + "</h2>");

  // $('ul#repoUrl').append("<li><a href=" + moreData + ">Click here to see " + name + " repositories.</a>" + "</li>"); can not get ..Undefined

  console.log(userData, " ", reposData + " YES");
};

$(document).ready(function() {
  var searchRepos = new Repos();
  searchRepos.getRepos();
  $('#searchName').click(function() {
    //get input value
    var name = $('#userName').val();
    $('#userName').val("");
    console.log(name);
    searchRepos.getRepos(name, displayData);

    // $('#showRepos').show('<a heref="https://github.com/"' +  name + '"?page=2&tab=repositories"></a>' );



// var img = document.querySelector('#userPic');
    $('.showUser').empty();
    $('#showRepos').empty();
  });
});
