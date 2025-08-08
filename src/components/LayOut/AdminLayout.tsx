import { Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div>
            <h1>Thus is Admin Layout component</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;