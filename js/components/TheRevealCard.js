export default {
    name: "TheRevealCard",
    props: ["reveal"],

    //data needs to be a function inside a component
    data: function() {
        return {
            myName: this.mini.model,
            myPrice: this.mini.price,
            program: "IDP"
        }
    },

    template: 
        `
        <h1>Model: {{ currentMiniData.model }}</h1>
        <p>Seats: {{ currentMiniData.seats }}</p>
        <p>Emission: {{ currentMiniData.emission }}</p>
        <p>Consumption: {{ currentMiniData.consumption }}</p>
        <p>Price: {{ currentMiniData.price }}</p>`,
    created: function() {
        console.log(`created ${this.mini.model}'s REVEAL`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.mini.model}'s componenet!`);
        }
    }
}

// <a href="" class="remove-mini">Remove {{ mini.model }}</a>
{/* <a href="" class="remove-mini" >Show / Hide {{ mini.model }} info </a>  */}
{/* <p>Mini model: {{ mini.model }}</p> */}