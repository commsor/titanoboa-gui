// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args13048 = [];
var len__6047__auto___13052 = arguments.length;
var i__6048__auto___13053 = (0);
while(true){
if((i__6048__auto___13053 < len__6047__auto___13052)){
args13048.push((arguments[i__6048__auto___13053]));

var G__13054 = (i__6048__auto___13053 + (1));
i__6048__auto___13053 = G__13054;
continue;
} else {
}
break;
}

var G__13051 = args13048.length;
switch (G__13051) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13048.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq13049){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13049));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args13056 = [];
var len__6047__auto___13060 = arguments.length;
var i__6048__auto___13061 = (0);
while(true){
if((i__6048__auto___13061 < len__6047__auto___13060)){
args13056.push((arguments[i__6048__auto___13061]));

var G__13062 = (i__6048__auto___13061 + (1));
i__6048__auto___13061 = G__13062;
continue;
} else {
}
break;
}

var G__13059 = args13056.length;
switch (G__13059) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13056.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq13057){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13057));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
