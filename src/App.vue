<template>
  <div class="container mx-auto p-4">
    <div class="text-center font-bold mb-4">FIREFLY TECH EMPLOYEE SEARCH</div>
    <div class="flex mb-4">
      <input type="text" v-model="searchQuery" placeholder="Search..." class="flex-1 p-2 border rounded mr-2" />
      <button @click="search(searchQuery)" class="p-2 bg-blue-500 text-white rounded hover:bg-green-600">Search</button>
    </div>
    <div class="grid grid-cols-4 md:grid-cols-4 gap-4">
      <div v-for="user in usersData" :key="user.id" class="bg-white rounded border shadow-sm overflow-hidden">
        <img :src="user.avatar" alt="Avatar" class="w-full h-auto" />
        <div class="p-4">
          <p class="text-sm font-bold">User ID: {{ user.id }}</p>
          <p class="text-sm">Full Name: {{ user.first_name }} {{ user.last_name }}</p>
          <p class="text-sm">Email: {{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue'
  import { getallUsersData } from './composables/user_api';
  
  let url = ref("https://reqres.in/api/users");
  const { userData: usersData, error: errors } = getallUsersData(url)
 

  const search = ({ query }) => { 
    
    console.log("searching for",query)


  }
  </script setup>
  