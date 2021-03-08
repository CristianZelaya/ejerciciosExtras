let producto = [];

class Producto{
    constructor(id, nombre, descripcion, stock){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}
producto = [
    {
        id: 1,
        nombre: 'Bocina',
        descripcion: 'Super Bocina',
        stock: 5
    },
    {
        id: 2,
        nombre: 'Mouse',
        descripcion: 'Mouse Moderno',
        stock: 10
    }
];

let producto1 = new Producto(1, 'Silla', 'Silla mediana', 4);
producto.push(producto1);

for( let i = 0; i < producto.length; i ++){
    console.log(producto[i].nombre + ' - ' + producto[i].descripcion + ' - ' + producto[i].stock);
    document.write(producto[i].nombre + ' - ' + producto[i].descripcion + ' - ' + producto[i].stock+'</br>');
}

