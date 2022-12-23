
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAeNXQV_kOESkyyabCMJT7QJBg2S3g4t3s",
  authDomain: "klickkkar.firebaseapp.com",
  projectId: "klickkkar",
  storageBucket: "klickkkar.appspot.com",
  messagingSenderId: "847764949805",
  appId: "1:847764949805:web:60e64dd9a2d9b7bfc661a4"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app
