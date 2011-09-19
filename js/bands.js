(function() {
  $(document).ready(function() {
    return $('a').click(function(event) {
      event.preventDefault();
      return $(this).toggleClass('fave whatevs');
    });
  });
}).call(this);
