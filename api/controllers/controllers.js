const URL_PAGINA ="https://rickandmortyapi.com/api/character/"
export async function listapersonajes(nombre) {
 let resultado = await fetch (URL_PAGINA+`&?name=${nombre}`) 
}