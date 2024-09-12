import { useAuth } from "hooks";
import { useDispatch } from "react-redux"
import { logOut } from "./../../redux/auth/operations";
import { HeaderWrapper } from "./UserMenu.styled";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth()

    return(
        <HeaderWrapper>
            <p>Welcome, {user.email}</p>
            <button onClick={() => dispatch(logOut())}>Logout</button>
        </HeaderWrapper>
    )
}

export default UserMenu