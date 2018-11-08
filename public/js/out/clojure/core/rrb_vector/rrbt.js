// Compiled by ClojureScript 1.7.28 {}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

clojure.core.rrb_vector.rrbt.AsRRBT = {};

clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((!((v == null))) && (!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
var x__5644__auto__ = (((v == null))?null:v);
var m__5645__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,v);
} else {
var m__5645__auto____$1 = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,v);
} else {
throw cljs.core.missing_protocol.call(null,"AsRRBT.-as-rrbt",v);
}
}
}
});


/**
* @constructor
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next.call(null,coll__$1);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest.call(null,coll__$1);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return null;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq";

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
});

clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(){
var args11154 = [];
var len__6047__auto___11157 = arguments.length;
var i__6048__auto___11158 = (0);
while(true){
if((i__6048__auto___11158 < len__6047__auto___11157)){
args11154.push((arguments[i__6048__auto___11158]));

var G__11159 = (i__6048__auto___11158 + (1));
i__6048__auto___11158 = G__11159;
continue;
} else {
}
break;
}

var G__11156 = args11154.length;
switch (G__11156) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11154.length)].join('')));

}
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for.call(null,cnt,shift,root,tail,i),i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5;
clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var rngs = ((cljs.core.not.call(null,reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__11161 = (j + (1));
j = G__11161;
continue;
}
break;
}
})());
var child_end = (cljs.core.truth_(reg_QMARK_)?(function (){var ce = cljs.core.mod.call(null,end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = clojure$core$rrb_vector$rrbt$slice_right.call(null,(arr[i__$1]),(shift - (5)),child_end);
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child));
var new_arr = (new Array((cljs.core.truth_((function (){var and__4996__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return regular_child_QMARK_;
} else {
return and__4996__auto__;
}
})())?(32):(33))));
var new_child_rng = (cljs.core.truth_(regular_child_QMARK_)?(function (){var m = cljs.core.mod.call(null,child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range.call(null,new_child)));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if(cljs.core.not.call(null,(function (){var and__4996__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return regular_child_QMARK_;
} else {
return and__4996__auto__;
}
})())){
var new_rngs_11162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_11163 = ((1) << shift);
if(cljs.core.truth_(reg_QMARK_)){
var n__5892__auto___11164 = i__$1;
var j_11165 = (0);
while(true){
if((j_11165 < n__5892__auto___11164)){
(new_rngs_11162[j_11165] = ((j_11165 + (1)) * step_11163));

var G__11166 = (j_11165 + (1));
j_11165 = G__11166;
continue;
} else {
}
break;
}
} else {
var n__5892__auto___11167 = i__$1;
var j_11168 = (0);
while(true){
if((j_11168 < n__5892__auto___11167)){
(new_rngs_11162[j_11168] = (rngs[j_11168]));

var G__11169 = (j_11168 + (1));
j_11168 = G__11169;
continue;
} else {
}
break;
}
}

(new_rngs_11162[i__$1] = ((((i__$1 > (0)))?(new_rngs_11162[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_11162[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_11162);
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy.call(null,arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var arr = node.arr;
var rngs = ((cljs.core.not.call(null,reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var i = ((start >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__11170 = (j + (1));
j = G__11170;
continue;
}
break;
}
})());
var len = (cljs.core.truth_(reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if(((i__$2 === (32))) || (((arr[i__$2]) == null))){
return i__$2;
} else {
var G__11171 = (i__$2 + (1));
i__$2 = G__11171;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__5327__auto__ = ((1) << shift);
var y__5328__auto__ = (((i__$1 > (0)))?(end - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__5327__auto__ < y__5328__auto__) ? x__5327__auto__ : y__5328__auto__);
})();
var new_child = clojure$core$rrb_vector$rrbt$slice_left.call(null,(arr[i__$1]),(shift - (5)),child_start,child_end);
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(cljs.core.truth_(reg_QMARK_)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (cljs.core.truth_((function (){var or__5008__auto__ = (new_child == null);
if(or__5008__auto__){
return or__5008__auto__;
} else {
var or__5008__auto____$1 = (shift === (5));
if(or__5008__auto____$1){
return or__5008__auto____$1;
} else {
return clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child);
}
}
})())?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range.call(null,new_child));
var step = ((1) << shift);
var j_11172 = (0);
var r_11173 = rng0;
while(true){
if((j_11172 < new_len__$1)){
(rngs__$1[j_11172] = r_11173);

var G__11174 = (j_11172 + (1));
var G__11175 = (r_11173 + step);
j_11172 = G__11174;
r_11173 = G__11175;
continue;
} else {
}
break;
}

(rngs__$1[(new_len__$1 - (1))] = (end - start));

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_11176 = (0);
var i_11177__$2 = i__$1;
while(true){
if((j_11176 < new_len__$1)){
(new_rngs[j_11176] = ((rngs[i_11177__$2]) - start));

var G__11178 = (j_11176 + (1));
var G__11179 = (i_11177__$2 + (1));
j_11176 = G__11178;
i_11177__$2 = G__11179;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);

}
}
}
});


/**
* @constructor
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
})
clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,null);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = f.call(null,init__$1,(i + j),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
if((j < lim)){
var G__11184 = i;
var G__11185 = (j + (1));
var G__11186 = init__$2;
var G__11187 = arr;
var G__11188 = lim;
var G__11189 = step;
i = G__11184;
j = G__11185;
init__$1 = G__11186;
arr = G__11187;
lim = G__11188;
step = G__11189;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__11190 = i__$1;
var G__11191 = (0);
var G__11192 = init__$2;
var G__11193 = arr__$1;
var G__11194 = lim__$1;
var G__11195 = len;
i = G__11190;
j = G__11191;
init__$1 = G__11192;
arr = G__11193;
lim = G__11194;
step = G__11195;
continue;
} else {
return init__$2;
}
}
}
break;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__11196 = i__$2;
var G__11197 = (arr__$1[idx__$1]);
var G__11198 = (shift__$2 - (5));
i__$2 = G__11196;
node__$1 = G__11197;
shift__$2 = G__11198;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__11199 = (j + (1));
j = G__11199;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__11200 = i__$2;
var G__11201 = (arr[idx]);
var G__11202 = (shift__$1 - (5));
i__$1 = G__11200;
node = G__11201;
shift__$1 = G__11202;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(((i >= (0))) && ((i < self__.cnt))){
return cljs.core._nth.call(null,this$__$1,i);
} else {
return not_found;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc.call(null,self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return cljs.core._conj.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = true;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(0));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(1));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.call(null,this$__$1,(self__.cnt - (1)));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,self__.cnt,self__.shift,clojure.core.rrb_vector.transients.editable_root.call(null,self__.root),clojure.core.rrb_vector.transients.editable_tail.call(null,self__.tail),self__.tail.length);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = true;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if(((start < (0))) || ((end > self__.cnt))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty.call(null,this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy.call(null,self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right.call(null,self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left.call(null,new_root,self__.shift,start,(function (){var x__5327__auto__ = end;
var y__5328__auto__ = tail_off;
return ((x__5327__auto__ < y__5328__auto__) ? x__5327__auto__ : y__5328__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for.call(null,new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if(((s > (5))) && (((r.arr[(1)]) == null))){
var G__11203 = (r.arr[(0)]);
var G__11204 = (s - (5));
r = G__11203;
s = G__11204;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n.call(null,this$__$1,k,v);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.call(null,self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,this$__$1,(0),(0));

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var G__11181_11205 = new_arr;
(G__11181_11205[(0)] = self__.root);

(G__11181_11205[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges.call(null,self__.root)[(31)]);
var G__11182_11206 = new_arr;
(G__11182_11206[(0)] = self__.root);

(G__11182_11206[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__11182_11206[(32)] = new_rngs);


var G__11183_11207 = new_rngs;
(G__11183_11207[(0)] = root_total_range);

(G__11183_11207[(1)] = (root_total_range + (32)));

(G__11183_11207[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__11208 = null;
var G__11208__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k);
});
var G__11208__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k,not_found);
});
G__11208 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11208__2.call(this,self__,k);
case 3:
return G__11208__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11208.cljs$core$IFn$_invoke$arity$2 = G__11208__2;
G__11208.cljs$core$IFn$_invoke$arity$3 = G__11208__3;
return G__11208;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args11180){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11180)));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.call(null,this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = true;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,this$__$1,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,that));
});

clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector";

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"clojure.core.rrb-vector.rrbt/Vector");
});

clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = true;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count.call(null,this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta.call(null,this$__$1),null));
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = true;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev.call(null,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,v),start,end);
});
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var G__11215 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__11212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__11212[(0)] = node);

return G__11212;
})());
var G__11216 = ((5) + from);
var G__11217 = to;
node = G__11215;
from = G__11216;
to = G__11217;
continue;
} else {
var G__11218 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__11213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__11213[(0)] = node);

(G__11213[(32)] = (function (){var G__11214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__11214[(0)] = clojure.core.rrb_vector.nodes.last_range.call(null,node));

(G__11214[(32)] = (1));

return G__11214;
})());

return G__11213;
})());
var G__11219 = ((5) + from);
var G__11220 = to;
node = G__11218;
from = G__11219;
to = G__11220;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
return clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__4423__auto__ = (arr[i]);
if(cljs.core.truth_(temp__4423__auto__)){
var child = temp__4423__auto__;
var G__11221 = (i + (1));
var G__11222 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__11221;
sbc = G__11222;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__11223 = (i + (1));
var G__11224 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__11223;
sbc = G__11224;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.call(null,(function (p1__11225_SHARP_){
return p1__11225_SHARP_.arr;
}),cljs.core.take.call(null,clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr),arr));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= clojure.core.rrb_vector.rrbt.max_extra_search_steps)){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
var i_11226 = (0);
var bs_11227 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__4425__auto___11228 = cljs.core.seq.call(null,bs_11227);
if(temp__4425__auto___11228){
var xs__4977__auto___11229 = temp__4425__auto___11228;
var block_11230 = cljs.core.first.call(null,xs__4977__auto___11229);
var a_11231__$1 = (new Array(cljs.core.count.call(null,block_11230)));
var i_11232__$1 = (0);
var xs_11233 = cljs.core.seq.call(null,block_11230);
while(true){
if(xs_11233){
(a_11231__$1[i_11232__$1] = cljs.core.first.call(null,xs_11233));

var G__11234 = (i_11232__$1 + (1));
var G__11235 = cljs.core.next.call(null,xs_11233);
i_11232__$1 = G__11234;
xs_11233 = G__11235;
continue;
} else {
}
break;
}

(new_arr[i_11226] = cljs.core.__GT_VectorNode.call(null,null,a_11231__$1));

var G__11236 = (i_11226 + (1));
var G__11237 = cljs.core.next.call(null,bs_11227);
i_11226 = G__11236;
bs_11227 = G__11237;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),p));
} else {
}

transferred_leaves.val = sbc2;

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
var i_11238 = (0);
var bs_11239 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n1))),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n2)))));
while(true){
var temp__4425__auto___11240 = cljs.core.seq.call(null,bs_11239);
if(temp__4425__auto___11240){
var xs__4977__auto___11241 = temp__4425__auto___11240;
var block_11242 = cljs.core.first.call(null,xs__4977__auto___11241);
var a_11243__$1 = (new Array(cljs.core.count.call(null,block_11242)));
var i_11244__$1 = (0);
var xs_11245 = cljs.core.seq.call(null,block_11242);
while(true){
if(xs_11245){
(a_11243__$1[i_11244__$1] = cljs.core.first.call(null,xs_11245));

var G__11246 = (i_11244__$1 + (1));
var G__11247 = cljs.core.next.call(null,xs_11245);
i_11244__$1 = G__11246;
xs_11245 = G__11247;
continue;
} else {
}
break;
}

if((i_11238 < (32))){
(new_arr1[i_11238] = cljs.core.__GT_VectorNode.call(null,null,a_11243__$1));
} else {
(new_arr2[(i_11238 - (32))] = cljs.core.__GT_VectorNode.call(null,null,a_11243__$1));
}

var G__11248 = (i_11238 + (1));
var G__11249 = cljs.core.next.call(null,bs_11239);
i_11238 = G__11248;
bs_11239 = G__11249;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),(p - (1024))));
} else {
}

transferred_leaves.val = ((1024) - sbc1);

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt):clojure.core.rrb_vector.nodes.ranges.call(null,node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr));
var cseq = ((function (arr,rngs,cs){
return (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,c))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,(shift - (5)),r):clojure.core.rrb_vector.nodes.ranges.call(null,c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr__$1));
return cljs.core.map.call(null,cljs.core.list,cljs.core.take.call(null,gcs,arr__$1),cljs.core.take.call(null,gcs,cljs.core.map.call(null,cljs.core._,rngs__$1,cljs.core.cons.call(null,(0),rngs__$1))));
});})(arr,rngs,cs))
;
return cljs.core.mapcat.call(null,cseq,cljs.core.take.call(null,cs,arr),cljs.core.take.call(null,cs,cljs.core.map.call(null,cljs.core._,rngs,cljs.core.cons.call(null,(0),rngs))));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= clojure.core.rrb_vector.rrbt.max_extra_search_steps)){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
var i_11254 = (0);
var bs_11255 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__4425__auto___11256 = cljs.core.seq.call(null,bs_11255);
if(temp__4425__auto___11256){
var xs__4977__auto___11257 = temp__4425__auto___11256;
var block_11258 = cljs.core.first.call(null,xs__4977__auto___11257);
var a_11259__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_11260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_11259__$1[(32)] = r_11260);

(r_11260[(32)] = cljs.core.count.call(null,block_11258));

var i_11261__$1 = (0);
var o_11262 = (0);
var gcs_11263 = cljs.core.seq.call(null,block_11258);
while(true){
var temp__4425__auto___11264__$1 = cljs.core.seq.call(null,gcs_11263);
if(temp__4425__auto___11264__$1){
var xs__4977__auto___11265__$1 = temp__4425__auto___11264__$1;
var vec__11252_11266 = cljs.core.first.call(null,xs__4977__auto___11265__$1);
var gc_11267 = cljs.core.nth.call(null,vec__11252_11266,(0),null);
var gcr_11268 = cljs.core.nth.call(null,vec__11252_11266,(1),null);
(a_11259__$1[i_11261__$1] = gc_11267);

(r_11260[i_11261__$1] = (o_11262 + gcr_11268));

var G__11269 = (i_11261__$1 + (1));
var G__11270 = (o_11262 + gcr_11268);
var G__11271 = cljs.core.next.call(null,gcs_11263);
i_11261__$1 = G__11269;
o_11262 = G__11270;
gcs_11263 = G__11271;
continue;
} else {
}
break;
}

(new_arr[i_11254] = cljs.core.__GT_VectorNode.call(null,null,a_11259__$1));

(new_rngs[i_11254] = ((r_11260[((r_11260[(32)]) - (1))]) + (((i_11254 > (0)))?(new_rngs[(i_11254 - (1))]):(0))));

(new_rngs[(32)] = (i_11254 + (1)));

var G__11272 = (i_11254 + (1));
var G__11273 = cljs.core.next.call(null,bs_11255);
i_11254 = G__11272;
bs_11255 = G__11273;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

transferred_leaves.val = cnt2;

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
var i_11274 = (0);
var bs_11275 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__4425__auto___11276 = cljs.core.seq.call(null,bs_11275);
if(temp__4425__auto___11276){
var xs__4977__auto___11277 = temp__4425__auto___11276;
var block_11278 = cljs.core.first.call(null,xs__4977__auto___11277);
var a_11279__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_11280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_11279__$1[(32)] = r_11280);

(r_11280[(32)] = cljs.core.count.call(null,block_11278));

var i_11281__$1 = (0);
var o_11282 = (0);
var gcs_11283 = cljs.core.seq.call(null,block_11278);
while(true){
var temp__4425__auto___11284__$1 = cljs.core.seq.call(null,gcs_11283);
if(temp__4425__auto___11284__$1){
var xs__4977__auto___11285__$1 = temp__4425__auto___11284__$1;
var vec__11253_11286 = cljs.core.first.call(null,xs__4977__auto___11285__$1);
var gc_11287 = cljs.core.nth.call(null,vec__11253_11286,(0),null);
var gcr_11288 = cljs.core.nth.call(null,vec__11253_11286,(1),null);
(a_11279__$1[i_11281__$1] = gc_11287);

(r_11280[i_11281__$1] = (o_11282 + gcr_11288));

var G__11289 = (i_11281__$1 + (1));
var G__11290 = (o_11282 + gcr_11288);
var G__11291 = cljs.core.next.call(null,gcs_11283);
i_11281__$1 = G__11289;
o_11282 = G__11290;
gcs_11283 = G__11291;
continue;
} else {
}
break;
}

if(((i_11274 < (32))) && ((((i_11274 * (32)) + cljs.core.count.call(null,block_11278)) > sbc1))){
var tbs_11292 = (((i_11274 * (32)) + cljs.core.count.call(null,block_11278)) - sbc1);
var li_11293 = ((r_11280[(32)]) - (1));
var d_11294 = (((tbs_11292 >= (32)))?(r_11280[li_11293]):((r_11280[li_11293]) - (r_11280[(li_11293 - tbs_11292)])));
transferred_leaves.val = (transferred_leaves.val + d_11294);
} else {
}

var new_arr_11295 = (((i_11274 < (32)))?new_arr1:new_arr2);
var new_rngs_11296 = (((i_11274 < (32)))?new_rngs1:new_rngs2);
var i_11297__$1 = cljs.core.mod.call(null,i_11274,(32));
(new_arr_11295[i_11297__$1] = cljs.core.__GT_VectorNode.call(null,null,a_11279__$1));

(new_rngs_11296[i_11297__$1] = ((r_11280[((r_11280[(32)]) - (1))]) + (((i_11297__$1 > (0)))?(new_rngs_11296[(i_11297__$1 - (1))]):(0))));

(new_rngs_11296[(32)] = (i_11297__$1 + (1)));

var G__11298 = (i_11274 + (1));
var G__11299 = cljs.core.next.call(null,bs_11275);
i_11274 = G__11298;
bs_11275 = G__11299;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves.call(null,n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child.call(null,n1);
var c2 = clojure.core.rrb_vector.nodes.first_child.call(null,n2);
var ccnt1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?(function (){var m = cljs.core.mod.call(null,cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?(function (){var m = cljs.core.mod.call(null,cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.ranges.call(null,n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__11301 = clojure$core$rrb_vector$rrbt$zippath.call(null,(shift - (5)),c1,ccnt1,c2,ccnt2,next_transferred_leaves);
var new_c1 = cljs.core.nth.call(null,vec__11301,(0),null);
var new_c2 = cljs.core.nth.call(null,vec__11301,(1),null);
var d = next_transferred_leaves.val;
transferred_leaves.val = (transferred_leaves.val + d);

return clojure.core.rrb_vector.rrbt.rebalance.call(null,shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child.call(null,shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child.call(null,shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child.call(null,shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr2);
var slots = cljs.core.concat.call(null,cljs.core.take.call(null,li1,arr1),cljs.core.take.call(null,li2,arr2));
if((cljs.core.count.call(null,slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.call(null,li1,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt1):clojure.core.rrb_vector.nodes.ranges.call(null,n1)));
var rngs2 = cljs.core.take.call(null,li2,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt2):clojure.core.rrb_vector.nodes.ranges.call(null,n2)));
var rngs2__$1 = (function (){var r = cljs.core.last.call(null,rngs1);
return cljs.core.map.call(null,((function (r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots){
return (function (p1__11302_SHARP_){
return (p1__11302_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots))
,rngs2);
})();
var rngs = cljs.core.concat.call(null,rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_11303 = (0);
var cs_11304 = cljs.core.seq.call(null,slots);
while(true){
if(cs_11304){
(new_arr[i_11303] = cljs.core.first.call(null,cs_11304));

var G__11305 = (i_11303 + (1));
var G__11306 = cljs.core.next.call(null,cs_11304);
i_11303 = G__11305;
cs_11304 = G__11306;
continue;
} else {
}
break;
}

var i_11307 = (0);
var rngs_11308__$1 = cljs.core.seq.call(null,rngs);
while(true){
if(rngs_11308__$1){
(new_rngs[i_11307] = cljs.core.first.call(null,rngs_11308__$1));

var G__11309 = (i_11307 + (1));
var G__11310 = cljs.core.next.call(null,rngs_11308__$1);
i_11307 = G__11309;
rngs_11308__$1 = G__11310;
continue;
} else {
(new_rngs[(32)] = i_11307);
}
break;
}

return [cljs.core.__GT_VectorNode.call(null,null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count.call(null,v1) === (0))){
return v2;
} else {
if((cljs.core.count.call(null,v2) < clojure.core.rrb_vector.rrbt.rrbt_concat_threshold)){
return cljs.core.into.call(null,v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,r1,s1,(cljs.core.count.call(null,v1) + ((32) - v1.tail.length)));
var r1__$1 = (cljs.core.truth_(o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode.call(null,null,tail);
var reg_QMARK_ = (function (){var and__4996__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,r1);
if(cljs.core.truth_(and__4996__auto__)){
return (tail.length === (32));
} else {
return and__4996__auto__;
}
})();
var arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,s1,tail_node));

if(cljs.core.not.call(null,reg_QMARK_)){
var rngs_11317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_11317[(32)] = (2));

(rngs_11317[(0)] = (cljs.core.count.call(null,v1) - tail.length));

(rngs_11317[(1)] = cljs.core.count.call(null,v1));

(arr[(32)] = rngs_11317);
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail.call(null,r1,s1,clojure.core.rrb_vector.trees.tail_offset.call(null,v1.cnt,v1.tail),v1.tail));
var s1__$1 = (cljs.core.truth_(o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__5320__auto__ = s1__$1;
var y__5321__auto__ = s2;
return ((x__5320__auto__ > y__5321__auto__) ? x__5320__auto__ : y__5321__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__11314 = clojure.core.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.call(null,vec__11314,(0),null);
var n2 = cljs.core.nth.call(null,vec__11314,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count.call(null,v1) + d);
var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);
var vec__11315 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.call(null,vec__11315,(0),null);
var n2__$1 = cljs.core.nth.call(null,vec__11315,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__11316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__11316[(0)] = ncnt1__$1);

(G__11316[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__11316[(32)] = (2));

return G__11316;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if(((s__$1 > (5))) && (((r.arr[(1)]) == null))){
var G__11318 = (r.arr[(0)]);
var G__11319 = (s__$1 - (5));
r = G__11318;
s__$1 = G__11319;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

self__.cnt = (self__.cnt + (1));

self__.tidx = (self__.tidx + (1));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

self__.tidx = (1);

if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__11320_11323 = new_arr;
(G__11320_11323[(0)] = self__.root);

(G__11320_11323[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));


self__.root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges.call(null,self__.root)[(31)]);
var G__11321_11324 = new_arr;
(G__11321_11324[(0)] = self__.root);

(G__11321_11324[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__11321_11324[(32)] = new_rngs);


var G__11322_11325 = new_rngs;
(G__11322_11325[(0)] = root_total_range);

(G__11322_11325[(1)] = (root_total_range + (32)));

(G__11322_11325[(32)] = (2));


self__.root = new_root;

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy.call(null,self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n_BANG_.call(null,this$__$1,key,val);
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,self__.shift,self__.root.edit,self__.root,i,val);
}

return this$__$1;
} else {
if((i === self__.cnt)){
return cljs.core._conj_BANG_.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

self__.tidx = (0);

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
self__.cnt = (self__.cnt - (1));

self__.tidx = (self__.tidx - (1));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone.call(null,new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
self__.cnt = (self__.cnt - (1));

self__.root = clojure.core.rrb_vector.transients.ensure_editable.call(null,self__.root.edit,clojure.core.rrb_vector.nodes.empty_node);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
self__.cnt = (self__.cnt - (1));

self__.shift = (self__.shift - (5));

self__.root = (new_root.arr[(0)]);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
self__.cnt = (self__.cnt - (1));

self__.root = new_root;

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tidx","tidx",1939123455,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient";

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"clojure.core.rrb-vector.rrbt/Transient");
});

clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});

