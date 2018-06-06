// Compiled by ClojureScript 1.7.28 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11716,handler){
var map__11717 = p__11716;
var map__11717__$1 = ((((!((map__11717 == null)))?((((map__11717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11717):map__11717);
var uri = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11717__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11717,map__11717__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11715_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11715_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__11717,map__11717__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___11725 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___11725)){
var response_type_11726 = temp__4425__auto___11725;
this$__$1.responseType = cljs.core.name.call(null,response_type_11726);
} else {
}

var seq__11719_11727 = cljs.core.seq.call(null,headers);
var chunk__11720_11728 = null;
var count__11721_11729 = (0);
var i__11722_11730 = (0);
while(true){
if((i__11722_11730 < count__11721_11729)){
var vec__11723_11731 = cljs.core._nth.call(null,chunk__11720_11728,i__11722_11730);
var k_11732 = cljs.core.nth.call(null,vec__11723_11731,(0),null);
var v_11733 = cljs.core.nth.call(null,vec__11723_11731,(1),null);
this$__$1.setRequestHeader(k_11732,v_11733);

var G__11734 = seq__11719_11727;
var G__11735 = chunk__11720_11728;
var G__11736 = count__11721_11729;
var G__11737 = (i__11722_11730 + (1));
seq__11719_11727 = G__11734;
chunk__11720_11728 = G__11735;
count__11721_11729 = G__11736;
i__11722_11730 = G__11737;
continue;
} else {
var temp__4425__auto___11738 = cljs.core.seq.call(null,seq__11719_11727);
if(temp__4425__auto___11738){
var seq__11719_11739__$1 = temp__4425__auto___11738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11719_11739__$1)){
var c__5792__auto___11740 = cljs.core.chunk_first.call(null,seq__11719_11739__$1);
var G__11741 = cljs.core.chunk_rest.call(null,seq__11719_11739__$1);
var G__11742 = c__5792__auto___11740;
var G__11743 = cljs.core.count.call(null,c__5792__auto___11740);
var G__11744 = (0);
seq__11719_11727 = G__11741;
chunk__11720_11728 = G__11742;
count__11721_11729 = G__11743;
i__11722_11730 = G__11744;
continue;
} else {
var vec__11724_11745 = cljs.core.first.call(null,seq__11719_11739__$1);
var k_11746 = cljs.core.nth.call(null,vec__11724_11745,(0),null);
var v_11747 = cljs.core.nth.call(null,vec__11724_11745,(1),null);
this$__$1.setRequestHeader(k_11746,v_11747);

var G__11748 = cljs.core.next.call(null,seq__11719_11739__$1);
var G__11749 = null;
var G__11750 = (0);
var G__11751 = (0);
seq__11719_11727 = G__11748;
chunk__11720_11728 = G__11749;
count__11721_11729 = G__11750;
i__11722_11730 = G__11751;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5008__auto__ = body;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
