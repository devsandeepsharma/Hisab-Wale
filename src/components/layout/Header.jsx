import { Link } from "react-router";

import { Button } from "../ui/button";

const Header = () => {
    return (
        <header 
            className="
            border-b shadow bg-card
            px-6 py-4 flex items-center justify-between
            md:px-16
            "
        >
            <Link to="/" className="text-xl font-semibold md:text-2xl">Hisab Wale</Link>
            <ul className="flex gap-3">
                <li>
                    <Button variant="outline" asChild>
                        <Link to="/login">Login</Link>
                    </Button>
                </li>
                <li>
                    <Button asChild>
                        <Link to="/signup">Signup</Link>
                    </Button>
                </li>
            </ul>
        </header>
    )
}

export default Header;