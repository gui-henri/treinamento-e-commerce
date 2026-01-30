import { useEffect, useState } from "react"
import { getProducts, GetProductsDTO, Product } from "../services/api"

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([])

    const [isLoading, setIsLoading] = useState(false) // por padrão false

     useEffect(() => {
        setIsLoading(true)

        getProducts().then((products) => setProducts(products))

        setIsLoading(false)
    },[])

    return (
        <div>
            {
                isLoading ? <h2>Loading...</h2> :
                    <ul>
                    {
                        products.map(p => <li>{p.title} - R${p.price}</li>)
                    }
                    </ul>
            }
            
        </div>
    )
}