$(document).ready(function() {
 				/*BTN DO MENU  HOVER */
 				$('.btn-menu').hover(
	  				function(){
	  					$(this).css({'background':'gray'})
	  				}, function(){
	  					$(this).css({'background':'white'})
	  				}
	  			);

	  			/*dISPLAY DE ATENDIMENTOS */
	  			$('#display-atendimentos').css({'overflow-y':'scroll','max-height':'300px','z-index':'1'})

	  			/*BTN FORM ATENDIMENTO */
	  			$('#form-atendimento').hide();
	  			$(document).on('click','#btn-cadastrar-atendimento', function(){
	  				$('#form-atendimento').show();
	  				$('#btn-cadastrar-atendimento').addClass('form-atendimento-aberto')
	  				
	  			})

	  			$(document).on('click','.form-atendimento-aberto', function(){
	  				$('#form-atendimento').hide();
	  				$('#btn-cadastrar-atendimento').removeClass('form-atendimento-aberto')
	  				
	  			})

	  			

 				
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
 				
 			

 				$(document).on('click','#todos-leads', function(){
 					alert('tidos os leads')
 				})

 				/*BTN DO LEADS  HOVER */
 				$('.leads').hover(
	  				function(){
	  					$(this).css({'transform': 'initial','box-shadow': '0 5px 15px rgba(0,0,0,0.6)'})
	  				}, function(){
	  					$(this).css({'transform': 'scale(1.03)','box-shadow': 'none'})
	  				}
	  			);

	  			/*BTN DO LEADS ESTADO CLICK 
	  			$(document).on('click','.leads', function(){
	  				alert('abriu o leads')
	  			});*/

 				/*BTN EDITAR PERFIL */
 				$(document).on('click','#editar-perfil', function(){
 					alert('Editar PErfil')
 				})


 				/*AREA DE TEXTO DESCRIÇÃO DO ATENDIMENTO */
 				$(document).on('click','#descricao-atendimento', function(){
 					$('#display-atendimentos').css({'overflow':'hidden'})
 				})



 		





		dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
		monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
		now = new Date
	

			$('#data-hora-header').html("<p> Hoje é " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + + now.getDate () +  " de "  +     now.getFullYear () + ". </p>");
			var dataAtedimento = dayName[now.getDay() ] + ", " + now.getDate () + " de " + + now.getDate () +  " de "  +     now.getFullYear ()
			$('#data-atendimento').val(dataAtedimento.toUpperCase());
		});
