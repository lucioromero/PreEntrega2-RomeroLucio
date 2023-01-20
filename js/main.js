alert("Hola! Tenemos algunos destinos disponibles para tu próximo viaje.")

function alertDestinos(){
    alert("Estos son nuestros destinos disponibles:")
}

// Clase

class Destino{
    constructor(nombre, ciudad, pais, precio){
        this.nombre = nombre
        this.ciudad = ciudad
        this.pais = pais
        this.precio = precio
    }
}

// Objetos

const tandil = new Destino("Tandil", "Buenos Aires", "Argentina", 35000)
const bariloche = new Destino("Bariloche", "Rio Negro", "Argentina", 52000)
const carlosPaz = new Destino("Villa Carlos Paz", "Córdoba", "Argentina", 46000)
const fortaleza = new Destino("Fortaleza", "Ceará", "Brasil", 87000)
const porto = new Destino("Porto Alegre", "Rio Grande", "Brasil", 92000)
const copacabana = new Destino("Copacabana", "Rio de Janeiro", "Brasil", 97500)
const santaMarta = new Destino("Santa Marta", "Magdalena", "Colombia", 78000)
const cartagena = new Destino("Cartagena", "Bolivar", "Colombia", 71000)
const bogota = new Destino("Bogota", "Antioquia", "Colombia", 65000)

// Array

const ciudades = []

ciudades.push(tandil, bariloche, carlosPaz, fortaleza, porto, copacabana, santaMarta, cartagena, bogota)

// Filtros del array por paises

const ciudadesArg = ciudades.filter((city) => { return city.pais == "Argentina"})
const ciudadesBra = ciudades.filter((city) => { return city.pais == "Brasil"})
const ciudadesCol = ciudades.filter((city) => { return city.pais == "Colombia"})

// Funcion para mostrar los destinos

function verDestinos(){
    let opcion
    do{
        opcion = parseInt(prompt("Selecciona el país al que quieras viajar: \n1 - Argentina \n2 - Brasil \n3 - Colombia\n4 - Salir"))
    
        switch(opcion){
        case 1: alertDestinos()
                for(destino of ciudadesArg){
                    alert(`${destino.nombre}, ${destino.ciudad}, por $${destino.precio}`)
                }
        break
                       
        case 2: alertDestinos()
                for(destino of ciudadesBra){
                    alert(destino.nombre + ", " + destino.ciudad + ", por $" + destino.precio)
                }
        break

        case 3: alertDestinos()
                for(destino of ciudadesCol){
                    alert(destino.nombre + ", " + destino.ciudad + ", por $" + destino.precio)
                }
        break

        case 4: alert("Muchas gracias por visitarnos! Te esperamos para más viajes.")
        break

        default: alert("Seleccione una opción válida.")
        }

    } while (opcion != 4)  
}

verDestinos()





