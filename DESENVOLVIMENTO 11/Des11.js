/*Construção de objeto*/

const bolo = {
    massa: "chocolate",
    recheio: "ninho",
    pesoEmKg: 1
}

/*Função para o objeto*/
const propriedades = () => {console.log("A massa do bolo é de: " + 
    bolo.massa + " o recheio é de: " + 
    bolo.recheio + " e o peso é de: " +
    bolo.pesoEmKg)
}

/*Construção do Array*/
function arr1() {
    return ["Mário", "Roberto", "Ana"]
}

/*Função para o Array*/

const listaArray = () => {
    console.log("O nome dos filhos são: " + arr1()[0] + ", " + arr1()[1] + " e " + arr1()[2] + ".")
}

/*Exibição das funções, pois as duas contém os arrays e precisam ser "chamadas" por fora*/

propriedades();
listaArray();

