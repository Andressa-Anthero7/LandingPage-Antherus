$(document).ready(function() {
 				

	  			

 				/* SWITCH DO MOD DARK/LIGHT */
			  	$(document).on('click','#switch', function(){
			  		var checkTermos = document.getElementById('switch');
			  		if(checkTermos.checked){
			  			$('body').css({'background':'black','color':'white'});
			  			$('#menu-deslizante').css({'background':'#363636','color':'white'});
			  			$('.btn-menu').css({'background':'#363636','color':'white'});
			  			$('.leads').css({'background':'black','color':'white'});

			  			$('footer').css({'background':'black','color':'white'});

			  			$('.btn-menu').hover(
			  				function(){
			  					$(this).css({'background':'#708090'})
			  				}, function(){
			  					$(this).css({'background':'initial'})
			  				}
			  			);
			  			
			  			
			  		}else{
			  			
			  			$('body').css({'background':'initial','color':'initial'});
			  			$('#menu-deslizante').css({'background':'initial','color':'initial'});
			  			$('.btn-menu').css({'background':'initial','color':'initial'});
			  			$('.leads').css({'background':'initial','color':'initial'});
			  			
			  			$('footer').css({'background':'initial','color':'initial'});

			  			$('.btn-menu').hover(
			  				function(){
			  					$(this).css({'background':'#708090'})
			  				}, function(){
			  					$(this).css({'background':'initial'})
			  				}
			  			);
			  			
			  		}
			  	});


			  	/*BTN DO MENU  HOVER */
 				$('.btn-menu').hover(
	  				function(){
	  					$(this).css({'background':'gray'})
	  				}, function(){
	  					$(this).css({'background':'white'})
	  				}
	  			);

	  			

 				
 			

 				

 				/*BTN DO LEADS  HOVER */
 				$('.leads').hover(
	  				function(){
	  					$(this).css({'transform': 'initial','box-shadow': '0 5px 15px rgba(0,0,0,0.6)'})
	  				}, function(){
	  					$(this).css({'transform': 'scale(1.03)','box-shadow': 'none'})
	  				}
	  			);

	  		

 				/*BTN EDITAR PERFIL */
 				$(document).on('click','#editar-perfil', function(){
 					alert('Editar PErfil')
 				})

 				/*BTN HISTORICO DE ATENDIMENTO */
				$('#display-atendimentos').hide();
	  			$(document).on('click','#btn-mostra-display-atendimento', function(){
	  				$('#display-atendimentos').show();
	  				
	  				$('#btn-mostra-display-atendimento').addClass('aberto')
	  				
	  			})

	  			$(document).on('click','.aberto', function(){
	  				$('#display-atendimentos').hide();
	  				
	  				$('#btn-mostra-display-atendimento').removeClass('aberto')
	  				
	  			});



	  			/*BTN CADASTRAR ATENDIMENTO */
	  			$('#form-atendimento').hide();
	  			$(document).on('click','#btn-cadastrar-atendimento', function(){
	  				$('#form-atendimento').show();
	  				$('#historico-atendimento').hide();
	  				$('#btn-cadastrar-atendimento').addClass('open')
	  				
	  				
	  			})


	  			$(document).on('click','.open', function(){
	  				$('#form-atendimento').hide();
	  				$('#historico-atendimento').show();
	  				$('#btn-cadastrar-atendimento').removeClass('open')
	  				
	  				
	  			})

	  			




 				

	  			



 		





		dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
		monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
		now = new Date
	

			$('#data-hora-header').html("<p> Hoje é " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + + now.getDate () +  " de "  +     now.getFullYear () + ". </p>");
			var dataAtedimento = dayName[now.getDay() ] + ", " + now.getDate () + " de " + + now.getDate () +  " de "  +     now.getFullYear ()
			$('#data-atendimento').val(dataAtedimento.toUpperCase());
		});
