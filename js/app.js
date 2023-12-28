const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
    {
        id:1,
        nombre: "Sandalias Renata",
        precio: 78000,
        img: "https://i.pinimg.com/564x/aa/0e/be/aa0ebe099231dfb4c53161b82be4da0b.jpg",
    },
    {
        id:2,
        nombre: "Stileto Zara",
        precio: 43000,
        img: "https://i.pinimg.com/564x/a1/0d/7b/a10d7b6e62451f2ef2fa8ea8da99c719.jpg",
    },
    {
        id: 3,
        nombre: "Sandalias Sephora",
        precio: 65000,
        img: "https://i.pinimg.com/564x/de/65/65/de6565f4553b7e670ca0e54e4e3bda50.jpg",
        
    },
    {
        id:4,
        nombre: "Stileto Mango",
        precio: 95000,
        img: "https://i.pinimg.com/564x/50/2e/5d/502e5dd8e0eddd54d19380840305e443.jpg",
        
    },
    {
        id:5,
        nombre: "Sandalias Rosario",
        precio: 53000,
        img: "https://i.pinimg.com/564x/46/ba/8f/46ba8fa070b8942dc65faa74dd41e043.jpg",
        
    },
    {
        id:6,
        nombre: "Stileto Bianca",
        precio: 56000,
        img: "https://i.pinimg.com/564x/7b/3b/94/7b3b942234d583621a281b1ea8e5a1fa.jpg",
        
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto)=>{
    let contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML =`
    <img src= "${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$ ${producto.precio} </p>
    
    `;

    shopContent.append(contenido)

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "comprar"

    contenido.append(comprar);

    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
            
        });
        console.log(carrito);


       

    });

});

/* verCarrito.addEventListener("click", () => { */
const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-title" > Carrito </h1>`;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className ="modal-header-button";
    

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product) =>{
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "modal-content";
    carritoContenido.innerHTML = `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    `;
    modalContainer.append(carritoContenido);

    console.log(carrito.length);

    let eliminar = document.createElement("span");
    eliminar.innerText = "Eliminar";
    eliminar.className = "delete-product";
    carritoContenido.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
    guardarLocal();
    });
    
    const total = carrito.reduce((acc,el) => acc + el.precio, 0);
    
    const totalCompra = document.createElement("div");
    totalCompra.className = "contenido-total";
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalCompra);
/* });
 */
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        });

    pintarCarrito()
};

const guardarLocal = () =>{
localStorage.setItem("carrito", JSON.stringify(carrito));
} 
 guardarLocal();