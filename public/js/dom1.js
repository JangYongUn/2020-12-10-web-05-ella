var colors = ['red', 'green', 'blue', 'pink', 'orange'];
$("#btCreate").click(onCreateBox);
$("#btReset").click(onResetBox);

function onCreateBox(){
	var cnt = Number($("[name='cnt']").val());
	for(var i=0 ; i<cnt ; i++ ){
	  color = Math.ceil(Math.random() * 5 ) -1;
		$(".wrapper").append('<div class="box '+colors[color]+'"></div>');
		console.log(colors[color]);
	} 
}

function onResetBox(){
	$(".wrapper").empty();
}

