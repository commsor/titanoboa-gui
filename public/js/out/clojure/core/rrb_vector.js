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
var args11143 = [];
var len__6047__auto___11151 = arguments.length;
var i__6048__auto___11152 = (0);
while(true){
if((i__6048__auto___11152 < len__6047__auto___11151)){
args11143.push((arguments[i__6048__auto___11152]));

var G__11153 = (i__6048__auto___11152 + (1));
i__6048__auto___11152 = G__11153;
continue;
} else {
}
break;
}

var G__11150 = args11143.length;
switch (G__11150) {
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
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args11143.slice((4)),(0)));
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

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq11144){
var G__11145 = cljs.core.first.call(null,seq11144);
var seq11144__$1 = cljs.core.next.call(null,seq11144);
var G__11146 = cljs.core.first.call(null,seq11144__$1);
var seq11144__$2 = cljs.core.next.call(null,seq11144__$1);
var G__11147 = cljs.core.first.call(null,seq11144__$2);
var seq11144__$3 = cljs.core.next.call(null,seq11144__$2);
var G__11148 = cljs.core.first.call(null,seq11144__$3);
var seq11144__$4 = cljs.core.next.call(null,seq11144__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__11145,G__11146,G__11147,G__11148,seq11144__$4);
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
var args11155 = [];
var len__6047__auto___11158 = arguments.length;
var i__6048__auto___11159 = (0);
while(true){
if((i__6048__auto___11159 < len__6047__auto___11158)){
args11155.push((arguments[i__6048__auto___11159]));

var G__11160 = (i__6048__auto___11159 + (1));
i__6048__auto___11159 = G__11160;
continue;
} else {
}
break;
}

var G__11157 = args11155.length;
switch (G__11157) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11155.length)].join('')));

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
var args11162 = [];
var len__6047__auto___11175 = arguments.length;
var i__6048__auto___11176 = (0);
while(true){
if((i__6048__auto___11176 < len__6047__auto___11175)){
args11162.push((arguments[i__6048__auto___11176]));

var G__11177 = (i__6048__auto___11176 + (1));
i__6048__auto___11176 = G__11177;
continue;
} else {
}
break;
}

var G__11169 = args11162.length;
switch (G__11169) {
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
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args11162.slice((4)),(0)));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__6066__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__11170 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11170,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__11171 = [null];
(arr__11171[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11171,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__11172 = [null,null];
(arr__11172[(0)] = x1);

(arr__11172[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11172,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__11173 = [null,null,null];
(arr__11173[(0)] = x1);

(arr__11173[(1)] = x2);

(arr__11173[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11173,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__11174 = [null,null,null,null];
(arr__11174[(0)] = x1);

(arr__11174[(1)] = x2);

(arr__11174[(2)] = x3);

(arr__11174[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__11174,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq11163){
var G__11164 = cljs.core.first.call(null,seq11163);
var seq11163__$1 = cljs.core.next.call(null,seq11163);
var G__11165 = cljs.core.first.call(null,seq11163__$1);
var seq11163__$2 = cljs.core.next.call(null,seq11163__$1);
var G__11166 = cljs.core.first.call(null,seq11163__$2);
var seq11163__$3 = cljs.core.next.call(null,seq11163__$2);
var G__11167 = cljs.core.first.call(null,seq11163__$3);
var seq11163__$4 = cljs.core.next.call(null,seq11163__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__11164,G__11165,G__11166,G__11167,seq11163__$4);
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
