$(document).ready(function(){
  $('#add-book').on('submit', function(e){
    e.preventDefault();
    var title = $('#title').val();
    var category = $('#category').val();
    var excerpt = $('#excerpt').val();

  
$.ajax( { 
  url: "https://api.mlab.com/api/1/databases/bookstore_dev/collections/books?apiKey=pN-qUzSlIuDf-j9i4UXFC_mVO-U6pWOL",
  data: JSON.stringify( { 
      "title": title,
      "category": category,
      "excerpt": excerpt
    } ),
        type: "POST",
        contentType: "application/json",
        success: function(data){
             window.location.href = "index.html"
         },
         error: function(xhr, status, err){
             console.log(err);
       }
   } );

  })
});
//Get the data and display it
function getBooks(){
  $.ajax({
      url:'https://api.mlab.com/api/1/databases/bookstore_dev/collections/books?apiKey=pN-qUzSlIuDf-j9i4UXFC_mVO-U6pWOL'
  }).done(function(data){
    var output = '<div>';
    $.each(data, function(key, data){
      output += '<div class = "alert alert-warning">';
      output += '<h3>' + data.title + '</h3>';
      output += '<p> Category: ' + data.category + '</p>';
      output += '<p>' + data.excerpt + '</p>';
      output += '</div>';
    });
    output += '</div>';
    $('#books').html(output);
  });
}