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
var len__4499__auto___8899 = arguments.length;
var i__4500__auto___8900 = (0);
while(true){
if((i__4500__auto___8900 < len__4499__auto___8899)){
args__4502__auto__.push((arguments[i__4500__auto___8900]));

var G__8901 = (i__4500__auto___8900 + (1));
i__4500__auto___8900 = G__8901;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq8898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8898));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__8902){
var vec__8903 = p__8902;
var test = cljs.core.nth.call(null,vec__8903,(0),null);
var result = cljs.core.nth.call(null,vec__8903,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__8907){
var vec__8908 = p__8907;
var seq__8909 = cljs.core.seq.call(null,vec__8908);
var first__8910 = cljs.core.first.call(null,seq__8909);
var seq__8909__$1 = cljs.core.next.call(null,seq__8909);
var head = first__8910;
var first__8910__$1 = cljs.core.first.call(null,seq__8909__$1);
var seq__8909__$2 = cljs.core.next.call(null,seq__8909__$1);
var expr = first__8910__$1;
var more = seq__8909__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__8908,seq__8909,first__8910,seq__8909__$1,head,first__8910__$1,seq__8909__$2,expr,more){
return (function (p1__8906_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__8906_SHARP_);
});})(clauses,default$,vec__8908,seq__8909,first__8910,seq__8909__$1,head,first__8910__$1,seq__8909__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__8912){
var vec__8913 = p__8912;
var seq__8914 = cljs.core.seq.call(null,vec__8913);
var first__8915 = cljs.core.first.call(null,seq__8914);
var seq__8914__$1 = cljs.core.next.call(null,seq__8914);
var head = first__8915;
var more = seq__8914__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__8913,seq__8914,first__8915,seq__8914__$1,head,more){
return (function (p1__8911_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__8911_SHARP_);
});})(clauses,vec__8913,seq__8914,first__8915,seq__8914__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__8917){
var vec__8918 = p__8917;
var seq__8919 = cljs.core.seq.call(null,vec__8918);
var first__8920 = cljs.core.first.call(null,seq__8919);
var seq__8919__$1 = cljs.core.next.call(null,seq__8919);
var head = first__8920;
var first__8920__$1 = cljs.core.first.call(null,seq__8919__$1);
var seq__8919__$2 = cljs.core.next.call(null,seq__8919__$1);
var pred = first__8920__$1;
var first__8920__$2 = cljs.core.first.call(null,seq__8919__$2);
var seq__8919__$3 = cljs.core.next.call(null,seq__8919__$2);
var expr = first__8920__$2;
var more = seq__8919__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__8918,seq__8919,first__8920,seq__8919__$1,head,first__8920__$1,seq__8919__$2,pred,first__8920__$2,seq__8919__$3,expr,more){
return (function (p1__8916_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__8916_SHARP_);
});})(clauses,default$,vec__8918,seq__8919,first__8920,seq__8919__$1,head,first__8920__$1,seq__8919__$2,pred,first__8920__$2,seq__8919__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__8922){
var vec__8923 = p__8922;
var seq__8924 = cljs.core.seq.call(null,vec__8923);
var first__8925 = cljs.core.first.call(null,seq__8924);
var seq__8924__$1 = cljs.core.next.call(null,seq__8924);
var head = first__8925;
var stmts = seq__8924__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__8923,seq__8924,first__8925,seq__8924__$1,head,stmts){
return (function (p1__8921_SHARP_){
return fipp.visit.visit.call(null,p,p1__8921_SHARP_);
});})(vec__8923,seq__8924,first__8925,seq__8924__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__8927){
var vec__8928 = p__8927;
var seq__8929 = cljs.core.seq.call(null,vec__8928);
var first__8930 = cljs.core.first.call(null,seq__8929);
var seq__8929__$1 = cljs.core.next.call(null,seq__8929);
var head = first__8930;
var first__8930__$1 = cljs.core.first.call(null,seq__8929__$1);
var seq__8929__$2 = cljs.core.next.call(null,seq__8929__$1);
var test = first__8930__$1;
var more = seq__8929__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__8928,seq__8929,first__8930,seq__8929__$1,head,first__8930__$1,seq__8929__$2,test,more){
return (function (p1__8926_SHARP_){
return fipp.visit.visit.call(null,p,p1__8926_SHARP_);
});})(vec__8928,seq__8929,first__8930,seq__8929__$1,head,first__8930__$1,seq__8929__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__8932){
var vec__8933 = p__8932;
var seq__8934 = cljs.core.seq.call(null,vec__8933);
var first__8935 = cljs.core.first.call(null,seq__8934);
var seq__8934__$1 = cljs.core.next.call(null,seq__8934);
var params = first__8935;
var body = seq__8934__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__8933,seq__8934,first__8935,seq__8934__$1,params,body){
return (function (p1__8931_SHARP_){
return fipp.visit.visit.call(null,p,p1__8931_SHARP_);
});})(vec__8933,seq__8934,first__8935,seq__8934__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__8938){
var vec__8939 = p__8938;
var seq__8940 = cljs.core.seq.call(null,vec__8939);
var first__8941 = cljs.core.first.call(null,seq__8940);
var seq__8940__$1 = cljs.core.next.call(null,seq__8940);
var head = first__8941;
var first__8941__$1 = cljs.core.first.call(null,seq__8940__$1);
var seq__8940__$2 = cljs.core.next.call(null,seq__8940__$1);
var fn_name = first__8941__$1;
var more = seq__8940__$2;
var vec__8942 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__8942,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__8942,(1),null);
var vec__8945 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__8945,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__8945,(1),null);
var vec__8948 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__8948,(0),null);
var body = cljs.core.nth.call(null,vec__8948,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__8942,docstring,more__$1,vec__8945,attr_map,more__$2,vec__8948,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8939,seq__8940,first__8941,seq__8940__$1,head,first__8941__$1,seq__8940__$2,fn_name,more){
return (function (p1__8936_SHARP_){
return fipp.visit.visit.call(null,p,p1__8936_SHARP_);
});})(vec__8942,docstring,more__$1,vec__8945,attr_map,more__$2,vec__8948,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8939,seq__8940,first__8941,seq__8940__$1,head,first__8941__$1,seq__8940__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__8942,docstring,more__$1,vec__8945,attr_map,more__$2,vec__8948,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8939,seq__8940,first__8941,seq__8940__$1,head,first__8941__$1,seq__8940__$2,fn_name,more){
return (function (p1__8937_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__8937_SHARP_);
});})(vec__8942,docstring,more__$1,vec__8945,attr_map,more__$2,vec__8948,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__8939,seq__8940,first__8941,seq__8940__$1,head,first__8941__$1,seq__8940__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__8953){
var vec__8954 = p__8953;
var seq__8955 = cljs.core.seq.call(null,vec__8954);
var first__8956 = cljs.core.first.call(null,seq__8955);
var seq__8955__$1 = cljs.core.next.call(null,seq__8955);
var head = first__8956;
var more = seq__8955__$1;
var vec__8957 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__8957,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__8957,(1),null);
var vec__8960 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__8960,(0),null);
var body = cljs.core.nth.call(null,vec__8960,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__8957,fn_name,more__$1,vec__8960,params,body,vec__8954,seq__8955,first__8956,seq__8955__$1,head,more){
return (function (p1__8951_SHARP_){
return fipp.visit.visit.call(null,p,p1__8951_SHARP_);
});})(vec__8957,fn_name,more__$1,vec__8960,params,body,vec__8954,seq__8955,first__8956,seq__8955__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__8957,fn_name,more__$1,vec__8960,params,body,vec__8954,seq__8955,first__8956,seq__8955__$1,head,more){
return (function (p1__8952_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__8952_SHARP_);
});})(vec__8957,fn_name,more__$1,vec__8960,params,body,vec__8954,seq__8955,first__8956,seq__8955__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__8966){
var vec__8967 = p__8966;
var _ = cljs.core.nth.call(null,vec__8967,(0),null);
var params = cljs.core.nth.call(null,vec__8967,(1),null);
var body = cljs.core.nth.call(null,vec__8967,(2),null);
var form = vec__8967;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__8970 = cljs.core.split_with.call(null,((function (vec__8967,_,params,body,form){
return (function (p1__8963_SHARP_){
return cljs.core.not_EQ_.call(null,p1__8963_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__8967,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__8970,(0),null);
var rests = cljs.core.nth.call(null,vec__8970,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__8970,inits,rests,vec__8967,_,params,body,form){
return (function (p1__8964_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__8964_SHARP_ + (1)))].join(''));
});})(vec__8970,inits,rests,vec__8967,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__8970,inits,rests,params_STAR_,body_STAR_,vec__8967,_,params,body,form){
return (function (p1__8965_SHARP_){
return fipp.visit.visit.call(null,p,p1__8965_SHARP_);
});})(vec__8970,inits,rests,params_STAR_,body_STAR_,vec__8967,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__8974){
var vec__8975 = p__8974;
var seq__8976 = cljs.core.seq.call(null,vec__8975);
var first__8977 = cljs.core.first.call(null,seq__8976);
var seq__8976__$1 = cljs.core.next.call(null,seq__8976);
var head = first__8977;
var clauses = seq__8976__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__8975,seq__8976,first__8977,seq__8976__$1,head,clauses){
return (function (p1__8973_SHARP_){
return fipp.visit.visit.call(null,p,p1__8973_SHARP_);
});})(vec__8975,seq__8976,first__8977,seq__8976__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__8979){
var vec__8980 = p__8979;
var seq__8981 = cljs.core.seq.call(null,vec__8980);
var first__8982 = cljs.core.first.call(null,seq__8981);
var seq__8981__$1 = cljs.core.next.call(null,seq__8981);
var head = first__8982;
var first__8982__$1 = cljs.core.first.call(null,seq__8981__$1);
var seq__8981__$2 = cljs.core.next.call(null,seq__8981__$1);
var ns_sym = first__8982__$1;
var more = seq__8981__$2;
var vec__8983 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__8983,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__8983,(1),null);
var vec__8986 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__8986,(0),null);
var specs = cljs.core.nth.call(null,vec__8986,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__8983,docstring,more__$1,vec__8986,attr_map,specs,vec__8980,seq__8981,first__8982,seq__8981__$1,head,first__8982__$1,seq__8981__$2,ns_sym,more){
return (function (p1__8978_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__8978_SHARP_);
});})(vec__8983,docstring,more__$1,vec__8986,attr_map,specs,vec__8980,seq__8981,first__8982,seq__8981__$1,head,first__8982__$1,seq__8981__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__8989){
var vec__8990 = p__8989;
var macro = cljs.core.nth.call(null,vec__8990,(0),null);
var arg = cljs.core.nth.call(null,vec__8990,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__8993 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__8993__$1 = (((G__8993 instanceof cljs.core.Keyword))?G__8993.fqn:null);
switch (G__8993__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8993__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4292__auto__ = (function fipp$clojure$pretty_bindings_$_iter__8995(s__8996){
return (new cljs.core.LazySeq(null,(function (){
var s__8996__$1 = s__8996;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__8996__$1);
if(temp__5720__auto__){
var s__8996__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8996__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8996__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8998 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8997 = (0);
while(true){
if((i__8997 < size__4291__auto__)){
var vec__8999 = cljs.core._nth.call(null,c__4290__auto__,i__8997);
var k = cljs.core.nth.call(null,vec__8999,(0),null);
var v = cljs.core.nth.call(null,vec__8999,(1),null);
cljs.core.chunk_append.call(null,b__8998,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__9005 = (i__8997 + (1));
i__8997 = G__9005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8998),fipp$clojure$pretty_bindings_$_iter__8995.call(null,cljs.core.chunk_rest.call(null,s__8996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8998),null);
}
} else {
var vec__9002 = cljs.core.first.call(null,s__8996__$2);
var k = cljs.core.nth.call(null,vec__9002,(0),null);
var v = cljs.core.nth.call(null,vec__9002,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__8995.call(null,cljs.core.rest.call(null,s__8996__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__9007){
var vec__9008 = p__9007;
var seq__9009 = cljs.core.seq.call(null,vec__9008);
var first__9010 = cljs.core.first.call(null,seq__9009);
var seq__9009__$1 = cljs.core.next.call(null,seq__9009);
var head = first__9010;
var first__9010__$1 = cljs.core.first.call(null,seq__9009__$1);
var seq__9009__$2 = cljs.core.next.call(null,seq__9009__$1);
var bvec = first__9010__$1;
var body = seq__9009__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__9008,seq__9009,first__9010,seq__9009__$1,head,first__9010__$1,seq__9009__$2,bvec,body){
return (function (p1__9006_SHARP_){
return fipp.visit.visit.call(null,p,p1__9006_SHARP_);
});})(vec__9008,seq__9009,first__9010,seq__9009__$1,head,first__9010__$1,seq__9009__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__9011_SHARP_){
return fipp.visit.visit.call(null,p,p1__9011_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__9012){
var vec__9013 = p__9012;
var seq__9014 = cljs.core.seq.call(null,vec__9013);
var first__9015 = cljs.core.first.call(null,seq__9014);
var seq__9014__$1 = cljs.core.next.call(null,seq__9014);
var head = first__9015;
var first__9015__$1 = cljs.core.first.call(null,seq__9014__$1);
var seq__9014__$2 = cljs.core.next.call(null,seq__9014__$1);
var fields = first__9015__$1;
var opts_PLUS_specs = seq__9014__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__9016){
var vec__9017 = p__9016;
var seq__9018 = cljs.core.seq.call(null,vec__9017);
var first__9019 = cljs.core.first.call(null,seq__9018);
var seq__9018__$1 = cljs.core.next.call(null,seq__9018);
var head = first__9019;
var opts_PLUS_specs = seq__9018__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function fipp$clojure$build_symbol_map_$_iter__9020(s__9021){
return (new cljs.core.LazySeq(null,(function (){
var s__9021__$1 = s__9021;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9021__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__9028 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__9028,(0),null);
var syms = cljs.core.nth.call(null,vec__9028,(1),null);
var iterys__4288__auto__ = ((function (s__9021__$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__9020_$_iter__9022(s__9023){
return (new cljs.core.LazySeq(null,((function (s__9021__$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__9023__$1 = s__9023;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__9023__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4288__auto__ = ((function (s__9023__$1,s__9021__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__9020_$_iter__9022_$_iter__9024(s__9025){
return (new cljs.core.LazySeq(null,((function (s__9023__$1,s__9021__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__9025__$1 = s__9025;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__9025__$1);
if(temp__5720__auto____$2){
var s__9025__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9025__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9025__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9027 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9026 = (0);
while(true){
if((i__9026 < size__4291__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4290__auto__,i__9026);
cljs.core.chunk_append.call(null,b__9027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__9031 = (i__9026 + (1));
i__9026 = G__9031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9027),fipp$clojure$build_symbol_map_$_iter__9020_$_iter__9022_$_iter__9024.call(null,cljs.core.chunk_rest.call(null,s__9025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9027),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__9025__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__9020_$_iter__9022_$_iter__9024.call(null,cljs.core.rest.call(null,s__9025__$2)));
}
} else {
return null;
}
break;
}
});})(s__9023__$1,s__9021__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__9023__$1,s__9021__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,fipp$clojure$build_symbol_map_$_iter__9020_$_iter__9022.call(null,cljs.core.rest.call(null,s__9023__$1)));
} else {
var G__9032 = cljs.core.rest.call(null,s__9023__$1);
s__9023__$1 = G__9032;
continue;
}
} else {
return null;
}
break;
}
});})(s__9021__$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__9021__$1,vec__9028,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,syms));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,fipp$clojure$build_symbol_map_$_iter__9020.call(null,cljs.core.rest.call(null,s__9021__$1)));
} else {
var G__9033 = cljs.core.rest.call(null,s__9021__$1);
s__9021__$1 = G__9033;
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
var G__9035 = arguments.length;
switch (G__9035) {
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

