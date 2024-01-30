import CardProduct from "../components/Fragments/CardProduct";


const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <div className="flex justify-center items-center">
                <CardProduct>
                    <CardProduct.Image src="/images/shoes-1.jpg" />
                    <CardProduct.Body title='Sepatu Hijau'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed, consectetur autem voluptatem ullam quasi dolor illo quidem eveniet quisquam temporibus architecto ducimus similique, dignissimos tenetur incidunt officiis maiores dolorum?
                    </CardProduct.Body>
                    <CardProduct.Footer price='200000' />
                </CardProduct>
            </div>
        </div>
    )
}

export default ProductsPage;