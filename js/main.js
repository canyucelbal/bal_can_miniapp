import { fetchData } from "./components/DataMiner.js";
import MiniCard from "./components/MiniCard.js";

(() => {

    let vue_vm = new Vue({

        data: {
            mainMessage: "Mini App",
            descMessage: "You can mouseover on any mini model to see it's details",
            removeAformat: true,
            showBioData: false,
            minis: [],
            currentMiniData: {}
        },

        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php").then(data => this.minis = data).catch(err => console.error(err));
        },

        updated: function() {
            console.log("Vue just updated the DOM");
                },

        methods: {

            showDetail(target) {

                console.log("Mouseover to view mini model's detail", target, target.model);

                this.showBioData = this.showBioData ? false : true;

                this.currentMiniData = target;
            },
            
        },

        components: {
            "mini-card": MiniCard
        }
    }).$mount("#app");
})();