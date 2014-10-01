$(function() {		
	$.ajax(
	{
		type: 'GET',
		url: 'http://localhost:5000/tasks',
		dataType : 'json',
		success: function(data) 
			{
				$('#test').text('Retour Methode Post' + data);
				bob = data;
			},
		error: function() 
			{
				$('#test').text('La requête n\'a pas abouti');
			}
	});
	
	$.ajax(
	{
		type: 'POST',
		url: 'http://localhost:5000/tasks',
		dataType : 'json',
		data: {"task": "Bob"},
		success: function(data) 
			{
				$('#test2').text('Retour Methode Post' + data);
			},
		error: function() 
			{
				$('#test2').text('La requête n\'a pas abouti');
			}
	});
	
});