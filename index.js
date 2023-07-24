// Seu chefe precisa de dados da concessionária e de algumas alterações cadastrais de seus veículos.
// Dada a lista de veículos:
const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },

]

//   Exercício 1 
function contaTotal(reference) {
    return reference.length
}

//   Exercício 2
function precoTotal(reference) {
    let somaPreco = 0
    for (i = 0; i < reference.length; i++) {
        somaPreco += reference[i].preco
    }
    return somaPreco.toFixed(2)
}

//   Exercício 3
function filtraPorMarca(listaCarros, marcaProcurada) {
    let carrosFiltrados = listaCarros.filter(car => car.marca === marcaProcurada);
    return carrosFiltrados;
}

//   Exercício 4
function filtraPorAcessorio(listaCarros, acessorioDesejado) {
    let filtro = listaCarros.filter(car => car.acessorios.includes(acessorioDesejado));
    return filtro;
}

//   Exercício 5
function eCarroCompleto(listaCar) {
    let filtro = listaCar.filter(car => car.completo === true);
    return filtro;
}

// Exercício 6
function adicionaCarro(listaCarros, novoCarro) {
    listaCarros.push(novoCarro)
    return listaCarros
}

let addCarro = {
    modelo: "AA",
    marca: "BB",
    ano: "2010",
    cor: "Cinza",
    completo: false,
    acessorios: [],
    preco: 19500.50
}

// Exercício 7
function removeCarro(listaCarros, indiceRemover) {
    if (indiceRemover >= 0 && indiceRemover < listaCarros.length) {
        listaCarros.splice(indiceRemover, 1)
    } else {
        return "Índice indicado não encontrado"
    }
    return listaCarros
}

// Exercício 8
function contaCarrosNovos(listaCar) {
    let idade = listaCar.filter(car => parseInt(car.ano) >= 2023 - 10);
    return idade.length;
  }
  
  // Exercício 9
function donosDosCarros(listaCar, indice, pessoa) {
      
      for(i = 0; i < listaCar.length; i++) {
        indice = i;
        listaCar[indice].donos = [];
        listaCar[indice].donos.push(pessoa);
    }
    
    return listaCar;
}

let proprietario = {
    nome: "Davi",
    telefone: "61985853737",
  };

  contaTotal(carros);
  precoTotal(carros);
  filtraPorMarca(carros, "VW");
  filtraPorAcessorio(carros, 'Alarme');
  eCarroCompleto(carros);
  adicionaCarro(carros, addCarro);
  console.log(removeCarro(carros, 7));
  contaCarrosNovos(carros);
  donosDosCarros(carros, 0, proprietario);