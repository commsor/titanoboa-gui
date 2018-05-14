// Compiled by ClojureScript 1.7.28 {}
goog.provide('titanoboa.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.edn');
goog.require('cognitect.transit');
goog.require('titanoboa.exp');
titanoboa.api.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["titanoboa.exp.Expression",titanoboa.exp.transit_read_handler], null)], null));
titanoboa.api.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap.fromArray([titanoboa.exp.Expression,titanoboa.exp.transit_write_handler], true, false)], null));
titanoboa.api.jquery = $;
titanoboa.api.generic_error_handler = (function titanoboa$api$generic_error_handler(s){
var G__7749 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7749) {
case (401):
return titanoboa.api.jquery.call(null,"#login-modal").modal();

break;
case (409):
return alert([cljs.core.str("Data you are trying to save were changed by other user in the meantime!")].join(''));

break;
default:
alert([cljs.core.str("There was an error while communicating with server: "),cljs.core.str(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(s))].join(''));

return console.log("ERROR: ",cljs.core.clj__GT_js.call(null,s));

}
});
titanoboa.api.auth = (function titanoboa$api$auth(user,handler){
return ajax.core.POST.call(null,"/create-auth-token",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_user = (function titanoboa$api$get_user(handler){
return ajax.core.GET.call(null,"/user",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.log_out = (function titanoboa$api$log_out(handler){
return ajax.core.POST.call(null,"/user/logout",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_step_types = (function titanoboa$api$get_step_types(handler){
return ajax.core.GET.call(null,"/repo/stepdefinitions",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_head_defs = (function titanoboa$api$list_head_defs(handler){
return ajax.core.GET.call(null,"/repo/jobdefinitions/heads",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_all_defs = (function titanoboa$api$list_all_defs(handler){
return ajax.core.GET.call(null,"/repo/jobdefinitions/revisions",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_all_head_defs = (function titanoboa$api$get_all_head_defs(handler){
return ajax.core.GET.call(null,"/repo/jobdefinitions",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_head_def = (function titanoboa$api$get_head_def(def_name,handler){
return ajax.core.GET.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_def = (function titanoboa$api$get_def(def_name,revision,handler){
return ajax.core.GET.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name),cljs.core.str("/"),cljs.core.str(revision)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.save_def_BANG_ = (function titanoboa$api$save_def_BANG_(def_name,job_def,handler){
return ajax.core.POST.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name)].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"definition","definition",-1198729982),job_def], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.eval_snippet_BANG_ = (function titanoboa$api$eval_snippet_BANG_(snippet,def_name,handler){
return ajax.core.POST.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name),cljs.core.str("/repl")].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_live_systems = (function titanoboa$api$list_live_systems(handler){
return ajax.core.GET.call(null,"/systems/live",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_systems = (function titanoboa$api$list_systems(){
var args__6054__auto__ = [];
var len__6047__auto___7755 = arguments.length;
var i__6048__auto___7756 = (0);
while(true){
if((i__6048__auto___7756 < len__6047__auto___7755)){
args__6054__auto__.push((arguments[i__6048__auto___7756]));

var G__7757 = (i__6048__auto___7756 + (1));
i__6048__auto___7756 = G__7757;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__7753){
var vec__7754 = p__7753;
var node = cljs.core.nth.call(null,vec__7754,(0),null);
return ajax.core.GET.call(null,(cljs.core.truth_(node)?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node),cljs.core.str("/systems")].join(''):"/systems"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});

titanoboa.api.list_systems.cljs$lang$maxFixedArity = (1);

titanoboa.api.list_systems.cljs$lang$applyTo = (function (seq7751){
var G__7752 = cljs.core.first.call(null,seq7751);
var seq7751__$1 = cljs.core.next.call(null,seq7751);
return titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic(G__7752,seq7751__$1);
});
titanoboa.api.get_cluster_enabled_QMARK_ = (function titanoboa$api$get_cluster_enabled_QMARK_(handler,handler_404){
return ajax.core.GET.call(null,"/cluster/",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (s){
var G__7759 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7759) {
case (404):
return handler_404.call(null,s);

break;
default:
return titanoboa.api.generic_error_handler.call(null,s);

}
}),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_nodes = (function titanoboa$api$list_nodes(handler){
return ajax.core.GET.call(null,"/cluster/nodes",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.update_system_BANG_ = (function titanoboa$api$update_system_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___7766 = arguments.length;
var i__6048__auto___7767 = (0);
while(true){
if((i__6048__auto___7767 < len__6047__auto___7766)){
args__6054__auto__.push((arguments[i__6048__auto___7767]));

var G__7768 = (i__6048__auto___7767 + (1));
i__6048__auto___7767 = G__7768;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (system,action,p__7764){
var vec__7765 = p__7764;
var node = cljs.core.nth.call(null,vec__7765,(0),null);
return ajax.core.PATCH.call(null,[cljs.core.str((cljs.core.truth_(node)?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node)].join(''):null)),cljs.core.str("/systems/"),cljs.core.str(encodeURIComponent([cljs.core.str(system)].join('')))].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"wcount","wcount",-764215138),null,new cljs.core.Keyword(null,"scope","scope",-439358418),null], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__7765,node){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__7765,node))
], null));
});

titanoboa.api.update_system_BANG_.cljs$lang$maxFixedArity = (2);

titanoboa.api.update_system_BANG_.cljs$lang$applyTo = (function (seq7761){
var G__7762 = cljs.core.first.call(null,seq7761);
var seq7761__$1 = cljs.core.next.call(null,seq7761);
var G__7763 = cljs.core.first.call(null,seq7761__$1);
var seq7761__$2 = cljs.core.next.call(null,seq7761__$1);
return titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7762,G__7763,seq7761__$2);
});
titanoboa.api.add_worker_BANG_ = (function titanoboa$api$add_worker_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___7773 = arguments.length;
var i__6048__auto___7774 = (0);
while(true){
if((i__6048__auto___7774 < len__6047__auto___7773)){
args__6054__auto__.push((arguments[i__6048__auto___7774]));

var G__7775 = (i__6048__auto___7774 + (1));
i__6048__auto___7774 = G__7775;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (system,p__7771){
var vec__7772 = p__7771;
var node = cljs.core.nth.call(null,vec__7772,(0),null);
return ajax.core.POST.call(null,[cljs.core.str((cljs.core.truth_(node)?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node)].join(''):null)),cljs.core.str("/systems/"),cljs.core.str(encodeURIComponent([cljs.core.str(system)].join(''))),cljs.core.str("/workers")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__7772,node){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__7772,node))
], null));
});

titanoboa.api.add_worker_BANG_.cljs$lang$maxFixedArity = (1);

titanoboa.api.add_worker_BANG_.cljs$lang$applyTo = (function (seq7769){
var G__7770 = cljs.core.first.call(null,seq7769);
var seq7769__$1 = cljs.core.next.call(null,seq7769);
return titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7770,seq7769__$1);
});
titanoboa.api.start_job_BANG_ = (function titanoboa$api$start_job_BANG_(system,conf,handler){
cljs.core.println.call(null,[cljs.core.str(">>>>>>>>>++++++++ Starting Job with parameters ["),cljs.core.str(system),cljs.core.str("] ["),cljs.core.str(conf),cljs.core.str("]")].join(''));

return ajax.core.POST.call(null,[cljs.core.str("/systems/"),cljs.core.str(encodeURIComponent([cljs.core.str(system)].join(''))),cljs.core.str("/jobs")].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conf","conf",-983921284),conf], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_local_jobs = (function titanoboa$api$list_local_jobs(handler){
return ajax.core.GET.call(null,"/systems/jobs",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_running_jobs = (function titanoboa$api$list_running_jobs(handler){
return ajax.core.GET.call(null,"/cluster/jobs",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_archived_jobs = (function titanoboa$api$list_archived_jobs(limit,offset,order,handler){
return ajax.core.GET.call(null,"/archive/jobs",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"order","order",-1254677256),order], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.load_archived_job = (function titanoboa$api$load_archived_job(uuid,handler){
return ajax.core.GET.call(null,[cljs.core.str("/archive/jobs/"),cljs.core.str(uuid)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_dependencies = (function titanoboa$api$get_dependencies(handler){
return ajax.core.GET.call(null,"/cluster/dependencies",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.save_dependencies_BANG_ = (function titanoboa$api$save_dependencies_BANG_(old_content,new_content,handler){
return ajax.core.PATCH.call(null,"/cluster/dependencies",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),old_content,new cljs.core.Keyword(null,"new-content","new-content",525291180),new_content], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
