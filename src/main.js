import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { primevueComponents } from './services/wrapper/primevue_component';
import { db } from './firebase/firebase';
import { collection, getDocs, addDoc, onSnapshot, doc, updateDoc } from 'firebase/firestore';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";


const app = createApp(App)

app.use(router)
primevueComponents(app);
window.db = db;
window.collection = collection;
window.getDocs = getDocs;
window.addDoc = addDoc;
window.onSnapshot = onSnapshot;
window.doc = doc;
window.updateDoc = updateDoc;

app.mount('#app')
