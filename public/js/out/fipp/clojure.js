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
var len__6047__auto___12078 = arguments.length;
var i__6048__auto___12079 = (0);
while(true){
if((i__6048__auto___12079 < len__6047__auto___12078)){
args__6054__auto__.push((arguments[i__6048__auto___12079]));

var G__12080 = (i__6048__auto___12079 + (1));
i__6048__auto___12079 = G__12080;
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

fipp.clojure.list_group.cljs$lang$applyTo = (function (seq12077){
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12077));
});
fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__12081){
var vec__12083 = p__12081;
var test = cljs.core.nth.call(null,vec__12083,(0),null);
var result = cljs.core.nth.call(null,vec__12083,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__12085){
var vec__12087 = p__12085;
var head = cljs.core.nth.call(null,vec__12087,(0),null);
var expr = cljs.core.nth.call(null,vec__12087,(1),null);
var more = cljs.core.nthnext.call(null,vec__12087,(2));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12087,head,expr,more){
return (function (p1__12084_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12084_SHARP_);
});})(clauses,default$,vec__12087,head,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__12089){
var vec__12091 = p__12089;
var head = cljs.core.nth.call(null,vec__12091,(0),null);
var more = cljs.core.nthnext.call(null,vec__12091,(1));
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__12091,head,more){
return (function (p1__12088_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12088_SHARP_);
});})(clauses,vec__12091,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__12093){
var vec__12095 = p__12093;
var head = cljs.core.nth.call(null,vec__12095,(0),null);
var pred = cljs.core.nth.call(null,vec__12095,(1),null);
var expr = cljs.core.nth.call(null,vec__12095,(2),null);
var more = cljs.core.nthnext.call(null,vec__12095,(3));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12095,head,pred,expr,more){
return (function (p1__12092_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12092_SHARP_);
});})(clauses,default$,vec__12095,head,pred,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__12097){
var vec__12099 = p__12097;
var head = cljs.core.nth.call(null,vec__12099,(0),null);
var stmts = cljs.core.nthnext.call(null,vec__12099,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12099,head,stmts){
return (function (p1__12096_SHARP_){
return fipp.visit.visit.call(null,p,p1__12096_SHARP_);
});})(vec__12099,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__12101){
var vec__12103 = p__12101;
var head = cljs.core.nth.call(null,vec__12103,(0),null);
var test = cljs.core.nth.call(null,vec__12103,(1),null);
var more = cljs.core.nthnext.call(null,vec__12103,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12103,head,test,more){
return (function (p1__12100_SHARP_){
return fipp.visit.visit.call(null,p,p1__12100_SHARP_);
});})(vec__12103,head,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__12105){
var vec__12107 = p__12105;
var params = cljs.core.nth.call(null,vec__12107,(0),null);
var body = cljs.core.nthnext.call(null,vec__12107,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12107,params,body){
return (function (p1__12104_SHARP_){
return fipp.visit.visit.call(null,p,p1__12104_SHARP_);
});})(vec__12107,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__12110){
var vec__12115 = p__12110;
var head = cljs.core.nth.call(null,vec__12115,(0),null);
var fn_name = cljs.core.nth.call(null,vec__12115,(1),null);
var more = cljs.core.nthnext.call(null,vec__12115,(2));
var vec__12116 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12116,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12116,(1),null);
var vec__12117 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12117,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__12117,(1),null);
var vec__12118 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__12118,(0),null);
var body = cljs.core.nth.call(null,vec__12118,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12116,docstring,more__$1,vec__12117,attr_map,more__$2,vec__12118,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12115,head,fn_name,more){
return (function (p1__12108_SHARP_){
return fipp.visit.visit.call(null,p,p1__12108_SHARP_);
});})(vec__12116,docstring,more__$1,vec__12117,attr_map,more__$2,vec__12118,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12115,head,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__12116,docstring,more__$1,vec__12117,attr_map,more__$2,vec__12118,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12115,head,fn_name,more){
return (function (p1__12109_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12109_SHARP_);
});})(vec__12116,docstring,more__$1,vec__12117,attr_map,more__$2,vec__12118,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12115,head,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__12121){
var vec__12125 = p__12121;
var head = cljs.core.nth.call(null,vec__12125,(0),null);
var more = cljs.core.nthnext.call(null,vec__12125,(1));
var vec__12126 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__12126,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12126,(1),null);
var vec__12127 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__12127,(0),null);
var body = cljs.core.nth.call(null,vec__12127,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12126,fn_name,more__$1,vec__12127,params,body,vec__12125,head,more){
return (function (p1__12119_SHARP_){
return fipp.visit.visit.call(null,p,p1__12119_SHARP_);
});})(vec__12126,fn_name,more__$1,vec__12127,params,body,vec__12125,head,more))
,body):cljs.core.map.call(null,((function (vec__12126,fn_name,more__$1,vec__12127,params,body,vec__12125,head,more){
return (function (p1__12120_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12120_SHARP_);
});})(vec__12126,fn_name,more__$1,vec__12127,params,body,vec__12125,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__12131){
var vec__12134 = p__12131;
var _ = cljs.core.nth.call(null,vec__12134,(0),null);
var params = cljs.core.nth.call(null,vec__12134,(1),null);
var body = cljs.core.nth.call(null,vec__12134,(2),null);
var form = vec__12134;
if((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body))){
var vec__12135 = cljs.core.split_with.call(null,((function (vec__12134,_,params,body,form){
return (function (p1__12128_SHARP_){
return cljs.core.not_EQ_.call(null,p1__12128_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__12134,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__12135,(0),null);
var rests = cljs.core.nth.call(null,vec__12135,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)], true, false):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__12135,inits,rests,vec__12134,_,params,body,form){
return (function (p1__12129_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str("%"),cljs.core.str((p1__12129_SHARP_ + (1)))].join(''));
});})(vec__12135,inits,rests,vec__12134,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)], true, false):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12135,inits,rests,params_STAR_,body_STAR_,vec__12134,_,params,body,form){
return (function (p1__12130_SHARP_){
return fipp.visit.visit.call(null,p,p1__12130_SHARP_);
});})(vec__12135,inits,rests,params_STAR_,body_STAR_,vec__12134,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__12137){
var vec__12139 = p__12137;
var head = cljs.core.nth.call(null,vec__12139,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12139,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12139,head,clauses){
return (function (p1__12136_SHARP_){
return fipp.visit.visit.call(null,p,p1__12136_SHARP_);
});})(vec__12139,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__12141){
var vec__12145 = p__12141;
var head = cljs.core.nth.call(null,vec__12145,(0),null);
var ns_sym = cljs.core.nth.call(null,vec__12145,(1),null);
var more = cljs.core.nthnext.call(null,vec__12145,(2));
var vec__12146 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12146,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12146,(1),null);
var vec__12147 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12147,(0),null);
var specs = cljs.core.nth.call(null,vec__12147,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__12146,docstring,more__$1,vec__12147,attr_map,specs,vec__12145,head,ns_sym,more){
return (function (p1__12140_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__12140_SHARP_);
});})(vec__12146,docstring,more__$1,vec__12147,attr_map,specs,vec__12145,head,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__12148){
var vec__12151 = p__12148;
var macro = cljs.core.nth.call(null,vec__12151,(0),null);
var arg = cljs.core.nth.call(null,vec__12151,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__12152 = (((cljs.core.keyword.call(null,cljs.core.name.call(null,macro)) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.name.call(null,macro)).fqn:null);
switch (G__12152) {
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
var kvps = (function (){var iter__5761__auto__ = (function fipp$clojure$pretty_bindings_$_iter__12162(s__12163){
return (new cljs.core.LazySeq(null,(function (){
var s__12163__$1 = s__12163;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12163__$1);
if(temp__4425__auto__){
var s__12163__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12163__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12163__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12165 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12164 = (0);
while(true){
if((i__12164 < size__5760__auto__)){
var vec__12168 = cljs.core._nth.call(null,c__5759__auto__,i__12164);
var k = cljs.core.nth.call(null,vec__12168,(0),null);
var v = cljs.core.nth.call(null,vec__12168,(1),null);
cljs.core.chunk_append.call(null,b__12165,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__12170 = (i__12164 + (1));
i__12164 = G__12170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12165),fipp$clojure$pretty_bindings_$_iter__12162.call(null,cljs.core.chunk_rest.call(null,s__12163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12165),null);
}
} else {
var vec__12169 = cljs.core.first.call(null,s__12163__$2);
var k = cljs.core.nth.call(null,vec__12169,(0),null);
var v = cljs.core.nth.call(null,vec__12169,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__12162.call(null,cljs.core.rest.call(null,s__12163__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__12172){
var vec__12174 = p__12172;
var head = cljs.core.nth.call(null,vec__12174,(0),null);
var bvec = cljs.core.nth.call(null,vec__12174,(1),null);
var body = cljs.core.nthnext.call(null,vec__12174,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12174,head,bvec,body){
return (function (p1__12171_SHARP_){
return fipp.visit.visit.call(null,p,p1__12171_SHARP_);
});})(vec__12174,head,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__12175_SHARP_){
return fipp.visit.visit.call(null,p,p1__12175_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__12176){
var vec__12178 = p__12176;
var head = cljs.core.nth.call(null,vec__12178,(0),null);
var fields = cljs.core.nth.call(null,vec__12178,(1),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12178,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__12179){
var vec__12181 = p__12179;
var head = cljs.core.nth.call(null,vec__12181,(0),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12181,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5761__auto__ = (function fipp$clojure$build_symbol_map_$_iter__12192(s__12193){
return (new cljs.core.LazySeq(null,(function (){
var s__12193__$1 = s__12193;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12193__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__12201 = cljs.core.first.call(null,xs__4977__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__12201,(0),null);
var syms = cljs.core.nth.call(null,vec__12201,(1),null);
var iterys__5757__auto__ = ((function (s__12193__$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12192_$_iter__12194(s__12195){
return (new cljs.core.LazySeq(null,((function (s__12193__$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12195__$1 = s__12195;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__12195__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var sym = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__5757__auto__ = ((function (s__12195__$1,s__12193__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12192_$_iter__12194_$_iter__12196(s__12197){
return (new cljs.core.LazySeq(null,((function (s__12195__$1,s__12193__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12197__$1 = s__12197;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__12197__$1);
if(temp__4425__auto____$2){
var s__12197__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12197__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12197__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12199 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12198 = (0);
while(true){
if((i__12198 < size__5760__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__5759__auto__,i__12198);
cljs.core.chunk_append.call(null,b__12199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__12202 = (i__12198 + (1));
i__12198 = G__12202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12199),fipp$clojure$build_symbol_map_$_iter__12192_$_iter__12194_$_iter__12196.call(null,cljs.core.chunk_rest.call(null,s__12197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12199),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__12197__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__12192_$_iter__12194_$_iter__12196.call(null,cljs.core.rest.call(null,s__12197__$2)));
}
} else {
return null;
}
break;
}
});})(s__12195__$1,s__12193__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12195__$1,s__12193__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12192_$_iter__12194.call(null,cljs.core.rest.call(null,s__12195__$1)));
} else {
var G__12203 = cljs.core.rest.call(null,s__12195__$1);
s__12195__$1 = G__12203;
continue;
}
} else {
return null;
}
break;
}
});})(s__12193__$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12193__$1,vec__12201,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,syms));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12192.call(null,cljs.core.rest.call(null,s__12193__$1)));
} else {
var G__12204 = cljs.core.rest.call(null,s__12193__$1);
s__12193__$1 = G__12204;
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
var args12205 = [];
var len__6047__auto___12208 = arguments.length;
var i__6048__auto___12209 = (0);
while(true){
if((i__6048__auto___12209 < len__6047__auto___12208)){
args12205.push((arguments[i__6048__auto___12209]));

var G__12210 = (i__6048__auto___12209 + (1));
i__6048__auto___12209 = G__12210;
continue;
} else {
}
break;
}

var G__12207 = args12205.length;
switch (G__12207) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12205.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;
