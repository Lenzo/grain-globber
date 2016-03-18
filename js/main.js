var $ul = $('ul');

grains.forEach(function (glob) {

// Why do the variables need to go in this loop for it to work?

  var $li = $('<li>');
  var $img = $('<img>');
  var $p = $('<p>');
  var $h2 = $('<h2>');

  $ul.append($li);
  $li.append($img, $h2, $p);

  $img.attr('src', 'images/' + glob.img);
  $h2.html(glob.name);
  $p.html(glob.desc);

});
