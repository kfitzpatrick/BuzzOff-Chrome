/*!CK:119128624!*//*1412581113,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vxsWQ"]); }

__d("BirthdayReminder",["Animation","AsyncDialog","AsyncRequest","CSS","DOM","DOMQuery","Event","Parent","XBirthdayMessagePostControllerURIBuilder","fbt","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r={registerMessageHandler:function(s,t,u){m.listen(s,'click',function(event,v){var w=(new i()).setURI('/ajax/messaging/composer.php').setData({ids:[t],ref:u}).setMethod('POST');h.send(w,function(x){x.subscribe('Messenger/message-sent',function(){var y=new o().getURI();new i().setURI(y).setData({id:t}).setMethod('POST').send();});});});},registerWallpostHandler:function(s,t){m.listen(s,'submit',function(event,u){var v,w,x;v=n.byTag(s,'li');if(v)for(w=v.nextSibling;w;w=w.nextSibling){x=l.scry(w,'textarea');if(x.length){x[0].focus();break;}}return true;});m.listen(s,'error',function(event,u){var v=k.create('a',{href:'#'},"There was an error submitting your post. Retry?");m.listen(v,'click',function(event,w){j.show(s);k.remove(v);});j.hide(s);k.insertAfter(s,v);return false;});},registerCommentHandler:function(s,t){m.listen(s,'error',function(event,u){k.setContent(s,"There was an error submitting your comment.");return false;});m.listen(s,'success',function(event,u){k.replace(s,t);new g(t).duration(1000).checkpoint().to('backgroundColor','#FFFFFF').from('borderColor','#FFE222').to('borderColor','#FFFFFF').go();});}};e.exports=r;},null);