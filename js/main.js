var $ul = $('ul');
var $li = $('<li>');

grains.forEach (function () {
  $ul.append ($(this));
});
