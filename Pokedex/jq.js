
$(function(){

  var defaultPokemon = '1'
  var defaultPokemonData;

  var initFunc = function(){
    defaultPokemonData = $.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
    method: "GET",
  });
  defaultPokemonData.done(function(data){
    defaultPokemonData = data;
    $('.pokedex').removeClass('pokedex-loading')
    $('.pokedex h3').text(data.name.toUpperCase())
    $('.poke-img img').attr('src', data.sprites.front_default)
  });
  defaultPokemonData.fail(function(jqXHR, textStatus){
    console.log(error);
  });
  }

  initFunc()

    $('.btn').click(function(){
      
     var pokemonSearch = $('.pokedex input[type="text"]').val()
     
      var request = $.ajax({
        url:"https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
        method: "GET",
      });
      request.done(function(data){
        $('.pokedex h3').text(data.name.toUpperCase())
        $('.poke-img img').attr('src', data.sprites.front_default)
      });
      request.fail(function(jqXHR, textStatus){
        alert ("Request failed: " + textStatus);
      });
    });
  });