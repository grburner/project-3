(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},115:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){'use strict';a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=(a(82),a(83),a(29)),i=a(9),u=a(31),m=a(22),s={sProdModalinView:!1,bProdModalinView:!1,sInvModalinView:!1,bInvModalinView:!1},d=Object(n.createContext)(s),E=d.Provider,p=function(e){var t=e.children,a=Object(n.useReducer)(function(e,t){switch(t.type){case'SHOWsProdModalinView':return Object(u.a)({},s,{sProdModalinView:!0});case'HIDEsProdModalinView':return Object(u.a)({},s,{sProdModalinView:!1});case'SHOWbProdModalinView':return Object(u.a)({},s,{bProdModalinView:!0});case'HIDEbProdModalinView':return Object(u.a)({},s,{bProdModalinView:!1});default:throw new Error;}},s),r=Object(m.a)(a,2),c=r[0],o=r[1];return l.a.createElement(E,{value:{state:c,dispatch:o}},t);},f=(a(84),a(85),a(86),a(87),a(30));var h=function(e){var t=e.children,a=e.href;return l.a.createElement('div',{className:'buttonWrapper'},l.a.createElement(f.a,{href:a,variant:'outline-danger'},t));};var v=function(){var e=Object(n.useState)({search:''}),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement('div',{className:'search-wrapper'},l.a.createElement('input',{onChange:function(e){r({search:e.target.value});}}),l.a.createElement('i',{onClick:function(){console.log(a.search);},className:'search-icon fa fa-search','aria-hidden':'true'}));};var g=function(){return l.a.createElement('div',{className:'hero'},l.a.createElement('p',{className:'hero-callout'},'Find your perfect wine:'),l.a.createElement(v,null));},b=(a(88),a(13)),w=a(12),y=a(41);var P=function(){return l.a.createElement('div',null,l.a.createElement(y.a,null,l.a.createElement('p',null,'Filters'),l.a.createElement(b.a,null,l.a.createElement(w.a,{md:!0},l.a.createElement(h,null,'Price')),l.a.createElement(w.a,{md:!0},l.a.createElement(h,null,'Store')),l.a.createElement(w.a,{md:!0},l.a.createElement(h,null,'Type 1')),l.a.createElement(w.a,{md:!0},l.a.createElement(h,null,'Type 2')))));};a(89),a(90);var C=function(e){return l.a.createElement('a',{href:e.value.link},l.a.createElement('div',{className:'item'},l.a.createElement('img',{src:e.value.image}),l.a.createElement('p',null,e.value.title),l.a.createElement('p',null,e.value.price)));},k=a(72),O=a.n(k),N={getProducts:function(){return O.a.get('/api/products');}};var j=function(){return N.getProducts().then(function(e){console.log(e.data);}).catch(function(e){return console.log(e);}),l.a.createElement('div',{className:'container marketplace'},l.a.createElement('h3',null,'Marketplace'),l.a.createElement(b.a,null,[{image:'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',title:'Pinot Grigio',price:'$10',link:'/product/Pinot-Grigio'},{image:'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',title:'Chardonnay',price:'$15',link:'/product/Chardonnay'},{image:'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',title:'Pinot Noir',price:'$20',link:'/product/Pinot-Noir'},{image:'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',title:'Grape Tornado',price:'$25',link:'/product/Grape-Tornado'},{image:'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',title:'Arctic Ice',price:'$30',link:'/product/Arctic-Ice'},{image:'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',title:'Bubblegum Blast',price:'$33',link:'/product/Bubblegum-Blast'}].map(function(e,t){return l.a.createElement(w.a,{lg:3,md:6,sm:12},l.a.createElement(C,{value:e}));})));};var S=function(){return l.a.createElement('div',null,l.a.createElement(g,null),l.a.createElement('div',{className:'container'},l.a.createElement(P,null),l.a.createElement(j,null)));};a(108);var I=function(){return l.a.createElement('div',{className:'container'},l.a.createElement('div',{className:'signup-form'},'Name: ',l.a.createElement('input',null),l.a.createElement('br',null),'Email: ',l.a.createElement('input',null),l.a.createElement('br',null),'Phone: ',l.a.createElement('input',null),l.a.createElement('br',null),'Address: ',l.a.createElement('input',null),l.a.createElement('br',null)));};a(109);var x=function(){var e='John',t='Smith',a='jsmith@hotmail.com',n='6105555555',r='Philadelphia',c='PA',o='19123';return l.a.createElement('div',{className:'container consumer'},l.a.createElement('h1',null,'Consumer Portal'),l.a.createElement('hr',null),l.a.createElement('p',null,'First Name: ',e),l.a.createElement('p',null,'Last Name: ',t),l.a.createElement('p',null,'Email: ',a),l.a.createElement('p',null,'Phone: ',n),l.a.createElement('p',null,'City: ',r),l.a.createElement('p',null,'State: ',c),l.a.createElement('p',null,'Zip: ',o));},_=(a(110),a(70),a(73)),L=a(40),B=function(e){var t=e.title,a=e.input;return l.a.createElement(L.a,{border:'primary',style:{width:'18rem'}},l.a.createElement(L.a.Header,null,t),l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Title,null,a),l.a.createElement(L.a.Text,null,'Text to be rendered based on card type',l.a.createElement(_.a,{pill:!0,variant:'secondary'},'Button Placeholder'),' ')));},M=a(74),V=new Promise(function(e){e([{title:'Products Listed',data:23},{title:'Sales',data:5445},{title:'Open Orders',data:12}]);}),W=new Promise(function(e){e([{order_number:274234,order_amount:233.75,order_items:12,status:'shipped'},{order_number:123423,order_amount:142.62,order_items:12,status:'ppending'},{order_number:263474,order_amount:623.23,order_items:6,status:'shipped'},{order_number:211342,order_amount:1102.12,order_items:12,status:'shipped'},{order_number:634744,order_amount:75.82,order_items:3,status:'ppending'},{order_number:624362,order_amount:135.52,order_items:12,status:'ppending'}]);}),T=function(){var e,t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){V.then(function(e){c(e);});},[]),e=r?r.map(function(e,t){return l.a.createElement(B,{key:t,title:e.title,input:e.data});}):'Loading...',l.a.createElement(M.a,null,e);},A=a(75),H=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){W.then(function(e){r(e);},[]);});return l.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,size:'sm'},l.a.createElement('caption',null,'Products'),l.a.createElement('thead',null,l.a.createElement('tr',null,l.a.createElement('th',null,'@'),l.a.createElement('th',null,'Order Number'),l.a.createElement('th',null,'Order Amount'),l.a.createElement('th',null,'Order Items'),l.a.createElement('th',null,'Status'))),l.a.createElement('tbody',null,a.map(function(e,t){return l.a.createElement('tr',{key:t},l.a.createElement('td',{onClick:function(){return console.log('item detail clicked');}},'@'),l.a.createElement('td',null,e.order_number),l.a.createElement('td',null,e.order_amount),l.a.createElement('td',null,e.order_items),l.a.createElement('td',null,e.status));})));};function G(){return l.a.createElement('div',{className:'App table-wrapper-scroll-y my-custom-scrollbar'},l.a.createElement(H,null));}var F=a(39),R=a(57),$=a(32),D=function(){var e=Object(n.useContext)(d),t=e.dispatch;return l.a.createElement(F.a,{bg:'light',expand:'lg',className:'w-100'},l.a.createElement(F.a.Brand,{href:'#home'},'Retail Portal'),l.a.createElement(F.a.Toggle,{'aria-controls':'basic-navbar-nav'}),l.a.createElement(F.a.Collapse,{id:'basic-navbar-nav'},l.a.createElement(R.a,{className:'mr-auto'},l.a.createElement('h2',null,e.inView),l.a.createElement(R.a.Link,{href:'#home'},'Home'),l.a.createElement(R.a.Link,{href:'#link'},'Link'),l.a.createElement($.a,{title:'Add Product',id:'basic-nav-dropdown'},l.a.createElement($.a.Item,{href:'#action/3.1',onClick:function(){return t({type:'SHOWsProdModalinView'});}},'Single Product'),l.a.createElement($.a.Item,{href:'#action/3.2',onClick:function(){return t({type:'SHOWbProdModalinView'});}},'Bulk Products')),l.a.createElement($.a,{title:'Add Inventory',id:'basic-nav-dropdown'},l.a.createElement($.a.Item,{href:'#action/3.1'},'Single Inventory'),l.a.createElement($.a.Item,{href:'#action/3.2'},'Bulk Inventory')))));},z=a(48),U=a(46),J=a(7),Z=function(){var e=Object(n.useContext)(d),t=e.dispatch,a=Object(n.useState)({text:'',description:'',country:'',region:'',type1:'',type2:'',size:'',grapes:'',tags:[]}),r=Object(m.a)(a,2),c=r[0],o=r[1],i=function(e){var t=e.target,a=t.name,n=t.value;o(Object(u.a)({},c,Object(z.a)({},a,n)));};return Object(n.useEffect)(function(){console.log(c);}),l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,{show:e.state.sProdModalinView},l.a.createElement(U.a.Header,{closeButton:!0},l.a.createElement(U.a.Title,null,'Single Product Add Template')),l.a.createElement(J.a,null,l.a.createElement(J.a.Group,{controlId:'formBasicText'},l.a.createElement(J.a.Label,null,'Product Name'),l.a.createElement(J.a.Control,{onChange:i,value:c.text,type:'text',placeholder:'Enter text',name:'text'})),l.a.createElement(J.a.Group,{controlId:'formBasicText'},l.a.createElement(J.a.Label,null,'Product Description'),l.a.createElement(J.a.Control,{onChange:i,value:c.description,type:'text',placeholder:'Enter product description',name:'description'})),l.a.createElement(J.a.Group,{controlId:'formBasicCheckbox'},l.a.createElement(J.a.Check,{type:'checkbox',label:'Check me out'})),l.a.createElement(J.a.Label,null,'Country'),l.a.createElement(J.a.Control,{as:'select',onChange:i,value:c.description,name:'country'},l.a.createElement('option',null,'United States'),l.a.createElement('option',null,'France'),l.a.createElement('option',null,'Italy'),l.a.createElement('option',null,'Spain'),l.a.createElement('option',null,'Australia'),l.a.createElement('option',null,'New Zealand'),l.a.createElement('option',null,'Argentina'),l.a.createElement('option',null,'Chile'),l.a.createElement('option',null,'South Africa'),l.a.createElement('option',null,'Austria')),l.a.createElement(J.a.Group,{controlId:'formBasicText'},l.a.createElement(J.a.Label,null,'Product Region'),l.a.createElement(J.a.Control,{onChange:i,value:c.region,type:'text',placeholder:'Enter product region',name:'region'})),l.a.createElement(J.a.Label,null,'Type'),l.a.createElement(J.a.Control,{as:'select',onChange:i,value:c.type1,name:'type1'},l.a.createElement('option',null,'Red'),l.a.createElement('option',null,'White'),l.a.createElement('option',null,'Rose'),l.a.createElement('option',null,'Orange')),l.a.createElement(J.a.Label,null,'Style'),l.a.createElement(J.a.Control,{as:'select',onChange:i,value:c.type2,name:'type2'},l.a.createElement('option',null,'Still'),l.a.createElement('option',null,'Sparkling'),l.a.createElement('option',null,'Fortified & Dessert')),l.a.createElement(J.a.Label,null,'Size'),l.a.createElement(J.a.Control,{as:'select',onChange:i,value:c.size,name:'size'},l.a.createElement('option',null,'750mL'),l.a.createElement('option',null,'1500mL'),l.a.createElement('option',null,'375mL')),l.a.createElement(J.a.Group,{controlId:'formBasicText'},l.a.createElement(J.a.Label,null,'Grapes'),l.a.createElement(J.a.Control,{onChange:i,value:c.grapes,type:'text',placeholder:'Enter product description',name:'grapes'})),l.a.createElement(J.a.Label,null,'Tags'),l.a.createElement(J.a.Control,{as:'select',onChange:i,value:c.tags,name:'tags'},l.a.createElement('option',null,'Natural'),l.a.createElement('option',null,'Biodynamic'),l.a.createElement('option',null,'Unfiltered'),l.a.createElement('option',null,'Organic'),l.a.createElement('option',null,'Funky'),l.a.createElement('option',null,'Classic'),l.a.createElement('option',null,'Bold'))),l.a.createElement(U.a.Footer,null,l.a.createElement(f.a,{variant:'secondary',onClick:function(){return t({type:'HIDEsProdModalinView'});}},'Close'),l.a.createElement(f.a,{variant:'primary',type:'submit',onClick:function(){return console.log(c);}},'Submit'))));},q=function(){return l.a.createElement(y.a,null,l.a.createElement(Z,null),l.a.createElement(b.a,null,l.a.createElement(D,null)),l.a.createElement(b.a,null,l.a.createElement(T,null)),l.a.createElement(b.a,null,l.a.createElement(G,null)),l.a.createElement(b.a,null,l.a.createElement('h1',null,'Inventory')),l.a.createElement(b.a,null,l.a.createElement('h1',null,'Products')));};a(115);var K=function(){var e=Object(i.f)().id;return l.a.createElement('div',{className:'container'},l.a.createElement('h1',null,'Product'),l.a.createElement('p',null,'ID: ',e,' '));};a(119),a(120);var Q=function(){return l.a.createElement('div',{className:'logo-wrapper'},l.a.createElement('a',{href:'/'},l.a.createElement('img',{src:'http://placehold.it/300x50'})));};a(121);var X=function(){return l.a.createElement('h1',{className:'headline'},'Wine Marketplace');};var Y=function(){return l.a.createElement('header',null,l.a.createElement(b.a,null,l.a.createElement(w.a,null,l.a.createElement(Q,null)),l.a.createElement(w.a,null,l.a.createElement(X,null)),l.a.createElement(w.a,null,l.a.createElement(h,{href:'/signup',variant:'outline-danger'},'Sign Up'))));};a(122);var ee=function(){return l.a.createElement('footer',null,'\xa9 2020');};var te=function(){return l.a.createElement('div',{className:'App'},l.a.createElement(Y,null),l.a.createElement(o.a,null,l.a.createElement('div',null,l.a.createElement('nav',null,l.a.createElement(o.b,{to:'/'},'Home'),'\xa0\xa0\xa0',l.a.createElement(o.b,{to:'/signup'},'Sign Up'),'\xa0\xa0\xa0',l.a.createElement(o.b,{to:'/consumer'},'Consumer'),'\xa0\xa0\xa0',l.a.createElement(o.b,{to:'/retailer'},'Retailer'),'\xa0\xa0\xa0',l.a.createElement(o.b,{to:'/product/5656565'},'Product')),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:'/signup'},l.a.createElement(I,null)),l.a.createElement(i.a,{path:'/consumer'},l.a.createElement(x,null)),l.a.createElement(i.a,{path:'/retailer'},l.a.createElement(p,null,l.a.createElement(q,null))),l.a.createElement(i.a,{path:'/product/:id'},l.a.createElement(K,null)),l.a.createElement(i.a,{path:'/'},l.a.createElement(S,null))))),l.a.createElement(ee,null));},ae=Boolean('localhost'===window.location.hostname||'[::1]'===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){'installed'===t.state&&(navigator.serviceWorker.controller?console.log('New content is available; please refresh.'):console.log('Content is cached for offline use.'));};};}).catch(function(e){console.error('Error during service worker registration:',e);});}c.a.render(l.a.createElement(te,null),document.getElementById('root')),function(){if('serviceWorker'in navigator){if(new URL('',window.location).origin!==window.location.origin)return;window.addEventListener('load',function(){var e=''.concat('','/service-worker.js');ae?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get('content-type').indexOf('javascript')?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload();});}):ne(e);}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}(e):ne(e);});}}();},77:function(e,t,a){e.exports=a(123);},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.79d2ac04.chunk.js.map