import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: 'Sepatu Hijau',
        image: "/images/shoes-1.jpg",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed, consectetu' +
            'r autem voluptatem ullam quasi dolor illo quidem eveniet quisquam temporibus arc' +
            'hitecto ducimus similique, dignissimos tenetur incidunt officiis maiores dolorum' +
            '?',
        price: 200000
    }, {
        id: 2,
        name: 'Sepatu Hijau baru',
        image: "/images/shoes-1.jpg",
        description: 'Lorem ipsum dolor sit m voluptatem ullam quasi dolor illo quidem evenies archite' +
            'cto ducimus similique, dignissimos tenetur incidunt officiis maiores dolorum?',
        price: 200000
    }
]

const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
}

const ProductsPage = () => {
    return (
        <Fragment>
            <div
                className="bg-green-500 h-20 flex justify-end items-center px-10 font-medium rext-2xl text-white">
                {
                    localStorage.getItem('email') ?
                    localStorage.getItem('email') : ''
                }
                <Button
                    type="submit"
                    style="bg-white text-green-500 mx-4"
                    text="Logout" 
                    onClick={handleLogout}/>
            </div>
            <h1>Products Page</h1>
            <div className="flex justify-center gap-10">
                {products.map((product) => {
                    return (
                        <CardProduct key={product.id}>
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
        </Fragment>
    )
}

export default ProductsPage;