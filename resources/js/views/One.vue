<template>
    <div class="container" >
        
        <h4>Problema 1 - Cálculo de altura</h4>

        <p>
            Chico tem 1,50m e cresce 2 centímetros por ano, enquanto Juca
            tem 1,10m e cresce 3 centímetros por ano.
        </p>
        <p>
            Clique no botão abaixo e saiba quantos anos Juca irá demorar
            para ficar maior que Chico.
        </p>

        <button class="btn btn-primary" type="button" @click.prevent="getData()" >
            <template v-if="!show" >
                Buscar Resultado
            </template>
            <template v-else>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </template>
        </button>

        
        <span v-if="years > 0" class="ml-2" >
            Demoraria <strong>{{years}}</strong> anos para ficar maior
        </span>
    </div>
</template>

<script>
export default {
    name: 'vwOne',
    data(){
        return {
            years: 0,
            show: false
        }
    },
    methods: {
        getData: function(){
            this.show = true
            fetch('/api/problem/one', {
                method: 'GET'
            })
                .then(response => ( response.json() ))
                .then(resJSON => {
                    if (resJSON.data) {
                        this.years = resJSON.time
                    }
                })
                .catch(error => {
                    console.error('Error', '=>', error)
                })
                .finally(() => {
                    this.show = false
                })
        }
    },
    mounted(){
        
    }
}
</script>