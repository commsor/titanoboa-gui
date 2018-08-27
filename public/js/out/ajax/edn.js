// Compiled by ClojureScript 1.7.28 {}
goog.provide('ajax.edn');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('cljs.reader');
ajax.edn.edn_read = (function ajax$edn$edn_read(xhrio){
return cljs.reader.read_string.call(null,ajax.protocols._body.call(null,xhrio));
});
ajax.edn.edn_response_format = (function ajax$edn$edn_response_format(){
var args11790 = [];
var len__6047__auto___11793 = arguments.length;
var i__6048__auto___11794 = (0);
while(true){
if((i__6048__auto___11794 < len__6047__auto___11793)){
args11790.push((arguments[i__6048__auto___11794]));

var G__11795 = (i__6048__auto___11794 + (1));
i__6048__auto___11794 = G__11795;
continue;
} else {
}
break;
}

var G__11792 = args11790.length;
switch (G__11792) {
case 0:
return ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11790.length)].join('')));

}
});

ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.edn.edn_read,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn"], null)], null));
});

ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.edn.edn_response_format.call(null);
});

ajax.edn.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.edn.edn_request_format = (function ajax$edn$edn_request_format(){
var args11797 = [];
var len__6047__auto___11800 = arguments.length;
var i__6048__auto___11801 = (0);
while(true){
if((i__6048__auto___11801 < len__6047__auto___11800)){
args11797.push((arguments[i__6048__auto___11801]));

var G__11802 = (i__6048__auto___11801 + (1));
i__6048__auto___11801 = G__11802;
continue;
} else {
}
break;
}

var G__11799 = args11797.length;
switch (G__11799) {
case 0:
return ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11797.length)].join('')));

}
});

ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn"], null)], null);
});

ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.edn.edn_request_format.call(null);
});

ajax.edn.edn_request_format.cljs$lang$maxFixedArity = 1;
