document.addEventListener("DOMContentLoaded", function() {

  var meow  = document.querySelector('.summon-cats')
  var box   = document.querySelectorAll('.cat-box')


    meow.addEventListener('click', function (){

        $.ajax({
        url: 'http://bitkittens.herokuapp.com/cats.json',
        method: 'GET',
        data: {},
        dataType: 'json'}).done(function (data){
          var array = data.cats
          for (var i = 0; i < array.length; i++) {
            var kitty = array[i].photo
            var name  = array[i].name
            var cat = document.createElement('img')
            cat.src = kitty
            cat.alt = "Photo of " + name
            box[i].appendChild(cat)
          }
      })
    });
});
