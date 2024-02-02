import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import CartTable from "../components/Fragments/CartTable";
import Navbar from "../components/Layouts/Navbar";

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    useLogin();

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        });
    }, [])

    return (
        <Fragment>
            <Navbar />
            <div className="flex justify-between my-4 px-10">
                <div className="w-[70%] flex flex-wrap gap-10">
                    {
                        products.length > 0 &&
                        products.map((product) => {
                            return (
                                <CardProduct key={product.id}>
                                    <Link to={`/product/${product.id}`}>
                                        <CardProduct.Image src={product.image} />
                                    </Link>
                                    <CardProduct.Body title={product.title}>
                                        {product.description}
                                    </CardProduct.Body>
                                    <CardProduct.Footer
                                        price={product.price}
                                        id={product.id} />
                                </CardProduct>
                            )
                        })
                    }
                </div>
                <div className="w-[30%]">
                    <h1 className="text-3xl font-medium text-green-500 ml-5">Cart</h1>
                    <CartTable products={products} />
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage;