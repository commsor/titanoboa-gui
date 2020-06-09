// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function re_com$util$fmap_$_iter__5907(s__5908){
return (new cljs.core.LazySeq(null,(function (){
var s__5908__$1 = s__5908;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__5908__$1);
if(temp__5720__auto__){
var s__5908__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5908__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5908__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5910 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5909 = (0);
while(true){
if((i__5909 < size__4291__auto__)){
var vec__5911 = cljs.core._nth.call(null,c__4290__auto__,i__5909);
var k = cljs.core.nth.call(null,vec__5911,(0),null);
var val = cljs.core.nth.call(null,vec__5911,(1),null);
cljs.core.chunk_append.call(null,b__5910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__5917 = (i__5909 + (1));
i__5909 = G__5917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5910),re_com$util$fmap_$_iter__5907.call(null,cljs.core.chunk_rest.call(null,s__5908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5910),null);
}
} else {
var vec__5914 = cljs.core.first.call(null,s__5908__$2);
var k = cljs.core.nth.call(null,vec__5914,(0),null);
var val = cljs.core.nth.call(null,vec__5914,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__5907.call(null,cljs.core.rest.call(null,s__5908__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5919 = arguments.length;
var i__4500__auto___5920 = (0);
while(true){
if((i__4500__auto___5920 < len__4499__auto___5919)){
args__4502__auto__.push((arguments[i__4500__auto___5920]));

var G__5921 = (i__4500__auto___5920 + (1));
i__4500__auto___5920 = G__5921;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.util.deep_merge.cljs$lang$applyTo = (function (seq5918){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5918));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5925 = arguments.length;
var i__4500__auto___5926 = (0);
while(true){
if((i__4500__auto___5926 < len__4499__auto___5925)){
args__4502__auto__.push((arguments[i__4500__auto___5926]));

var G__5927 = (i__4500__auto___5926 + (1));
i__4500__auto___5926 = G__5927;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?((0) - val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
re_com.util.px.cljs$lang$applyTo = (function (seq5923){
var G__5924 = cljs.core.first.call(null,seq5923);
var seq5923__$1 = cljs.core.next.call(null,seq5923);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5924,seq5923__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5934 = arguments.length;
var i__4500__auto___5935 = (0);
while(true){
if((i__4500__auto___5935 < len__4499__auto___5934)){
args__4502__auto__.push((arguments[i__4500__auto___5935]));

var G__5936 = (i__4500__auto___5935 + (1));
i__4500__auto___5935 = G__5936;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__5931){
var map__5932 = p__5931;
var map__5932__$1 = ((((!((map__5932 == null)))?(((((map__5932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5932):map__5932);
var id_fn = cljs.core.get.call(null,map__5932__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__5932,map__5932__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__5932,map__5932__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.position_for_id.cljs$lang$applyTo = (function (seq5928){
var G__5929 = cljs.core.first.call(null,seq5928);
var seq5928__$1 = cljs.core.next.call(null,seq5928);
var G__5930 = cljs.core.first.call(null,seq5928__$1);
var seq5928__$2 = cljs.core.next.call(null,seq5928__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5929,G__5930,seq5928__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5944 = arguments.length;
var i__4500__auto___5945 = (0);
while(true){
if((i__4500__auto___5945 < len__4499__auto___5944)){
args__4502__auto__.push((arguments[i__4500__auto___5945]));

var G__5946 = (i__4500__auto___5945 + (1));
i__4500__auto___5945 = G__5946;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__5941){
var map__5942 = p__5941;
var map__5942__$1 = ((((!((map__5942 == null)))?(((((map__5942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5942):map__5942);
var id_fn = cljs.core.get.call(null,map__5942__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__5942,map__5942__$1,id_fn){
return (function (p1__5937_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__5937_SHARP_),id);
});})(map__5942,map__5942__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.item_for_id.cljs$lang$applyTo = (function (seq5938){
var G__5939 = cljs.core.first.call(null,seq5938);
var seq5938__$1 = cljs.core.next.call(null,seq5938);
var G__5940 = cljs.core.first.call(null,seq5938__$1);
var seq5938__$2 = cljs.core.next.call(null,seq5938__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5939,G__5940,seq5938__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5954 = arguments.length;
var i__4500__auto___5955 = (0);
while(true){
if((i__4500__auto___5955 < len__4499__auto___5954)){
args__4502__auto__.push((arguments[i__4500__auto___5955]));

var G__5956 = (i__4500__auto___5955 + (1));
i__4500__auto___5955 = G__5956;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__5951){
var map__5952 = p__5951;
var map__5952__$1 = ((((!((map__5952 == null)))?(((((map__5952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5952):map__5952);
var id_fn = cljs.core.get.call(null,map__5952__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__5952,map__5952__$1,id_fn){
return (function (p1__5947_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__5947_SHARP_),id);
});})(map__5952,map__5952__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq5948){
var G__5949 = cljs.core.first.call(null,seq5948);
var seq5948__$1 = cljs.core.next.call(null,seq5948);
var G__5950 = cljs.core.first.call(null,seq5948__$1);
var seq5948__$2 = cljs.core.next.call(null,seq5948__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5949,G__5950,seq5948__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__5957 = current_node.parentNode;
var G__5958 = (sum_scroll_left + current_node.scrollLeft);
var G__5959 = (sum_scroll_top + current_node.scrollTop);
current_node = G__5957;
sum_scroll_left = G__5958;
sum_scroll_top = G__5959;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});
