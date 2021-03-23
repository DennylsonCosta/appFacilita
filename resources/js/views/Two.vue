<template>
    <div class="container-fluid" >

        <h4>Problema 2 - Biblioteca</h4>

        <p>
            Selecione a pessoa e o livro que irá ser retirado e obtenha o comprovante
            com informações relacionadas as datas de devolução do livro retirado.
        </p>

        <div class="row">
            <div class="col-md-4">
                <h3>Pessoas</h3>
                <hr>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id" >
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.type == 'P' ? 'Professor' : 'Aluno'}}</td>
                            <td>
                                <a class="btn btn-primary" @click.prevent="selected.user = user" >Selecionar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <h3>Livros</h3>
                <hr>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Código</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id"  >
                            <td>{{book.id}}</td>
                            <td>{{book.name}}</td>
                            <td>{{book.bar_code}}</td>
                            <td>
                                <a class="btn btn-primary" @click.prevent="selected.book = book" >Selecionar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">

                <div class="container pt-4 pb-2 px-2 border">
                    <h4>Comprovante de retirada do livro</h4>
                    <p>
                        <small>Pessoa: </small>
                        <strong>{{selected.user.name}}</strong>
                    </p>

                    <p>
                        <small>Livro: </small>
                        <strong>{{selected.book.name}}</strong>
                    </p>

                    <p>
                        <small>Tempo para entrega: </small>
                        <strong>{{selected.user.time_to_return}} dias</strong>
                    </p>

                    <p>
                        <small>Dia da retirada: </small>
                        <strong>{{$moment().format('DD/MM/YYYY')}}</strong>
                    </p>

                    <p>
                        <small>Dia máximo para entrega: </small>
                        <strong>{{$moment($moment().add(selected.user.time_to_return, 'd')).format('DD/MM/YYYY')}}</strong>
                    </p>

                    <div class="text-center mt-2">
                        <hr class="mb-0 mt-4" >
                        <small>Assinatura</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vwTwo',
    data(){
        return {
            show: false,
            books: [],
            users: [],

            selected: {
                book: {},
                user: {}
            }
        }
    },
    methods: {
        getBooks: function(){
            this.show = true
            fetch('/api/problem/two/books', {
                method: 'GET'
            })
                .then(response => ( response.json() ))
                .then(resJSON => {
                        this.books = resJSON
                })
                .catch(error => {
                    console.error('Error', '=>', error)
                })
                .finally(() => {
                    this.show = false
                })
        },

        getUsers: function(){
            this.show = true
            fetch('/api/problem/two/users', {
                method: 'GET'
            })
                .then(response => ( response.json() ))
                .then(resJSON => {
                        this.users = resJSON
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
        this.getBooks()
        this.getUsers()
    }
}
</script>