import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

import {
  ValidFirebaseDoc,
  FirebaseCollections,
} from "@/collections/firebaseCollections";
import { db } from ".";

export const FirestoreService = {
  // CREATE
  createDoc: async (
    data: ValidFirebaseDoc,
    collection: FirebaseCollections
  ) => {
    if (!data) return;
    const docRef = doc(db, collection, data.id);

    try {
      await setDoc(docRef, data);
      console.log(`${collection} document created`);
    } catch (error) {
      console.error(`Error creating ${collection} document:`, error);
    }
  },

  // READ
  readDoc: async (docId: string, collection: FirebaseCollections) => {
    const docRef = doc(db, collection, docId);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log(`No document found in ${collection} with ID: ${docId}`);
        return undefined;
      }
    } catch (error) {
      console.error(`Error reading ${collection} document:`, error);
      return undefined;
    }
  },
  // READ ALL DOCUMENTS
  readAllDocs: async (
    collectionName: FirebaseCollections
  ): Promise<ValidFirebaseDoc[] | undefined> => {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);

      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ValidFirebaseDoc[];

      console.log(`Fetched ${docs.length} documents from ${collectionName}`);
      return docs;
    } catch (error) {
      console.error(`
        Error reading all documents from ${collectionName}:,
        ${error}`);
      return undefined;
    }
  },
  // SUBSCRIBE TO ALL DOCUMENTS
  subscribeToAllDocs: (
    collectionName: FirebaseCollections,
    callback: (docs: ValidFirebaseDoc[]) => void
  ) => {
    try {
      const collectionRef = collection(db, collectionName);

      const unsubscribe = onSnapshot(
        collectionRef,
        (querySnapshot) => {
          const docs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as ValidFirebaseDoc[];

          console.log(`Real-time update received for ${collectionName}`);
          callback(docs);
        },
        (error) => {
          console.error(`Error listening to ${collectionName}:`, error);
        }
      );

      return unsubscribe; // Return the unsubscribe function to stop the listener when needed
    } catch (error) {
      console.error(`Error setting up listener for ${collectionName}:`, error);
    }
  },
  // UPDATE
  updateDoc: async (
    docId: string,
    updatedData: Partial<ValidFirebaseDoc>,
    collection: FirebaseCollections
  ) => {
    const docRef = doc(db, collection, docId);

    try {
      await updateDoc(docRef, updatedData as DocumentData);
      console.log(`${collection} document with ID: ${docId} updated`);
    } catch (error) {
      console.error(`Error updating ${collection} document:`, error);
    }
  },

  // DELETE
  deleteDoc: async (docId: string, collection: FirebaseCollections) => {
    const docRef = doc(db, collection, docId);

    try {
      await deleteDoc(docRef);
      console.log(`${collection} document with ID: ${docId} deleted`);
    } catch (error) {
      console.error(`Error deleting ${collection} document:`, error);
    }
  },
};
