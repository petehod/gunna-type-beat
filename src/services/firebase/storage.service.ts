import {
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "./index";

export const StorageService = {
  // UPLOAD (WRITE)
  uploadFile: async (
    file: File | Blob,
    filePath: string
  ): Promise<string | undefined> => {
    const storageRef = ref(storage, filePath);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      console.log(
        `File uploaded successfully to: ${snapshot.metadata.fullPath}`
      );
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.error(`Error uploading file to ${filePath}:`, error);
      return undefined;
    }
  },

  // DELETE
  deleteFile: async (filePath: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, filePath);

    try {
      await deleteObject(storageRef);
      console.log(`File deleted successfully from: ${filePath}`);
    } catch (error) {
      console.error(`Error deleting file from ${filePath}:`, error);
    }
  },

  // UPDATE (OVERWRITE)
  updateFile: async (
    file: File | Blob,
    filePath: string
  ): Promise<string | undefined> => {
    // Update is essentially deleting the old file and uploading a new one
    try {
      await StorageService.deleteFile(filePath);
      return await StorageService.uploadFile(file, filePath);
    } catch (error) {
      console.error(`Error updating file at ${filePath}:`, error);
      return undefined;
    }
  },

  // GET DOWNLOAD URL
  getFileURL: async (filePath: string): Promise<string | undefined> => {
    const storage = getStorage();
    const storageRef = ref(storage, filePath);

    try {
      const url = await getDownloadURL(storageRef);
      console.log(`File URL retrieved successfully: ${url}`);
      return url;
    } catch (error) {
      console.error(`Error getting URL for file at ${filePath}:`, error);
      return undefined;
    }
  },
};
