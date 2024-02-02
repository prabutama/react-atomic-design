import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartTable = ({ products }) => {
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

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

    return (
        <div>
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
    )
}

export default CartTable;