import { useAuth } from "hooks"
import { useDispatch } from "react-redux";
import { HeaderWrapper } from "./UserMenu.styled";
// import { logOut } from 


const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth()

    return(
        <HeaderWrapper>
            <p>Welcome, {user.email}</p>
            <button onClick={() => dispatch(logOut())}>Logout</button>
        </HeaderWrapper>
    );
};

export default UserMenu;