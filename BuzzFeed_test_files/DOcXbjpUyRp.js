/*!CK:4074419578!*//*1407548355,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["okRA\/"]); }

__d("InterestListMenu",["Event","AsyncRequest","CSS","DataStore","DOM","EditSubscriptions","MenuDeprecated","Parent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(s,t,u,v,w){var x=m.isItemChecked(u);m.setItemChecked(u,!x);new h().setURI('/ajax/lists/modify.php').setMethod('POST').setData({list_id:t,profile_id:s,add_to_list:!x,location:v}).setHandler(w).setErrorHandler(function(){m.setItemChecked(u,x);}).send();}function p(s,t,u){for(var v=0;v<s.length;v++)if(t==q(s[v]))m.setItemChecked(s[v],u);}function q(s){if(!k.isElementNode(s))return null;var t=k.scry(s,'a.itemAnchor');if(!t)return null;return j.get(t[0],'list-id');}var r={init:function(s,t,u,v){g.listen(s,'click',function(event){var w=n.byClass(event.getTarget(),'uiMenuItem');if(w&&i.hasClass(w,'InterestListMenuItem')){var x=q(w),y=m.isItemChecked(w);o(t,x,w,u,function(){n.byTag(event.getTarget(),'a').blur();});p(k.scry(s,'.InterestListMenuItem'),x,!y);}});l.init(s,t,v);},initMenu:function(s){m.register(s,false);},addToInterestList:function(s,t){g.listen(s,'click',function(event){i.removeClass(t,'addToInterestListsClosed');i.addClass(t,'addToInterestListsOpen');});},goBack:function(s,t){g.listen(s,'click',function(event){i.removeClass(t,'addToInterestListsOpen');i.addClass(t,'addToInterestListsClosed');});}};e.exports=a.InterestListMenu||r;},null);
__d("legacy:InterestListMenu",["InterestListMenu"],function(a,b,c,d){a.InterestListMenu=b('InterestListMenu');},3);