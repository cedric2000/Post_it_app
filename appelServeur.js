	
	var nbMessages = 0;
		
		//==============================
		//	Recuperer toute les taches
		//==============================
	
	function getAllTasks()
	{
		$.ajax(
		{
			type: 'GET',
			url: 'http://localhost:5000/tasks',
			dataType : 'json',
			success: function(data) 
				{
					if(data.tasks.length==0){
						$('#msgPanel').hide('slow');
					}
					else
					{
						for (var i = 0; i < data.tasks.length; i++) {
							nbMessages = i;
							createMessage(data.tasks[i].task, data.tasks[i].id);
						}
						$('#msgPanel').show('slow');
						
					}
				},
			error: function() 
				{
					$(".alert").show("slow");
				}
		});
	}
	
		//==============================
		//	Creer une nouvelle taches
		//==============================
	
	function createTask(message)
	{
		var j={"task":message};
		$.ajax(
		{
			type: 'POST',
			url: 'http://localhost:5000/tasks',
			contentType : 'application/json',
			dataType : 'json',
			data: JSON.stringify(j),
			success: function(data) 
				{
					createMessage(data.task.task, data.task.id);
					nbMessages++;
					$('#msgPanel').show("slow");
				},
			error: function() 
				{
					$(".alert").show("slow");
				}
		});
	}

		//==============================
		//	Recuperer une seule tache
		//==============================
		
	function getTask(task_id){
		$.ajax(
		{
			type: 'GET',
			url: ("http://localhost:5000/tasks/"+task_id),
			success: function(data) 
				{
					$('#textareaEdit').val(data.task.task);
				},
			error: function() 
				{
					$(".alert").show("slow");
				}
		});
	}
	
	
		//==============================================
		//			Mettre à jour une tache
		//==============================================

	function setTask(task_id){
		var j={"task":$(textareaEdit).val()};
		$.ajax(
		{
			type: 'PUT',
			url: ("http://localhost:5000/tasks/"+task_id),
			contentType : 'application/json',
			dataType : 'json',
			data: JSON.stringify(j),
			success: function(data) 
				{
					$('#'+data.task.id+' h4').text(data.task.task);
				},
			error: function() 
				{
					$(".alert").show("slow");
				}
		});
	}
	
		//==============================================
		//				Supprimer une tache
		//==============================================

	function deleteTask(task_id){
		var j={"id":task_id};
		$.ajax(
		{
			type: 'DELETE',
			url: ("http://localhost:5000/tasks/"+task_id),
			success: function(data) 
				{
					if(data.result == true)
					{
						$('#'+task_id).remove();
						nbMessages--;
					}
					
				},
			error: function() 
				{
					$(".alert").show("slow");
				}
		});
	}