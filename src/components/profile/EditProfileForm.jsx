import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "../ui/form";

import { AuthService } from "../../services/Authentication";
import { authActions } from "../../store/authSlice";

import { LoaderCircle, MailCheck } from "lucide-react";

const EditProfileForm = () => {

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");

    const formSchema = z.object({
        username: z.string().min(2, "Username must be at least 2 characters"),
        photoUrl: z.string().url("Please enter a valid URL"),
    })
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            photoUrl: user?.photoUrl || "",
            username: user?.username || "",
        },
    })

    const handleUpdate = async (values) => {
        setLoading(true);
        setSuccessMessage("");
        setError("");

        const userData = {
            uid: user.uid,
            username: values.username,
            email: user.email,
            photoUrl: values.photoUrl,
            emailVerified: user.emailVerified
        }

        try {
            await AuthService.updateUserProfile(values.username, values.photoUrl);
            dispatch(authActions.updateUser(userData));
            setSuccessMessage("Profile updated successfully!");
        } catch (err) {
            setError("Update failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyEmail = async () => {
        setVerifyLoading(true);
        setError("");
        try {
            await AuthService.sendVerification();
            setSuccessMessage("Verification email sent!");
        } catch (err) {
            setError("Couldn't send verification email.");
        } finally {
            setVerifyLoading(false);
        }
    };

    const photoUrl = form.watch("photoUrl");

    return (
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(handleUpdate)}>
                <div className="w-full flex justify-center">
                    <Avatar className="h-15 w-15">
                        <AvatarImage src={photoUrl} alt="Profile preview" />
                        <AvatarFallback>
                            {user?.email?.[0]?.toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <FormField
                    control={form.control}
                    name="photoUrl"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Photo URL</FormLabel>
                        <FormControl>
                            <Input placeholder="https://example.com/avatar.jpg" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder={user?.username || "Your Name"} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">Email Verification</p>
                    <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        className="cursor-pointer"
                        onClick={handleVerifyEmail}
                        disabled={user?.emailVerified || verifyLoading}
                    >
                        <MailCheck className="w-4 h-4 mr-1" />
                        {   
                            user?.emailVerified
                            ? "Verified"
                            : verifyLoading
                            ? "Sending..."
                            : "Verify"
                        }
                    </Button>
                </div>

                {
                    successMessage && (
                        <p className="text-green-600 text-sm -mt-4">{successMessage}</p>
                    )
                }

                {
                    error && (
                        <p className="text-red-600 text-sm -mt-4">{error}</p>
                    )
                }

                <Button type="submit" disabled={loading} className="w-full cursor-pointer">
                    {loading ? (
                        <>
                        Updating
                        <LoaderCircle className="ml-2 animate-spin w-4 h-4" />
                        </>
                    ) : (
                        "Update Profile"
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default EditProfileForm