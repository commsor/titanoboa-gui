// Compiled by ClojureScript 1.7.28 {}
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5761__auto__ = (function re_com$util$fmap_$_iter__12948(s__12949){
return (new cljs.core.LazySeq(null,(function (){
var s__12949__$1 = s__12949;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12949__$1);
if(temp__4425__auto__){
var s__12949__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12949__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12949__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12951 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12950 = (0);
while(true){
if((i__12950 < size__5760__auto__)){
var vec__12954 = cljs.core._nth.call(null,c__5759__auto__,i__12950);
var k = cljs.core.nth.call(null,vec__12954,(0),null);
var val = cljs.core.nth.call(null,vec__12954,(1),null);
cljs.core.chunk_append.call(null,b__12951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__12956 = (i__12950 + (1));
i__12950 = G__12956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12951),re_com$util$fmap_$_iter__12948.call(null,cljs.core.chunk_rest.call(null,s__12949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12951),null);
}
} else {
var vec__12955 = cljs.core.first.call(null,s__12949__$2);
var k = cljs.core.nth.call(null,vec__12955,(0),null);
var val = cljs.core.nth.call(null,vec__12955,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__12948.call(null,cljs.core.rest.call(null,s__12949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5761__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(){
var args__6054__auto__ = [];
var len__6047__auto___12958 = arguments.length;
var i__6048__auto___12959 = (0);
while(true){
if((i__6048__auto___12959 < len__6047__auto___12958)){
args__6054__auto__.push((arguments[i__6048__auto___12959]));

var G__12960 = (i__6048__auto___12959 + (1));
i__6048__auto___12959 = G__12960;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq12957){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12957));
});
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
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
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(){
var args__6054__auto__ = [];
var len__6047__auto___12965 = arguments.length;
var i__6048__auto___12966 = (0);
while(true){
if((i__6048__auto___12966 < len__6047__auto___12965)){
args__6054__auto__.push((arguments[i__6048__auto___12966]));

var G__12967 = (i__6048__auto___12966 + (1));
i__6048__auto___12966 = G__12967;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?((0) - val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq12963){
var G__12964 = cljs.core.first.call(null,seq12963);
var seq12963__$1 = cljs.core.next.call(null,seq12963);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__12964,seq12963__$1);
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
re_com.util.position_for_id = (function re_com$util$position_for_id(){
var args__6054__auto__ = [];
var len__6047__auto___12974 = arguments.length;
var i__6048__auto___12975 = (0);
while(true){
if((i__6048__auto___12975 < len__6047__auto___12974)){
args__6054__auto__.push((arguments[i__6048__auto___12975]));

var G__12976 = (i__6048__auto___12975 + (1));
i__6048__auto___12975 = G__12976;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12971){
var map__12972 = p__12971;
var map__12972__$1 = ((((!((map__12972 == null)))?((((map__12972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12972):map__12972);
var id_fn = cljs.core.get.call(null,map__12972__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__12972,map__12972__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__12972,map__12972__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq12968){
var G__12969 = cljs.core.first.call(null,seq12968);
var seq12968__$1 = cljs.core.next.call(null,seq12968);
var G__12970 = cljs.core.first.call(null,seq12968__$1);
var seq12968__$2 = cljs.core.next.call(null,seq12968__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12969,G__12970,seq12968__$2);
});
/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(){
var args__6054__auto__ = [];
var len__6047__auto___12984 = arguments.length;
var i__6048__auto___12985 = (0);
while(true){
if((i__6048__auto___12985 < len__6047__auto___12984)){
args__6054__auto__.push((arguments[i__6048__auto___12985]));

var G__12986 = (i__6048__auto___12985 + (1));
i__6048__auto___12985 = G__12986;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12981){
var map__12982 = p__12981;
var map__12982__$1 = ((((!((map__12982 == null)))?((((map__12982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12982):map__12982);
var id_fn = cljs.core.get.call(null,map__12982__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__12982,map__12982__$1,id_fn){
return (function (p1__12977_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__12977_SHARP_),id);
});})(map__12982,map__12982__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq12978){
var G__12979 = cljs.core.first.call(null,seq12978);
var seq12978__$1 = cljs.core.next.call(null,seq12978);
var G__12980 = cljs.core.first.call(null,seq12978__$1);
var seq12978__$2 = cljs.core.next.call(null,seq12978__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12979,G__12980,seq12978__$2);
});
/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 * Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(){
var args__6054__auto__ = [];
var len__6047__auto___12994 = arguments.length;
var i__6048__auto___12995 = (0);
while(true){
if((i__6048__auto___12995 < len__6047__auto___12994)){
args__6054__auto__.push((arguments[i__6048__auto___12995]));

var G__12996 = (i__6048__auto___12995 + (1));
i__6048__auto___12995 = G__12996;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12991){
var map__12992 = p__12991;
var map__12992__$1 = ((((!((map__12992 == null)))?((((map__12992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12992):map__12992);
var id_fn = cljs.core.get.call(null,map__12992__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__12992,map__12992__$1,id_fn){
return (function (p1__12987_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__12987_SHARP_),id);
});})(map__12992,map__12992__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq12988){
var G__12989 = cljs.core.first.call(null,seq12988);
var seq12988__$1 = cljs.core.next.call(null,seq12988);
var G__12990 = cljs.core.first.call(null,seq12988__$1);
var seq12988__$2 = cljs.core.next.call(null,seq12988__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__12989,G__12990,seq12988__$2);
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
var G__12997 = current_node.parentNode;
var G__12998 = (sum_scroll_left + current_node.scrollLeft);
var G__12999 = (sum_scroll_top + current_node.scrollTop);
current_node = G__12997;
sum_scroll_left = G__12998;
sum_scroll_top = G__12999;
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
