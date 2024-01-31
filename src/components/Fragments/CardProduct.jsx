import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
    return (
        <div className="w-full max-w-sm rounded-md border-2 border-green-900 p-3 text-white bg-black flex flex-col justify-between">
            {children}
        </div>
    )
}

const Image = ({ src }) => {
    return (
        <div>
            <a href="#">
                <img src={src} alt="shoes" className="w-full h-72 object-cover" />
            </a>
        </div>
    )
}

const Body = ({ title, children }) => {
    return (
        <div className="h-full">
            <h1 className="text-xl font-semibold mb-2">{title.substring(0,20)} ...</h1>
            <p>{children.substring(0,200)} ...</p>
        </div>
    )
}

const Footer = ({ price,  handleAddToCart, id }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="font-medium">$ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</p>
            <div className="w-1/3">
                <Button type="submit" style="bg-green-500 rounded-md" text="Add to cart" onClick={() => handleAddToCart(id)}/>
            </div>
        </div>
    )
}

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;