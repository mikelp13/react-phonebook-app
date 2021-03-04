(this["webpackJsonpreact-phonebook-app"]=this["webpackJsonpreact-phonebook-app"]||[]).push([[7],{103:function(t,e,n){"use strict";var s=n(0),i=n.n(s);e.a=i.a.createContext(null)},106:function(t,e,n){"use strict";var s=n(5),i=n(13),a=n(15);n(22);function r(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(0),l=n.n(o),c=n(26),u=n.n(c),p=!1,d=n(103),f="unmounted",h="exited",E="entering",m="entered",x="exiting",v=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var i,a=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?a?(i=h,s.appearStatus=E):i=m:i=e.unmountOnExit||e.mountOnEnter?f:h,s.state={status:i},s.nextCallback=null,s}Object(a.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:h}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==m&&(e=E):n!==E&&n!==m||(e=x)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!==typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===E?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,i=this.props.nodeRef?[s]:[u.a.findDOMNode(this),s],a=i[0],r=i[1],o=this.getTimeouts(),l=s?o.appear:o.enter;!t&&!n||p?this.safeSetState({status:m},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,r),this.safeSetState({status:E},(function(){e.props.onEntering(a,r),e.onTransitionEnd(l,(function(){e.safeSetState({status:m},(function(){e.props.onEntered(a,r)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:u.a.findDOMNode(this);e&&!p?(this.props.onExit(s),this.safeSetState({status:x},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:h},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:h},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],r=i[1];this.props.addEndListener(a,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(i.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(t,s):l.a.cloneElement(l.a.Children.only(n),s))},e}(l.a.Component);function b(){}v.contextType=d.a,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},v.UNMOUNTED=f,v.EXITED=h,v.ENTERING=E,v.ENTERED=m,v.EXITING=x;var g=v,C=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"===typeof n.className?n.className=r(n.className,s):n.setAttribute("class",r(n.className&&n.className.baseVal||"",s)));var n,s}))},N=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),i=s[0],a=s[1];e.removeClasses(i,"exit"),e.addClass(i,a?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),i=s[0],a=s[1]?"appear":"enter";e.addClass(i,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),i=s[0],a=s[1]?"appear":"enter";e.removeClasses(i,a),e.addClass(i,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"===typeof n,i=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:i,activeClassName:s?i+"-active":n[t+"Active"],doneClassName:s?i+"-done":n[t+"Done"]}},e}Object(a.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&i&&(s+=" "+i),"active"===n&&t&&t.scrollTop,s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,i=n.active,a=n.done;this.appliedClasses[e]={},s&&C(t,s),i&&C(t,i),a&&C(t,a)},n.render=function(){var t=this.props,e=(t.classNames,Object(i.a)(t,["classNames"]));return l.a.createElement(g,Object(s.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(l.a.Component);N.defaultProps={classNames:""},N.propTypes={};e.a=N},108:function(t,e,n){"use strict";var s=n(13),i=n(5);var a=n(15),r=(n(22),n(0)),o=n.n(r),l=n(103);function c(t,e){var n=Object.create(null);return t&&r.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(r.isValidElement)(t)?e(t):t}(t)})),n}function u(t,e,n){return null!=n[e]?n[e]:t.props[e]}function p(t,e,n){var s=c(t.children),i=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var s,i=Object.create(null),a=[];for(var r in t)r in e?a.length&&(i[r]=a,a=[]):a.push(r);var o={};for(var l in e){if(i[l])for(s=0;s<i[l].length;s++){var c=i[l][s];o[i[l][s]]=n(c)}o[l]=n(l)}for(s=0;s<a.length;s++)o[a[s]]=n(a[s]);return o}(e,s);return Object.keys(i).forEach((function(a){var o=i[a];if(Object(r.isValidElement)(o)){var l=a in e,c=a in s,p=e[a],d=Object(r.isValidElement)(p)&&!p.props.in;!c||l&&!d?c||!l||d?c&&l&&Object(r.isValidElement)(p)&&(i[a]=Object(r.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:u(o,"exit",t),enter:u(o,"enter",t)})):i[a]=Object(r.cloneElement)(o,{in:!1}):i[a]=Object(r.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:u(o,"exit",t),enter:u(o,"enter",t)})}})),i}var d=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},f=function(t){function e(e,n){var s,i=(s=t.call(this,e,n)||this).handleExited.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,s,i=e.children,a=e.handleExited;return{children:e.firstRender?(n=t,s=a,c(n.children,(function(t){return Object(r.cloneElement)(t,{onExited:s.bind(null,t),in:!0,appear:u(t,"appear",n),enter:u(t,"enter",n),exit:u(t,"exit",n)})}))):p(t,i,a),firstRender:!1}},n.handleExited=function(t,e){var n=c(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(i.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,i=Object(s.a)(t,["component","childFactory"]),a=this.state.contextValue,r=d(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===e?o.a.createElement(l.a.Provider,{value:a},r):o.a.createElement(l.a.Provider,{value:a},o.a.createElement(e,i,r))},e}(o.a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(t){return t}};e.a=f}}]);
//# sourceMappingURL=7.c4bbc4f2.chunk.js.map