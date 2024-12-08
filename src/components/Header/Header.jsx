import { Link } from "react-router";

const Header = () => {
    return (
        <header>
            <nav aria-label="Main navigation" className="flex justify-between m-4 p-4 border-2">
                <Link to='/' className="text-2xl">
                    Food App
                </Link>

                <ul className="flex gap-4">
                    <Link to='/' className="text-lg">Home</Link>
                    <Link to='/contact' className="text-lg">Contact us</Link>
                    <Link to="/cart" className="text-lg">Cart</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;