export default {
    name: "TheMiniCard",
    props: ["mini"],

    data: function() {
        return {
            myName: this.mini.model,
            myPrice: this.mini.price,
        }
    },

    template: 
        `<li @click="logClicked">
       
          <img :src="'images/' + mini.image" :alt='mini.model + " image"' class="miniImage">
           
        </li>`,
    created: function() {
        console.log(`Created ${this.mini.model}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`Clicked on ${this.mini.model}'s component! This will definitely not do anything.`);
        }
    }
}