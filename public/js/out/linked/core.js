// Compiled by ClojureScript 1.10.238 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(var_args){
var G__9141 = arguments.length;
switch (G__9141) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___9143 = arguments.length;
var i__4500__auto___9144 = (0);
while(true){
if((i__4500__auto___9144 < len__4499__auto___9143)){
args_arr__4514__auto__.push((arguments[i__4500__auto___9144]));

var G__9145 = (i__4500__auto___9144 + (1));
i__4500__auto___9144 = G__9145;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((0)),(0),null));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4515__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

/** @this {Function} */
linked.core.map.cljs$lang$applyTo = (function (seq9140){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9140));
});

linked.core.map.cljs$lang$maxFixedArity = (0);

linked.core.set = (function linked$core$set(var_args){
var G__9148 = arguments.length;
switch (G__9148) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___9150 = arguments.length;
var i__4500__auto___9151 = (0);
while(true){
if((i__4500__auto___9151 < len__4499__auto___9150)){
args_arr__4514__auto__.push((arguments[i__4500__auto___9151]));

var G__9152 = (i__4500__auto___9151 + (1));
i__4500__auto___9151 = G__9152;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((0)),(0),null));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4515__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

/** @this {Function} */
linked.core.set.cljs$lang$applyTo = (function (seq9147){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9147));
});

linked.core.set.cljs$lang$maxFixedArity = (0);

