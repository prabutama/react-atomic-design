import { CurrencyDollarSimple, ShoppingCart } from "@phosphor-icons/react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { total } = useTotalPrice();
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

    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    console.log(isDarkMode)
    const darkModeHandler = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <header className="bg-green-500 h-20 flex justify-end items-center px-10 font-medium rext-2xl text-white sticky top-0 gap-5">
            <input type="checkbox" className="toggle" onChange={darkModeHandler} />
            <div className="relative">
                <ShoppingCart size={32} color="#ffffff" weight="fill" />
                <div className="absolute bg-red-500 text-xs p-1 rounded-full -top-3 -right-1">
                    {totalCart}
                </div>
            </div>
            <div className="text-lg p-1 rounded-md flex justify-center items-center bg-black px-3">
                <CurrencyDollarSimple size={32} color="#ffffff" weight="bold" />
                {total}
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