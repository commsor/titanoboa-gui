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
var len__6047__auto___12115 = arguments.length;
var i__6048__auto___12116 = (0);
while(true){
if((i__6048__auto___12116 < len__6047__auto___12115)){
args__6054__auto__.push((arguments[i__6048__auto___12116]));

var G__12117 = (i__6048__auto___12116 + (1));
i__6048__auto___12116 = G__12117;
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

fipp.clojure.list_group.cljs$lang$applyTo = (function (seq12114){
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12114));
});
fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__12118){
var vec__12120 = p__12118;
var test = cljs.core.nth.call(null,vec__12120,(0),null);
var result = cljs.core.nth.call(null,vec__12120,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__12122){
var vec__12124 = p__12122;
var head = cljs.core.nth.call(null,vec__12124,(0),null);
var expr = cljs.core.nth.call(null,vec__12124,(1),null);
var more = cljs.core.nthnext.call(null,vec__12124,(2));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12124,head,expr,more){
return (function (p1__12121_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12121_SHARP_);
});})(clauses,default$,vec__12124,head,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__12126){
var vec__12128 = p__12126;
var head = cljs.core.nth.call(null,vec__12128,(0),null);
var more = cljs.core.nthnext.call(null,vec__12128,(1));
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__12128,head,more){
return (function (p1__12125_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12125_SHARP_);
});})(clauses,vec__12128,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__12130){
var vec__12132 = p__12130;
var head = cljs.core.nth.call(null,vec__12132,(0),null);
var pred = cljs.core.nth.call(null,vec__12132,(1),null);
var expr = cljs.core.nth.call(null,vec__12132,(2),null);
var more = cljs.core.nthnext.call(null,vec__12132,(3));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__12132,head,pred,expr,more){
return (function (p1__12129_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__12129_SHARP_);
});})(clauses,default$,vec__12132,head,pred,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__12134){
var vec__12136 = p__12134;
var head = cljs.core.nth.call(null,vec__12136,(0),null);
var stmts = cljs.core.nthnext.call(null,vec__12136,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12136,head,stmts){
return (function (p1__12133_SHARP_){
return fipp.visit.visit.call(null,p,p1__12133_SHARP_);
});})(vec__12136,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__12138){
var vec__12140 = p__12138;
var head = cljs.core.nth.call(null,vec__12140,(0),null);
var test = cljs.core.nth.call(null,vec__12140,(1),null);
var more = cljs.core.nthnext.call(null,vec__12140,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12140,head,test,more){
return (function (p1__12137_SHARP_){
return fipp.visit.visit.call(null,p,p1__12137_SHARP_);
});})(vec__12140,head,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__12142){
var vec__12144 = p__12142;
var params = cljs.core.nth.call(null,vec__12144,(0),null);
var body = cljs.core.nthnext.call(null,vec__12144,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12144,params,body){
return (function (p1__12141_SHARP_){
return fipp.visit.visit.call(null,p,p1__12141_SHARP_);
});})(vec__12144,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__12147){
var vec__12152 = p__12147;
var head = cljs.core.nth.call(null,vec__12152,(0),null);
var fn_name = cljs.core.nth.call(null,vec__12152,(1),null);
var more = cljs.core.nthnext.call(null,vec__12152,(2));
var vec__12153 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12153,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12153,(1),null);
var vec__12154 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12154,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__12154,(1),null);
var vec__12155 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__12155,(0),null);
var body = cljs.core.nth.call(null,vec__12155,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12153,docstring,more__$1,vec__12154,attr_map,more__$2,vec__12155,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12152,head,fn_name,more){
return (function (p1__12145_SHARP_){
return fipp.visit.visit.call(null,p,p1__12145_SHARP_);
});})(vec__12153,docstring,more__$1,vec__12154,attr_map,more__$2,vec__12155,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12152,head,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__12153,docstring,more__$1,vec__12154,attr_map,more__$2,vec__12155,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12152,head,fn_name,more){
return (function (p1__12146_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12146_SHARP_);
});})(vec__12153,docstring,more__$1,vec__12154,attr_map,more__$2,vec__12155,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__12152,head,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__12158){
var vec__12162 = p__12158;
var head = cljs.core.nth.call(null,vec__12162,(0),null);
var more = cljs.core.nthnext.call(null,vec__12162,(1));
var vec__12163 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__12163,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12163,(1),null);
var vec__12164 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__12164,(0),null);
var body = cljs.core.nth.call(null,vec__12164,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__12163,fn_name,more__$1,vec__12164,params,body,vec__12162,head,more){
return (function (p1__12156_SHARP_){
return fipp.visit.visit.call(null,p,p1__12156_SHARP_);
});})(vec__12163,fn_name,more__$1,vec__12164,params,body,vec__12162,head,more))
,body):cljs.core.map.call(null,((function (vec__12163,fn_name,more__$1,vec__12164,params,body,vec__12162,head,more){
return (function (p1__12157_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__12157_SHARP_);
});})(vec__12163,fn_name,more__$1,vec__12164,params,body,vec__12162,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__12168){
var vec__12171 = p__12168;
var _ = cljs.core.nth.call(null,vec__12171,(0),null);
var params = cljs.core.nth.call(null,vec__12171,(1),null);
var body = cljs.core.nth.call(null,vec__12171,(2),null);
var form = vec__12171;
if((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body))){
var vec__12172 = cljs.core.split_with.call(null,((function (vec__12171,_,params,body,form){
return (function (p1__12165_SHARP_){
return cljs.core.not_EQ_.call(null,p1__12165_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__12171,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__12172,(0),null);
var rests = cljs.core.nth.call(null,vec__12172,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)], true, false):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__12172,inits,rests,vec__12171,_,params,body,form){
return (function (p1__12166_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str("%"),cljs.core.str((p1__12166_SHARP_ + (1)))].join(''));
});})(vec__12172,inits,rests,vec__12171,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)], true, false):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12172,inits,rests,params_STAR_,body_STAR_,vec__12171,_,params,body,form){
return (function (p1__12167_SHARP_){
return fipp.visit.visit.call(null,p,p1__12167_SHARP_);
});})(vec__12172,inits,rests,params_STAR_,body_STAR_,vec__12171,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__12174){
var vec__12176 = p__12174;
var head = cljs.core.nth.call(null,vec__12176,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12176,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__12176,head,clauses){
return (function (p1__12173_SHARP_){
return fipp.visit.visit.call(null,p,p1__12173_SHARP_);
});})(vec__12176,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__12178){
var vec__12182 = p__12178;
var head = cljs.core.nth.call(null,vec__12182,(0),null);
var ns_sym = cljs.core.nth.call(null,vec__12182,(1),null);
var more = cljs.core.nthnext.call(null,vec__12182,(2));
var vec__12183 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__12183,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__12183,(1),null);
var vec__12184 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__12184,(0),null);
var specs = cljs.core.nth.call(null,vec__12184,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__12183,docstring,more__$1,vec__12184,attr_map,specs,vec__12182,head,ns_sym,more){
return (function (p1__12177_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__12177_SHARP_);
});})(vec__12183,docstring,more__$1,vec__12184,attr_map,specs,vec__12182,head,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__12185){
var vec__12188 = p__12185;
var macro = cljs.core.nth.call(null,vec__12188,(0),null);
var arg = cljs.core.nth.call(null,vec__12188,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__12189 = (((cljs.core.keyword.call(null,cljs.core.name.call(null,macro)) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.name.call(null,macro)).fqn:null);
switch (G__12189) {
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
var kvps = (function (){var iter__5761__auto__ = (function fipp$clojure$pretty_bindings_$_iter__12199(s__12200){
return (new cljs.core.LazySeq(null,(function (){
var s__12200__$1 = s__12200;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12200__$1);
if(temp__4425__auto__){
var s__12200__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12200__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12200__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12202 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12201 = (0);
while(true){
if((i__12201 < size__5760__auto__)){
var vec__12205 = cljs.core._nth.call(null,c__5759__auto__,i__12201);
var k = cljs.core.nth.call(null,vec__12205,(0),null);
var v = cljs.core.nth.call(null,vec__12205,(1),null);
cljs.core.chunk_append.call(null,b__12202,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__12207 = (i__12201 + (1));
i__12201 = G__12207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12202),fipp$clojure$pretty_bindings_$_iter__12199.call(null,cljs.core.chunk_rest.call(null,s__12200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12202),null);
}
} else {
var vec__12206 = cljs.core.first.call(null,s__12200__$2);
var k = cljs.core.nth.call(null,vec__12206,(0),null);
var v = cljs.core.nth.call(null,vec__12206,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__12199.call(null,cljs.core.rest.call(null,s__12200__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__12209){
var vec__12211 = p__12209;
var head = cljs.core.nth.call(null,vec__12211,(0),null);
var bvec = cljs.core.nth.call(null,vec__12211,(1),null);
var body = cljs.core.nthnext.call(null,vec__12211,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__12211,head,bvec,body){
return (function (p1__12208_SHARP_){
return fipp.visit.visit.call(null,p,p1__12208_SHARP_);
});})(vec__12211,head,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__12212_SHARP_){
return fipp.visit.visit.call(null,p,p1__12212_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__12213){
var vec__12215 = p__12213;
var head = cljs.core.nth.call(null,vec__12215,(0),null);
var fields = cljs.core.nth.call(null,vec__12215,(1),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12215,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__12216){
var vec__12218 = p__12216;
var head = cljs.core.nth.call(null,vec__12218,(0),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__12218,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5761__auto__ = (function fipp$clojure$build_symbol_map_$_iter__12229(s__12230){
return (new cljs.core.LazySeq(null,(function (){
var s__12230__$1 = s__12230;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12230__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__12238 = cljs.core.first.call(null,xs__4977__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__12238,(0),null);
var syms = cljs.core.nth.call(null,vec__12238,(1),null);
var iterys__5757__auto__ = ((function (s__12230__$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12229_$_iter__12231(s__12232){
return (new cljs.core.LazySeq(null,((function (s__12230__$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12232__$1 = s__12232;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__12232__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var sym = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__5757__auto__ = ((function (s__12232__$1,s__12230__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__12229_$_iter__12231_$_iter__12233(s__12234){
return (new cljs.core.LazySeq(null,((function (s__12232__$1,s__12230__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12234__$1 = s__12234;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__12234__$1);
if(temp__4425__auto____$2){
var s__12234__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12234__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__12234__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__12236 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__12235 = (0);
while(true){
if((i__12235 < size__5760__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__5759__auto__,i__12235);
cljs.core.chunk_append.call(null,b__12236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__12239 = (i__12235 + (1));
i__12235 = G__12239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12236),fipp$clojure$build_symbol_map_$_iter__12229_$_iter__12231_$_iter__12233.call(null,cljs.core.chunk_rest.call(null,s__12234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12236),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__12234__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__12229_$_iter__12231_$_iter__12233.call(null,cljs.core.rest.call(null,s__12234__$2)));
}
} else {
return null;
}
break;
}
});})(s__12232__$1,s__12230__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12232__$1,s__12230__$1,sym,xs__4977__auto____$1,temp__4425__auto____$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12229_$_iter__12231.call(null,cljs.core.rest.call(null,s__12232__$1)));
} else {
var G__12240 = cljs.core.rest.call(null,s__12232__$1);
s__12232__$1 = G__12240;
continue;
}
} else {
return null;
}
break;
}
});})(s__12230__$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12230__$1,vec__12238,pretty_fn,syms,xs__4977__auto__,temp__4425__auto__))
;
var fs__5758__auto__ = cljs.core.seq.call(null,iterys__5757__auto__.call(null,syms));
if(fs__5758__auto__){
return cljs.core.concat.call(null,fs__5758__auto__,fipp$clojure$build_symbol_map_$_iter__12229.call(null,cljs.core.rest.call(null,s__12230__$1)));
} else {
var G__12241 = cljs.core.rest.call(null,s__12230__$1);
s__12230__$1 = G__12241;
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
var args12242 = [];
var len__6047__auto___12245 = arguments.length;
var i__6048__auto___12246 = (0);
while(true){
if((i__6048__auto___12246 < len__6047__auto___12245)){
args12242.push((arguments[i__6048__auto___12246]));

var G__12247 = (i__6048__auto___12246 + (1));
i__6048__auto___12246 = G__12247;
continue;
} else {
}
break;
}

var G__12244 = args12242.length;
switch (G__12244) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12242.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;
