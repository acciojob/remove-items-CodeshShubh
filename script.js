//your JS code here. If required.
let select = document.getElementById('colorSelect');

let btn = document.querySelector('input[type="button"][value ="Select and Remove"]');
btn.addEventListener('click', ()=>{
	if(select.selectedIndex !==-1){
		select.remove(select.selectedIndex);
	}else{
		alert('No option selected to remove!') 
	}
})