$(function() {
  'use strict';

  var objectsList = [
    { name:'porte', img:'porte.png' },
    { name:'tabouret', img:'tabouret.png' },
    { name:'chaise', img:'chaise.png' },
    { name:'boite de concerve', img:'boite.png' }
  ];

  var scienceList = [
    'intrication quantique',
    'physique quantique',
    'moment cinétique',
    'ambiguïté cellulaire'
  ];

  var $btn = $('.generate-btn');
  $btn.click(generate);

  var $title = $('.title');
  var $img = $('.obj-img');

  // Init
  generate();

  function randomInList (list) {
    var listLength = list.length;
    var i = Math.floor(Math.random() * listLength);
    return list[i];
  } // end randomInList

  function randomInt (max) {
    return Math.floor(Math.random() * (max + 1));
  } // end randomInt

  function randomInRange (min, max) {
    return (min + randomInt(max - min))
  } // end randomInRange

  function generate() {
    var obj = randomInList(objectsList);
    var science = randomInList(scienceList);
    var numEpisode = randomInRange(37, 200);
    var title = obj.name + ' et ' + science + ' — ' + numEpisode + ' - e-penser';
    title = title.charAt(0).toUpperCase() + title.slice(1);

    // Apply
    $title.html(title);
    $img.attr('src', 'images/' + obj.img);
  } // end generateName


});
