$(document).ready(function () {
console.log("hi");

$(function(){
  $.get('https://www.reddit.com/r/aww/.json', function(data){
    console.log(data.data.children);
    // data.data.children[i].data
    var allInfo = data.data.children; //array
    console.log(allInfo);

    var postAuthor = allInfo[2].data.author;

    console.log(postAuthor);
  });

allInfo.forEach(function(info) {
var postEl = $("<div class='post'>");
var titleEL = $("<h3");
titleEL.text(allInfo[11].data.title);
postEl.append(titleEL);

});

$("#main").append(postEl);
});



});
