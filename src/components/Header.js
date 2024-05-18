import React, { useEffect, useState } from "react";
import { Logo, accountLogo } from "../constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/user-slice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const [showDropdown, setShowDropDown] = useState(false);

  const signOutUser = () => signOut(auth).catch(console.error);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return unSubscribe;
  }, []);

  return (
    <div className="absolute w-full z-30 px-[6vw] bg-gradient-to-b from-black flex justify-between items-center">
      <div className="w-28 sm:w-52">
        <img
          className="h-full w-full pointer-events-none select-none"
          alt="logo"
          src={Logo}
        />
      </div>

      {auth.currentUser && (
        <div
          className="relative rounded-md cursor-pointer p-2"
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <div className="flex gap-5 items-center">
            <p className="text-white hidden md:block">{userInfo.displayName}</p>
            <img alt="Account" src={accountLogo} className="rounded-md" />
          </div>

          {showDropdown && (
            <div className="absolute pt-4 right-0 ">
              <div className="w-[50vw] lg:w-[20vw] p-4 bg-white rounded-md">
                <p className="border-b-2 mb-3 pb-2 block md:hidden">
                  {userInfo.displayName}
                </p>
                <button
                  className=" text-left font-bold w-full"
                  onClick={signOutUser}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
