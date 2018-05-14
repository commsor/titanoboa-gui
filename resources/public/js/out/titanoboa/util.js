// Compiled by ClojureScript 1.7.28 {}
goog.provide('titanoboa.util');
goog.require('cljs.core');
titanoboa.util.filter_by_index = (function titanoboa$util$filter_by_index(coll,idx){

return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,coll),idx);
});
titanoboa.util.update_in__STAR_ = (function titanoboa$util$update_in__STAR_(){
var args__6054__auto__ = [];
var len__6047__auto___7250 = arguments.length;
var i__6048__auto___7251 = (0);
while(true){
if((i__6048__auto___7251 < len__6047__auto___7250)){
args__6054__auto__.push((arguments[i__6048__auto___7251]));

var G__7252 = (i__6048__auto___7251 + (1));
i__6048__auto___7251 = G__7252;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((3) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((3)),(0))):null);
return titanoboa.util.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6055__auto__);
});

titanoboa.util.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__7248,f,args){
var vec__7249 = p__7248;
var k = cljs.core.nth.call(null,vec__7249,(0),null);
var ks = cljs.core.nthnext.call(null,vec__7249,(1));
if((k === cljs.core._STAR_)){
var idx = ((cljs.core.map_QMARK_.call(null,m))?cljs.core.keys.call(null,m):cljs.core.range.call(null,cljs.core.count.call(null,m)));
if(cljs.core.truth_(ks)){
return cljs.core.reduce.call(null,((function (idx,vec__7249,k,ks){
return (function (p1__7240_SHARP_,p2__7241_SHARP_){
return cljs.core.assoc.call(null,p1__7240_SHARP_,p2__7241_SHARP_,cljs.core.apply.call(null,titanoboa.util.update_in__STAR_,cljs.core.get.call(null,p1__7240_SHARP_,p2__7241_SHARP_),ks,f,args));
});})(idx,vec__7249,k,ks))
,m,idx);
} else {
return cljs.core.reduce.call(null,((function (idx,vec__7249,k,ks){
return (function (p1__7242_SHARP_,p2__7243_SHARP_){
return cljs.core.assoc.call(null,p1__7242_SHARP_,p2__7243_SHARP_,cljs.core.apply.call(null,f,cljs.core.get.call(null,p1__7242_SHARP_,p2__7243_SHARP_),args));
});})(idx,vec__7249,k,ks))
,m,idx);
}
} else {
if(cljs.core.truth_(ks)){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,titanoboa.util.update_in__STAR_,cljs.core.get.call(null,m,k),ks,f,args));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),args));
}
}
});

titanoboa.util.update_in__STAR_.cljs$lang$maxFixedArity = (3);

titanoboa.util.update_in__STAR_.cljs$lang$applyTo = (function (seq7244){
var G__7245 = cljs.core.first.call(null,seq7244);
var seq7244__$1 = cljs.core.next.call(null,seq7244);
var G__7246 = cljs.core.first.call(null,seq7244__$1);
var seq7244__$2 = cljs.core.next.call(null,seq7244__$1);
var G__7247 = cljs.core.first.call(null,seq7244__$2);
var seq7244__$3 = cljs.core.next.call(null,seq7244__$2);
return titanoboa.util.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic(G__7245,G__7246,G__7247,seq7244__$3);
});
titanoboa.util.tokey = (function titanoboa$util$tokey(s){
if((cljs.core._EQ_.call(null,":",cljs.core.first.call(null,s))) && ((cljs.core.count.call(null,s) > (1)))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return s;
}
});
titanoboa.util.s__GT_key = (function titanoboa$util$s__GT_key(s){
if((cljs.core._EQ_.call(null,":",cljs.core.first.call(null,s))) && ((cljs.core.count.call(null,s) > (1)))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return cljs.core.keyword.call(null,s);
}
});
titanoboa.util.keyify = (function titanoboa$util$keyify(key,maps_array){

return cljs.core.reduce.call(null,(function (p1__7253_SHARP_,p2__7254_SHARP_){
return cljs.core.merge.call(null,p1__7253_SHARP_,new cljs.core.PersistentArrayMap.fromArray([key.call(null,p2__7254_SHARP_),p2__7254_SHARP_], true, false));
}),cljs.core.PersistentArrayMap.EMPTY,maps_array);
});
titanoboa.util.readable_interval = (function titanoboa$util$readable_interval(i){
var ms = cljs.core.mod.call(null,i,(1000));
var s = ((i - ms) / (1000));
var secs = cljs.core.mod.call(null,s,(60));
var s__$1 = ((s - secs) / (60));
var mins = cljs.core.mod.call(null,s__$1,(60));
var hrs = ((s__$1 - mins) / (60));
if((i < (1000))){
return [cljs.core.str(ms),cljs.core.str("ms")].join('');
} else {
if((i < ((60) * (1000)))){
return [cljs.core.str(secs),cljs.core.str("s "),cljs.core.str(ms),cljs.core.str("ms")].join('');
} else {
if((i < (((60) * (60)) * (1000)))){
return [cljs.core.str(mins),cljs.core.str("mins "),cljs.core.str(secs),cljs.core.str("s "),cljs.core.str(ms),cljs.core.str("ms")].join('');
} else {
return [cljs.core.str(hrs),cljs.core.str("hrs "),cljs.core.str(mins),cljs.core.str("mins "),cljs.core.str(secs),cljs.core.str("s "),cljs.core.str(ms),cljs.core.str("ms")].join('');

}
}
}
});
titanoboa.util.get_time_difference = (function titanoboa$util$get_time_difference(start,end){
var end__$1 = (function (){var or__5008__auto__ = end;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return (new Date());
}
})();
var interval = (end__$1.getTime() - start.getTime());
return titanoboa.util.readable_interval.call(null,interval);
});
titanoboa.util.shorten_uuid = (function titanoboa$util$shorten_uuid(uuid){
return [cljs.core.str(cljs.core.subs.call(null,uuid,(0),(4))),cljs.core.str(".."),cljs.core.str(cljs.core.subs.call(null,uuid,(uuid.length - (4)),uuid.length))].join('');
});
