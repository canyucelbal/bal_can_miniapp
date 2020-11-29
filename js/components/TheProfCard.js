export default {
    name: "TheMiniCard",
    props: ["mini"],

    //data needs to be a function inside a component
    data: function() {
        return {
            myName: this.mini.model,
            myPrice: this.mini.price,
            program: "IDP"
        }
    },

    template: 
        `<li @click="logClicked">
       
          <img :src="'images/' + mini.image" :alt='mini.model + " image"' class="miniImage" id="btnLeft">
        
            
              
            
        </li>`,
    created: function() {
        console.log(`created ${this.mini.model}'s card`);
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