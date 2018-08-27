// Compiled by ClojureScript 1.7.28 {}
goog.provide('titanoboa.exp');
goog.require('cljs.core');
goog.require('cognitect.transit');

/**
* @constructor
* @param {*} value
* @param {*} type
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
titanoboa.exp.Expression = (function (value,type,__meta,__extmap,__hash){
this.value = value;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
titanoboa.exp.Expression.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

titanoboa.exp.Expression.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k7298,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__7300 = (((k7298 instanceof cljs.core.Keyword))?k7298.fqn:null);
switch (G__7300) {
case "value":
return self__.value;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7298,else__5606__auto__);

}
});

titanoboa.exp.Expression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#titanoboa.exp.Expression{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
});

titanoboa.exp.Expression.prototype.cljs$core$IIterable$ = true;

titanoboa.exp.Expression.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7297){
var self__ = this;
var G__7297__$1 = this;
return (new cljs.core.RecordIter((0),G__7297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

titanoboa.exp.Expression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

titanoboa.exp.Expression.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new titanoboa.exp.Expression(self__.value,self__.type,self__.__meta,self__.__extmap,self__.__hash));
});

titanoboa.exp.Expression.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

titanoboa.exp.Expression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
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

titanoboa.exp.Expression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
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

titanoboa.exp.Expression.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new titanoboa.exp.Expression(self__.value,self__.type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

titanoboa.exp.Expression.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__7297){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__7301 = cljs.core.keyword_identical_QMARK_;
var expr__7302 = k__5611__auto__;
if(cljs.core.truth_(pred__7301.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__7302))){
return (new titanoboa.exp.Expression(G__7297,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7301.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__7302))){
return (new titanoboa.exp.Expression(self__.value,G__7297,self__.__meta,self__.__extmap,null));
} else {
return (new titanoboa.exp.Expression(self__.value,self__.type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__7297),null));
}
}
});

titanoboa.exp.Expression.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
});

titanoboa.exp.Expression.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__7297){
var self__ = this;
var this__5602__auto____$1 = this;
return (new titanoboa.exp.Expression(self__.value,self__.type,G__7297,self__.__extmap,self__.__hash));
});

titanoboa.exp.Expression.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

titanoboa.exp.Expression.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null);
});

titanoboa.exp.Expression.cljs$lang$type = true;

titanoboa.exp.Expression.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"titanoboa.exp/Expression");
});

titanoboa.exp.Expression.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"titanoboa.exp/Expression");
});

titanoboa.exp.__GT_Expression = (function titanoboa$exp$__GT_Expression(value,type){
return (new titanoboa.exp.Expression(value,type,null,null,null));
});

titanoboa.exp.map__GT_Expression = (function titanoboa$exp$map__GT_Expression(G__7299){
return (new titanoboa.exp.Expression(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__7299),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__7299),null,cljs.core.dissoc.call(null,G__7299,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348)),null));
});

titanoboa.exp.read_expression = (function titanoboa$exp$read_expression(expr){
cljs.core.println.call(null,[cljs.core.str("reading expr "),cljs.core.str(expr),cljs.core.str(" "),cljs.core.str(typeof expr === 'string')].join(''));

if(typeof expr === 'string'){
return (new titanoboa.exp.Expression(expr,null,null,null,null));
} else {
var vec__7306 = expr;
var v = cljs.core.nth.call(null,vec__7306,(0),null);
var t = cljs.core.nth.call(null,vec__7306,(1),null);
return (new titanoboa.exp.Expression(v,t,null,null,null));
}
});
titanoboa.exp.read_expression_edn = (function titanoboa$exp$read_expression_edn(expr){
cljs.core.println.call(null,[cljs.core.str("reading edn expr "),cljs.core.str(expr),cljs.core.str(" "),cljs.core.str(typeof expr === 'string'),cljs.core.str(" "),cljs.core.str(cljs.core.map_QMARK_.call(null,expr))].join(''));

if(typeof expr === 'string'){
return (new titanoboa.exp.Expression(expr,null,null,null,null));
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return (new titanoboa.exp.Expression(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr),null,null,null));
} else {
var vec__7308 = expr;
var v = cljs.core.nth.call(null,vec__7308,(0),null);
var t = cljs.core.nth.call(null,vec__7308,(1),null);
return (new titanoboa.exp.Expression(v,t,null,null,null));

}
}
});
titanoboa.exp.transit_write_handler = cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"titanoboa.exp.Expression"),(function (v){
cljs.core.println.call(null,[cljs.core.str("write-handler invoked... value is "),cljs.core.str(v)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v)], null);
}));
titanoboa.exp.transit_read_handler = cognitect.transit.read_handler.call(null,(function (p1__7309_SHARP_){
return titanoboa.exp.read_expression.call(null,p1__7309_SHARP_);
}));
titanoboa.exp.edn_reader_map = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("titanoboa.exp","Expression","titanoboa.exp/Expression",-989257386,null),new cljs.core.Var(function(){return titanoboa.exp.read_expression_edn;},new cljs.core.Symbol("titanoboa.exp","read-expression-edn","titanoboa.exp/read-expression-edn",-2009873136,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"titanoboa.exp","titanoboa.exp",754517708,null),new cljs.core.Symbol(null,"read-expression-edn","read-expression-edn",-2109340560,null),"src/cljs/titanoboa/exp.cljs",26,null,null,12,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),null,(cljs.core.truth_(titanoboa.exp.read_expression_edn)?titanoboa.exp.read_expression_edn.cljs$lang$test:null)]))], null);
