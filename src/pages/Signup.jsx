import { useState } from "react";
import { Link, useNavigate } from "react-router";
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

import { AuthService } from "../services/Authentication";
import { LoaderCircle } from "lucide-react";

const Signup = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formSchema = z.object({
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password should be at least 6 characters"),
        confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const handleFormSubmit = (data) => {
        createNewUser(data);
    }

    const createNewUser = async ({email, password}) => {
        setLoading(true);
        setError("");
        try {
            await AuthService.signup(email, password);
            navigate("/login");
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                setError("This email is already registered");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex flex-1 flex-col gap-5 mt-12 md:mt-0 md:justify-center items-center">
            <div className="bg-card rounded p-8 shadow w-full max-w-md">
                <h1 className="text-2xl md:text-3xl font-semibold mb-6">Create New Account</h1>
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
                                    <FormMessage>{error}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Create a Password</FormLabel>
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Your Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="link"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                className="absolute right-1 top-1/2 -translate-y-1/2 text-sm hover:no-underline cursor-pointer"
                                            >
                                                {showConfirmPassword ? "Hide" : "Show"}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button 
                            className="w-full cursor-pointer" 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    Signing in 
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                "Signup"
                            )}
                        </Button>
                    </form>
                    <p className="text-center mt-3 text-sm">
                        Already have an account? {" "}
                        <Link 
                            to="/login" 
                            className="text-primary font-medium underline hover:opacity-80 transition"
                        >
                            Login
                        </Link>
                    </p>
                </Form>
            </div>
        </main>
    )
}

export default Signup;