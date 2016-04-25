$(document).ready(function(){

/* Button which shows and hides div with a id of "post-details" */
$( ".toggleClosedQs" ).click(function() {
  
  var target_selector = $(this).attr('data-target');
  var $target = $( target_selector );
  
  if ($target.is(':hidden'))
  {
    $target.show( "slow" );
  }
  else
  {
    $target.hide( "slow" );
  }
  
  console.log($target.is(':visible'));

  
});
  
/* button which creates a new paragraph <p>New row added</p> 
$( ".btn-add-new-line" ).click(function() {

  var target_selector = $(this).attr('data-target');
  var $target = $( target_selector );
  
  if ($target.is(':visible'))
  {
    var newRow = "New row added";
    
  $target.append("<p>" + newRow + "</p>");
    
    console.log("row added");
    
    var i = $target.text().length;
    console.log("There is " + i + " characters in div");
    
    var p = $target.html().length;
    console.log("String length of #post-details is: " + p + " ");
  }
});*/

});





/*$(document).ready(function(){
    $('#visual').click(function() {
        $('#visualQNum').hide();
        $('.' + $(this).data('visual')).show();
    });
});*





/*$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('visual') == 'visual') {
            $('#visualQNum').show();           
       }

       else {
            $('#visualQNum').hide();   
       }
   });
});
*/
// var closedQs = document.getElementById('showClosedQs'); // Assumes element with id='button'

/*closedQs.onclick = function() {
    var q = document.document.getElementsByClassName('panel-default');
    var qState = q.getAttribute('data-state');
    q.setAttribute('data-state', 'closed');
    if (q.style.display !== 'none') {
        q.style.display = 'none';
    }
    else {
        q.style.display = 'block';
    }
};*/