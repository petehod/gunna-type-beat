// /repo/firebase/authService.ts
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  UserCredential,
  User,
  signOut,
} from "firebase/auth";
import { auth } from "./index";

export const AuthService = {
  createUser: async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  signIn: async (email: string, password: string): Promise<UserCredential> => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in user:", error);
      throw error;
    }
  },

  deleteUser: async (user: User): Promise<void> => {
    try {
      await deleteUser(user);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },
  logout: async (): Promise<void> => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out user:", error);
      throw error;
    }
  },
};
