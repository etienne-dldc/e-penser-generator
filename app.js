$(function() {
  'use strict';

  var lastObj = null;
  var lastScience = null;

  var objectsList = [
    { name:'porte', img:'porte.png' },
    { name:'tabouret', img:'tabouret.png' },
    { name:'chaise', img:'chaise.png' },
    { name:'boite de concerve', img:'boite.png' },
    { name:'clé à molette', img:'cle.png' },
    { name:'enjoliveur', img:'enjoliveur.png' }
  ];

  var scienceList = [
    'intrication quantique',
    'physique quantique',
    'moment cinétique',
    'ambiguïté cellulaire',
    'téléportation quantique',
    'paradoxe EPR'
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
    do {
      var obj = randomInList(objectsList);
    } while (obj == lastObj);
    lastObj = obj;
    do {
      var science = randomInList(scienceList);
    } while (science == lastScience);
    lastScience = science
    var numEpisode = randomInRange(37, 200);
    var title = lastObj.name + ' et ' + lastScience + ' — ' + numEpisode + ' - e-penser';
    title = title.charAt(0).toUpperCase() + title.slice(1);

    // Apply
    $title.html(title);
    $img.attr('src', 'images/' + lastObj.img);
  } // end generateName


});
