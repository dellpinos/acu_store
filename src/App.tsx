import { useReducer } from "react";
import Header from "./components/Header";
import Betta from "./components/Betta";
import { useCart } from "./hooks/useCart";
import { initialState, cartReducer } from "./reducers/cart-reducer";


function App() {

    const { 
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    } = useCart();
    const [state, dispatch] = useReducer(cartReducer, initialState);

    console.log(state);


    return (
        <>

            <Header 
                cart = {cart}
                removeFromCart= {removeFromCart}
                increaseQuantity = {increaseQuantity}
                decreaseQuantity = {decreaseQuantity}
                clearCart = {clearCart}
                isEmpty = {isEmpty}
                cartTotal = {cartTotal}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">

                {data.map( (post) => (
                    
                    <Betta 
                        key={post.id}
                        post={post}
                        addToCart={addToCart}
                    />
                ))}

                    
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">AcuStore - Todos los derechos Reservados</p>
                </div>
            </footer>

        </>
    )
}

export default App
