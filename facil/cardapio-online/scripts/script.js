// variável da DIV DO MENU
const menu = document.getElementById("menu")
// variável do botão de ver carrinho
const cartBtn = document.querySelector("#cart-btn")
// varável da DIV MODAL
const cartModal = document.getElementById("cart-modal")
// variável que recebe os itens do carrinho
const cartItemsContainer = document.getElementById("cart-items")
//  variável que vai mostrar o valor total do pedido
const cartTotal = document.getElementById("cart-total")
// variável do botão finalizar pedido
const checkoutBtn = document.getElementById("checkout-btn")
// variável para fechar a modal
const closeModalBtn = document.getElementById("close-modal-btn")
// variável que recebe a quantidade do produto
const cartCounter = document.getElementById("cart-count")
// variável que recebe o endereço
const addressInput = document.getElementById("address")
// variável que mostrar msm quando no inserir o endereço
const addressWarn = document.getElementById("address-warn")
// variável com msg com confirmação de envio do pedido
const msg = document.getElementById("envio")

let cart = [];

// abrir modal do carrinho
cartBtn.addEventListener("click", function(){
    updateCartModal()
    cartModal.style.display = "flex"
})

// fechar a modal apenas pelo botão FECHAR
cartModal.addEventListener("click", function(event){
    if (event.target === closeModalBtn){
        msg.classList.add("hidden")
        cartModal.style.display = "none"
    }
})

// selecionar produto 
menu.addEventListener("click", function(event){

    let parentButton = event.target.closest(".add-to-cart-btn")

    if (parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

        addToCart(name, price)

    }
})

// adicionar produto no carrinho
function addToCart(name, price){

    const existingItem = cart.find(item => item.name == name)

    
    if ( existingItem){
        // se o item já existir, soma mais 1
        existingItem.quantity += 1
        return

    } else{
        cart.push({
            name,
            price,
            quantity: 1,
        })
    }

    updateCartModal()
}


//  atualiza o carrinho
function updateCartModal(){

    cartItemsContainer.innerHTML = "";
    let total = 0

    cart.forEach(item => {

        const cartItemElement = document.createElement("div")
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `

            <div class="flex items-center justify-between">
                <div>            
                    <p class="font-medium">${item.name}</p>
                    <p>Qtd: ${item.quantity}</p>
                    <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>

                <button class="remove-from-cart-btn" data-name="${item.name}">
                    Remover
                </button>
            </div>

            <hr>
            
        `

        total += item.price * item.quantity

        cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    cartCounter.innerHTML = cart.length

}

// função para remover item do carrinho
cartItemsContainer.addEventListener("click", function(event){

    if (event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")

        removeItemCart(name)
    }
})

//  removendo itens do carrinho
function removeItemCart(name){

    const index = cart.findIndex(item => item.name === name)

    if (index !== -1){
        const item = cart[index]
        
        if (item.quantity > 1){
            item.quantity--

        }else{
            cart.splice(index, 1)
        }
        
        updateCartModal()
    }
}

//  verifica se o campo de endereço está vazio
addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value

    if (inputValue != ""){
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }
})

// verifica se o campo de entrega está vazio e dispara uma msg || finaliza o pedido
checkoutBtn.addEventListener("click", function(){

    let isOpen = funcionamento()

    if (!isOpen){
        
        Toastify({
            text: "O restaurante está fechado.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast()

        return
    }

    if (cart.length === 0) return

    if(addressInput.value === "") {
        addressInput.classList.add("border-red-500")
        addressWarn.classList.remove("hidden")
        return
    }

    const cartItem = cart.map((item) => {
        return (
            `${item.name} - Quantidade: (${item.quantity}) - Preço: R$ ${item.price.toFixed(2)}) | `
        )
    }).join("")

    const message = encodeURIComponent(cartItem)
    const phone = "85985680661"

    cart = []
    addressInput.value = ''

    msg.classList.remove("hidden")
    updateCartModal()

    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`, "_blank")
    
})

// verificar horário de funcionamento
function funcionamento(){
    let agora = new Date()
    let hora = agora.getHours()
    
    return hora >= 18 && hora < 22
}

// variável recebe a div que mudará de cor
let func = document.getElementById("date-span")
// variável que recebe o nome (aberto ou fechado) 
let text = document.querySelector("#text")
// variável que verifica se está aberto ou fechado
let isOpen = funcionamento()

if (isOpen){
    func.classList.remove("bg-red-500")
    func.classList.add("bg-green-500")
    text.innerText = "Aberto"
    
} else{
    func.classList.remove("bg-green-500")
    func.classList.add("bg-red-500")
    text.innerText = "Fechado"
}
