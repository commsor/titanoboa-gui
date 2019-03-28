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
var args11141 = [];
var len__6047__auto___11149 = arguments.length;
var i__6048__auto___11150 = (0);
while(true){
if((i__6048__auto___11150 < len__6047__auto___11149)){
args11141.push((arguments[i__6048__auto___11150]));

var G__11151 = (i__6048__auto___11150 + (1));
i__6048__auto___11150 = G__11151;
continue;
} else {
}
break;
}

var G__11148 = args11141.length;
switch (G__11148) {
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
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args11141.slice((4)),(0)));
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

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq11142){
var G__11143 = cljs.core.first.call(null,seq11142);
var seq11142__$1 = cljs.core.next.call(null,seq11142);
var G__11144 = cljs.core.first.call(null,seq11142__$1);
var seq11142__$2 = cljs.core.next.call(null,seq11142__$1);
var G__11145 = cljs.core.first.call(null,seq11142__$2);
var seq11142__$3 = cljs.core.next.call(null,seq11142__$2);
var G__11146 = cljs.core.first.call(null,seq11142__$3);
var seq11142__$4 = cljs.core.next.call(null,seq11142__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__11143,G__11144,G__11145,G__11146,seq11142__$4);
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
var args11153 = [];
var len__6047__auto___11156 = arguments.length;
var i__6048__auto___11157 = (0);
while(true){
if((i__6048__auto___11157 < len__6047__auto___11156)){
args11153.push((arguments[i__6048__auto___11157]));

var G__11158 = (i__6048__auto___11157 + (1));
i__6048__auto___11157 = G__11158;
continue;
} else {
}
break;
}

var G__11155 = args11153.length;
switch (G__11155) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11153.length)].join('')));

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
var args11160 = [];
var len__6047__auto___11173 = arguments.length;
var i__6048__auto___11174 = (0);
while(true){
if((i__6048__auto___11174 < len__6047__auto___11173)){
args11160.push((arguments[i__6048__auto___11174]));

var G__11175 = (i__6048__auto___11174 + (1));
i__6048__auto___11174 = G__11175;
continue;
} else {
}
break;
}

var G__11167 = args11160.length;
switch (G__11167) {
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
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args11160.slice((4)),(0)));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__6066__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__11168 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11168,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__11169 = [null];
(arr__11169[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11169,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__11170 = [null,null];
(arr__11170[(0)] = x1);

(arr__11170[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11170,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__11171 = [null,null,null];
(arr__11171[(0)] = x1);

(arr__11171[(1)] = x2);

(arr__11171[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11171,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__11172 = [null,null,null,null];
(arr__11172[(0)] = x1);

(arr__11172[(1)] = x2);

(arr__11172[(2)] = x3);

(arr__11172[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11172,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq11161){
var G__11162 = cljs.core.first.call(null,seq11161);
var seq11161__$1 = cljs.core.next.call(null,seq11161);
var G__11163 = cljs.core.first.call(null,seq11161__$1);
var seq11161__$2 = cljs.core.next.call(null,seq11161__$1);
var G__11164 = cljs.core.first.call(null,seq11161__$2);
var seq11161__$3 = cljs.core.next.call(null,seq11161__$2);
var G__11165 = cljs.core.first.call(null,seq11161__$3);
var seq11161__$4 = cljs.core.next.call(null,seq11161__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__11162,G__11163,G__11164,G__11165,seq11161__$4);
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
