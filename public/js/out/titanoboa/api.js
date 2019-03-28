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
if(typeof titanoboa.api.cluster_enabled_QMARK_ !== 'undefined'){
} else {
titanoboa.api.cluster_enabled_QMARK_ = cljs.core.atom.call(null,false);
}
titanoboa.api.err_message = (function titanoboa$api$err_message(m){
return titanoboa.api.jquery.notify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"<strong>Error:</strong><br/>",new cljs.core.Keyword(null,"message","message",-406056002),m], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"danger"], null)));
});
titanoboa.api.generic_error_handler = (function titanoboa$api$generic_error_handler(s){
var G__7752 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7752) {
case (401):
return titanoboa.api.jquery.call(null,"#login-modal").modal();

break;
case (409):
return titanoboa.api.err_message.call(null,[cljs.core.str("Data you are trying to save were changed by other user in the meantime!")].join(''));

break;
default:
titanoboa.api.err_message.call(null,[cljs.core.str("There was an error while communicating with server: <br/>"),cljs.core.str(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(s))].join(''));

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
titanoboa.api.save_def_BANG_ = (function titanoboa$api$save_def_BANG_(def_name,job_def,notes,handler){
return ajax.core.POST.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name)].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"definition","definition",-1198729982),job_def,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.eval_snippet_BANG_ = (function titanoboa$api$eval_snippet_BANG_(snippet,type,def_name,properties,handler){
return ajax.core.POST.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name),cljs.core.str("/repl")].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.autocomplete_suggestions = (function titanoboa$api$autocomplete_suggestions(snippet,def_name,handler){
return ajax.core.POST.call(null,[cljs.core.str("/repo/jobdefinitions/"),cljs.core.str(def_name),cljs.core.str("/autocomplete")].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_live_systems = (function titanoboa$api$list_live_systems(handler){
return ajax.core.GET.call(null,"/systems/live",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_systems = (function titanoboa$api$list_systems(){
var args__6054__auto__ = [];
var len__6047__auto___7758 = arguments.length;
var i__6048__auto___7759 = (0);
while(true){
if((i__6048__auto___7759 < len__6047__auto___7758)){
args__6054__auto__.push((arguments[i__6048__auto___7759]));

var G__7760 = (i__6048__auto___7759 + (1));
i__6048__auto___7759 = G__7760;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__7756){
var vec__7757 = p__7756;
var node = cljs.core.nth.call(null,vec__7757,(0),null);
return ajax.core.GET.call(null,(cljs.core.truth_(node)?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node),cljs.core.str("/systems")].join(''):"/systems"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});

titanoboa.api.list_systems.cljs$lang$maxFixedArity = (1);

titanoboa.api.list_systems.cljs$lang$applyTo = (function (seq7754){
var G__7755 = cljs.core.first.call(null,seq7754);
var seq7754__$1 = cljs.core.next.call(null,seq7754);
return titanoboa.api.list_systems.cljs$core$IFn$_invoke$arity$variadic(G__7755,seq7754__$1);
});
titanoboa.api.get_log = (function titanoboa$api$get_log(){
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
return titanoboa.api.get_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

titanoboa.api.get_log.cljs$core$IFn$_invoke$arity$variadic = (function (handler,lines,p__7764){
var vec__7765 = p__7764;
var node = cljs.core.nth.call(null,vec__7765,(0),null);
return ajax.core.GET.call(null,(cljs.core.truth_((function (){var and__4996__auto__ = node;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.deref.call(null,titanoboa.api.cluster_enabled_QMARK_);
} else {
return and__4996__auto__;
}
})())?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node),cljs.core.str("/log")].join(''):"/log"),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),lines], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});

titanoboa.api.get_log.cljs$lang$maxFixedArity = (2);

titanoboa.api.get_log.cljs$lang$applyTo = (function (seq7761){
var G__7762 = cljs.core.first.call(null,seq7761);
var seq7761__$1 = cljs.core.next.call(null,seq7761);
var G__7763 = cljs.core.first.call(null,seq7761__$1);
var seq7761__$2 = cljs.core.next.call(null,seq7761__$1);
return titanoboa.api.get_log.cljs$core$IFn$_invoke$arity$variadic(G__7762,G__7763,seq7761__$2);
});
titanoboa.api.get_cluster_enabled_QMARK_ = (function titanoboa$api$get_cluster_enabled_QMARK_(handler,handler_404){
return ajax.core.GET.call(null,"/cluster/",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (s){
var G__7770 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7770) {
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
var len__6047__auto___7777 = arguments.length;
var i__6048__auto___7778 = (0);
while(true){
if((i__6048__auto___7778 < len__6047__auto___7777)){
args__6054__auto__.push((arguments[i__6048__auto___7778]));

var G__7779 = (i__6048__auto___7778 + (1));
i__6048__auto___7778 = G__7779;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (system,action,p__7775){
var vec__7776 = p__7775;
var node = cljs.core.nth.call(null,vec__7776,(0),null);
return ajax.core.PATCH.call(null,[cljs.core.str((cljs.core.truth_(node)?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node)].join(''):null)),cljs.core.str("/systems/"),cljs.core.str(encodeURIComponent([cljs.core.str(system)].join('')))].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"wcount","wcount",-764215138),null,new cljs.core.Keyword(null,"scope","scope",-439358418),null], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__7776,node){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__7776,node))
], null));
});

titanoboa.api.update_system_BANG_.cljs$lang$maxFixedArity = (2);

titanoboa.api.update_system_BANG_.cljs$lang$applyTo = (function (seq7772){
var G__7773 = cljs.core.first.call(null,seq7772);
var seq7772__$1 = cljs.core.next.call(null,seq7772);
var G__7774 = cljs.core.first.call(null,seq7772__$1);
var seq7772__$2 = cljs.core.next.call(null,seq7772__$1);
return titanoboa.api.update_system_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7773,G__7774,seq7772__$2);
});
titanoboa.api.add_worker_BANG_ = (function titanoboa$api$add_worker_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___7784 = arguments.length;
var i__6048__auto___7785 = (0);
while(true){
if((i__6048__auto___7785 < len__6047__auto___7784)){
args__6054__auto__.push((arguments[i__6048__auto___7785]));

var G__7786 = (i__6048__auto___7785 + (1));
i__6048__auto___7785 = G__7786;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (system,p__7782){
var vec__7783 = p__7782;
var node = cljs.core.nth.call(null,vec__7783,(0),null);
return ajax.core.POST.call(null,[cljs.core.str((cljs.core.truth_(node)?[cljs.core.str("/cluster/nodes/"),cljs.core.str(node)].join(''):null)),cljs.core.str("/systems/"),cljs.core.str(encodeURIComponent([cljs.core.str(system)].join(''))),cljs.core.str("/workers")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__7783,node){
return (function (){
return cljs.core.List.EMPTY;
});})(vec__7783,node))
], null));
});

titanoboa.api.add_worker_BANG_.cljs$lang$maxFixedArity = (1);

titanoboa.api.add_worker_BANG_.cljs$lang$applyTo = (function (seq7780){
var G__7781 = cljs.core.first.call(null,seq7780);
var seq7780__$1 = cljs.core.next.call(null,seq7780);
return titanoboa.api.add_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7781,seq7780__$1);
});
titanoboa.api.start_job_BANG_ = (function titanoboa$api$start_job_BANG_(system,conf,handler){
cljs.core.println.call(null,[cljs.core.str(">>>>>>>>>++++++++ Starting Job with parameters ["),cljs.core.str(system),cljs.core.str("] ["),cljs.core.str(conf),cljs.core.str("]")].join(''));

return ajax.core.POST.call(null,[cljs.core.str("/systems/"),cljs.core.str(encodeURIComponent([cljs.core.str(system)].join(''))),cljs.core.str("/jobs")].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),conf,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_local_jobs = (function titanoboa$api$list_local_jobs(handler){
return ajax.core.GET.call(null,"/systems/jobs",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_running_jobs = (function titanoboa$api$list_running_jobs(handler){
return ajax.core.GET.call(null,"/cluster/jobs",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.list_archived_jobs = (function titanoboa$api$list_archived_jobs(limit,offset,p__7787,handler,handler_404){
var vec__7790 = p__7787;
var order_by = cljs.core.nth.call(null,vec__7790,(0),null);
var order = cljs.core.nth.call(null,vec__7790,(1),null);
return ajax.core.GET.call(null,"/archive/jobs",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"order-by","order-by",1527318070),order_by,new cljs.core.Keyword(null,"order","order",-1254677256),order], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__7790,order_by,order){
return (function (s){
var G__7791 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7791) {
case (404):
return handler_404.call(null,s);

break;
default:
return titanoboa.api.generic_error_handler.call(null,s);

}
});})(vec__7790,order_by,order))
,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.load_archived_job = (function titanoboa$api$load_archived_job(uuid,handler){
return ajax.core.GET.call(null,[cljs.core.str("/archive/jobs/"),cljs.core.str(uuid)].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.get_dependencies = (function titanoboa$api$get_dependencies(handler,handler_404){
return ajax.core.GET.call(null,"/cluster/dependencies",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (s){
var G__7794 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
switch (G__7794) {
case (404):
return handler_404.call(null,s);

break;
default:
return titanoboa.api.generic_error_handler.call(null,s);

}
}),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.save_dependencies_BANG_ = (function titanoboa$api$save_dependencies_BANG_(old_content,new_content,handler){
return ajax.core.PATCH.call(null,"/cluster/dependencies",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),old_content,new cljs.core.Keyword(null,"new-content","new-content",525291180),new_content], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"writer","writer",-277568236),titanoboa.api.w,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"raw","raw",1604651272),true,new cljs.core.Keyword(null,"reader","reader",169660853),titanoboa.api.r,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),titanoboa.api.generic_error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
titanoboa.api.check_cluster_enabled = (function titanoboa$api$check_cluster_enabled(){
return titanoboa.api.get_cluster_enabled_QMARK_.call(null,(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.api.cluster_enabled_QMARK_,true);
}),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.api.cluster_enabled_QMARK_,false);
}));
});
