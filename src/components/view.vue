<template>
<div id="wrapper">
  <div id="filters">
    <h2>Filters: Specify whatever you need! </h2>
    <mu-container>
      <mu-form :model="form" class="filter-form">
        <mu-container class="filter">
          <mu-form-item prop="checkbox">
            <label style="display: block;margin-right: 20px;">type:</label>
            <mu-checkbox v-model="isAllParamSet" label="all"></mu-checkbox>
            <mu-checkbox v-for="item in form.param.group" v-model="form.param.values" :key="item" :value="item" :label="item"></mu-checkbox>
          </mu-form-item>
        </mu-container>
        <!-- people filter -->
        <mu-container class="filter" v-for="filter in form.param.group" :key="filter">
          <label style="display: block;margin-right: 20px;">{{form[filter].label}}:</label>
          <mu-form-item prop="radio" label="query type:" label-position="left" style="margin-bottom: 10px;">
            <mu-radio v-model="form[filter].queryType" label="lookup" value="lookup"></mu-radio>
            <mu-radio v-model="form[filter].queryType" label="browse" value="browse"></mu-radio>
            <mu-radio v-model="form[filter].queryType" label="search" value="search"></mu-radio>
          </mu-form-item>
          <mu-form-item prop="input" v-if="form[filter].queryType === 'lookup'" label="id" label-position="left" style="max-width: 200px;margin-bottom: 10px;">
            <mu-text-field v-model="form[filter].id"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" v-if="form[filter].queryType !== 'lookup'" label="first" label-position="left" style="max-width: 200px;margin-bottom: 10px;">
            <mu-text-field v-model="form[filter].first"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" v-if="form[filter].queryType !== 'lookup'" label="after" label-position="left" style="max-width: 200px;margin-bottom: 10px;">
            <mu-text-field v-model="form[filter].after"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" v-if="form[filter].queryType === 'search'" label="search" label-position="left" style="max-width: 200px;margin-bottom: 10px;">
            <mu-text-field v-model="form[filter].search"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="checkbox">
            <label style="margin-right: 20px;">fields:</label>
            <mu-checkbox v-model="isAllFieldsSet" label="all"></mu-checkbox>
            <mu-checkbox v-for="item in form[filter].group" v-model="form[filter].values" :key="item" :value="item" :label="item"></mu-checkbox>
          </mu-form-item>
        </mu-container>
        <!-- planets filter -->
        <mu-container>
          <mu-flex justify-content="center" style="padding: 20px;">
            <mu-button @click="requestData" style="background-color: #1C1E22;color: #f7f7f7;">request</mu-button>
          </mu-flex>
        </mu-container>
      </mu-form>
    </mu-container>
  </div>
  <mu-container id="playground">
    <mu-flex style="width: 50%;"><p class="result-box">Request:<pre>{{queryStr}}</pre></p></mu-flex>
    <mu-flex style="width: 50%;"><p class="result-box">Response:<pre>{{result}}</pre></p></mu-flex>
  </mu-container>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'view',
  data () {
    return {
      indent: '  ',
      query: {},
      queryStr: '',
      result: '',
      form: {
        param: {
          paramName: 'type',
          values: [],
          group: ['people', 'planets', 'films', 'species', 'vehicles', 'starships']
        },
        people: {
          label: 'people filter',
          paramName: 'people',
          values: [],
          queryType: 'lookup',
          id: '1',
          first: 1,
          after: '',
          search: '',
          group: ['id', 'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'homeworld', 'films', 'species', 'vehicles', 'starships'],
          links: {homeworld: 'planets', films: 'films', species: 'species', vehicles: 'vehicles', starships: 'starships'}
        },
        planets: {
          label: 'planets filter',
          paramName: 'planet',
          values: [],
          queryType: 'lookup',
          id: '1',
          first: 1,
          after: '',
          search: '',
          group: ['id', 'name', 'diameter', 'rotation_period', 'orbital_period', 'gravity', 'population', 'climate', 'terrain', 'surface_water', 'residents', 'films'],
          links: {films: 'films'}
        },
        species: {
          label: 'species filter',
          paramName: 'specie',
          values: [],
          queryType: 'lookup',
          id: '1',
          first: 1,
          after: '',
          search: '',
          group: ['id', 'name', 'classification', 'designation', 'average_height', 'average_lifespan', 'eye_colors', 'hair_colors', 'skin_colors', 'language', 'homeworld', 'Vehicle', 'films'],
          links: {homeworld: 'planets', Vehicle: 'vehicles', films: 'films'}
        },
        starships: {
          label: 'starships filter',
          paramName: 'starship',
          values: [],
          queryType: 'lookup',
          id: '1',
          first: 1,
          after: '',
          search: '',
          group: ['id', 'name', 'model', 'starship_class', 'manufacturer', 'cost_in_credits', 'length', 'crew', 'passengers', 'max_atmosphering_speed', 'hyperdrive_rating', 'MGLT', 'cargo_capacity', 'consumables', 'films', 'pilots'],
          links: {films: 'films', pilots: 'vehicles'}
        },
        vehicles: {
          label: 'vehicles filter',
          paramName: 'vehicle',
          values: [],
          queryType: 'lookup',
          id: '1',
          first: 1,
          after: '',
          search: '',
          group: ['id', 'name', 'model', 'vehicle_class', 'manufacturer', 'length', 'cost_in_credits', 'crew', 'passengers', 'max_atmosphering_speed', 'cargo_capacity', 'consumables', 'films', 'pilots'],
          links: {films: 'films', pilots: 'vehicles'}
        },
        films: {
          label: 'films filter',
          paramName: 'film',
          values: [],
          queryType: 'lookup',
          id: '1',
          first: 1,
          after: '',
          search: '',
          group: ['id', 'title', 'episode_id', 'opening_crawl', 'director', 'producer', 'release_date', 'species', 'starships', 'vehicles', 'characters', 'planets'],
          links: {species: 'species', starships: 'starships', vehicles: 'vehicles', characters: 'people', planets: 'planets'}
        }
      }
    }
  },
  computed: {
    isAllParamSet: {
      get: function () {
        return this.form.param.values.length === 6
      },

      set: function (newvalue) {
        this.handleChangeAll(this.form.param, newvalue)
      }
    },
    isAllFieldsSet: {
      get: function () {
        return this.form.people.values.length === this.form.people.group.length
      },
      set: function (newvalue) {
        this.handleChangeAll(this.form.people, newvalue)
      }
    }
  },
  methods: {
    handleChangeAll (param, newvalue) {
      if (newvalue) {
        param.values = param.group.slice(0)
      } else {
        param.values = []
      }
    },
    async requestData () {
      // check login state
      if (this.$store.state.main.login !== true) {
        this.$alert('You should login before you can request the GraphQL Service', 'alert')
        return
      }
      // todo add token
      this.query = this.generateQuery()
      console.log(this.query)
      this.queryStr = this.queryToStr(this.query, 0) + '\n'
      // make req
      let res = await this.$http({
        url: 'http://localhost:9090/query',
        method: 'post',
        data: {
          operationName: null,
          query: this.queryStr,
          variables: {}
        },
        headers: {
          'Content-Type': 'application/json',
          'SW-TOKEN': this.$store.state.main.token
        }
      })
      console.log(res)
      this.result = res.data
    },
    generateQuery () {
      // return this.genLookupQuery(this.form.people)
      let query = {count: this.form.param.values.length, nodeName: '', hasParam: false}
      for (let i = 0; i < this.form.param.values.length; i++) {
        let type = this.form.param.values[i]
        switch (this.form[type].queryType) {
          case 'lookup':
            query[String(i)] = this.genLookupQuery(this.form[type])
            break
          case 'browse':
            query[String(i)] = this.genBrowseQuery(this.form[type])
            break
          case 'search':
            query[String(i)] = this.genSearchQuery(this.form[type])
            break
          default:
            console.log('invalid query type')
        }
      }
      return query
    },
    genLookupQuery (filter) {
      let query = {}
      // look query structure
      query.nodeName = filter.paramName
      query.hasParam = true
      query.param = {'id': filter.id}
      query.param.names = ['id']

      // put fields
      query.count = filter.values.length
      for (let i = 0; i < query.count; i++) {
        query[String(i)] = {}
        query[String(i)].nodeName = filter.values[i]
        query[String(i)].count = 0
        // add related resources
        if (filter.links[filter.values[i]] !== undefined) {
          console.log('failed')
          let target = filter.links[filter.values[i]]
          let sub = this.form[target]
          // add related resource
          for (let j = 0; j < sub.values.length; j++) {
            if (sub.links[sub.values[j]] === undefined) {
              query[String(i)][String(query[String(i)].count)] = {count: 0, nodeName: sub.values[j]}
              query[String(i)].count++
            }
          }
          // no sub fields given then default by id
          if (query[String(i)].count === 0) {
            query[String(i)].count = 1
            query[String(i)]['0'] = {count: 0, nodeName: 'id'}
          }
        }
      }
      console.log(query)
      return query
    },
    genBrowseQuery (filter) {
      let query = {}
      // browse query structure
      query.nodeName = filter.paramName + 's'
      query.hasParam = true
      query.param = {'first': filter.first}
      query.param.names = ['first']
      if (filter.after !== '') {
        query.param.after = filter.after
        query.param.names.push('after')
      }

      query.count = 3
      query['0'] = this.genPageInfo()
      query['2'] = {count: 0, nodeName: 'totalCount'}
      let edges = {count: 2, nodeName: 'edges', '0': this.genNode(filter, 'node'), '1': {count: 0, nodeName: 'cursor'}}
      query['1'] = edges
      return query
    },
    genSearchQuery (filter) {
      let query = {}
      // browse query structure
      query.nodeName = filter.paramName + 'Search'
      query.hasParam = true
      query.param = {'search': filter.search, 'first': filter.first}
      query.param.names = ['search', 'first']
      if (filter.after !== '') {
        query.param.after = filter.after
        query.param.names.push('after')
      }

      query.count = 3
      query['0'] = this.genPageInfo()
      query['2'] = {count: 0, nodeName: 'totalCount'}
      let edges = {count: 2, nodeName: 'edges', '0': this.genNode(filter, 'node'), '1': {count: 0, nodeName: 'cursor'}}
      query['1'] = edges
      return query
    },
    genNode (filter, nodeName) {
      let node = {}
      node.nodeName = nodeName
      node.hasParam = false
      node.count = filter.values.length
      for (let i = 0; i < node.count; i++) {
        node[String(i)] = {}
        node[String(i)].nodeName = filter.values[i]
        node[String(i)].count = 0
        // add related resources
        if (filter.links[filter.values[i]] !== undefined) {
          console.log('failed')
          let target = filter.links[filter.values[i]]
          let sub = this.form[target]
          // add related resource
          for (let j = 0; j < sub.values.length; j++) {
            if (sub.links[sub.values[j]] === undefined) {
              node[String(i)][String(node[String(i)].count)] = {count: 0, nodeName: sub.values[j]}
              node[String(i)].count++
            }
          }
          // no sub fields given then default by id
          if (node[String(i)].count === 0) {
            node[String(i)].count = 1
            node[String(i)]['0'] = {count: 0, nodeName: 'id'}
          }
        }
      }
      return node
    },
    genPageInfo () {
      let info = {}
      info.nodeName = 'pageInfo'
      info.hasParam = false

      info.count = 4
      info['0'] = {count: 0, nodeName: 'hasPreviousPage'}
      info['1'] = {count: 0, nodeName: 'hasNextPage'}
      info['2'] = {count: 0, nodeName: 'startCursor'}
      info['3'] = {count: 0, nodeName: 'endCursor'}
      return info
    },
    queryToStr (query, level) {
      let count = query.count
      let indents = ''
      for (let j = 0; j < level; j++) {
        indents += this.indent
      }
      if (count === 0) {
        return '' + query.nodeName
      }
      let param = ''
      if (query.hasParam) {
        param = this.paramToStr(query.param)
      }
      let str = '' + indents + query.nodeName + param + ' {\n'
      for (let i = 0; i < count; i++) {
        // add sub item
        if (query[String(i)].count === 0) {
          str = str + indents + this.indent + this.queryToStr(query[String(i)], level + 1)
        } else {
          str = str + this.queryToStr(query[String(i)], level + 1)
        }
        // add , if not last
        if (i !== count - 1) {
          str = str + ','
        }
        str = str + '\n'
      }
      str = str + indents + '}'
      return str
    },
    paramToStr (param) {
      if (param.names.length === 0) {
        return ''
      }
      let items = []
      for (let id in param.names) {
        let name = param.names[id]
        if (typeof (param[name]) === 'number') {
          items.push(name + ': ' + param[name])
        } else {
          items.push(name + ': ' + '"' + param[name] + '"')
        }
      }
      return '(' + items.join(', ') + ')'
    }
  }
}
</script>

<style scoped>
div {
  border: 0px solid #330000;
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
  font-size: 15px;
}

.filter {
  padding: 4px 4px;
  border: 1px solid #1C1E22;
}
#playground {
  width: 100%;
  flex-direction: row;
  justify-content: center;
  display: flex;
}
.result-box {
  box-sizing: border-box;
  padding: 9.5px;
  width: 100%;
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
