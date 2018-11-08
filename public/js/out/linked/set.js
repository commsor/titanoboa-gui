// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.set');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('clojure.string');
goog.require('cljs.reader');

/**
* @constructor
*/
linked.set.LinkedSet = (function (linked_map){
this.linked_map = linked_map;
this.cljs$lang$protocol_mask$partition0$ = 2313556239;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
linked.set.LinkedSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str("["),cljs.core.str(clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.str,this$))),cljs.core.str("]")].join('');
});

linked.set.LinkedSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

linked.set.LinkedSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,v,null);
});

linked.set.LinkedSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_.call(null,self__.linked_map,v)){
return v;
} else {
return not_found;
}
});

linked.set.LinkedSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#linked/set "),cljs.core.str(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,coll__$1))].join(''));
});

linked.set.LinkedSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.meta.call(null,self__.linked_map);
});

linked.set.LinkedSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new linked.set.LinkedSet(self__.linked_map));
});

linked.set.LinkedSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count.call(null,self__.linked_map);
});

linked.set.LinkedSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4425__auto__ = cljs.core.rseq.call(null,self__.linked_map);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs.core.map.call(null,cljs.core.key,s);
} else {
return null;
}
});

linked.set.LinkedSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,coll__$1));
});

linked.set.LinkedSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (coll__$1){
return (function (p1__13066_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll__$1,p1__13066_SHARP_);
});})(coll__$1))
,other));
});

linked.set.LinkedSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,linked.set.empty_linked_set,cljs.core.meta);
});

linked.set.LinkedSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new linked.set.LinkedSet(cljs.core._dissoc.call(null,self__.linked_map,v)));
});

linked.set.LinkedSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4425__auto__ = cljs.core.seq.call(null,self__.linked_map);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs.core.map.call(null,cljs.core.key,s);
} else {
return null;
}
});

linked.set.LinkedSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var self__ = this;
var coll__$1 = this;
return (new linked.set.LinkedSet(cljs.core.with_meta.call(null,self__.linked_map,meta)));
});

linked.set.LinkedSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new linked.set.LinkedSet(cljs.core.assoc.call(null,self__.linked_map,o,null)));
});

linked.set.LinkedSet.prototype.call = (function() {
var G__13068 = null;
var G__13068__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__13068__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13068 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13068__2.call(this,self__,k);
case 3:
return G__13068__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13068.cljs$core$IFn$_invoke$arity$2 = G__13068__2;
G__13068.cljs$core$IFn$_invoke$arity$3 = G__13068__3;
return G__13068;
})()
;

linked.set.LinkedSet.prototype.apply = (function (self__,args13067){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13067)));
});

linked.set.LinkedSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

linked.set.LinkedSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

linked.set.LinkedSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"linked-map","linked-map",501278211,null)], null);
});

linked.set.LinkedSet.cljs$lang$type = true;

linked.set.LinkedSet.cljs$lang$ctorStr = "linked.set/LinkedSet";

linked.set.LinkedSet.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"linked.set/LinkedSet");
});

linked.set.__GT_LinkedSet = (function linked$set$__GT_LinkedSet(linked_map){
return (new linked.set.LinkedSet(linked_map));
});

linked.set.empty_linked_set = (new linked.set.LinkedSet(linked.map.empty_linked_map));
linked.set.__GT_linked_set = cljs.core.partial.call(null,cljs.core.into,linked.set.empty_linked_set);
cljs.reader.register_tag_parser_BANG_.call(null,"linked/set",linked.set.__GT_linked_set);
