import { Fragment, useEffect, useState } from "react";
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
        price: 300000
    }, {
        id: 3,
        name: 'Sepatu Hijau spesial',
        image: "/images/shoes-1.jpg",
        description: 'Lorem ipsum dolor sit m voluptatem ullam quasi dolor illo quidem evenies archite' +
            'cto dignissimos tenetur incidunt officiis maiores dolorum?',
        price: 3320000
    }
]

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);
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
                    {products.map((product) => {
                        return (
                            <CardProduct key={product.id}>
                                <CardProduct.Image src={product.image} />
                                <CardProduct.Body name={product.name}>
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
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td className="font-medium">{product.name}</td>
                                        <td className="font-medium">Rp {product
                                            .price
                                            .toLocaleString('id-ID', {
                                                styles: 'currency',
                                                currency: 'IDR'
                                            })}</td>
                                        <td className="font-medium">{item.qty}</td>
                                        <td className="font-medium">Rp {(item.qty * product.price)
                                            .toLocaleString('id-ID', {
                                                styles: 'currency',
                                                currency: 'IDR'
                                            })}</td>
                                    </tr>

                                )
                            })
                            }
                            <tr className="font-bold">
                                <td colSpan={3}>Total price</td>
                                <td>Rp {totalPrice
                                    .toLocaleString('id-ID', {
                                        styles: 'currency',
                                        currency: 'IDR'
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