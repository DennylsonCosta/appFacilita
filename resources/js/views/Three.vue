<template>
    <div class="container-fluid" >
        <h4>Problema 3 - Matrizes Multidimensionais</h4>

        <p>
            Defina o valor minimo e valor máximo para pode gerar uma matriz 5x5
            com valores randomicos. Logo após receba a matriz gerada, uma matriz 
            com os números pares e uma com números impares.
        </p>
        <p>
            Clique no botão abaixo para gerar as matrizes.
        </p>

        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">
                        Valor Mínimo
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        aria-describedby="helpId" placeholder=""
                        v-model="min"
                    >
                    <!-- <small id="helpId" class="form-text text-muted">O valor não pode ser zero.</small>
                    <small id="helpId" class="form-text text-muted">O valor não pode ser maior que o valor máximo.</small>
                    <small id="helpId" class="form-text text-muted">O valor não pode ser maior que 999.</small> -->
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">
                        Valor Máximo
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        aria-describedby="helpId" placeholder=""
                        v-model="max"
                    >
                    <!-- <small id="helpId" class="form-text text-muted">O valor não pode ser zero.</small>
                    <small id="helpId" class="form-text text-muted">O valor não pode ser menor que o valor mínimo.</small>
                    <small id="helpId" class="form-text text-muted">O valor não pode ser maior que 999.</small> -->
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <button class="btn btn-primary btn-block" type="button" @click.prevent="getData()" >
                    <template v-if="!show" >
                        Buscar Resultado
                    </template>
                    <template v-else>
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </template>
                </button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <dl>
                    <dt>Matriz inicial gerada pelo php</dt>
                    <dd v-for="(item, id) in matriz" :key="id" >{{item}}</dd>
                </dl>
            </div>
            <div class="col-md-4">
                <dl>
                    <dt>Matriz de números Pares</dt>
                    <dd v-for="(item, id) in matrizPar" :key="id" >{{item}}</dd>
                </dl>
            </div>
            <div class="col-md-4">
                <dl>
                    <dt>Matriz de números Impares</dt>
                    <dd v-for="(item, id) in matrizImpar" :key="id" >{{item}}</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vwThree',
    data(){
        return {
            min: 0,
            max: 999,
            show: false,
            matriz: [],
            matrizPar: [],
            matrizImpar: []
        }
    },
    methods: {
        getData: function(){
            this.show = true
            fetch('/api/problem/three/' + this.min + '/' + this.max, {
                method: 'GET'
            })
                .then(response => ( response.json() ))
                .then(resJSON => {
                        this.matriz = resJSON[0]
                        this.matrizPar = resJSON[1]
                        this.matrizImpar = resJSON[2]
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