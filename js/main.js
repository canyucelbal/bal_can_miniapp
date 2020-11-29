import { fetchData } from "./components/DataMiner.js";
import MiniCard from "./components/TheProfCard.js";
import RevealMini from "./components/TheRevealCard.js";

(() => {
    // Vue.component("prof-card", {
    //     props: ["prof"],
    //     template: `<li>
    //                     <img :src="'images/' + prof.avatar" :alt='prof.name + " image"'>
    //                     <p>Prof Name: {{ prof.name }}</p>
    //                     <a href="" class="remove-prof">Show {{ prof.name }} info </a> 
    //                     <a href="" class="remove-prof">Remove {{ prof.name }}</a>
    //                 </li>`,
    //     created: function() {
    //         console.log(`created ${this.prof.name}'s card`);
    //     }
    // });
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Mini App",
            anotherMessage: "You can click on any mini model to see",
            removeAformat: true,
            showBioData: false,
            minis: [],
            currentMiniData: {}
        },

        // this is the 'mounted' lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php").then(data => this.minis = data).catch(err => console.error(err));
        },

        // run amethod when we change our view (update the DOM with Vue)
        updated: function() {
            console.log("Vue just updated the DOM");
                },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            showDetail(target) {
                //remove this mini from the miniessors array
                console.log("clicked to view mini bio data", target, target.model);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                // make the selected mini's data
                this.currentMiniData = target;
            }
        },

        components: {
            "mini-card": MiniCard,
            "reveal-mini": RevealMini,
        },
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();