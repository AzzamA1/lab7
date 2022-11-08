function init(){
  function alertMe(){
    var input = document.getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = input;
	alert('Azzam Abu Hamdan: ' + input.value);
  }
  
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', input);
}
window.addEventListener('load', init);
