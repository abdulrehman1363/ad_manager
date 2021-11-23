<template>
    <div class="col-xl-5">
        <div class="content-login db-card">
            <div class="content-login-head">
                <h1>Log in on AdManager</h1>
            </div>
            <div class="login-options">
                <div class="login-option-single fb">
                    <a href=""><img src="images/fb-icon.svg" alt="facebook icon">Continue with FaceBook</a>
                </div>
                <div class="login-option-single coin-x">
                    <a href=""><img src="images/coin-x-logo-small.svg" alt="coin-x icon">Continue with CoinX</a>
                </div>
                <div class="login-option-single gmail">
                    <a href=""><img src="images/mail-icon.svg" alt="gmail icon">Continue with E-mail</a>
                </div>
            </div>
            <div class="login-separator">
                <hr>
                <span>OR</span>
            </div>
            <div class="login-form-wrap">
                <Form @submit="LoginJWT" :validation-schema="schema" >
                    <div class="col-12">
                        <Field type="email" name="email" class="form-control" placeholder="Email Address" autocomplete="email" required />
                    </div>
                    <div class="col-12">
                        <Field type="password" name="password" class="form-control" placeholder="Password" autocomplete="new-password" required />
                    </div>
                    <div class="login-wrong-password">
                        <a href="">Wrong password</a>
                    </div>
                    <div class="col-12 login-btn-wrap">
                        <button type="submit" class="" v-if="!state.isSending">Login</button>
                        <ButtonLoader v-else-if="state.isSending" value="Logging you in"/>
                    </div>
                    <div class="login-forgot-password">
                        <a href="">Forgot password?</a>
                    </div>
                </Form>
            </div>
            <div class="login-separator two">
                <hr>
            </div>
            <div class="create-account-btn">
                <a href="">Create an account</a>
            </div>
        </div>
    </div>
</template>

<script>
import { Form,Field ,ErrorMessage } from 'vee-validate'
import * as Yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data(){
        return{
            state:{
                isSending: false,
            }
        }
    },
    setup() {
        const schema = Yup.object().shape({
            email: Yup.string().email().required().label("Email Address"),
            password: Yup.string().min(5).required().label("Your Password")
        });
        return {
            schema
        };
    },
    created() {
        this.$store.dispatch('auth/fetchCSRFToken');
    },
    methods:{
        LoginJWT(payload){
            this.state.isSending = true;
            this.$store.dispatch('auth/loginJWT', payload)
                .then(() => {
                    this.$toast.show('Logged in Successfully', {
                        type: 'success',
                        // all of other options may go here
                    });
                })
                .catch(error => {
                    this.state.isSending = false;
                    this.$toast.show('Invalid Login!', {
                        type: 'error',
                        // all of other options may go here
                    });
                })
        }
    }
}
</script>
