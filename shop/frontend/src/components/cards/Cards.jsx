import React, {useContext} from 'react'
import './cards.css'
import Card from "../card/Card";
import {Context} from '../../Context.js'

const Cards = () => {

    const [products] = useContext(Context);
    return (
        <div className={'cards-wrapper'}>
            <ul className={'cards'}>
                {
                    products.map(product => {
                        return <Card products={product}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Cards
