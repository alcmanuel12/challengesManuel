class PizzaBase {
    constructor(nombre, precioBase, ingrediente){
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.ingrediente = ingrediente;
    }
}

class suplemento {
    constructor(nombreSuplemento, precioSuplemento) {
        this.nombreSuplemento = nombreSuplemento;
        this.precioSuplemento = precioSuplemento;
    }
}

const margarita = new PizzaBase('Marguerita', 9.30, ['Tomate', 'Mozzarella', 'Albahaca']);
const prosciutto = new PizzaBase('Prosciutto', 12.00, [ 'Tomate', 'mozzarella', 'jamón dulce' , 'orégano']);
const prosciuttoEfungi = new PizzaBase('Prosciutto e funghi', 12.50,[ 'Tomate', 'mozzarella', 'jamón dulce' ,'champiñones', 'orégano'] )
const stacioni4 = new PizzaBase('4 stacioni', 12.50,[ 'Tomate', 'mozzarella', 'jamón dulce' ,'champiñones','alcachofas','oliva', 'orégano'])

const ingredientesBasicos = [
    new suplemento('Jamón dulce', 0.90),
    new suplemento('Extra Queso Mozzarella', 0.90),
    new suplemento('Tomate Natural', 0.90),
    new suplemento('Champiñones', 0.90),
    new suplemento('Alcachofas', 0.90),
    new suplemento('Atún', 0.90)
];

const gourmet = [
    new Suplemento('Olivas', 1.20),
    new Suplemento('Alcaparras', 1.20),
    new Suplemento('Jamón Serrano', 1.20),
    new Suplemento('Pollo', 1.20)
];

const premium = [
    new Suplemento('Anchoas', 2.20),
    new Suplemento('Salmón', 2.20),
    new Suplemento('Ternera picada', 2.20)
];
const salsas = [
    new Suplemento('Salsa barbacoa', 1.00),
    new Suplemento('Salsa picante', 0.90)
]

const bordeRelleno = new Suplemento('Borde relleno de queso', 1.20)

function MenuPizzeria(PizzaBase, suplemento){
    let precioFinal = PizzaBase.precioBase;
    console.log('Pizza: ', PizzaBase.nombre, '  ', PizzaBase.precioBase, ' €');

    if (suplemento.length > 0){
        console.log('Suplementos añadidos: ');
        suplemento.forEach(suplemento => {
            console.log(suplemento.nombreSuplemento, ' ', suplemento.precioSuplemento, ' €');
            precioFinal += suplemento.precioSuplemento;
        });
    }
    console.log('Precio con suplemento: ', precioFinal.toFixed(2), '€');
}

MenuPizzeria(margarita, [ingredientesBasicos[1]]);
