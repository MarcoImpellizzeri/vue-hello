
Vue.createApp({
    data() {
        return {
            titleClass: "pt-5 text-light",
            title: "Crea un immagine casuale",
            image: "https://picsum.photos/900/600?random=1",
            btnClass: "btn btn-secondary",
            btnText: "Crea immagine"
        }
    },
    methods: {
        reloadPage() {
            location.reload();
        }
    }
}).mount("#app") 