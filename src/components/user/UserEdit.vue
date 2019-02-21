<template>
<div>
    <h3>Edit the User</h3>
    <h4>{{ $route.query.locale }} ---- {{ $route.query.q }} </h4>
    <button class="btn btn-primary" @click="confirm = true">Confirm</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            confirm: false
        }
    },

    beforeRouteLeave (to, from, next) {
        if(this.confirm){
            next();
        } else {
            if(confirm('Are you Sure ?')){
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>