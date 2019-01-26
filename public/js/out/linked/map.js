// Compiled by ClojureScript 1.7.28 {}
goog.provide('linked.map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');

/**
* @constructor
* @param {*} value
* @param {*} left
* @param {*} right
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
linked.map.Node = (function (value,left,right,__meta,__extmap,__hash){
this.value = value;
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
linked.map.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

linked.map.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k13045,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__13047 = (((k13045 instanceof cljs.core.Keyword))?k13045.fqn:null);
switch (G__13047) {
case "value":
return self__.value;

break;
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13045,else__5606__auto__);

}
});

linked.map.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#linked.map.Node{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IIterable$ = true;

linked.map.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13044){
var self__ = this;
var G__13044__$1 = this;
return (new cljs.core.RecordIter((0),G__13044__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

linked.map.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

linked.map.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
});

linked.map.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_imap.call(null,this__5598__auto____$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

linked.map.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
var self__ = this;
var this__5599__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4996__auto__ = other__5600__auto__;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (this__5599__auto____$1.constructor === other__5600__auto__.constructor);
if(and__4996__auto____$1){
return cljs.core.equiv_map.call(null,this__5599__auto____$1,other__5600__auto__);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
return true;
} else {
return false;
}
});

linked.map.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

linked.map.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__13044){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__13048 = cljs.core.keyword_identical_QMARK_;
var expr__13049 = k__5611__auto__;
if(cljs.core.truth_(pred__13048.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__13049))){
return (new linked.map.Node(G__13044,self__.left,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13048.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__13049))){
return (new linked.map.Node(self__.value,G__13044,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13048.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__13049))){
return (new linked.map.Node(self__.value,self__.left,G__13044,self__.__meta,self__.__extmap,null));
} else {
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__13044),null));
}
}
}
});

linked.map.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__13044){
var self__ = this;
var this__5602__auto____$1 = this;
return (new linked.map.Node(self__.value,self__.left,self__.right,G__13044,self__.__extmap,self__.__hash));
});

linked.map.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

linked.map.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

linked.map.Node.cljs$lang$type = true;

linked.map.Node.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"linked.map/Node");
});

linked.map.Node.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"linked.map/Node");
});

linked.map.__GT_Node = (function linked$map$__GT_Node(value,left,right){
return (new linked.map.Node(value,left,right,null,null,null));
});

linked.map.map__GT_Node = (function linked$map$map__GT_Node(G__13046){
return (new linked.map.Node(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13046),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__13046),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__13046),null,cljs.core.dissoc.call(null,G__13046,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)),null));
});


/**
* @constructor
*/
linked.map.LinkedMap = (function (head,delegate_map){
this.head = head;
this.delegate_map = delegate_map;
this.cljs$lang$protocol_mask$partition0$ = 2314602255;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
linked.map.LinkedMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,", ",(function (){var iter__5761__auto__ = ((function (coll){
return (function linked$map$iter__13056(s__13057){
return (new cljs.core.LazySeq(null,((function (coll){
return (function (){
var s__13057__$1 = s__13057;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13057__$1);
if(temp__4425__auto__){
var s__13057__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13057__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__13057__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__13059 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__13058 = (0);
while(true){
if((i__13058 < size__5760__auto__)){
var vec__13062 = cljs.core._nth.call(null,c__5759__auto__,i__13058);
var k = cljs.core.nth.call(null,vec__13062,(0),null);
var v = cljs.core.nth.call(null,vec__13062,(1),null);
cljs.core.chunk_append.call(null,b__13059,[cljs.core.str(k),cljs.core.str(" "),cljs.core.str(v)].join(''));

var G__13064 = (i__13058 + (1));
i__13058 = G__13064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13059),linked$map$iter__13056.call(null,cljs.core.chunk_rest.call(null,s__13057__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13059),null);
}
} else {
var vec__13063 = cljs.core.first.call(null,s__13057__$2);
var k = cljs.core.nth.call(null,vec__13063,(0),null);
var v = cljs.core.nth.call(null,vec__13063,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(k),cljs.core.str(" "),cljs.core.str(v)].join(''),linked$map$iter__13056.call(null,cljs.core.rest.call(null,s__13057__$2)));
}
} else {
return null;
}
break;
}
});})(coll))
,null,null));
});})(coll))
;
return iter__5761__auto__.call(null,coll);
})())),cljs.core.str("}")].join('');
});

linked.map.LinkedMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

linked.map.LinkedMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

linked.map.LinkedMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var temp__4423__auto__ = cljs.core.find.call(null,self__.delegate_map,k);
if(cljs.core.truth_(temp__4423__auto__)){
var entry = temp__4423__auto__;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,entry));
} else {
return not_found;
}
});

linked.map.LinkedMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
return cljs.core.reduce.call(null,((function (coll__$1){
return (function (p1__13053_SHARP_,p2__13054_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,f,p1__13053_SHARP_),p2__13054_SHARP_);
});})(coll__$1))
,init,cljs.core.seq.call(null,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#linked/map "),cljs.core.str(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,coll__$1))].join(''));
});

linked.map.LinkedMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.meta.call(null,self__.delegate_map);
});

linked.map.LinkedMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new linked.map.LinkedMap(self__.head,self__.delegate_map));
});

linked.map.LinkedMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count.call(null,self__.delegate_map);
});

linked.map.LinkedMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return linked.map.rseq_STAR_.call(null,coll__$1);
});

linked.map.LinkedMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map.call(null,coll__$1,other);
});

linked.map.LinkedMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta.call(null,linked.map.empty_linked_map,cljs.core.meta.call(null,self__.delegate_map));
});

linked.map.LinkedMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return linked.map.dissoc_STAR_.call(null,coll__$1,k);
});

linked.map.LinkedMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return linked.map.assoc_STAR_.call(null,coll__$1,k,v);
});

linked.map.LinkedMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.delegate_map,k);
});

linked.map.LinkedMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return linked.map.seq_STAR_.call(null,coll__$1);
});

linked.map.LinkedMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var self__ = this;
var coll__$1 = this;
return (new linked.map.LinkedMap(self__.head,cljs.core.with_meta.call(null,self__.delegate_map,meta)));
});

linked.map.LinkedMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__13065 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__13066 = cljs.core.next.call(null,es);
ret = G__13065;
es = G__13066;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

linked.map.LinkedMap.prototype.call = (function() {
var G__13067 = null;
var G__13067__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__13067__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13067 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13067__2.call(this,self__,k);
case 3:
return G__13067__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13067.cljs$core$IFn$_invoke$arity$2 = G__13067__2;
G__13067.cljs$core$IFn$_invoke$arity$3 = G__13067__3;
return G__13067;
})()
;

linked.map.LinkedMap.prototype.apply = (function (self__,args13055){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13055)));
});

linked.map.LinkedMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

linked.map.LinkedMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

linked.map.LinkedMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"delegate-map","delegate-map",-1583449162,null)], null);
});

linked.map.LinkedMap.cljs$lang$type = true;

linked.map.LinkedMap.cljs$lang$ctorStr = "linked.map/LinkedMap";

linked.map.LinkedMap.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"linked.map/LinkedMap");
});

linked.map.__GT_LinkedMap = (function linked$map$__GT_LinkedMap(head,delegate_map){
return (new linked.map.LinkedMap(head,delegate_map));
});

linked.map.assoc_STAR_ = (function linked$map$assoc_STAR_(this$,k,v){
var head = this$.head;
var delegate_map = this$.delegate_map;
var temp__4423__auto__ = cljs.core.find.call(null,delegate_map,k);
if(cljs.core.truth_(temp__4423__auto__)){
var entry = temp__4423__auto__;
return (new linked.map.LinkedMap(head,cljs.core.assoc_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217)], null),v)));
} else {
if(cljs.core.empty_QMARK_.call(null,delegate_map)){
return (new linked.map.LinkedMap(k,cljs.core.assoc.call(null,delegate_map,k,(new linked.map.Node(v,k,k,null,null,null)))));
} else {
var tail = cljs.core.get_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
return (new linked.map.LinkedMap(head,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,delegate_map,k,(new linked.map.Node(v,tail,head,null,null,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null),k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail,new cljs.core.Keyword(null,"right","right",-452581833)], null),k)));
}
}
});
linked.map.dissoc_STAR_ = (function linked$map$dissoc_STAR_(this$,k){
var head = this$.head;
var delegate_map = this$.delegate_map;
var temp__4423__auto__ = cljs.core.find.call(null,delegate_map,k);
if(cljs.core.truth_(temp__4423__auto__)){
var entry = temp__4423__auto__;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,delegate_map))){
return cljs.core.empty.call(null,this$);
} else {
var rk = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,entry));
var lk = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,entry));
var head__$1 = ((cljs.core._EQ_.call(null,k,head))?rk:head);
return (new linked.map.LinkedMap(head__$1,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,delegate_map,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Keyword(null,"left","left",-399115937)], null),lk),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lk,new cljs.core.Keyword(null,"right","right",-452581833)], null),rk)));
}
} else {
return this$;
}
});
linked.map.map_entry = (function linked$map$map_entry(k,v){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,v],null));
});
linked.map.visit_node = (function linked$map$visit_node(delegate_map,current,last,direction){
var vec__13069 = cljs.core.find.call(null,delegate_map,current);
var k = cljs.core.nth.call(null,vec__13069,(0),null);
var node = cljs.core.nth.call(null,vec__13069,(1),null);
var entry = linked.map.map_entry.call(null,k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node));
var next = direction.call(null,node);
if(cljs.core._EQ_.call(null,current,last)){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,entry);
} else {
return cljs.core.cons.call(null,entry,(new cljs.core.LazySeq(null,((function (vec__13069,k,node,entry,next){
return (function (){
return linked$map$visit_node.call(null,delegate_map,next,last,direction);
});})(vec__13069,k,node,entry,next))
,null,null)));
}
});
linked.map.seq_STAR_ = (function linked$map$seq_STAR_(this$){
var delegate_map = this$.delegate_map;
var head = this$.head;
var tail = cljs.core.get_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.seq.call(null,delegate_map)){
return linked.map.visit_node.call(null,delegate_map,head,tail,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;
}
});
linked.map.rseq_STAR_ = (function linked$map$rseq_STAR_(this$){
var delegate_map = this$.delegate_map;
var head = this$.head;
var tail = cljs.core.get_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.seq.call(null,delegate_map)){
return linked.map.visit_node.call(null,delegate_map,tail,head,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;
}
});
linked.map.empty_linked_map = (new linked.map.LinkedMap(null,cljs.core.PersistentHashMap.EMPTY));
linked.map.__GT_linked_map = cljs.core.partial.call(null,cljs.core.into,linked.map.empty_linked_map);
cljs.reader.register_tag_parser_BANG_.call(null,"linked/map",linked.map.__GT_linked_map);
