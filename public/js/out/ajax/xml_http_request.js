// Compiled by ClojureScript 1.7.28 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11769,handler){
var map__11770 = p__11769;
var map__11770__$1 = ((((!((map__11770 == null)))?((((map__11770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11770):map__11770);
var uri = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11770__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11770,map__11770__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11768_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11768_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__11770,map__11770__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___11778 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___11778)){
var response_type_11779 = temp__4425__auto___11778;
this$__$1.responseType = cljs.core.name.call(null,response_type_11779);
} else {
}

var seq__11772_11780 = cljs.core.seq.call(null,headers);
var chunk__11773_11781 = null;
var count__11774_11782 = (0);
var i__11775_11783 = (0);
while(true){
if((i__11775_11783 < count__11774_11782)){
var vec__11776_11784 = cljs.core._nth.call(null,chunk__11773_11781,i__11775_11783);
var k_11785 = cljs.core.nth.call(null,vec__11776_11784,(0),null);
var v_11786 = cljs.core.nth.call(null,vec__11776_11784,(1),null);
this$__$1.setRequestHeader(k_11785,v_11786);

var G__11787 = seq__11772_11780;
var G__11788 = chunk__11773_11781;
var G__11789 = count__11774_11782;
var G__11790 = (i__11775_11783 + (1));
seq__11772_11780 = G__11787;
chunk__11773_11781 = G__11788;
count__11774_11782 = G__11789;
i__11775_11783 = G__11790;
continue;
} else {
var temp__4425__auto___11791 = cljs.core.seq.call(null,seq__11772_11780);
if(temp__4425__auto___11791){
var seq__11772_11792__$1 = temp__4425__auto___11791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11772_11792__$1)){
var c__5792__auto___11793 = cljs.core.chunk_first.call(null,seq__11772_11792__$1);
var G__11794 = cljs.core.chunk_rest.call(null,seq__11772_11792__$1);
var G__11795 = c__5792__auto___11793;
var G__11796 = cljs.core.count.call(null,c__5792__auto___11793);
var G__11797 = (0);
seq__11772_11780 = G__11794;
chunk__11773_11781 = G__11795;
count__11774_11782 = G__11796;
i__11775_11783 = G__11797;
continue;
} else {
var vec__11777_11798 = cljs.core.first.call(null,seq__11772_11792__$1);
var k_11799 = cljs.core.nth.call(null,vec__11777_11798,(0),null);
var v_11800 = cljs.core.nth.call(null,vec__11777_11798,(1),null);
this$__$1.setRequestHeader(k_11799,v_11800);

var G__11801 = cljs.core.next.call(null,seq__11772_11792__$1);
var G__11802 = null;
var G__11803 = (0);
var G__11804 = (0);
seq__11772_11780 = G__11801;
chunk__11773_11781 = G__11802;
count__11774_11782 = G__11803;
i__11775_11783 = G__11804;
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
