window.onload = function(){
  add();
}

var box = document.getElementById('trell');
var tarea = document.getElementById('task');
var postIt = document.getElementById('principal');


function add(){
  tarea.addEventListener('click', function (){
    var inp = document.createElement('input');
    var btn = document.createElement('button');
    var spn = document.createElement('span')

    btn.textContent = 'Añadir un lista';
    spn.textContent = 'x';
    box.appendChild(inp);
    box.appendChild(btn);
    box.appendChild(spn);
    box.removeChild(tarea);

//agregar clases a los elements//
//inp.classList.add(inpu);


btn.addEventListener('click', function(){
  var lista = document.createElement('p');
  lista.textContent = inp.value;
  inp.value = '';
  box.appendChild(lista);
  box.removeChild(inp);
  box.removeChild(btn);
  box.removeChild(spn);

  var hermano = document.createElement('div');
  hermano.appendChild(inp);
  hermano.appendChild(btn);
  hermano.appendChild(spn);
  postIt.appendChild(hermano);
//agregar clases al hermano//
})

  })
}
