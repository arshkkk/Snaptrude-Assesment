(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),i=n.n(a),o=n(6),s=n(5),d=n.n(s),l=n(0),u=function(e){var t=e.setSrc,n=Object(r.createRef)();return Object(r.useEffect)((function(){var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3qI6gwg9nxZfOVtIUk_OgowDBqKJIMS8&libraries=places",window.document.body.appendChild(e),e.addEventListener("load",(function(){new window.google.maps.Map(n.current,{zoom:10,center:{lat:30.210995,lng:74.945473},disabledDefaultUI:!0})}))}),[]),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(l.jsx)("div",{id:"google-map",ref:n,style:{width:"700px",height:"500px"}}),Object(l.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("google-map");d()(e,{useCORS:!0}).then((function(e){t(""),t(e.toDataURL("img/png"))}))}()},style:{backgroundColor:"green",color:"white",padding:"10px 0",fontSize:"18px"},children:"Generate"})]})},p=n(2),b=null,f=null,g=function(e){var t=e.img;Object(r.useEffect)((function(){f=document.getElementById("babylon-cuboid"),b=new p.Engine(f,!0)}),[]);if(f&&b){var n=function(){var e=new p.Scene(b);new p.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,3,p.Vector3.Zero(),e).attachControl(f,!0),new p.HemisphericLight("light1",new p.Vector3(1,1,0),e);var n=p.MeshBuilder.CreateBox("cuboid",{size:1},e),r=new p.StandardMaterial("texture1",e);return r.diffuseTexture=new p.Texture(t,e),n.material=r,e}();b.runRenderLoop((function(){n&&n.render()}))}return Object(l.jsx)("canvas",{id:"babylon-cuboid",style:{width:"700px",height:"500px"}})};var h=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)(u,{setSrc:c}),Object(l.jsx)(g,{img:n})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.173743cd.chunk.js.map