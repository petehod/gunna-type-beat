import { FirebaseCollections } from "@/collections/firebaseCollections";
import { db } from "../services/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
} from "firebase/firestore";
import { AsyncResult, createError, createSuccess } from "@/utils/result.utils";
import { z } from "zod";
import { Logger } from "@/utils/logging.utils";

type FirestoreErrorMessage = {
  collectionName: FirebaseCollections;
  docId?: string;
  error: unknown;
};

export const CRUDService = <T>({
  zodValidator,
  collectionName,
}: {
  zodValidator: z.ZodSchema<T>;
  collectionName: FirebaseCollections;
}) => {
  type UpdateData = { id: string } & Partial<z.infer<typeof zodValidator>>;

  return {
    create: async () => {},
    read: async (
      docId: string
    ): AsyncResult<z.infer<typeof zodValidator>, FirestoreErrorMessage> => {
      const docRef = doc(db, collectionName, docId);

      try {
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          return createError({
            collectionName,
            docId,
            error: "Document not found",
          });
        }
        return createSuccess(zodValidator.parse(docSnap.data()));
      } catch (error) {
        Logger.err("DB", {
          collectionName,
          docId,
          error,
        });
        return createError({
          collectionName,
          docId,
          error,
        });
      }
    },
    readAll: async ({
      docLimit,
    }: {
      docLimit: number;
    }): AsyncResult<z.infer<typeof zodValidator>[], FirestoreErrorMessage> => {
      try {
        const docRef = query(collection(db, collectionName), limit(docLimit));

        const querySnapshot = await getDocs(docRef);

        const docs = querySnapshot.docs.flatMap((doc) => {
          const validate = zodValidator.safeParse(doc.data());
          if (!validate.success) {
            Logger.warn("DB", {
              collectionName,
              docId: doc.id,
              error: validate.error,
            });
            return [];
          } else return validate.data;
        });

        return createSuccess(docs);
      } catch (error) {
        Logger.err("DB", {
          collectionName,
          error,
        });
        return createError({
          collectionName,
          error,
        });
      }
    },
    update: async (data: UpdateData) => {
      const docRef = doc(db, collectionName, data.id);
      try {
        await updateDoc(docRef, data);
        return createSuccess(data);
      } catch (error) {
        Logger.err("DB", {
          collectionName,
          docId: data.id,
          error,
        });
        return createError({
          collectionName,
          docId: data.id,
          error,
        });
      }
    },
    delete: async (docId: string) => {
      const docRef = doc(db, collectionName, docId);
      try {
        await deleteDoc(docRef);
        return createSuccess(docId);
      } catch (error) {
        Logger.err("DB", {
          collectionName,
          docId,
          error,
        });
        return createError({
          collectionName,
          docId,
          error,
        });
      }
    },
  };
};
