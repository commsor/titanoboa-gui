// Compiled by ClojureScript 1.7.28 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(){
var args__6054__auto__ = [];
var len__6047__auto___12023 = arguments.length;
var i__6048__auto___12024 = (0);
while(true){
if((i__6048__auto___12024 < len__6047__auto___12023)){
args__6054__auto__.push((arguments[i__6048__auto___12024]));

var G__12025 = (i__6048__auto___12024 + (1));
i__6048__auto___12024 = G__12025;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

fipp.clojure.list_group.cljs$lang$applyTo = (function (seq12022){
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12022));
});
fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__12026){
var vec__12028 = p__12026;
var test = cljs.core.nth.call(null,vec__12028,(0),null);
var result = cljs.core.nth.call(null,vec__12028,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__12030){
var vec__12032 = p__12030;
var head = cljs.core.nth.call(null,vec__12032,(0),null);
var expr = cljs.core.nth.call(null,vec__12032,(1),null);
var more = cljs.core.nthnext.call(null,vec__12032,(2));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12032,head,expr,more){
return (function (p1__12029_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12029_SHARP_);
});})(clauses,default$,vec__12032,head,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__12034){
var vec__12036 = p__12034;
var head = cljs.core.nth.call(null,vec__12036,(0),null);
var more = cljs.core.nthnext.call(null,vec__12036,(1));
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__12036,head,more){
return (function (p1__12033_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12033_SHARP_);
});})(clauses,vec__12036,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__12038){
var vec__12040 = p__12038;
var head = cljs.core.nth.call(null,vec__12040,(0),null);
var pred = cljs.core.nth.call(null,vec__12040,(1),null);
var expr = cljs.core.nth.call(null,vec__12040,(2),null);
var more = cljs.core.nthnext.call(null,vec__12040,(3));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12040,head,pred,expr,more){
return (function (p1__12037_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12037_SHARP_);
});})(clauses,default$,vec__12040,head,pred,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__12042){
var vec__12044 = p__12042;
var head = cljs.core.nth.call(null,vec__12044,(0),null);
var stmts = cljs.core.nthnext.call(null,vec__12044,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12044,head,stmts){
return (function (p1__12041_SHARP_){
return fipp.visit.visit.call(null,p,p1__12041_SHARP_);
});})(vec__12044,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__12046){
var vec__12048 = p__12046;
var head = cljs.core.nth.call(null,vec__12048,(0),null);
var test = cljs.core.nth.call(null,vec__12048,(1),null);
var more = cljs.core.nthnext.call(null,vec__12048,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12048,head,test,more){
return (function (p1__12045_SHARP_){
return fipp.visit.visit.call(null,p,p1__12045_SHARP_);
});})(vec__12048,head,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__12050){
var vec__12052 = p__12050;
var params = cljs.core.nth.call(null,vec__12052,(0),null);
var body = cljs.core.nthnext.call(null,vec__12052,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12052,params,body){
return (function (p1__12049_SHARP_){
return fipp.visit.visit.call(null,p,p1__12049_SHARP_);
});})(vec__12052,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__12055){
var vec__12060 = p__12055;
var head = cljs.core.nth.call(null,vec__12060,(0),null);
var fn_name = cljs.core.nth.call(null,vec__12060,(1),null);
var more = cljs.core.nthnext.call(null,vec__12060,(2));
var vec__12061 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12061,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12061,(1),null);
var vec__12062 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12062,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__12062,(1),null);
var vec__12063 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__12063,(0),null);
var body = cljs.core.nth.call(null,vec__12063,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4996__auto__ = params;
if(cljs.core.truth_(and__4996__auto__)){
return ((docstring == null)) && ((attr_map == null));
} else {
return and__4996__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4996__auto__ = params;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__4996__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12061,docstring,more__$1,vec__12062,attr_map,more__$2,vec__12063,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12060,head,fn_name,more){
return (function (p1__12053_SHARP_){
return fipp.visit.visit.call(null,p,p1__12053_SHARP_);
});})(vec__12061,docstring,more__$1,vec__12062,attr_map,more__$2,vec__12063,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12060,head,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__12061,docstring,more__$1,vec__12062,attr_map,more__$2,vec__12063,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12060,head,fn_name,more){
return (function (p1__12054_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12054_SHARP_);
});})(vec__12061,docstring,more__$1,vec__12062,attr_map,more__$2,vec__12063,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12060,head,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__12066){
var vec__12070 = p__12066;
var head = cljs.core.nth.call(null,vec__12070,(0),null);
var more = cljs.core.nthnext.call(null,vec__12070,(1));
var vec__12071 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__12071,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12071,(1),null);
var vec__12072 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__12072,(0),null);
var body = cljs.core.nth.call(null,vec__12072,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12071,fn_name,more__$1,vec__12072,params,body,vec__12070,head,more){
return (function (p1__12064_SHARP_){
return fipp.visit.visit.call(null,p,p1__12064_SHARP_);
});})(vec__12071,fn_name,more__$1,vec__12072,params,body,vec__12070,head,more))
,body):cljs.core.map.call(null,((function (vec__12071,fn_name,more__$1,vec__12072,params,body,vec__12070,head,more){
return (function (p1__12065_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12065_SHARP_);
});})(vec__12071,fn_name,more__$1,vec__12072,params,body,vec__12070,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__12076){
var vec__12079 = p__12076;
var _ = cljs.core.nth.call(null,vec__12079,(0),null);
var params = cljs.core.nth.call(null,vec__12079,(1),null);
var body = cljs.core.nth.call(null,vec__12079,(2),null);
var form = vec__12079;
if((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body))){
var vec__12080 = cljs.core.split_with.call(null,((function (vec__12079,_,params,body,form){
return (function (p1__12073_SHARP_){
return cljs.core.not_EQ_.call(null,p1__12073_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__12079,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__12080,(0),null);
var rests = cljs.core.nth.call(null,vec__12080,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)], true, false):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__12080,inits,rests,vec__12079,_,params,body,form){
return (function (p1__12074_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str("%"),cljs.core.str((p1__12074_SHARP_ + (1)))].join(''));
});})(vec__12080,inits,rests,vec__12079,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)], true, false):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12080,inits,rests,params_STAR_,body_STAR_,vec__12079,_,params,body,form){
return (function (p1__12075_SHARP_){
return fipp.visit.visit.call(null,p,p1__12075_SHARP_);
});})(vec__12080,inits,rests,params_STAR_,body_STAR_,vec__12079,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__12082){
var vec__12084 = p__12082;
var head = cljs.core.nth.call(null,vec__12084,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12084,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12084,head,clauses){
return (function (p1__12081_SHARP_){
return fipp.visit.visit.call(null,p,p1__12081_SHARP_);
});})(vec__12084,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__12086){
var vec__12090 = p__12086;
var head = cljs.core.nth.call(null,vec__12090,(0),null);
var ns_sym = cljs.core.nth.call(null,vec__12090,(1),null);
var more = cljs.core.nthnext.call(null,vec__12090,(2));
var vec__12091 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12091,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12091,(1),null);
var vec__12092 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12092,(0),null);
var specs = cljs.core.nth.call(null,vec__12092,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__12091,docstring,more__$1,vec__12092,attr_map,specs,vec__12090,head,ns_sym,more){
return (function (p1__12085_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__12085_SHARP_);
});})(vec__12091,docstring,more__$1,vec__12092,attr_map,specs,vec__12090,head,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__12093){
var vec__12096 = p__12093;
var macro = cljs.core.nth.call(null,vec__12096,(0),null);
var arg = cljs.core.nth.call(null,vec__12096,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__12097 = (((cljs.core.keyword.call(null,cljs.core.name.call(null,macro)) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.name.call(null,macro)).fqn:null);
switch (G__12097) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.keyword.call(null,cljs.core.name.call(null,macro)))].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__5761__auto__ = (function fipp$clojure$pretty_bindings_$_iter__12107(s__12108){
return (new cljs.core.LazySeq(null,(function (){
var s__12108__$1 = s__12108;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12108__$1);
if(temp__4425__auto__){
var s__12108__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12108__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12108__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12110 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12109 = (0);
while(true){
if((i__12109 < size__5760__auto__)){
var vec__12113 = cljs.core._nth.call(null,c__5759__auto__,i__12109);
var k = cljs.core.nth.call(null,vec__12113,(0),null);
var v = cljs.core.nth.call(null,vec__12113,(1),null);
cljs.core.chunk_append.call(null,b__12110,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__12115 = (i__12109 + (1));
i__12109 = G__12115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12110),fipp$clojure$pretty_bindings_$_iter__12107.call(null,cljs.core.chunk_rest.call(null,s__12108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12110),null);
}
} else {
var vec__12114 = cljs.core.first.call(null,s__12108__$2);
var k = cljs.core.nth.call(null,vec__12114,(0),null);
var v = cljs.core.nth.call(null,vec__12114,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__12107.call(null,cljs.core.rest.call(null,s__12108__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5761__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__12117){
var vec__12119 = p__12117;
var head = cljs.core.nth.call(null,vec__12119,(0),null);
var bvec = cljs.core.nth.call(null,vec__12119,(1),null);
var body = cljs.core.nthnext.call(null,vec__12119,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12119,head,bvec,body){
return (function (p1__12116_SHARP_){
return fipp.visit.visit.call(null,p,p1__12116_SHARP_);
});})(vec__12119,head,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__12120_SHARP_){
return fipp.visit.visit.call(null,p,p1__12120_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__12121){
var vec__12123 = p__12121;
var head = cljs.core.nth.call(null,vec__12123,(0),null);
var fields = cljs.core.nth.call(null,vec__12123,(1),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12123,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__12124){
var vec__12126 = p__12124;
var head = cljs.core.nth.call(null,vec__12126,(0),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12126,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5761__auto__ = (function fipp$clojure$build_symbol_map_$_iter__12137(s__12138){
return (new cljs.core.LazySeq(null,(function (){
var s__12138__$1 = s__12138;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12138__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__12146 = cljs.core.first.call(null,xs__4977__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__12146,(0),null);
var syms = cljs.core.nth.call(null,vec__12146,(1),null);
var iterys__5757__auto__ = ((function (s__12138__$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12137_$_iter__12139(s__12140){
return (new cljs.core.LazySeq(null,((function (s__12138__$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12140__$1 = s__12140;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__12140__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var sym = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__5757__auto__ = ((function (s__12140__$1,s__12138__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12137_$_iter__12139_$_iter__12141(s__12142){
return (new cljs.core.LazySeq(null,((function (s__12140__$1,s__12138__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12142__$1 = s__12142;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__12142__$1);
if(temp__4425__auto____$2){
var s__12142__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12142__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12142__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12144 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12143 = (0);
while(true){
if((i__12143 < size__5760__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__5759__auto__,i__12143);
cljs.core.chunk_append.call(null,b__12144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__12147 = (i__12143 + (1));
i__12143 = G__12147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12144),fipp$clojure$build_symbol_map_$_iter__12137_$_iter__12139_$_iter__12141.call(null,cljs.core.chunk_rest.call(null,s__12142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12144),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__12142__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__12137_$_iter__12139_$_iter__12141.call(null,cljs.core.rest.call(null,s__12142__$2)));
}
} else {
return null;
}
break;
}
});})(s__12140__$1,s__12138__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12140__$1,s__12138__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12137_$_iter__12139.call(null,cljs.core.rest.call(null,s__12140__$1)));
} else {
var G__12148 = cljs.core.rest.call(null,s__12140__$1);
s__12140__$1 = G__12148;
continue;
}
} else {
return null;
}
break;
}
});})(s__12138__$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12138__$1,vec__12146,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,syms));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12137.call(null,cljs.core.rest.call(null,s__12138__$1)));
} else {
var G__12149 = cljs.core.rest.call(null,s__12138__$1);
s__12138__$1 = G__12149;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5761__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(){
var args12150 = [];
var len__6047__auto___12153 = arguments.length;
var i__6048__auto___12154 = (0);
while(true){
if((i__6048__auto___12154 < len__6047__auto___12153)){
args12150.push((arguments[i__6048__auto___12154]));

var G__12155 = (i__6048__auto___12154 + (1));
i__6048__auto___12154 = G__12155;
continue;
} else {
}
break;
}

var G__12152 = args12150.length;
switch (G__12152) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12150.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;
