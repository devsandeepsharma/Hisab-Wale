import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "../components/ui/form";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const formSchema = z.object({
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password should be at least 6 characters")
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <main className="flex flex-1 flex-col gap-5 mt-12 md:mt-0 md:justify-center items-center">
            <div className="bg-card rounded p-8 shadow w-full max-w-md">
                <h1 className="text-2xl md:text-3xl font-semibold mb-6">Welcome Back 👋</h1>
                <Form {...form}>
                    <form className="space-y-5" onSubmit={form.handleSubmit(handleFormSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="user@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="link"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                className="absolute right-1 top-1/2 -translate-y-1/2 text-sm hover:no-underline cursor-pointer"
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="text-right -mt-3">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-primary underline hover:opacity-80 transition"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <Button className="w-full cursor-pointer" type="submit">Login</Button>
                    </form>
                    <p className="text-center mt-3 text-sm">
                        Don’t have an account yet?{" "} {" "}
                        <Link 
                            to="/signup" 
                            className="text-primary font-medium underline hover:opacity-80 transition"
                        >
                            Signup now
                        </Link>
                    </p>
                </Form>
            </div>
        </main>
    )
}

export default Login;