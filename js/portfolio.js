/*------------------------------------------------------------------
Project:    Force Team
Author:     Petya Petinych
Version:    1.0
Created:        20/05/2014
Last change:    22/06/2014
-------------------------------------------------------------------*/

// Isotop Gallery 
// ==============

var $container = $('#isotope-container');
    $container.isotope({
    itemSelector : '.isotope-item',
});
$('#filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
});