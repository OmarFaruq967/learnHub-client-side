import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../../public/Images/Logo/Logo-color.png";
import "../Layouts/Dashboard.css";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = useAdmin();
  const isInstructor = useInstructor();
  const { user, logOut, updateUserProfileImage } = useContext(AuthContext);
  const photoURL = user?.photoURL;
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (isAdmin) {
      navigate("/dashboard/users");
    } else if (isInstructor) {
      navigate("/dashboard/instructor");
    } else {
      navigate("/dashboard/cart");
    }
  };

  if (!user) {
    // Render a loading state or a placeholder content while user data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex mx-auto items-center">
              <NavLink className="items-center" to="/">
                <img className=" mb-5 w-[120px]" src={Logo} alt="" />
              </NavLink>
            </div>

            {/* user photo */}
            <div className="flex mx-auto items-center my-5">
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  <img src={photoURL} alt="User Avatar" />
                </div>
              </div>
            </div>

            {isAdmin ? (
              // Render admin dashboard links
              <>
                <li className="font-semibold">
                  <NavLink to="/dashboard/users">Manage Users</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/aproveClass">All Classes</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/">Payment</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/">My Payment History</NavLink>
                </li>
              </>
            ) : isInstructor ? (
              // Render instructor dashboard links
              <>
                <li className="font-semibold">
                  <NavLink to="/dashboard/instructor">
                    My Instructor Dashboard
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/addClasses">Add Classes</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/myClasses">My Classes</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/">My Payment History</NavLink>
                </li>
              </>
            ) : (
              // Render user dashboard links
              <>
                <li className="font-semibold">
                  <NavLink to="/dashboard/cart">
                    My Selected Classes
                    <div className="indicator">
                      <span className="indicator-item badge bg-[#fbbd23]">
                        +{cart?.length || 0}
                      </span>
                      <button className="px-2 py-1">
                        <FaShoppingCart className="text-2xl" />
                      </button>
                    </div>
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/">My Enrolled Classes</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/">Payment</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/dashboard/">My Payment History</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
