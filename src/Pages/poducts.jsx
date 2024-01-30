import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: 'Sepatu Hijau',
        image: "/images/shoes-1.jpg",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed, consectetur autem voluptatem ullam quasi dolor illo quidem eveniet quisquam temporibus architecto ducimus similique, dignissimos tenetur incidunt officiis maiores dolorum?',
        price: 200000,
    },
    {
        id: 1,
        name: 'Sepatu Hijau baru',
        image: "/images/shoes-1.jpg",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed, consectetur autem voluptatem ullam quasi dolor illo quidem eveniet quisquam temporibus architecto ducimus similique, dignissimos tenetur incidunt officiis maiores dolorum?',
        price: 200000,
    }
]

const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <div className="flex justify-center gap-10">
                {
                    products.map((product) => {
                        return (
                            <CardProduct>
                                <CardProduct.Image src={product.image} />
                                <CardProduct.Body name={product.name}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer price={product.price} />
                            </CardProduct>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProductsPage;