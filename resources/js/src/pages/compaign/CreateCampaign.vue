<template>
    <div class="dashboard-content-wrap db-main">
        <div class="sidebar-toggle-btn" id="side-toggle-btn">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div id="side-close-btn">
            <div class="sidebar-close-btn">
                <img src="images/close-button.svg" alt="close button">
            </div>
        </div>
        <div class="main-content-inner">
            <div class="row" id="msform">
                <div class="col-xl-12">
                    <div class="campaign-intro-wrap card">
                        <Step1></Step1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Step1 from "./step-1";
export default {
    components:{
        Step1,
    }
}
</script>

<style scoped>

</style>
