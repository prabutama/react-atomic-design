import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
    return (
        <div className="w-full max-w-sm rounded-md border-2 border-green-900 p-3 text-white bg-gray-600 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Image = ({ src }) => {
    return (
        <div>
            <a href="#">
                <img src={src} alt="shoes" />
            </a>
        </div>
    )
}

const Body = ({ name, children }) => {
    return (
        <div className="h-full">
            <h1 className="text-xl font-semibold mb-2">{name}</h1>
            <p>{children}</p>
        </div>
    )
}

const Footer = ({ price }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="font-medium">Rp {price}</p>
            <div className="w-1/3">
                <Button type="submit" style="bg-green-400" text="Buy" />
            </div>
        </div>
    )
}

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;