// Handle Register button click using jQuery
$('#registerBtn').click(function() {
  alert('Register button clicked!');
  // Your registration logic here
});

// Example: fadeIn and fadeOut event cards with jQuery
// Assuming event cards have class '.event-card'

$('.event-card').fadeOut(500, function() {
  console.log('Event card faded out');
  $(this).fadeIn(500);
});
