// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args13046 = [];
var len__6047__auto___13050 = arguments.length;
var i__6048__auto___13051 = (0);
while(true){
if((i__6048__auto___13051 < len__6047__auto___13050)){
args13046.push((arguments[i__6048__auto___13051]));

var G__13052 = (i__6048__auto___13051 + (1));
i__6048__auto___13051 = G__13052;
continue;
} else {
}
break;
}

var G__13049 = args13046.length;
switch (G__13049) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13046.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq13047){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13047));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args13054 = [];
var len__6047__auto___13058 = arguments.length;
var i__6048__auto___13059 = (0);
while(true){
if((i__6048__auto___13059 < len__6047__auto___13058)){
args13054.push((arguments[i__6048__auto___13059]));

var G__13060 = (i__6048__auto___13059 + (1));
i__6048__auto___13059 = G__13060;
continue;
} else {
}
break;
}

var G__13057 = args13054.length;
switch (G__13057) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13054.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq13055){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13055));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
