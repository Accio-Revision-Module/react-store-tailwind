import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebaseConfig";
import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const fetchCartItems = createAsyncThunk(
  "cart/fetch",
  async (_, thunkAPI) => {
    const userId = auth.currentUser.uid;
    const url = "https://fakestoreapi.com/products";
    try {
      const docRef = doc(db, "carts", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const promises = Object.keys(docSnap.data().items).map((id) =>
          fetch(`${url}/${id}`).then((res) => res.json()),
        );

        const products = await Promise.all(promises);

        return thunkAPI.fulfillWithValue(products);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export const updateCartItems = createAsyncThunk(
  "cart/update",
  async ({ itemId }, thunkAPI) => {
    const userId = auth.currentUser.uid;
    try {
      const docRef = doc(db, "carts", userId);
      const cartDoc = await getDoc(docRef);
      if (cartDoc.exists()) {
        await updateDoc(docRef, {
          [`items.${itemId}`]: 1,
        });
        return thunkAPI.fulfillWithValue({ itemId, quantity: 1 });
      }
      await setDoc(docRef, {
        items: {
          [itemId]: 1,
        },
      });
      return thunkAPI.fulfillWithValue({ itemId, quantity: 1 });
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue(e);
    }
  },
);

export const removeCartItems = createAsyncThunk(
  "cart/remove",
  async ({ itemId }, thunkAPI) => {
    const userId = auth.currentUser.uid;
    try {
      const docRef = doc(db, "carts", userId);
      await updateDoc(docRef, {
        [`items.${itemId}`]: deleteField(),
      });
      thunkAPI.fulfillWithValue({ itemId });
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);
