(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),a=n(7),r=n.n(a),l=(n(14),n(15),n(1)),c=n(2),s=n(4),u=n(3),h=n(5),d=(n(16),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("i",{className:"Die fas fa-dice-".concat(this.props.num," ").concat(this.props.rolling&&"shaking")})}}]),e}(o.Component)),m=(n(17),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={die1:"one",die2:"one",rolling:!1},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"roll",value:function(){var t=this,e=this.props.dice[Math.floor(6*Math.random())],n=this.props.dice[Math.floor(6*Math.random())];this.setState({rolling:!0}),setTimeout(function(){t.setState({die1:e,die2:n,rolling:!1})},1e3)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"game"},i.a.createElement(d,{num:this.state.die1,rolling:this.state.rolling}),i.a.createElement(d,{num:this.state.die2,rolling:this.state.rolling}),i.a.createElement("button",{onClick:function(e){return t.roll(e)},disabled:this.state.rolling},this.state.rolling?"Rolling...":"Roll Dice!"))}}]),e}(o.Component));m.defaultProps={dice:["one","two","three","four","five","six"]};var f=m;var p=function(){return i.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e201d0c5.chunk.js.map