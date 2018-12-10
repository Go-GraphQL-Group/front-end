<template>
  <div class="container">
    <div class="row center yellow" style="{padding-bottom: '40px'}">
      <div class="jumbotron" id="block1">
      <h1 style="{font-size: '63px'}">SWAPI</h1>
      <p class="lead" style="{font-size: '39px'}">The Star Wars API</p>
      </div>
    </div>
    <div class="row" id="block2">
      <div class="col-lg-3">
      </div>
      <div class="col-lg-6 center">
        <p style="{font-size: '14px'}">All the Star Wars data you've ever wanted:</p>
        <p style="{font-size: '14px'}"><b>Planets, Spaceships, Vehicles, People, Films and Species</b></p>
        <p style="{font-size: '14px'}">From all <b>SEVEN</b> Star Wars films</p>
        <p style="{font-size: '18px'}"></p><h4>Now with The Force Awakens data!</h4><p></p>
      </div>
      <div class="col-lg-3">
      </div>
    </div>

    <div id="content">
      <h1 id="t1" >Try it now!</h1>

      <div class="input-group" id="url-input">
        <span class="input-group-addon" id="input-label">https://swapi.co/api/</span>
        <input id="interactive" type="text" class="form-control" :placeholder="placeholder" v-model="url">
        <span class="input-group-btn"><button @click="getAPIResult" class="btn btn-primary" style="background-color: #464B4F;border: 1px solid #404550;border-radius: 4px;">request</button></span>
      </div>

      <p style="width:70%;text-align:left;margin: 0 auto;"><small>Need a hint? try <a href="#" onclick=""><i>people/1/</i></a> or <a href="#" onclick=""><i>planets/3/</i></a> or <a href="#" onclick=""><i>starships/9/</i></a></small>
      </p>

      <p class="lead pad_top" style="font-size:22px;width:70%;text-align:left;margin: 0 auto;padding-top: 15px;">Result:</p>
      <p id="result-box"><pre>{{result}}</pre></p>
    </div>

    <div class="row pad_bot" style="text-align: left;margin-top: 20px;">
      <div class="col-sm-1 col-lg-1 col-md-1">
      </div>
      <div class="col-sm-3 col-lg-3 col-md-3">
        <h4 class="center">What is this?</h4>
        <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</p>
        <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
      </div>
      <div class="col-sm-4 col-lg-4 col-md-4">
        <h4 class="center">How can I use it?</h4>
        <p>All the data is accessible through our HTTP web API. Consult our <a href="/documentation">documentation</a> if you'd like to get started.</p>
        <p>Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.</p>
      </div>
      <div class="col-sm-3 col-lg-3 col-md-3">
        <h4 class="center">How can I support this?</h4>
        <p>With small donations we can keep swapi running for free, please consider throwing us some beer money to say thank you. With every $10 we can keep the site up for another month!</p>
        <p></p><form action="/stripe/donation" method="POST">
        </form><p></p>
        <p>This project is open source and you can contribute <a href="https://github.com/phalt/swapi">on GitHub</a>.</p>
      </div>
      <div class="col-sm-1 col-lg-1 col-md-1">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      baseurl: 'https://swapi.co/api/',
      url: '',
      placeholder: 'people/1/',
      result: ''
    }
  },
  methods: {
    async getAPIResult () {
      let api = this.baseurl
      if (this.url === '') {
        api += this.placeholder
      } else {
        api += this.url
      }
      let res = await this.$http.get(api)
      this.result = res.data
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
h1, h2 {
  font-weight: normal;
}

.div {
  border: 2px solid blue;
}
.container {
  background: #272A30;
  width: 100%;
  color: #B9BABA;
  padding-bottom: 50px;
}
#block1 {
  color: #ffe300;
  background: #1C1E22;
  margin-top: 60px;
  padding: 60px 48px;
}
#block2 {
  border: 1px solid #000000;
  padding: 30px 30px;
}
#t1 {
  padding-top: 20px;
  padding-bottom: 20px;
}

#input-label {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #F5F5F5;
  text-align: center;
  background-color: #444A50;
  border: 1px solid #404550;
  border-radius: 4px;
}

#url-input {
  width: 70%;
  min-width: 500px;
  margin: 0 auto;
  background-color: #3F454B;
}

#result-box {
  box-sizing: border-box;
  padding: 9.5px;
  margin: 10px auto;
  width: 70%;
  min-width: 500px;
  height: 370px;
  border: 20px solid #1C1E22;
  border-radius: 4px;
  background: #F5F5F5;
  text-align: left;
  font-size: 13px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #3a3f44;
  overflow-y: scroll;
}
</style>
