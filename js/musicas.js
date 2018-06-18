var musicas = [{
    "id": "musica-1",
    "titulo": "A flor",
    "banda" : "Los Hermanos",
    "video" : "https://www.youtube.com/watch?v=9J80AvtDtUk"
}, {
    "id": "musica-2",
    "titulo": "Transmissão de Pensamento",
    "banda" : "Melim",
    "video" : "https://www.youtube.com/watch?v=Q7MqdKQseOM"
}, {
    "id": "musica-3",
    "titulo": "I'll wait",
    "banda" : "Mumford & Sons",
    "video" : "https://www.youtube.com/watch?v=rGKfrgqWcv0"
}, {
    "id": "musica-4",
    "titulo": "Better Together",
    "banda" : "Jack Johnson",
    "video" : "https://www.youtube.com/watch?v=u57d4_b_YgI"
}];

var lista = document.getElementById("listaMusicas");
function limparLista() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}
function exibirMusicas() {
    limparLista();
    for (var i = 0; i < musicas.length; i++) {
        var option = document.createElement("option");
        option.textContent = musicas[i].titulo + " - " + musicas[i].banda;
        option.setAttribute("value", musicas[i].id);
        lista.appendChild(option);
    }
}
exibirMusicas();
