// Compiled by ClojureScript 1.10.238 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__5260,handler){
var map__5261 = p__5260;
var map__5261__$1 = ((((!((map__5261 == null)))?(((((map__5261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5261):map__5261);
var uri = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__5261__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__5261,map__5261__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__5259_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__5259_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__5261,map__5261__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___5273 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___5273)){
var response_type_5274 = temp__5720__auto___5273;
this$__$1.responseType = cljs.core.name.call(null,response_type_5274);
} else {
}

var seq__5263_5275 = cljs.core.seq.call(null,headers);
var chunk__5264_5276 = null;
var count__5265_5277 = (0);
var i__5266_5278 = (0);
while(true){
if((i__5266_5278 < count__5265_5277)){
var vec__5267_5279 = cljs.core._nth.call(null,chunk__5264_5276,i__5266_5278);
var k_5280 = cljs.core.nth.call(null,vec__5267_5279,(0),null);
var v_5281 = cljs.core.nth.call(null,vec__5267_5279,(1),null);
this$__$1.setRequestHeader(k_5280,v_5281);


var G__5282 = seq__5263_5275;
var G__5283 = chunk__5264_5276;
var G__5284 = count__5265_5277;
var G__5285 = (i__5266_5278 + (1));
seq__5263_5275 = G__5282;
chunk__5264_5276 = G__5283;
count__5265_5277 = G__5284;
i__5266_5278 = G__5285;
continue;
} else {
var temp__5720__auto___5286 = cljs.core.seq.call(null,seq__5263_5275);
if(temp__5720__auto___5286){
var seq__5263_5287__$1 = temp__5720__auto___5286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5263_5287__$1)){
var c__4319__auto___5288 = cljs.core.chunk_first.call(null,seq__5263_5287__$1);
var G__5289 = cljs.core.chunk_rest.call(null,seq__5263_5287__$1);
var G__5290 = c__4319__auto___5288;
var G__5291 = cljs.core.count.call(null,c__4319__auto___5288);
var G__5292 = (0);
seq__5263_5275 = G__5289;
chunk__5264_5276 = G__5290;
count__5265_5277 = G__5291;
i__5266_5278 = G__5292;
continue;
} else {
var vec__5270_5293 = cljs.core.first.call(null,seq__5263_5287__$1);
var k_5294 = cljs.core.nth.call(null,vec__5270_5293,(0),null);
var v_5295 = cljs.core.nth.call(null,vec__5270_5293,(1),null);
this$__$1.setRequestHeader(k_5294,v_5295);


var G__5296 = cljs.core.next.call(null,seq__5263_5287__$1);
var G__5297 = null;
var G__5298 = (0);
var G__5299 = (0);
seq__5263_5275 = G__5296;
chunk__5264_5276 = G__5297;
count__5265_5277 = G__5298;
i__5266_5278 = G__5299;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

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
