import type { Betta } from '../types';
import { Dispatch } from 'react';
import type { CartActions } from '../reducers/cart-reducer';

type BettaProps = {
    post: Betta,
    dispatch: Dispatch<CartActions>
}

const Betta = ({post, dispatch} : BettaProps) => {

    const { image, name, description, price } = post

    return (

        <div className="col-md-6 col-lg-4 my-4 align-items-center card__producto">
            <div>

                <img className="img-fluid my-4" src={`./img/${image}.png`} alt={`Imagen ${name}`} />

                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

            </div>
            <button
                type="button"
                className="btn btn-dark w-100"
                onClick={() => dispatch({type: 'add-to-cart', payload: {item: post }})}
            >Agregar al Carrito</button>

        </div>
    )
}

export default Betta