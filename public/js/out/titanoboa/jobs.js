// Compiled by ClojureScript 1.7.28 {}
goog.provide('titanoboa.jobs');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('titanoboa.designer');
goog.require('re_com.core');
goog.require('titanoboa.api');
goog.require('titanoboa.systems');
goog.require('fipp.clojure');
goog.require('titanoboa.util');
goog.require('clojure.string');
if(typeof titanoboa.jobs.active_tab !== 'undefined'){
} else {
titanoboa.jobs.active_tab = reagent.core.atom.call(null,new cljs.core.Keyword(null,"recent","recent",449517715));
}
if(typeof titanoboa.jobs.jobs_snapshot !== 'undefined'){
} else {
titanoboa.jobs.jobs_snapshot = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
titanoboa.jobs.archive_page_size = (50);
if(typeof titanoboa.jobs.archive_disabled_QMARK_ !== 'undefined'){
} else {
titanoboa.jobs.archive_disabled_QMARK_ = reagent.core.atom.call(null,false);
}
if(typeof titanoboa.jobs.archived_jobs_list !== 'undefined'){
} else {
titanoboa.jobs.archived_jobs_list = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(50),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"totalcount","totalcount",-227730219),(0),new cljs.core.Keyword(null,"values","values",372645556),cljs.core.PersistentVector.EMPTY], null));
}
if(typeof titanoboa.jobs.archived_jobs_loaded !== 'undefined'){
} else {
titanoboa.jobs.archived_jobs_loaded = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.jobs.opened_job_tabs !== 'undefined'){
} else {
titanoboa.jobs.opened_job_tabs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.jobs.opened_job !== 'undefined'){
} else {
titanoboa.jobs.opened_job = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.jobs.graph_view !== 'undefined'){
} else {
titanoboa.jobs.graph_view = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.jobs.available_job_defs_atom !== 'undefined'){
} else {
titanoboa.jobs.available_job_defs_atom = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.jobs.sort_order !== 'undefined'){
} else {
titanoboa.jobs.sort_order = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["start","desc"], null));
}
titanoboa.jobs.get_opened_job = (function titanoboa$jobs$get_opened_job(){

return cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.jobs.opened_job_tabs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.jobs.opened_job),new cljs.core.Keyword(null,"job-cursor","job-cursor",548081708)], null));
});
titanoboa.jobs.get_opened_jd = (function titanoboa$jobs$get_opened_jd(){

return cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.jobs.opened_job_tabs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.jobs.opened_job),new cljs.core.Keyword(null,"job-def","job-def",-7819356)], null));
});
titanoboa.jobs.shorten_uuid = (function titanoboa$jobs$shorten_uuid(uuid){
return [cljs.core.str(cljs.core.subs.call(null,uuid,(0),(4))),cljs.core.str(".."),cljs.core.str(cljs.core.subs.call(null,uuid,(uuid.length - (4)),uuid.length))].join('');
});
titanoboa.jobs.pagination_range = (function titanoboa$jobs$pagination_range(curr_pg,pg_total,window_size){
var full_seq = cljs.core.range.call(null,pg_total);
var last_idx = (pg_total - (1));
var left = (curr_pg - window_size);
var left__$1 = (((left < (0)))?(0):left);
var right = ((curr_pg + window_size) + (1));
var right__$1 = (((right > pg_total))?pg_total:right);
var window = cljs.core.subvec.call(null,cljs.core.vec.call(null,full_seq),left__$1,right__$1);
var decorated = (((cljs.core.first.call(null,window) === (0)))?window:cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"..."], null),window)));
var decorated__$1 = ((cljs.core._EQ_.call(null,last_idx,cljs.core.last.call(null,window)))?decorated:cljs.core.conj.call(null,decorated,"...",last_idx));
return decorated__$1;
});
titanoboa.jobs.status_label = (function titanoboa$jobs$status_label(status){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__10969 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__10969) {
case "running":
return "label-success";

break;
case "initial":
return "label-success";

break;
case "error":
return "label-danger";

break;
case "caught-error":
return "label-warning";

break;
case "retrying":
return "label-warning";

break;
case "suspended":
return "label-default";

break;
default:
return "label-primary";

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon","span.glyphicon",-1068520797),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__10970 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__10970) {
case "running":
return "glyphicon-play";

break;
case "initial":
return "glyphicon-play";

break;
case "retrying":
return "glyphicon-play";

break;
case "error":
return "glyphicon-remove";

break;
case "caught-error":
return "glyphicon-remove";

break;
case "finished":
return "glyphicon-ok";

break;
case "completed":
return "glyphicon-ok";

break;
case "suspended":
return "glyphicon-pause";

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__10971 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__10971) {
case "finished":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5cb85c"], null);

break;
case "completed":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5cb85c"], null);

break;
default:
return null;

}
})()], null)], null),[cljs.core.str(" "),cljs.core.str((((status == null))?"N/A":cljs.core.name.call(null,status)))].join('')], null);
});
titanoboa.jobs.jd_picker = (function titanoboa$jobs$jd_picker(available_job_defs,job_name_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-start-job-modal-jd-picker",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.deref.call(null,job_name_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10975_SHARP_){
return cljs.core.reset_BANG_.call(null,job_name_atom,p1__10975_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select Job definition",new cljs.core.Keyword(null,"title","title",636505583),"Select Job definition"], null),titanoboa.designer.select_options.call(null,cljs.core.keys.call(null,available_job_defs),"jobdef")], null);
});
titanoboa.jobs.rev_picker = (function titanoboa$jobs$rev_picker(available_job_defs,job_name,revision_atom,temp_props_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-start-job-modal-rev-picker",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.deref.call(null,revision_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_.call(null,revision_atom,e.target.value);

if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name,cljs.core.deref.call(null,revision_atom),new cljs.core.Keyword(null,"properties","properties",685819552)], null)))){
return titanoboa.api.get_def.call(null,job_name,cljs.core.deref.call(null,revision_atom),(function (p1__10976_SHARP_){
return cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name,cljs.core.deref.call(null,revision_atom),new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(p1__10976_SHARP_));
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select Job definition's revision",new cljs.core.Keyword(null,"title","title",636505583),"Select Job definition's revision"], null),titanoboa.designer.select_options.call(null,cljs.core.sort.call(null,(function (p1__10978_SHARP_,p2__10977_SHARP_){
return cljs.core.compare.call(null,cljs.core.first.call(null,p2__10977_SHARP_),cljs.core.first.call(null,p1__10978_SHARP_));
}),cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,i,(0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-subtext","data-subtext",1471501261),cljs.core.get.call(null,i,(1))], null)], null);
}),cljs.core.get.call(null,available_job_defs,job_name))),"rev")], null);
});
titanoboa.jobs.get_opened_snapshots = (function titanoboa$jobs$get_opened_snapshots(){

return cljs.core.reduce_kv.call(null,(function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(v))){
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(v),cljs.core.assoc,k,cljs.core.deref.call(null,new cljs.core.Keyword(null,"job-cursor","job-cursor",548081708).cljs$core$IFn$_invoke$arity$1(v)));
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.PersistentArrayMap.fromArray([k,cljs.core.deref.call(null,new cljs.core.Keyword(null,"job-cursor","job-cursor",548081708).cljs$core$IFn$_invoke$arity$1(v))], true, false));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,titanoboa.jobs.opened_job_tabs));
});
titanoboa.jobs.run_job_btn = (function titanoboa$jobs$run_job_btn(available_job_defs){

var temp_props_atom = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var editing_key = reagent.core.atom.call(null,null);
var revision = reagent.core.atom.call(null,null);
var selected_system = reagent.core.atom.call(null,null);
var job_name = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (available_job_defs__$1){
cljs.core.println.call(null,"re-rendring modal");

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group graph-buttons",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-ico","button.btn-ico",-713437553),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"run job",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (e){
if(cljs.core.truth_(available_job_defs__$1)){
return titanoboa.designer.jquery.call(null,"#jobs-start-job-modal").modal();
} else {
return titanoboa.api.list_all_defs.call(null,((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (p1__10979_SHARP_){
cljs.core.reset_BANG_.call(null,titanoboa.jobs.available_job_defs_atom,p1__10979_SHARP_);

return titanoboa.designer.jquery.call(null,"#jobs-start-job-modal").modal();
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
);
}
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"3"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-ico-refresh","button.btn.btn-default.btn-ico-refresh",478794874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-refresh-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (e){
titanoboa.api.list_all_defs.call(null,((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (p1__10980_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.available_job_defs_atom,p1__10980_SHARP_);
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
);

var G__10986 = (((cljs.core.deref.call(null,titanoboa.jobs.active_tab) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,titanoboa.jobs.active_tab).fqn:null);
switch (G__10986) {
case "recent":
return titanoboa.api.list_running_jobs.call(null,((function (G__10986,temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (p1__10981_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.jobs_snapshot,cljs.core.merge_with.call(null,cljs.core.merge,titanoboa.jobs.get_opened_snapshots.call(null),p1__10981_SHARP_));
});})(G__10986,temp_props_atom,editing_key,revision,selected_system,job_name))
);

break;
case "archived":
return titanoboa.api.list_archived_jobs.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)),cljs.core.deref.call(null,titanoboa.jobs.sort_order),((function (G__10986,temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (p1__10982_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.archived_jobs_list,p1__10982_SHARP_);
});})(G__10986,temp_props_atom,editing_key,revision,selected_system,job_name))
,((function (G__10986,temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (){
cljs.core.reset_BANG_.call(null,titanoboa.jobs.archive_disabled_QMARK_,true);

return cljs.core.reset_BANG_.call(null,titanoboa.jobs.active_tab,new cljs.core.Keyword(null,"recent","recent",449517715));
});})(G__10986,temp_props_atom,editing_key,revision,selected_system,job_name))
);

break;
default:
return null;

}
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
,new cljs.core.Keyword(null,"title","title",636505583),"Refresh"], null),""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"jobs-start-job-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-start-job-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"jobs-start-job-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"10%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"jobs-start-job-modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Start a new job"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-jd-picker-div",new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Job Definition"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.jd_picker,available_job_defs__$1,job_name], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-rev-picker-div",new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Revision Number"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.rev_picker,available_job_defs__$1,cljs.core.deref.call(null,job_name),revision,temp_props_atom], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./assets/svg/system.svg",new cljs.core.Keyword(null,"height","height",1025178622),(48)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," System"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-start-job-modal-system-picker",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null),new cljs.core.Keyword(null,"val","val",128701612),[cljs.core.str(cljs.core.deref.call(null,selected_system))].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (p1__10983_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_system,titanoboa.util.s__GT_key.call(null,p1__10983_SHARP_.target.value));
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select System",new cljs.core.Keyword(null,"title","title",636505583),"Select System"], null),titanoboa.designer.select_options.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,titanoboa.systems.systems_state))),"systems-running")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.new_props_panel_heading,"Job Properties",((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (){
return titanoboa.api.get_def.call(null,cljs.core.deref.call(null,job_name),cljs.core.deref.call(null,revision),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (p1__10984_SHARP_){
return cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,job_name),cljs.core.deref.call(null,revision),new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(p1__10984_SHARP_));
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
);
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,job_name),cljs.core.deref.call(null,revision),new cljs.core.Keyword(null,"properties","properties",685819552)], null)),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),temp_props_atom,new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,job_name),cljs.core.deref.call(null,revision),new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),cljs.core.deref.call(null,titanoboa.designer.show_parens_atom),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),cljs.core.deref.call(null,editing_key)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-default.pull-left","button.btn.btn-danger.btn-default.pull-left",-2125044425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Cancel"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (e){
titanoboa.designer.jquery.call(null,"#jobs-start-job-modal").modal("hide");

return titanoboa.api.start_job_BANG_.call(null,cljs.core.deref.call(null,selected_system),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.deref.call(null,revision),new cljs.core.Keyword(null,"jobdef-name","jobdef-name",-504854604),cljs.core.deref.call(null,job_name),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,job_name),new cljs.core.Keyword(null,"properties","properties",685819552)], null))], null),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (r){
cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,job_name),new cljs.core.Keyword(null,"last-job-id","last-job-id",-2103925493)], null),new cljs.core.Keyword(null,"jobid","jobid",-936230576).cljs$core$IFn$_invoke$arity$1(r));

return titanoboa.designer.jquery.call(null,"#jobs-job-started-modal").modal();
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
);
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Start"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"jobs-job-started-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"jobs-job-started-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"jobs-job-started-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"20%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"jobs-job-started-modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"New instance of job ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,job_name)], null)," was successfully started"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Job ID is: ",cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,job_name),new cljs.core.Keyword(null,"last-job-id","last-job-id",-2103925493)], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241)], null)], null)], null)], null)], null);
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (temp_props_atom,editing_key,revision,selected_system,job_name){
return (function (this$){
titanoboa.designer.jquery.call(null,"#jobs-start-job-modal-content").resizable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["alsoResize",".modal-dialog"], null)));

return titanoboa.designer.jquery.call(null,"#jobs-start-job-modal-dialog").draggable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["handle",".modal-header"], null)));
});})(temp_props_atom,editing_key,revision,selected_system,job_name))
], null));
});
titanoboa.jobs.exception_details_at = (function titanoboa$jobs$exception_details_at(p__10988){
var vec__10990 = p__10988;
var clazz = cljs.core.nth.call(null,vec__10990,(0),null);
var method = cljs.core.nth.call(null,vec__10990,(1),null);
var file = cljs.core.nth.call(null,vec__10990,(2),null);
var line = cljs.core.nth.call(null,vec__10990,(3),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-info","span.label.label-info",-1377012770),[cljs.core.str(clazz),cljs.core.str(" ")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),[cljs.core.str(method),cljs.core.str(" ")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-info","span.label.label-info",-1377012770),file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),[cljs.core.str(" line: "),cljs.core.str(line)].join('')], null)], null);
});
titanoboa.jobs.exception_details_via = (function titanoboa$jobs$exception_details_via(p__10991){
var map__10994 = p__10991;
var map__10994__$1 = ((((!((map__10994 == null)))?((((map__10994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10994):map__10994);
var via = map__10994__$1;
var type = cljs.core.get.call(null,map__10994__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var at = cljs.core.get.call(null,map__10994__$1,new cljs.core.Keyword(null,"at","at",1476951349));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-warning","span.label.label-warning",-681742177),[cljs.core.str(type)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),message], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.exception_details_at,at], null)], null);
});
titanoboa.jobs.exception_details = (function titanoboa$jobs$exception_details(p__10996,step_id){
var map__10999 = p__10996;
var map__10999__$1 = ((((!((map__10999 == null)))?((((map__10999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10999):map__10999);
var exception_map = map__10999__$1;
var cause = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var via = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-danger","span.label.label-danger",-1648913628),"Exception in step ",step_id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-primary","span.label.label-primary",120832457),"cause:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cause], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.sequence.call(null,cljs.core.map.call(null,titanoboa.jobs.exception_details_via,via))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-primary","span.label.label-primary",120832457),"stack trace:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.sequence.call(null,cljs.core.map.call(null,titanoboa.jobs.exception_details_at,trace))], null)], null);
});
titanoboa.jobs.job_details = (function titanoboa$jobs$job_details(opened_job_id){
var tab_selected = reagent.core.atom.call(null,new cljs.core.Keyword(null,"visualization","visualization",-679699210));
return ((function (tab_selected){
return (function (opened_job_id__$1){
var graph_cursor = reagent.core.cursor.call(null,titanoboa.jobs.graph_view,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opened_job_id__$1], null));
var jd_cursor = cljs.core.atom.call(null,titanoboa.jobs.get_opened_jd.call(null));
var job_cursor = titanoboa.jobs.get_opened_job.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.col","div.jobs-tab.col",177565585),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-horizontal","div.form-horizontal",-2097357544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label.col-md-2","label.control-label.col-md-2",-971481496),"UUID: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.form-control-static","div.col-md-12.form-control-static",557076171),opened_job_id__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label.col-md-2","label.control-label.col-md-2",-971481496),"Status: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.form-control-static","div.col-md-8.form-control-static",778155070),titanoboa.jobs.status_label.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.jobs-details.with-vtabs","div.jobs-tab.jobs-details.with-vtabs",-817944871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__11002 = (((cljs.core.deref.call(null,tab_selected) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,tab_selected).fqn:null);
switch (G__11002) {
case "visualization":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab","div.jobs-tab",-149550037),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 5px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.job_graph_visualization,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor,new cljs.core.Keyword(null,"history-map","history-map",1885369238),titanoboa.util.keyify.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor))),new cljs.core.Keyword(null,"job-metadata","job-metadata",-1874941597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.button_bar_readonly,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor], null)], null)], null);

break;
case "props":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (180))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_panel_heading,"Job Properties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-horizontal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.render_properties,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.get_in.call(null,cljs.core.deref.call(null,job_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null)),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),job_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),cljs.core.deref.call(null,titanoboa.designer.show_parens_atom),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),null,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),true,new cljs.core.Keyword(null,"vec-max-length","vec-max-length",72309835),(100)], null)], null)], null)], null)], null)], null);

break;
case "logs":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-hover","table.table.table-striped.table-hover",726875574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.sequence.call(null,cljs.core.map.call(null,((function (G__11002,graph_cursor,jd_cursor,job_cursor,tab_selected){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(i))?new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(i):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.exception_details,new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i)], null))], null)], null);
});})(G__11002,graph_cursor,jd_cursor,job_cursor,tab_selected))
,cljs.core.filter.call(null,((function (G__11002,graph_cursor,jd_cursor,job_cursor,tab_selected){
return (function (i){
var or__5008__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(i);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(i);
}
});})(G__11002,graph_cursor,jd_cursor,job_cursor,tab_selected))
,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor)))))], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,tab_selected))].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs.tabs-right.vertical-text","ul.nav.nav-tabs.tabs-right.vertical-text",-1258873543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"700"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab_selected),new cljs.core.Keyword(null,"visualization","visualization",-679699210)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_cursor,jd_cursor,job_cursor,tab_selected){
return (function (){
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"visualization","visualization",-679699210));
});})(graph_cursor,jd_cursor,job_cursor,tab_selected))
], null),"Graph"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab_selected),new cljs.core.Keyword(null,"props","props",453281727)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_cursor,jd_cursor,job_cursor,tab_selected){
return (function (){
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"props","props",453281727));
});})(graph_cursor,jd_cursor,job_cursor,tab_selected))
], null),"Properties"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab_selected),new cljs.core.Keyword(null,"logs","logs",1068148008)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_cursor,jd_cursor,job_cursor,tab_selected){
return (function (){
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"logs","logs",1068148008));
});})(graph_cursor,jd_cursor,job_cursor,tab_selected))
], null),"Logs"], null)], null)], null)], null)], null);
});
;})(tab_selected))
});
titanoboa.jobs.add_subjobs_as_steps = (function titanoboa$jobs$add_subjobs_as_steps(steps,reduce_steps){
return cljs.core.merge.call(null,steps,titanoboa.util.keyify.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.mapv.call(null,(function (p__11013){
var vec__11014 = p__11013;
var reduce_step_id = cljs.core.nth.call(null,vec__11014,(0),null);
var map__11015 = cljs.core.nth.call(null,vec__11014,(1),null);
var map__11015__$1 = ((((!((map__11015 == null)))?((((map__11015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11015):map__11015);
var map_step_id = cljs.core.get.call(null,map__11015__$1,new cljs.core.Keyword(null,"map-step-id","map-step-id",1338103340));
var map_step_id_tuples = cljs.core.get.call(null,map__11015__$1,new cljs.core.Keyword(null,"map-step-id-tuples","map-step-id-tuples",1877757858));
var map_step = cljs.core.get.call(null,steps,map_step_id);
var updated_map_step = cljs.core.update_in.call(null,map_step,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485)], null),((function (map_step,vec__11014,reduce_step_id,map__11015,map__11015__$1,map_step_id,map_step_id_tuples){
return (function (p1__11004_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,p1__11004_SHARP_,cljs.core.mapv.call(null,((function (map_step,vec__11014,reduce_step_id,map__11015,map__11015__$1,map_step_id,map_step_id_tuples){
return (function (p__11017){
var vec__11018 = p__11017;
var idx = cljs.core.nth.call(null,vec__11018,(0),null);
var uuid = cljs.core.nth.call(null,vec__11018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",uuid], null);
});})(map_step,vec__11014,reduce_step_id,map__11015,map__11015__$1,map_step_id,map_step_id_tuples))
,map_step_id_tuples)));
});})(map_step,vec__11014,reduce_step_id,map__11015,map__11015__$1,map_step_id,map_step_id_tuples))
);
var new_job_steps = cljs.core.mapv.call(null,((function (map_step,updated_map_step,vec__11014,reduce_step_id,map__11015,map__11015__$1,map_step_id,map_step_id_tuples){
return (function (p__11019){
var vec__11020 = p__11019;
var idx = cljs.core.nth.call(null,vec__11020,(0),null);
var uuid = cljs.core.nth.call(null,vec__11020,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"job","job",850873087),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",reduce_step_id], null)], null)], null);
});})(map_step,updated_map_step,vec__11014,reduce_step_id,map__11015,map__11015__$1,map_step_id,map_step_id_tuples))
,map_step_id_tuples);
return cljs.core.conj.call(null,new_job_steps,updated_map_step);
}),reduce_steps)))));
});
titanoboa.jobs.open_job = (function titanoboa$jobs$open_job(system,uuid){
var job_cursor = reagent.core.cursor.call(null,titanoboa.jobs.jobs_snapshot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [system,uuid], null));
var raw_jd = new cljs.core.Keyword(null,"jobdef","jobdef",402501090).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor));
var reduce_steps = new cljs.core.Keyword(null,"reduce-steps","reduce-steps",2034905038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor));
var converted_jd = titanoboa.designer.job_def__GT_client.call(null,raw_jd);
var converted_jd_subjobs = ((!(cljs.core.empty_QMARK_.call(null,reduce_steps)))?cljs.core.update_in.call(null,converted_jd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),titanoboa.jobs.add_subjobs_as_steps,reduce_steps):converted_jd);
var _ = cljs.core.swap_BANG_.call(null,titanoboa.jobs.opened_job_tabs,cljs.core.assoc,uuid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"job-def","job-def",-7819356),converted_jd_subjobs,new cljs.core.Keyword(null,"job-cursor","job-cursor",548081708),job_cursor,new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"recent","recent",449517715)], null));
var ___$1 = titanoboa.designer.open_visualization_BANG_.call(null,converted_jd_subjobs,titanoboa.jobs.graph_view,titanoboa.jobs.opened_job,uuid,true);
return true;
});
titanoboa.jobs.load_archived_job = (function titanoboa$jobs$load_archived_job(uuid){
return titanoboa.api.load_archived_job.call(null,uuid,(function (job){
cljs.core.swap_BANG_.call(null,titanoboa.jobs.archived_jobs_loaded,cljs.core.assoc,uuid,job);

var job_cursor = reagent.core.cursor.call(null,titanoboa.jobs.archived_jobs_loaded,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null));
var raw_jd = new cljs.core.Keyword(null,"jobdef","jobdef",402501090).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor));
var reduce_steps = new cljs.core.Keyword(null,"reduce-steps","reduce-steps",2034905038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_cursor));
var converted_jd = titanoboa.designer.job_def__GT_client.call(null,raw_jd);
var converted_jd_subjobs = ((!(cljs.core.empty_QMARK_.call(null,reduce_steps)))?cljs.core.update_in.call(null,converted_jd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),titanoboa.jobs.add_subjobs_as_steps,reduce_steps):converted_jd);
var _ = cljs.core.swap_BANG_.call(null,titanoboa.jobs.opened_job_tabs,cljs.core.assoc,uuid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"job-def","job-def",-7819356),converted_jd_subjobs,new cljs.core.Keyword(null,"job-cursor","job-cursor",548081708),job_cursor,new cljs.core.Keyword(null,"system","system",-29381724),null,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"archived","archived",1018596768)], null));
var ___$1 = titanoboa.designer.open_visualization_BANG_.call(null,converted_jd_subjobs,titanoboa.jobs.graph_view,titanoboa.jobs.opened_job,uuid,true);
return true;
}));
});
titanoboa.jobs.render_rows_trdcr = (function titanoboa$jobs$render_rows_trdcr(open_fn){
return cljs.core.map.call(null,(function (j){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),titanoboa.jobs.shorten_uuid.call(null,new cljs.core.Keyword(null,"jobid","jobid",-936230576).cljs$core$IFn$_invoke$arity$1(j))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobdef","jobdef",402501090),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"label label-default",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.4",new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),[cljs.core.str("rev."),cljs.core.str(cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobdef","jobdef",402501090),new cljs.core.Keyword(null,"revision","revision",-1350113114)], null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),titanoboa.jobs.status_label.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(j))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(j).toLocaleTimeString(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(j).toLocaleDateString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),titanoboa.util.get_time_difference.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(j),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(j))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.arrange-horizontally","td.arrange-horizontally",1565230663),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"32",new cljs.core.Keyword(null,"height","height",1025178622),"32",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"bottom",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"type","type",1174270348)], null)))?[cljs.core.str("url('../assets/svg/step-icons/"),cljs.core.str(cljs.core.name.call(null,cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"type","type",1174270348)], null)))),cljs.core.str(".svg') no-repeat scroll center center")].join(''):null)], null)], null)], null),cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),titanoboa.jobs.status_label.call(null,new cljs.core.Keyword(null,"step-state","step-state",2074915847).cljs$core$IFn$_invoke$arity$1(j))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-open-in-new",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Open",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-container","data-container",1473653353),"body"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return open_fn.call(null,new cljs.core.Keyword(null,"jobid","jobid",-936230576).cljs$core$IFn$_invoke$arity$1(j));
})], null)], null)], null);
}));
});
titanoboa.jobs.running_QMARK_ = (function titanoboa$jobs$running_QMARK_(job){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"running","running",1554969103))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"suspended","suspended",-753628113))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"initial","initial",1854648214)));
});
titanoboa.jobs.running_rows_trdcr = (function titanoboa$jobs$running_rows_trdcr(system){
return cljs.core.comp.call(null,cljs.core.filter.call(null,(function (j){
return titanoboa.jobs.running_QMARK_.call(null,j);
})),titanoboa.jobs.render_rows_trdcr.call(null,cljs.core.partial.call(null,titanoboa.jobs.open_job,system)));
});
titanoboa.jobs.finished_rows_trdcr = (function titanoboa$jobs$finished_rows_trdcr(system){
return cljs.core.comp.call(null,cljs.core.filter.call(null,(function (j){
return cljs.core.not.call(null,titanoboa.jobs.running_QMARK_.call(null,j));
})),titanoboa.jobs.render_rows_trdcr.call(null,cljs.core.partial.call(null,titanoboa.jobs.open_job,system)));
});
titanoboa.jobs.jobs_tab = (function titanoboa$jobs$jobs_tab(){
var sys_selected = reagent.core.atom.call(null,((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,titanoboa.jobs.jobs_snapshot),new cljs.core.Keyword(null,"core","core",-86019209)))?new cljs.core.Keyword(null,"core","core",-86019209):cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,titanoboa.jobs.jobs_snapshot)))));
return ((function (sys_selected){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.base-tab","div.jobs-tab.base-tab",1495315968),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.col.left-pane","div.jobs-tab.col.left-pane",-1852891893),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.jobs.active_tab),new cljs.core.Keyword(null,"recent","recent",449517715)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sys_selected){
return (function (){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.active_tab,new cljs.core.Keyword(null,"recent","recent",449517715));
});})(sys_selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Recent"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.jobs.active_tab),new cljs.core.Keyword(null,"archived","archived",1018596768)))?"active":(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.jobs.archive_disabled_QMARK_))?"disabled":null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sys_selected){
return (function (){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.active_tab,new cljs.core.Keyword(null,"archived","archived",1018596768));
});})(sys_selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Archived"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"active",new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.run_job_btn,cljs.core.deref.call(null,titanoboa.jobs.available_job_defs_atom)], null)], null)], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.jobs.active_tab),new cljs.core.Keyword(null,"recent","recent",449517715)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.jobs-listings","div.jobs-tab.jobs-listings",259587531),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.row","div.form-group.row",448197899),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3.col-form-label","label.col-sm-3.col-form-label",480007261),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-puzzle-piece","span.zmdi.zmdi-puzzle-piece",-154967044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], null)," "], null)," System:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-18","div.col-sm-18",-1326919809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"data-live-search","data-live-search",-181231710),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[true,"recent-jobs-system-selector","Select system","off",[cljs.core.str(cljs.core.deref.call(null,sys_selected))].join(''),[cljs.core.str(cljs.core.deref.call(null,sys_selected))].join(''),"text","Select system","recent-jobs-system-selector","form-control",((function (sys_selected){
return (function (p1__11021_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__11021_SHARP_.target.value,"")){
var sys = titanoboa.util.s__GT_key.call(null,p1__11021_SHARP_.target.value);
return cljs.core.reset_BANG_.call(null,sys_selected,sys);
} else {
return null;
}
});})(sys_selected))
]),titanoboa.designer.select_options.call(null,cljs.core.mapv.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,titanoboa.jobs.jobs_snapshot))))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.col","div.jobs-tab.col",177565585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (210))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-hover","table.table.table-striped.table-hover",726875574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Job ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Workflow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Started"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Duration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Last Step"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Step Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Action"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.sequence.call(null,titanoboa.jobs.running_rows_trdcr.call(null,cljs.core.deref.call(null,sys_selected)),cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.jobs.jobs_snapshot),cljs.core.deref.call(null,sys_selected)))),cljs.core.sequence.call(null,titanoboa.jobs.finished_rows_trdcr.call(null,cljs.core.deref.call(null,sys_selected)),cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.jobs.jobs_snapshot),cljs.core.deref.call(null,sys_selected))))], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.jobs-listings","div.jobs-tab.jobs-listings",259587531),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.col","div.jobs-tab.col",177565585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pagination","ul.pagination",616876298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681)," 0px 0px 10px 0px"], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (sys_selected){
return (function (pg){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.quot.call(null,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)),titanoboa.jobs.archive_page_size),pg))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((typeof pg === 'number')?((function (sys_selected){
return (function (e){
return titanoboa.api.list_archived_jobs.call(null,titanoboa.jobs.archive_page_size,(pg * titanoboa.jobs.archive_page_size),cljs.core.deref.call(null,titanoboa.jobs.sort_order),((function (sys_selected){
return (function (p1__11022_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.archived_jobs_list,p1__11022_SHARP_);
});})(sys_selected))
,((function (sys_selected){
return (function (){
cljs.core.reset_BANG_.call(null,titanoboa.jobs.archive_disabled_QMARK_,true);

return cljs.core.reset_BANG_.call(null,titanoboa.jobs.active_tab,new cljs.core.Keyword(null,"recent","recent",449517715));
});})(sys_selected))
);
});})(sys_selected))
:((function (sys_selected){
return (function (){
return cljs.core.List.EMPTY;
});})(sys_selected))
)], null),((typeof pg === 'number')?[cljs.core.str((pg + (1)))].join(''):pg)], null)], null);
});})(sys_selected))
,titanoboa.jobs.pagination_range.call(null,cljs.core.quot.call(null,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)),titanoboa.jobs.archive_page_size),Math.ceil((new cljs.core.Keyword(null,"totalcount","totalcount",-227730219).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)) / new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)))),(5))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (195))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-hover","table.table.table-striped.table-hover",726875574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Job ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Workflow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Started"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Duration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Last Step"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Step Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Action"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.sequence.call(null,titanoboa.jobs.render_rows_trdcr.call(null,titanoboa.jobs.load_archived_job),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.jobs.archived_jobs_list)))], null)], null)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jobs-tab.col.jobs-details","div.jobs-tab.col.jobs-details",-62639376),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),cljs.core.doall.call(null,cljs.core.map.call(null,((function (sys_selected){
return (function (p__11025){
var vec__11026 = p__11025;
var k = cljs.core.nth.call(null,vec__11026,(0),null);
var v = cljs.core.nth.call(null,vec__11026,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,k,cljs.core.deref.call(null,titanoboa.jobs.opened_job)))?"active":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__11026,k,v,sys_selected){
return (function (){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.opened_job,k);
});})(vec__11026,k,v,sys_selected))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),titanoboa.jobs.shorten_uuid.call(null,k)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-def","job-def",-7819356),new cljs.core.Keyword(null,"name","name",1843675177)], null))], null),((cljs.core._EQ_.call(null,k,cljs.core.deref.call(null,titanoboa.jobs.opened_job)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__11026,k,v,sys_selected){
return (function (){
return titanoboa.designer.stop_force_BANG_.call(null,titanoboa.jobs.graph_view,k).call(null,cljs.core.reset_BANG_.call(null,titanoboa.jobs.opened_job,null),cljs.core.swap_BANG_.call(null,titanoboa.jobs.opened_job_tabs,cljs.core.dissoc,k),cljs.core.reset_BANG_.call(null,titanoboa.jobs.opened_job,cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,titanoboa.jobs.opened_job_tabs)))),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"archived","archived",1018596768)))?cljs.core.swap_BANG_.call(null,titanoboa.jobs.archived_jobs_loaded,cljs.core.dissoc,k):null),cljs.core.swap_BANG_.call(null,titanoboa.jobs.graph_view,cljs.core.dissoc,k));
});})(vec__11026,k,v,sys_selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-remove",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null):null)], null)], null);
});})(sys_selected))
,cljs.core.deref.call(null,titanoboa.jobs.opened_job_tabs)))], null),(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.jobs.opened_job))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.job_details,cljs.core.deref.call(null,titanoboa.jobs.opened_job)], null):null)], null)], null);
});
;})(sys_selected))
});
titanoboa.api.list_running_jobs.call(null,(function (p1__11027_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.jobs_snapshot,cljs.core.merge_with.call(null,cljs.core.merge,titanoboa.jobs.get_opened_snapshots.call(null),p1__11027_SHARP_));
}));
titanoboa.api.list_archived_jobs.call(null,titanoboa.jobs.archive_page_size,(0),cljs.core.deref.call(null,titanoboa.jobs.sort_order),(function (p1__11028_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.archived_jobs_list,p1__11028_SHARP_);
}),(function (){
cljs.core.reset_BANG_.call(null,titanoboa.jobs.archive_disabled_QMARK_,true);

return cljs.core.reset_BANG_.call(null,titanoboa.jobs.active_tab,new cljs.core.Keyword(null,"recent","recent",449517715));
}));
titanoboa.api.list_all_defs.call(null,(function (p1__11029_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.jobs.available_job_defs_atom,p1__11029_SHARP_);
}));
