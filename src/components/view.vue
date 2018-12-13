<template>
<div id="wrapper">
  <div id="filters">
    <h2>Filters:</h2>
    <mu-container id="filter1" class="filter">
      <mu-flex class="select-control-row" >
        <label>type:</label>
        <ul style="text-align: left;">
          <span><mu-checkbox v-model="isAllParamSet" label="all" @change="handleChangeAll"></mu-checkbox></span>
          <span v-for="item in param.group" :key="item.value"><mu-checkbox v-model="param.values" :label="item.label" :value="item.value"></mu-checkbox></span>
        </ul>
      </mu-flex>
    </mu-container>
    <mu-container id="filter1" class="filter">
      <mu-flex class="select-control-row" >
        <label>type:</label>
        <ul style="text-align: left;">
          <span><mu-checkbox v-model="isAllParamSet" label="all" @change="handleChangeAll"></mu-checkbox></span>
          <span v-for="item in param.group" :key="item.value"><mu-checkbox v-model="param.values" :label="item.label" :value="item.value"></mu-checkbox></span>
        </ul>
      </mu-flex>
    </mu-container>
  </div>
  <mu-flex id="playground">
    <mu-flex justify-content="center" fill>
      <mu-flex><p id="result-box">Request:<pre>{{result}}</pre></p></mu-flex>
    </mu-flex>
    <mu-flex justify-content="center" fill>
      <mu-flex><p id="result-box">Response:<pre>{{result}}</pre></p></mu-flex>
    </mu-flex>
  </mu-flex>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'name',
  data () {
    return {
      result: '{}',
      param: {
        paramName: 'type',
        values: [],
        group: [
          {
            label: 'people',
            value: 'people'
          },
          {
            label: 'planets',
            value: 'planets'
          },
          {
            label: 'films',
            value: 'films'
          },
          {
            label: 'species',
            value: 'species'
          },
          {
            label: 'vehicles',
            value: 'vehicles'
          },
          {
            label: 'starships',
            value: 'starships'
          }
        ]
      }
    }
  },
  computed: {
    isAllParamSet: {
      get: function () {
        console.log('ok')
        return this.param.values.length === 6
      },

      set: function (newvalue) {
        if (newvalue) {
          this.param.values = ['people', 'planets', 'films', 'species', 'vehicles', 'starships']
        } else {
          this.param.values = []
        }
      }
    }
  },
  methods: {
    handleChangeAll () {
      console.log('change')
    }
  }
}
</script>

<style scoped>
div {
  border: 0px solid #330000;
  font-size: 20px;
}
span {
  padding: 14px 15px 4px 5px;
}
#wrapper {
  width: 90%;
  margin: 0 auto;
}
#filters {
  width: 100%;
  background-color: #f7f7f7;
  padding: 5px 10px;
  text-align: left;
}

.filter {
  padding: 4px 4px;
}
#playground {
  width: 100%;
}
#result-box {
  box-sizing: border-box;
  padding: 9.5px;
  min-width: 500px;
  margin: 50px auto;
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
