import { useState, createContext, useContext, useEffect } from "react";
import { GetAllUsers, userLogin, GetUser,GetFollowing, fallowHe,DeleteFollowing } from "../services/api";
const tokens1 = localStorage.getItem("access_token");

const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState({});
  const [follows, setFollows] = useState([]);
  const [profile, setProfile] = useState({});
  const [users, setusers] = useState([]);
  const [loggedin, setloggedin] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const tokens1 = localStorage.getItem("access_token");
    (async () => {
      if (tokens1) {
        setloggedin(true);

        setloading(false);
      } else {
        setloading(false);
      }
    })();
  }, []);
   const removeFollowing =async(id)=>{
  await DeleteFollowing(id);
  const index= follows.filter(x=>x.id !==id)
    setFollows(index)
   }
  const Getfollow =async()=>{
    const following= await GetFollowing();
   setFollows(following)
   }
  const follow =async(heid)=>{
   const follow= await fallowHe({userId:tokens1,HeId:heid});
  setFollows([...follows,follow])
 
  }
  const GetUsers = async () => {
    const users = await GetAllUsers();
    setusers(users);
  };
  const GetProfile = async () => {
    const profiles = await GetUser();
    setProfile(profiles);
  };
  const login = async (input) => {
    setloggedin(true);
    const users = await userLogin(input);
    setuser(users);

    localStorage.setItem("access_token", users.id);
  };
  const logout = async () => {
    //  const close = await Logout();

    setloggedin(false);

    localStorage.removeItem("access_token");
  };

  const values = {
    loggedin,
    user,
    login,
    logout,
    GetUsers,
    users,
    profile,
    GetProfile,
    follow,
    Getfollow,
    follows,
   removeFollowing
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
