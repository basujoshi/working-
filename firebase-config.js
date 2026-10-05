// firebase-config.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAUbevLzYVh8NxHmod7S4IIhZWo1-oTqQ8",
  authDomain: "working-4596b.firebaseapp.com",
  projectId: "working-4596b",
  storageBucket: "working-4596b.firebasestorage.app",
  messagingSenderId: "622029138124",
  appId: "1:622029138124:web:cbc03935845487351c7a69",
  measurementId: "G-288S9B9PXZ"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// Username is converted to a private synthetic Firebase email.
// Employee/admin never need to see this email.
export function loginEmail(username) {
  return String(username || "").trim().toLowerCase().replace(/\s+/g, "") + "@bdbajar.local";
}
