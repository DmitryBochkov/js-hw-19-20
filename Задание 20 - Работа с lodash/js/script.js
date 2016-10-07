$(document).ready(function() {
  $.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(data) {
    var arrUsers = data;

    // TASK 1
    var skills = []; // Creating an array of skill arrays for all users
    _.map(arrUsers, function(item) {
      skills.push(item.skills);
    });

    skills = _.uniq(_.flatten(skills)); // Joining all arrays into one array and removing repetitive skills

    skills = skills.sort(function(a, b) { // Sorting the array alphabetically, case insensitive
      var nA = a.toLowerCase();
      var nB = b.toLowerCase();
      if(nA < nB)
        return -1;
      else if(nA > nB)
        return 1;
     return 0;
   });

   // Displaying the array of skills in HTML
    $(".userSkills").html('<b>Skills of all users: </b> ' + skills.join(', ') + '.');

    // TASK 2
    var byFriends = _.sortBy(arrUsers, function(item) {     //Sorting objects by the amount of users' friends
      return item.friends;
    });

    var names = [];
    _.map(byFriends, function (item, index) {     //Creating an array of sorted users
      names.push(item.name);
    });

    // Displaying the array of users' names in HTML
    $(".userNames").html('<b>Users sorted by the number of their friends: </b> ' + names.join(', ') + '.');

    // TASK 3
    var friends = []; //Creating an array of arrays of the friends for all users
    _.map(arrUsers, function(item) {
        friends.push(_.map(item.friends, function(obj) {
          return obj.name;
        }));
    });

    friends = _.uniq(_.flatten(friends)); // Joining all arrays into one array and removing repetitive friends

    // Displaying the array of friends in HTML
    $(".userFriends").html('<b>The friends of all users: </b> ' + friends.join(', ') + '.');

      // console.log(skills);
      // console.log(names);
      // console.log(friends);
  });
});
