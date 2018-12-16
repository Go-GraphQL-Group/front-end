<template>
<mu-container id="wrapper">
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules" class="nice-border">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="密码" prop="password" :rules="passwordRules" class="nice-border">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item class="center">
      <mu-button color="primary" @click="login" style="display: flex;align-self: center;margin: auto auto;">提交</mu-button>
      <mu-button @click="clear" style="display: flex;align-self: center;margin: auto auto;">重置</mu-button>
    </mu-form-item>
  </mu-form>
</mu-container>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      showLogin: true,
      username: '',
      password: '',
      usernameRules: [
        {validate: (val) => !!val, message: '必须填写用户名'},
        {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        {validate: (val) => !!val, message: '必须填写密码'},
        {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      validateForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      let res = await this.$http({
        url: '/api/login',
        method: 'post',
        data: this.$qs.stringify({
          username: this.validateForm.username,
          password: this.validateForm.password
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      console.log('response:', res)
      // todo: judge the status
      this.$store.commit('login', {
        status: true,
        token: res.data[this.$store.state.main.tokenName]
      })
      console.log('login state: ', this.$store.state.main.login)
      console.log('get token ', this.$store.state.main.token)
      this.$router.push('/view')
    },
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      })
    },
    clear () {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
#wrapper {
  box-sizing: border-box;
  width: 400px;
  margin: 60px auto;
  background-color: #f7f7f7;
  padding: 30px 40px;
  padding-bottom: 10px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
}
.nice-border {
  border: 0px solid #747474;
}
.center {
  display: flex;
  justify-content: center;
  align-content: flex-end;
  margin-top: 30px;
}
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
