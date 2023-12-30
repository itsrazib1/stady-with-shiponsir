import { useContext, useEffect, useState } from "react";
import Myclass from "./Myclass";
import Timewise from "./Timewise";
import DashboardOne from "./dashboardOne";
import { AuthContext } from "../../providers/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // admin user define start

    const [users, setUsers] = useState([]);


    console.log("User", users)
    useEffect(() => {
        fetch('http://localhost:5000/logindata')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const adminUsers = users.filter(u => u.Role === 'Admin');
    const moderatorUsers = users.filter(u => u.Role === 'Moderator');
    const isAdmin = adminUsers.some(u => u.email === user?.email);
    const ismoderator = moderatorUsers.some(u => u.email === user?.email);
    console.log("Userdata", users, adminUsers, isAdmin, ismoderator)

    return (
        <div>
            {
                isAdmin ?
                    (<>
                        <DashboardOne></DashboardOne>
                        <Timewise></Timewise>
                        <Myclass></Myclass>
                    </>) :
                    ismoderator ?
                        (<>
                            <div className="pt-10 ">
                                <Myclass></Myclass>
                            </div>
                        </>) :
                        (<>
                            <div className="pt-10 ">
                                <Myclass></Myclass>
                            </div>
                        </>)

            }

        </div>
    );
};

export default Dashboard;