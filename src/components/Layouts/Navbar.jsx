import { ShoppingCart } from "@phosphor-icons/react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum)
    }, [cart]);

    return (
        <header className="bg-green-500 h-20 flex justify-end items-center px-10 font-medium rext-2xl text-white sticky top-0 mb-10 gap-5">
            <div className="relative">
                <ShoppingCart size={32} color="#ffffff" weight="fill" />
                <div className="absolute bg-red-500 text-xs p-1 rounded-full -top-3 -right-1">
                    { totalCart }
                </div>
            </div>
            {
                username && <p className="text-2xl font-medium">{username}</p>
            }
            <Button
                type="submit"
                style="bg-black text-white mx-4 border-0"
                text="Logout"
                onClick={handleLogout} />
        </header>
    )
}

export default Navbar;