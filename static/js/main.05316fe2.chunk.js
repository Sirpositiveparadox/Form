(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),l=t.n(r);t(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(4),o=t(5),c=t(7),m=t(6),d=t(1),h=t(8),u=(t(15),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).state={fields:{},errors:{}},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.submitForm=e.submitForm.bind(Object(d.a)(e)),e}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=this.state.fields;a[e.target.name]=e.target.value,this.setState({fields:a})}},{key:"submitForm",value:function(e){if(e.preventDefault(),this.validateForm()){var a={email:"",feedback:""};this.setState({fields:a}),alert("Feedback submitted")}}},{key:"validateForm",value:function(){var e=this.state.fields;console.log();var a={},t=!0;(e.email||(t=!1,a.email="* Please enter your email address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(t=!1,a.email="* Please enter a valid email address."));return e.feedback||(t=!1,a.feedback="* Please enter your feedback."),e.feedback&&e.feedback.length>0&&e.feedback.length<10&&(t=!1,a.feedback="* Feedback message must contain at least 10 characters."),e.feedback&&e.feedback.length>200&&(t=!1,a.feedback="* Maximum amount of characters: 200."),this.setState({errors:a}),t}},{key:"render",value:function(){return s.a.createElement("form",{className:"feedback",action:"https://choicy.com/feedback",method:"post",onSubmit:this.submitForm},s.a.createElement("h1",null,"Get in Touch"),s.a.createElement("p",null,"Please fill out the quick form and we will be in touch with lightening speed."),s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",name:"email",className:"email",placeholder:"Your Email address",value:this.state.fields.email,onChange:this.handleChange}),this.state.errors.email&&s.a.createElement("div",{className:"error"},this.state.errors.email),s.a.createElement("label",{htmlFor:"feedback"},"Message"),s.a.createElement("textarea",{name:"feedback",className:"message",rows:"4",cols:"10",placeholder:"Message",value:this.state.fields.feedback,onChange:this.handleChange}),this.state.errors.feedback&&s.a.createElement("div",{className:"error"},this.state.errors.feedback),s.a.createElement("input",{type:"submit",className:"button",value:"SUBMIT"}))}}]),a}(n.Component));t(16);l.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.05316fe2.chunk.js.map