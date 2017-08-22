document.addEventListener("DOMContentLoaded", function() {

  var meow = document.querySelector('.summon-cats')

    meow.addEventListener('click', function (){

        $.ajax({
        url: 'http://bitkittens.herokuapp.com/cats.json',
        method: 'GET',
        data: {},
        dataType: 'json'}).done(function (data){

          console.log(data);

      })
    });
});
