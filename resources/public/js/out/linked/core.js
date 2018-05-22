// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args12953 = [];
var len__6047__auto___12957 = arguments.length;
var i__6048__auto___12958 = (0);
while(true){
if((i__6048__auto___12958 < len__6047__auto___12957)){
args12953.push((arguments[i__6048__auto___12958]));

var G__12959 = (i__6048__auto___12958 + (1));
i__6048__auto___12958 = G__12959;
continue;
} else {
}
break;
}

var G__12956 = args12953.length;
switch (G__12956) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args12953.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq12954){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12954));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args12961 = [];
var len__6047__auto___12965 = arguments.length;
var i__6048__auto___12966 = (0);
while(true){
if((i__6048__auto___12966 < len__6047__auto___12965)){
args12961.push((arguments[i__6048__auto___12966]));

var G__12967 = (i__6048__auto___12966 + (1));
i__6048__auto___12966 = G__12967;
continue;
} else {
}
break;
}

var G__12964 = args12961.length;
switch (G__12964) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args12961.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq12962){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12962));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
