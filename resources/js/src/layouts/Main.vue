<template>
    <section class="dashboard-outer-wrap">
        <div class="container-fluid">
            <div class="row">
                <SideBar></SideBar>
                <router-view />
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>
