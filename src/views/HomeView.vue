<script setup>
import { collection, getDocs, limit, orderBy, query, updateDoc } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
const todoText = ref('')
const todoLists = ref([]);

async function addToDoList() {
  await addDoc(collection(db, 'mini_todo'), {
    name: todoText.value,
    status: 1
  })
  todoText.value = "";
}
function deleteList(id) {
  updateDoc(doc(db, "mini_todo", id), {
    status: 0
  });
}

onMounted(async () => {
  const q = query(collection(db, 'mini_todo'));
onSnapshot(q, (querySnapshot) => {
  const forToDo = [];
  querySnapshot.forEach((doc) => {
      const todo = {
            id: doc.id,
            name: doc.data().name,
            status: doc.data().status
      };
      forToDo.push(todo);
  });
  todoLists.value = forToDo;
});
})
</script>


<template>
    <div class="card ">
        <div>
        <InputText type="text" v-model="todoText" @keyup.enter="addToDoList" />
        </div>
        <div>
          <div v-for="(item, index) in todoLists " :key="index">
           <div  class="toDoList" v-if="item.status == 1">
            <p>
             {{ item.name }}
            </p>
            <button @click="deleteList(item.id)">
              delete
            </button>
           </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
.card {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.toDoList {
  margin-top: 1em;
  padding: 1em;
  background-color: white;
  display: flex;
  justify-content: space-between;
  color: black;
  box-shadow: 1px 1px gray;
  user-select: none;
}
.toDoList button {
  color: red;
  margin-left: 1em;
  cursor: pointer;
}
</style>

