$(document).ready(function(){

	$("#botao_voltar").hide();
		$.ajax({
	    	url: "http://localhost:3000/breeds",		
				beforeSend: function(carregando)
				{
					console.log("Carregando...");
		    },
				success: function(finalizado)
				{
					console.log("Concluído.");

					var atr_cachorro = "";

					$.each(finalizado, function(index, valores)
					{
					atr_cachorro += "<div class='box_cachorro_individual' id='"+ valores.id +"'>";								
					atr_cachorro += "<div class='box_cachorro_nome'>"+ valores.name +" <img class='imagem_racas_tiny' src='images/tiny/"+valores.id+".png'/></div>";
					atr_cachorro += "<div class='box_cachorro_temperamento'><span class='box_cachorro_temperamento_txt'>"+ valores.temperament +"</span></div>";
					atr_cachorro += "</div>";	
					});

					$(".box_cachorros").html(atr_cachorro);

					$(".box_cachorro_individual").click(function(evento)
					{
						var id_cachorro = $(this).attr('id');

						$.ajax({		
						url: "http://localhost:3000/breed/"+id_cachorro,
						success: function(exibir_individual)
								{
									var inf_cachorro ="";      					

									inf_cachorro += "<span class='box_cachorro_nome_unico'>"+exibir_individual.name+"</span>";								
									inf_cachorro += "<ul class='box_cachorro_informacoes_ul'>";	

								inf_cachorro += "<li><b class='li_campo'>Life span</b>: "+exibir_individual.life_span+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Bred for</b>: "+exibir_individual.bred_for+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Breed group</b>: "+exibir_individual.breed_group+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Temperament</b>: "+exibir_individual.temperament+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Weight imperial</b>: "+exibir_individual.weight.imperial+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Weight metric</b>: "+exibir_individual.weight.metric+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Height imperial</b>: "+exibir_individual.height.imperial+".</li>";
								inf_cachorro += "<li><b class='li_campo'>Height metric</b>: "+exibir_individual.height.metric+".</li>";

								inf_cachorro += "</ul>";

								$(".box_cachorro_informacoes").html(inf_cachorro);

								$(".box_cachorro_imagens").html("<img src='images/"+id_cachorro+".jpg' width='480px' height='370px'></img>");
								$(".box_cachorros").slideUp();
								$(".box_topo").slideUp();
								$(".box_cachorro_imagens").slideDown();
								$(".box_cachorro_informacoes").slideDown();
								$("#botao_voltar").show();
								}
						});
					});

					$("#botao_voltar").click(function()
					{
						$(".box_cachorros").slideDown();
						$(".box_topo").slideDown();
						$(".box_cachorro_imagens").slideUp();
						$(".box_cachorro_informacoes").slideUp();
						$("#botao_voltar").slideUp();
					});

				},
				error: function(erro)
				{
					console.log("erro ao carregar a URL!!, verifique se a porta que foi estipulada no ajax é a mesma do json-server watch");
					console.log("Verifique se está instalado o node.js (npm)");
					console.log("Com a variavel de ambiente no path configurada o npm");
					console.log("faça o download do json-server");
					console.log(" npm install -g json-server ");
					console.log("Depois dê um watch pelo cmd dentro da pasta que está o arquivo breeds.json que é o primeiro arquivo json na pasta dog_finder_ajax");
					console.log("json-server --watch breeds.json");
				}	
			});

});