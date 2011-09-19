$(document).ready ->

  $('a').click (event) ->
    event.preventDefault()
    $(this).toggleClass('fave whatevs')