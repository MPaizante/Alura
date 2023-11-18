var paulo = {
    nome:'Paulo',
    vitoria: 10,
    empate:0,
    derrota:0,
    pontos:0
}
var rafa = {
    nome:'Rafa',
    vitoria: 10,
    empate:0,
    derrota:0,
    pontos:0
}
var gui = {
    nome:'Gui',
    vitoria: 10,
    empate:0,
    derrota:0,
    pontos:0
}
var renato = {
    nome:'Renato',
    vitoria: 10,
    empate:0,
    derrota:0,
    pontos:0
}

var elementoTabela = document.getElementById('tabelaJogadores')
elementoTabela.innerHTML = `
    <tr>
        <td>Paulo</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button onClick="adicionarVitoria()">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
    </tr>
`

function adicionarVitoria(){

}
function adicionarEmpate(){
    
}
function adicionarDerrota(){
    
}
