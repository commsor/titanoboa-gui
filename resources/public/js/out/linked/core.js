// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args12947 = [];
var len__6047__auto___12951 = arguments.length;
var i__6048__auto___12952 = (0);
while(true){
if((i__6048__auto___12952 < len__6047__auto___12951)){
args12947.push((arguments[i__6048__auto___12952]));

var G__12953 = (i__6048__auto___12952 + (1));
i__6048__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var G__12950 = args12947.length;
switch (G__12950) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args12947.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq12948){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12948));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args12955 = [];
var len__6047__auto___12959 = arguments.length;
var i__6048__auto___12960 = (0);
while(true){
if((i__6048__auto___12960 < len__6047__auto___12959)){
args12955.push((arguments[i__6048__auto___12960]));

var G__12961 = (i__6048__auto___12960 + (1));
i__6048__auto___12960 = G__12961;
continue;
} else {
}
break;
}

var G__12958 = args12955.length;
switch (G__12958) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args12955.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq12956){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12956));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
