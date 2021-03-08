import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    //calling firebase function to login
    //TODO: Create Regex to validate email
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  //TO DO: Figure out how to update password in edit profile
  // function updatePassword(password) {
  //   return currentUser.updatePassword(password);
  // }
  // function reauthenticate(password) {
  //   const cred = auth.EmailAuthProvider.credential(currentUser.email, password);
  //   return currentUser.reauthenticateWithCredential(cred);
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //setting current user
      setCurrentUser(user);
      setLoading(false);
    });
    //unsubscribe from authStateChanged listener
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    // updatePassword,
    // reauthenticate,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
