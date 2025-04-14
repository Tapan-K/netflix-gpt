import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVTAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex flex-col md:flex-row md:justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      <div className="flex p-4 justify-between">
        {showGptSearch && (
          <select
            className="p-2 m-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifire} value={lang.identifire}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 my-2 text-white bg-purple-500 mx-4 rounded-md hover:bg-purple-700"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        <img
          className="w-12 h-12 hidden md:block"
          src={USER_AVTAR}
          alt="user icon"
        />

        <button onClick={handleSignOut} className="text-white  ">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
