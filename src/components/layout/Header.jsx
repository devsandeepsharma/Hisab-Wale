import { Link, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "../ui/sheet";
import { AuthService } from "../../services/Authentication";
import { authActions } from "../../store/authSlice";

import { Menu } from "lucide-react";

const Header = () => {

    const isAuthenticated = useSelector((state) => state.auth.authenticate);
    const dispatch = useDispatch();

    const location = useLocation();
    const path = location.pathname;

    const logoutUser = async () => {
        try {
            await AuthService.logout();
            dispatch(authActions.logout());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <header 
            className="
            border-b shadow bg-card
            px-6 py-4 flex items-center justify-between
            md:px-16
            "
        >
            <Link to={isAuthenticated ? "/" : "/landing"} className="text-xl font-semibold md:text-2xl">Hisab Wale</Link>
            
            {/* Mobile Navigation */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                        <div className="pt-7"></div>
                        {
                            isAuthenticated ? (
                                <ul className="flex flex-col gap-3 px-6 mb-6">
                                    <li>
                                        <SheetClose asChild>
                                            <Button className="w-full" onClick={logoutUser}>
                                                Logout
                                            </Button>
                                        </SheetClose>
                                    </li>
                                </ul>
                            ) : (
                                <>
                                    {
                                        path === "/landing" && (
                                            <ul className="flex flex-col gap-2 px-6">
                                                <li>
                                                    <a href="#features" className="text-muted-foreground hover:text-foreground">
                                                        Features
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
                                                        Testimonials
                                                    </a>
                                                </li>
                                            </ul>
                                        )
                                    }

                                    <ul className="flex flex-col gap-3 px-6 mb-6">
                                        <li>
                                            <SheetClose asChild>
                                                <Button className="w-full" variant="outline" asChild>
                                                    <Link to="/login">Login</Link>
                                                </Button>
                                            </SheetClose>
                                        </li>
                                        <li>
                                            <SheetClose asChild>
                                                <Button className="w-full" asChild>
                                                    <Link to="/signup">Signup</Link>
                                                </Button>
                                            </SheetClose>
                                        </li>
                                    </ul>
                                </>
                            )
                        }
                    </SheetContent>
                </Sheet>
            </div>
            
            {/* Desktop Navigation */}
            {
                isAuthenticated ? (
                    <ul className="hidden md:flex gap-3">
                        <li>
                            <Button className="cursor-pointer" onClick={logoutUser}>
                                Logout
                            </Button>
                        </li>
                    </ul>
                ): (
                    <>
                        {
                            path === "/landing" && (
                                <ul className="hidden md:flex gap-3">
                                    <li>
                                        <a href="#features" className="text-muted-foreground hover:text-foreground">
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
                                            Testimonials
                                        </a>
                                    </li>
                                </ul>
                            )
                        }
        
                        <ul className="hidden md:flex gap-3">
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
                    </>
                )
            }
        </header>
    )
}

export default Header;