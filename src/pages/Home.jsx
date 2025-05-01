import { Button } from "../components/ui/button";

const Home = () => {
    return (
        <main className="flex flex-1 flex-col gap-5 justify-center items-center">
            <h1 className="text-2xl">Home Page</h1>
            <Button className="cursor-pointer">Click me</Button>
        </main>
    )
}

export default Home;