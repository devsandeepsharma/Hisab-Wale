import { Link } from "react-router";
import { Button } from "../components/ui/button";

const Home = () => {
    return (
        <main className="flex flex-1 flex-col gap-5 justify-center items-center">
            <h1 className="text-2xl">Home Page</h1>
            <Button asChild className="cursor-pointer">
                <Link to="/landing">Click me</Link>
            </Button>
        </main>
    )
}

export default Home;