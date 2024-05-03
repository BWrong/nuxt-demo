# 核心组件
## ContentList：获取内容列表
#### 使用方法：
```html
<!-- 参数通过prop传入，请求结果通过v-slot中的list返回 -->
<content-list v-slot="{ list }" content-type-key="key" keyword-keys="designer"  ref="content-list" >
  <ul class="ul-listb4">
    <li v-for="item in list" :key="item.id">
      <nuxt-link :to="`/designer/${item.id}`" class="con">
        <div class="pic">
          <img :src="item.faceUrl" :alt="item.title" />
        </div>
        <div class="txt">
          <div class="name">{{ item.title }}</div>
          <div class="desc">{{ item.abbreviate }}</div>
        </div>
        <div class="bot">
          <span class="link">立即预约</span>
          <h3>{{ item.title }}</h3>
        </div>
      </nuxt-link>
    </li>
  </ul>
</content-list>
```
```js
// 手动调用获取数据方法，一般不需要这样
this.$refs['content-list'].fetchData()
```
#### API
- Props

|name|类型|默认值|必填|说明|
|-|-|-|-|-|
|`contentTypeId`|String|''|N|内容类别编号|
|`contentTypeKey`|String|''|N|内容类别KEY|
|`keywordIds`|String|''|N|关键词：选中的关键词id用英文逗号隔开|
|`keywordKeys`|String|''|N|关键词：选中的关键词key用英文逗号隔开|
|`keywordNames`|String|''|N|选中的关键词名称用英文逗号隔开|
|`keywords`|String|''|N|关键字|
|`showLoading`|Boolean|true|N|请求数据时是否显示loading动画|
|`filter`|Function|`(item) => true`|N|数据过滤函数，结果数组中的每一条数据都会流过该函数，返回false会丢弃该条数据|

- Methods

|name|说明|
|-|-|
|fetchData|执行获取数据方法|

|name|说明|
|-|-|
|ready|组件获取数据后执行，参数为获取后的数据，在父组件需要使用该组件获得的数据使用|

-----------------------------
## ContentListPage：获取内容列表(带分页)
#### 使用方法：
```html
<!-- 参数通过prop传入，请求结果通过v-slot中的list返回 -->
<content-list-page v-slot="{ list }" :page-size="3" content-type-key="key" :keyword-keys="type" ref="content-list">
    <nuxt-link v-for="item in list" :key="item.id" :to="`/encyclopedias/detail/${item.id}?type=${type}`" class="item">
      <div class="pic">
        <img :src="item.faceUrl" :alt="item.title" />
      </div>
      <div class="text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.abbreviate }}</p>
      </div>
    </nuxt-link>
</content-list-page>
```
```js
// 手动调用获取数据方法，一般不需要这样
this.$refs['content-list'].fetchData()
```
#### API
- Props

|name|类型|默认值|必填|说明|
|-|-|-|-|-|
|`contentTypeId`|String|''|N|内容类别编号|
|`contentTypeKey`|String|''|N|内容类别KEY|
|`keywordIds`|String|''|N|关键词：选中的关键词id用英文逗号隔开|
|`keywordKeys`|String|''|N|关键词：选中的关键词key用英文逗号隔开|
|`keywordNames`|String|''|N|选中的关键词名称用英文逗号隔开|
|`keywords`|String|''|N|关键字|
|`showLoading`|Boolean|true|N|请求数据时是否显示loading动画|
|`filter`|Function|`(item) => true`|N|数据过滤函数，结果数组中的每一条数据都会流过该函数，返回false会丢弃该条数据|
|`pageSize`|Number|10|N|每页显示数据条数|
|`defaultPage`|Number|1|N|默认显示第几页|
|`pageConfig`|Object|{}|N|分页器配置，具体见[vuejs-paginate](https://github.com/lokyoung/vuejs-paginate#readme)|
|`showPage`|Boolean|true|N|是否显示分页器|
- Event

|name|说明|
|-|-|
|changeDage|分页改变时会触发该事件，参数为当前的页数|
|ready|组件获取数据后执行，参数为获取后的数据，在父组件需要使用该组件获得的数据使用|

- Methods

|name|说明|
|-|-|
|fetchData|执行获取数据方法|

--------------------------

## ContentListFirst：获取内容列表第一条数据
#### 使用方法：
```html
<!-- 参数通过prop传入，请求结果通过v-slot中的list返回 -->
<content-list-first v-slot="{ data }" content-type-key="key" :keyword-keys="type" ref="content-list">
      <div class="pic">
        <img :src="data.faceUrl" :alt="data.title" />
      </div>
      <div class="text">
        <h3>{{ data.title }}</h3>
        <p>{{ data.abbreviate }}</p>
      </div>
</content-list-first>
```
```js
// 手动调用获取数据方法，一般不需要这样
this.$refs['content-list'].fetchData()
```
#### API
- Props

|name|类型|默认值|必填|说明|
|-|-|-|-|-|
|`contentTypeId`|String|''|N|内容类别编号|
|`contentTypeKey`|String|''|N|内容类别KEY|
|`keywordIds`|String|''|N|关键词：选中的关键词id用英文逗号隔开|
|`keywordKeys`|String|''|N|关键词：选中的关键词key用英文逗号隔开|
|`keywordNames`|String|''|N|选中的关键词名称用英文逗号隔开|
|`keywords`|String|''|N|关键字|
|`showLoading`|Boolean|false|N|请求数据时是否显示loading动画|
- Event

|name|说明|
|-|-|
|ready|组件获取数据后执行，参数为获取后的数据，在父组件需要使用该组件获得的数据使用|

- Methods

|name|说明|
|-|-|
|fetchData|执行获取数据方法|

--------------------------
## ContentDetail：获取内容详情
#### 使用方法：
```html
<!-- 参数通过prop传入，请求结果通过v-slot中的list返回 -->
<content-detail :id="id" v-slot="{content:detail,prev,next}">
  <div class="content-title">{{ detail.title }}</div>
  <div class="content"><div v-html="detail.content"></div></div>
  <div class="neighbor clearfloat">
    <nuxt-link v-if="prev" :to="`/encyclopedias/detail/${prev.id}?type=${type}`" class="item prev">
      <img v-if="prev.faceUrl" :src="prev.faceUrl" />
      <h3>上一篇：{{ prev.title }}</h3>
      <p>{{ prev.abbreviate | intercept(50) }}</p>
    </nuxt-link>
    <nuxt-link v-if="next" :to="`/encyclopedias/detail/${next.id}?type=${type}`" class="item next">
      <img v-if="next.faceUrl" :src="next.faceUrl" />
      <h3>下一篇：{{ next.title }}</h3>
      <p>{{ next.abbreviate | intercept(50) }}</p>
    </nuxt-link>
  </div>
</content-detail>
```
#### API
- Props

|name|类型|默认值|必填|说明|
|-|-|-|-|-|
|`id`|String|''|N|内容id|
|`showLoading`|Boolean|true|N|请求数据时是否显示loading动画|
- Events

|name|说明|
|-|-|
|ready|组件获取数据后执行，参数为获取后的数据，在父组件需要使用该组件获得的数据使用|

- Methods

|name|说明|
|-|-|
|fetchData|执行获取数据方法|

-----------------------------
## KeywordList：获取关键词列表
#### 使用方法：
```html
<!-- 参数通过prop传入，请求结果通过v-slot中的list返回 -->
<keyword-list v-slot="{ list }" :page-size="100" content-type-key="encyclopediaClass">
  <ul class="ul-listg1">
    <li v-for="item in list" :key="item.id">
      <nuxt-link :to="`/encyclopedias/list?type=${item.key}`" class="tit" :class="{ tit1: $route.query.type === item.key }">{{ item.name }}</nuxt-link>
    </li>
  </ul>
</keyword-list>
```
```js
// 手动调用获取数据方法，一般不需要这样
this.$refs['keyword-list'].fetchData()
```
#### API
- Props

|name|类型|默认值|必填|说明|
|-|-|-|-|-|
|`contentTypeId`|String|''|N|内容类别编号|
|`contentTypeKey`|String|''|N|内容类别KEY|
|`keyName`|String|''|N|关键词：选中的关键词key用英文逗号隔开|
|`showLoading`|Boolean|true|N|请求数据时是否显示loading动画|
|`filter`|Function|`(item) => true`|N|数据过滤函数，结果数组中的每一条数据都会流过该函数，返回false会丢弃该条数据|
|`pageSize`|Number|10|N|每页显示数据条数|
|`defaultPage`|Number|1|N|默认显示第几页|
|`pageConfig`|Object|{}|N|分页器配置，具体见[vuejs-paginate](https://github.com/lokyoung/vuejs-paginate#readme)|
- Event

|name|说明|
|-|-|
|changeDage|分页改变时会触发该事件，参数为当前的页数|
|ready|组件获取数据后执行，参数为获取后的数据，在父组件需要使用该组件获得的数据使用|

- Methods

|name|说明|
|-|-|
|fetchData|执行获取数据方法|
