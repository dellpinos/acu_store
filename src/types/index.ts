export type Betta = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}
export type CartItem = Betta & {
    quantity: number
}

