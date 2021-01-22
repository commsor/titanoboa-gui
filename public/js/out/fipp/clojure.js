// Compiled by ClojureScript 1.10.238 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8912 = arguments.length;
var i__4500__auto___8913 = (0);
while(true){
if((i__4500__auto___8913 < len__4499__auto___8912)){
args__4502__auto__.push((arguments[i__4500__auto___8913]));

var G__8914 = (i__4500__auto___8913 + (1));
i__4500__auto___8913 = G__8914;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq8911){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8911));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__8915){
var vec__8916 = p__8915;
var test = cljs.core.nth.call(null,vec__8916,(0),null);
var result = cljs.core.nth.call(null,vec__8916,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__8920){
var vec__8921 = p__8920;
var seq__8922 = cljs.core.seq.call(null,vec__8921);
var first__8923 = cljs.core.first.call(null,seq__8922);
var seq__8922__$1 = cljs.core.next.call(null,seq__8922);
var head = first__8923;
var first__8923__$1 = cljs.core.first.call(null,seq__8922__$1);
var seq__8922__$2 = cljs.core.next.call(null,seq__8922__$1);
var expr = first__8923__$1;
var more = seq__8922__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__8921,seq__8922,first__8923,seq__8922__$1,head,first__8923__$1,seq__8922__$2,expr,more){
return (function (p1__8919_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__8919_SHARP_);
});})(clauses,default$,vec__8921,seq__8922,first__8923,seq__8922__$1,head,first__8923__$1,seq__8922__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__8925){
var vec__8926 = p__8925;
var seq__8927 = cljs.core.seq.call(null,vec__8926);
var first__8928 = cljs.core.first.call(null,seq__8927);
var seq__8927__$1 = cljs.core.next.call(null,seq__8927);
var head = first__8928;
var more = seq__8927__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__8926,seq__8927,first__8928,seq__8927__$1,head,more){
return (function (p1__8924_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__8924_SHARP_);
});})(clauses,vec__8926,seq__8927,first__8928,seq__8927__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__8930){
var vec__8931 = p__8930;
var seq__8932 = cljs.core.seq.call(null,vec__8931);
var first__8933 = cljs.core.first.call(null,seq__8932);
var seq__8932__$1 = cljs.core.next.call(null,seq__8932);
var head = first__8933;
var first__8933__$1 = cljs.core.first.call(null,seq__8932__$1);
var seq__8932__$2 = cljs.core.next.call(null,seq__8932__$1);
var pred = first__8933__$1;
var first__8933__$2 = cljs.core.first.call(null,seq__8932__$2);
var seq__8932__$3 = cljs.core.next.call(null,seq__8932__$2);
var expr = first__8933__$2;
var more = seq__8932__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__8931,seq__8932,first__8933,seq__8932__$1,head,first__8933__$1,seq__8932__$2,pred,first__8933__$2,seq__8932__$3,expr,more){
return (function (p1__8929_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__8929_SHARP_);
});})(clauses,default$,vec__8931,seq__8932,first__8933,seq__8932__$1,head,first__8933__$1,seq__8932__$2,pred,first__8933__$2,seq__8932__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__8935){
var vec__8936 = p__8935;
var seq__8937 = cljs.core.seq.call(null,vec__8936);
var first__8938 = cljs.core.first.call(null,seq__8937);
var seq__8937__$1 = cljs.core.next.call(null,seq__8937);
var head = first__8938;
var stmts = seq__8937__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__8936,seq__8937,first__8938,seq__8937__$1,head,stmts){
return (function (p1__8934_SHARP_){
return fipp.visit.visit.call(null,p,p1__8934_SHARP_);
});})(vec__8936,seq__8937,first__8938,seq__8937__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__8940){
var vec__8941 = p__8940;
var seq__8942 = cljs.core.seq.call(null,vec__8941);
var first__8943 = cljs.core.first.call(null,seq__8942);
var seq__8942__$1 = cljs.core.next.call(null,seq__8942);
var head = first__8943;
var first__8943__$1 = cljs.core.first.call(null,seq__8942__$1);
var seq__8942__$2 = cljs.core.next.call(null,seq__8942__$1);
var test = first__8943__$1;
var more = seq__8942__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__8941,seq__8942,first__8943,seq__8942__$1,head,first__8943__$1,seq__8942__$2,test,more){
return (function (p1__8939_SHARP_){
return fipp.visit.visit.call(null,p,p1__8939_SHARP_);
});})(vec__8941,seq__8942,first__8943,seq__8942__$1,head,first__8943__$1,seq__8942__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__8945){
var vec__8946 = p__8945;
var seq__8947 = cljs.core.seq.call(null,vec__8946);
var first__8948 = cljs.core.first.call(null,seq__8947);
var seq__8947__$1 = cljs.core.next.call(null,seq__8947);
var params = first__8948;
var body = seq__8947__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__8946,seq__8947,first__8948,seq__8947__$1,params,body){
return (function (p1__8944_SHARP_){
return fipp.visit.visit.call(null,p,p1__8944_SHARP_);
});})(vec__8946,seq__8947,first__8948,seq__8947__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__8951){
var vec__8952 = p__8951;
var seq__8953 = cljs.core.seq.call(null,vec__8952);
var first__8954 = cljs.core.first.call(null,seq__8953);
var seq__8953__$1 = cljs.core.next.call(null,seq__8953);
var head = first__8954;
var first__8954__$1 = cljs.core.first.call(null,seq__8953__$1);
var seq__8953__$2 = cljs.core.next.call(null,seq__8953__$1);
var fn_name = first__8954__$1;
var more = seq__8953__$2;
var vec__8955 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__8955,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__8955,(1),null);
var vec__8958 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__8958,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__8958,(1),null);
var vec__8961 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__8961,(0),null);
var body = cljs.core.nth.call(null,vec__8961,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__3911__auto__ = params;
if(cljs.core.truth_(and__3911__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__3911__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__3911__auto__ = params;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__3911__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__8955,docstring,more__$1,vec__8958,attr_map,more__$2,vec__8961,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8952,seq__8953,first__8954,seq__8953__$1,head,first__8954__$1,seq__8953__$2,fn_name,more){
return (function (p1__8949_SHARP_){
return fipp.visit.visit.call(null,p,p1__8949_SHARP_);
});})(vec__8955,docstring,more__$1,vec__8958,attr_map,more__$2,vec__8961,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8952,seq__8953,first__8954,seq__8953__$1,head,first__8954__$1,seq__8953__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__8955,docstring,more__$1,vec__8958,attr_map,more__$2,vec__8961,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8952,seq__8953,first__8954,seq__8953__$1,head,first__8954__$1,seq__8953__$2,fn_name,more){
return (function (p1__8950_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__8950_SHARP_);
});})(vec__8955,docstring,more__$1,vec__8958,attr_map,more__$2,vec__8961,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8952,seq__8953,first__8954,seq__8953__$1,head,first__8954__$1,seq__8953__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__8966){
var vec__8967 = p__8966;
var seq__8968 = cljs.core.seq.call(null,vec__8967);
var first__8969 = cljs.core.first.call(null,seq__8968);
var seq__8968__$1 = cljs.core.next.call(null,seq__8968);
var head = first__8969;
var more = seq__8968__$1;
var vec__8970 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__8970,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__8970,(1),null);
var vec__8973 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__8973,(0),null);
var body = cljs.core.nth.call(null,vec__8973,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__8970,fn_name,more__$1,vec__8973,params,body,vec__8967,seq__8968,first__8969,seq__8968__$1,head,more){
return (function (p1__8964_SHARP_){
return fipp.visit.visit.call(null,p,p1__8964_SHARP_);
});})(vec__8970,fn_name,more__$1,vec__8973,params,body,vec__8967,seq__8968,first__8969,seq__8968__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__8970,fn_name,more__$1,vec__8973,params,body,vec__8967,seq__8968,first__8969,seq__8968__$1,head,more){
return (function (p1__8965_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__8965_SHARP_);
});})(vec__8970,fn_name,more__$1,vec__8973,params,body,vec__8967,seq__8968,first__8969,seq__8968__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__8979){
var vec__8980 = p__8979;
var _ = cljs.core.nth.call(null,vec__8980,(0),null);
var params = cljs.core.nth.call(null,vec__8980,(1),null);
var body = cljs.core.nth.call(null,vec__8980,(2),null);
var form = vec__8980;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__8983 = cljs.core.split_with.call(null,((function (vec__8980,_,params,body,form){
return (function (p1__8976_SHARP_){
return cljs.core.not_EQ_.call(null,p1__8976_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__8980,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__8983,(0),null);
var rests = cljs.core.nth.call(null,vec__8983,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__8983,inits,rests,vec__8980,_,params,body,form){
return (function (p1__8977_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__8977_SHARP_ + (1)))].join(''));
});})(vec__8983,inits,rests,vec__8980,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__8983,inits,rests,params_STAR_,body_STAR_,vec__8980,_,params,body,form){
return (function (p1__8978_SHARP_){
return fipp.visit.visit.call(null,p,p1__8978_SHARP_);
});})(vec__8983,inits,rests,params_STAR_,body_STAR_,vec__8980,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__8987){
var vec__8988 = p__8987;
var seq__8989 = cljs.core.seq.call(null,vec__8988);
var first__8990 = cljs.core.first.call(null,seq__8989);
var seq__8989__$1 = cljs.core.next.call(null,seq__8989);
var head = first__8990;
var clauses = seq__8989__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__8988,seq__8989,first__8990,seq__8989__$1,head,clauses){
return (function (p1__8986_SHARP_){
return fipp.visit.visit.call(null,p,p1__8986_SHARP_);
});})(vec__8988,seq__8989,first__8990,seq__8989__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__8992){
var vec__8993 = p__8992;
var seq__8994 = cljs.core.seq.call(null,vec__8993);
var first__8995 = cljs.core.first.call(null,seq__8994);
var seq__8994__$1 = cljs.core.next.call(null,seq__8994);
var head = first__8995;
var first__8995__$1 = cljs.core.first.call(null,seq__8994__$1);
var seq__8994__$2 = cljs.core.next.call(null,seq__8994__$1);
var ns_sym = first__8995__$1;
var more = seq__8994__$2;
var vec__8996 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__8996,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__8996,(1),null);
var vec__8999 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__8999,(0),null);
var specs = cljs.core.nth.call(null,vec__8999,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__8996,docstring,more__$1,vec__8999,attr_map,specs,vec__8993,seq__8994,first__8995,seq__8994__$1,head,first__8995__$1,seq__8994__$2,ns_sym,more){
return (function (p1__8991_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__8991_SHARP_);
});})(vec__8996,docstring,more__$1,vec__8999,attr_map,specs,vec__8993,seq__8994,first__8995,seq__8994__$1,head,first__8995__$1,seq__8994__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__9002){
var vec__9003 = p__9002;
var macro = cljs.core.nth.call(null,vec__9003,(0),null);
var arg = cljs.core.nth.call(null,vec__9003,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__9006 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__9006__$1 = (((G__9006 instanceof cljs.core.Keyword))?G__9006.fqn:null);
switch (G__9006__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9006__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4292__auto__ = (function fipp$clojure$pretty_bindings_$_iter__9008(s__9009){
return (new cljs.core.LazySeq(null,(function (){
var s__9009__$1 = s__9009;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9009__$1);
if(temp__5720__auto__){
var s__9009__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9009__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9009__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9011 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9010 = (0);
while(true){
if((i__9010 < size__4291__auto__)){
var vec__9012 = cljs.core._nth.call(null,c__4290__auto__,i__9010);
var k = cljs.core.nth.call(null,vec__9012,(0),null);
var v = cljs.core.nth.call(null,vec__9012,(1),null);
cljs.core.chunk_append.call(null,b__9011,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__9018 = (i__9010 + (1));
i__9010 = G__9018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9011),fipp$clojure$pretty_bindings_$_iter__9008.call(null,cljs.core.chunk_rest.call(null,s__9009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9011),null);
}
} else {
var vec__9015 = cljs.core.first.call(null,s__9009__$2);
var k = cljs.core.nth.call(null,vec__9015,(0),null);
var v = cljs.core.nth.call(null,vec__9015,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__9008.call(null,cljs.core.rest.call(null,s__9009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__9020){
var vec__9021 = p__9020;
var seq__9022 = cljs.core.seq.call(null,vec__9021);
var first__9023 = cljs.core.first.call(null,seq__9022);
var seq__9022__$1 = cljs.core.next.call(null,seq__9022);
var head = first__9023;
var first__9023__$1 = cljs.core.first.call(null,seq__9022__$1);
var seq__9022__$2 = cljs.core.next.call(null,seq__9022__$1);
var bvec = first__9023__$1;
var body = seq__9022__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__9021,seq__9022,first__9023,seq__9022__$1,head,first__9023__$1,seq__9022__$2,bvec,body){
return (function (p1__9019_SHARP_){
return fipp.visit.visit.call(null,p,p1__9019_SHARP_);
});})(vec__9021,seq__9022,first__9023,seq__9022__$1,head,first__9023__$1,seq__9022__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__9024_SHARP_){
return fipp.visit.visit.call(null,p,p1__9024_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__9025){
var vec__9026 = p__9025;
var seq__9027 = cljs.core.seq.call(null,vec__9026);
var first__9028 = cljs.core.first.call(null,seq__9027);
var seq__9027__$1 = cljs.core.next.call(null,seq__9027);
var head = first__9028;
var first__9028__$1 = cljs.core.first.call(null,seq__9027__$1);
var seq__9027__$2 = cljs.core.next.call(null,seq__9027__$1);
var fields = first__9028__$1;
var opts_PLUS_specs = seq__9027__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__9029){
var vec__9030 = p__9029;
var seq__9031 = cljs.core.seq.call(null,vec__9030);
var first__9032 = cljs.core.first.call(null,seq__9031);
var seq__9031__$1 = cljs.core.next.call(null,seq__9031);
var head = first__9032;
var opts_PLUS_specs = seq__9031__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function fipp$clojure$build_symbol_map_$_iter__9033(s__9034){
return (new cljs.core.LazySeq(null,(function (){
var s__9034__$1 = s__9034;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9034__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__9041 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__9041,(0),null);
var syms = cljs.core.nth.call(null,vec__9041,(1),null);
var iterys__4288__auto__ = ((function (s__9034__$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__9033_$_iter__9035(s__9036){
return (new cljs.core.LazySeq(null,((function (s__9034__$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__9036__$1 = s__9036;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__9036__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4288__auto__ = ((function (s__9036__$1,s__9034__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__9033_$_iter__9035_$_iter__9037(s__9038){
return (new cljs.core.LazySeq(null,((function (s__9036__$1,s__9034__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__9038__$1 = s__9038;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__9038__$1);
if(temp__5720__auto____$2){
var s__9038__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9038__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9038__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9040 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9039 = (0);
while(true){
if((i__9039 < size__4291__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4290__auto__,i__9039);
cljs.core.chunk_append.call(null,b__9040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__9044 = (i__9039 + (1));
i__9039 = G__9044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9040),fipp$clojure$build_symbol_map_$_iter__9033_$_iter__9035_$_iter__9037.call(null,cljs.core.chunk_rest.call(null,s__9038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9040),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__9038__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__9033_$_iter__9035_$_iter__9037.call(null,cljs.core.rest.call(null,s__9038__$2)));
}
} else {
return null;
}
break;
}
});})(s__9036__$1,s__9034__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__9036__$1,s__9034__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,fipp$clojure$build_symbol_map_$_iter__9033_$_iter__9035.call(null,cljs.core.rest.call(null,s__9036__$1)));
} else {
var G__9045 = cljs.core.rest.call(null,s__9036__$1);
s__9036__$1 = G__9045;
continue;
}
} else {
return null;
}
break;
}
});})(s__9034__$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__9034__$1,vec__9041,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,syms));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,fipp$clojure$build_symbol_map_$_iter__9033.call(null,cljs.core.rest.call(null,s__9034__$1)));
} else {
var G__9046 = cljs.core.rest.call(null,s__9034__$1);
s__9034__$1 = G__9046;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__9048 = arguments.length;
switch (G__9048) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;

