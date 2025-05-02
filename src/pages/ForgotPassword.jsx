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

const ForgotPassword = () => {

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
        console.log(data);
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full cursor-pointer" type="submit">Send Reset Link</Button>
                    </form>
                </Form>
            </div>
        </main>
    )
}

export default ForgotPassword;