const {createApp , ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const product1 = ref('shoes')
        const link =ref('http://www.camt.cmu.ac.th')
        return{
            product,image,product1 , link
        }
    }

}).mount('#app')