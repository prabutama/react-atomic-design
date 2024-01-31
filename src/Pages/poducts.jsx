import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([])

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
            console.log(data);
        });
    })
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }
    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            );
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }

    }

    return (
        <Fragment>
            <div
                className="bg-green-500 h-20 flex justify-end items-center px-10 font-medium rext-2xl text-white">
                {localStorage.getItem('email')
                    ? localStorage.getItem('email')
                    : ''
                }
                <Button
                    type="submit"
                    style="bg-white text-green-500 mx-4"
                    text="Logout"
                    onClick={handleLogout} />
            </div>
            <div className="flex justify-between my-4 px-10">
                <div className="w-[70%] flex flex-wrap gap-10">
                    {
                        products.length > 0 &&
                        products.map((product) => {
                            return (
                                <CardProduct key={product.id}>
                                    <CardProduct.Image src={product.image} />
                                    <CardProduct.Body title={product.title}>
                                        {product.description}
                                    </CardProduct.Body>
                                    <CardProduct.Footer
                                        price={product.price}
                                        id={product.id}
                                        handleAddToCart={handleAddToCart} />
                                </CardProduct>
                            )
                        })
                    }
                </div>
                <div className="w-[30%]">
                    <h1 className="text-3xl font-medium text-green-500 ml-5">Cart</h1>
                    <table className="my-4 text-left table-auto border-separate border-spacing-x-6 w-full">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>qty</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find(
                                        (product) => product.id === item.id
                                    );
                                    return (
                                        <tr key={item.id}>
                                            <td className="font-medium">{product.title.substring(0, 20)}</td>
                                            <td className="font-medium">$ {product.price
                                                .toLocaleString('id-ID', {
                                                    styles: 'currency',
                                                    currency: 'USD'
                                                })}</td>
                                            <td className="font-medium">{item.qty}</td>
                                            <td className="font-medium">$ {(item.qty * product.price)
                                                .toLocaleString('id-ID', {
                                                    styles: 'currency',
                                                    currency: 'USD'
                                                })}</td>
                                        </tr>

                                    )
                                })
                            }
                            <tr className="font-bold">
                                <td colSpan={3}>Total price</td>
                                <td>$ {totalPrice
                                    .toLocaleString('id-ID', {
                                        styles: 'currency',
                                        currency: 'USD'
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage;