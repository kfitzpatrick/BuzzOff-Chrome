/*!CK:4238433569!*//*1413781565,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/OrCk"]); }

__d("MorePagerFetchOnScroll",["AsyncRequest","DOMQuery","Event","Style","Vector","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={};function n(o,p){"use strict";this._pager=o;this._offset=p||0;this._scrollParent=j.getScrollParent(o);this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this));this._hasEventHandlers=false;if(!this.check()){this._scrollListener=i.listen(this._scrollParent,'scroll',l(function(){this.check();}.bind(this),50));this._clickListener=i.listen(this._scrollParent,'click',l(function(){this.check();}.bind(this),50));this._hasEventHandlers=true;}m[o.id]=this;}n.prototype.check=function(){"use strict";if(!h.contains(document.body,this._pager)){this.removeEventListeners();return true;}var o=k.getElementPosition(this._pager).y,p=this._scrollParent===window?k.getViewportDimensions().y:k.getElementDimensions(this._scrollParent).y,q=this._scrollParent===window?k.getScrollPosition().y+p:k.getElementPosition(this._scrollParent).y+p;if(o-this._offset<q){this._inViewHandler();this.removeEventListeners();return true;}return false;};n.prototype.removeEventListeners=function(){"use strict";if(this._hasEventHandlers){this._scrollListener&&this._scrollListener.remove();this._clickListener&&this._clickListener.remove();this._hasEventHandlers=false;}};n.prototype.setPagerInViewHandler=function(o){"use strict";this._inViewHandler=o;return this;};n.prototype._defaultPagerInViewHandler=function(){"use strict";var o=h.scry(this._pager,'a')[0];if(o)g.bootstrap(o.getAttribute('ajaxify')||o.href,o);};n.getInstance=function(o){"use strict";return m[o];};e.exports=n;},null);
__d("PluginLikebox",["AsyncDOM","AsyncRequest","CSS","DOMEvent","DOMEventListener","DOMQuery","MorePagerFetchOnScroll","copyProperties","PlatformWidgetEndpoint"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=3;function q(r,s,t){this.stream_id=r;this.force_wall=s;this.width=t;this.retries=0;this.load();k.add(l.find(document.body,'.pluginLikeboxStream'),'click',function(u){var v=new j(u),w=v.target.parentNode;if(i.hasClass(w,'text_exposed_link')){v.kill();i.addClass(l.find(w,'^.text_exposed_root'),'text_exposed');}});}n(q.prototype,{load:function(r){new h().setMethod('GET').setURI(o.plugins('likebox','stream')).setData({id:this.stream_id,dom:r?'pluginLikeboxMoreStories':'pluginLikeboxStream',force_wall:this.force_wall,nobootload:1,inlinecss:1,max_timestamp:r,width:this.width}).setReadOnly(true).setErrorHandler(function(){}).setHandler(this.handleResponse.bind(this)).send();},handleResponse:function(r){if(r.inlinecss){var s=document.createElement('style');s.setAttribute("type","text/css");document.getElementsByTagName('head')[0].appendChild(s);if(s.styleSheet){s.styleSheet.cssText=r.inlinecss;}else s.appendChild(document.createTextNode(r.inlinecss));}g.invoke(r.domops);var t=l.scry(document.body,"#pluginLikeboxMoreStories a");if(!t.length)return;t=t[0];var u=function(){this.load(parseInt(t.getAttribute('data-timestamp'),10));var w=l.find(t.parentNode,'.uiMorePagerLoader');i.addClass(w,'uiMorePagerPrimary');i.removeClass(w,'uiMorePagerLoader');i.hide(t);}.bind(this);k.add(t,'click',function(w){new j(w).kill();u();});new m(t,0).setPagerInViewHandler(u);var v=parseInt(t.getAttribute('data-storycount'),10);if(v===0){if(this.retries<=p){this.retries++;u();}else i.hide(t);}else this.retries=0;return h.suppressOnloadToken;}});e.exports=q;},null);