(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a.p+"static/media/banner-1.be3b55c6.png"},161:function(e,t,a){e.exports=a(368)},368:function(e,t,a){"use strict";a.r(t);a(162),a(164);var n=a(0),i=a.n(n),r=a(112),s=a.n(r),l=a(3),o=a.n(l),c=a(78),p=a(9),u=a(10),d=a(12),h=a(11),m=a(13),b=a(1),f=(a(184),a(150)),v=a.n(f),g=a(151),k=a.n(g),y=a(152),E=a.n(y),O=(a(185),a(53)),j=a(153),w=a.n(j),F=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("span",{style:{padding:"2px 10px",borderRadius:15,backgroundColor:"white",position:"absolute",right:"20%",top:"2%",fontWeight:"bold",fontSize:14}},this.props.rating)}}]),t}(i.a.Component),C={flexShrink:0,width:130,height:"auto",flexDirection:"column",alignItems:"center",fontSize:16,paddingLeft:4},S={width:110,height:150,borderRadius:15},x={width:100,marginTop:0,marginBottom:0,padding:3,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},A=function(e){var t=e.id,a=e.openFilm,n=e.activePreview,r=e.go,s=e.futurePreview;e.setid;return i.a.createElement(b.Panel,{id:t},i.a.createElement(b.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),i.a.createElement(b.Gallery,{slideWidth:"100%",style:{height:150,borderRadius:10,marginLeft:15,marginRight:15,marginTop:15,marginBottom:15},bullets:"dark",autoplay:3e3},i.a.createElement(b.Link,{onClick:r,"data-to":"popular"},i.a.createElement("img",{style:{height:150,width:"100%"},src:w.a}))),i.a.createElement(b.Group,{style:{paddingBottom:8}},i.a.createElement(b.Header,{level:"2",aside:i.a.createElement(b.Link,{"data-to":"active",onClick:r},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435")},"\u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u043a\u0438\u043d\u043e"),i.a.createElement(b.HorizontalScroll,null,i.a.createElement("div",{style:{display:"flex"}},n&&n.map(function(e,t){return i.a.createElement(b.Link,{onClick:a,"data-fid":e.tmdbId,"data-to":"film",key:t,style:Object(O.a)({},C)},i.a.createElement("div",{style:{position:"relative"}},e.tmdbFullData.vote_average&&i.a.createElement(F,{rating:e.tmdbFullData.vote_average}),i.a.createElement("img",{src:e.image,size:64,style:Object(O.a)({},S,{marginBottom:8})})),i.a.createElement("p",{style:x},e.title))})))),i.a.createElement(b.Group,{style:{paddingBottom:8}},i.a.createElement(b.Header,{level:"2",aside:i.a.createElement(b.Link,{"data-to":"future",onClick:r},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435")},"\u0421\u043a\u043e\u0440\u043e \u0432 \u043a\u0438\u043d\u043e"),i.a.createElement(b.HorizontalScroll,null,i.a.createElement("div",{style:{display:"flex"}},s&&s.map(function(e,t){return i.a.createElement(b.Link,{onClick:a,"data-fid":e.tmdbId,"data-to":"film",key:t,style:Object(O.a)({},C)},i.a.createElement("div",{style:{display:"relative"}},i.a.createElement("img",{src:e.image,size:64,style:Object(O.a)({},S,{marginBottom:8})})),i.a.createElement("p",{style:x},e.title))})))))},T=a(31),P=a.n(T),W=a(29),I=a.n(W),B=a(76),D=a.n(B),V=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#656565",textAlign:"center"}},this.props.children)}}]),t}(i.a.Component),K=function(e){function t(e){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"s",value:function(e,t){var a=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:a>1&&a<5?t[1]:1==a?t[0]:t[2]}},{key:"render",value:function(){return i.a.createElement("div",{"data-fid":this.props.datafid,onClick:this.props.onClick,style:{padding:"10px",gridGap:"20px",display:"grid",gridTemplateColumns:"23% 60%"}},i.a.createElement("img",{style:{width:"100%",marginRight:10,verticalAlign:"top",borderRadius:10},src:this.props.image}),i.a.createElement("div",null,i.a.createElement("div",{style:{verticalAlign:"top",fontWeight:"bold",fontSize:16}},this.props.title),this.props.popularCount&&i.a.createElement("div",{style:{fontSize:14,color:"grey"}},this.props.popularCount," ",this.s(this.props.popularCount,["\u0434\u0440\u0443\u0433 \u0445\u043e\u0447\u0435\u0442","\u0434\u0440\u0443\u0433\u0430 \u0445\u043e\u0442\u044f\u0442","\u0434\u0440\u0443\u0437\u0435\u0439 \u0445\u043e\u0442\u044f\u0442"])," \u043f\u043e\u0439\u0442\u0438 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0444\u0438\u043b\u044c\u043c")))}}]),t}(i.a.Component),_=Object(b.platform)(),R=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={error:!1,response:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({tokenWithScope:t.detail.data,error:!1}),o.a.send("VKWebAppCallAPIMethod",{method:"friends.getAppUsers",params:{access_token:t.detail.data.token}}),o.a.send("VKWebAppTapticNotificationOccurred",{type:"success"});break;case"VKWebAppCallAPIMethodResult":if(e.state.loaded)break;var a=t.detail.data.response;fetch("https://cinema.voloshinskii.ru/popular/friends",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({friends:a})}).then(function(e){return e.json()}).then(function(t){return e.setState({response:Object.values(t.result),loaded:!0})});break;default:console.log(t.detail)}}),-1===this.props.token.scope.search("friends")?(this.setState({error:!0}),o.a.send("VKWebAppGetAuthToken",{app_id:6977050,scope:"friends"})):o.a.send("VKWebAppCallAPIMethod",{method:"friends.getAppUsers",params:{v:5.95,access_token:this.props.token.access_token}})}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"share",value:function(){o.a.send("VKWebAppTapticImpactOccurred",{style:"light"}),o.a.send("VKWebAppShare")}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{theme:"white",id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"home"},_===b.IOS?i.a.createElement(P.a,null):i.a.createElement(I.a,null))},"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"),!this.state.error&&!this.state.loaded&&i.a.createElement(b.Spinner,{size:"large",style:{marginTop:30}}),this.state.error&&i.a.createElement(V,null,"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0412\u0430\u0448\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439"),!this.state.error&&this.state.loaded&&0==this.state.response.length&&i.a.createElement(V,null,i.a.createElement("span",null,"\u041d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u0412\u0430\u0448\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439 \u0435\u0449\u0451 \u043d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c. \u041d\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c!"),i.a.createElement(b.Button,{onClick:this.share,size:"xl",style:{width:"90%",margin:"auto"},level:"secondary"},"\u0414\u0430\u0432\u0430\u0439\u0442\u0435!")),!this.state.error&&this.state.loaded&&this.state.response.length>0&&i.a.createElement("div",{style:{paddingTop:"35px"}},this.state.response.map(function(t){return i.a.createElement(K,{"data-fid":t.data.tmdbId,datafid:t.data.tmdbId,onClick:e.props.openFilm,popularCount:t.count,key:t.data._id,title:t.data.title,image:t.data.image})})))}}]),t}(i.a.Component),L=a(4),M=a(154),z=a.n(M),H={image_url:"https://image.tmdb.org/t/p/original",server_url:"https://cinema.voloshinskii.ru"},G=a(113),U=a.n(G),N=a(155),Q=a.n(N),q=(a(186),a(187),a(156)),J=a.n(q),$=function(e){function t(e){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{position:"relative"}},"https://image.tmdb.org/t/p/originalnull"==this.props.back&&i.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/pKDVywMKjM7TeU739z7cR9wu9Sf.jpg",style:{width:"100%",filter:"blur(15px)"}}),i.a.createElement("img",{src:this.props.back,style:{width:"100%",filter:"blur(2.2px)"}}),i.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"98%",backgroundColor:"rgba(0, 0, 0, 0.40)"}},i.a.createElement("img",{src:this.props.front,style:{width:"27%",position:"absolute",bottom:"-5%",left:"8%",borderRadius:10,boxShadow:"0 12px 30px 0 rgba(35,39,42,.4)",zIndex:1e3}}),i.a.createElement("span",{style:{position:"absolute",top:"40%",left:"40%",color:"white",fontWeight:"bold",fontSize:19}},this.props.title)))}}]),t}(i.a.Component),X=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={expanded:!1},a.expand=a.expand.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"expand",value:function(){var e=!this.state.expanded;this.setState({expanded:e}),console.log(this.state.expanded)}},{key:"render",value:function(){return i.a.createElement(D.a,{line:this.state.expanded?9999999999:4,truncateText:this.state.expanded?"":"...",text:this.props.text,textTruncateChild:i.a.createElement("a",{style:{color:"#528bcc"},onClick:this.expand},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435")})}}]),t}(i.a.Component),Y=a(157),Z=a.n(Y),ee=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:{position:"fixed",zIndex:"1999",background:"rgba(0, 0, 0, 0.55)",width:"100%",height:"100%",bottom:0}}),i.a.createElement("div",{style:{position:"fixed",bottom:0,borderRadius:"20px 20px 0 0",background:"white",width:"100%",zIndex:"2000"}},i.a.createElement("div",{style:{display:"relative",textAlign:"center",fontWeight:"bold",margin:"20px 0"}},this.props.title,i.a.createElement(Z.a,{onClick:this.props.onClose,style:{width:"42px",color:"#edeef0",position:"absolute",top:"10px",right:"15px"}}),i.a.createElement("div",{style:{marginTop:"15px",borderBottom:"1px solid #d7d8d9"}})),this.props.children))}}]),t}(i.a.Component),te=a(77),ae=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={text:"",rate:0,anon:!1},a.submit=a.submit.bind(Object(L.a)(Object(L.a)(a))),a.onChange=a.onChange.bind(Object(L.a)(Object(L.a)(a))),a.anonF=a.anonF.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(Object(te.a)({},a,n))}},{key:"anonF",value:function(){var e=!this.state.anon;this.setState({anon:e})}},{key:"submit",value:function(){fetch("https://cinema.voloshinskii.ru/feedback/post",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(O.a)({filmId:this.props.filmid,token:this.props.token},this.state))}),o.a.send("VKWebAppTapticNotificationOccurred",{type:"success"}),this.props.close()}},{key:"render",value:function(){var e=this;return i.a.createElement(b.FormLayout,null,i.a.createElement(b.FormStatus,{title:"\u041c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f"},"\u0412\u0430\u0448 \u043e\u0442\u0437\u044b\u0432 \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438. \u041e\u0431\u044b\u0447\u043d\u043e \u043e\u043d\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0430"),i.a.createElement(b.Textarea,{type:"text",top:"\u041e\u0442\u0437\u044b\u0432",name:"feedback",onChange:this.onChange,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0432\u0441\u0451, \u0447\u0442\u043e \u0434\u0443\u043c\u0430\u0435\u0448\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u0444\u0438\u043b\u044c\u043c\u0435. \u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043f\u0440\u0438\u043b\u0438\u0447\u0438\u044f, \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435"}),i.a.createElement(b.Slider,{min:0,max:10,onChange:function(t){return e.setState({rate:t})},top:"\u0412\u0430\u0448\u0430 \u043e\u0446\u0435\u043d\u043a\u0430: ".concat(["\u0431\u0435\u0437 \u043e\u0446\u0435\u043d\u043a\u0438","\ud83e\udd2c","\ud83e\udd2e","\ud83e\udd22","\ud83d\ude1f","\ud83d\ude15","\ud83d\ude10","\ud83d\ude42","\ud83d\ude03","\ud83d\udc4d","\ud83d\ude0d"][this.state.rate]),step:1}),i.a.createElement(b.Checkbox,{name:"anon",onClick:this.anonF},"\u0410\u043d\u043e\u043d\u0438\u043c\u043d\u043e"),i.a.createElement(b.Button,{size:"xl",onClick:this.submit},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))}}]),t}(i.a.Component),ne=a(158),ie=a(159),re=a.n(ie),se=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).renderPreparedUser=a.renderPreparedUser.bind(Object(L.a)(Object(L.a)(a))),a.renderUser=a.renderUser.bind(Object(L.a)(Object(L.a)(a))),a.state={user:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.user.user||ne.a.send("VKWebAppCallAPIMethod",{method:"users.get",params:{fields:"photo_50",user_ids:this.props.user.vkId,v:"5.95",access_token:this.props.token}}).then(function(t){return e.setState({user:t.data.response[0]})})}},{key:"renderPreparedUser",value:function(e){return i.a.createElement("div",null,i.a.createElement(b.Cell,{description:e[this.props.rate],before:i.a.createElement(b.Avatar,null,i.a.createElement(re.a,null))},this.props.user.user.first_name," ",this.props.user.user.last_name),i.a.createElement("p",{style:{padding:"0 12px"}},this.props.text))}},{key:"renderUser",value:function(e){return i.a.createElement("div",null,i.a.createElement(b.Cell,{description:e[this.props.rate],before:i.a.createElement(b.Avatar,{src:this.state.user.photo_50})},i.a.createElement(b.Link,{style:{color:"black"},href:"https://vk.com/id".concat(this.state.user.id)},this.state.user.first_name," ",this.state.user.last_name)),i.a.createElement("p",{style:{padding:"0 12px"}},this.props.text))}},{key:"render",value:function(){var e=["\u0431\u0435\u0437 \u043e\u0446\u0435\u043d\u043a\u0438","\ud83e\udd2c","\ud83e\udd2e","\ud83e\udd22","\ud83d\ude1f","\ud83d\ude15","\ud83d\ude10","\ud83d\ude42","\ud83d\ude03","\ud83d\udc4d","\ud83d\ude0d"];return i.a.createElement(b.Group,null,i.a.createElement(b.Div,null,this.props.user.user&&this.renderPreparedUser(e),this.state.user&&this.renderUser(e)))}}]),t}(i.a.Component),le=Object(b.platform)(),oe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={qr:!1,feedBack:!1},a.watch=a.watch.bind(Object(L.a)(Object(L.a)(a))),a.QRModal=a.QRModal.bind(Object(L.a)(Object(L.a)(a))),a.feedBackModal=a.feedBackModal.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){o.a.send("VKWebAppSetLocation",{location:"film_".concat(this.props.filmid)})}},{key:"watch",value:function(e,t){o.a.send("VKWebAppTapticNotificationOccurred",{type:"success"}),this.props.currentFilm.going?(this.props.currentFilm.watch--,fetch("https://cinema.voloshinskii.ru/unwatch?token=".concat(e,"&filmId=").concat(t)).then(function(e){return e.json()})):(this.props.currentFilm.watch++,fetch("https://cinema.voloshinskii.ru/watch?token=".concat(e,"&filmId=").concat(t)).then(function(e){return e.json()})),this.props.currentFilm.going=!this.props.currentFilm.going,this.setState({going:this.props.currentFilm.going})}},{key:"share",value:function(e){o.a.send("VKWebAppTapticImpactOccurred",{style:"light"}),o.a.send("VKWebAppShowWallPostBox",{message:"https://vk.com/app6977050#".concat(e)})}},{key:"QRModal",value:function(){var e=!this.state.qr;e?o.a.send("VKWebAppDisableSwipeBack"):o.a.send("VKWebAppEnableSwipeBack"),this.setState({qr:e})}},{key:"feedBackModal",value:function(){var e=!this.state.feedBack;e?o.a.send("VKWebAppDisableSwipeBack"):o.a.send("VKWebAppEnableSwipeBack"),this.setState({feedBack:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"home"},le===b.IOS?i.a.createElement(P.a,null):i.a.createElement(I.a,null))},this.props.currentFilm&&this.props.currentFilm.title),i.a.createElement("div",{style:{background:"white"}},!this.props.currentFilm&&i.a.createElement(b.Spinner,{size:"large",style:{marginTop:30}}),this.props.currentFilm&&i.a.createElement($,{back:H.image_url+this.props.currentFilm.tmdbFullData.backdrop_path,front:this.props.currentFilm.image,title:this.props.currentFilm.title}),i.a.createElement(b.Group,{style:{marginTop:0,overflow:"auto"}},i.a.createElement(b.Div,null,this.props.currentFilm&&this.props.currentFilm.tmdbFullData.vote_average>0&&i.a.createElement(b.InfoRow,{style:{display:"inline-block"},title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},i.a.createElement("span",{style:{color:"#528bcc",fontWeight:"bold",fontSize:20}},this.props.currentFilm.tmdbFullData.vote_average)),this.props.currentFilm&&this.props.currentFilm.tmdbFullData.runtime>0&&i.a.createElement(b.InfoRow,{style:{display:"inline-block",float:"right"},title:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},i.a.createElement("span",{style:{color:"grey",fontWeight:"bold",fontSize:20}},this.props.currentFilm.tmdbFullData.runtime," \u043c\u0438\u043d")))),i.a.createElement(b.Div,null,this.props.currentFilm&&this.props.currentFilm.tmdbFullData.overview&&i.a.createElement(X,{text:this.props.currentFilm.tmdbFullData.overview})),i.a.createElement("div",{style:{width:"95%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between"}},this.props.currentFilm&&!this.props.currentFilm.going&&i.a.createElement(b.Button,{size:"xl",style:{width:"61%",display:"inline-block"},level:"primary",onClick:function(){e.watch(e.props.authToken,e.props.currentFilm._id)}},"\u0418\u0434\u0443 \u043d\u0430 \u0444\u0438\u043b\u044c\u043c"),this.props.currentFilm&&this.props.currentFilm.going&&i.a.createElement(b.Button,{size:"xl",style:{width:"61%",display:"inline-block"},level:"primary",onClick:function(){e.watch(e.props.authToken,e.props.currentFilm._id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"),this.props.currentFilm&&i.a.createElement(b.Button,{size:"xl",onClick:this.QRModal,style:{width:"18%",display:"inline-block"},level:"secondary"},i.a.createElement(Q.a,null)),this.props.currentFilm&&i.a.createElement(b.Button,{size:"xl",onClick:this.feedBackModal,style:{width:"18%",display:"inline-block"},level:"secondary"},i.a.createElement(J.a,null))),i.a.createElement(b.Group,null,i.a.createElement(b.Div,{style:{display:"flex",justifyContent:"space-between",flexDirection:"row"}},this.props.currentFilm&&this.props.currentFilm.watch>0&&i.a.createElement(b.InfoRow,{style:{display:"inline-block",textAlign:"center"},title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u044f\u0442"},i.a.createElement("span",{style:{color:"grey",fontWeight:"bold",fontSize:20}},this.props.currentFilm.watch)),this.props.currentFilm&&this.props.currentFilm.feedbacks&&i.a.createElement(b.InfoRow,{style:{display:"inline-block",textAlign:"center"},title:"\u041e\u0442\u0437\u044b\u0432\u044b"},i.a.createElement("span",{style:{color:"grey",fontWeight:"bold",fontSize:20}},this.props.currentFilm.feedbacks.length)))),this.props.currentFilm&&this.props.currentFilm.video&&i.a.createElement("iframe",{width:"100%",height:"204",style:{margin:"auto"},src:"https://www.youtube.com/embed/".concat(this.props.currentFilm.video),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),i.a.createElement(b.Group,null,i.a.createElement(b.Div,null,this.props.currentFilm&&this.props.currentFilm.tmdbFullData.release_date&&i.a.createElement(b.InfoRow,{title:"\u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430"},new Date(this.props.currentFilm.tmdbFullData.release_date).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"}))),i.a.createElement(b.Div,null,this.props.currentFilm&&this.props.currentFilm.tmdbFullData.budget>0&&i.a.createElement(b.InfoRow,{title:"\u041e\u0431\u0449\u0438\u0439 \u0431\u044e\u0434\u0436\u0435\u0442"},this.props.currentFilm.tmdbFullData.budget.toLocaleString("ru"),"$")),i.a.createElement(b.Div,null,this.props.currentFilm&&this.props.currentFilm.tmdbFullData.revenue>0&&i.a.createElement(b.InfoRow,{title:"\u0421\u0431\u043e\u0440\u044b"},this.props.currentFilm.tmdbFullData.revenue.toLocaleString("ru"),"$"))),this.props.currentFilm&&this.props.currentFilm.playlist&&i.a.createElement(b.Group,{title:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"},i.a.createElement(b.Div,null,i.a.createElement(U.a,null,i.a.createElement(G.Playlist,{ownerId:this.props.currentFilm.playlist.owner,playlistId:this.props.currentFilm.playlist.playlist,hash:"f61be84a9faff53712"})))),this.props.currentFilm&&this.props.currentFilm.feedbacks&&i.a.createElement("div",null,i.a.createElement(b.Group,{style:{marginTop:"40px"}},i.a.createElement(b.Header,{level:"2",indicator:i.a.createElement(b.Counter,null,this.props.currentFilm.feedbacks.length)},"\u041e\u0442\u0437\u044b\u0432\u044b")),this.props.currentFilm.feedbacks.map(function(t){return i.a.createElement(se,Object.assign({token:e.props.authToken,key:t._id},t))})),this.state.qr&&i.a.createElement(ee,{title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0444\u0438\u043b\u044c\u043c\u043e\u043c",onClose:this.QRModal},i.a.createElement(b.Div,null,i.a.createElement(b.InfoRow,null,i.a.createElement("div",{style:{width:"256px",margin:"auto",marginBottom:"10px"},dangerouslySetInnerHTML:{__html:z.a.createQR("https://vk.com/app6977050#".concat(this.props.currentFilm.tmdbId),256,"qr-code-class",!0)}})),i.a.createElement("div",{style:{width:"256px",margin:"auto",textAlign:"center",color:"grey",marginBottom:"20px"}},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0430\u043d\u0438\u0446\u0435\u0439 \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438. \u041f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043d\u0430 QR-\u043a\u043e\u0434 \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),i.a.createElement("div",{style:{width:"90%",margin:"auto",display:"flex",flexDirection:"column"}},i.a.createElement(b.Button,{size:"xl",style:{width:"100%",marginBottom:"10px"},level:"primary",onClick:function(){e.share(e.props.currentFilm.tmdbId)}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),i.a.createElement(b.Button,{size:"xl",style:{width:"100%"},component:"a",href:"https://vk.com/wall-58810575_52712",level:"secondary"},"\u041a\u0430\u043a \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c?")))),this.state.feedBack&&i.a.createElement(ee,{title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u0442\u0437\u044b\u0432",onClose:this.feedBackModal},i.a.createElement(ae,{filmid:this.props.currentFilm._id,close:this.feedBackModal,token:this.props.authToken})))}}]),t}(i.a.Component),ce=Object(b.platform)(),pe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={search:"",futureList:[]},a.onChange=a.onChange.bind(Object(L.a)(Object(L.a)(a))),a.searchRes=a.searchRes.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){this.setState({search:e})}},{key:"searchRes",value:function(){var e=this.state.search.toLowerCase();return this.state.futureList.filter(function(t){return t.title.toLowerCase().indexOf(e)>-1})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://cinema.voloshinskii.ru/future/preview?limit=10000").then(function(e){return e.json()}).then(function(t){return e.setState({futureList:t})})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"home"},ce===b.IOS?i.a.createElement(P.a,null):i.a.createElement(I.a,null))},"\u0421\u043a\u043e\u0440\u043e \u0432 \u043a\u0438\u043d\u043e"),i.a.createElement(b.Search,{value:this.state.search,onChange:this.onChange}),this.state.futureList.length>0&&i.a.createElement(b.List,null,this.searchRes().map(function(t){return i.a.createElement(b.Cell,{"data-fid":t.tmdbId,key:t.tmdbId,onClick:e.props.openFilm},t.title)})))}}]),t}(i.a.Component),ue=Object(b.platform)(),de=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={search:"",activeList:[]},a.onChange=a.onChange.bind(Object(L.a)(Object(L.a)(a))),a.searchRes=a.searchRes.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){this.setState({search:e})}},{key:"searchRes",value:function(){var e=this.state.search.toLowerCase();return this.state.activeList.filter(function(t){return t.title.toLowerCase().indexOf(e)>-1})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://cinema.voloshinskii.ru/active/preview?limit=10000").then(function(e){return e.json()}).then(function(t){return e.setState({activeList:t})})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"home"},ue===b.IOS?i.a.createElement(P.a,null):i.a.createElement(I.a,null))},"\u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u043a\u0438\u043d\u043e"),i.a.createElement(b.Search,{value:this.state.search,onChange:this.onChange}),this.state.activeList.length>0&&i.a.createElement(b.List,null,this.searchRes().map(function(t){return i.a.createElement(b.Cell,{"data-fid":t.tmdbId,key:t.tmdbId,onClick:e.props.openFilm},t.title)})))}}]),t}(i.a.Component),he=(Object(b.platform)(),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={list:[],loaded:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cinema.voloshinskii.ru/user/getwishlist?token=".concat(this.props.token)).then(function(e){return e.json()}).then(function(t){return e.setState({list:t.user&&t.user.films,loaded:!0})})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{theme:"white",id:this.props.id},i.a.createElement(b.PanelHeader,null,"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"),!this.state.loaded&&i.a.createElement(b.Spinner,{size:"large",style:{marginTop:30}}),this.state.loaded&&0==this.state.list.length&&i.a.createElement(V,null,"\u0412 \u0412\u0430\u0448\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u043c\u0430"),this.state.list&&this.state.list.length>0&&i.a.createElement("div",{style:{paddingTop:"35px"}},this.state.list.map(function(t){return i.a.createElement(K,{datafid:t.tmdbId,"data-fid":t.tmdbId,onClick:e.props.openFilm,key:t._id,title:t.title,image:t.image})})))}}]),t}(i.a.Component)),me=Object(b.platform)(),be=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={loaded:!1},a.subscribe=a.subscribe.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.send("VKWebAppCallAPIMethod",{method:"apps.isNotificationsAllowed",params:{v:"5.95",access_token:this.props.token}}),o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppCallAPIMethodResult":console.log(t.detail),e.setState({notifications:t.detail.data.response.is_allowed});break;case"VKWebAppAllowNotificationsResult":t.detail.data.result&&(o.a.send("VKWebAppTapticNotificationOccurred",{type:"success"}),fetch("https://cinema.voloshinskii.ru/user/subscribe?token=".concat(e.props.token)),e.setState({notifications:!0}));break;case"VKWebAppDenyNotificationsResult":fetch("https://cinema.voloshinskii.ru/user/unsubscribe?token=".concat(e.props.token)),e.setState({notifications:!1})}})}},{key:"subscribe",value:function(e){o.a.send("VKWebAppTapticImpactOccurred",{style:"heavy"}),this.state.notifications?(o.a.send("VKWebAppDenyNotifications",{}),o.a.send("VKWebAppTapticNotificationOccurred",{type:"success"})):o.a.send("VKWebAppAllowNotifications",{})}},{key:"render",value:function(){return i.a.createElement(b.Panel,{theme:"white",id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"home"},me===b.IOS?i.a.createElement(P.a,null):i.a.createElement(I.a,null))},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),i.a.createElement(b.Group,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"},i.a.createElement(b.List,null,null!==this.state.notifications&&i.a.createElement(b.Cell,{asideContent:i.a.createElement(b.Switch,{defaultChecked:this.state.notifications,onClick:this.subscribe})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"))))}}]),t}(i.a.Component),fe=a(160),ve=Object(fe.a)(),ge=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).goBack=function(){var e=Object(c.a)(a.state.historyv);e.pop();var t=e[e.length-1];"home"===t&&o.a.send("VKWebAppDisableSwipeBack"),a.setState({historyv:e,activePanel:t})},a.go=function(e){var t=Object(c.a)(a.state.historyv);t.push(e.currentTarget.dataset.to),"home"===a.state.activePanel&&o.a.send("VKWebAppEnableSwipeBack"),a.setState({historyv:t,activePanel:e.currentTarget.dataset.to}),o.a.send("VKWebAppSetLocation",{location:e.currentTarget.dataset.to}),ve.push("/#".concat(e.currentTarget.dataset.to))},a.onStoryChange=function(e){a.setState({activePanel:e.currentTarget.dataset.story})},a.updateToken=function(e){console.log(e)},a.openFilm=function(e){var t=Object(c.a)(a.state.historyv);t.push(e.currentTarget.dataset.to),"home"===a.state.activePanel&&o.a.send("VKWebAppEnableSwipeBack"),a.setState({historyv:t,activePanel:"film",filmid:e.currentTarget.dataset.fid}),fetch("https://cinema.voloshinskii.ru/film/gettmdb/".concat(e.currentTarget.dataset.fid,"?id=").concat(a.state.user.id)).then(function(e){return e.json()}).then(function(e){return a.setState({currentFilm:e})})},a.state={activePanel:"home",activePreview:null,futurePreview:null,currentFilm:null,authToken:null,tokenWithScope:null,loaded:!1,historyv:["home"]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){console.log(window.location.hash)}},{key:"componentDidMount",value:function(){var e=this;o.a.send("VKWebAppEnableSwipeBack"),o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({user:t.detail.data});var a=window.location.href.split("#");a[1]&&"film"===a[1].split("_")[0]&&!1===e.state.loaded&&(fetch("https://cinema.voloshinskii.ru/film/gettmdb/".concat(a[1].split("_")[1],"?id=").concat(e.state.user.id)).then(function(e){return e.json()}).then(function(t){return e.setState({currentFilm:t})}),e.setState({loaded:!0,activePanel:"film",filmid:a[1].split("_")[1]}),o.a.send("VKWebAppSetLocation",{location:"home"}));break;case"VKWebAppAccessTokenReceived":e.setState({authToken:t.detail.data.access_token,tokenWithScope:t.detail.data});break;case"VKWebAppAccessTokenFailed":o.a.send("VKWebAppGetAuthToken",{app_id:6977050});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{}),o.a.send("VKWebAppGetAuthToken",{app_id:6977050,scope:"friends"}),fetch("https://cinema.voloshinskii.ru/active/preview").then(function(e){return e.json()}).then(function(t){return e.setState({activePreview:t})}),fetch("https://cinema.voloshinskii.ru/future/preview").then(function(e){return e.json()}).then(function(t){return e.setState({futurePreview:t})})}},{key:"render",value:function(){return i.a.createElement(b.ConfigProvider,null,i.a.createElement(b.Epic,{activeStory:this.state.activePanel,tabbar:["home","featured","settings"].includes(this.state.activePanel)&&i.a.createElement(b.Tabbar,null,i.a.createElement(b.TabbarItem,{onClick:this.onStoryChange,selected:"home"===this.state.activePanel,"data-story":"home",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},i.a.createElement(k.a,null)),i.a.createElement(b.TabbarItem,{onClick:this.onStoryChange,selected:"featured"===this.state.activePanel,"data-story":"featured",text:"\u0421\u043f\u0438\u0441\u043e\u043a"},i.a.createElement(v.a,null)),i.a.createElement(b.TabbarItem,{onClick:this.onStoryChange,selected:"settings"===this.state.activePanel,"data-story":"settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},i.a.createElement(E.a,null)))},i.a.createElement(b.View,{id:"featured",activePanel:"featured"},i.a.createElement(he,{openFilm:this.openFilm,token:this.state.authToken,id:"featured",go:this.go})),i.a.createElement(b.View,{id:"settings",activePanel:"settings"},i.a.createElement(be,{token:this.state.authToken,id:"settings",go:this.go})),i.a.createElement(b.View,{id:this.state.activePanel,activePanel:this.state.activePanel,onSwipeBack:this.goBack,history:this.state.historyv},i.a.createElement(A,{id:"home",activePreview:this.state.activePreview,futurePreview:this.state.futurePreview,go:this.go,openFilm:this.openFilm,setid:this.setid}),i.a.createElement(oe,{filmid:this.state.filmid,authToken:this.state.authToken,currentFilm:this.state.currentFilm,id:"film",go:this.go}),i.a.createElement(pe,{id:"future",go:this.go,openFilm:this.openFilm}),i.a.createElement(de,{id:"active",go:this.go,openFilm:this.openFilm}),i.a.createElement(R,{openFilm:this.openFilm,token:this.state.tokenWithScope,updateToken:this.updateToken,id:"popular",go:this.go}))))}}]),t}(i.a.Component);o.a.send("VKWebAppInit",{}),s.a.render(i.a.createElement(ge,null),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.cce55fde.chunk.js.map