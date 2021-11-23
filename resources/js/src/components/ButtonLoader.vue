<template>
    <div class="col-12 login-btn-wrap">
        <button class="" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span> {{value}} </span>
        </button>
    </div>

</template>

<script>
export default {
    name: "ButtonLoader",
    props: ['value']
}
</script>
