const {createApp , ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(false)
        const inventory = ref(100)
        const onSale = ref(false)
        const description = ref('green sock so beautiful')
        const link =ref('http://www.camt.cmu.ac.th')
        return{
            product,image,description,link,inStock,inventory,onSale
        }
    }

}).mount('#app')