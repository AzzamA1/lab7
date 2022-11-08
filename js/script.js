function init(){
  function alertMe(){
    var input = document.getElementById('entryinput').value;
	document.getElementById('textoutput').innerHTML = input;
	alert('Azzam Abu Hamdan: ' + input);
  }
  
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', input);
}
window.addEventListener('load', init);
