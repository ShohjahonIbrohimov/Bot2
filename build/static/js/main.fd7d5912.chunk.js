(this.webpackJsonpdashboard_cosmetics=this.webpackJsonpdashboard_cosmetics||[]).push([[0],{148:function(e,t,a){e.exports={upload_img:"ImageUpload_upload_img__30a_H",image_upload_wrapper:"ImageUpload_image_upload_wrapper__2in3W",form_wrapper:"ImageUpload_form_wrapper__3g4Ka",form:"ImageUpload_form__2PeAR",upload_btn_wrapper:"ImageUpload_upload_btn_wrapper__GFVHh",image:"ImageUpload_image__3X6v6"}},170:function(e,t,a){e.exports={background:"AuthLayout_background__2Am-M"}},177:function(e){e.exports=JSON.parse('[{"title":"UZ","dataIndex":"lang","key":"uz"},{"title":"RUS","dataIndex":"lang","key":"ru"},{"title":"Actions","dataIndex":"action","key":"action","width":"10%"}]')},178:function(e){e.exports=JSON.parse('[{"title":"UZ","dataIndex":"lang","key":"uz"},{"title":"RUS","dataIndex":"lang","key":"ru"},{"title":"UZ description","dataIndex":"desc","key":"uz","width":"10%"},{"title":"RU description","dataIndex":"desc","key":"ru","width":"10%"},{"title":"Price","dataIndex":"price","key":"price","width":"10%"},{"title":"Actions","dataIndex":"action","key":"action","width":"10%"}]')},179:function(e){e.exports=JSON.parse('[{"name":"uz","placeHolder":"Name in uzbek"},{"name":"ru","placeHolder":"Name in russian"}]')},292:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(24),c=a.n(r),o=a(25),i=a(32),s=a.n(i),l=a(26),u=a(170),d=a.n(u),p=a(29),b=a(98),j=a.n(b),f=a(36),h=a(52),O=a.n(h),m=a(79),y=a(37),g="http://143.244.173.104",x=function(){var e=Object(m.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()({url:"".concat(g,"/api/users/login"),method:"POST",data:t});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=Object(y.b)("auth/login",x),_=a(6),k=function(){var e=Object(f.b)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),s=i[0],l=i[1];return Object(_.jsxs)("div",{className:j.a.card,children:[Object(_.jsx)("header",{className:j.a.header,children:Object(_.jsx)("h1",{children:"Login"})}),Object(_.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(v({name:r,password:s}))},children:[Object(_.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)},className:j.a.input,type:"text",placeholder:"Name"}),Object(_.jsx)("input",{value:s,onChange:function(e){return l(e.target.value)},className:j.a.input,type:"text",placeholder:"Password"}),Object(_.jsx)("button",{type:"submit",className:j.a.submit_btn,children:"Kirish"})]})]})},w=function(){var e=Object(f.c)((function(e){return e.authReducer.authenticated}));return Object(_.jsxs)("div",{className:d.a.background,children:[e&&Object(_.jsx)(l.a,{to:"/dashboard"}),Object(_.jsx)(k,{})]})},S=function(){return Object(_.jsx)(w,{})},C=a(297),I=a(82),A=a(305),U=a(306),R=a(307),D=a(99),N=a.n(D),P=a(302),z=a(75),H=a(60),E=Object(y.c)({name:"auth",initialState:{user:null,token:null,authenticated:!1},reducers:{logout:function(e){e.user=null,e.token=null,e.authenticated=!1}},extraReducers:Object(H.a)({},v.fulfilled.toString(),(function(e,t){var a=t.payload.data;e.authenticated=!0,e.user=a.user,e.token=a.token}))}),L=E.actions.logout,F=E.reducer,T=C.a.Content,W=(C.a.Footer,C.a.Sider),B=[{title:"Bosh sahifa",icon:Object(_.jsx)(A.a,{}),link:"/dashboard"},{title:"Orders",icon:Object(_.jsx)(A.a,{}),link:"/dashboard/orders"}],J=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(f.b)();return Object(_.jsxs)(C.a,{className:N.a.layout,children:[Object(_.jsxs)(W,{theme:"dark",collapsible:!0,collapsed:a,onCollapse:function(e){r(e)},children:[Object(_.jsxs)("div",{className:N.a.side_header,children:[Object(_.jsx)(P.a,{className:N.a.avatar,size:"medium",icon:Object(_.jsx)(U.a,{})}),!a&&Object(_.jsx)("h4",{className:N.a.username,children:"John Doe"})]}),Object(_.jsxs)(I.a,{theme:"dark",defaultSelectedKeys:["0"],mode:"inline",children:[B.map((function(e,t){return Object(_.jsx)(I.a.Item,{icon:e.icon,children:Object(_.jsx)(z.b,{to:e.link,children:e.title})},t)})),Object(_.jsx)(I.a.Item,{onClick:function(){return c(L())},icon:Object(_.jsx)(R.a,{}),children:"Chiqish"},"logout")]})]}),Object(_.jsx)(C.a,{className:"site-layout",children:Object(_.jsx)(T,{className:N.a.content,children:Object(_.jsx)(l.d,{children:Ce.map((function(e){return Object(_.jsx)(l.b,Object(o.a)({},e))}))})})})]})},K=function(){return Object(_.jsx)(J,{})},q=a(298),V=a(300),Z=a(303),G=a(41),M=a(172),Y=a.n(M),X=a(136),$=q.a.Column,Q=function(e){var t=e.data,a=e.columns,r=e.searchInput,c=(e.footer,e.handleDeleteCategory),i=e.setvisible,s=e.setdefaults,l=e.handleSubCategory,u=(e.subCategory,e.table,e.type),d=Object(n.useState)(""),b=Object(p.a)(d,2),j=b[0],f=b[1],h=Object(n.useState)(""),O=Object(p.a)(h,2),m=O[0],y=O[1],g={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},x=function(e,t,a){t(),f(e[0]),y(a)},v=function(e){e(),f("")};return Object(_.jsx)(q.a,{rowSelection:Object(o.a)({type:"checkbox"},g),bordered:!0,size:"small",dataSource:t,children:a.map((function(e){return console.log(e.key,e.dataIndex,e),"lang"===e.dataIndex?Object(_.jsx)($,{title:e.title,dataIndex:e.dataIndex,render:function(t,a){return Object(_.jsx)("span",{children:null===a||void 0===a?void 0:a.title[e.key]})}},e.key):"desc"===e.dataIndex?Object(_.jsx)($,{title:e.title,dataIndex:e.dataIndex,render:function(t,a){return Object(_.jsx)("span",{children:null===a||void 0===a?void 0:a.desc[e.key]})}},e.key):"action"===e.dataIndex?Object(_.jsx)($,{width:"25%",title:e.title,dataIndex:e.dataIndex,render:function(e,t,a){return Object(_.jsxs)(Z.b,{children:["exactSubcategory"!==u&&Object(_.jsx)(G.a,{onClick:function(){return function(e){i(!0),s(e)}({data:t,index:a})},children:"Update"}),"category"===u&&Object(_.jsx)(G.a,{onClick:function(){return l(t)},children:"Sub category"}),"exactSubcategory"!==u&&Object(_.jsx)(G.a,{danger:!0,onClick:function(){return c(t._id)},children:"Delete"})]})}},e.key):Object(_.jsx)($,Object(o.a)({title:e.title,dataIndex:e.dataIndex},(t=e.dataIndex,{filterDropdown:function(e){var a=e.setSelectedKeys,n=e.selectedKeys,c=e.confirm,o=e.clearFilters;return Object(_.jsxs)("div",{style:{padding:8},children:[Object(_.jsx)(V.a,{ref:function(e){r=e},placeholder:"Search ".concat(t),value:n[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return x(n,c,t)},style:{width:188,marginBottom:8,display:"block"}}),Object(_.jsxs)(Z.b,{children:[Object(_.jsx)(G.a,{type:"primary",onClick:function(){return x(n,c,t)},icon:Object(_.jsx)(X.a,{}),size:"small",style:{width:90},children:"Search"}),Object(_.jsx)(G.a,{onClick:function(){return v(o)},size:"small",style:{width:90},children:"Reset"}),Object(_.jsx)(G.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),f(n[0]),y(t)},children:"Filter"})]})]})},filterIcon:function(e){return Object(_.jsx)(X.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,a){return a[t]?a[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return r.select()}),100)},render:function(e){return m===t?Object(_.jsx)(Y.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[j],autoEscape:!0,textToHighlight:e?e.toString():""}):e}})),e.key);var t}))})},ee=a(301),te=function(e){var t=e.children,a=e.visible,n=e.setvisible;return Object(_.jsx)(ee.a,{title:"Basic Modal",visible:a,onOk:function(){n(!1)},onCancel:function(){n(!1)},footer:null,children:t})},ae=a(105),ne=a(299),re=a(148),ce=a.n(re),oe=function(e){var t=e.imageUrl,a=e.setimageUrl,n=e.type,r=e.videoUrl,c=e.setvideoUrl;return Object(_.jsxs)("div",{className:ce.a.upload_img,children:["image"===n&&Object(_.jsx)("span",{children:t}),"video"===n&&Object(_.jsx)("span",{children:r}),Object(_.jsxs)("label",{className:ce.a.upload_btn_wrapper,children:["image"===n?"Rasm":"Video"," yuklash",Object(_.jsx)("input",{type:"file",name:"file",id:"file",class:"inputfile",onChange:function(e){var t=new FormData;t.append("image"===n?"image":"file",e.target.files[0]),s()({url:"".concat(g,"/api/users/").concat("image"===n?"uploadImage":"uploadFile"),method:"POST",data:t}).then((function(e){return"image"===n?a(e.data.path):c(e.data.path)}))}})]})]})},ie=ae.a.Option,se=V.a.TextArea,le=function(e){var t=e.fields,a=e.handleAddCategory,r=e.handleUpdateCategory,c=e.defaults,i=ne.a.useForm(),s=Object(p.a)(i,1)[0],l=Object(n.useState)(""),u=Object(p.a)(l,2),d=u[0],b=u[1],j=Object(n.useState)(""),f=Object(p.a)(j,2),h=f[0],O=f[1];return Object(n.useEffect)((function(){if(c){var e,t,a,n,r=c.data;s.setFieldsValue(Object(o.a)(Object(o.a)(Object(o.a)({},r),r.title),{},{descUz:null===r||void 0===r||null===(e=r.desc)||void 0===e?void 0:e.uz,descRu:null===r||void 0===r||null===(t=r.desc)||void 0===t?void 0:t.ru})),b(null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.img),O(null===c||void 0===c||null===(n=c.data)||void 0===n?void 0:n.video)}else s.resetFields(),b(""),O("")}),[c]),Object(_.jsxs)(ne.a,{form:s,onFinish:function(e){c?r(Object(o.a)(Object(o.a)({},e),{},{img:d,video:h})):a(Object(o.a)(Object(o.a)({},e),{},{img:d,video:h})),s.resetFields(),b("")},size:"large",children:[t.map((function(e){return"select"===e.type?Object(_.jsx)(ne.a.Item,{name:e.name,rules:[{required:!0}],children:Object(_.jsx)(ae.a,{placeholder:e.placeHolder,allowClear:!0,children:e.options.map((function(e){return Object(_.jsx)(ie,{value:e.value,children:e.label})}))})}):"image"===e.type||"video"===e.type?Object(_.jsx)(oe,{type:e.type,imageUrl:d,setimageUrl:b,videoUrl:h,setvideoUrl:O}):"textarea"===e.type?Object(_.jsx)(ne.a.Item,{name:e.name,rules:[{required:!0}],children:Object(_.jsx)(se,{placeholder:e.placeHolder,rows:10})}):Object(_.jsx)(ne.a.Item,{name:e.name,rules:[{required:!0}],children:Object(_.jsx)(V.a,{placeholder:e.placeHolder})})})),Object(_.jsx)(ne.a.Item,{children:Object(_.jsx)(G.a,{block:!0,type:"primary",htmlType:"submit",className:"login-form-button",children:c?"UPDATE":"ADD"})})]})},ue=a(177),de=a(178),pe=a(179),be=a(304),je=function(e){var t,a=e.type,n=e.vals;switch(a){case"category":t={title:n};break;case"subcategory":t={title:{uz:n.uz,ru:n.ru},cat_id:n.cat_id};break;default:t={title:{uz:n.uz,ru:n.ru},sub_cat_id:n.sub_cat_id,price:parseInt(n.price),desc:{uz:n.descUz,ru:n.descRu},img:n.img,video:n.video}}return t},fe=function(){var e=Object(m.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.vals,e.prev=1,e.next=4,s()({url:"".concat(g,"/api/").concat(t.type),method:"POST",data:je({type:t.type,vals:a})});case 4:return n=e.sent,e.abrupt("return",{res:n,type:t.type});case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),he=Object(y.b)("category/create",fe),Oe=function(){var e=Object(m.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()({url:"".concat(g,"/api/").concat(t,"/getAll"),method:"GET"});case 3:return a=e.sent,e.abrupt("return",{res:a,type:t});case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),me=Object(y.b)("category/get",Oe),ye=function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()({url:"".concat(g,"/api/").concat(t.type,"/").concat(t.id),method:"DELETE"});case 3:return e.sent,e.abrupt("return",{data:t,type:t.type});case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ge=Object(y.b)("category/delete",ye),xe=function(){var e=Object(m.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.vals,console.log(je({type:t.type,vals:a})),e.prev=2,e.next=5,s()({url:"".concat(g,"/api/").concat(t.type,"/").concat(t.id),method:"PATCH",data:je({type:t.type,vals:a})});case 5:return n=e.sent,e.abrupt("return",{res:n,index:t.index,type:t.type});case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),ve=Object(y.b)("category/update",xe),_e=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(p.a)(c,2),i=o[0],s=o[1],l=Object(n.useState)(!0),u=Object(p.a)(l,2),d=u[0],b=(u[1],Object(n.useState)("product")),j=Object(p.a)(b,2),h=j[0],O=j[1],m=Object(n.useState)(null),y=Object(p.a)(m,2),g=y[0],x=y[1],v=Object(f.b)(),k=Object(f.c)((function(e){return e.categoryReducer.category})),w=Object(f.c)((function(e){return e.categoryReducer.product})),S=Object(f.c)((function(e){return e.categoryReducer.subcategory})),C=[{name:"cat_id",placeHolder:"Select category",type:"select",options:k.map((function(e){var t;return{value:null===e||void 0===e?void 0:e._id,label:null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.uz}}))},{name:"uz",placeHolder:"Name in uzbek"},{name:"ru",placeHolder:"Name in russian"}],I=function(e){console.log(h),v(he({vals:e,type:h}))},A=function(e){v(ve({vals:e,id:i.data._id,index:i.index,type:h}))};return Object(n.useEffect)((function(){v(me("product"))}),[]),Object(_.jsxs)("div",{children:[Object(_.jsxs)(te,{visible:a,setvisible:r,children:[d&&"product"!==h&&Object(_.jsx)(le,{defaults:i,handleAddCategory:I,handleUpdateCategory:A,fields:pe}),!d&&"product"!==h&&Object(_.jsx)(le,{defaults:i,handleAddCategory:I,handleUpdateCategory:A,fields:C}),"product"===h&&Object(_.jsx)(le,{defaults:i,handleAddCategory:I,handleUpdateCategory:A,fields:[{name:"uz",placeHolder:"Name in uzbek"},{name:"ru",placeHolder:"Name in russian"},{name:"price",placeHolder:"Price"},{name:"descUz",placeHolder:"Description in Uzbek",type:"textarea"},{name:"descRu",placeHolder:"Description in Russian",type:"textarea"},{name:"img",placeHolder:"Product Image",type:"image"},{name:"video",placeHolder:"Product Video",type:"video"}]})]}),Object(_.jsx)(Z.b,{style:{marginBottom:"1rem"},children:Object(_.jsx)(G.a,{type:"primary",icon:Object(_.jsx)(be.a,{}),onClick:function(e){r(!0),O("product"),s(null)},children:"Add Product"})}),Object(_.jsx)(Q,{setdefaults:s,setvisible:r,handleDeleteCategory:function(e){v(ge({id:e,type:h}))},handleSubCategory:function(e){x(e),O("exactSubcategory")},columns:"product"===h?de:ue,subCategory:g,data:"exactSubcategory"===h?S.filter((function(e){return e.cat_id===g._id})):"subcategory"===h?S:"product"===h?w:k,type:h})]})},ke=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(_e,{})})},we=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=[{title:"chat_id",dataIndex:"chat_id",key:"chat_id"},{title:"isFinish",dataIndex:"isFinish",key:"isFinish",render:function(e,t){return Object(_.jsx)("span",{children:"".concat(t.isFinish)})}},{title:"Actions",dataIndex:"action",key:"action",width:"10%",render:function(e,t){return Object(_.jsx)(G.a,{onClick:function(){return function(e){s()({url:"/api/orders/".concat(e._id),method:"PATCH",data:{isFinish:"true"}}).then((function(e){return console.log("")})),console.log(e)}(t)},children:"Finish"})}}];return Object(n.useEffect)((function(){r((s()({url:"/api/orders/getAll",method:"GET"}).then((function(e){return r(e.data.data)})),[]))}),[]),Object(_.jsxs)("div",{children:[console.log(a),Object(_.jsx)(q.a,{columns:c,dataSource:a})]})},Se=[{path:"/",key:"APP_LOGIN",exact:!0,component:function(){return Object(_.jsx)(S,{})}},{path:"/dashboard",key:"APP_DASHBOARD",exact:!1,component:function(){return Object(_.jsx)(K,{})}}],Ce=[{path:"/dashboard",key:"APP_DASHBOARD",exact:!0,component:function(){return Object(_.jsx)(ke,{})}},{path:"/dashboard/orders",key:"APP_ORDERS",exact:!0,component:function(){return Object(_.jsx)(we,{})}}],Ie=a(190),Ae=function(e){var t=e.component,a=Object(Ie.a)(e,["component"]),n=Object(f.c)((function(e){return e.authReducer.authenticated}));return Object(_.jsx)(l.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return n?Object(_.jsx)(t,Object(o.a)({},e)):Object(_.jsx)(l.a,{to:"/"})}}))},Ue=a(185),Re=function(){Ue.b.success("SUCCESS")},De=function(){Ue.b.error("ERROR")},Ne=function(){return Object(n.useEffect)((function(){!function(e){var t=e.success,a=e.error;s.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.a.interceptors.response.use((function(e){switch(e.status){case 200:case 204:case 201:console.log("SUCCESS"),t()}return e}),(function(e){var t;return a(),(null===e||void 0===e?void 0:e.response)&&(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)?Promise.reject(e.response.data):Promise.reject(null===e||void 0===e?void 0:e.message)}))}({success:Re,error:De})}),[s.a]),s.a.defaults.baseURL=g,Object(_.jsx)(l.d,{children:Se.map((function(e){return"APP_DASHBOARD"===e.key?Object(_.jsx)(Ae,Object(o.a)(Object(o.a)({},e),{},{component:e.component})):Object(n.createElement)(l.b,Object(o.a)(Object(o.a)({},e),{},{key:e.key}))}))})},Pe=(a(291),a(292),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ze(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var He,Ee,Le=a(44),Fe=a(138),Te=Object(y.c)({name:"category",initialState:{category:[],subcategory:[],product:[]},extraReducers:(He={},Object(H.a)(He,me.fulfilled.toString(),(function(e,t){e[t.payload.type]=t.payload.res.data.data})),Object(H.a)(He,he.fulfilled.toString(),(function(e,t){e[t.payload.type]=[].concat(Object(Fe.a)(e[t.payload.type]),[t.payload.res.data.data])})),Object(H.a)(He,ge.fulfilled.toString(),(function(e,t){e[t.payload.type]=Object(Fe.a)(e[t.payload.type].filter((function(e){return e._id!==t.payload.data.id})))})),Object(H.a)(He,ve.fulfilled.toString(),(function(e,t){if("subcategory"===t.payload.type){var a=t.payload.res.data.data;e.subcategory=[a].concat(Object(Fe.a)(e.subcategory.filter((function(e){return e._id!==a._id}))))}else{var n=t.payload.res.data.data;console.log("Fired",t.payload),e[t.payload.type][t.payload.index]=n}})),He)}).reducer,We=Object(Le.b)({authReducer:F,categoryReducer:Te}),Be=a(65),Je=a(180),Ke={key:"root",storage:a.n(Je).a},qe=Object(Be.g)(Ke,We),Ve=Object(y.a)({reducer:qe,middleware:Object(y.d)({serializableCheck:{ignoredActions:[Be.a,Be.f,Be.b,Be.c,Be.d,Be.e]}})}),Ze=Object(Be.h)(Ve),Ge=a(181),Me=[{fruit:"Apple"},{fruit:"Banana"},{fruit:"Apple"},{fruit:"Apelsin"},{fruit:"Apelsin"},{fruit:"Apelsin"},{fruit:"Apelsin"}].map((function(e){return e.fruit})),Ye={},Xe=0;console.log(function(e){for(var t=0,a=e.length;t<a;t++){var n=e[t];void 0===Ye[n]?Ye[n]=1:Ye[n]=Ye[n]+1,Ye[n]>Xe&&(Xe=Ye[n],Ee=e[t])}return Ee}(Me)),c.a.render(Object(_.jsx)(z.a,{children:Object(_.jsx)(f.a,{store:Ve,children:Object(_.jsx)(Ge.a,{loading:null,persistor:Ze,children:Object(_.jsx)(Ne,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ze(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ze(t,e)}))}}()},98:function(e,t,a){e.exports={card:"Loginform_card__3IJ9o",header:"Loginform_header__4D4Zx",logo:"Loginform_logo__3rc2Z",input:"Loginform_input__1yVMg",submit_btn:"Loginform_submit_btn__1dGeE"}},99:function(e,t,a){e.exports={layout:"DashboardLayout_layout__kZO41",header:"DashboardLayout_header__Y8uMt",content:"DashboardLayout_content__1NYbq",footer:"DashboardLayout_footer__3N1l7",side_header:"DashboardLayout_side_header__3NlAK",username:"DashboardLayout_username__2E_Wh",range_picker:"DashboardLayout_range_picker__3PhkJ"}}},[[295,1,2]]]);
//# sourceMappingURL=main.fd7d5912.chunk.js.map