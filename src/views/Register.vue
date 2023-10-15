<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

     const email = ref('')
    const password = ref('');

   function register() {
               const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    console.log(userCredential);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorCode, errorMessage);
  });
    }
</script>

<template>
               <div class="login-form">
                 <form @submit.prevent="register">
                   <h2>Register</h2>
                   <div class="form-group">
                     <label for="email">Email</label>
                     <input type="text" id="email" v-model="email" />
                   </div>
                   <div class="form-group">
                     <label for="password">Password</label>
                     <input type="password" id="password" v-model="password" />
                   </div>
                   <button type="submit">Register</button>
                 </form>
               </div>
             </template>
<style scoped>
.login-form {
  width: 300px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.2);
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: blue;
}

.form-group {
  margin: 10px 0;
}

label {
  display: block;
  color: blue;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid blue;
  border-radius: 5px;
}

button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: darkblue;
}
</style>
             