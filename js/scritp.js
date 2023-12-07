
const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: "Hello Vue!",
            foto: " https://res.cloudinary.com/practicaldev/image/fetch/s--q6AIFazN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg "
        }
    },

}).mount('#app')