import { useState } from "react";
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
    FormDescription,
    FormMessage 
} from "../components/ui/form";
import { AuthService } from "../services/Authentication";
import { LoaderCircle } from "lucide-react";

const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const formSchema = z.object({
        email: z.string().email("Invalid email"),
    })
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })
    
    const handleFormSubmit = (data) => {
        sendResetPasswordLink(data);
    }

    const sendResetPasswordLink = async ({ email }) => {
        setLoading(true);
        setError("");
        try {
            await AuthService.forgotPassword(email);
            setMessage("Check your inbox for the reset link!");
        } catch (error) {
            setError("Invalid Email");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex flex-1 flex-col gap-5 mt-12 md:mt-0 md:justify-center items-center">
            <div className="bg-card rounded p-8 shadow w-full max-w-md">
                <h1 className="text-2xl md:text-3xl font-semibold mb-3">Forgot Your Password?</h1>
                <p className="text-sm text-gray-500 mb-5">Enter your email address below, and we’ll send you a link to reset your password.</p>
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
                                    <FormDescription>{message}</FormDescription>
                                    <FormMessage>{error}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <Button 
                            className="w-full cursor-pointer" 
                            type="submit"
                            disabled={loading || message}
                        >
                            {loading ? (
                                <>
                                    Sending
                                    <LoaderCircle className="animate-spin w-4 h-4" />
                                </>
                            ): (
                                "Send Reset Link"
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    )
}

export default ForgotPassword;