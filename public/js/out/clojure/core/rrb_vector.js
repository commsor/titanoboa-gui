// Compiled by ClojureScript 1.7.28 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(){
var args11061 = [];
var len__6047__auto___11069 = arguments.length;
var i__6048__auto___11070 = (0);
while(true){
if((i__6048__auto___11070 < len__6047__auto___11069)){
args11061.push((arguments[i__6048__auto___11070]));

var G__11071 = (i__6048__auto___11070 + (1));
i__6048__auto___11070 = G__11071;
continue;
} else {
}
break;
}

var G__11068 = args11061.length;
switch (G__11068) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args11061.slice((4)),(0)));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__6066__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq11062){
var G__11063 = cljs.core.first.call(null,seq11062);
var seq11062__$1 = cljs.core.next.call(null,seq11062);
var G__11064 = cljs.core.first.call(null,seq11062__$1);
var seq11062__$2 = cljs.core.next.call(null,seq11062__$1);
var G__11065 = cljs.core.first.call(null,seq11062__$2);
var seq11062__$3 = cljs.core.next.call(null,seq11062__$2);
var G__11066 = cljs.core.first.call(null,seq11062__$3);
var seq11062__$4 = cljs.core.next.call(null,seq11062__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__11063,G__11064,G__11065,G__11066,seq11062__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);
/**
 * Returns a new vector containing the elements of the given vector v
 * lying between the start (inclusive) and end (exclusive) indices in
 * logarithmic time. end defaults to end of vector. The resulting
 * vector shares structure with the original, but does not hold on to
 * any elements of the original vector lying outside the given index
 * range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(){
var args11073 = [];
var len__6047__auto___11076 = arguments.length;
var i__6048__auto___11077 = (0);
while(true){
if((i__6048__auto___11077 < len__6047__auto___11076)){
args11073.push((arguments[i__6048__auto___11077]));

var G__11078 = (i__6048__auto___11077 + (1));
i__6048__auto___11077 = G__11078;
continue;
} else {
}
break;
}

var G__11075 = args11073.length;
switch (G__11075) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11073.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;
/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(){
var args11080 = [];
var len__6047__auto___11093 = arguments.length;
var i__6048__auto___11094 = (0);
while(true){
if((i__6048__auto___11094 < len__6047__auto___11093)){
args11080.push((arguments[i__6048__auto___11094]));

var G__11095 = (i__6048__auto___11094 + (1));
i__6048__auto___11094 = G__11095;
continue;
} else {
}
break;
}

var G__11087 = args11080.length;
switch (G__11087) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args11080.slice((4)),(0)));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__6066__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__11088 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11088,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__11089 = [null];
(arr__11089[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11089,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__11090 = [null,null];
(arr__11090[(0)] = x1);

(arr__11090[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11090,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__11091 = [null,null,null];
(arr__11091[(0)] = x1);

(arr__11091[(1)] = x2);

(arr__11091[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11091,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__11092 = [null,null,null,null];
(arr__11092[(0)] = x1);

(arr__11092[(1)] = x2);

(arr__11092[(2)] = x3);

(arr__11092[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11092,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq11081){
var G__11082 = cljs.core.first.call(null,seq11081);
var seq11081__$1 = cljs.core.next.call(null,seq11081);
var G__11083 = cljs.core.first.call(null,seq11081__$1);
var seq11081__$2 = cljs.core.next.call(null,seq11081__$1);
var G__11084 = cljs.core.first.call(null,seq11081__$2);
var seq11081__$3 = cljs.core.next.call(null,seq11081__$2);
var G__11085 = cljs.core.first.call(null,seq11081__$3);
var seq11081__$4 = cljs.core.next.call(null,seq11081__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__11082,G__11083,G__11084,G__11085,seq11081__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);
/**
 * Returns a vector containing the contents of coll.
 * 
 * If coll is a vector, returns an RRB vector using the internal tree
 * of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});
