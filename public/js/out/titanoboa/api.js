// Compiled by ClojureScript 1.10.238 {}
goog.provide('titanoboa.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.edn');
goog.require('cognitect.transit');
goog.require('titanoboa.exp');
titanoboa.api.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["titanoboa.exp.Expression",titanoboa.exp.transit_read_handler], null)], null));
titanoboa.api.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([titanoboa.exp.Expression,titanoboa.exp.transit_write_handler])], null));
titanoboa.api.jquery = $;
if(typeof titanoboa.api.cluster_enabled_QMARK_ !== 'undefined'){
} else {
titanoboa.api.cluster_enabled_QMARK_ = cljs.core.atom.call(null,false);
}
titanoboa.api.err_message = (function titanoboa$api$err_message(m){
return titanoboa.api.jquery.notify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"<strong>Error:</strong><br/>",new cljs.core.Keyword(null,"message","message",-406056002),m], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"danger"], null)));
});
titanoboa.api.success_message = (function titanoboa$api$success_message(title,message){
return titanoboa.api.jquery.notify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),["<strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"</strong><br/>"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),message], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"success"], null)));
});
titanoboa.api.generic_error_handler = (function titanoboa$api$generic_error_handler(s){
var G__7609 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7609) {
case (401):
return titanoboa.api.jquery.call(null,"#login-modal").modal();

break;
case (409):
return titanoboa.api.err_message.call(null,["Data you are trying to save were changed by other user in the meantime!"].join(''));

break;
default:
titanoboa.api.err_message.call(null,["There was an error while communicating with server: <br/>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(s))].join(''));

return console.log("ERROR: ",cljs.core.clj__GT_js.call(null,s));

}
});
titanoboa.api.auth = (function titanoboa$api$auth(user,handler){
return ajax.core.POST.call(null,"create-auth-token",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_user = (function titanoboa$api$get_user(handler){
return ajax.core.GET.call(null,"user",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.log_out = (function titanoboa$api$log_out(handler){
return ajax.core.POST.call(null,"user/logout",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_step_types = (function titanoboa$api$get_step_types(handler){
return ajax.core.GET.call(null,"repo/stepdefinitions",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_head_defs = (function titanoboa$api$list_head_defs(handler){
return ajax.core.GET.call(null,"repo/jobdefinitions/heads",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_all_defs = (function titanoboa$api$list_all_defs(handler){
return ajax.core.GET.call(null,"repo/jobdefinitions/revisions",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_all_head_defs = (function titanoboa$api$get_all_head_defs(handler){
return ajax.core.GET.call(null,"repo/jobdefinitions",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_head_def = (function titanoboa$api$get_head_def(def_name,handler){
return ajax.core.GET.call(null,["repo/jobdefinitions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(def_name)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_def = (function titanoboa$api$get_def(def_name,revision,handler){
return ajax.core.GET.call(null,["repo/jobdefinitions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(def_name),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(revision)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.save_def_BANG_ = (function titanoboa$api$save_def_BANG_(def_name,job_def,notes,handler){
return ajax.core.POST.call(null,["repo/jobdefinitions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(def_name)].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"definition","definition",-1198729982),job_def,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.eval_snippet_BANG_ = (function titanoboa$api$eval_snippet_BANG_(snippet,type,def_name,properties,handler){
return ajax.core.POST.call(null,["repo/jobdefinitions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(def_name),"/repl"].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.autocomplete_suggestions = (function titanoboa$api$autocomplete_suggestions(snippet,def_name,handler){
return ajax.core.POST.call(null,["repo/jobdefinitions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(def_name),"/autocomplete"].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_live_systems = (function titanoboa$api$list_live_systems(handler){
return ajax.core.GET.call(null,"systems/live",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_systems = (function titanoboa$api$list_systems(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7617 = arguments.length;
var i__4500__auto___7618 = (0);
while(true){
if((i__4500__auto___7618 < len__4499__auto___7617)){
args__4502__auto__.push((arguments[i__4500__auto___7618]));

var G__7619 = (i__4500__auto___7618 + (1));
i__4500__auto___7618 = G__7619;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__7613){
var vec__7614 = p__7613;
var node = cljs.core.nth.call(null,vec__7614,(0),null);
return ajax.core.GET.call(null,(cljs.core.truth_(node)?["cluster/nodes/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node),"/systems"].join(''):"systems"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});

titanoboa.api.list_systems.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
titanoboa.api.list_systems.cljs$lang$applyTo = (function (seq7611){
var G__7612 = cljs.core.first.call(null,seq7611);
var seq7611__$1 = cljs.core.next.call(null,seq7611);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7612,seq7611__$1);
});

titanoboa.api.get_log = (function titanoboa$api$get_log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7627 = arguments.length;
var i__4500__auto___7628 = (0);
while(true){
if((i__4500__auto___7628 < len__4499__auto___7627)){
args__4502__auto__.push((arguments[i__4500__auto___7628]));

var G__7629 = (i__4500__auto___7628 + (1));
i__4500__auto___7628 = G__7629;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return titanoboa.api.get_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

titanoboa.api.get_log.cljs$core$IFn$_invoke$arity$variadic = (function (handler,lines,p__7623){
var vec__7624 = p__7623;
var node = cljs.core.nth.call(null,vec__7624,(0),null);
return ajax.core.GET.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = node;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,titanoboa.api.cluster_enabled_QMARK_);
} else {
return and__3911__auto__;
}
})())?["cluster/nodes/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node),"/log"].join(''):"log"),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),lines], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});

titanoboa.api.get_log.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
titanoboa.api.get_log.cljs$lang$applyTo = (function (seq7620){
var G__7621 = cljs.core.first.call(null,seq7620);
var seq7620__$1 = cljs.core.next.call(null,seq7620);
var G__7622 = cljs.core.first.call(null,seq7620__$1);
var seq7620__$2 = cljs.core.next.call(null,seq7620__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7621,G__7622,seq7620__$2);
});

titanoboa.api.get_cluster_enabled_QMARK_ = (function titanoboa$api$get_cluster_enabled_QMARK_(handler,handler_404){
return ajax.core.GET.call(null,"cluster/",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (s){
var G__7630 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7630) {
case (404):
return handler_404.call(null,s);

break;
default:
return titanoboa.api.generic_error_handler.call(null,s);

}
}),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_nodes = (function titanoboa$api$list_nodes(handler){
return ajax.core.GET.call(null,"cluster/nodes",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.update_system_BANG_ = (function titanoboa$api$update_system_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7639 = arguments.length;
var i__4500__auto___7640 = (0);
while(true){
if((i__4500__auto___7640 < len__4499__auto___7639)){
args__4502__auto__.push((arguments[i__4500__auto___7640]));

var G__7641 = (i__4500__auto___7640 + (1));
i__4500__auto___7640 = G__7641;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (system,action,p__7635){
var vec__7636 = p__7635;
var node = cljs.core.nth.call(null,vec__7636,(0),null);
return ajax.core.PATCH.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(node)?["cluster/nodes/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node),"/"].join(''):null)),"systems/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(system)].join('')))].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"wcount","wcount",-764215138),null,new cljs.core.Keyword(null,"scope","scope",-439358418),null], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__7636,node){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__7636,node))
], null));
});

titanoboa.api.update_system_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
titanoboa.api.update_system_BANG_.cljs$lang$applyTo = (function (seq7632){
var G__7633 = cljs.core.first.call(null,seq7632);
var seq7632__$1 = cljs.core.next.call(null,seq7632);
var G__7634 = cljs.core.first.call(null,seq7632__$1);
var seq7632__$2 = cljs.core.next.call(null,seq7632__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7633,G__7634,seq7632__$2);
});

titanoboa.api.add_worker_BANG_ = (function titanoboa$api$add_worker_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7648 = arguments.length;
var i__4500__auto___7649 = (0);
while(true){
if((i__4500__auto___7649 < len__4499__auto___7648)){
args__4502__auto__.push((arguments[i__4500__auto___7649]));

var G__7650 = (i__4500__auto___7649 + (1));
i__4500__auto___7649 = G__7650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (system,p__7644){
var vec__7645 = p__7644;
var node = cljs.core.nth.call(null,vec__7645,(0),null);
return ajax.core.POST.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(node)?["cluster/nodes/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node),"/"].join(''):null)),"systems/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(system)].join(''))),"/workers"].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__7645,node){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__7645,node))
], null));
});

titanoboa.api.add_worker_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
titanoboa.api.add_worker_BANG_.cljs$lang$applyTo = (function (seq7642){
var G__7643 = cljs.core.first.call(null,seq7642);
var seq7642__$1 = cljs.core.next.call(null,seq7642);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7643,seq7642__$1);
});

titanoboa.api.start_job_BANG_ = (function titanoboa$api$start_job_BANG_(system,conf,handler){
cljs.core.println.call(null,[">>>>>>>>>++++++++ Starting Job with parameters [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(system),"] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(conf),"]"].join(''));

return ajax.core.POST.call(null,["systems/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(system)].join(''))),"/jobs"].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),conf,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_local_jobs = (function titanoboa$api$list_local_jobs(handler){
return ajax.core.GET.call(null,"systems/jobs",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_running_jobs = (function titanoboa$api$list_running_jobs(handler){
return ajax.core.GET.call(null,"cluster/jobs",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_archived_jobs = (function titanoboa$api$list_archived_jobs(limit,offset,p__7651,handler,handler_404){
var vec__7652 = p__7651;
var order_by = cljs.core.nth.call(null,vec__7652,(0),null);
var order = cljs.core.nth.call(null,vec__7652,(1),null);
return ajax.core.GET.call(null,"archive/jobs",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"order-by","order-by",1527318070),order_by,new cljs.core.Keyword(null,"order","order",-1254677256),order], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__7652,order_by,order){
return (function (s){
var G__7655 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7655) {
case (404):
return handler_404.call(null,s);

break;
default:
return titanoboa.api.generic_error_handler.call(null,s);

}
});})(vec__7652,order_by,order))
,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.load_archived_job = (function titanoboa$api$load_archived_job(uuid,handler){
return ajax.core.GET.call(null,["archive/jobs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_dependencies = (function titanoboa$api$get_dependencies(handler,handler_404){
return ajax.core.GET.call(null,"cluster/dependencies",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (s){
var G__7657 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7657) {
case (404):
return handler_404.call(null,s);

break;
default:
return titanoboa.api.generic_error_handler.call(null,s);

}
}),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.save_dependencies_BANG_ = (function titanoboa$api$save_dependencies_BANG_(old_content,new_content,handler){
return ajax.core.PATCH.call(null,"cluster/dependencies",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),old_content,new cljs.core.Keyword(null,"new-content","new-content",525291180),new_content], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.check_cluster_enabled = (function titanoboa$api$check_cluster_enabled(){
return titanoboa.api.get_cluster_enabled_QMARK_.call(null,(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.api.cluster_enabled_QMARK_,true);
}),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.api.cluster_enabled_QMARK_,false);
}));
});
