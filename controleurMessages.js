

	var idToEdit;
	
	/*#################################################
				Ajouter un message
	#################################################*/
	
	$('#envoyerNew').on('click', function(event) 
	{
		event.preventDefault();
		createTask($('#textarea').val());
		
		$('#textarea').val('');
	});
	
	/*#################################################
				Editer un message
	#################################################*/


	$('#envoyerEdit').click(function() {
		event.preventDefault();
		setTask(idToEdit);
	});

	/*#################################################
				Creer Vue Message
	#################################################*/

	function createMessage(msg, id)
	{
				//=========
				// Message
				//=========
		//text
		var message = document.createElement('h4');
		$(message).text(msg);
		
		//conteneur Text
		var conteneurMessage = document.createElement('div');
		$(conteneurMessage).attr('class', 'row');
		$(message).appendTo(conteneurMessage);
		
				//=========
				// Controle
				//=========
				
		//Bouton Edit
		var spanButtonEdit = document.createElement('span');
		$(spanButtonEdit).attr('class', 'glyphicon glyphicon-edit');
		var buttonEdit = document.createElement('button');
		$(buttonEdit).attr('class', 'btn btn-primary btn-sm pull-right edit')
					.attr('data-toggle', 'modal')
					.attr('href','#editMessage')
					.text(" Edit");
		$(spanButtonEdit).prependTo(buttonEdit);
		buttonEdit.onclick = function() 
			{
				event.preventDefault();
				getTask(id);
				idToEdit = id;
			};
			
		
		//Bouton Supprimer
		var spanButtonRemove = document.createElement('span');
		$(spanButtonRemove).attr('class', 'glyphicon glyphicon-remove');
		var buttonRemove = document.createElement('button');
		$(buttonRemove).attr('class', 'btn btn-danger btn-sm pull-right remove').text(" Supprimer");
		$(spanButtonRemove).prependTo(buttonRemove);
		buttonRemove.onclick = function() 
			{
				event.preventDefault();
				deleteTask(id);
			};
		
		//Conteneur Controle
		var conteneurButtons = document.createElement('div');
		$(conteneurButtons).attr('class', 'row');
		$(buttonEdit).appendTo(conteneurButtons);
		$(buttonRemove).appendTo(conteneurButtons);
		
		
			//==============================
			//   	Conteneur Globale
			//==============================
			
		var conteneur = document.createElement('div');
		$(conteneur).attr('class', 'message').attr('id', id);
		
		//separateur
		if(nbMessages!=0)
		{
			var ligneBar = document.createElement('hr');
			$(ligneBar).appendTo(conteneur);
		}
		
		$(conteneurMessage).appendTo(conteneur);
		$(conteneurButtons).appendTo(conteneur);

		
		$(conteneur).appendTo('#msgPanel');
	}

	/*#################################################
				Lancement
	#################################################*/
	
	getAllTasks();
