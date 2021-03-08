/*const user = {
    nombre: 'Cristian',
    apellido: 'Zelaya',
    email: 'criszel94@gmail.com',
    contrasena: 'cazv9494@'
    };

function login(){  
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (user.email === email && user.contrasena === pass){
        console.log(`Bienvenido ${user.nombre} ${user.apellido}`);
        alert(`¡Bienvenido ${user.nombre} ${user.apellido}!`);
    }
    else{
        console.log('El usuario o contraseña no son correctos');
    }
}*/

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
    }
];

function login(){
    for(i in user){
        let usuario = user[i];
        console.log(usuario.id);

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
    
        if (usuario.email === email && usuario.contrasena === pass){
            console.log(`Bienvenido ${usuario.nombre} ${usuario.apellido}`);
            alert(`¡Bienvenido ${usuario.nombre} ${usuario.apellido}!`);
            break;
        }
    }
}


/*function login(){  
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (usuario[i].email === email && usuario[i].contrasena === pass){
        console.log(`Bienvenido ${user.nombre} ${user.apellido}`);
        alert(`¡Bienvenido ${user[i].nombre} ${user[i].apellido}!`);
    }
    else{
        console.log('El usuario o contraseña no son correctos');
        alert('El usuario o contraseña no son correctos');
    }
}*/