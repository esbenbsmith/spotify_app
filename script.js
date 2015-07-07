$ (function (){



	var userInput = $('#user_input').val();

$.get(
  jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
  var data="'https://api.spotify.com/v1/search?type=track&q='+ userInput",
  
  
  function(data) {
  		console.log(data.tracks.name)
  }
);

// todo template
  var Template = _.template($('#template').html());

}

)};