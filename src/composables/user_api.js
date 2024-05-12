import axios from 'axios'
import {ref,isRef,unref,watchEffect} from 'vue' 
const error = ref(null)
   
 function getallUsersData(url){
    const userData = ref(null)
        const getAllData = async () => { 
        userData.value = null               // reset state before fetching // 
        error.value = null

    try { 
            const res = await axios(url.value)
            console.log(res.data.data) 
            userData.value = res.data.data
    } catch (err) { 

            error.value = err
        }
    }
 

if (isRef(url)) {   
    watchEffect(()=>{
        getAllData();
    })                 // setup reactive re-fetch if input URL is a ref
          
} else {
    getallUsersData() 
} 
    return {userData, error} 
}

export { getallUsersData ,error}

