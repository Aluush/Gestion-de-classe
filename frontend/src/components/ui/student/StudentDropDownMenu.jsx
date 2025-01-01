import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../dropdown-menu";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
import StudentApi from "../../../services/api/student/StudentApi";
// import {Logout} from "lucide-react"



function StudentDropDownMenu() {

    
    const navigate = useNavigate();
    const { user, logout, setAuthenticated, setUser } = useUserContext();


    useEffect(() => {
        StudentApi.getUser("/api/user")
            .then(({ data }) => {
                setUser(data);
                setAuthenticated(true);
            })
            .catch(() => {
                logout();
                navigate("/login");
            });
    }, []);



    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>Services</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default StudentDropDownMenu;
