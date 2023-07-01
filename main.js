const {createApp , ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(false)
        const inventory = ref(100)
        const details = ref([
            '50% cotton',
            '30% wool' ,
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green' , image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value +=1
        }
        function changeStock(){
            inStock.value = !inStock.value
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        const size = ref([
            'S','M','L'
        ])
        const onSale = ref(false)
        const description = ref('green sock so beautiful')
        const link =ref('http://www.camt.cmu.ac.th')
        return{
            product,image,description,link,inStock,inventory,onSale,details,variants,
            size,cart,addToCart,updateImage,changeStock
        }
    }

}).mount('#app')