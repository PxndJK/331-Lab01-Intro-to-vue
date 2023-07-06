const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const premium = ref(true);
    function updateCart(id) {
      cart.value.push(id);
    }
    const product = ref("Boots");
    const brand = ref("SE 331");
    // const image = ref("./assets/images/socks_green.jpg");
    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    // const inStock = ref(false);
    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });
    const inventory = ref(100);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 50,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 0,
      },
    ]);
    function updateVariant(index) {
      selectedVariant.value = index;
    }
    const selectedVariant = ref(0);
    const cart = ref([]);
    function addToCart() {
      cart.value += 1;
    }
    const title = computed(() => {
      //   return brand.value + " " + product.value;
      if (onSale.value) {
        return brand.value + " " + product.value + " is on sale";
      } else {
        return brand.value + " " + product.value;
      }
    });
    function changeStock() {
      inStock.value = !inStock.value;
    }
    function updateImage(variantImage) {
      image.value = variantImage;
    }
    function removeCart(id) {
      cart.value.splice(id, 1);
    }
    const size = ref(["S", "M", "L"]);
    const onSale = ref(true);
    // const onSale = computed(() =>{
    //     return
    // })
    const description = ref("green sock so beautiful");
    const link = ref("http://www.camt.cmu.ac.th");
    return {
      image,
      description,
      link,
      inStock,
      inventory,
      onSale,
      details,
      variants,
      size,
      cart,
      addToCart,
      updateImage,
      changeStock,
      title,
      updateVariant,
      premium,
      updateCart,
      removeCart,
    };
  },
});

app.component("product-display", productDisplay);
app.component("product-details", productDetail);
app.mount("#app");
