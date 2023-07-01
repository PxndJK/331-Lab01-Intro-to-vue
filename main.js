const {createApp , ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const product1 = ref('shoes')
        return{
            product , product1
        }
    }

}).mount('#app')