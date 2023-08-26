import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDZ5kHr-UdwdJCq65QBxFX4S-iiYGL5Yio",
  authDomain: "adhika-portfolio.firebaseapp.com",
  projectId: "adhika-portfolio",
  storageBucket: "adhika-portfolio.appspot.com",
  messagingSenderId: "109288031139",
  appId: "1:109288031139:web:5e1bbc33a9935307981016",
  measurementId: "G-JJEHHK9NRS",
};

export const useAnalytics = () => {
  let analytics: any = null;
  const app = initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  }
  return analytics;
};
