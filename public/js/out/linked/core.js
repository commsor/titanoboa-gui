// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(){
var args12966 = [];
var len__6047__auto___12970 = arguments.length;
var i__6048__auto___12971 = (0);
while(true){
if((i__6048__auto___12971 < len__6047__auto___12970)){
args12966.push((arguments[i__6048__auto___12971]));

var G__12972 = (i__6048__auto___12971 + (1));
i__6048__auto___12971 = G__12972;
continue;
} else {
}
break;
}

var G__12969 = args12966.length;
switch (G__12969) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args12966.slice((0)),(0)));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.call(null,cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

linked.core.map.cljs$lang$applyTo = (function (seq12967){
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12967));
});

linked.core.map.cljs$lang$maxFixedArity = (0);
linked.core.set = (function linked$core$set(){
var args12974 = [];
var len__6047__auto___12978 = arguments.length;
var i__6048__auto___12979 = (0);
while(true){
if((i__6048__auto___12979 < len__6047__auto___12978)){
args12974.push((arguments[i__6048__auto___12979]));

var G__12980 = (i__6048__auto___12979 + (1));
i__6048__auto___12979 = G__12980;
continue;
} else {
}
break;
}

var G__12977 = args12974.length;
switch (G__12977) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args12974.slice((0)),(0)));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__6066__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.call(null,cljs.core.conj,linked.set.empty_linked_set,keys);
});

linked.core.set.cljs$lang$applyTo = (function (seq12975){
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12975));
});

linked.core.set.cljs$lang$maxFixedArity = (0);
