<template>
    <div class="dashboard-sidebar-wrap">
        <div class="sidebar-brand">
            <a class="brand-logo-single" href="index.html"><img src="images/logo.png" alt=""></a>
            <a class="brand-logo" href="index.html">CoinX AdManager</a>
        </div>
        <div class="dashboard-sidebar-links">
            <router-link class="dashboard-sidebar-link-single"  to="/home">
                <img src="images/overview-icon.svg" alt="overview icon">
                <span class="active">Overview</span>
            </router-link>
            <router-link class="dashboard-sidebar-link-single" to="/create-campaign">
                <img src="images/about-n-support-icon.svg" alt="create campaign icon">
                <span >Create Campaign</span>
            </router-link>
            <a class="dashboard-sidebar-link-single" href="support.html">
                <img src="images/campaign-icon.svg" alt="campaign icon">
                <span>Current Campaign</span>
            </a>
            <a class="dashboard-sidebar-link-single" href="support.html">
                <img src="images/globe-icon.svg" alt="help and support icon">
                <span>Help and Support</span>
            </a>
        </div>
        <div class="sidebar-website-link">
            <a class="dashboard-sidebar-link-single" href="login.html">
                <img src="images/logout-btn.svg" alt="logout button">
                <span>Logout</span>
            </a>
            <a class="sidebar-setting-btn" href="setting.html">
                <img src="images/setting-icon.svg" alt="settings icon">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    created() {
        let path = this.$router.currentRoute._value.path;

    }

}
</script>

<style scoped>

</style>
