const user = [
    {
        id: 1,
        nombre: 'Cristian',
        apellido: 'Zelaya',
        email: 'criszel94@gmail.com',
        contrasena: 'cazv9494@'
    },
    {
        id: 2,
        nombre: 'Fany',
        apellido: 'Gomez',
        email: 'fany94@gmail.com',
        contrasena: '123'
    },
    {
        id: 3,
        nombre: 'Nathy',
        apellido: 'Gutierrez',
        email: 'nathy94@gmail.com',
        contrasena: '12345678'
    },
    {
        id: 3,
        nombre: 'David',
        apellido: 'Zelaya',
        email: 'david94@gmail.com',
        contrasena: '12'
    }
];

function login(){
    for(i in user){

        let usuario = user[i];

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
    
        if (usuario.email === email && usuario.contrasena === pass){
            alert(`¡Bienvenido ${usuario.nombre} ${usuario.apellido}!`);
            break;
        }
    }
}