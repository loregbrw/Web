console.log('Curso JS');

// <script defer scr="arquivo java scrip"></script>


let valor1, valor2, total;
valor1 = 5;
valor2 = 3;

total = valor1 + valor2;
console.log(total);

total = ++valor1;
console.log(total);

total = --valor2;
console.log(total);


function soma(v1, v2) {
    let total;
    total = v1 + v2;
    return total;
}

console.log(soma(valor1, valor2));

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2009,
    placa:"ABC-1234",
    buzina: function(){ alert('BIBIBI') },
    completo: function(){
        return "A marca é ", this.marca;
    }
};
    console.log("Obejto: ", carro);
    console.log("\nPlaca: ", carro.placa);
    console.log("\nCompleto:", carro.completo());