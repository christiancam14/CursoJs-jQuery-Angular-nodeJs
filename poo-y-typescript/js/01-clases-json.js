var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De Disco',
    velMax: '60km',
    cambiaColor: function(nuevo_color){
        // bicicleta.color = new_color;
        this.color = nuevo_color;
    }
};

bicicleta.cambiaColor('Azul');

console.log(bicicleta);