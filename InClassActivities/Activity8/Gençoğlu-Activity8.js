var languages = [
    "Asp", 
    "JavaScript", 
    "Lisp",
    "Perl", 
    "PHP", 
    "Python" 
];

$(function(){
    $( "#language" ).autocomplete({
       source: languages 
   });

});

$( function() {
 $( "#birthday" ).datepicker();
} );