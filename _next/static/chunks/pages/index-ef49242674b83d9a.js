(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5774)}])},5774:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return pe},default:function(){return we}});var r=t(5893),s=t(8664),a=t(7564),o=t(7041),i=t(7484),l=t.n(i),c=t(4110),d=t.n(c),h=t(7294),u=t(6042),x=t(9396),j=t(9534),g=t(603),m=t(4957),f=t(6137),p=t(5117),w=t(3941),b=t(4777),k=t(3991),v=t(4924),S=t(6196),y=(0,S.k)((function(e,n,t){return{control:{ref:t("control"),border:0,opacity:.6,color:"dark"===e.colorScheme?e.white:e.black,"&:hover":{backgroundColor:"transparent",opacity:1}},item:{borderBottom:0,overflow:"hidden",transition:"box-shadow 150ms ".concat(e.transitionTimingFunction),border:"1px dashed",borderRadius:e.radius.sm,"&[data-active]":(0,v.Z)({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.white,borderColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[3]},"& .".concat(t("control")),{opacity:1})},panel:{paddingLeft:0}}}));function Z(e){var n=e.children,t=(0,j.Z)(e,["children"]),s=y().classes;return(0,r.jsx)(m.U,(0,x.Z)((0,u.Z)({classNames:s},t),{children:n}))}function _(e){var n=e.statusOverview,t=e.breakdown,s=(0,j.Z)(e,["statusOverview","breakdown"]);return(0,r.jsx)(Z,(0,x.Z)((0,u.Z)({},s),{children:(0,r.jsxs)(m.U.Item,{value:"breakdown",children:[(0,r.jsx)(m.U.Control,{icon:(0,r.jsx)(k.k04,{size:16}),children:"Breakdown"}),(0,r.jsxs)(m.U.Panel,{children:[(0,r.jsxs)(a.K,{children:[(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(p.x,{color:"green",children:"Supported & Running"})," ",(0,r.jsx)("b",{children:"vs"})," ",(0,r.jsx)(p.x,{color:"red",children:"Broken & Denied"})]}),(0,r.jsx)(w.E,{size:"xl",sections:[{value:(n.running+n.supported)/n.total*100,color:"green",label:"".concat(n.running+n.supported," (").concat(((n.running+n.supported)/n.total*100).toFixed(1),"%)")},{value:(n.broken+n.denied)/n.total*100,color:"red",label:"".concat(n.broken+n.denied," (").concat(((n.broken+n.denied)/n.total*100).toFixed(1),")")},{value:100-((n.broken+n.denied)/n.total*100+(n.running+n.supported)/n.total*100),color:"gray",label:"..."}]}),(0,r.jsx)(b.i,{})]}),t.map((function(e){var n=(0,g.Z)(e,2),t=n[0],s=n[1];return(0,r.jsxs)(a.K,{sx:{marginTop:10},children:[(0,r.jsxs)(p.x,{children:[t," (",s.total,")"]}),(0,r.jsx)(w.E,{size:"xl",sections:[{value:s.supported/s.total*100,color:"green",label:"".concat(s.supported)},{value:s.running/s.total*100,color:"cyan",label:"".concat(s.running)},{value:s.planned/s.total*100,color:"violet",label:"".concat(s.planned)},{value:s.broken/s.total*100,color:"orange",label:"".concat(s.broken)},{value:s.denied/s.total*100,color:"red",label:"".concat(s.denied)}]}),(0,r.jsx)(b.i,{})]},t)}))]})]})}))}var C=t(5044),z=t(9985),T=t(9834),N=t(4685),A=t(2873),L=t(7841);function W(e){localStorage.setItem("previousGames",JSON.stringify(e))}var I,O=(0,S.k)((function(e){var n,t;return{mobileHide:(0,v.Z)({},e.fn.smallerThan("sm"),{display:"none"}),mobileShow:(0,v.Z)({},e.fn.largerThan("sm"),{display:"none"}),smallHide:(0,v.Z)({},e.fn.smallerThan("lg"),{display:"none"}),largeHide:(0,v.Z)({},e.fn.largerThan("lg"),{display:"none"}),breakdownWidth:(n={},(0,v.Z)(n,e.fn.smallerThan("sm"),{width:"90%"}),(0,v.Z)(n,e.fn.largerThan("sm"),{width:"60%"}),n),tableWidth:(t={},(0,v.Z)(t,e.fn.smallerThan("sm"),{width:"100%"}),(0,v.Z)(t,e.fn.largerThan("sm"),{width:"75%"}),t),mobileSmall:(0,v.Z)({},e.fn.smallerThan("sm"),{fontSize:"85%"})}})),D=(0,h.forwardRef)((function(e,n){var t=e.anticheat,s=e.showText,a=e.anticheatIcons,o=(0,j.Z)(e,["anticheat","showText","anticheatIcons"]),i=O().classes,l=a.find((function(e){return e[0]===t}));return(0,r.jsxs)(f.Z,(0,x.Z)((0,u.Z)({noWrap:!0,ref:n},o),{children:[l&&l[1]?(0,r.jsx)(z.q,{radius:"xs",size:"sm",src:l[1]}):(0,r.jsx)(C.k,{radius:"xs",children:(0,r.jsx)(k.jKT,{size:18})}),s&&(0,r.jsx)(p.x,{align:"center",className:i.smallHide,style:{whiteSpace:"nowrap"},children:t})]}))})),H=t(6313),M=t(2840),R=t(3157),G=t(4065),U=t(8276);!function(e){e.broken="Broken",e.denied="Denied",e.planned="Planned",e.running="Running",e.supported="Supported"}(I||(I={}));var K=(0,S.k)((function(e){return{mobileHide:(0,v.Z)({},e.fn.smallerThan("sm"),{display:"none"}),mobileShow:(0,v.Z)({},e.fn.largerThan("sm"),{display:"none"})}}));function B(e){var n,t=e.game,s=e.compact,o=e.showText,i=(0,U.o)(),c=K().classes,d=t.status[0].toUpperCase()+t.status.substring(1),h=function(){switch(t.status){case I.denied:return["red",(0,r.jsx)(k.kLi,{size:18})];case I.broken:return["orange",(0,r.jsx)(k.UrD,{size:18})];case I.supported:return["green",(0,r.jsx)(k.NOm,{size:18})];case I.running:return["cyan",(0,r.jsx)(k.tFW,{size:18})];case I.planned:return["violet",(0,r.jsx)(k.joI,{size:18})];default:return["gray",(0,r.jsx)(k.jKT,{size:18})]}}(),u=function(){var e=i.openModal({title:"Recorded updates",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H.T,{active:t.updates&&t.updates.length-1,children:t.updates.map((function(e){return(0,r.jsxs)(H.T.Item,{title:e.name,children:[(0,r.jsx)(N.e,{target:"_blank",href:e.reference,children:e.referenceTitle||"Reference"}),e.referenceDescription&&(0,r.jsx)(M.o,{maxHeight:20,hideLabel:"Hide",showLabel:"Show more",transitionDuration:0,children:(0,r.jsx)(p.x,{size:"sm",mt:2,children:e.referenceDescription})}),(0,r.jsxs)(p.x,{size:"xs",mt:4,children:[new Date(e.date).toLocaleDateString()," (",l()(e.date).fromNow(),")"]})]},e.reference)}))}),(0,r.jsx)(f.Z,{position:"right",children:(0,r.jsx)(L.z,{onClick:function(){return i.closeModal(e)},children:"Close"})})]})})},x=(0,R.rZ)(),j=(0,G.a)("(min-width: ".concat(x.breakpoints.sm,"px)"),!1),g=s?f.Z:a.K;return(0,r.jsxs)(g,{children:[(0,r.jsxs)(f.Z,{noWrap:j,children:[t.native&&(0,r.jsx)(A.u,{withArrow:!0,label:"Also runs native",children:(0,r.jsx)(C.k,{color:"green",radius:"xl",children:(0,r.jsx)(k.Qa_,{size:16})})}),(0,r.jsx)(C.k,{color:h[0],radius:"xl",children:h[1]}),o&&t.updates&&t.updates.length>0&&(0,r.jsx)(T.A,{radius:"xl",color:"teal",variant:"filled",onClick:u,className:c.mobileShow,children:(0,r.jsx)(k.RkL,{size:16})}),o&&(t.reference?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.e,{className:c.mobileHide,target:"_blank",href:t.reference,children:d}),(0,r.jsx)(T.A,{component:"a",target:"_blank",href:t.reference,className:c.mobileShow,children:(0,r.jsx)(k.TqL,{})})]}):(0,r.jsx)(p.x,{className:c.mobileHide,children:d}))]}),Array.isArray(t.updates)&&t.updates.length>0&&(0,r.jsxs)(f.Z,{noWrap:!0,className:c.mobileHide,children:[(0,r.jsx)(T.A,{radius:"xl",color:"teal",component:"a",target:"_blank",variant:"filled",onClick:u,children:(0,r.jsx)(k.RkL,{size:16})}),(0,r.jsx)(N.e,{onClick:u,children:l()(t.updates.at(-1).date).fromNow()}),(0,r.jsx)(T.A,{component:"a",target:"_blank",href:null===(n=t.updates.at(-1))||void 0===n?void 0:n.reference,children:(0,r.jsx)(k.TqL,{})})]})]})}function q(e){var n=e.newGame,t=e.oldGame,s=e.antiCheatIcons;if(!t)return(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{color:"green",radius:"xl",children:(0,r.jsx)(k.SC9,{})}),(0,r.jsx)(z.q,{radius:"xl",src:n.logo}),(0,r.jsx)(p.x,{children:n.name}),(0,r.jsx)(B,{showText:!1,game:n})]});var o=(0,h.useMemo)((function(){if(n.reference!==t.reference){if(!t.reference)return(0,r.jsxs)(f.Z,{sx:{marginLeft:50},children:[(0,r.jsx)(k.SC9,{}),(0,r.jsx)(T.A,{component:"a",target:"_blank",href:n.reference,children:(0,r.jsx)(k.TqL,{})})]});if(n.reference&&t.reference)return(0,r.jsxs)(f.Z,{sx:{marginLeft:50},children:[(0,r.jsx)(k.iGV,{}),(0,r.jsx)(T.A,{component:"a",target:"_blank",href:t.reference,children:(0,r.jsx)(k.TqL,{})}),(0,r.jsx)(k.Ec8,{}),(0,r.jsx)(T.A,{component:"a",target:"_blank",href:n.reference,children:(0,r.jsx)(k.TqL,{})})]})}}),[]),i=(0,h.useMemo)((function(){if(Array.isArray(n.updates)&&(!Array.isArray(n.updates)||0!==n.updates.length)&&JSON.stringify(t.updates)!==JSON.stringify(n.updates))return(0,r.jsxs)(f.Z,{sx:{marginLeft:50},children:[(0,r.jsx)(k.RkL,{}),(0,r.jsxs)(p.x,{children:["New Updates:"," ",(0,r.jsx)(N.e,{target:"_blank",href:n.updates.at(-1).reference,children:n.updates.at(-1).name})," ","(",l()(n.updates.at(-1).date).fromNow(),")"]})]})}),[]),c=(0,h.useMemo)((function(){if(t.status!==n.status||t.native!==n.native)return(0,r.jsxs)(f.Z,{sx:{marginLeft:50},children:[(0,r.jsx)(k.iGV,{}),(0,r.jsx)(B,{showText:!1,game:t,compact:!0}),(0,r.jsx)(k.Ec8,{}),(0,r.jsx)(B,{showText:!1,game:n,compact:!0})]})}),[]),d=(0,h.useMemo)((function(){if(JSON.stringify(t.notes)!==JSON.stringify(n.notes))return 0===t.notes.length?(0,r.jsxs)(f.Z,{sx:{marginLeft:50},noWrap:!0,children:[(0,r.jsx)(k.SC9,{}),(0,r.jsx)(a.K,{children:n.notes.map((function(e){return e[1]?(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(T.A,{component:"a",target:"_blank",href:e[1],children:(0,r.jsx)(k.Rfd,{})}),(0,r.jsx)(N.e,{target:"_blank",href:e[1],children:e[0]})]},e[1]):(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(k.Rfd,{}),(0,r.jsx)(p.x,{children:e[0]})]},e[0])}))})]}):0===n.notes.length?(0,r.jsxs)(f.Z,{sx:{marginLeft:50},noWrap:!0,children:[(0,r.jsx)(k.UrD,{}),(0,r.jsx)(a.K,{children:t.notes.map((function(e){return e[1]?(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(T.A,{component:"a",target:"_blank",href:e[1],children:(0,r.jsx)(k.Rfd,{})}),(0,r.jsx)(N.e,{target:"_blank",href:e[1],children:e[0]})]},e[1]):(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(k.Rfd,{}),(0,r.jsx)(p.x,{children:e[0]})]},e[0])}))})]}):(0,r.jsxs)(f.Z,{sx:{marginLeft:50},children:[(0,r.jsx)(k.iGV,{}),(0,r.jsx)(f.Z,{children:t.notes.map((function(e){return(0,r.jsx)(A.u,{withArrow:!0,label:e[0],children:(0,r.jsx)(T.A,{component:"a",target:"_blank",href:e[1],children:(0,r.jsx)(k.Rfd,{})})},e[1])}))}),(0,r.jsx)(k.Ec8,{}),(0,r.jsx)(f.Z,{children:n.notes.map((function(e){return(0,r.jsx)(A.u,{withArrow:!0,label:e[0],children:(0,r.jsx)(T.A,{component:"a",target:"_blank",href:e[1],children:(0,r.jsx)(k.Rfd,{})})},e[1])}))})]})}),[]),u=(0,h.useMemo)((function(){if(JSON.stringify(t.anticheats)!==JSON.stringify(n.anticheats))return(0,r.jsxs)(f.Z,{sx:{marginLeft:50},children:[(0,r.jsx)(k.iGV,{}),(0,r.jsx)(f.Z,{children:t.anticheats.map((function(e){return(0,r.jsx)(A.u,{withArrow:!0,label:e,children:(0,r.jsx)(D,{anticheat:e,showText:!1,anticheatIcons:s})},e)}))}),(0,r.jsx)(k.Ec8,{})," ",(0,r.jsx)(f.Z,{children:n.anticheats.map((function(e){return(0,r.jsx)(A.u,{withArrow:!0,label:e,children:(0,r.jsx)(D,{anticheat:e,showText:!1,anticheatIcons:s})},e)}))})]})}),[]);return(0,r.jsxs)(a.K,{children:[(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{color:"violet",radius:"xl",children:(0,r.jsx)(k.tr8,{})}),(0,r.jsx)(z.q,{radius:"xl",src:n.logo}),(0,r.jsx)(p.x,{children:n.name})]}),c,i,o,u,d]})}function E(e){var n=e.games,t=e.antiCheatIcons,s=(0,j.Z)(e,["games","antiCheatIcons"]),o=(0,h.useState)([]),i=o[0],l=o[1];return(0,h.useEffect)((function(){var e=function(){var e=localStorage.getItem("previousGames");return e?JSON.parse(e):null}();e?l(function(e,n){return n.filter((function(n){return e.find((function(e){return e.name===n.name&&(JSON.stringify(e.reference)!==JSON.stringify(n.reference)||n.updates&&!e.updates||n.updates&&e.updates&&JSON.stringify(e.updates.flatMap((function(e){return e.reference})))!==JSON.stringify(n.updates.flatMap((function(e){return e.reference})))||JSON.stringify(e.notes)!==JSON.stringify(n.notes)||e.status!==n.status||e.native!==n.native)}))||!e.find((function(e){return e.name===n.name}))})).map((function(n){return[n,e.find((function(e){return e.name===n.name}))]}))}(e,n)):W(n)}),[n]),i.length>0?(0,r.jsx)(Z,(0,x.Z)((0,u.Z)({},s),{children:(0,r.jsxs)(m.U.Item,{value:"changes",children:[(0,r.jsx)(m.U.Control,{icon:(0,r.jsx)(k.OfJ,{size:16}),children:"Changes since you've last checked (".concat(i.length,")")}),(0,r.jsxs)(m.U.Panel,{children:[(0,r.jsx)(a.K,{children:i.map((function(e){var n=(0,g.Z)(e,2),s=n[0],a=n[1];return(0,r.jsx)(q,{newGame:s,oldGame:a,antiCheatIcons:t},s.name)}))}),(0,r.jsx)(L.z,{fullWidth:!0,color:"green",sx:{marginTop:15},leftIcon:(0,r.jsx)(k.NOm,{size:20}),onClick:function(){l([]),W(n)},children:"Acknowledge"})]})]})})):(0,r.jsx)(r.Fragment,{})}var J=t(9236);function P(e){return(0,r.jsx)(Z,(0,x.Z)((0,u.Z)({},e),{children:(0,r.jsxs)(m.U.Item,{value:"legend",children:[(0,r.jsx)(m.U.Control,{icon:(0,r.jsx)(k.Us8,{size:16}),children:"Legend"}),(0,r.jsx)(m.U.Panel,{children:(0,r.jsxs)(a.K,{children:[(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{radius:"xl",variant:"filled",color:"green",children:(0,r.jsx)(k.NOm,{size:18})}),(0,r.jsx)(J.D,{order:5,children:"Supported"})]}),(0,r.jsx)(p.x,{children:"Games that run on Linux due to the developers going out of their way to enable the anti-cheat to run on Linux or games that have anti-cheat which works perfectly fine out of the box under Wine/Proton (e.g. Overwatch, Battlefield 4)"}),(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{radius:"xl",variant:"filled",color:"violet",children:(0,r.jsx)(k.joI,{size:18})}),(0,r.jsx)(J.D,{order:5,children:"Planned"})]}),(0,r.jsx)(p.x,{children:"Games where the developers have explicitly stated that they plan to enable their anti-cheat to work on Linux or that they plan to support the game natively"}),(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{radius:"xl",variant:"filled",color:"cyan",children:(0,r.jsx)(k.tFW,{size:18})}),(0,r.jsx)(J.D,{order:5,children:"Running"})]}),(0,r.jsx)(p.x,{children:"Games that will run on Linux without impact on online or offline gameplay but may require you to perform certain tinkering steps (This does not include any means of explicitly bypassing the anti-cheat)"}),(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{radius:"xl",variant:"filled",color:"orange",children:(0,r.jsx)(k.UrD,{size:18})}),(0,r.jsx)(J.D,{order:5,children:"Broken"})]}),(0,r.jsx)(p.x,{children:"Games that will not run both online and offline on Linux due to the deployed anti-cheat solution"}),(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(C.k,{radius:"xl",variant:"filled",color:"red",children:(0,r.jsx)(k.kLi,{size:18})}),(0,r.jsx)(J.D,{order:5,children:"Denied"})]}),(0,r.jsx)(p.x,{children:"Games where the developers have explicitly stated that they will not enable the anti-cheat solution to work on Linux or have denied the possibility of Linux support"})]})})]})}))}function F(e){var n=e.lastBuildTime;return(0,r.jsxs)(a.K,{sx:{marginTop:15,height:"100%"},children:[(0,r.jsxs)(f.Z,{position:"center",children:["Don\u2019t see a game you\u2019re interested in on here yet?",(0,r.jsx)(N.e,{target:"_blank",href:"https://github.com/Starz0r/AreWeAntiCheatYet/issues/new?template=0-new-game.yml",children:"Add it here!"})]}),(0,r.jsxs)(f.Z,{position:"center",spacing:5,children:["Made with ",(0,r.jsx)(k.VY$,{color:"red"})," by"," ",(0,r.jsx)(N.e,{target:"_blank",href:"https://github.com/Starz0r",children:"Starz0r"}),"&",(0,r.jsx)(N.e,{target:"_blank",href:"https://github.com/Curve",children:"Curve"})]}),(0,r.jsxs)(f.Z,{position:"center",children:["Last updated ",new Date(n).toLocaleDateString()," (",new Date(n).toLocaleTimeString(),")"]})]})}var V,Q=t(5477),Y=t(4736),X=t(9094),$=t(5078),ee=t(9759),ne=t(5675),te=t.n(ne);function re(e){var n=e.game,t=e.highlight,s=e.showStores,o=e.anticheatIcons,i=O().classes,l=(0,R.rZ)();return(0,r.jsxs)("tr",{style:t?{backgroundColor:"".concat(function(){switch(n.status){case I.denied:return l.colors.red[5];case I.broken:return l.colors.orange[5];case I.supported:return l.colors.green[5];case I.running:return l.colors.cyan[5];case I.planned:return l.colors.violet[5];default:return""}}(),"55")}:void 0,children:[(0,r.jsx)("td",{style:{width:"30%"},children:(0,r.jsxs)(f.Z,{position:"apart",noWrap:!0,children:[(0,r.jsxs)(f.Z,{noWrap:!0,children:[n.logo?(0,r.jsx)(z.q,{radius:"xl",src:n.logo}):(0,r.jsx)(z.q,{radius:"xl",children:(0,r.jsx)(k.jKT,{})}),n.url?(0,r.jsx)(N.e,{target:"_blank",href:n.url,className:i.mobileSmall,children:n.name}):(0,r.jsx)(p.x,{className:i.mobileSmall,children:n.name})]}),s&&n.storeIds&&(0,r.jsxs)(f.Z,{align:"center",className:i.mobileHide,children:[n.storeIds.epic&&(0,r.jsx)(T.A,{radius:"xl",size:"sm",variant:"filled",color:"indigo",component:"a",target:"_blank",href:"https://store.epicgames.com/p/".concat(n.storeIds.epic.slug,"/"),children:(0,r.jsx)(te(),{alt:"epic-store",width:"18",height:"18",layout:"fixed",src:"stores/epic-games.webp"})}),n.storeIds.steam&&(0,r.jsx)(T.A,{radius:"xl",size:"sm",variant:"filled",color:"gray",component:"a",target:"_blank",href:"https://store.steampowered.com/app/".concat(n.storeIds.steam,"/"),children:(0,r.jsx)(k.Os9,{})})]})]})}),(0,r.jsx)("td",{style:{width:"20%"},children:(0,r.jsx)(B,{showText:!0,game:n})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.K,{children:n.anticheats.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:i.smallHide,children:(0,r.jsx)(D,{showText:!0,anticheat:e,anticheatIcons:o})}),(0,r.jsx)(A.u,{withArrow:!0,label:e,className:i.largeHide,children:(0,r.jsx)(D,{showText:!0,anticheat:e,anticheatIcons:o},e)})]},e)}))})}),(0,r.jsx)("td",{className:i.mobileHide,children:(0,r.jsx)(a.K,{children:n.notes.map((function(e){return e[1]?(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(T.A,{component:"a",target:"_blank",href:e[1],children:(0,r.jsx)(k.TqL,{})}),(0,r.jsx)(N.e,{target:"_blank",href:e[1],children:e[0]})]},e[1]):(0,r.jsxs)(f.Z,{noWrap:!0,children:[(0,r.jsx)(k.Rfd,{}),(0,r.jsx)(p.x,{children:e[0]})]},e[0])}))})})]})}function se(e){var n=e.setQuery,t=(0,h.useState)(""),s=t[0],a=t[1],o=(0,g.Z)((0,ee.c)(s,500),1)[0];return(0,h.useEffect)((function(){n(o)}),[o]),(0,r.jsx)(A.u,{label:"You can also search by Anti-Cheat or Supported-Status",children:(0,r.jsx)(Q.o,{value:s,icon:(0,r.jsx)(k.jVj,{}),variant:"unstyled",placeholder:"Search...",onChange:function(e){return a(e.target.value)}})})}function ae(e){var n=e.text,t=e.type,s=e.sortMode,a=e.setSortMode,o=(0,j.Z)(e,["text","type","sortMode","setSortMode"]),i=function(){switch(t){case"name":switch(s){case V.name_asc:return k.y_Q;case V.name_desc:return k.C26}break;case"status":switch(s){case V.status_asc:return k.y_Q;case V.status_desc:return k.C26;case V.status_since:return k.m5c}break;case"notes":switch(s){case V.notes_asc:return k.y_Q;case V.notes_desc:return k.C26}}return k.wBr}();return(0,r.jsx)("th",(0,x.Z)((0,u.Z)({},o),{children:(0,r.jsx)(Y.k,{onClick:function(){if("name"===t)switch(s){case V.name_desc:a(V.name_asc);break;case V.name_asc:a(V.normal);break;default:a(V.name_desc)}else if("status"===t)switch(s){case V.status_desc:a(V.status_asc);break;case V.status_asc:a(V.status_since);break;case V.status_since:a(V.normal);break;default:a(V.status_desc)}else if("notes"===t)switch(s){case V.notes_desc:a(V.notes_asc);break;case V.notes_asc:a(V.normal);break;default:a(V.notes_desc)}},sx:{cursor:"none"!==t?"pointer":"default"},children:(0,r.jsxs)(f.Z,{position:"apart",noWrap:!0,children:[(0,r.jsx)(p.x,{weight:600,size:"sm",children:n}),"none"!==t&&(0,r.jsx)(X.M,{children:(0,r.jsx)(i,{size:14})})]})})}))}function oe(e){var n=e.games,t=e.highlight,s=e.showStores,a=e.anticheatIcons,o=(0,j.Z)(e,["games","highlight","showStores","anticheatIcons"]),i=O().classes,l=(0,h.useState)(""),c=l[0],d=l[1],g=(0,h.useState)(V.normal),m=g[0],p=g[1],w=(0,h.useMemo)((function(){var e=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())||e.anticheats.find((function(e){return e.toLowerCase().includes(c.toLowerCase())}))||e.status.toLowerCase().includes(c.toLowerCase())}));switch(m){case V.name_asc:return e.sort((function(e,n){return e.name.localeCompare(n.name)}));case V.name_desc:return e.sort((function(e,n){return n.name.localeCompare(e.name)}));case V.status_asc:return e.sort((function(e,n){return e.status.localeCompare(n.status)}));case V.status_desc:return e.sort((function(e,n){return n.native?1:n.status.localeCompare(e.status)}));case V.status_since:return e.sort((function(e,n){return e.updates.length>0&&n.updates.length>0?new Date(n.updates.at(-1).date).getTime()-new Date(e.updates.at(-1).date).getTime():n.updates.length-e.updates.length}));case V.notes_asc:return e.sort((function(e,n){return e.notes.length-n.notes.length}));case V.notes_desc:return e.sort((function(e,n){return n.notes.length-e.notes.length}));default:return e}}),[n,c,m]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{position:"apart",sx:{marginTop:15},children:(0,r.jsx)(se,{setQuery:d})}),(0,r.jsxs)($.i,(0,x.Z)((0,u.Z)({},o),{horizontalSpacing:"xl",fontSize:"md",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(ae,{text:"Name",type:"name",sortMode:m,setSortMode:p}),(0,r.jsx)(ae,{text:"Status",type:"status",sortMode:m,setSortMode:p}),(0,r.jsx)(ae,{text:"Anti-Cheat",type:"none"}),(0,r.jsx)(ae,{className:i.mobileHide,text:"Notes",type:"notes",sortMode:m,setSortMode:p})]})}),(0,r.jsx)("tbody",{children:w.map((function(e){return(0,r.jsx)(re,{game:e,highlight:t,showStores:s,anticheatIcons:a},e.name)}))})]}))]})}!function(e){e[e.normal=0]="normal",e[e.name_asc=1]="name_asc",e[e.name_desc=2]="name_desc",e[e.status_asc=3]="status_asc",e[e.status_desc=4]="status_desc",e[e.status_since=5]="status_since",e[e.notes_asc=6]="notes_asc",e[e.notes_desc=7]="notes_desc"}(V||(V={}));var ie=t(83),le=(0,h.forwardRef)((function(e,n){var t=e.highlight,s=e.toggleHighlight,a=(0,j.Z)(e,["highlight","toggleHighlight"]);return(0,r.jsx)(T.A,(0,x.Z)((0,u.Z)({onClick:s,size:"lg",radius:"xl",sx:function(e){return{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:t?e.colors.red[4]:e.colors.gray[4]}},ref:n},a),{children:t?(0,r.jsx)(k.NDg,{size:18}):(0,r.jsx)(k.zPr,{size:18})}))})),ce=(0,h.forwardRef)((function(e,n){var t=e.showStores,s=e.toggleShowStores,a=(0,j.Z)(e,["showStores","toggleShowStores"]);return(0,r.jsx)(T.A,(0,x.Z)((0,u.Z)({onClick:s,size:"lg",radius:"xl",sx:function(e){return{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:t?e.colors.green[6]:e.colors.gray[4]}},ref:n},a),{children:t?(0,r.jsx)(k.wkN,{size:18}):(0,r.jsx)(k.e1T,{size:18})}))})),de=t(3019),he=(0,h.forwardRef)((function(e,n){var t=(0,de.X)(),s=t.colorScheme,a=t.toggleColorScheme;return(0,r.jsx)(T.A,(0,x.Z)((0,u.Z)({onClick:function(){return a()},size:"lg",radius:"xl",sx:function(e){return{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:"dark"===e.colorScheme?e.colors.yellow[4]:e.colors.blue[6]}},ref:n},e),{children:"dark"===s?(0,r.jsx)(k.O31,{size:18}):(0,r.jsx)(k.zG9,{size:18})}))}));function ue(e){var n=e.highlight,t=e.toggleHighlight,s=e.showStores,a=e.toggleShowStores,o=O().classes;return(0,r.jsx)(ie.h,{height:60,children:(0,r.jsxs)(f.Z,{position:"apart",sx:{marginLeft:15,marginRight:15,height:"100%"},noWrap:!0,children:[(0,r.jsxs)(f.Z,{position:"center",noWrap:!0,children:[(0,r.jsx)(z.q,{src:"icon.webp",size:"lg"}),(0,r.jsx)(J.D,{order:4,children:"Are We Anti-Cheat Yet?"})]}),(0,r.jsxs)(p.x,{className:o.smallHide,children:["A comprehensive and crowd-sourced list of games using anti-cheats and their compatibility with GNU/Linux or Wine/Proton."," "]}),(0,r.jsxs)(f.Z,{position:"center",noWrap:!0,children:[(0,r.jsx)(A.u,{label:"Open on GitHub",children:(0,r.jsx)(T.A,{radius:"xl",component:"a",color:"violet",variant:"light",target:"_blank",href:"https://github.com/Starz0r/AreWeAntiCheatYet",children:(0,r.jsx)(k.oBr,{size:18})})}),(0,r.jsx)(A.u,{label:"Toggle Dark-Theme",children:(0,r.jsx)(he,{})}),(0,r.jsx)(A.u,{label:"Toggle Row-Highlight",children:(0,r.jsx)(le,{highlight:n,toggleHighlight:t})}),(0,r.jsx)(A.u,{label:"Toggle Store Info",children:(0,r.jsx)(ce,{showStores:s,toggleShowStores:a})})]})]})})}var xe=t(4403);function je(){var e=(0,h.useState)(!0),n=e[0],t=e[1];return(0,h.useEffect)((function(){t((0,o.getCookie)("hideAlert"))}),[]),n?null:(0,r.jsxs)(xe.b,{icon:(0,r.jsx)(k.Ldj,{size:16}),title:"Beware",color:"yellow",variant:"outline",withCloseButton:!0,onClose:function(){t(!0),(0,o.setCookies)("hideAlert",!0,{maxAge:2592e3,sameSite:"strict"})},children:["Game states can change quickly! ",(0,r.jsx)("br",{})," If a games status differs from what is listed here or if you believe a games reference should be updated please open a"," ",(0,r.jsx)(N.e,{target:"_blank",href:"https://github.com/Starz0r/AreWeAntiCheatYet/issues/new?template=1-update-game.yml",children:"GitHub issue"}),"."]})}var ge=t(6787);function me(e){var n=e.name,t=e.color,s=e.amount,a=e.percentage,o=e.description,i=function(){switch(t){case"red":return(0,r.jsx)(k.kLi,{size:18});case"orange":return(0,r.jsx)(k.UrD,{size:18});case"green":return(0,r.jsx)(k.NOm,{size:18});case"cyan":return(0,r.jsx)(k.tFW,{size:18});case"violet":return(0,r.jsx)(k.joI,{size:18});default:return(0,r.jsx)(k.jKT,{size:18})}}();return(0,r.jsx)(A.u,{withArrow:!0,label:o,children:(0,r.jsxs)(f.Z,{align:"center",children:[(0,r.jsx)(C.k,{radius:"xl",variant:"filled",color:t,children:i}),(0,r.jsxs)(p.x,{children:[s," ",n," (",a.toFixed(1),"%)"]})]})})}function fe(e){var n=e.overview,t=(0,j.Z)(e,["overview"]);return(0,r.jsxs)(f.Z,(0,x.Z)((0,u.Z)({},t),{children:[(0,r.jsx)(f.Z,{position:"center",children:(0,r.jsx)(ge.T,{label:(0,r.jsx)(p.x,{align:"center",children:n.total}),sections:[{value:n.denied/n.total*100,color:"red"},{value:n.broken/n.total*100,color:"orange"},{value:n.running/n.total*100,color:"cyan"},{value:n.supported/n.total*100,color:"green"},{value:n.planned/n.total*100,color:"violet"}]})}),(0,r.jsxs)(a.K,{sx:{marginLeft:15},children:[(0,r.jsx)(me,{color:"green",name:"Supported",amount:n.supported,description:"Support was explicitly enabled / works out of the box",percentage:n.supported/n.total*100}),(0,r.jsx)(me,{color:"violet",name:"Planned",amount:n.planned,description:"Game plans to support Proton/Wine",percentage:n.planned/n.total*100}),(0,r.jsx)(me,{color:"cyan",name:"Running",amount:n.running,description:"No official statement but runs fine (may require tinkering)",percentage:n.running/n.total*100}),(0,r.jsx)(me,{color:"orange",name:"Broken",amount:n.broken,description:"Anti-Cheat stops game from running properly",percentage:n.broken/n.total*100}),(0,r.jsx)(me,{color:"red",name:"Denied",amount:n.denied,description:"Linux support was explicitly denied",percentage:n.denied/n.total*100})]})]}))}var pe=!0;function we(e){var n=e.games,t=e.overview,i=e.breakdown,c=e.antiCheatIcons,u=e.lastBuildTime,x=O().classes;(0,h.useMemo)((function(){return l().extend(d())}),[]);var j=(0,h.useState)(!0),g=j[0],m=j[1],f=(0,h.useState)(!1),p=f[0],w=f[1];(0,h.useEffect)((function(){w((0,o.getCookie)("showStores")),w((0,o.getCookie)("highlightColors"))}),[]);return(0,r.jsx)(s.V,{padding:"md",header:(0,r.jsx)(ue,{highlight:p,toggleHighlight:function(){w(!p),(0,o.setCookies)("highlightColors","".concat(!p),{maxAge:2592e3,sameSite:"strict"})},showStores:g,toggleShowStores:function(){m(!g),(0,o.setCookies)("showStores","".concat(!g),{maxAge:2592e3,sameSite:"strict"})}}),children:(0,r.jsxs)(a.K,{align:"center",sx:{marginTop:25},children:[(0,r.jsx)(fe,{overview:t,sx:{marginBottom:25}}),(0,r.jsx)(P,{className:x.breakdownWidth}),(0,r.jsx)(E,{games:n,antiCheatIcons:c,className:x.breakdownWidth}),(0,r.jsx)(_,{breakdown:i,statusOverview:t,className:x.breakdownWidth,sx:{marginBottom:25}}),(0,r.jsx)(je,{}),(0,r.jsx)(oe,{showStores:g,highlight:p,className:x.tableWidth,anticheatIcons:c,games:n}),(0,r.jsx)(F,{lastBuildTime:u})]})})}}},function(e){e.O(0,[584,330,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);