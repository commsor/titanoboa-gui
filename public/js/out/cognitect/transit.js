// Compiled by ClojureScript 1.7.28 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__11973_11977 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__11974_11978 = null;
var count__11975_11979 = (0);
var i__11976_11980 = (0);
while(true){
if((i__11976_11980 < count__11975_11979)){
var k_11981 = cljs.core._nth.call(null,chunk__11974_11978,i__11976_11980);
var v_11982 = (b[k_11981]);
(a[k_11981] = v_11982);

var G__11983 = seq__11973_11977;
var G__11984 = chunk__11974_11978;
var G__11985 = count__11975_11979;
var G__11986 = (i__11976_11980 + (1));
seq__11973_11977 = G__11983;
chunk__11974_11978 = G__11984;
count__11975_11979 = G__11985;
i__11976_11980 = G__11986;
continue;
} else {
var temp__4425__auto___11987 = cljs.core.seq.call(null,seq__11973_11977);
if(temp__4425__auto___11987){
var seq__11973_11988__$1 = temp__4425__auto___11987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11973_11988__$1)){
var c__5792__auto___11989 = cljs.core.chunk_first.call(null,seq__11973_11988__$1);
var G__11990 = cljs.core.chunk_rest.call(null,seq__11973_11988__$1);
var G__11991 = c__5792__auto___11989;
var G__11992 = cljs.core.count.call(null,c__5792__auto___11989);
var G__11993 = (0);
seq__11973_11977 = G__11990;
chunk__11974_11978 = G__11991;
count__11975_11979 = G__11992;
i__11976_11980 = G__11993;
continue;
} else {
var k_11994 = cljs.core.first.call(null,seq__11973_11988__$1);
var v_11995 = (b[k_11994]);
(a[k_11994] = v_11995);

var G__11996 = cljs.core.next.call(null,seq__11973_11988__$1);
var G__11997 = null;
var G__11998 = (0);
var G__11999 = (0);
seq__11973_11977 = G__11996;
chunk__11974_11978 = G__11997;
count__11975_11979 = G__11998;
i__11976_11980 = G__11999;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var args12000 = [];
var len__6047__auto___12003 = arguments.length;
var i__6048__auto___12004 = (0);
while(true){
if((i__6048__auto___12004 < len__6047__auto___12003)){
args12000.push((arguments[i__6048__auto___12004]));

var G__12005 = (i__6048__auto___12004 + (1));
i__6048__auto___12004 = G__12005;
continue;
} else {
}
break;
}

var G__12002 = args12000.length;
switch (G__12002) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12000.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12007 = (i + (2));
var G__12008 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12007;
ret = G__12008;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12009_12013 = cljs.core.seq.call(null,v);
var chunk__12010_12014 = null;
var count__12011_12015 = (0);
var i__12012_12016 = (0);
while(true){
if((i__12012_12016 < count__12011_12015)){
var x_12017 = cljs.core._nth.call(null,chunk__12010_12014,i__12012_12016);
ret.push(x_12017);

var G__12018 = seq__12009_12013;
var G__12019 = chunk__12010_12014;
var G__12020 = count__12011_12015;
var G__12021 = (i__12012_12016 + (1));
seq__12009_12013 = G__12018;
chunk__12010_12014 = G__12019;
count__12011_12015 = G__12020;
i__12012_12016 = G__12021;
continue;
} else {
var temp__4425__auto___12022 = cljs.core.seq.call(null,seq__12009_12013);
if(temp__4425__auto___12022){
var seq__12009_12023__$1 = temp__4425__auto___12022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12009_12023__$1)){
var c__5792__auto___12024 = cljs.core.chunk_first.call(null,seq__12009_12023__$1);
var G__12025 = cljs.core.chunk_rest.call(null,seq__12009_12023__$1);
var G__12026 = c__5792__auto___12024;
var G__12027 = cljs.core.count.call(null,c__5792__auto___12024);
var G__12028 = (0);
seq__12009_12013 = G__12025;
chunk__12010_12014 = G__12026;
count__12011_12015 = G__12027;
i__12012_12016 = G__12028;
continue;
} else {
var x_12029 = cljs.core.first.call(null,seq__12009_12023__$1);
ret.push(x_12029);

var G__12030 = cljs.core.next.call(null,seq__12009_12023__$1);
var G__12031 = null;
var G__12032 = (0);
var G__12033 = (0);
seq__12009_12013 = G__12030;
chunk__12010_12014 = G__12031;
count__12011_12015 = G__12032;
i__12012_12016 = G__12033;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12034_12038 = cljs.core.seq.call(null,v);
var chunk__12035_12039 = null;
var count__12036_12040 = (0);
var i__12037_12041 = (0);
while(true){
if((i__12037_12041 < count__12036_12040)){
var x_12042 = cljs.core._nth.call(null,chunk__12035_12039,i__12037_12041);
ret.push(x_12042);

var G__12043 = seq__12034_12038;
var G__12044 = chunk__12035_12039;
var G__12045 = count__12036_12040;
var G__12046 = (i__12037_12041 + (1));
seq__12034_12038 = G__12043;
chunk__12035_12039 = G__12044;
count__12036_12040 = G__12045;
i__12037_12041 = G__12046;
continue;
} else {
var temp__4425__auto___12047 = cljs.core.seq.call(null,seq__12034_12038);
if(temp__4425__auto___12047){
var seq__12034_12048__$1 = temp__4425__auto___12047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12034_12048__$1)){
var c__5792__auto___12049 = cljs.core.chunk_first.call(null,seq__12034_12048__$1);
var G__12050 = cljs.core.chunk_rest.call(null,seq__12034_12048__$1);
var G__12051 = c__5792__auto___12049;
var G__12052 = cljs.core.count.call(null,c__5792__auto___12049);
var G__12053 = (0);
seq__12034_12038 = G__12050;
chunk__12035_12039 = G__12051;
count__12036_12040 = G__12052;
i__12037_12041 = G__12053;
continue;
} else {
var x_12054 = cljs.core.first.call(null,seq__12034_12048__$1);
ret.push(x_12054);

var G__12055 = cljs.core.next.call(null,seq__12034_12048__$1);
var G__12056 = null;
var G__12057 = (0);
var G__12058 = (0);
seq__12034_12038 = G__12055;
chunk__12035_12039 = G__12056;
count__12036_12040 = G__12057;
i__12037_12041 = G__12058;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12059_12063 = cljs.core.seq.call(null,v);
var chunk__12060_12064 = null;
var count__12061_12065 = (0);
var i__12062_12066 = (0);
while(true){
if((i__12062_12066 < count__12061_12065)){
var x_12067 = cljs.core._nth.call(null,chunk__12060_12064,i__12062_12066);
ret.push(x_12067);

var G__12068 = seq__12059_12063;
var G__12069 = chunk__12060_12064;
var G__12070 = count__12061_12065;
var G__12071 = (i__12062_12066 + (1));
seq__12059_12063 = G__12068;
chunk__12060_12064 = G__12069;
count__12061_12065 = G__12070;
i__12062_12066 = G__12071;
continue;
} else {
var temp__4425__auto___12072 = cljs.core.seq.call(null,seq__12059_12063);
if(temp__4425__auto___12072){
var seq__12059_12073__$1 = temp__4425__auto___12072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12059_12073__$1)){
var c__5792__auto___12074 = cljs.core.chunk_first.call(null,seq__12059_12073__$1);
var G__12075 = cljs.core.chunk_rest.call(null,seq__12059_12073__$1);
var G__12076 = c__5792__auto___12074;
var G__12077 = cljs.core.count.call(null,c__5792__auto___12074);
var G__12078 = (0);
seq__12059_12063 = G__12075;
chunk__12060_12064 = G__12076;
count__12061_12065 = G__12077;
i__12062_12066 = G__12078;
continue;
} else {
var x_12079 = cljs.core.first.call(null,seq__12059_12073__$1);
ret.push(x_12079);

var G__12080 = cljs.core.next.call(null,seq__12059_12073__$1);
var G__12081 = null;
var G__12082 = (0);
var G__12083 = (0);
seq__12059_12063 = G__12080;
chunk__12060_12064 = G__12081;
count__12061_12065 = G__12082;
i__12062_12066 = G__12083;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var args12084 = [];
var len__6047__auto___12095 = arguments.length;
var i__6048__auto___12096 = (0);
while(true){
if((i__6048__auto___12096 < len__6047__auto___12095)){
args12084.push((arguments[i__6048__auto___12096]));

var G__12097 = (i__6048__auto___12096 + (1));
i__6048__auto___12096 = G__12097;
continue;
} else {
}
break;
}

var G__12086 = args12084.length;
switch (G__12086) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12084.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12087 = obj;
G__12087.push(kfn.call(null,k),vfn.call(null,v));

return G__12087;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12088 = cljs.core.clone.call(null,handlers);
x12088.forEach = ((function (x12088,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12089 = cljs.core.seq.call(null,coll);
var chunk__12090 = null;
var count__12091 = (0);
var i__12092 = (0);
while(true){
if((i__12092 < count__12091)){
var vec__12093 = cljs.core._nth.call(null,chunk__12090,i__12092);
var k = cljs.core.nth.call(null,vec__12093,(0),null);
var v = cljs.core.nth.call(null,vec__12093,(1),null);
f.call(null,v,k);

var G__12099 = seq__12089;
var G__12100 = chunk__12090;
var G__12101 = count__12091;
var G__12102 = (i__12092 + (1));
seq__12089 = G__12099;
chunk__12090 = G__12100;
count__12091 = G__12101;
i__12092 = G__12102;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12089);
if(temp__4425__auto__){
var seq__12089__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12089__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__12089__$1);
var G__12103 = cljs.core.chunk_rest.call(null,seq__12089__$1);
var G__12104 = c__5792__auto__;
var G__12105 = cljs.core.count.call(null,c__5792__auto__);
var G__12106 = (0);
seq__12089 = G__12103;
chunk__12090 = G__12104;
count__12091 = G__12105;
i__12092 = G__12106;
continue;
} else {
var vec__12094 = cljs.core.first.call(null,seq__12089__$1);
var k = cljs.core.nth.call(null,vec__12094,(0),null);
var v = cljs.core.nth.call(null,vec__12094,(1),null);
f.call(null,v,k);

var G__12107 = cljs.core.next.call(null,seq__12089__$1);
var G__12108 = null;
var G__12109 = (0);
var G__12110 = (0);
seq__12089 = G__12107;
chunk__12090 = G__12108;
count__12091 = G__12109;
i__12092 = G__12110;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12088,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12088;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var args12111 = [];
var len__6047__auto___12117 = arguments.length;
var i__6048__auto___12118 = (0);
while(true){
if((i__6048__auto___12118 < len__6047__auto___12117)){
args12111.push((arguments[i__6048__auto___12118]));

var G__12119 = (i__6048__auto___12118 + (1));
i__6048__auto___12118 = G__12119;
continue;
} else {
}
break;
}

var G__12113 = args12111.length;
switch (G__12113) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12111.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12114 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12114 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12115){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12115 = meta12115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t12114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12116,meta12115__$1){
var self__ = this;
var _12116__$1 = this;
return (new cognitect.transit.t12114(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12115__$1));
});

cognitect.transit.t12114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12116){
var self__ = this;
var _12116__$1 = this;
return self__.meta12115;
});

cognitect.transit.t12114.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t12114.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t12114.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t12114.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t12114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12115","meta12115",-2102749087,null)], null);
});

cognitect.transit.t12114.cljs$lang$type = true;

cognitect.transit.t12114.cljs$lang$ctorStr = "cognitect.transit/t12114";

cognitect.transit.t12114.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/t12114");
});

cognitect.transit.__GT_t12114 = (function cognitect$transit$__GT_t12114(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12115){
return (new cognitect.transit.t12114(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12115));
});

}

return (new cognitect.transit.t12114(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__5008__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
