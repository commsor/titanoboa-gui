// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args13002 = [];
var len__6047__auto___13006 = arguments.length;
var i__6048__auto___13007 = (0);
while(true){
if((i__6048__auto___13007 < len__6047__auto___13006)){
args13002.push((arguments[i__6048__auto___13007]));

var G__13008 = (i__6048__auto___13007 + (1));
i__6048__auto___13007 = G__13008;
continue;
} else {
}
break;
}

var G__13005 = args13002.length;
switch (G__13005) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13002.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq13003){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13003));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args13010 = [];
var len__6047__auto___13014 = arguments.length;
var i__6048__auto___13015 = (0);
while(true){
if((i__6048__auto___13015 < len__6047__auto___13014)){
args13010.push((arguments[i__6048__auto___13015]));

var G__13016 = (i__6048__auto___13015 + (1));
i__6048__auto___13015 = G__13016;
continue;
} else {
}
break;
}

var G__13013 = args13010.length;
switch (G__13013) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args13010.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq13011){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13011));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
