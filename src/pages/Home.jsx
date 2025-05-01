import { Button } from "../components/ui/button";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="text-2xl">Home Page</h1>
            <Button className="cursor-pointer">Click me</Button>
        </div>
    )
}

export default Home;