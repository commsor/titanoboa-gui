// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args13026 = [];
var len__6047__auto___13030 = arguments.length;
var i__6048__auto___13031 = (0);
while(true){
if((i__6048__auto___13031 < len__6047__auto___13030)){
args13026.push((arguments[i__6048__auto___13031]));

var G__13032 = (i__6048__auto___13031 + (1));
i__6048__auto___13031 = G__13032;
continue;
} else {
}
break;
}

var G__13029 = args13026.length;
switch (G__13029) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13026.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq13027){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13027));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args13034 = [];
var len__6047__auto___13038 = arguments.length;
var i__6048__auto___13039 = (0);
while(true){
if((i__6048__auto___13039 < len__6047__auto___13038)){
args13034.push((arguments[i__6048__auto___13039]));

var G__13040 = (i__6048__auto___13039 + (1));
i__6048__auto___13039 = G__13040;
continue;
} else {
}
break;
}

var G__13037 = args13034.length;
switch (G__13037) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13034.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq13035){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13035));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
