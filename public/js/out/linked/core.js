// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args13039 = [];
var len__6047__auto___13043 = arguments.length;
var i__6048__auto___13044 = (0);
while(true){
if((i__6048__auto___13044 < len__6047__auto___13043)){
args13039.push((arguments[i__6048__auto___13044]));

var G__13045 = (i__6048__auto___13044 + (1));
i__6048__auto___13044 = G__13045;
continue;
} else {
}
break;
}

var G__13042 = args13039.length;
switch (G__13042) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13039.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq13040){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13040));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args13047 = [];
var len__6047__auto___13051 = arguments.length;
var i__6048__auto___13052 = (0);
while(true){
if((i__6048__auto___13052 < len__6047__auto___13051)){
args13047.push((arguments[i__6048__auto___13052]));

var G__13053 = (i__6048__auto___13052 + (1));
i__6048__auto___13052 = G__13053;
continue;
} else {
}
break;
}

var G__13050 = args13047.length;
switch (G__13050) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13047.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq13048){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13048));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
