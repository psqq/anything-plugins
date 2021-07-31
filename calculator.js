{
  name: 'Calculator',
  run() {
    document.body.innerHTML = `
    	<input type="text"><br><br>
    	Result: <span></span>
    `;
    var result = document.querySelector('span');
    var input = document.querySelector('input');
    input.onkeyup = () => {
    	result.innerText = eval("(" + input.value + ")");
    }
  }
}
