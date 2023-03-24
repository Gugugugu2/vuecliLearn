#笔记
## 脚手架文件结构
    切换到你要创建的项目目录，然后使用命令创建项目
        vue create xxxx
    启动项目
        npm run serve

    node_modules
    public
        favicon.ico:页签图标
        index.html:主页面
    src
        assets:存放静态资源
            logo.png
        component:存放组件
            HelloWorld.vue
        App.vue:汇总所有组件
        main.js:入口文件
    .gitignore:git版本关注忽略的配置
    babel.config.js:babel的配置文件
    package.json:应用包配置文件
    package-lock.json:包版本控制文件

## 关于不同版本的Vue
    vue.js与vue.runtime.xxx.js的区别
        1、vue.js是完整版的Vue,包含：核心功能+模板解析器
        2、vue.runtime.xxx.js是运行版的Vue,只包含：核心功能，没有模板解析器。
    因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容

## vue.config.js配置文件
    使用vue inspect > output.js 可以查看到Vue脚手架的默认配置。
    使用vue.config.js可以对脚手架进行个性化定制：详情见：https://cli.vuejs.org/zh

# ref属性
    1、被用来给元素或子组件注册引用信息（id的替代者）
    2、应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
    3、使用方式
        打标识：<h1 ref='xxx'></h1>或者<School ref='xxx'></School>
        获取：this.$ref.xxx

# 配置项props
    功能：让组件接收外部传过来的数据
    1、传递数据
        <Demo name='xxx'/>
    2、接收数据
        第一种方式（只接收）
        props:['name']

        第二种方式（限制类型）
        props:{
            name:String
        }

        第三种方式（限制类型，限制必要性，指定默认值）
        props:{
            name:{
                type:String,
                required:true,
                default:99,
            }
        }

        备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，如业务逻辑确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据
## minxin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合：例如
            {
                data(){...}
                methods:{...}
                ...
            }
        第二部使用混入，例如
            1、全局混入：Vue.mixin(xxx)
            2、局部混入：mixins:['xxx']
## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install=function(Vue,options){
            1、添加全局过滤器
            Vue.filter(....)
            2、添加全局指令
            Vue.directive(...)
            3、配置全局混入
            Vue.mixin(...)
            4、添加实例方法
            Vue.prototype.$myMethod=function(){...}
    使用插件
        Vue.app()
        }
# scoped样式
    作用：让样式在局部生效，防止冲突
    写法:<style scoped>
## 总结TodoList案例
    1、组件化编码流程
        （1）拆分静态组件：组件要按照功能点拆分，命名不要和html元素冲突
        （2）实现动态组件：考虑好数据的存放位置，数据是一个组件再用，还是一些组件再用
            1、一个组件在用：放在组件自身即可
            2、一些组件再用：放在他们共同的父组件上
        （3）实现交互：从绑定事件开始
    2、props适用于
        （1）父组件===>子组件 通信
        （2）子组件===>父组件 通信（要求父先给子一个函数）
    3、使用v-model时要切记：v- model绑定的值不能是props传过来的值，因为props是不可以被修改的
    4、props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做
## WebStorage
    1、存储内容大小一般支持5MB作用（不同浏览器可能还不一样）
    2、浏览器通过window.sessionStorage和window.localStorage属性来实现本地存储机制
    3、相关API
        1、...Storage.setItem('key','value')
            接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
        2、...Storage.getItem('person')
            该方法接受一个键名作为参数，返回键名对应的值
        3、...Storage.removeItem('key')
            该方法接受一个键名作为参数，并把该键名从存储中删除
        4、...Storage.clear()
            该方法会清空存储中所有的数据
    4、备注
        1、SessionStorage存储的内容会随着浏览器窗口的关闭而消失
        2、LocalStorage存储的内容，需要手动清楚才会消失
        3、.getItem()如果对应的value获取不到，那么getItem的返回值就是null
        4、JSON.parse(null)的结果依然是null
## 组件的自定义事件
    1、一种组件间通信的方式，适用于：子组件===>父组件
    2、使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
    3、绑定自定义事件
        1、第一种方式，在父组件中：<Demo @atguigu="test"/>或者<Demo v-on:atguigu="test"/>
        2、第二种方式，在父组件中：
            <Demo ref='Demo'>
            ......
            mounted(){
                this.$refs.xxx.$on('atguigu',this.test)
            }
        3、若想让自定义事件只能触发一次，可以使用once修饰符，或者$once方法
        4、触发自定义事件：this.$emit('atguigu',数据)
        5、解绑自定义事件：this.$off('atguigu')
        6、组件上也可以绑定原生的DOM事件，需要使用native修饰符@click.native
        7、注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题!

## 全局事件总线（GlobalEventBus）
    1、一种组件间通信的方式，适用于任意组件间通信
    2、安装全局事件总线
        new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus=this  //安装全局事件总线，$bus就是当前应用的vm
            },
            ......
        })
    3、使用事件总线
        1、接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调函数在A组件自身
            methods(){
                demo(data){...}
            }
            ......
            mounted(){
                this.$bus.$on('xxx',this.demo)
            }
        2、提供数据：this.$bus.$emit('xxxx',数据)
    4、最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件
## 消息订阅与发布(pubsub)
    1、一种组件间通信的方式，适用于任意组件间通信
    2、使用步骤
        1、安装pubsub npm i pubsub-js
        2、引入：import pubsub from 'pubsub-js'
    3、接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
        methods(){
            demo(data){...}
        }
        ...
        mounted(){
            this.pid=pubsub.subscribe('xxx',this.demo)//订阅消息
        }
    4、提供数据：pubsub.publish('xxx',数据)
    5、最好在beforeDestroy钩子中，用Pubsub.unsubscribe(pid)去<span style="color:red">取消订阅</span>
## nextTick
    1、语法：this.$nextTick(回调函数)
    2、作用：在下一次DOM更新结束后执行其指定的回调
    3、什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行
## Vue封装的过渡与动画
    1、作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加类名
    2、写法
        1、准备好样式
            1、元素进入的样式
                1、v-enter:进入的起点
                2、v-enter-active：进入过程中
                3、v-enter-to:进入的终点
            2、元素离开的样式
                1、v-leave:离开的起点
                2、v-eave-active:离开过程中
                3、v-leave-to:离开的终点
        2、使用<transition>包裹要过渡的元素，并配置name属性：
        <transition name="hello">
            <h1 v-show='isShow'>你好呀</h1>
        </transition>
    3、备注：若有多个元素需要过度，则需要使用：<transition-group>，且每个元素都要指定key值
## 脚手架配置代理
    方法一
        在Vue.config.js中添加如下配置
        devServer:{
            proxy:'http://localhost:5000'
        }
        说明：
            1、优点：配置简单，请求资源时直接发给前端(8080)即可。
            2、缺点：不能配置多个代理，不能灵活的控制请求是否走代理
            3、工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）
    方法二
        编写vue.config.js配置具体代理规则:
        module.exports={
            devServer:{
                proxy:{
                    '/api1':{//匹配所有以'/api'开头的请求路径
                    target:'http://loaclhost:5000',//代理目标的基础路径
                    changeOrigin:true,
                    pathRewrite:{'^/api1':''}
                    },
                    '/api2':{//匹配所有以'/api'开头的请求路径
                    target:'http://loaclhost:5000',//代理目标的基础路径
                    changeOrigin:true,
                    pathRewrite:{'^/api1':''}
                    },
                }
            }
        }
        changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
        changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
        changeOrigin默认值为true
## Vuex基本使用
    1、初始化数据、配置actions、配置mutations，操作文件store.js

        //引入Vue核心库
        import Vue from 'Vue'
        //引入Vuex
        import Vuex from 'vuex'
        //引用Vuex
        Vue.use(Vuex)
        const actions={
            //响应组件中加的动作
            jia(context,value){
                context.commit('JIA',value)
            },
        }
        const mutations={
            JIA(state,value){
                state.sum==value;
            }
        }
        const state={
            sum:0,
        }

        //创建并暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state,
        })
    2、组件中读取vuex中的数据：$store.state.sum
    3、组件中修改vuex中的数据：$store.dispatch('action中的方法名',数据)或者$store.commit('mutations中的方法名',数据)
## 四个map方法的使用
    1、mapState方法：用于帮助我们映射state中的数据为计算属性
        computed:{
            //借助mapState生成计算属性：sum,school,subject(对象写法)
            ...mapState({sum:"sum",school:"school",subject:"subject"}),

            //借助mapState生成计算属性：sum,school,subject(数组写法)
            ...mapState({"sum","school","subject"})
        }
    2、mapGetters方法：用于帮助我们映射getters中的数据为计算属性
    3、mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
        methods:{
            //靠mapActions生成，incrementOdd,incrementWait(对象形式)
            ...mapActions({incrementOdd:'jianOdd',incrementWait:"jiaWait"})
            //靠mapActions生成，incrementOdd,incrementWait(数组形式)
            ...mapActions(["jiaOdd","jiaWait"])
        }
    4、mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数
    备注：mapActions与mapMutations使用时，如需要传递参数需要，在模板中绑定事件时要传递好参数，否则参数就是事件对象
## vuex模块化
    开启命名空间后，组件中读取state数据
    方式一：自己直接读取
    this.$store.state.personAbout.list
    方式二：借助mapState读取
    ...mapState('countAbout',['sum','school','subject']);

    开启命名空间后，组件中读取getters数据
    方式一：自己直接读取
    this.$store.getters['personAbout/firstPersonName'];
    方式二：借助mapGetters读取
    ...mapGetters('countAbout',['bigSum']);

    开启命名空间后，组件中读取dispatch数据
    方式一，自己直接dispatch
    this.$store.dispatch('personAbout/addPersonWang',person);
    方式二：借助mapActions
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    开启命名空间后，组件中调用commit
    方式一，自己直接commit
    this.$store.commit('personAbout/ADD_PERSON',person);
    方式二：借助mapMutations
    ...mapMutations('countAbout',{increment:"JIA",decrement:"JIAN"});
## vue-router
    理解：
        vue的一个插件库，专门用来实现SPA（单页面驱动）应用
    对SPA应用的理解
        1、单页Web应用
        2、整个应用只有一个完整的页面
        3、点击页面中的导航链接不会刷新页面，只会做页面的局部刷新
        4、数据需要通过ajax请求获取
    路由的理解
        1、什么是路由
            1、一个路由就是一组映射关系（key-value）
            2、key为路径，value可能是function或component
        2、路由分类
            1、后端路由
                1、理解：value是function，用于处理客户端提交的请求
                2、工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
            2、前端路由：
                1、理解：value是component，用于展示页面内容
                2、工作过程：当浏览器的路径改变时，对应的组件就会显示
## 几个注意点
    1、路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
    2、通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载
    3、每个组件都有自己的$route属性，里面存储着自己的路由信息
    4、整个应用只有一个router，可以通过组件的$router属性获取到
## 多级路由
    1、配置路由规则，使用children配置项；
        routes:[
            {
                path:'/about',
                component:About,
                children:[  //通过children配置子级路由
                    {
                        path:'news', //此处一定不要写：/news
                        component:News
                    },
                    {
                        path:"message",
                        component:Message
                    }
                ]
            }
        ]
    2、跳转(要写完整路径)
    <router-link to="/home/news">News</router-link>
## 路由的query参数
    1、传递参数
        <!-- 跳转并携带query参数，to的字符串写法 -->
        <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>

        <!-- 跳转并携带query参数，to的对象写法 -->
        <router-link>
            :to="{
                path:'/home/message/detail',
                query:{
                    id:666,
                    title:'你好'
                }
            }"
        </router-link>
    2、接收参数
        $route.query.id
        $route.query.title
## 命名路由
    1、作用：可以简化路由的跳转
    2、如何调用
        1、给路由命名：
        {
            path:'/demo',
            component:Demo,
            children:[
                {
                    path:"test",
                    component:Test,
                    children:[
                        {
                            name:"hello"//给路由命名,
                            path:'welcome',
                            component:Hello
                        }
                    ]
                }
            ]
        }
        2、简化跳转
            <!-- 简化前，需要写完整的路径 -->
            <router-link to='/demo/test/welcome'>跳转</router-link>
            <!-- 简化后，直接通过名字跳转 -->
            <router-link :to='{name:'hello'}'>跳转</router-link>

            <!-- 简化写法配合传递参数 -->
            <router-link :to="{
                name:"hello",
                query:{
                    id:666,
                    title:"你好"
                }
            }">跳转</router-link>
## 路由的params参数
    1、配置路由，声明接收params参数
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:'news',
                component:News
            },
            {
                component:Message,
                children:[
                    {
                        name:'xiangqing',
                        path:'detail/:id/:title',//使用占位符声明接收params参数
                        component:Detail
                    }
                ]
            }
        ]
    }
    2、传递参数
    <!-- 跳转并携带params参数，to的字符串写法 -->
    <router-link :to="`/home/message/detail/666/你好`">跳转</router-link>
    <!-- 跳转并携带params参数，to的对象写法 -->
    <router-link :to="{
        name:"xiangqing",
        params:{
            id:666,
            title:"你好"
        }
    }">跳转</router-link>
    特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置
    3、接收参数
    $route.params.id
## 路由的props配置
    作用：让路由组件更方便的收到参数
    {
        name:"xiangqing",
        path:'detail/:id',
        component:Detail,

        <!-- 第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件 -->
        props:{a:900}

        <!-- 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件 -->
        props:true,

        <!-- 第三种写法：props值为函数，该函数返回对象中每一组key-value都会通过props传给Detail组件 -->
        props(route){
            return {
                id:route.query.id,
                title:route.query.title
            }
        }
    }
## <router-link>的replace属性
    1、作用：控制路由跳转时操作浏览器历史记录的模式
    2、浏览器的历史记录有两种写入方式，分别为push和replace，push是追加历史记录，replace是替换当前记录，路由跳转时候默认为push
    3、如何开启replace模式：<router-link replace></router-link>
## 编程式路由导航
    1、作用：不借助<router-link>实现路由跳转，让路由跳转更加灵活
    2、具体编码：
        //$router的两个API
        this.$router.push({
            name:'xiangqing',
            params:[
                id:xxx,
                title:xxx
            ]
        })

        this.$router.replace({
            name:'xxx',
            params:{
                id:xxx,
                title:xxx
            }
        })
## 缓存路由组件
    1、作用：让不展示的路由组件保持挂载，不被销毁
    2、具体编码：
        <keep-alive include="News">
        <router-view></router-view>
        </keep-alive>
## 路由守卫
    1、作用：对路由进行权限控制
    2、分类：全局守卫、独享守卫、组件内守卫
    3、全局守卫：
        //全局前置守卫，初始化时进行，每次路由切换前执行
        router.beforeEach((to,from,next)=>{
            if(to.meta.isAuth){//判断当前路由是否需要进行权限控制
                if(localStorage.getItem('school')==='atguigu'){//权限控制的具体规则
                next();//执行
                }else{
                    alert('暂无权限查看')
                }
            }else{
                next()//放行
            }
        })
    
    //全局后置守卫，初始化时执行，每次路由切换后执行
    router.afterEach((to,from)=>{
        if(to.meta.title){
            document.title=to.meta.title//修改网页的title
        }else{
            document.title='vue_test'
        }
    })
## 独享守卫
    beforeEnter(to,from,next){
        if(to.meta.isAuto){//判断当前路由是否需要进行权限控制
        if(localStorge.getItem('school')==='atguigu'){
            next();
        }else{
            alert('暂无权限查看')
        }
        }else{
            next()
        }
    }
## 组件内守卫：
    //进入守卫：通过路由规则，进入该组件时被调用
    beforeRouterEnter(to,from,next){},
    <!-- 离开守卫，通过路由规则，离开该组件时被调用 -->
    beforeRouteLeave(to,from,next){}
## 路由器的两种工作模式
    1、对于一个url来说，什么是hash值？---#及其后面的内容就是hash值
    2、hash值不会包含在HTTP请求中，即：hash值不会带给服务器
    3、hash模式：
        1、地址中永远带着#
        2、若以后降低至通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
        3、兼容性较好
    4、history模式：
        1、地址干净，美观
        2、兼容性和hash模式相比略差
        3、应用部署上线时需要后端人员的技术支持，解决刷新也买你服务器端404的问题



    