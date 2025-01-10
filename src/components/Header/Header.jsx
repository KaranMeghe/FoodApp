import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
    const cart = useSelector((store) => store.cart.items);
    return (
        <header>
            <nav aria-label="Main navigation" className="flex justify-between m-4 p-4 border-2">
                <Link to='/' className="text-2xl">
                    Food App
                </Link>

                <ul className="flex gap-4">
                    <Link to='/' className="text-lg">Home</Link>
                    <Link to='/contact' className="text-lg">Contact us</Link>
                    <Link to="/cart" className="text-lg">Cart
                        {cart.length ? <span className="bg-green-600 text-white font-bold px-2 py-1 mx-1 rounded-full">{cart.length}</span> : null}
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;