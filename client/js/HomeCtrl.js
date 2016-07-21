angular.module('pundexApp').controller('homeController', ['$scope', function($scope) {
  $('#blank').on('click', function(){
    $('#blank').remove();
    $('h5').remove();
    $('#removeMe').remove();
    $('#title').prepend('<br><h3><em>A Play On Words...</em></h3><p style="font-size: 1em;"><em>by</em></p><img class="center-block img-fluid" src="client/img/title2.png" id="title">');
    $('#mid').prepend('<img class="center-block img-fluid" src="client/img/jump.gif">');
    $('#theme')[0].play();
    $('#theme').show();
    var aud = document.getElementById('theme');
    aud.volume = 0.4;
  });
}]);