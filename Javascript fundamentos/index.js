// funciones
function sumar(num){
	console.log(num);
}

sumar(10)

const sumarDos = (num1, num2) => (num1 + num2);

const resultado = sumarDos(20, 30);
console.log(resultado);

const mensaje = nombre => 'hola soy ' + nombre

const resultadoDos = mensaje('Juanito');
console.log(resultadoDos);

const sumaTres = (num = 0) => {
	console.log(num + 3);
}

sumaTres(9);

// template string
const numero = (num1, num2) => `el numero es: ${num1 + num2}`;

const resultado = numero(10, 20)
console.log(resultado);

// objetos
const mascota = {
	nombre: 'Tom',
	edad: 10,
	vivo: true,
	razas: ['peludo', 'negro']
}

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

mascota.id = 1;
console.log(mascota.id);

const nombreMascota = mascota.nombre;

const {edad, nombre} = mascota;
console.log(nombre);

const web = {
	nombre: 'bluuweb',
	links: {
		enlace: 'www.bluuweb.cl'
	},
	redesSociales: {
		youtube: {
			enlace: 'youtube.com/bluuweb',
			nombre: 'bluuweb yt'
		},
		facebook: {
			enlace: 'facebook.com/bluuweb',
			nombre: 'bluuweb fb'
		}
	}
}
const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

const {enlace, nombre} = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre);

// fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
	.then(res => res.json())
	.then(data => {
		//console.log(data.results);
		let arrayNombres = []
		data.results.forEach(element => {
			//console.log(element.name);
			arrayNombres.push(element.name);
		});
		console.log(arrayNombres);
	})
	.catch(error => console.log(error))

// Async Await
const obtenerPokemones = async() => {
	try {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
		const data = await res.json();
		console.log(data.results);
		const arrayNombres = data.results.map(poke => poke.name);
		console.log(arrayNombres);
	} catch(error){
		console.log(error);
	}
}
obtenerPokemones();
