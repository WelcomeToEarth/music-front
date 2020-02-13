<template lang="html">
    <div class="bgc">
        <div class="mb-logo" />
        <!-- <img src="../public/music.jpg" class="title">    -->
        <div v-show="sidebarshow" class="login">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="user.username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password"></mt-field>
            <mt-button size="large"  type="danger" @click="login">登录</mt-button>
            <br/>
            <mt-button size="large"  type="danger" plain @click="register">注册</mt-button>
        </div>
        <div v-show="!sidebarshow" class="register">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="new_user.username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="new_user.email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="new_user.password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="new_user.phone"></mt-field>
            <mt-button size="large"  type="danger" @click="signUp">注册</mt-button>
            <br/>
            <mt-button size="large"  type="danger" plain @click="clear">重置</mt-button>
        </div>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            sidebarshow: true,
            user: {
                username: '',
                password: ''
            },
            new_user: {
                username: '',
                password: '',
                mail: '',
                phone: ''
            }
        }
    },
    components: {
    },
    methods: {
      login(){
        var url = 'http://localhost:3000/api/login';
        var data = this.user;
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if(response.code == 0) {
                    // 登录成功
                    localStorage.setItem("username",this.user.username)
                    Toast({
                        message: '登录成功',
                        iconClass: 'icon icon-success'
                    });
                    this.$router.push('mobile')
                }
            });
      },
      register(){
          this.sidebarshow = false
      },
      signUp(){
        var url = 'http://localhost:3000/api/register';
        var data = this.new_user;
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                    // 登录成功
                    Toast({
                        message: '注册成功',
                        iconClass: 'icon icon-success'
                    });
                    this.sidebarshow = true
                    this.clear()
            });
      },
      clear(){
          this.new_user = {}
      }
    }
}
</script>

<style lang="scss">
// @import '../assets/style/index.scss';

.bgc{
    background-image:  url('./../imgs/mb/background.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 700px;
    background-size: 100% 100%;
}
.login{
    padding: 30px;
    padding-top: 300px;
}
.register{
    padding: 30px;
    padding-top: 220px;
}
.title{
    width:100%;
}
.mb-logo {
  position: absolute; left: 15px; top: 10px;
  width: 100px; height: 40px;
  background: url(~@/imgs/mb/logo.png) no-repeat center/contain;
}
</style>