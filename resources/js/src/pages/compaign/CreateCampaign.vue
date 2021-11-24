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
                        <div class="campaign-intro-video card">
                            <div class="campaign-intro-video-container">
                                <div class="campaign-intro-video-container-text">
                                    <span>Your Video</span>
                                    <p>From 5 sec till max 30 secs</p>
                                </div>
                            </div>
                            <div class="campaign-intro-video-logo">
                                <span>Your <br> logo</span>
                            </div>
                            <div class="campaign-intro-video-text">
                                <h3>Name of your product</h3>
                                <p>Description of your product that can have max 2 lines</p>
                                <div class="campaign-intro-video-btn">
                                    <a href="">Go to App/Website</a>
                                </div>
                            </div>
                        </div>
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
