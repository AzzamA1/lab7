function init(){
  function alertMe(){
    var input = document.getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = input;
	alert('Azzam Abu Hamdan: ' + input.value);
  }

window.addEventListener('load', init);
