import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

import EditProfileForm from "./EditProfileForm";

import { Pencil } from "lucide-react";

const EditProfile = () => {    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="cursor-pointer"
                >
                    <Pencil className="w-3 h-3" />
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <EditProfileForm />
            </DialogContent>
        </Dialog>
    )     
}

export default EditProfile;