// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args13019 = [];
var len__6047__auto___13023 = arguments.length;
var i__6048__auto___13024 = (0);
while(true){
if((i__6048__auto___13024 < len__6047__auto___13023)){
args13019.push((arguments[i__6048__auto___13024]));

var G__13025 = (i__6048__auto___13024 + (1));
i__6048__auto___13024 = G__13025;
continue;
} else {
}
break;
}

var G__13022 = args13019.length;
switch (G__13022) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13019.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq13020){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13020));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args13027 = [];
var len__6047__auto___13031 = arguments.length;
var i__6048__auto___13032 = (0);
while(true){
if((i__6048__auto___13032 < len__6047__auto___13031)){
args13027.push((arguments[i__6048__auto___13032]));

var G__13033 = (i__6048__auto___13032 + (1));
i__6048__auto___13032 = G__13033;
continue;
} else {
}
break;
}

var G__13030 = args13027.length;
switch (G__13030) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13027.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq13028){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13028));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
