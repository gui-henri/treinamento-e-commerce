interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}

interface GetProductsDTO {
    products: Product[];
}

export async function getProducts(): Promise<GetProductsDTO> {
    const response = await fetch('https://dummyjson.com/products');
    const data: GetProductsDTO = await response.json();
    return data;
}

export async function postProduts(product: Product): Promise<void> {
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: JSON.stringify(product)
    })
}

