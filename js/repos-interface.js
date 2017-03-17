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

//Get user repo

// $('img#userPic').text "<img " response.avatar_url + " , " + response. html_url  + ".");


// var login = $('#userName').val("");
// var html_url = href =
//
//
// <img id="userPic" src="https://avatars.githubusercontent.com/u/19232053?v=3" alt="avatar_url" />




// var Repos = require('./../js/userLookup-interface.js').reposModule;
//
// $(document).ready(function() {
//   var userNameRepos = new Repos();
//   $('#searchName').click(function() {
//     //get value from form and make any input into lowerCase
//     var name = $('#userName').val().toLowerCase();
//     $('#userName').val("");
//     //Repos.prototype.getRepos = function(methodParameter){getRepos code}
//     $('.showUser').text("The username you chose is " +name+ ".");
//
//   });
//
// });
