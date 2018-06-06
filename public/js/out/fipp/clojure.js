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
var len__6047__auto___12042 = arguments.length;
var i__6048__auto___12043 = (0);
while(true){
if((i__6048__auto___12043 < len__6047__auto___12042)){
args__6054__auto__.push((arguments[i__6048__auto___12043]));

var G__12044 = (i__6048__auto___12043 + (1));
i__6048__auto___12043 = G__12044;
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

fipp.clojure.list_group.cljs$lang$applyTo = (function (seq12041){
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12041));
});
fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__12045){
var vec__12047 = p__12045;
var test = cljs.core.nth.call(null,vec__12047,(0),null);
var result = cljs.core.nth.call(null,vec__12047,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__12049){
var vec__12051 = p__12049;
var head = cljs.core.nth.call(null,vec__12051,(0),null);
var expr = cljs.core.nth.call(null,vec__12051,(1),null);
var more = cljs.core.nthnext.call(null,vec__12051,(2));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12051,head,expr,more){
return (function (p1__12048_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12048_SHARP_);
});})(clauses,default$,vec__12051,head,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__12053){
var vec__12055 = p__12053;
var head = cljs.core.nth.call(null,vec__12055,(0),null);
var more = cljs.core.nthnext.call(null,vec__12055,(1));
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__12055,head,more){
return (function (p1__12052_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12052_SHARP_);
});})(clauses,vec__12055,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__12057){
var vec__12059 = p__12057;
var head = cljs.core.nth.call(null,vec__12059,(0),null);
var pred = cljs.core.nth.call(null,vec__12059,(1),null);
var expr = cljs.core.nth.call(null,vec__12059,(2),null);
var more = cljs.core.nthnext.call(null,vec__12059,(3));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12059,head,pred,expr,more){
return (function (p1__12056_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12056_SHARP_);
});})(clauses,default$,vec__12059,head,pred,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__12061){
var vec__12063 = p__12061;
var head = cljs.core.nth.call(null,vec__12063,(0),null);
var stmts = cljs.core.nthnext.call(null,vec__12063,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12063,head,stmts){
return (function (p1__12060_SHARP_){
return fipp.visit.visit.call(null,p,p1__12060_SHARP_);
});})(vec__12063,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__12065){
var vec__12067 = p__12065;
var head = cljs.core.nth.call(null,vec__12067,(0),null);
var test = cljs.core.nth.call(null,vec__12067,(1),null);
var more = cljs.core.nthnext.call(null,vec__12067,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12067,head,test,more){
return (function (p1__12064_SHARP_){
return fipp.visit.visit.call(null,p,p1__12064_SHARP_);
});})(vec__12067,head,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__12069){
var vec__12071 = p__12069;
var params = cljs.core.nth.call(null,vec__12071,(0),null);
var body = cljs.core.nthnext.call(null,vec__12071,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12071,params,body){
return (function (p1__12068_SHARP_){
return fipp.visit.visit.call(null,p,p1__12068_SHARP_);
});})(vec__12071,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__12074){
var vec__12079 = p__12074;
var head = cljs.core.nth.call(null,vec__12079,(0),null);
var fn_name = cljs.core.nth.call(null,vec__12079,(1),null);
var more = cljs.core.nthnext.call(null,vec__12079,(2));
var vec__12080 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12080,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12080,(1),null);
var vec__12081 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12081,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__12081,(1),null);
var vec__12082 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__12082,(0),null);
var body = cljs.core.nth.call(null,vec__12082,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12080,docstring,more__$1,vec__12081,attr_map,more__$2,vec__12082,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12079,head,fn_name,more){
return (function (p1__12072_SHARP_){
return fipp.visit.visit.call(null,p,p1__12072_SHARP_);
});})(vec__12080,docstring,more__$1,vec__12081,attr_map,more__$2,vec__12082,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12079,head,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__12080,docstring,more__$1,vec__12081,attr_map,more__$2,vec__12082,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12079,head,fn_name,more){
return (function (p1__12073_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12073_SHARP_);
});})(vec__12080,docstring,more__$1,vec__12081,attr_map,more__$2,vec__12082,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12079,head,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__12085){
var vec__12089 = p__12085;
var head = cljs.core.nth.call(null,vec__12089,(0),null);
var more = cljs.core.nthnext.call(null,vec__12089,(1));
var vec__12090 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__12090,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12090,(1),null);
var vec__12091 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__12091,(0),null);
var body = cljs.core.nth.call(null,vec__12091,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12090,fn_name,more__$1,vec__12091,params,body,vec__12089,head,more){
return (function (p1__12083_SHARP_){
return fipp.visit.visit.call(null,p,p1__12083_SHARP_);
});})(vec__12090,fn_name,more__$1,vec__12091,params,body,vec__12089,head,more))
,body):cljs.core.map.call(null,((function (vec__12090,fn_name,more__$1,vec__12091,params,body,vec__12089,head,more){
return (function (p1__12084_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12084_SHARP_);
});})(vec__12090,fn_name,more__$1,vec__12091,params,body,vec__12089,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__12095){
var vec__12098 = p__12095;
var _ = cljs.core.nth.call(null,vec__12098,(0),null);
var params = cljs.core.nth.call(null,vec__12098,(1),null);
var body = cljs.core.nth.call(null,vec__12098,(2),null);
var form = vec__12098;
if((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body))){
var vec__12099 = cljs.core.split_with.call(null,((function (vec__12098,_,params,body,form){
return (function (p1__12092_SHARP_){
return cljs.core.not_EQ_.call(null,p1__12092_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__12098,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__12099,(0),null);
var rests = cljs.core.nth.call(null,vec__12099,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)], true, false):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__12099,inits,rests,vec__12098,_,params,body,form){
return (function (p1__12093_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str("%"),cljs.core.str((p1__12093_SHARP_ + (1)))].join(''));
});})(vec__12099,inits,rests,vec__12098,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)], true, false):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12099,inits,rests,params_STAR_,body_STAR_,vec__12098,_,params,body,form){
return (function (p1__12094_SHARP_){
return fipp.visit.visit.call(null,p,p1__12094_SHARP_);
});})(vec__12099,inits,rests,params_STAR_,body_STAR_,vec__12098,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__12101){
var vec__12103 = p__12101;
var head = cljs.core.nth.call(null,vec__12103,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12103,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12103,head,clauses){
return (function (p1__12100_SHARP_){
return fipp.visit.visit.call(null,p,p1__12100_SHARP_);
});})(vec__12103,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__12105){
var vec__12109 = p__12105;
var head = cljs.core.nth.call(null,vec__12109,(0),null);
var ns_sym = cljs.core.nth.call(null,vec__12109,(1),null);
var more = cljs.core.nthnext.call(null,vec__12109,(2));
var vec__12110 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12110,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12110,(1),null);
var vec__12111 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12111,(0),null);
var specs = cljs.core.nth.call(null,vec__12111,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__12110,docstring,more__$1,vec__12111,attr_map,specs,vec__12109,head,ns_sym,more){
return (function (p1__12104_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__12104_SHARP_);
});})(vec__12110,docstring,more__$1,vec__12111,attr_map,specs,vec__12109,head,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__12112){
var vec__12115 = p__12112;
var macro = cljs.core.nth.call(null,vec__12115,(0),null);
var arg = cljs.core.nth.call(null,vec__12115,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__12116 = (((cljs.core.keyword.call(null,cljs.core.name.call(null,macro)) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.name.call(null,macro)).fqn:null);
switch (G__12116) {
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
var kvps = (function (){var iter__5761__auto__ = (function fipp$clojure$pretty_bindings_$_iter__12126(s__12127){
return (new cljs.core.LazySeq(null,(function (){
var s__12127__$1 = s__12127;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12127__$1);
if(temp__4425__auto__){
var s__12127__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12127__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12127__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12129 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12128 = (0);
while(true){
if((i__12128 < size__5760__auto__)){
var vec__12132 = cljs.core._nth.call(null,c__5759__auto__,i__12128);
var k = cljs.core.nth.call(null,vec__12132,(0),null);
var v = cljs.core.nth.call(null,vec__12132,(1),null);
cljs.core.chunk_append.call(null,b__12129,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__12134 = (i__12128 + (1));
i__12128 = G__12134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12129),fipp$clojure$pretty_bindings_$_iter__12126.call(null,cljs.core.chunk_rest.call(null,s__12127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12129),null);
}
} else {
var vec__12133 = cljs.core.first.call(null,s__12127__$2);
var k = cljs.core.nth.call(null,vec__12133,(0),null);
var v = cljs.core.nth.call(null,vec__12133,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__12126.call(null,cljs.core.rest.call(null,s__12127__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__12136){
var vec__12138 = p__12136;
var head = cljs.core.nth.call(null,vec__12138,(0),null);
var bvec = cljs.core.nth.call(null,vec__12138,(1),null);
var body = cljs.core.nthnext.call(null,vec__12138,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12138,head,bvec,body){
return (function (p1__12135_SHARP_){
return fipp.visit.visit.call(null,p,p1__12135_SHARP_);
});})(vec__12138,head,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__12139_SHARP_){
return fipp.visit.visit.call(null,p,p1__12139_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__12140){
var vec__12142 = p__12140;
var head = cljs.core.nth.call(null,vec__12142,(0),null);
var fields = cljs.core.nth.call(null,vec__12142,(1),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12142,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__12143){
var vec__12145 = p__12143;
var head = cljs.core.nth.call(null,vec__12145,(0),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12145,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5761__auto__ = (function fipp$clojure$build_symbol_map_$_iter__12156(s__12157){
return (new cljs.core.LazySeq(null,(function (){
var s__12157__$1 = s__12157;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12157__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__12165 = cljs.core.first.call(null,xs__4977__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__12165,(0),null);
var syms = cljs.core.nth.call(null,vec__12165,(1),null);
var iterys__5757__auto__ = ((function (s__12157__$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12156_$_iter__12158(s__12159){
return (new cljs.core.LazySeq(null,((function (s__12157__$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12159__$1 = s__12159;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__12159__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var sym = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__5757__auto__ = ((function (s__12159__$1,s__12157__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12156_$_iter__12158_$_iter__12160(s__12161){
return (new cljs.core.LazySeq(null,((function (s__12159__$1,s__12157__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12161__$1 = s__12161;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__12161__$1);
if(temp__4425__auto____$2){
var s__12161__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12161__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12161__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12163 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12162 = (0);
while(true){
if((i__12162 < size__5760__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__5759__auto__,i__12162);
cljs.core.chunk_append.call(null,b__12163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__12166 = (i__12162 + (1));
i__12162 = G__12166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12163),fipp$clojure$build_symbol_map_$_iter__12156_$_iter__12158_$_iter__12160.call(null,cljs.core.chunk_rest.call(null,s__12161__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12163),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__12161__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__12156_$_iter__12158_$_iter__12160.call(null,cljs.core.rest.call(null,s__12161__$2)));
}
} else {
return null;
}
break;
}
});})(s__12159__$1,s__12157__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12159__$1,s__12157__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12156_$_iter__12158.call(null,cljs.core.rest.call(null,s__12159__$1)));
} else {
var G__12167 = cljs.core.rest.call(null,s__12159__$1);
s__12159__$1 = G__12167;
continue;
}
} else {
return null;
}
break;
}
});})(s__12157__$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12157__$1,vec__12165,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,syms));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12156.call(null,cljs.core.rest.call(null,s__12157__$1)));
} else {
var G__12168 = cljs.core.rest.call(null,s__12157__$1);
s__12157__$1 = G__12168;
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
var args12169 = [];
var len__6047__auto___12172 = arguments.length;
var i__6048__auto___12173 = (0);
while(true){
if((i__6048__auto___12173 < len__6047__auto___12172)){
args12169.push((arguments[i__6048__auto___12173]));

var G__12174 = (i__6048__auto___12173 + (1));
i__6048__auto___12173 = G__12174;
continue;
} else {
}
break;
}

var G__12171 = args12169.length;
switch (G__12171) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12169.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;
