export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}

export interface GetProductsDTO {
    products: Product[];
}
export interface CreateProductDTO {
   title: string;
    description: string;
    price: number;
}
export async function getProducts(): Promise<Product[]> {
    const response = await fetch('https://dummyjson.com/products');
    const data: GetProductsDTO = await response.json();
    return data.products;
}

export async function postProduts(product: CreateProductDTO): Promise<void> {
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: JSON.stringify(product)
    })
    console.log(await response.json());
    alert('Produto adicionado com sucesso!')
}

