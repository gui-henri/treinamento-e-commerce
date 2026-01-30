import {useState } from "react"
import { getProducts, GetProductsDTO, postProduts, Product } from "../services/api"

export function AddProductForm() {
    const [title, setTitle] = useState('')

    const [price, setPrice] = useState(0) // por padrão false

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        await postProduts({
            title,
            description: "Descrição padrão",
            price
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Produto</h2>
            
            <label>
                Nome:
                <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: IPhone 9"
                required 
                />
            </label>

            <label>
                Preço:
                <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Ex: 500"
                required 
                />
            </label>

            <button type="submit">Cadastrar</button>
        </form>
    )
}