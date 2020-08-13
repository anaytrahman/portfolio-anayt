var projects = document.querySelectorAll('.projects');
var workMenu = document.querySelectorAll('.work-menu');



 for(var i=0; i<projects.length; i++){
	 projects[i].addEventListener('mouseover', function(){
		
	hideEliment()
	this.children[0].style.display = "block";
	/*console.log(this.children);*/
	
}); 

	 projects[i].addEventListener('mouseout', function(){
		 hideEliment()
	 })
 }
 
 function hideEliment(){
	 		 for (var j = 0; j < workMenu.length; j++) {
			workMenu[j].style.display = "none"
			
    }
 }
 
 var showBtn =document.querySelector('.show-btn-wrap');
 var hideBtn =document.querySelector('.hide-btn');
 
 
 showBtn.addEventListener('click', function(){
	 
	 window.location.href = 'menu.html';
 });
 
 
 hideBtn.addEventListener('click', function(){
	 
	 window.location.href = 'index.html';
 });
 
 
	/*hideBtn.addEventListener('click', function(){
	window.location.href= 'index.html';
})*/