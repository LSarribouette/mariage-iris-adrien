import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";

export default function Root() {
    const navigation = useNavigation();

    return (
        <>
            <Sidebar />
            <div id="detail" className={navigation.state === "loading" ? "loading" : ""}><Outlet /></div>
        </>
    );
}