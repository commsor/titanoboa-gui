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
var seq__11872_11876 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__11873_11877 = null;
var count__11874_11878 = (0);
var i__11875_11879 = (0);
while(true){
if((i__11875_11879 < count__11874_11878)){
var k_11880 = cljs.core._nth.call(null,chunk__11873_11877,i__11875_11879);
var v_11881 = (b[k_11880]);
(a[k_11880] = v_11881);

var G__11882 = seq__11872_11876;
var G__11883 = chunk__11873_11877;
var G__11884 = count__11874_11878;
var G__11885 = (i__11875_11879 + (1));
seq__11872_11876 = G__11882;
chunk__11873_11877 = G__11883;
count__11874_11878 = G__11884;
i__11875_11879 = G__11885;
continue;
} else {
var temp__4425__auto___11886 = cljs.core.seq.call(null,seq__11872_11876);
if(temp__4425__auto___11886){
var seq__11872_11887__$1 = temp__4425__auto___11886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11872_11887__$1)){
var c__5792__auto___11888 = cljs.core.chunk_first.call(null,seq__11872_11887__$1);
var G__11889 = cljs.core.chunk_rest.call(null,seq__11872_11887__$1);
var G__11890 = c__5792__auto___11888;
var G__11891 = cljs.core.count.call(null,c__5792__auto___11888);
var G__11892 = (0);
seq__11872_11876 = G__11889;
chunk__11873_11877 = G__11890;
count__11874_11878 = G__11891;
i__11875_11879 = G__11892;
continue;
} else {
var k_11893 = cljs.core.first.call(null,seq__11872_11887__$1);
var v_11894 = (b[k_11893]);
(a[k_11893] = v_11894);

var G__11895 = cljs.core.next.call(null,seq__11872_11887__$1);
var G__11896 = null;
var G__11897 = (0);
var G__11898 = (0);
seq__11872_11876 = G__11895;
chunk__11873_11877 = G__11896;
count__11874_11878 = G__11897;
i__11875_11879 = G__11898;
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
var args11899 = [];
var len__6047__auto___11902 = arguments.length;
var i__6048__auto___11903 = (0);
while(true){
if((i__6048__auto___11903 < len__6047__auto___11902)){
args11899.push((arguments[i__6048__auto___11903]));

var G__11904 = (i__6048__auto___11903 + (1));
i__6048__auto___11903 = G__11904;
continue;
} else {
}
break;
}

var G__11901 = args11899.length;
switch (G__11901) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11899.length)].join('')));

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
var G__11906 = (i + (2));
var G__11907 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11906;
ret = G__11907;
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
var seq__11908_11912 = cljs.core.seq.call(null,v);
var chunk__11909_11913 = null;
var count__11910_11914 = (0);
var i__11911_11915 = (0);
while(true){
if((i__11911_11915 < count__11910_11914)){
var x_11916 = cljs.core._nth.call(null,chunk__11909_11913,i__11911_11915);
ret.push(x_11916);

var G__11917 = seq__11908_11912;
var G__11918 = chunk__11909_11913;
var G__11919 = count__11910_11914;
var G__11920 = (i__11911_11915 + (1));
seq__11908_11912 = G__11917;
chunk__11909_11913 = G__11918;
count__11910_11914 = G__11919;
i__11911_11915 = G__11920;
continue;
} else {
var temp__4425__auto___11921 = cljs.core.seq.call(null,seq__11908_11912);
if(temp__4425__auto___11921){
var seq__11908_11922__$1 = temp__4425__auto___11921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11908_11922__$1)){
var c__5792__auto___11923 = cljs.core.chunk_first.call(null,seq__11908_11922__$1);
var G__11924 = cljs.core.chunk_rest.call(null,seq__11908_11922__$1);
var G__11925 = c__5792__auto___11923;
var G__11926 = cljs.core.count.call(null,c__5792__auto___11923);
var G__11927 = (0);
seq__11908_11912 = G__11924;
chunk__11909_11913 = G__11925;
count__11910_11914 = G__11926;
i__11911_11915 = G__11927;
continue;
} else {
var x_11928 = cljs.core.first.call(null,seq__11908_11922__$1);
ret.push(x_11928);

var G__11929 = cljs.core.next.call(null,seq__11908_11922__$1);
var G__11930 = null;
var G__11931 = (0);
var G__11932 = (0);
seq__11908_11912 = G__11929;
chunk__11909_11913 = G__11930;
count__11910_11914 = G__11931;
i__11911_11915 = G__11932;
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
var seq__11933_11937 = cljs.core.seq.call(null,v);
var chunk__11934_11938 = null;
var count__11935_11939 = (0);
var i__11936_11940 = (0);
while(true){
if((i__11936_11940 < count__11935_11939)){
var x_11941 = cljs.core._nth.call(null,chunk__11934_11938,i__11936_11940);
ret.push(x_11941);

var G__11942 = seq__11933_11937;
var G__11943 = chunk__11934_11938;
var G__11944 = count__11935_11939;
var G__11945 = (i__11936_11940 + (1));
seq__11933_11937 = G__11942;
chunk__11934_11938 = G__11943;
count__11935_11939 = G__11944;
i__11936_11940 = G__11945;
continue;
} else {
var temp__4425__auto___11946 = cljs.core.seq.call(null,seq__11933_11937);
if(temp__4425__auto___11946){
var seq__11933_11947__$1 = temp__4425__auto___11946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11933_11947__$1)){
var c__5792__auto___11948 = cljs.core.chunk_first.call(null,seq__11933_11947__$1);
var G__11949 = cljs.core.chunk_rest.call(null,seq__11933_11947__$1);
var G__11950 = c__5792__auto___11948;
var G__11951 = cljs.core.count.call(null,c__5792__auto___11948);
var G__11952 = (0);
seq__11933_11937 = G__11949;
chunk__11934_11938 = G__11950;
count__11935_11939 = G__11951;
i__11936_11940 = G__11952;
continue;
} else {
var x_11953 = cljs.core.first.call(null,seq__11933_11947__$1);
ret.push(x_11953);

var G__11954 = cljs.core.next.call(null,seq__11933_11947__$1);
var G__11955 = null;
var G__11956 = (0);
var G__11957 = (0);
seq__11933_11937 = G__11954;
chunk__11934_11938 = G__11955;
count__11935_11939 = G__11956;
i__11936_11940 = G__11957;
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
var seq__11958_11962 = cljs.core.seq.call(null,v);
var chunk__11959_11963 = null;
var count__11960_11964 = (0);
var i__11961_11965 = (0);
while(true){
if((i__11961_11965 < count__11960_11964)){
var x_11966 = cljs.core._nth.call(null,chunk__11959_11963,i__11961_11965);
ret.push(x_11966);

var G__11967 = seq__11958_11962;
var G__11968 = chunk__11959_11963;
var G__11969 = count__11960_11964;
var G__11970 = (i__11961_11965 + (1));
seq__11958_11962 = G__11967;
chunk__11959_11963 = G__11968;
count__11960_11964 = G__11969;
i__11961_11965 = G__11970;
continue;
} else {
var temp__4425__auto___11971 = cljs.core.seq.call(null,seq__11958_11962);
if(temp__4425__auto___11971){
var seq__11958_11972__$1 = temp__4425__auto___11971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11958_11972__$1)){
var c__5792__auto___11973 = cljs.core.chunk_first.call(null,seq__11958_11972__$1);
var G__11974 = cljs.core.chunk_rest.call(null,seq__11958_11972__$1);
var G__11975 = c__5792__auto___11973;
var G__11976 = cljs.core.count.call(null,c__5792__auto___11973);
var G__11977 = (0);
seq__11958_11962 = G__11974;
chunk__11959_11963 = G__11975;
count__11960_11964 = G__11976;
i__11961_11965 = G__11977;
continue;
} else {
var x_11978 = cljs.core.first.call(null,seq__11958_11972__$1);
ret.push(x_11978);

var G__11979 = cljs.core.next.call(null,seq__11958_11972__$1);
var G__11980 = null;
var G__11981 = (0);
var G__11982 = (0);
seq__11958_11962 = G__11979;
chunk__11959_11963 = G__11980;
count__11960_11964 = G__11981;
i__11961_11965 = G__11982;
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
var args11983 = [];
var len__6047__auto___11994 = arguments.length;
var i__6048__auto___11995 = (0);
while(true){
if((i__6048__auto___11995 < len__6047__auto___11994)){
args11983.push((arguments[i__6048__auto___11995]));

var G__11996 = (i__6048__auto___11995 + (1));
i__6048__auto___11995 = G__11996;
continue;
} else {
}
break;
}

var G__11985 = args11983.length;
switch (G__11985) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11983.length)].join('')));

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
var G__11986 = obj;
G__11986.push(kfn.call(null,k),vfn.call(null,v));

return G__11986;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x11987 = cljs.core.clone.call(null,handlers);
x11987.forEach = ((function (x11987,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__11988 = cljs.core.seq.call(null,coll);
var chunk__11989 = null;
var count__11990 = (0);
var i__11991 = (0);
while(true){
if((i__11991 < count__11990)){
var vec__11992 = cljs.core._nth.call(null,chunk__11989,i__11991);
var k = cljs.core.nth.call(null,vec__11992,(0),null);
var v = cljs.core.nth.call(null,vec__11992,(1),null);
f.call(null,v,k);

var G__11998 = seq__11988;
var G__11999 = chunk__11989;
var G__12000 = count__11990;
var G__12001 = (i__11991 + (1));
seq__11988 = G__11998;
chunk__11989 = G__11999;
count__11990 = G__12000;
i__11991 = G__12001;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11988);
if(temp__4425__auto__){
var seq__11988__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11988__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__11988__$1);
var G__12002 = cljs.core.chunk_rest.call(null,seq__11988__$1);
var G__12003 = c__5792__auto__;
var G__12004 = cljs.core.count.call(null,c__5792__auto__);
var G__12005 = (0);
seq__11988 = G__12002;
chunk__11989 = G__12003;
count__11990 = G__12004;
i__11991 = G__12005;
continue;
} else {
var vec__11993 = cljs.core.first.call(null,seq__11988__$1);
var k = cljs.core.nth.call(null,vec__11993,(0),null);
var v = cljs.core.nth.call(null,vec__11993,(1),null);
f.call(null,v,k);

var G__12006 = cljs.core.next.call(null,seq__11988__$1);
var G__12007 = null;
var G__12008 = (0);
var G__12009 = (0);
seq__11988 = G__12006;
chunk__11989 = G__12007;
count__11990 = G__12008;
i__11991 = G__12009;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11987,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x11987;
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
var args12010 = [];
var len__6047__auto___12016 = arguments.length;
var i__6048__auto___12017 = (0);
while(true){
if((i__6048__auto___12017 < len__6047__auto___12016)){
args12010.push((arguments[i__6048__auto___12017]));

var G__12018 = (i__6048__auto___12017 + (1));
i__6048__auto___12017 = G__12018;
continue;
} else {
}
break;
}

var G__12012 = args12010.length;
switch (G__12012) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12010.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12013 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12013 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12014){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12014 = meta12014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t12013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12015,meta12014__$1){
var self__ = this;
var _12015__$1 = this;
return (new cognitect.transit.t12013(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12014__$1));
});

cognitect.transit.t12013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12015){
var self__ = this;
var _12015__$1 = this;
return self__.meta12014;
});

cognitect.transit.t12013.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t12013.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t12013.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t12013.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t12013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12014","meta12014",-463775097,null)], null);
});

cognitect.transit.t12013.cljs$lang$type = true;

cognitect.transit.t12013.cljs$lang$ctorStr = "cognitect.transit/t12013";

cognitect.transit.t12013.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"cognitect.transit/t12013");
});

cognitect.transit.__GT_t12013 = (function cognitect$transit$__GT_t12013(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12014){
return (new cognitect.transit.t12013(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12014));
});

}

return (new cognitect.transit.t12013(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
