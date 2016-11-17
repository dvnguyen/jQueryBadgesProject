$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/743893.json', {
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(index, course) {
        var item  = $('<div></div>');
        var title = $('<h3>' + course.title + '</h3>');
        var image = $('<img>').attr('src', course.badge);
        var link  = $('<a>See Course</a>');

        link
          .attr('href', course.url)
          .attr('target', '_blank')
          .addClass('btn btn-primary');

        item
          .addClass('course')
          .append(title)
          .append(image)
          .append(link)
          .appendTo('#badges');
      });
    }
  });
});
