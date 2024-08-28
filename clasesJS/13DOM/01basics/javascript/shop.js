const tienda = {
    "productos": [
      {
        "nombre": "Zapatos",
        "url": "https://vasari.vteximg.com.br/arquivos/ids/215410-500-500/MZD175905-FC-30.jpg?v=638163189281130000"
      },
      {
        "nombre": "Camiseta",
        "url": "https://www.zizi-ecuador.com/cdn/shop/products/Camiseta-Roja-ZIZI_8e65fb55-4ced-48ee-8c85-d493027ce700.jpg?v=1628015606&width=1445"
      },
      {
        "nombre": "Pantalón",
        "url": "https://superexitoec.vteximg.com.br/arquivos/ids/167126-500-500/_MCF6555.png?v=638360899696970000"
      }
    ]
  }



  function mostrar(){
    const contenedor = document.createElement("div") // Cambiado a "div" para contener las imágenes

    tienda.productos.forEach(producto => {
        const titulo = document.createElement("h3") // Crear un elemento h3 para el título
        titulo.textContent = producto.nombre // Establecer el texto del título

        const imagen = document.createElement("img") // Crear un elemento img
        imagen.src = producto.url // Establecer el src de la imagen
        imagen.alt = producto.nombre // Establecer un texto alternativo

        contenedor.appendChild(titulo) // Agregar el título al contenedor
        contenedor.appendChild(imagen) // Agregar la imagen al contenedor
    })
    
    document.body.appendChild(contenedor) // Agregar el contenedor al body
}  

window.onload = mostrar;

const varibale = createElement