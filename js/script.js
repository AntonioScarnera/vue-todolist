const ToDoList = new Vue({
    el: '#lista',
    data: {
        cheesecakePistacchio: [
            {
                id: '1',
                check: false,
                nomeIngrediente: 'biscotti al cacao',

            },
            {
                id: '2',
                check: false,
                nomeIngrediente: 'burro',
            },
            {
                id: '3',
                check: false,
                nomeIngrediente: 'formaggio fresco spalmabile',

            },
            {
                id: '4',
                check: false,
                nomeIngrediente: 'panna fresca liquida',

            },
            {
                id: '5',
                check: false,
                nomeIngrediente: 'crema di pistacchi',

            },
            {
                id: '6',
                check: false,
                nomeIngrediente: 'granella di pistacchi',

            }
        ],
        nuovoIngrediente: '',
        important: ''
    },
    methods: {
        add(){
            const ingrediente = {
                check: false,
                nomeIngrediente: this.nuovoIngrediente,

            }
            this.important ? this.cheesecakePistacchio.unshift(ingrediente): this.cheesecakePistacchio.push(ingrediente);
                
            this.nuovoIngrediente = '';
        },
        remove(i){
            this.cheesecakePistacchio.splice(i, 1);
        }

    }
})