import { useDispatch, useSelector } from "react-redux";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

import { AuthService } from "../../services/Authentication";
import { authActions } from "../../store/authSlice";
import EditProfile from "./EditProfile";

import { AlertCircle, BadgeCheck, LogOut } from "lucide-react";

const ProfileDropdown = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const logoutUser = async () => {
        try {
            await AuthService.logout();
            dispatch(authActions.logout());
        } catch (error) {
            console.log(error);
        }
    }

    const percentage = (() => {
        if (!user) return;
        const fields = ['username', 'email', 'photoUrl', 'emailVerified'];
        const filled = fields.filter(field => !!user[field]).length;
        return Math.round((filled / fields.length) * 100);
    })();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                <AvatarImage src={user?.photoUrl} alt="User avatar" />
                <AvatarFallback>{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-72 p-3 mt-2 shadow-xl">
                <div className="flex items-center justify-between mb-1">
                    <DropdownMenuLabel>User Profile</DropdownMenuLabel>
                    <EditProfile />
                </div>
                <DropdownMenuSeparator />
                <div className="ml-2 flex flex-col gap-2 mb-4 mt-2">
                    <p className="text-sm font-medium">{user?.username || "username not available"}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                    {
                        user?.emailVerified ? (
                            <div className="flex items-center gap-1 mt-2 text-green-600 text-xs">
                                <BadgeCheck className="h-4 w-4" />
                                Email verified
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 mt-2 text-red-600 text-xs">
                                <AlertCircle className="h-4 w-4" />
                                Not Verified
                            </div>
                        )
                    }
                </div>
                {
                    percentage !== 100 && (
                        <div className="mt-2 mb-5 px-1">
                            <p className="text-xs text-muted-foreground mb-1">Profile Completion: {percentage}%</p>
                            <div className="w-full h-2 bg-muted rounded-full">
                                <div
                                className="h-full bg-primary rounded-full transition-all duration-300"
                                style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    )
                }
                <Button
                    className="cursor-pointer w-full"
                    onClick={logoutUser}
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown;
