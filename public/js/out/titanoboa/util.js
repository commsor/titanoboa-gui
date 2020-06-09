// Compiled by ClojureScript 1.10.238 {}
goog.provide('titanoboa.util');
goog.require('cljs.core');
titanoboa.util.filter_by_index = (function titanoboa$util$filter_by_index(coll,idx){

return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,coll),idx);
});
titanoboa.util.update_in__STAR_ = (function titanoboa$util$update_in__STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7673 = arguments.length;
var i__4500__auto___7674 = (0);
while(true){
if((i__4500__auto___7674 < len__4499__auto___7673)){
args__4502__auto__.push((arguments[i__4500__auto___7674]));

var G__7675 = (i__4500__auto___7674 + (1));
i__4500__auto___7674 = G__7675;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return titanoboa.util.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

titanoboa.util.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__7669,f,args){
var vec__7670 = p__7669;
var seq__7671 = cljs.core.seq.call(null,vec__7670);
var first__7672 = cljs.core.first.call(null,seq__7671);
var seq__7671__$1 = cljs.core.next.call(null,seq__7671);
var k = first__7672;
var ks = seq__7671__$1;
if((k === cljs.core._STAR_)){
var idx = ((cljs.core.map_QMARK_.call(null,m))?cljs.core.keys.call(null,m):cljs.core.range.call(null,cljs.core.count.call(null,m)));
if(ks){
return cljs.core.reduce.call(null,((function (idx,vec__7670,seq__7671,first__7672,seq__7671__$1,k,ks){
return (function (p1__7661_SHARP_,p2__7662_SHARP_){
return cljs.core.assoc.call(null,p1__7661_SHARP_,p2__7662_SHARP_,cljs.core.apply.call(null,titanoboa.util.update_in__STAR_,cljs.core.get.call(null,p1__7661_SHARP_,p2__7662_SHARP_),ks,f,args));
});})(idx,vec__7670,seq__7671,first__7672,seq__7671__$1,k,ks))
,m,idx);
} else {
return cljs.core.reduce.call(null,((function (idx,vec__7670,seq__7671,first__7672,seq__7671__$1,k,ks){
return (function (p1__7663_SHARP_,p2__7664_SHARP_){
return cljs.core.assoc.call(null,p1__7663_SHARP_,p2__7664_SHARP_,cljs.core.apply.call(null,f,cljs.core.get.call(null,p1__7663_SHARP_,p2__7664_SHARP_),args));
});})(idx,vec__7670,seq__7671,first__7672,seq__7671__$1,k,ks))
,m,idx);
}
} else {
if(ks){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,titanoboa.util.update_in__STAR_,cljs.core.get.call(null,m,k),ks,f,args));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),args));
}
}
});

titanoboa.util.update_in__STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
titanoboa.util.update_in__STAR_.cljs$lang$applyTo = (function (seq7665){
var G__7666 = cljs.core.first.call(null,seq7665);
var seq7665__$1 = cljs.core.next.call(null,seq7665);
var G__7667 = cljs.core.first.call(null,seq7665__$1);
var seq7665__$2 = cljs.core.next.call(null,seq7665__$1);
var G__7668 = cljs.core.first.call(null,seq7665__$2);
var seq7665__$3 = cljs.core.next.call(null,seq7665__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7666,G__7667,G__7668,seq7665__$3);
});

titanoboa.util.tokey = (function titanoboa$util$tokey(s){
if(((cljs.core._EQ_.call(null,":",cljs.core.first.call(null,s))) && ((cljs.core.count.call(null,s) > (1))))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return s;
}
});
titanoboa.util.s__GT_key = (function titanoboa$util$s__GT_key(s){
if(((cljs.core._EQ_.call(null,":",cljs.core.first.call(null,s))) && ((cljs.core.count.call(null,s) > (1))))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return cljs.core.keyword.call(null,s);
}
});
titanoboa.util.keyify = (function titanoboa$util$keyify(key,maps_array){

return cljs.core.reduce.call(null,(function (p1__7676_SHARP_,p2__7677_SHARP_){
return cljs.core.merge.call(null,p1__7676_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([key.call(null,p2__7677_SHARP_),p2__7677_SHARP_]));
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),"ms"].join('');
} else {
if((i < ((60) * (1000)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(secs),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),"ms"].join('');
} else {
if((i < (((60) * (60)) * (1000)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mins),"mins ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secs),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),"ms"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hrs),"hrs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mins),"mins ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secs),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),"ms"].join('');

}
}
}
});
titanoboa.util.get_time_difference = (function titanoboa$util$get_time_difference(start,end){
var end__$1 = (function (){var or__3922__auto__ = end;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (new Date());
}
})();
var interval = (end__$1.getTime() - start.getTime());
return titanoboa.util.readable_interval.call(null,interval);
});
titanoboa.util.shorten_uuid = (function titanoboa$util$shorten_uuid(uuid){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,uuid,(0),(4))),"..",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,uuid,(uuid.length - (4)),uuid.length))].join('');
});
