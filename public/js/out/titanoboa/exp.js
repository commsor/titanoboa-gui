// Compiled by ClojureScript 1.10.238 {}
goog.provide('titanoboa.exp');
goog.require('cljs.core');
goog.require('cognitect.transit');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
titanoboa.exp.Expression = (function (value,type,__meta,__extmap,__hash){
this.value = value;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
titanoboa.exp.Expression.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

titanoboa.exp.Expression.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k7479,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__7483 = k7479;
var G__7483__$1 = (((G__7483 instanceof cljs.core.Keyword))?G__7483.fqn:null);
switch (G__7483__$1) {
case "value":
return self__.value;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7479,else__4175__auto__);

}
});

titanoboa.exp.Expression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#titanoboa.exp.Expression{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
});

titanoboa.exp.Expression.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7478){
var self__ = this;
var G__7478__$1 = this;
return (new cljs.core.RecordIter((0),G__7478__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

titanoboa.exp.Expression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

titanoboa.exp.Expression.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new titanoboa.exp.Expression(self__.value,self__.type,self__.__meta,self__.__extmap,self__.__hash));
});

titanoboa.exp.Expression.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

titanoboa.exp.Expression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-110975972 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

titanoboa.exp.Expression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7480,other7481){
var self__ = this;
var this7480__$1 = this;
return ((!((other7481 == null))) && ((this7480__$1.constructor === other7481.constructor)) && (cljs.core._EQ_.call(null,this7480__$1.value,other7481.value)) && (cljs.core._EQ_.call(null,this7480__$1.type,other7481.type)) && (cljs.core._EQ_.call(null,this7480__$1.__extmap,other7481.__extmap)));
});

titanoboa.exp.Expression.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new titanoboa.exp.Expression(self__.value,self__.type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

titanoboa.exp.Expression.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__7478){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__7484 = cljs.core.keyword_identical_QMARK_;
var expr__7485 = k__4180__auto__;
if(cljs.core.truth_(pred__7484.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__7485))){
return (new titanoboa.exp.Expression(G__7478,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7484.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__7485))){
return (new titanoboa.exp.Expression(self__.value,G__7478,self__.__meta,self__.__extmap,null));
} else {
return (new titanoboa.exp.Expression(self__.value,self__.type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__7478),null));
}
}
});

titanoboa.exp.Expression.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null))], null),self__.__extmap));
});

titanoboa.exp.Expression.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__7478){
var self__ = this;
var this__4171__auto____$1 = this;
return (new titanoboa.exp.Expression(self__.value,self__.type,G__7478,self__.__extmap,self__.__hash));
});

titanoboa.exp.Expression.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

titanoboa.exp.Expression.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null);
});

titanoboa.exp.Expression.cljs$lang$type = true;

titanoboa.exp.Expression.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"titanoboa.exp/Expression",null,(1),null));
});

titanoboa.exp.Expression.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"titanoboa.exp/Expression");
});

/**
 * Positional factory function for titanoboa.exp/Expression.
 */
titanoboa.exp.__GT_Expression = (function titanoboa$exp$__GT_Expression(value,type){
return (new titanoboa.exp.Expression(value,type,null,null,null));
});

/**
 * Factory function for titanoboa.exp/Expression, taking a map of keywords to field values.
 */
titanoboa.exp.map__GT_Expression = (function titanoboa$exp$map__GT_Expression(G__7482){
return (new titanoboa.exp.Expression(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__7482),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__7482),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__7482,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348))),null));
});

titanoboa.exp.read_expression = (function titanoboa$exp$read_expression(expr){
cljs.core.println.call(null,["reading expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof expr === 'string')].join(''));

if(typeof expr === 'string'){
return (new titanoboa.exp.Expression(expr,null,null,null,null));
} else {
var vec__7488 = expr;
var v = cljs.core.nth.call(null,vec__7488,(0),null);
var t = cljs.core.nth.call(null,vec__7488,(1),null);
return (new titanoboa.exp.Expression(v,t,null,null,null));
}
});
titanoboa.exp.read_expression_edn = (function titanoboa$exp$read_expression_edn(expr){
cljs.core.println.call(null,["reading edn expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof expr === 'string')," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map_QMARK_.call(null,expr))].join(''));

if(typeof expr === 'string'){
return (new titanoboa.exp.Expression(expr,null,null,null,null));
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return (new titanoboa.exp.Expression(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr),null,null,null));
} else {
var vec__7491 = expr;
var v = cljs.core.nth.call(null,vec__7491,(0),null);
var t = cljs.core.nth.call(null,vec__7491,(1),null);
return (new titanoboa.exp.Expression(v,t,null,null,null));

}
}
});
titanoboa.exp.transit_write_handler = cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"titanoboa.exp.Expression"),(function (v){
cljs.core.println.call(null,["write-handler invoked... value is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v)], null);
}));
titanoboa.exp.transit_read_handler = cognitect.transit.read_handler.call(null,(function (p1__7494_SHARP_){
return titanoboa.exp.read_expression.call(null,p1__7494_SHARP_);
}));
titanoboa.exp.edn_reader_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("titanoboa.exp","Expression","titanoboa.exp/Expression",-989257386,null),new cljs.core.Var(function(){return titanoboa.exp.read_expression_edn;},new cljs.core.Symbol("titanoboa.exp","read-expression-edn","titanoboa.exp/read-expression-edn",-2009873136,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"titanoboa.exp","titanoboa.exp",754517708,null),new cljs.core.Symbol(null,"read-expression-edn","read-expression-edn",-2109340560,null),"/home/miro/work/titanoboa/titanoboa-enterprise/src/cljs/titanoboa/exp.cljs",26,1,12,12,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),null,(cljs.core.truth_(titanoboa.exp.read_expression_edn)?titanoboa.exp.read_expression_edn.cljs$lang$test:null)])),new cljs.core.Symbol(null,"titanoboa.exp.Expression","titanoboa.exp.Expression",-981582915,null),new cljs.core.Var(function(){return titanoboa.exp.read_expression_edn;},new cljs.core.Symbol("titanoboa.exp","read-expression-edn","titanoboa.exp/read-expression-edn",-2009873136,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"titanoboa.exp","titanoboa.exp",754517708,null),new cljs.core.Symbol(null,"read-expression-edn","read-expression-edn",-2109340560,null),"/home/miro/work/titanoboa/titanoboa-enterprise/src/cljs/titanoboa/exp.cljs",26,1,12,12,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),null,(cljs.core.truth_(titanoboa.exp.read_expression_edn)?titanoboa.exp.read_expression_edn.cljs$lang$test:null)]))], null);
