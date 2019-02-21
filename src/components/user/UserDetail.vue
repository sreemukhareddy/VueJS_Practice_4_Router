<template>
<div>
    <h3>The current user is--> {{ $route.params.id }}</h3>
    <router-link :to="{ name : 'useredit', params: { id : $route.params.id}, query: {locale: 'en', q: 100} }" tag="button" class="btn btn-primary">Edit this User</router-link>
</div>
</template>
