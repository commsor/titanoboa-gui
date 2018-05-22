// Compiled by ClojureScript 1.7.28 {}
goog.provide('titanoboa.designer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('re_com.core');
goog.require('cljs.tools.reader.edn');
goog.require('titanoboa.api');
goog.require('titanoboa.systems');
goog.require('fipp.clojure');
goog.require('clojure.walk');
goog.require('titanoboa.exp');
goog.require('titanoboa.util');
goog.require('fipp.ednize');
goog.require('titanoboa.icons');
goog.require('cljs.pprint');
goog.require('linked.core');
goog.require('ajax.edn');
goog.require('fipp.edn');
goog.require('clojure.string');
goog.require('re_com.buttons');
cljs.core.enable_console_print_BANG_.call(null);
titanoboa.designer.step_supertypes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tasklet","tasklet",811491570),null,new cljs.core.Keyword(null,"reduce","reduce",-281692167),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
if(typeof titanoboa.designer.step_types !== 'undefined'){
} else {
titanoboa.designer.step_types = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"custom","custom",340151948)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"composition","composition",1834198617)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file-manipulation","file-manipulation",1658896142)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"archival","archival",-1907131279)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"reduce","reduce",-281692167),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reduce","reduce",-281692167)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"custom","custom",340151948)], null)], null));
}
titanoboa.designer.custom_step_type = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195),titanoboa.exp.__GT_Expression.call(null,"(defn [j] \n :ok)")], null)], null);
titanoboa.designer.join_step_type = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"custom-join","custom-join",-240396966),new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195),titanoboa.exp.__GT_Expression.call(null,"(defn [j] \n :ok)")], null)], null);
if(typeof titanoboa.designer.job_def_list !== 'undefined'){
} else {
titanoboa.designer.job_def_list = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.designer.job_def_revision_list !== 'undefined'){
} else {
titanoboa.designer.job_def_revision_list = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
titanoboa.designer.load_def_list = (function titanoboa$designer$load_def_list(){
titanoboa.api.list_head_defs.call(null,(function (p1__10368_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.job_def_list,p1__10368_SHARP_);
}));

titanoboa.api.list_all_defs.call(null,(function (p1__10369_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.job_def_revision_list,p1__10369_SHARP_);
}));

return titanoboa.api.get_step_types.call(null,(function (p1__10370_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.step_types,cljs.core.concat.call(null,titanoboa.designer.custom_step_type,titanoboa.designer.join_step_type,p1__10370_SHARP_));
}));
});
if(typeof titanoboa.designer.app_state !== 'undefined'){
} else {
titanoboa.designer.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),cljs.core.PersistentArrayMap.EMPTY], null));
}
if(typeof titanoboa.designer.graph_view !== 'undefined'){
} else {
titanoboa.designer.graph_view = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.designer.opened_job !== 'undefined'){
} else {
titanoboa.designer.opened_job = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.designer.loaded_step_type !== 'undefined'){
} else {
titanoboa.designer.loaded_step_type = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.designer.win_height_atom !== 'undefined'){
} else {
titanoboa.designer.win_height_atom = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.designer.step_cursors !== 'undefined'){
} else {
titanoboa.designer.step_cursors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.designer.show_parens_atom !== 'undefined'){
} else {
titanoboa.designer.show_parens_atom = reagent.core.atom.call(null,false);
}
titanoboa.designer.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
titanoboa.designer.update_vals = (function titanoboa$designer$update_vals(map,vals,f){

return cljs.core.reduce.call(null,(function (p1__10371_SHARP_,p2__10372_SHARP_){
return cljs.core.update_in.call(null,p1__10371_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__10372_SHARP_], null),f);
}),map,vals);
});
/**
 * remove element in vector
 */
titanoboa.designer.vec_remove = (function titanoboa$designer$vec_remove(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});
titanoboa.designer.shorten_line = (function titanoboa$designer$shorten_line(source,target,distance){
var fromX = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source);
var fromY = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source);
var toX = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target);
var toY = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target);
var adjacent = (toY - fromY);
var opposite = (toX - fromX);
var sqrt = ((function (fromX,fromY,toX,toY,adjacent,opposite){
return (function (x){
if((x > (0))){
return Math.sqrt(x);
} else {
return (0);
}
});})(fromX,fromY,toX,toY,adjacent,opposite))
;
var sign = ((function (fromX,fromY,toX,toY,adjacent,opposite,sqrt){
return (function (x){
if(cljs.core._EQ_.call(null,x,(0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);

}
}
});})(fromX,fromY,toX,toY,adjacent,opposite,sqrt))
;
var hypotenuse = sqrt.call(null,(Math.pow(opposite,(2)) + Math.pow(adjacent,(2))));
var angle = Math.acos((adjacent / hypotenuse));
var newOppositeStart = (Math.sin(angle) * distance);
var newAdjacentStart = (Math.cos(angle) * distance);
var newOppositeEnd = (Math.sin(angle) * (hypotenuse - distance));
var newAdjacentEnd = (Math.cos(angle) * (hypotenuse - distance));
var yStart = (fromY + newAdjacentStart);
var xStart = (fromX + (sign.call(null,opposite) * newOppositeStart));
var yEnd = (fromY + newAdjacentEnd);
var xEnd = (fromX + (sign.call(null,opposite) * newOppositeEnd));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),yStart,new cljs.core.Keyword(null,"x","x",2099068185),xStart], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),yEnd,new cljs.core.Keyword(null,"x","x",2099068185),xEnd], null)], null);
});
titanoboa.designer.keyify = (function titanoboa$designer$keyify(maps_array,key){

return cljs.core.reduce.call(null,(function (p1__10373_SHARP_,p2__10374_SHARP_){
return cljs.core.merge.call(null,p1__10373_SHARP_,new cljs.core.PersistentArrayMap.fromArray([key.call(null,p2__10374_SHARP_),p2__10374_SHARP_], true, false));
}),cljs.core.PersistentArrayMap.EMPTY,maps_array);
});
titanoboa.designer.un_keyify = (function titanoboa$designer$un_keyify(map_of_maps){
return cljs.core.vec.call(null,cljs.core.vals.call(null,map_of_maps));
});
titanoboa.designer.update_in__STAR_ = (function titanoboa$designer$update_in__STAR_(){
var args__6054__auto__ = [];
var len__6047__auto___10385 = arguments.length;
var i__6048__auto___10386 = (0);
while(true){
if((i__6048__auto___10386 < len__6047__auto___10385)){
args__6054__auto__.push((arguments[i__6048__auto___10386]));

var G__10387 = (i__6048__auto___10386 + (1));
i__6048__auto___10386 = G__10387;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((3) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((3)),(0))):null);
return titanoboa.designer.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6055__auto__);
});

titanoboa.designer.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__10383,f,args){
var vec__10384 = p__10383;
var k = cljs.core.nth.call(null,vec__10384,(0),null);
var ks = cljs.core.nthnext.call(null,vec__10384,(1));
if((k === cljs.core._STAR_)){
var idx = ((cljs.core.map_QMARK_.call(null,m))?cljs.core.keys.call(null,m):cljs.core.range.call(null,cljs.core.count.call(null,m)));
if(cljs.core.truth_(ks)){
return cljs.core.reduce.call(null,((function (idx,vec__10384,k,ks){
return (function (p1__10375_SHARP_,p2__10376_SHARP_){
return cljs.core.assoc.call(null,p1__10375_SHARP_,p2__10376_SHARP_,cljs.core.apply.call(null,titanoboa.designer.update_in__STAR_,cljs.core.get.call(null,p1__10375_SHARP_,p2__10376_SHARP_),ks,f,args));
});})(idx,vec__10384,k,ks))
,m,idx);
} else {
return cljs.core.reduce.call(null,((function (idx,vec__10384,k,ks){
return (function (p1__10377_SHARP_,p2__10378_SHARP_){
return cljs.core.assoc.call(null,p1__10377_SHARP_,p2__10378_SHARP_,cljs.core.apply.call(null,f,cljs.core.get.call(null,p1__10377_SHARP_,p2__10378_SHARP_),args));
});})(idx,vec__10384,k,ks))
,m,idx);
}
} else {
if(cljs.core.truth_(ks)){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,titanoboa.designer.update_in__STAR_,cljs.core.get.call(null,m,k),ks,f,args));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),args));
}
}
});

titanoboa.designer.update_in__STAR_.cljs$lang$maxFixedArity = (3);

titanoboa.designer.update_in__STAR_.cljs$lang$applyTo = (function (seq10379){
var G__10380 = cljs.core.first.call(null,seq10379);
var seq10379__$1 = cljs.core.next.call(null,seq10379);
var G__10381 = cljs.core.first.call(null,seq10379__$1);
var seq10379__$2 = cljs.core.next.call(null,seq10379__$1);
var G__10382 = cljs.core.first.call(null,seq10379__$2);
var seq10379__$3 = cljs.core.next.call(null,seq10379__$2);
return titanoboa.designer.update_in__STAR_.cljs$core$IFn$_invoke$arity$variadic(G__10380,G__10381,G__10382,seq10379__$3);
});
titanoboa.designer.eval_property = (function titanoboa$designer$eval_property(prop){
try{var ep = cljs.reader.read_string.call(null,prop);
if((ep instanceof titanoboa.exp.Expression)){
return ep;
} else {
if(cljs.core._EQ_.call(null,cljs.core.Keyword,cljs.core.type.call(null,ep))){
return ep;
} else {
if(cljs.core._EQ_.call(null,"String",cljs.core.type.call(null,ep).name)){
return ep;
} else {
if(cljs.core._EQ_.call(null,"Number",cljs.core.type.call(null,ep).name)){
return ep;
} else {
if(cljs.core._EQ_.call(null,"Boolean",cljs.core.type.call(null,ep).name)){
return ep;
} else {
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector,cljs.core.type.call(null,ep))){
return ep;
} else {
if(cljs.core._EQ_.call(null,cljs.core.PersistentHashMap,cljs.core.type.call(null,ep))){
return ep;
} else {
if(cljs.core._EQ_.call(null,cljs.core.List,cljs.core.type.call(null,ep))){
return titanoboa.exp.__GT_Expression.call(null,prop);
} else {
return prop;

}
}
}
}
}
}
}
}
}catch (e10389){var e = e10389;
return prop;
}});
titanoboa.designer.all_maps__GT_linked = (function titanoboa$designer$all_maps__GT_linked(form){

return clojure.walk.prewalk.call(null,(function (p1__10390_SHARP_){
if((cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap,cljs.core.type.call(null,p1__10390_SHARP_))) || (cljs.core._EQ_.call(null,cljs.core.PersistentHashMap,cljs.core.type.call(null,p1__10390_SHARP_)))){
return cljs.core.into.call(null,linked.core.map.call(null),p1__10390_SHARP_);
} else {
return p1__10390_SHARP_;
}
}),form);
});
titanoboa.designer.all_linked__GT_maps = (function titanoboa$designer$all_linked__GT_maps(form){

return clojure.walk.prewalk.call(null,(function (p1__10391_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__10391_SHARP_),linked.map.LinkedMap)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__10391_SHARP_);
} else {
return p1__10391_SHARP_;
}
}),form);
});
titanoboa.designer.job_def__GT_client = (function titanoboa$designer$job_def__GT_client(job_def){

return titanoboa.designer.update_in__STAR_.call(null,cljs.core.update_in.call(null,titanoboa.designer.update_in__STAR_.call(null,titanoboa.designer.update_in__STAR_.call(null,cljs.core.update_in.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-step","first-step",-1688327922),cljs.core.get_in.call(null,job_def,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),(0),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null),job_def),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),titanoboa.designer.keyify,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_,new cljs.core.Keyword(null,"next","next",-117701485)], null),(function (p1__10392_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,p1__10392_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_], null),(function (p1__10393_SHARP_){
return cljs.core.assoc.call(null,p1__10393_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10393_SHARP_));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null),titanoboa.designer.all_maps__GT_linked),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_,new cljs.core.Keyword(null,"properties","properties",685819552)], null),titanoboa.designer.all_maps__GT_linked);
});
titanoboa.designer.steps2rename = (function titanoboa$designer$steps2rename(jd){

var filter_trans = cljs.core.filter.call(null,(function (p__10398){
var vec__10399 = p__10398;
var k = cljs.core.nth.call(null,vec__10399,(0),null);
var v = cljs.core.nth.call(null,vec__10399,(1),null);
return cljs.core.not_EQ_.call(null,k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v));
}));
var map_trans = cljs.core.map.call(null,((function (filter_trans){
return (function (p__10400){
var vec__10401 = p__10400;
var k = cljs.core.nth.call(null,vec__10401,(0),null);
var v = cljs.core.nth.call(null,vec__10401,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)], null);
});})(filter_trans))
);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.eduction.call(null,cljs.core.comp.call(null,filter_trans,map_trans),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(jd)));
});
titanoboa.designer.job_def__GT_server = (function titanoboa$designer$job_def__GT_server(job_def){

var first_step_name = new cljs.core.Keyword(null,"first-step","first-step",-1688327922).cljs$core$IFn$_invoke$arity$1(job_def);
var first_step = cljs.core.get_in.call(null,job_def,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),first_step_name], null));
var steps_to_rename = titanoboa.designer.steps2rename.call(null,job_def);
return titanoboa.designer.update_in__STAR_.call(null,cljs.core.update_in.call(null,titanoboa.designer.update_in__STAR_.call(null,cljs.core.update_in.call(null,titanoboa.designer.update_in__STAR_.call(null,titanoboa.designer.update_in__STAR_.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,job_def,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),cljs.core.dissoc,first_step_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),((function (first_step_name,first_step,steps_to_rename){
return (function (p1__10402_SHARP_){
return cljs.core.vec.call(null,cljs.core.vals.call(null,p1__10402_SHARP_));
});})(first_step_name,first_step,steps_to_rename))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),((function (first_step_name,first_step,steps_to_rename){
return (function (p1__10403_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_step], null),p1__10403_SHARP_);
});})(first_step_name,first_step,steps_to_rename))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_], null),((function (first_step_name,first_step,steps_to_rename){
return (function (p1__10404_SHARP_){
if(cljs.core.contains_QMARK_.call(null,steps_to_rename,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10404_SHARP_))){
return cljs.core.assoc.call(null,p1__10404_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,steps_to_rename,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10404_SHARP_)));
} else {
return p1__10404_SHARP_;
}
});})(first_step_name,first_step,steps_to_rename))
),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_,new cljs.core.Keyword(null,"next","next",-117701485),cljs.core._STAR_], null),((function (first_step_name,first_step,steps_to_rename){
return (function (p__10410){
var vec__10411 = p__10410;
var k = cljs.core.nth.call(null,vec__10411,(0),null);
var v = cljs.core.nth.call(null,vec__10411,(1),null);
if(cljs.core.contains_QMARK_.call(null,steps_to_rename,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,steps_to_rename,v)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});})(first_step_name,first_step,steps_to_rename))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-step","first-step",-1688327922)], null),((function (first_step_name,first_step,steps_to_rename){
return (function (p1__10405_SHARP_){
if(cljs.core.contains_QMARK_.call(null,steps_to_rename,p1__10405_SHARP_)){
return cljs.core.get.call(null,steps_to_rename,p1__10405_SHARP_);
} else {
return p1__10405_SHARP_;
}
});})(first_step_name,first_step,steps_to_rename))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_], null),((function (first_step_name,first_step,steps_to_rename){
return (function (p1__10406_SHARP_){
return cljs.core.dissoc.call(null,p1__10406_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(first_step_name,first_step,steps_to_rename))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null),titanoboa.designer.all_linked__GT_maps),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core._STAR_,new cljs.core.Keyword(null,"properties","properties",685819552)], null),titanoboa.designer.all_linked__GT_maps);
});
titanoboa.designer.step_valid_QMARK_ = (function titanoboa$designer$step_valid_QMARK_(s){
return (cljs.core.map_QMARK_.call(null,s)) && (cljs.core.every_QMARK_.call(null,s,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"properties","properties",685819552)], null))) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(s)));
});
titanoboa.designer.every_step_valid_QMARK_ = (function titanoboa$designer$every_step_valid_QMARK_(j){
return cljs.core.every_QMARK_.call(null,titanoboa.designer.step_valid_QMARK_,cljs.core.vals.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(j)));
});
titanoboa.designer.next_steps_valid_QMARK_ = (function titanoboa$designer$next_steps_valid_QMARK_(j){
return cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(j),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__10412_SHARP_){
return cljs.core.mapv.call(null,(function (i){
return cljs.core.get.call(null,i,(1));
}),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(p1__10412_SHARP_));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(j)))));
});
titanoboa.designer.first_step_valid_QMARK_ = (function titanoboa$designer$first_step_valid_QMARK_(j){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(j),new cljs.core.Keyword(null,"first-step","first-step",-1688327922).cljs$core$IFn$_invoke$arity$1(j));
});
titanoboa.designer.validate_jobdef = (function titanoboa$designer$validate_jobdef(j){
if(cljs.core.every_QMARK_.call(null,j,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"first-step","first-step",-1688327922),new cljs.core.Keyword(null,"steps","steps",-128433302)], null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(""),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"first-step","first-step",-1688327922),new cljs.core.Keyword(null,"steps","steps",-128433302)], null))))].join('')));
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(j)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("There are no steps!"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Keyword(null,"steps","steps",-128433302),new cljs.core.Symbol(null,"j","j",242556762,null)))))].join('')));
}

if(cljs.core.truth_(titanoboa.designer.every_step_valid_QMARK_.call(null,j))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("A step is in a wrong format!"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every-step-valid?","every-step-valid?",-1331331587,null),new cljs.core.Symbol(null,"j","j",242556762,null))))].join('')));
}

if(cljs.core.truth_(titanoboa.designer.first_step_valid_QMARK_.call(null,j))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Cannot reference a non-existent step as a first step!"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"first-step-valid?","first-step-valid?",-1326410079,null),new cljs.core.Symbol(null,"j","j",242556762,null))))].join('')));
}

if(cljs.core.truth_(titanoboa.designer.next_steps_valid_QMARK_.call(null,j))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Cannot reference a non-existent step as a next step!"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"next-steps-valid?","next-steps-valid?",757780907,null),new cljs.core.Symbol(null,"j","j",242556762,null))))].join('')));
}
});
titanoboa.designer.check_unique_id = (function titanoboa$designer$check_unique_id(list_of_maps,key,value){
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p1__10413_SHARP_){
return cljs.core._EQ_.call(null,key.call(null,p1__10413_SHARP_),value);
}),list_of_maps));
});
titanoboa.designer.check_unique_step_id = (function titanoboa$designer$check_unique_step_id(value){
if(cljs.core._EQ_.call(null,"start",value)){
return false;
} else {
return !(cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"steps","steps",-128433302)], null)),value));
}
});
titanoboa.designer.check_unique_step_name = (function titanoboa$designer$check_unique_step_name(id,name){
var name__$1 = (function (){var or__5008__auto__ = name;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return "";
}
})();
var name__$2 = clojure.string.trim.call(null,name__$1);
if((cljs.core._EQ_.call(null,"",name__$2)) || (cljs.core._EQ_.call(null,"start",name__$2))){
return false;
} else {
var and__4996__auto__ = titanoboa.designer.check_unique_id.call(null,cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"steps","steps",-128433302)], null)),id)),new cljs.core.Keyword(null,"name","name",1843675177),name__$2);
if(cljs.core.truth_(and__4996__auto__)){
return !(cljs.core.contains_QMARK_.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"steps","steps",-128433302)], null)),id),name__$2));
} else {
return and__4996__auto__;
}
}
});
titanoboa.designer.jquery = $;
titanoboa.designer.add_resize_listener = (function titanoboa$designer$add_resize_listener(handlerfn){
window.onload = (function (){
return handlerfn.call(null);
});

return titanoboa.designer.jquery.call(null,window).resize(handlerfn);
});
/**
 * Creates a seq of option tags from a collection.
 * Accepts following inputs:
 * A sequence of options - e.g. ['opt 1' 'opt 2']
 * A sequence of pairs where the pair can be in one of the following formats:
 * [option value]
 * [optgroup [options]]
 * [option {html attribute key-val pairs}]
 */
titanoboa.designer.select_options = (function titanoboa$designer$select_options(){
var args10414 = [];
var len__6047__auto___10425 = arguments.length;
var i__6048__auto___10426 = (0);
while(true){
if((i__6048__auto___10426 < len__6047__auto___10425)){
args10414.push((arguments[i__6048__auto___10426]));

var G__10427 = (i__6048__auto___10426 + (1));
i__6048__auto___10426 = G__10427;
continue;
} else {
}
break;
}

var G__10416 = args10414.length;
switch (G__10416) {
case 1:
return titanoboa.designer.select_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return titanoboa.designer.select_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10414.length)].join('')));

}
});

titanoboa.designer.select_options.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return titanoboa.designer.select_options.call(null,coll,null);
});

titanoboa.designer.select_options.cljs$core$IFn$_invoke$arity$2 = (function (coll,rkey){
var iter__5761__auto__ = (function titanoboa$designer$iter__10417(s__10418){
return (new cljs.core.LazySeq(null,(function (){
var s__10418__$1 = s__10418;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10418__$1);
if(temp__4425__auto__){
var s__10418__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10418__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__10418__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__10420 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__10419 = (0);
while(true){
if((i__10419 < size__5760__auto__)){
var x = cljs.core._nth.call(null,c__5759__auto__,i__10419);
cljs.core.chunk_append.call(null,b__10420,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10423 = x;
var text = cljs.core.nth.call(null,vec__10423,(0),null);
var val = cljs.core.nth.call(null,vec__10423,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),text,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str("optgroup")].join('')], null),titanoboa.designer.select_options.call(null,val,rkey)], null);
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),cljs.core.merge.call(null,val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str(text)].join('')], null)),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str(text)].join('')], null),text], null);

}
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str(x)].join('')], null),x], null)));

var G__10429 = (i__10419 + (1));
i__10419 = G__10429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10420),titanoboa$designer$iter__10417.call(null,cljs.core.chunk_rest.call(null,s__10418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10420),null);
}
} else {
var x = cljs.core.first.call(null,s__10418__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10424 = x;
var text = cljs.core.nth.call(null,vec__10424,(0),null);
var val = cljs.core.nth.call(null,vec__10424,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),text,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str("optgroup")].join('')], null),titanoboa.designer.select_options.call(null,val,rkey)], null);
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),cljs.core.merge.call(null,val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str(text)].join('')], null)),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str(text)].join('')], null),text], null);

}
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(rkey),cljs.core.str(x)].join('')], null),x], null)),titanoboa$designer$iter__10417.call(null,cljs.core.rest.call(null,s__10418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5761__auto__.call(null,coll);
});

titanoboa.designer.select_options.cljs$lang$maxFixedArity = 2;
titanoboa.designer.get_jd_rev = (function titanoboa$designer$get_jd_rev(jd){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),jd,new cljs.core.Keyword(null,"revision","revision",-1350113114)], null));
});
titanoboa.designer.update_definitions_BANG_ = (function titanoboa$designer$update_definitions_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10432 = arguments.length;
var i__6048__auto___10433 = (0);
while(true){
if((i__6048__auto___10433 < len__6047__auto___10432)){
args__6054__auto__.push((arguments[i__6048__auto___10433]));

var G__10434 = (i__6048__auto___10433 + (1));
i__6048__auto___10433 = G__10434;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.designer.update_definitions_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.designer.update_definitions_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,titanoboa.designer.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534)], null),f,args);
});

titanoboa.designer.update_definitions_BANG_.cljs$lang$maxFixedArity = (1);

titanoboa.designer.update_definitions_BANG_.cljs$lang$applyTo = (function (seq10430){
var G__10431 = cljs.core.first.call(null,seq10430);
var seq10430__$1 = cljs.core.next.call(null,seq10430);
return titanoboa.designer.update_definitions_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10431,seq10430__$1);
});
titanoboa.designer.update_definition_BANG_ = (function titanoboa$designer$update_definition_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10438 = arguments.length;
var i__6048__auto___10439 = (0);
while(true){
if((i__6048__auto___10439 < len__6047__auto___10438)){
args__6054__auto__.push((arguments[i__6048__auto___10439]));

var G__10440 = (i__6048__auto___10439 + (1));
i__6048__auto___10439 = G__10440;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return titanoboa.designer.update_definition_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

titanoboa.designer.update_definition_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (def_name,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,titanoboa.designer.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),def_name], null),f,args);
});

titanoboa.designer.update_definition_BANG_.cljs$lang$maxFixedArity = (2);

titanoboa.designer.update_definition_BANG_.cljs$lang$applyTo = (function (seq10435){
var G__10436 = cljs.core.first.call(null,seq10435);
var seq10435__$1 = cljs.core.next.call(null,seq10435);
var G__10437 = cljs.core.first.call(null,seq10435__$1);
var seq10435__$2 = cljs.core.next.call(null,seq10435__$1);
return titanoboa.designer.update_definition_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10436,G__10437,seq10435__$2);
});
titanoboa.designer.add_definition_BANG_ = (function titanoboa$designer$add_definition_BANG_(d){
return titanoboa.designer.update_definitions_BANG_.call(null,cljs.core.merge,titanoboa.designer.keyify.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null),new cljs.core.Keyword(null,"name","name",1843675177)));
});
titanoboa.designer.remove_definition_BANG_ = (function titanoboa$designer$remove_definition_BANG_(jd_name){
return cljs.core.swap_BANG_.call(null,titanoboa.designer.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534)], null),cljs.core.dissoc,jd_name);
});
titanoboa.designer.update_steps_BANG_ = (function titanoboa$designer$update_steps_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10444 = arguments.length;
var i__6048__auto___10445 = (0);
while(true){
if((i__6048__auto___10445 < len__6047__auto___10444)){
args__6054__auto__.push((arguments[i__6048__auto___10445]));

var G__10446 = (i__6048__auto___10445 + (1));
i__6048__auto___10445 = G__10446;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return titanoboa.designer.update_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

titanoboa.designer.update_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (jobdef_cursor,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,jobdef_cursor,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),f,args);
});

titanoboa.designer.update_steps_BANG_.cljs$lang$maxFixedArity = (2);

titanoboa.designer.update_steps_BANG_.cljs$lang$applyTo = (function (seq10441){
var G__10442 = cljs.core.first.call(null,seq10441);
var seq10441__$1 = cljs.core.next.call(null,seq10441);
var G__10443 = cljs.core.first.call(null,seq10441__$1);
var seq10441__$2 = cljs.core.next.call(null,seq10441__$1);
return titanoboa.designer.update_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10442,G__10443,seq10441__$2);
});
titanoboa.designer.set_first_step_BANG_ = (function titanoboa$designer$set_first_step_BANG_(jobdef_cursor,step_id){
return cljs.core.swap_BANG_.call(null,jobdef_cursor,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-step","first-step",-1688327922)], null),step_id);
});
titanoboa.designer.update_step_BANG_ = (function titanoboa$designer$update_step_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10452 = arguments.length;
var i__6048__auto___10453 = (0);
while(true){
if((i__6048__auto___10453 < len__6047__auto___10452)){
args__6054__auto__.push((arguments[i__6048__auto___10453]));

var G__10454 = (i__6048__auto___10453 + (1));
i__6048__auto___10453 = G__10454;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((3) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((3)),(0))):null);
return titanoboa.designer.update_step_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6055__auto__);
});

titanoboa.designer.update_step_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (jobdef_cursor,step_id,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,jobdef_cursor,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),step_id], null),f,args);
});

titanoboa.designer.update_step_BANG_.cljs$lang$maxFixedArity = (3);

titanoboa.designer.update_step_BANG_.cljs$lang$applyTo = (function (seq10448){
var G__10449 = cljs.core.first.call(null,seq10448);
var seq10448__$1 = cljs.core.next.call(null,seq10448);
var G__10450 = cljs.core.first.call(null,seq10448__$1);
var seq10448__$2 = cljs.core.next.call(null,seq10448__$1);
var G__10451 = cljs.core.first.call(null,seq10448__$2);
var seq10448__$3 = cljs.core.next.call(null,seq10448__$2);
return titanoboa.designer.update_step_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10449,G__10450,G__10451,seq10448__$3);
});
titanoboa.designer.add_jd_step_BANG_ = (function titanoboa$designer$add_jd_step_BANG_(jobdef_cursor,step_name){

return titanoboa.designer.update_steps_BANG_.call(null,jobdef_cursor,cljs.core.assoc,step_name,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),step_name,new cljs.core.Keyword(null,"name","name",1843675177),step_name,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195),titanoboa.exp.__GT_Expression.call(null," "),new cljs.core.Keyword(null,"next","next",-117701485),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null));
});
titanoboa.designer.remove_jd_step_BANG_ = (function titanoboa$designer$remove_jd_step_BANG_(jd_cursor,step_id){

var filter_next_fn = (function (p1__10458_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p__10464){
var vec__10465 = p__10464;
var k = cljs.core.nth.call(null,vec__10465,(0),null);
var v = cljs.core.nth.call(null,vec__10465,(1),null);
return cljs.core.not_EQ_.call(null,v,step_id);
}),p1__10458_SHARP_));
});
var remove_links_fn = ((function (filter_next_fn){
return (function (p__10466){
var vec__10467 = p__10466;
var k = cljs.core.nth.call(null,vec__10467,(0),null);
var step = cljs.core.nth.call(null,vec__10467,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update_in.call(null,step,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485)], null),filter_next_fn)], null);
});})(filter_next_fn))
;
return cljs.core.swap_BANG_.call(null,jd_cursor,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),((function (filter_next_fn,remove_links_fn){
return (function (p1__10459_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,remove_links_fn,cljs.core.dissoc.call(null,p1__10459_SHARP_,step_id)));
});})(filter_next_fn,remove_links_fn))
);
});
titanoboa.designer.add_jd_link_BANG_ = (function titanoboa$designer$add_jd_link_BANG_(jobdef_cursor,step_id,condition,next_step){
return titanoboa.designer.update_step_BANG_.call(null,jobdef_cursor,step_id,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [condition,next_step], null));
});
titanoboa.designer.remove_jd_link_BANG_ = (function titanoboa$designer$remove_jd_link_BANG_(jobdef_cursor,step_id,link){
return titanoboa.designer.update_step_BANG_.call(null,jobdef_cursor,step_id,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485)], null),(function (v){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10468_SHARP_){
return cljs.core._EQ_.call(null,p1__10468_SHARP_,link);
}),v));
}));
});
titanoboa.designer.update_def_list_BANG_ = (function titanoboa$designer$update_def_list_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10471 = arguments.length;
var i__6048__auto___10472 = (0);
while(true){
if((i__6048__auto___10472 < len__6047__auto___10471)){
args__6054__auto__.push((arguments[i__6048__auto___10472]));

var G__10473 = (i__6048__auto___10472 + (1));
i__6048__auto___10472 = G__10473;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.designer.update_def_list_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.designer.update_def_list_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,titanoboa.designer.job_def_list,f,args);
});

titanoboa.designer.update_def_list_BANG_.cljs$lang$maxFixedArity = (1);

titanoboa.designer.update_def_list_BANG_.cljs$lang$applyTo = (function (seq10469){
var G__10470 = cljs.core.first.call(null,seq10469);
var seq10469__$1 = cljs.core.next.call(null,seq10469);
return titanoboa.designer.update_def_list_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10470,seq10469__$1);
});
titanoboa.designer.revision__GT_def_list_BANG_ = (function titanoboa$designer$revision__GT_def_list_BANG_(def_name,rev){

return titanoboa.designer.update_def_list_BANG_.call(null,cljs.core.assoc,def_name,rev);
});
titanoboa.designer.get_step_cursor = (function titanoboa$designer$get_step_cursor(app_state_atom,job_name,step_id){

var c = cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.step_cursors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name,step_id], null));
if((c == null)){
var nc = reagent.core.cursor.call(null,app_state_atom,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),job_name,new cljs.core.Keyword(null,"steps","steps",-128433302),step_id], null));
cljs.core.swap_BANG_.call(null,titanoboa.designer.step_cursors,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name,step_id], null),nc);

return nc;
} else {
return c;
}
});
titanoboa.designer.force_layout = (function titanoboa$designer$force_layout(){
var args__6054__auto__ = [];
var len__6047__auto___10489 = arguments.length;
var i__6048__auto___10490 = (0);
while(true){
if((i__6048__auto___10490 < len__6047__auto___10489)){
args__6054__auto__.push((arguments[i__6048__auto___10490]));

var G__10491 = (i__6048__auto___10490 + (1));
i__6048__auto___10490 = G__10491;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((4) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((4)),(0))):null);
return titanoboa.designer.force_layout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__6055__auto__);
});

titanoboa.designer.force_layout.cljs$core$IFn$_invoke$arity$variadic = (function (graph_view_atom,width,height,jobdef_name,p__10483){
var vec__10484 = p__10483;
var static_QMARK_ = cljs.core.nth.call(null,vec__10484,(0),null);
var graph_cursor = reagent.core.cursor.call(null,graph_view_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name], null));
var fl = d3.layout.force().charge((-720)).gravity(0.11).linkDistance((135)).size([width,height]).nodes(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)))).links(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)))).start();
fl.on("tick",((function (graph_cursor,fl,vec__10484,static_QMARK_){
return (function (e){
var k = ((6) * e.alpha);
var links = fl.links();
var _ = cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (k,links,graph_cursor,fl,vec__10484,static_QMARK_){
return (function titanoboa$designer$iter__10485(s__10486){
return (new cljs.core.LazySeq(null,((function (k,links,graph_cursor,fl,vec__10484,static_QMARK_){
return (function (){
var s__10486__$1 = s__10486;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10486__$1);
if(temp__4425__auto__){
var s__10486__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10486__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__10486__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__10488 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__10487 = (0);
while(true){
if((i__10487 < size__5760__auto__)){
var d = cljs.core._nth.call(null,c__5759__auto__,i__10487);
cljs.core.chunk_append.call(null,b__10488,(function (){
d.source.y = (d.source.y - k);

return d.target.y = (d.target.y + k);
})()
);

var G__10492 = (i__10487 + (1));
i__10487 = G__10492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10488),titanoboa$designer$iter__10485.call(null,cljs.core.chunk_rest.call(null,s__10486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10488),null);
}
} else {
var d = cljs.core.first.call(null,s__10486__$2);
return cljs.core.cons.call(null,(function (){
d.source.y = (d.source.y - k);

return d.target.y = (d.target.y + k);
})()
,titanoboa$designer$iter__10485.call(null,cljs.core.rest.call(null,s__10486__$2)));
}
} else {
return null;
}
break;
}
});})(k,links,graph_cursor,fl,vec__10484,static_QMARK_))
,null,null));
});})(k,links,graph_cursor,fl,vec__10484,static_QMARK_))
;
return iter__5761__auto__.call(null,links);
})());
var repositioned_nodes = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,fl.nodes()));
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.mapv.call(null,((function (k,links,_,repositioned_nodes,graph_cursor,fl,vec__10484,static_QMARK_){
return (function (p1__10476_SHARP_){
return titanoboa.designer.update_vals.call(null,p1__10476_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"py","py",1397985916)], null),Math.round);
});})(k,links,_,repositioned_nodes,graph_cursor,fl,vec__10484,static_QMARK_))
,repositioned_nodes)], null));
});})(graph_cursor,fl,vec__10484,static_QMARK_))
);

if(cljs.core.truth_(static_QMARK_)){
var n__5892__auto___10493 = (50);
var __10494 = (0);
while(true){
if((__10494 < n__5892__auto___10493)){
fl.tick();

var G__10495 = (__10494 + (1));
__10494 = G__10495;
continue;
} else {
}
break;
}
} else {
}

return fl;
});

titanoboa.designer.force_layout.cljs$lang$maxFixedArity = (4);

titanoboa.designer.force_layout.cljs$lang$applyTo = (function (seq10478){
var G__10479 = cljs.core.first.call(null,seq10478);
var seq10478__$1 = cljs.core.next.call(null,seq10478);
var G__10480 = cljs.core.first.call(null,seq10478__$1);
var seq10478__$2 = cljs.core.next.call(null,seq10478__$1);
var G__10481 = cljs.core.first.call(null,seq10478__$2);
var seq10478__$3 = cljs.core.next.call(null,seq10478__$2);
var G__10482 = cljs.core.first.call(null,seq10478__$3);
var seq10478__$4 = cljs.core.next.call(null,seq10478__$3);
return titanoboa.designer.force_layout.cljs$core$IFn$_invoke$arity$variadic(G__10479,G__10480,G__10481,G__10482,seq10478__$4);
});
titanoboa.designer.get_force_layout = (function titanoboa$designer$get_force_layout(){
var args10496 = [];
var len__6047__auto___10499 = arguments.length;
var i__6048__auto___10500 = (0);
while(true){
if((i__6048__auto___10500 < len__6047__auto___10499)){
args10496.push((arguments[i__6048__auto___10500]));

var G__10501 = (i__6048__auto___10500 + (1));
i__6048__auto___10500 = G__10501;
continue;
} else {
}
break;
}

var G__10498 = args10496.length;
switch (G__10498) {
case 2:
return titanoboa.designer.get_force_layout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return titanoboa.designer.get_force_layout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10496.length)].join('')));

}
});

titanoboa.designer.get_force_layout.cljs$core$IFn$_invoke$arity$2 = (function (graph_view_atom,jobdef_name){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_view_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name,new cljs.core.Keyword(null,"force-layout","force-layout",1247820016)], null));
});

titanoboa.designer.get_force_layout.cljs$core$IFn$_invoke$arity$1 = (function (graph_cursor){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"force-layout","force-layout",1247820016)], null));
});

titanoboa.designer.get_force_layout.cljs$lang$maxFixedArity = 2;
titanoboa.designer.refresh_force_BANG_ = (function titanoboa$designer$refresh_force_BANG_(graph_view_atom,jobdef_name){

var fl = titanoboa.designer.get_force_layout.call(null,graph_view_atom,jobdef_name);
return fl.stop().nodes(cljs.core.clj__GT_js.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.graph_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name,new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null)))).resume();
});
titanoboa.designer.stop_force_BANG_ = (function titanoboa$designer$stop_force_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10504 = arguments.length;
var i__6048__auto___10505 = (0);
while(true){
if((i__6048__auto___10505 < len__6047__auto___10504)){
args__6054__auto__.push((arguments[i__6048__auto___10505]));

var G__10506 = (i__6048__auto___10505 + (1));
i__6048__auto___10505 = G__10506;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return titanoboa.designer.stop_force_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

titanoboa.designer.stop_force_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var fl = cljs.core.apply.call(null,titanoboa.designer.get_force_layout,args);
if(cljs.core.truth_(fl)){
return fl.stop();
} else {
return null;
}
});

titanoboa.designer.stop_force_BANG_.cljs$lang$maxFixedArity = (0);

titanoboa.designer.stop_force_BANG_.cljs$lang$applyTo = (function (seq10503){
return titanoboa.designer.stop_force_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10503));
});
/**
 * This method just updates js properties
 * (position and fixed attribute) of given js node object in D3 force layout.
 * Welcome to mutable world of D3 :) !
 */
titanoboa.designer.fix_fl_node_BANG_ = (function titanoboa$designer$fix_fl_node_BANG_(){
var args10507 = [];
var len__6047__auto___10510 = arguments.length;
var i__6048__auto___10511 = (0);
while(true){
if((i__6048__auto___10511 < len__6047__auto___10510)){
args10507.push((arguments[i__6048__auto___10511]));

var G__10512 = (i__6048__auto___10511 + (1));
i__6048__auto___10511 = G__10512;
continue;
} else {
}
break;
}

var G__10509 = args10507.length;
switch (G__10509) {
case 4:
return titanoboa.designer.fix_fl_node_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return titanoboa.designer.fix_fl_node_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10507.length)].join('')));

}
});

titanoboa.designer.fix_fl_node_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (graph_cursor,i,fixed,pinned){
var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var nodes = fl.nodes();
var node = cljs.core.get.call(null,nodes,i);
node.fixed = fixed;

if(cljs.core.truth_(titanoboa.designer.not_nil_QMARK_.call(null,pinned))){
return node.pinned = pinned;
} else {
return null;
}
});

titanoboa.designer.fix_fl_node_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (graph_cursor,i,fixed){
return titanoboa.designer.fix_fl_node_BANG_.call(null,graph_cursor,i,fixed,null);
});

titanoboa.designer.fix_fl_node_BANG_.cljs$lang$maxFixedArity = 4;
titanoboa.designer.fix_all_nodes_BANG_ = (function titanoboa$designer$fix_all_nodes_BANG_(graph_cursor,fixed){

var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var nodes = fl.nodes();
fl.stop();

nodes.forEach(((function (fl,nodes){
return (function (p1__10514_SHARP_){
p1__10514_SHARP_.fixed = fixed;

return p1__10514_SHARP_.pinned = fixed;
});})(fl,nodes))
);

if(cljs.core.not.call(null,fixed)){
return fl.resume();
} else {
return null;
}
});
titanoboa.designer.reposition_fl_node_BANG_ = (function titanoboa$designer$reposition_fl_node_BANG_(graph_cursor,i,p__10515,fixed){
var vec__10517 = p__10515;
var x = cljs.core.nth.call(null,vec__10517,(0),null);
var y = cljs.core.nth.call(null,vec__10517,(1),null);

var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var nodes = fl.nodes();
var node = cljs.core.get.call(null,nodes,i);
fl.stop();

node.x = x;

node.y = y;

node.px = x;

node.py = y;

node.fixed = fixed;

node.pinned = fixed;

return fl.resume();
});
titanoboa.designer.get_node_index = (function titanoboa$designer$get_node_index(nodes,id){
return new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10518_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10518_SHARP_),id);
}),nodes)));
});
titanoboa.designer.gen_vertices = (function titanoboa$designer$gen_vertices(steps,nodes){
return cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__10519_SHARP_){
return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),titanoboa.designer.get_node_index.call(null,nodes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10519_SHARP_)),new cljs.core.Keyword(null,"target","target",253001721),titanoboa.designer.get_node_index.call(null,nodes,cljs.core.get.call(null,x,(1))),new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.get.call(null,x,(0))], null);
}),cljs.core.seq.call(null,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(p1__10519_SHARP_)));
}),steps)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),(1),new cljs.core.Keyword(null,"condition","condition",1668437652),"*"], null)));
});
titanoboa.designer.get_steps_vec = (function titanoboa$designer$get_steps_vec(jd){

var steps = cljs.core.get_in.call(null,jd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null));
var first_step_id = cljs.core.get_in.call(null,jd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-step","first-step",-1688327922)], null));
var first_step = cljs.core.get_in.call(null,steps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_step_id], null));
var the_rest = cljs.core.dissoc.call(null,steps,first_step_id);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_step], null),cljs.core.vals.call(null,the_rest)));
});
titanoboa.designer.reload_vertices_BANG_ = (function titanoboa$designer$reload_vertices_BANG_(jd,graph_cursor){
var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var steps = titanoboa.designer.get_steps_vec.call(null,jd);
var nodes = cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null));
var vertices = titanoboa.designer.gen_vertices.call(null,steps,nodes);
cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null),vertices);

return fl.stop().links(cljs.core.clj__GT_js.call(null,vertices)).start();
});
titanoboa.designer.update_fl_node_BANG_ = (function titanoboa$designer$update_fl_node_BANG_(graph_cursor,step_id,step_name,step_type){

var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var nodes = fl.nodes();
var node = cljs.core.first.call(null,nodes.filter(((function (fl,nodes){
return (function (p1__10521_SHARP_){
return cljs.core._EQ_.call(null,p1__10521_SHARP_.id,step_id);
});})(fl,nodes))
));
fl.stop();

node.type = cljs.core.name.call(null,step_type);

node.name = step_name;

return fl.start();
});
titanoboa.designer.add_fl_node_BANG_ = (function titanoboa$designer$add_fl_node_BANG_(graph_cursor,node_name){

var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var new_node = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(32),new cljs.core.Keyword(null,"id","id",-1388402092),node_name,new cljs.core.Keyword(null,"name","name",1843675177),node_name,new cljs.core.Keyword(null,"px","px",281329899),(0),new cljs.core.Keyword(null,"py","py",1397985916),(0),new cljs.core.Keyword(null,"type","type",1174270348),"custom"], null);
var _ = fl.stop();
var idx = fl.nodes().push(cljs.core.clj__GT_js.call(null,new_node));
fl.start();

return idx;
});
titanoboa.designer.reindex_vertice = (function titanoboa$designer$reindex_vertice(){
var args__6054__auto__ = [];
var len__6047__auto___10524 = arguments.length;
var i__6048__auto___10525 = (0);
while(true){
if((i__6048__auto___10525 < len__6047__auto___10524)){
args__6054__auto__.push((arguments[i__6048__auto___10525]));

var G__10526 = (i__6048__auto___10525 + (1));
i__6048__auto___10525 = G__10526;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return titanoboa.designer.reindex_vertice.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

titanoboa.designer.reindex_vertice.cljs$core$IFn$_invoke$arity$variadic = (function (index,args){

return (function (vertice){
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(vertice);
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(vertice);
return cljs.core.assoc.call(null,vertice,new cljs.core.Keyword(null,"source","source",-433931539),(((source > index))?(source - (1)):source),new cljs.core.Keyword(null,"target","target",253001721),(((target > index))?(target - (1)):target));
});
});

titanoboa.designer.reindex_vertice.cljs$lang$maxFixedArity = (1);

titanoboa.designer.reindex_vertice.cljs$lang$applyTo = (function (seq10522){
var G__10523 = cljs.core.first.call(null,seq10522);
var seq10522__$1 = cljs.core.next.call(null,seq10522);
return titanoboa.designer.reindex_vertice.cljs$core$IFn$_invoke$arity$variadic(G__10523,seq10522__$1);
});
titanoboa.designer.remove_nodes_vertices_BANG_ = (function titanoboa$designer$remove_nodes_vertices_BANG_(graph_cursor,node_index){

var vert_cursor = reagent.core.cursor.call(null,graph_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null));
var remove_transducer = cljs.core.remove.call(null,((function (vert_cursor){
return (function (v){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v),node_index)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v),node_index));
});})(vert_cursor))
);
var reindex_transducer = cljs.core.map.call(null,titanoboa.designer.reindex_vertice.call(null,node_index));
return cljs.core.swap_BANG_.call(null,vert_cursor,((function (vert_cursor,remove_transducer,reindex_transducer){
return (function (p1__10527_SHARP_){
return cljs.core.vec.call(null,cljs.core.eduction.call(null,cljs.core.comp.call(null,remove_transducer,reindex_transducer),p1__10527_SHARP_));
});})(vert_cursor,remove_transducer,reindex_transducer))
);
});
titanoboa.designer.add_vertice_BANG_ = (function titanoboa$designer$add_vertice_BANG_(vert_cursor,source_idx,target_idx,condition){
if(cljs.core.not_EQ_.call(null,target_idx,(0))){
if(cljs.core._EQ_.call(null,source_idx,(0))){
return cljs.core.swap_BANG_.call(null,vert_cursor,cljs.core.assoc,(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),source_idx,new cljs.core.Keyword(null,"target","target",253001721),target_idx,new cljs.core.Keyword(null,"condition","condition",1668437652),"*"], null));
} else {
return cljs.core.swap_BANG_.call(null,vert_cursor,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),source_idx,new cljs.core.Keyword(null,"target","target",253001721),target_idx,new cljs.core.Keyword(null,"condition","condition",1668437652),condition], null));
}
} else {
return null;
}
});
titanoboa.designer.add_fl_link_BANG_ = (function titanoboa$designer$add_fl_link_BANG_(graph_cursor,vert_cursor,source_idx,target_idx,condition){
if(cljs.core.not_EQ_.call(null,target_idx,(0))){
var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
return fl.stop().links(cljs.core.clj__GT_js.call(null,titanoboa.designer.add_vertice_BANG_.call(null,vert_cursor,source_idx,target_idx,condition))).start();
} else {
return null;
}
});
titanoboa.designer.remove_fl_node_BANG_ = (function titanoboa$designer$remove_fl_node_BANG_(graph_cursor,node_id){

var fl = titanoboa.designer.get_force_layout.call(null,graph_cursor);
var _ = fl.stop();
var nodes = fl.nodes();
var node = cljs.core.get.call(null,nodes.filter(((function (fl,_,nodes){
return (function (a,b,c){
return cljs.core._EQ_.call(null,a.id,node_id);
});})(fl,_,nodes))
),(0));
var index = node.index;
var idx = nodes.indexOf(node);
nodes.splice(idx,(1));

return fl.links(cljs.core.clj__GT_js.call(null,titanoboa.designer.remove_nodes_vertices_BANG_.call(null,graph_cursor,index))).start();
});
/**
 * Generates a vector of maps from provided steps seq - the resulting vec contains also a map for a 'start step' and each map contains also an :index attribute.
 * From the original seq only :name and :type attributes are used.
 */
titanoboa.designer.gen_nodes_seq = (function titanoboa$designer$gen_nodes_seq(){
var args10531 = [];
var len__6047__auto___10534 = arguments.length;
var i__6048__auto___10535 = (0);
while(true){
if((i__6048__auto___10535 < len__6047__auto___10534)){
args10531.push((arguments[i__6048__auto___10535]));

var G__10536 = (i__6048__auto___10535 + (1));
i__6048__auto___10535 = G__10536;
continue;
} else {
}
break;
}

var G__10533 = args10531.length;
switch (G__10533) {
case 4:
return titanoboa.designer.gen_nodes_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 1:
return titanoboa.designer.gen_nodes_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10531.length)].join('')));

}
});

titanoboa.designer.gen_nodes_seq.cljs$core$IFn$_invoke$arity$4 = (function (steps,sx,sy,fixed){
return cljs.core.conj.call(null,cljs.core.keep_indexed.call(null,(function (p1__10529_SHARP_,p2__10528_SHARP_){
return cljs.core.assoc.call(null,p2__10528_SHARP_,new cljs.core.Keyword(null,"index","index",-1531685915),(p1__10529_SHARP_ + (1)));
}),cljs.core.mapv.call(null,(function (p1__10530_SHARP_){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(32),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10530_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__10530_SHARP_),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__10530_SHARP_),new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false], null);
}),steps)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"pinned","pinned",-1216085339),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fixed","fixed",-562004358)],[sy,(36),fixed,(0),"start",new cljs.core.Keyword(null,"start","start",-355208981),"start",sx,fixed]));
});

titanoboa.designer.gen_nodes_seq.cljs$core$IFn$_invoke$arity$1 = (function (steps){
return titanoboa.designer.gen_nodes_seq.call(null,steps,((600) / (2)),(24),true);
});

titanoboa.designer.gen_nodes_seq.cljs$lang$maxFixedArity = 4;
titanoboa.designer.parse_job_graph = (function titanoboa$designer$parse_job_graph(jd){
var steps = titanoboa.designer.get_steps_vec.call(null,jd);
var nodes = titanoboa.designer.gen_nodes_seq.call(null,steps);
var vertices = titanoboa.designer.gen_vertices.call(null,steps,nodes);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.vec.call(null,nodes),new cljs.core.Keyword(null,"vertices","vertices",2008905731),cljs.core.vec.call(null,vertices),new cljs.core.Keyword(null,"drag","drag",449951290),null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"y","y",-1757859776),null], null)], null));
});
titanoboa.designer.initialize_visualization_BANG_ = (function titanoboa$designer$initialize_visualization_BANG_(jd,graph_view_atom,jobdef_name){
return cljs.core.swap_BANG_.call(null,graph_view_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name], null),cljs.core.merge.call(null,titanoboa.designer.parse_job_graph.call(null,jd),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"properties","properties",685819552)], null)));
});
titanoboa.designer.reinitialize_visualization_BANG_ = (function titanoboa$designer$reinitialize_visualization_BANG_(jd,graph_view_atom,jobdef_name){
return cljs.core.swap_BANG_.call(null,graph_view_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name], null),(function (p1__10538_SHARP_){
return cljs.core.merge.call(null,p1__10538_SHARP_,titanoboa.designer.parse_job_graph.call(null,jd),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),null], null));
}));
});
titanoboa.designer.initialize_force_BANG_ = (function titanoboa$designer$initialize_force_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10544 = arguments.length;
var i__6048__auto___10545 = (0);
while(true){
if((i__6048__auto___10545 < len__6047__auto___10544)){
args__6054__auto__.push((arguments[i__6048__auto___10545]));

var G__10546 = (i__6048__auto___10545 + (1));
i__6048__auto___10545 = G__10546;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return titanoboa.designer.initialize_force_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

titanoboa.designer.initialize_force_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (graph_view_atom,jobdef_name,p__10542){
var vec__10543 = p__10542;
var static_QMARK_ = cljs.core.nth.call(null,vec__10543,(0),null);
return cljs.core.swap_BANG_.call(null,graph_view_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name,new cljs.core.Keyword(null,"force-layout","force-layout",1247820016)], null),titanoboa.designer.force_layout.call(null,graph_view_atom,(600),(600),jobdef_name,static_QMARK_));
});

titanoboa.designer.initialize_force_BANG_.cljs$lang$maxFixedArity = (2);

titanoboa.designer.initialize_force_BANG_.cljs$lang$applyTo = (function (seq10539){
var G__10540 = cljs.core.first.call(null,seq10539);
var seq10539__$1 = cljs.core.next.call(null,seq10539);
var G__10541 = cljs.core.first.call(null,seq10539__$1);
var seq10539__$2 = cljs.core.next.call(null,seq10539__$1);
return titanoboa.designer.initialize_force_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10540,G__10541,seq10539__$2);
});
titanoboa.designer.open_visualization_BANG_ = (function titanoboa$designer$open_visualization_BANG_(){
var args__6054__auto__ = [];
var len__6047__auto___10554 = arguments.length;
var i__6048__auto___10555 = (0);
while(true){
if((i__6048__auto___10555 < len__6047__auto___10554)){
args__6054__auto__.push((arguments[i__6048__auto___10555]));

var G__10556 = (i__6048__auto___10555 + (1));
i__6048__auto___10555 = G__10556;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((4) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((4)),(0))):null);
return titanoboa.designer.open_visualization_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__6055__auto__);
});

titanoboa.designer.open_visualization_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (jd,graph_view_atom,opened_job_atom,jobdef_name,p__10552){
var vec__10553 = p__10552;
var static_QMARK_ = cljs.core.nth.call(null,vec__10553,(0),null);
if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_view_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobdef_name], null)))){
titanoboa.designer.initialize_visualization_BANG_.call(null,jd,graph_view_atom,jobdef_name);

titanoboa.designer.initialize_force_BANG_.call(null,graph_view_atom,jobdef_name,static_QMARK_);
} else {
}

return cljs.core.reset_BANG_.call(null,opened_job_atom,jobdef_name);
});

titanoboa.designer.open_visualization_BANG_.cljs$lang$maxFixedArity = (4);

titanoboa.designer.open_visualization_BANG_.cljs$lang$applyTo = (function (seq10547){
var G__10548 = cljs.core.first.call(null,seq10547);
var seq10547__$1 = cljs.core.next.call(null,seq10547);
var G__10549 = cljs.core.first.call(null,seq10547__$1);
var seq10547__$2 = cljs.core.next.call(null,seq10547__$1);
var G__10550 = cljs.core.first.call(null,seq10547__$2);
var seq10547__$3 = cljs.core.next.call(null,seq10547__$2);
var G__10551 = cljs.core.first.call(null,seq10547__$3);
var seq10547__$4 = cljs.core.next.call(null,seq10547__$3);
return titanoboa.designer.open_visualization_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10548,G__10549,G__10550,G__10551,seq10547__$4);
});
titanoboa.designer.reload_force_BANG_ = (function titanoboa$designer$reload_force_BANG_(jd,graph_view_atom,jobdef_name){
titanoboa.designer.stop_force_BANG_.call(null,graph_view_atom,jobdef_name);

titanoboa.designer.reinitialize_visualization_BANG_.call(null,jd,graph_view_atom,jobdef_name);

return titanoboa.designer.initialize_force_BANG_.call(null,graph_view_atom,jobdef_name);
});
titanoboa.designer.new_definition = (function titanoboa$designer$new_definition(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0px 0px 0px",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Job Template Name",new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__10557_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__10557_SHARP_);
});})(val))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
var temp__4425__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"revision","revision",-1350113114),(0),new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"first-step","first-step",-1688327922),"step",new cljs.core.Keyword(null,"steps","steps",-128433302),new cljs.core.PersistentArrayMap(null, 1, ["step",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"step",new cljs.core.Keyword(null,"name","name",1843675177),"step",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"supertype","supertype",355302204),new cljs.core.Keyword(null,"tasklet","tasklet",811491570),new cljs.core.Keyword(null,"next","next",-117701485),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195),titanoboa.exp.__GT_Expression.call(null," "),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null);
if(cljs.core.truth_(temp__4425__auto__)){
var jd = temp__4425__auto__;
titanoboa.designer.add_definition_BANG_.call(null,jd);

titanoboa.designer.open_visualization_BANG_.call(null,jd,titanoboa.designer.graph_view,titanoboa.designer.opened_job,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(jd));

return cljs.core.reset_BANG_.call(null,val,"");
} else {
return null;
}
});})(val))
,new cljs.core.Keyword(null,"label","label",1718410804),"Add"], null)], null)], null);
});
;})(val))
});
titanoboa.designer.load_revision_modal = (function titanoboa$designer$load_revision_modal(p__10558){
var map__10564 = p__10558;
var map__10564__$1 = ((((!((map__10564 == null)))?((((map__10564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10564):map__10564);
var jd_name = cljs.core.get.call(null,map__10564__$1,new cljs.core.Keyword(null,"jd-name","jd-name",-1217920692));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__10564,map__10564__$1,jd_name){
return (function (p__10566){
var map__10567 = p__10566;
var map__10567__$1 = ((((!((map__10567 == null)))?((((map__10567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10567):map__10567);
var jd_name__$1 = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"jd-name","jd-name",-1217920692));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"load-revision-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"load-revision-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"load-revision-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"8%",new cljs.core.Keyword(null,"left","left",-399115937),"18%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"load-revision-modal-content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("load-revision-modal-header"),cljs.core.str(jd_name__$1)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px 0px 0px 0px",new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"width","width",-384071477),"28px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/svg/flow.svg"], null)], null)," Load a flow definition's revision from repository for flow ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),jd_name__$1], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("load-revision-modal-body"),cljs.core.str(jd_name__$1)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-hover table-striped table-bordered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Revision"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Action"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__10567,map__10567__$1,jd_name__$1,map__10564,map__10564__$1,jd_name){
return (function (i){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"label label-default"], null),cljs.core.get.call(null,i,(0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str(cljs.core.get.call(null,i,(1)))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10567,map__10567__$1,jd_name__$1,map__10564,map__10564__$1,jd_name){
return (function (){
titanoboa.designer.jquery.call(null,"#load-revision-modal").modal("hide");

return titanoboa.api.get_def.call(null,jd_name__$1,cljs.core.get.call(null,i,(0)),((function (map__10567,map__10567__$1,jd_name__$1,map__10564,map__10564__$1,jd_name){
return (function (jd){
var converted_jd = titanoboa.designer.job_def__GT_client.call(null,jd);
titanoboa.designer.add_definition_BANG_.call(null,converted_jd);

titanoboa.designer.open_visualization_BANG_.call(null,converted_jd,titanoboa.designer.graph_view,titanoboa.designer.opened_job,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(jd));

return titanoboa.designer.reload_force_BANG_.call(null,converted_jd,titanoboa.designer.graph_view,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(jd));
});})(map__10567,map__10567__$1,jd_name__$1,map__10564,map__10564__$1,jd_name))
);
});})(map__10567,map__10567__$1,jd_name__$1,map__10564,map__10564__$1,jd_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-edit","i.zmdi.zmdi-edit",-1454471844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], null)], null);
});})(map__10567,map__10567__$1,jd_name__$1,map__10564,map__10564__$1,jd_name))
,cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.designer.job_def_revision_list),jd_name__$1)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-default","button.btn.btn-danger.btn-default",-1207002074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Cancel"], null)], null)], null)], null)], null)], null);
});})(map__10564,map__10564__$1,jd_name))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__10564,map__10564__$1,jd_name){
return (function (this$){
titanoboa.designer.jquery.call(null,"#load-revision-modal-content").resizable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["alsoResize",".modal-dialog"], null)));

return titanoboa.designer.jquery.call(null,"#load-revision-modal-dialog").draggable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["handle",".modal-header"], null)));
});})(map__10564,map__10564__$1,jd_name))
], null));
});
titanoboa.designer.grid_body = (function titanoboa$designer$grid_body(p__10569){
var map__10572 = p__10569;
var map__10572__$1 = ((((!((map__10572 == null)))?((((map__10572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10572):map__10572);
var filter_text = cljs.core.get.call(null,map__10572__$1,new cljs.core.Keyword(null,"filter-text","filter-text",-381699202));
var job_def_list = cljs.core.get.call(null,map__10572__$1,new cljs.core.Keyword(null,"job-def-list","job-def-list",228175520));
var open_jd_revisions = cljs.core.get.call(null,map__10572__$1,new cljs.core.Keyword(null,"open-jd-revisions","open-jd-revisions",-631627575));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions){
return (function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str(cljs.core.get.call(null,i,(0))),cljs.core.str(" ")].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"label label-default"], null),cljs.core.get.call(null,i,(1))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions){
return (function (){
return titanoboa.api.get_head_def.call(null,cljs.core.get.call(null,i,(0)),((function (map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions){
return (function (jd){
var converted_jd = titanoboa.designer.job_def__GT_client.call(null,jd);
titanoboa.designer.add_definition_BANG_.call(null,converted_jd);

titanoboa.designer.open_visualization_BANG_.call(null,converted_jd,titanoboa.designer.graph_view,titanoboa.designer.opened_job,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(jd));

return titanoboa.designer.reload_force_BANG_.call(null,converted_jd,titanoboa.designer.graph_view,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(jd));
});})(map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions))
);
});})(map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-edit","i.zmdi.zmdi-edit",-1454471844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions){
return (function (){
cljs.core.reset_BANG_.call(null,open_jd_revisions,cljs.core.get.call(null,i,(0)));

return titanoboa.designer.jquery.call(null,"#load-revision-modal").modal();
});})(map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions))
,new cljs.core.Keyword(null,"title","title",636505583),"View Revisions",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-time-restore","i.zmdi.zmdi-time-restore",-511128588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"-18px"], null)], null)], null)], null)], null)], null);
});})(map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions))
,(cljs.core.truth_((function (){var and__4996__auto__ = filter_text;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.call(null,clojure.string.trim.call(null,filter_text),"");
} else {
return and__4996__auto__;
}
})())?cljs.core.filterv.call(null,((function (map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions){
return (function (i){
return cljs.core.clj__GT_js.call(null,cljs.core.get.call(null,i,(0))).toLowerCase().includes(cljs.core.clj__GT_js.call(null,filter_text).toLowerCase());
});})(map__10572,map__10572__$1,filter_text,job_def_list,open_jd_revisions))
,job_def_list):job_def_list)))], null);
});
titanoboa.designer.grid = (function titanoboa$designer$grid(p__10575){
var map__10581 = p__10575;
var map__10581__$1 = ((((!((map__10581 == null)))?((((map__10581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10581):map__10581);
var job_def_list = cljs.core.get.call(null,map__10581__$1,new cljs.core.Keyword(null,"job-def-list","job-def-list",228175520));
var open_jd_revisions = reagent.core.atom.call(null,null);
var filter_text = reagent.core.atom.call(null,null);
var filtered_jd_list = reagent.core.atom.call(null,job_def_list);
return ((function (open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list){
return (function (p__10583){
var map__10584 = p__10583;
var map__10584__$1 = ((((!((map__10584 == null)))?((((map__10584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10584):map__10584);
var job_def_list__$1 = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"job-def-list","job-def-list",228175520));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (140)),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"240px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px 0px 0px 0px",new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"width","width",-384071477),"32px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/svg/flow.svg"], null)], null)," Flow Definitions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.load_revision_modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jd-name","jd-name",-1217920692),cljs.core.deref.call(null,open_jd_revisions)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-hover table-striped table-bordered header-fixed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10584,map__10584__$1,job_def_list__$1,open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list){
return (function (p1__10574_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_text,p1__10574_SHARP_.target.value);
});})(map__10584,map__10584__$1,job_def_list__$1,open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list))
,new cljs.core.Keyword(null,"size","size",1098693007),"15"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10584,map__10584__$1,job_def_list__$1,open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list){
return (function (){
return cljs.core.List.EMPTY;
});})(map__10584,map__10584__$1,job_def_list__$1,open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list))
,new cljs.core.Keyword(null,"title","title",636505583),"filter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-filter-list","i.zmdi.zmdi-filter-list",-108434350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10584,map__10584__$1,job_def_list__$1,open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list){
return (function (){
return titanoboa.designer.load_def_list.call(null);
});})(map__10584,map__10584__$1,job_def_list__$1,open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"title","title",636505583),"refresh"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-refresh","i.zmdi.zmdi-refresh",-1091899932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"-18px"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.grid_body,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"job-def-list","job-def-list",228175520),job_def_list__$1,new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),cljs.core.deref.call(null,filter_text),new cljs.core.Keyword(null,"open-jd-revisions","open-jd-revisions",-631627575),open_jd_revisions], null)], null)], null)], null);
});
;})(open_jd_revisions,filter_text,filtered_jd_list,map__10581,map__10581__$1,job_def_list))
});
titanoboa.designer.get_node_key = (function titanoboa$designer$get_node_key(name,type){
return [cljs.core.str(name),cljs.core.str(type)].join('');
});
titanoboa.designer.svg_coordinates = (function titanoboa$designer$svg_coordinates(p__10586){
var vec__10588 = p__10586;
var htmlX = cljs.core.nth.call(null,vec__10588,(0),null);
var htmlY = cljs.core.nth.call(null,vec__10588,(1),null);
var svg = document.getElementById("svg");
var point = svg.createSVGPoint();
var _ = point.x = htmlX;
var ___$1 = point.y = htmlY;
var svgCTM = svg.getScreenCTM();
var iPNT = point.matrixTransform(svgCTM.inverse());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.round(iPNT.x),Math.round(iPNT.y)], null);
});
titanoboa.designer.modal_link_props = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null,new cljs.core.Keyword(null,"cond","cond",-33823472),"",new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720),null], null));
titanoboa.designer.add_link_modal_dialog = (function titanoboa$designer$add_link_modal_dialog(){
var cond_value = reagent.core.cursor.call(null,titanoboa.designer.modal_link_props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472)], null));
var show_QMARK_ = reagent.core.cursor.call(null,titanoboa.designer.modal_link_props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null));
return ((function (cond_value,show_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,show_QMARK_))?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),((function (cond_value,show_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,show_QMARK_,false);
});})(cond_value,show_QMARK_))
,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"grey",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Consolas"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit link"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"From: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"label label-primary"], null),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.designer.modal_link_props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"To  : ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"label label-primary"], null),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.designer.modal_link_props))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cond_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cond_value,show_QMARK_){
return (function (p1__10589_SHARP_){
return cljs.core.reset_BANG_.call(null,cond_value,titanoboa.designer.eval_property.call(null,p1__10589_SHARP_.target.value));
});})(cond_value,show_QMARK_))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Condition",new cljs.core.Keyword(null,"size","size",1098693007),"15"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-btn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cond_value,show_QMARK_){
return (function (){
new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.designer.modal_link_props)).call(null,cljs.core.deref.call(null,cond_value));

return cljs.core.reset_BANG_.call(null,titanoboa.designer.modal_link_props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null,new cljs.core.Keyword(null,"cond","cond",-33823472),"",new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720),null], null));
});})(cond_value,show_QMARK_))
], null),"Update"], null)], null)], null)], null)], null):null)], null)], null);
});
;})(cond_value,show_QMARK_))
});
titanoboa.designer.step_node = (function titanoboa$designer$step_node(p__10590){
var map__10594 = p__10590;
var map__10594__$1 = ((((!((map__10594 == null)))?((((map__10594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10594):map__10594);
var job_metadata = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"job-metadata","job-metadata",-1874941597));
var pinned = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var key = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var index = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var graph_cursor = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var scale = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var name = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var history = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var type = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inactive_QMARK_ = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"inactive?","inactive?",1268294254));
var mode_atom = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"mode-atom","mode-atom",232403634));
var cx = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var id = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cy = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var jd_cursor = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var selected = cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)));
var dragged = cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)));
var vert_cursor = reagent.core.cursor.call(null,graph_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(","),cljs.core.str(cy),cljs.core.str(")"),cljs.core.str(" scale("),cljs.core.str(scale),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor){
return (function (e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),cljs.core.deref.call(null,mode_atom))){
if(selected){
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),null);
} else {
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),id);
}
} else {
return null;
}
});})(selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor){
return (function (e){
if(cljs.core.not.call(null,pinned)){
return titanoboa.designer.fix_fl_node_BANG_.call(null,graph_cursor,index,true);
} else {
return null;
}
});})(selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor){
return (function (e){
if(cljs.core.not.call(null,pinned)){
return titanoboa.designer.fix_fl_node_BANG_.call(null,graph_cursor,index,false);
} else {
return null;
}
});})(selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor){
return (function (e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),cljs.core.deref.call(null,mode_atom))){
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drag","drag",449951290),name,new cljs.core.Keyword(null,"drag-idx","drag-idx",-1480274040),index,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY,new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy], null)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.deref.call(null,mode_atom))){
titanoboa.designer.stop_force_BANG_.call(null,graph_cursor);

return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"link-source","link-source",-71175762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"idx","idx",1053688473),index], null));
} else {
return null;
}
}
});})(selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor))
,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor){
return (function (e){
if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.deref.call(null,mode_atom));
if(and__4996__auto__){
return new cljs.core.Keyword(null,"link-source","link-source",-71175762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor));
} else {
return and__4996__auto__;
}
})())){
if(cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link-source","link-source",-71175762),new cljs.core.Keyword(null,"idx","idx",1053688473)], null)))){
titanoboa.designer.set_first_step_BANG_.call(null,jd_cursor,id);
} else {
titanoboa.designer.add_jd_link_BANG_.call(null,jd_cursor,cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link-source","link-source",-71175762),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),"*",id);
}

return titanoboa.designer.add_fl_link_BANG_.call(null,graph_cursor,vert_cursor,cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link-source","link-source",-71175762),new cljs.core.Keyword(null,"idx","idx",1053688473)], null)),index,"*");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.deref.call(null,mode_atom))){
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"link-source","link-source",-71175762),null);
} else {
return null;
}
}
});})(selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor){
return (function (e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),cljs.core.deref.call(null,mode_atom))){
titanoboa.designer.fix_fl_node_BANG_.call(null,graph_cursor,index,false,false);

return null;
} else {
return null;
}
});})(selected,dragged,vert_cursor,map__10594,map__10594__$1,job_metadata,pinned,key,index,graph_cursor,scale,name,history,type,inactive_QMARK_,mode_atom,cx,id,cy,jd_cursor))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,0)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),(32),new cljs.core.Keyword(null,"class","class",-2030961996),((selected)?"step-circle-selected":"step-circle")], null)], null),titanoboa.icons.get_icon.call(null,cljs.core.keyword.call(null,type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected)?"step-icon-selected":(cljs.core.truth_(inactive_QMARK_)?"step-icon-inactive":"step-icon"))], null)),(cljs.core.truth_(history)?(function (){var G__10596 = (((new cljs.core.Keyword(null,"step-state","step-state",2074915847).cljs$core$IFn$_invoke$arity$1(history) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"step-state","step-state",2074915847).cljs$core$IFn$_invoke$arity$1(history).fqn:null);
switch (G__10596) {
case "error":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),titanoboa.icons.error_tag.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,15)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str("failed in "),cljs.core.str(titanoboa.util.readable_interval.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(history))),cljs.core.str((((typeof new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) === 'number') && ((new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) > (0))))?[cljs.core.str(" after "),cljs.core.str(new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history)),cljs.core.str(" retries")].join(''):null))].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(history))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,30)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str(new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(history).substring((0),(50))),cljs.core.str("...")].join('')], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,45)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.Keyword(null,"node-id","node-id",779482292).cljs$core$IFn$_invoke$arity$1(history)], null)], null);

break;
case "caught-error":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),titanoboa.icons.warn_tag.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,15)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str("exception caught after "),cljs.core.str(titanoboa.util.readable_interval.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(history)))].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(history))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,30)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str(new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(history).substring((0),(50))),cljs.core.str("...")].join('')], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,45)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.Keyword(null,"node-id","node-id",779482292).cljs$core$IFn$_invoke$arity$1(history)], null)], null);

break;
case "completed":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),titanoboa.icons.ok_tag.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,15)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str("completed in "),cljs.core.str(titanoboa.util.readable_interval.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(history))),cljs.core.str((((typeof new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) === 'number') && ((new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) > (0))))?[cljs.core.str(" after "),cljs.core.str(new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history)),cljs.core.str(" retries")].join(''):null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,30)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.Keyword(null,"node-id","node-id",779482292).cljs$core$IFn$_invoke$arity$1(history)], null)], null);

break;
case "running":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),titanoboa.icons.play_tag.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,15)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str("started "),cljs.core.str(titanoboa.util.get_time_difference.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(history),null)),cljs.core.str(" ago")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,30)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.Keyword(null,"node-id","node-id",779482292).cljs$core$IFn$_invoke$arity$1(history)], null)], null);

break;
case "retrying":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),titanoboa.icons.play_tag.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,15)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str("started "),cljs.core.str(titanoboa.util.get_time_difference.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(history),null)),cljs.core.str(" ago")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,30)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.Keyword(null,"node-id","node-id",779482292).cljs$core$IFn$_invoke$arity$1(history)], null)], null);

break;
default:
return null;

}
})():null),(cljs.core.truth_((function (){var and__4996__auto__ = history;
if(cljs.core.truth_(and__4996__auto__)){
return (typeof new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) === 'number') && ((new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) > (0)));
} else {
return and__4996__auto__;
}
})())?titanoboa.icons.retry_warn_tag.call(null):null),(cljs.core.truth_((function (){var and__4996__auto__ = history;
if(cljs.core.truth_(and__4996__auto__)){
return (typeof new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) === 'number') && ((new cljs.core.Keyword(null,"retry-count","retry-count",1936122875).cljs$core$IFn$_invoke$arity$1(history) > (0)));
} else {
return and__4996__auto__;
}
})())?titanoboa.icons.retry_tag.call(null):null),(cljs.core.truth_((function (){var and__4996__auto__ = job_metadata;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core._EQ_.call(null,name,"start");
} else {
return and__4996__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (+36,15)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12",new cljs.core.Keyword(null,"fill","fill",883462889),"#aaa",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((selected)?"bold":"normal"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),[cljs.core.str("started "),cljs.core.str(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(job_metadata).toLocaleDateString()),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(job_metadata).toLocaleTimeString())].join('')], null):null)], null);
});
titanoboa.designer.connecting_line = (function titanoboa$designer$connecting_line(p__10598){
var map__10602 = p__10598;
var map__10602__$1 = ((((!((map__10602 == null)))?((((map__10602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10602):map__10602);
var mode_cursor = cljs.core.get.call(null,map__10602__$1,new cljs.core.Keyword(null,"mode-cursor","mode-cursor",-555548532));
var graph_cursor = cljs.core.get.call(null,map__10602__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var mouse_position = cljs.core.get.call(null,map__10602__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));

if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.deref.call(null,mode_cursor));
if(and__4996__auto__){
var and__4996__auto____$1 = new cljs.core.Keyword(null,"link-source","link-source",-71175762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor));
if(cljs.core.truth_(and__4996__auto____$1)){
return cljs.core.deref.call(null,mouse_position);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
var source_node = cljs.core.get.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)),cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link-source","link-source",-71175762),new cljs.core.Keyword(null,"idx","idx",1053688473)], null)));
var vec__10604 = cljs.core.deref.call(null,mouse_position);
var x = cljs.core.nth.call(null,vec__10604,(0),null);
var y = cljs.core.nth.call(null,vec__10604,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),"temp-link",new cljs.core.Keyword(null,"d","d",1972142424),[cljs.core.str("M "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source_node)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source_node)),cljs.core.str(" L "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y)].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1,8",new cljs.core.Keyword(null,"class","class",-2030961996),"connecting",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#markerArrow)"], null)], null)], null);
} else {
return null;
}
});
titanoboa.designer.job_graph_visualization = (function titanoboa$designer$job_graph_visualization(p__10606){
var map__10625 = p__10606;
var map__10625__$1 = ((((!((map__10625 == null)))?((((map__10625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10625):map__10625);
var graph_cursor = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var jd_cursor = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var history_map = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"history-map","history-map",1885369238));
var job_metadata = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"job-metadata","job-metadata",-1874941597));
var mode_cursor = reagent.core.cursor.call(null,graph_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993)], null));
var mouse_position = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),"svg",(600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #c0c0c0"], null),"svg",((function (mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata){
return (function (e){
e.preventDefault();

if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.deref.call(null,mode_cursor));
if(and__4996__auto__){
return new cljs.core.Keyword(null,"link-source","link-source",-71175762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor));
} else {
return and__4996__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,mouse_position,titanoboa.designer.svg_coordinates.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)));
} else {
if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),cljs.core.deref.call(null,mode_cursor));
if(and__4996__auto__){
return new cljs.core.Keyword(null,"drag-idx","drag-idx",-1480274040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor));
} else {
return and__4996__auto__;
}
})())){
return titanoboa.designer.reposition_fl_node_BANG_.call(null,graph_cursor,new cljs.core.Keyword(null,"drag-idx","drag-idx",-1480274040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)),titanoboa.designer.svg_coordinates.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)),true);
} else {
return null;
}
}
});})(mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata))
,((function (mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)))){
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drag","drag",449951290),null,new cljs.core.Keyword(null,"drag-idx","drag-idx",-1480274040),null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.deref.call(null,mode_cursor));
if(and__4996__auto__){
return new cljs.core.Keyword(null,"link-source","link-source",-71175762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor));
} else {
return and__4996__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,graph_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"link-source","link-source",-71175762),null);
} else {
return null;
}
}
});})(mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata))
,(0),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (190))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"\t<marker id='markerArrow' viewBox='0 0 20 20' refX='10' refY='10' markerUnits='strokeWidth' markerWidth='8' markerHeight='6' orient='auto'>\n                                       <path d='M 0 0 L 20 10 L 0 20 z'/>\n                                       </marker>\n                                       <marker id='markerArrowInactive' viewBox='0 0 20 20' refX='10' refY='10' markerUnits='strokeWidth' markerWidth='8' markerHeight='6' orient='auto'>\n                                       <path d='M 0 0 L 20 10 L 0 20 z' fill='#bbb'/>\n                                       </marker>\n                                       <filter x='0' y='0' width='1' height='1' id='solid'>\n                                        <feFlood flood-color='#f5f5f5'/>\n                                        <feComposite in='SourceGraphic'/>\n                                       </filter>"], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata){
return (function titanoboa$designer$job_graph_visualization_$_iter__10627(s__10628){
return (new cljs.core.LazySeq(null,((function (mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata){
return (function (){
var s__10628__$1 = s__10628;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10628__$1);
if(temp__4425__auto__){
var s__10628__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10628__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__10628__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__10630 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__10629 = (0);
while(true){
if((i__10629 < size__5760__auto__)){
var v = cljs.core._nth.call(null,c__5759__auto__,i__10629);
cljs.core.chunk_append.call(null,b__10630,(function (){var source_node = cljs.core.get.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v));
var target_node = cljs.core.get.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v));
var inactive_QMARK_ = (function (){var and__4996__auto__ = history_map;
if(cljs.core.truth_(and__4996__auto__)){
return ((cljs.core.not.call(null,cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(source_node)))) || (cljs.core.not.call(null,cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_node))))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source_node),"start"));
} else {
return and__4996__auto__;
}
})();
var allow_parallel_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,jd_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(source_node),new cljs.core.Keyword(null,"allow-parallel?","allow-parallel?",-139374809)], null));
var map__10635 = titanoboa.designer.shorten_line.call(null,source_node,target_node,(32));
var map__10635__$1 = ((((!((map__10635 == null)))?((((map__10635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10635):map__10635);
var source = cljs.core.get.call(null,map__10635__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.call(null,map__10635__$1,new cljs.core.Keyword(null,"target","target",253001721));
var source_text = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(titanoboa.designer.shorten_line.call(null,source_node,target_node,(64)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"connecting",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(cljs.core._),cljs.core.str("path")].join(''),new cljs.core.Keyword(null,"d","d",1972142424),[cljs.core.str("M "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str(" L "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target))].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(inactive_QMARK_)?"#bbb":"#333"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),(cljs.core.truth_(allow_parallel_QMARK_)?"6,6":"0"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-end","marker-end",341488703),(cljs.core.truth_(inactive_QMARK_)?"url(#markerArrowInactive)":"url(#markerArrow)")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source_text),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source_text),new cljs.core.Keyword(null,"fill","fill",883462889),"#777",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"filter","filter",-948537934),"url(#solid)"], null)], null),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(v)], null)], null);
})());

var G__10643 = (i__10629 + (1));
i__10629 = G__10643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10630),titanoboa$designer$job_graph_visualization_$_iter__10627.call(null,cljs.core.chunk_rest.call(null,s__10628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10630),null);
}
} else {
var v = cljs.core.first.call(null,s__10628__$2);
return cljs.core.cons.call(null,(function (){var source_node = cljs.core.get.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v));
var target_node = cljs.core.get.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v));
var inactive_QMARK_ = (function (){var and__4996__auto__ = history_map;
if(cljs.core.truth_(and__4996__auto__)){
return ((cljs.core.not.call(null,cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(source_node)))) || (cljs.core.not.call(null,cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_node))))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source_node),"start"));
} else {
return and__4996__auto__;
}
})();
var allow_parallel_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,jd_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(source_node),new cljs.core.Keyword(null,"allow-parallel?","allow-parallel?",-139374809)], null));
var map__10637 = titanoboa.designer.shorten_line.call(null,source_node,target_node,(32));
var map__10637__$1 = ((((!((map__10637 == null)))?((((map__10637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10637):map__10637);
var source = cljs.core.get.call(null,map__10637__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.call(null,map__10637__$1,new cljs.core.Keyword(null,"target","target",253001721));
var source_text = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(titanoboa.designer.shorten_line.call(null,source_node,target_node,(64)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"connecting",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(cljs.core._),cljs.core.str("path")].join(''),new cljs.core.Keyword(null,"d","d",1972142424),[cljs.core.str("M "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str(" L "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target))].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(inactive_QMARK_)?"#bbb":"#333"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),(cljs.core.truth_(allow_parallel_QMARK_)?"6,6":"0"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-end","marker-end",341488703),(cljs.core.truth_(inactive_QMARK_)?"url(#markerArrowInactive)":"url(#markerArrow)")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"txt",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source_text),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source_text),new cljs.core.Keyword(null,"fill","fill",883462889),"#777",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"filter","filter",-948537934),"url(#solid)"], null)], null),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(v)], null)], null);
})(),titanoboa$designer$job_graph_visualization_$_iter__10627.call(null,cljs.core.rest.call(null,s__10628__$2)));
}
} else {
return null;
}
break;
}
});})(mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata))
,null,null));
});})(mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata))
;
return iter__5761__auto__.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)));
})()),cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata){
return (function titanoboa$designer$job_graph_visualization_$_iter__10639(s__10640){
return (new cljs.core.LazySeq(null,((function (mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata){
return (function (){
var s__10640__$1 = s__10640;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10640__$1);
if(temp__4425__auto__){
var s__10640__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10640__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__10640__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__10642 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__10641 = (0);
while(true){
if((i__10641 < size__5760__auto__)){
var n = cljs.core._nth.call(null,c__5759__auto__,i__10641);
cljs.core.chunk_append.call(null,b__10642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.step_node,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"job-metadata","job-metadata",-1874941597),new cljs.core.Keyword(null,"pinned","pinned",-1216085339),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"inactive?","inactive?",1268294254),new cljs.core.Keyword(null,"mode-atom","mode-atom",232403634),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011)],[job_metadata,new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(n),titanoboa.designer.get_node_key.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(n),(1),graph_cursor,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n),(function (){var and__4996__auto__ = history_map;
if(cljs.core.truth_(and__4996__auto__)){
return (cljs.core.not.call(null,cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),"start"));
} else {
return and__4996__auto__;
}
})(),mode_cursor,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(n),jd_cursor])], null));

var G__10644 = (i__10641 + (1));
i__10641 = G__10644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10642),titanoboa$designer$job_graph_visualization_$_iter__10639.call(null,cljs.core.chunk_rest.call(null,s__10640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10642),null);
}
} else {
var n = cljs.core.first.call(null,s__10640__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.step_node,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"job-metadata","job-metadata",-1874941597),new cljs.core.Keyword(null,"pinned","pinned",-1216085339),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"inactive?","inactive?",1268294254),new cljs.core.Keyword(null,"mode-atom","mode-atom",232403634),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011)],[job_metadata,new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(n),titanoboa.designer.get_node_key.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(n),(1),graph_cursor,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n),(function (){var and__4996__auto__ = history_map;
if(cljs.core.truth_(and__4996__auto__)){
return (cljs.core.not.call(null,cljs.core.get.call(null,history_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),"start"));
} else {
return and__4996__auto__;
}
})(),mode_cursor,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(n),jd_cursor])], null),titanoboa$designer$job_graph_visualization_$_iter__10639.call(null,cljs.core.rest.call(null,s__10640__$2)));
}
} else {
return null;
}
break;
}
});})(mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata))
,null,null));
});})(mode_cursor,mouse_position,map__10625,map__10625__$1,graph_cursor,jd_cursor,history_map,job_metadata))
;
return iter__5761__auto__.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,graph_cursor)));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.connecting_line,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode-cursor","mode-cursor",-555548532),mode_cursor,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),mouse_position], null)], null)], null);
});
titanoboa.designer.graph_menu_button = (function titanoboa$designer$graph_menu_button(p__10645){
var map__10648 = p__10645;
var map__10648__$1 = ((((!((map__10648 == null)))?((((map__10648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10648):map__10648);
var graph_cursor = cljs.core.get.call(null,map__10648__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var css_class = cljs.core.get.call(null,map__10648__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var id_key = cljs.core.get.call(null,map__10648__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var title = cljs.core.get.call(null,map__10648__$1,new cljs.core.Keyword(null,"title","title",636505583));
var mode_cursor = reagent.core.cursor.call(null,graph_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993)], null));
var base_class = "btn btn-default ";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(base_class),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode_cursor),id_key))?"active":" ")),cljs.core.str(" "),cljs.core.str(css_class)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mode_cursor,base_class,map__10648,map__10648__$1,graph_cursor,css_class,id_key,title){
return (function (){
return cljs.core.reset_BANG_.call(null,mode_cursor,id_key);
});})(mode_cursor,base_class,map__10648,map__10648__$1,graph_cursor,css_class,id_key,title))
,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),title], null),""], null);
});
titanoboa.designer.graph_save_button = (function titanoboa$designer$graph_save_button(p__10650){
var map__10653 = p__10650;
var map__10653__$1 = ((((!((map__10653 == null)))?((((map__10653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10653):map__10653);
var job_name = cljs.core.get.call(null,map__10653__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default btn-ico-save",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10653,map__10653__$1,job_name){
return (function (){
return titanoboa.api.save_def_BANG_.call(null,job_name,titanoboa.designer.job_def__GT_server.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),job_name], null))),((function (map__10653,map__10653__$1,job_name){
return (function (r){
titanoboa.designer.update_definition_BANG_.call(null,job_name,cljs.core.assoc,new cljs.core.Keyword(null,"revision","revision",-1350113114),r);

titanoboa.designer.revision__GT_def_list_BANG_.call(null,job_name,r);

titanoboa.designer.jquery.call(null,[cljs.core.str("#"),cljs.core.str(job_name),cljs.core.str("-tab-rev")].join('')).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",((function (map__10653,map__10653__$1,job_name){
return (function (e){
return titanoboa.designer.jquery.call(null,[cljs.core.str("#"),cljs.core.str(job_name),cljs.core.str("-tab-rev")].join('')).toggleClass("label-primary animated zoomIn");
});})(map__10653,map__10653__$1,job_name))
);

return titanoboa.designer.jquery.call(null,[cljs.core.str("#"),cljs.core.str(job_name),cljs.core.str("-tab-rev")].join('')).addClass("label-primary animated zoomIn");
});})(map__10653,map__10653__$1,job_name))
);
});})(map__10653,map__10653__$1,job_name))
,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"commit changes under a new revision"], null),""], null);
});
titanoboa.designer.graph_pin_button = (function titanoboa$designer$graph_pin_button(p__10655){
var map__10658 = p__10655;
var map__10658__$1 = ((((!((map__10658 == null)))?((((map__10658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10658):map__10658);
var graph_cursor = cljs.core.get.call(null,map__10658__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var pinned_cursor = reagent.core.cursor.call(null,graph_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,pinned_cursor))?"active":" ")),cljs.core.str(" btn-ico-pin")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pinned_cursor,map__10658,map__10658__$1,graph_cursor){
return (function (){
cljs.core.swap_BANG_.call(null,pinned_cursor,cljs.core.not);

return titanoboa.designer.fix_all_nodes_BANG_.call(null,graph_cursor,cljs.core.deref.call(null,pinned_cursor));
});})(pinned_cursor,map__10658,map__10658__$1,graph_cursor))
,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"pin/un-pin node position"], null),""], null);
});
titanoboa.designer.graph_add_button = (function titanoboa$designer$graph_add_button(p__10661){
var map__10667 = p__10661;
var map__10667__$1 = ((((!((map__10667 == null)))?((((map__10667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10667):map__10667);
var graph_cursor = cljs.core.get.call(null,map__10667__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var jd_cursor = cljs.core.get.call(null,map__10667__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var value = reagent.core.atom.call(null,"");
return ((function (value,map__10667,map__10667__$1,graph_cursor,jd_cursor){
return (function (p__10669){
var map__10670 = p__10669;
var map__10670__$1 = ((((!((map__10670 == null)))?((((map__10670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10670):map__10670);
var graph_cursor__$1 = cljs.core.get.call(null,map__10670__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var graph_view_atom = cljs.core.get.call(null,map__10670__$1,new cljs.core.Keyword(null,"graph-view-atom","graph-view-atom",-804096471));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default dropdown-toggle btn-ico-add",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"add new step"], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-menu col-xs-12"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core.deref.call(null,value);
if(cljs.core.truth_(and__4996__auto__)){
return titanoboa.designer.check_unique_step_id.call(null,clojure.string.trim.call(null,cljs.core.deref.call(null,value)));
} else {
return and__4996__auto__;
}
})())?"input-group":"input-group has-warning")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10670,map__10670__$1,graph_cursor__$1,graph_view_atom,value,map__10667,map__10667__$1,graph_cursor,jd_cursor){
return (function (p1__10660_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__10660_SHARP_.target.value);
});})(map__10670,map__10670__$1,graph_cursor__$1,graph_view_atom,value,map__10667,map__10667__$1,graph_cursor,jd_cursor))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Step Name",new cljs.core.Keyword(null,"size","size",1098693007),"15"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-btn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10670,map__10670__$1,graph_cursor__$1,graph_view_atom,value,map__10667,map__10667__$1,graph_cursor,jd_cursor){
return (function (){
if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core.deref.call(null,value);
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = cljs.core.not_EQ_.call(null,clojure.string.trim.call(null,cljs.core.deref.call(null,value)),"");
if(and__4996__auto____$1){
return titanoboa.designer.check_unique_step_id.call(null,clojure.string.trim.call(null,cljs.core.deref.call(null,value)));
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
titanoboa.designer.add_jd_step_BANG_.call(null,jd_cursor,clojure.string.trim.call(null,cljs.core.deref.call(null,value)));

titanoboa.designer.add_fl_node_BANG_.call(null,graph_cursor__$1,clojure.string.trim.call(null,cljs.core.deref.call(null,value)));

return cljs.core.reset_BANG_.call(null,value,null);
} else {
return null;
}
});})(map__10670,map__10670__$1,graph_cursor__$1,graph_view_atom,value,map__10667,map__10667__$1,graph_cursor,jd_cursor))
], null),"Add"], null)], null)], null)], null)], null)], null);
});
;})(value,map__10667,map__10667__$1,graph_cursor,jd_cursor))
});
titanoboa.designer.graph_delete_button = (function titanoboa$designer$graph_delete_button(p__10672){
var map__10675 = p__10672;
var map__10675__$1 = ((((!((map__10675 == null)))?((((map__10675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10675):map__10675);
var jd_cursor = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var graph_cursor = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var selected_step = reagent.core.cursor.call(null,graph_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default btn-ico-delete",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.deref.call(null,selected_step) == null)) || (cljs.core._EQ_.call(null,"start",cljs.core.deref.call(null,selected_step))),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"delete selected step",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_step,map__10675,map__10675__$1,jd_cursor,graph_cursor){
return (function (){
titanoboa.designer.remove_jd_step_BANG_.call(null,jd_cursor,cljs.core.deref.call(null,selected_step));

titanoboa.designer.remove_fl_node_BANG_.call(null,graph_cursor,cljs.core.deref.call(null,selected_step));

return cljs.core.reset_BANG_.call(null,selected_step,null);
});})(selected_step,map__10675,map__10675__$1,jd_cursor,graph_cursor))
], null),""], null);
});
titanoboa.designer.edit_panel_title = (function titanoboa$designer$edit_panel_title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((cljs.core.not.call(null,cljs.core.deref.call(null,titanoboa.designer.opened_job))) || (cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.designer.opened_job),"")))?"":"panel-heading")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,titanoboa.designer.opened_job)], null)], null);
});
/**
 * Creates a code-mirror editor. The parameters:
 * value-atom (reagent atom)
 * when this changes, the editor will update to reflect it.
 * options
 * :style (reagent style map)
 * will be applied to the container element
 * :js-cm-opts
 * options passed into the CodeMirror constructor
 */
titanoboa.designer.code_mirror = (function titanoboa$designer$code_mirror(p__10677){
var map__10692 = p__10677;
var map__10692__$1 = ((((!((map__10692 == null)))?((((map__10692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10692):map__10692);
var css_class = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var on_change = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var js_cm_opts = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var transform_read_fn = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"transform-read-fn","transform-read-fn",-346718559));
var auto_save_QMARK_ = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091));
var insta_repl_QMARK_ = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"insta-repl?","insta-repl?",-848576250));
var on_compile = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"on-compile","on-compile",-1162120153));
var on_focus = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var transform_write_fn = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"transform-write-fn","transform-write-fn",1608502159));
var style = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var value_atom = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"value-atom","value-atom",-887321133));
var cm = cljs.core.atom.call(null,null);
var compile_status = reagent.core.atom.call(null,new cljs.core.Keyword(null,"ok","ok",967785236));
var repl_results = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var remove_result_BANG_ = ((function (cm,compile_status,repl_results,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (id){
var widget = cljs.core.get.call(null,cljs.core.deref.call(null,repl_results),id);
widget.clear();

return cljs.core.swap_BANG_.call(null,repl_results,cljs.core.dissoc,id);
});})(cm,compile_status,repl_results,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
;
var transform_read_fn__$1 = (function (){var or__5008__auto__ = transform_read_fn;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217);
}
})();
var transform_write_fn__$1 = (function (){var or__5008__auto__ = transform_write_fn;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return ((function (or__5008__auto__,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (val){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"message","message",-406056002),null,new cljs.core.Keyword(null,"value","value",305978217),titanoboa.exp.__GT_Expression.call(null,val)], null);
});
;})(or__5008__auto__,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
}
})();
var instarepl_fn = ((function (cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (instance){
var doc = instance.getDoc();
var selection = doc.getSelection();
var cursor_position = doc.getCursor();
cljs.core.println.call(null,"Ctrl-Enter pressed! ",selection);

return titanoboa.api.eval_snippet_BANG_.call(null,selection,"user",((function (doc,selection,cursor_position,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (p__10694){
var map__10695 = p__10694;
var map__10695__$1 = ((((!((map__10695 == null)))?((((map__10695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10695):map__10695);
var result = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var result_id = cljs.core.random_uuid.call(null);
var widget = doc.addLineWidget(cursor_position.line,(function (){var div = document.createElement("div");
var _ = div.innerHTML = reagent.core.render_to_string.call(null,reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hovering.tag.label.label-default","div.hovering.tag.label.label-default",-1494286629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"6px 6px 6px 6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 6px 6px 6px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Menlo, Monaco, Consolas, \"Courier New\", monospace",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"normal"], null)], null),((typeof result === 'string')?result:(function (){var sb__5963__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10697_10706 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10698_10707 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10697_10706,_STAR_print_fn_STAR_10698_10707,sb__5963__auto__,div,result_id,map__10695,map__10695__$1,result,doc,selection,cursor_position,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (x__5964__auto__){
return sb__5963__auto__.append(x__5964__auto__);
});})(_STAR_print_newline_STAR_10697_10706,_STAR_print_fn_STAR_10698_10707,sb__5963__auto__,div,result_id,map__10695,map__10695__$1,result,doc,selection,cursor_position,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
;

try{fipp.clojure.pprint.call(null,result);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10698_10707;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10697_10706;
}
return [cljs.core.str(sb__5963__auto__)].join('');
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"remove glyphicon glyphicon-remove glyphicon-white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0"], null)], null)], null)], null)], null)));
var ___$1 = div.firstChild.lastChild.onclick = cljs.core.clj__GT_js.call(null,((function (div,_,result_id,map__10695,map__10695__$1,result,doc,selection,cursor_position,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (){
return remove_result_BANG_.call(null,result_id);
});})(div,_,result_id,map__10695,map__10695__$1,result,doc,selection,cursor_position,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
);
return div;
})());
return cljs.core.swap_BANG_.call(null,repl_results,cljs.core.assoc,result_id,widget);
});})(doc,selection,cursor_position,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
);
});})(cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311)],[false,true,transform_read_fn__$1.call(null,cljs.core.deref.call(null,value_atom)),"clojure",(cljs.core.truth_(insta_repl_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, ["Ctrl-Enter",instarepl_fn], null):cljs.core.PersistentArrayMap.EMPTY),"mdn-like",Infinity,"null",false,true]),js_cm_opts))));
cljs.core.reset_BANG_.call(null,cm,inst);

cljs.core.reset_BANG_.call(null,repl_results,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(auto_save_QMARK_)){
inst.on("change",((function (el,inst,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (){
cljs.core.println.call(null,"CM on-change called");

var value = inst.getValue();
if(cljs.core.truth_((function (){var or__5008__auto__ = cljs.core.deref.call(null,cm).hasFocus();
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs.core.not_EQ_.call(null,value,transform_read_fn__$1.call(null,cljs.core.deref.call(null,value_atom)));
}
})())){
var old_value = cljs.core.deref.call(null,value_atom);
var transform_result = transform_write_fn__$1.call(null,value);
cljs.core.reset_BANG_.call(null,compile_status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(transform_result));

if(cljs.core.truth_(on_compile)){
on_compile.call(null,cljs.core.dissoc.call(null,transform_result,new cljs.core.Keyword(null,"value","value",305978217)));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(transform_result),new cljs.core.Keyword(null,"ok","ok",967785236))){
cljs.core.reset_BANG_.call(null,value_atom,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(transform_result));

if(cljs.core.truth_(on_change)){
return on_change.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(transform_result),old_value);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(el,inst,cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
);
} else {
}

if(cljs.core.truth_(on_focus)){
inst.on("focus",on_focus);
} else {
}

if(cljs.core.truth_(on_blur)){
return inst.on("blur",on_blur);
} else {
return null;
}
});})(cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
,new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163),((function (cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (this$,p__10699,p__10700){
var vec__10701 = p__10699;
var _ = cljs.core.nth.call(null,vec__10701,(0),null);
var prev_props = cljs.core.nth.call(null,vec__10701,(1),null);
var prev_more = cljs.core.nth.call(null,vec__10701,(2),null);
var vec__10702 = p__10700;
var ___$1 = cljs.core.nth.call(null,vec__10702,(0),null);
var new_props = cljs.core.nth.call(null,vec__10702,(1),null);
var new_more = cljs.core.nth.call(null,vec__10702,(2),null);
return (cljs.core.not.call(null,cljs.core.deref.call(null,cm).hasFocus())) && (cljs.core.not_EQ_.call(null,transform_read_fn__$1.call(null,cljs.core.deref.call(null,value_atom)),cljs.core.deref.call(null,cm).getValue()));
});})(cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (this$,old_argv){
if(cljs.core._EQ_.call(null,transform_read_fn__$1.call(null,cljs.core.deref.call(null,value_atom)),cljs.core.deref.call(null,cm).getValue())){
} else {
cljs.core.deref.call(null,cm).setValue(transform_read_fn__$1.call(null,cljs.core.deref.call(null,value_atom)));
}

return cljs.core.deref.call(null,cm).refresh();
});})(cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom){
return (function (p__10703){
var map__10704 = p__10703;
var map__10704__$1 = ((((!((map__10704 == null)))?((((map__10704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10704):map__10704);
var css_class__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var on_change__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var js_cm_opts__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var transform_read_fn__$2 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"transform-read-fn","transform-read-fn",-346718559));
var auto_save_QMARK___$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091));
var insta_repl_QMARK___$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"insta-repl?","insta-repl?",-848576250));
var on_compile__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"on-compile","on-compile",-1162120153));
var on_focus__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var transform_write_fn__$2 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"transform-write-fn","transform-write-fn",1608502159));
var style__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var value_atom__$1 = cljs.core.get.call(null,map__10704__$1,new cljs.core.Keyword(null,"value-atom","value-atom",-887321133));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),css_class__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null);
});})(cm,compile_status,repl_results,remove_result_BANG_,transform_read_fn__$1,transform_write_fn__$1,instarepl_fn,map__10692,map__10692__$1,css_class,on_change,js_cm_opts,transform_read_fn,auto_save_QMARK_,insta_repl_QMARK_,on_compile,on_focus,on_blur,transform_write_fn,style,value_atom))
], null));
});
titanoboa.designer.ks_map_QMARK_ = (function titanoboa$designer$ks_map_QMARK_(ks){

var l = cljs.core.peek.call(null,ks);
return ((l instanceof cljs.core.Keyword)) || (typeof l === 'string');
});
if(typeof titanoboa.designer.editing_key !== 'undefined'){
} else {
titanoboa.designer.editing_key = reagent.core.atom.call(null,null);
}
titanoboa.designer.rem_prop = (function titanoboa$designer$rem_prop(step_cursor,ks,cnt){
if(cljs.core.truth_(titanoboa.designer.ks_map_QMARK_.call(null,ks))){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),cljs.core.dissoc,cljs.core.peek.call(null,ks));
});
} else {
if(cljs.core._EQ_.call(null,cnt,(1))){
return titanoboa$designer$rem_prop.call(null,step_cursor,cljs.core.pop.call(null,ks),null);
} else {
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),titanoboa.designer.vec_remove,cljs.core.peek.call(null,ks));
});
}
}
});
titanoboa.designer.propkey__GT_str = (function titanoboa$designer$propkey__GT_str(step_cursor,ks,is_map_key){
if(cljs.core.truth_((function (){var and__4996__auto__ = is_map_key;
if(cljs.core.truth_(and__4996__auto__)){
return titanoboa.designer.ks_map_QMARK_.call(null,ks);
} else {
return and__4996__auto__;
}
})())){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),clojure.set.rename_keys,new cljs.core.PersistentArrayMap.fromArray([cljs.core.peek.call(null,ks),[cljs.core.str(cljs.core.peek.call(null,ks))].join('')], true, false));
});
} else {
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.str);
});
}
});
titanoboa.designer.str__GT_propkey_BANG_ = (function titanoboa$designer$str__GT_propkey_BANG_(step_cursor,ks,is_map_key){
if(cljs.core.truth_((function (){var and__4996__auto__ = is_map_key;
if(cljs.core.truth_(and__4996__auto__)){
return titanoboa.designer.ks_map_QMARK_.call(null,ks);
} else {
return and__4996__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),clojure.set.rename_keys,new cljs.core.PersistentArrayMap.fromArray([cljs.core.peek.call(null,ks),titanoboa.util.tokey.call(null,cljs.core.peek.call(null,ks))], true, false));
} else {
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,titanoboa.util.tokey);
}
});
titanoboa.designer.get_full_ks = (function titanoboa$designer$get_full_ks(step_cursor,ks){
var c_path = step_cursor.path;
if(cljs.core.truth_(c_path)){
return cljs.core.into.call(null,c_path,ks);
} else {
return ks;
}
});
titanoboa.designer.edit_key_BANG_ = (function titanoboa$designer$edit_key_BANG_(ks){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.editing_key,ks);
});
titanoboa.designer.update_prop = (function titanoboa$designer$update_prop(){
var args10710 = [];
var len__6047__auto___10713 = arguments.length;
var i__6048__auto___10714 = (0);
while(true){
if((i__6048__auto___10714 < len__6047__auto___10713)){
args10710.push((arguments[i__6048__auto___10714]));

var G__10715 = (i__6048__auto___10714 + (1));
i__6048__auto___10714 = G__10715;
continue;
} else {
}
break;
}

var G__10712 = args10710.length;
switch (G__10712) {
case 4:
return titanoboa.designer.update_prop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return titanoboa.designer.update_prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10710.length)].join('')));

}
});

titanoboa.designer.update_prop.cljs$core$IFn$_invoke$arity$4 = (function (step_cursor,ks,is_map_key,transform_fn){
if(cljs.core.truth_(is_map_key)){
return (function (p1__10708_SHARP_){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),clojure.set.rename_keys,new cljs.core.PersistentArrayMap.fromArray([cljs.core.peek.call(null,ks),transform_fn.call(null,p1__10708_SHARP_.target.value)], true, false));
});
} else {
return (function (p1__10709_SHARP_){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.assoc_in,ks,transform_fn.call(null,p1__10709_SHARP_.target.value));
});
}
});

titanoboa.designer.update_prop.cljs$core$IFn$_invoke$arity$3 = (function (step_cursor,ks,is_map_key){
return titanoboa.designer.update_prop.call(null,step_cursor,ks,is_map_key,cljs.core.identity);
});

titanoboa.designer.update_prop.cljs$lang$maxFixedArity = 4;
titanoboa.designer.set_prop = (function titanoboa$designer$set_prop(){
var args10717 = [];
var len__6047__auto___10720 = arguments.length;
var i__6048__auto___10721 = (0);
while(true){
if((i__6048__auto___10721 < len__6047__auto___10720)){
args10717.push((arguments[i__6048__auto___10721]));

var G__10722 = (i__6048__auto___10721 + (1));
i__6048__auto___10721 = G__10722;
continue;
} else {
}
break;
}

var G__10719 = args10717.length;
switch (G__10719) {
case 5:
return titanoboa.designer.set_prop.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return titanoboa.designer.set_prop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10717.length)].join('')));

}
});

titanoboa.designer.set_prop.cljs$core$IFn$_invoke$arity$5 = (function (step_cursor,ks,is_map_key,val_atom,transform_fn){
if(cljs.core.truth_(is_map_key)){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),clojure.set.rename_keys,new cljs.core.PersistentArrayMap.fromArray([cljs.core.peek.call(null,ks),transform_fn.call(null,cljs.core.deref.call(null,val_atom))], true, false));
} else {
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.assoc_in,ks,transform_fn.call(null,cljs.core.deref.call(null,val_atom)));
}
});

titanoboa.designer.set_prop.cljs$core$IFn$_invoke$arity$4 = (function (step_cursor,ks,is_map_key,val_atom){
return titanoboa.designer.set_prop.call(null,step_cursor,ks,is_map_key,val_atom,cljs.core.identity);
});

titanoboa.designer.set_prop.cljs$lang$maxFixedArity = 5;
titanoboa.designer.update_prop_key_BANG_ = (function titanoboa$designer$update_prop_key_BANG_(step_cursor,ks,value){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),clojure.set.rename_keys,new cljs.core.PersistentArrayMap.fromArray([cljs.core.peek.call(null,ks),titanoboa.util.tokey.call(null,value)], true, false));
});
titanoboa.designer.even_rounding_fns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.ceil,Math.ceil,Math.floor,Math.floor,Math.floor], null);
titanoboa.designer.odd_rounding_fns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.ceil,Math.floor,Math.ceil,Math.floor,Math.floor], null);
titanoboa.designer.keyword_rounding_fns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor,Math.ceil,Math.floor,Math.ceil,Math.floor], null);
titanoboa.designer.comp_width_ratio = (function titanoboa$designer$comp_width_ratio(x,grid_columns){
var kc = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,x));
var oc = (cljs.core.count.call(null,x) - kc);
var avgc = (grid_columns / cljs.core.count.call(null,x));
var all_keywords_QMARK_ = cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,x);
var fn_idx = (0);
while(true){
var result = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (fn_idx,kc,oc,avgc,all_keywords_QMARK_){
return (function (i,n){
var round_fn = ((cljs.core.even_QMARK_.call(null,i))?cljs.core.get.call(null,titanoboa.designer.even_rounding_fns,fn_idx):cljs.core.get.call(null,titanoboa.designer.odd_rounding_fns,fn_idx));
var keyword_round_fn = cljs.core.get.call(null,titanoboa.designer.keyword_rounding_fns,fn_idx);
if((n instanceof cljs.core.Keyword)){
if((all_keywords_QMARK_) && ((kc > (2)))){
return keyword_round_fn.call(null,(avgc - (avgc / (6))));
} else {
return keyword_round_fn.call(null,(avgc - (avgc / (2))));
}
} else {
return round_fn.call(null,(avgc + ((avgc / (2)) * (kc / oc))));
}
});})(fn_idx,kc,oc,avgc,all_keywords_QMARK_))
,x));
var cnt = cljs.core.reduce.call(null,cljs.core._PLUS_,result);
if(((cnt > grid_columns)) && ((fn_idx < (4)))){
var G__10724 = (fn_idx + (1));
fn_idx = G__10724;
continue;
} else {
return result;
}
break;
}
});
titanoboa.designer.width_ratio_map = (function titanoboa$designer$width_ratio_map(x,grid_columns){
if(typeof cljs.core.first.call(null,x) === 'string'){
return titanoboa.designer.comp_width_ratio.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),titanoboa.util.s__GT_key),grid_columns);
} else {
return titanoboa.designer.comp_width_ratio.call(null,x,grid_columns);
}
});
titanoboa.designer.sort_by_keys = (function titanoboa$designer$sort_by_keys(m){

return cljs.core.vec.call(null,cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,(function (key1,key2){
if(cljs.core._EQ_.call(null,[cljs.core.str(key1)].join(''),"")){
return (1);
} else {
if(cljs.core._EQ_.call(null,[cljs.core.str(key2)].join(''),"")){
return (-1);
} else {
return cljs.core.compare.call(null,[cljs.core.str(key1)].join(''),[cljs.core.str(key2)].join(''));

}
}
})),m));
});
titanoboa.designer.rem_input_ico = (function titanoboa$designer$rem_input_ico(step_cursor,ks,cnt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),titanoboa.designer.rem_prop.call(null,step_cursor,ks,cnt),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"0px"], null),new cljs.core.Keyword(null,"title","title",636505583),"delete this property"], null)], null)], null);
});
titanoboa.designer.add_input_ico = (function titanoboa$designer$add_input_ico(step_cursor,ks,cnt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,cljs.core.pop.call(null,ks),cljs.core.conj,"");
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-playlist-plus form-control-feedback",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"7px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"18px",new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null),new cljs.core.Keyword(null,"title","title",636505583),"add new property to this array"], null)], null)], null);
});
titanoboa.designer.prop_input = (function titanoboa$designer$prop_input(p__10726){
var map__10732 = p__10726;
var map__10732__$1 = ((((!((map__10732 == null)))?((((map__10732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10732):map__10732);
var prop = cljs.core.get.call(null,map__10732__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor = cljs.core.get.call(null,map__10732__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks = cljs.core.get.call(null,map__10732__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var cnt = cljs.core.get.call(null,map__10732__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var map_flag = cljs.core.get.call(null,map__10732__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var read_only_QMARK_ = cljs.core.get.call(null,map__10732__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var value = reagent.core.atom.call(null,prop);
var editing_QMARK_ = reagent.core.atom.call(null,false);
var change__GT_exp_QMARK_ = reagent.core.atom.call(null,false);
return ((function (value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (p__10734){
var map__10735 = p__10734;
var map__10735__$1 = ((((!((map__10735 == null)))?((((map__10735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10735):map__10735);
var prop__$1 = cljs.core.get.call(null,map__10735__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor__$1 = cljs.core.get.call(null,map__10735__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks__$1 = cljs.core.get.call(null,map__10735__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var cnt__$1 = cljs.core.get.call(null,map__10735__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var map_flag__$1 = cljs.core.get.call(null,map__10735__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"has-feedback hovering"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[((cljs.core.not.call(null,read_only_QMARK_))?((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (e){
if(cljs.core._EQ_.call(null,(13),e.charCode)){
return document.activeElement.blur();
} else {
return null;
}
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
:((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
),(cljs.core.truth_(map_flag__$1)?"property":"value"),((cljs.core.not.call(null,read_only_QMARK_))?((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
cljs.core.reset_BANG_.call(null,value,prop__$1);

return cljs.core.reset_BANG_.call(null,editing_QMARK_,true);
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
:((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
),(cljs.core.truth_(cljs.core.deref.call(null,editing_QMARK_))?[cljs.core.str(cljs.core.deref.call(null,value))].join(''):prop__$1),((cljs.core.not.call(null,read_only_QMARK_))?((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,change__GT_exp_QMARK_))){
titanoboa.designer.set_prop.call(null,step_cursor__$1,ks__$1,map_flag__$1,value,((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (v){
return titanoboa.exp.__GT_Expression.call(null,[cljs.core.str(v)].join(''));
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
);
} else {
titanoboa.designer.set_prop.call(null,step_cursor__$1,ks__$1,map_flag__$1,value,titanoboa.designer.eval_property);
}

cljs.core.reset_BANG_.call(null,editing_QMARK_,false);

return cljs.core.reset_BANG_.call(null,change__GT_exp_QMARK_,false);
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
:((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
),"text",[cljs.core.str(ks__$1)].join(''),"form-control",((cljs.core.not.call(null,read_only_QMARK_))?((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (p1__10725_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__10725_SHARP_.target.value);
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
:((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
)])], null),(((cljs.core.not.call(null,read_only_QMARK_)) && (cljs.core.not.call(null,cljs.core.deref.call(null,editing_QMARK_))) && (cljs.core.not.call(null,(function (){var and__4996__auto__ = cljs.core.not.call(null,map_flag__$1);
if(and__4996__auto__){
return titanoboa.designer.ks_map_QMARK_.call(null,ks__$1);
} else {
return and__4996__auto__;
}
})())))?(((cljs.core.not.call(null,titanoboa.designer.ks_map_QMARK_.call(null,ks__$1))) && (cljs.core._EQ_.call(null,cljs.core.peek.call(null,ks__$1),(cnt__$1 - (1)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.add_input_ico,step_cursor__$1,ks__$1,cnt__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.rem_input_ico,step_cursor__$1,ks__$1,cnt__$1], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.rem_input_ico,step_cursor__$1,ks__$1,cnt__$1], null)):null),(cljs.core.truth_(cljs.core.deref.call(null,editing_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,change__GT_exp_QMARK_,true);
});})(map__10735,map__10735__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"lambda-ico form-control-feedback",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"0px"], null),new cljs.core.Keyword(null,"title","title",636505583),"Toggle expression mode"], null)], null)], null):null)], null);
});
;})(value,editing_QMARK_,change__GT_exp_QMARK_,map__10732,map__10732__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
});
titanoboa.designer.prop_expression = (function titanoboa$designer$prop_expression(p__10738){
var map__10744 = p__10738;
var map__10744__$1 = ((((!((map__10744 == null)))?((((map__10744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10744):map__10744);
var prop = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var cnt = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var map_flag = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var read_only_QMARK_ = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var value = reagent.core.atom.call(null,prop);
var editing_QMARK_ = reagent.core.atom.call(null,false);
var change__GT_str_QMARK_ = reagent.core.atom.call(null,false);
var change__GT_textarea_QMARK_ = reagent.core.atom.call(null,false);
var val_cursor = reagent.core.cursor.call(null,step_cursor,ks);
return ((function (value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (p__10746){
var map__10747 = p__10746;
var map__10747__$1 = ((((!((map__10747 == null)))?((((map__10747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10747):map__10747);
var prop__$1 = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor__$1 = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks__$1 = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var cnt__$1 = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var map_flag__$1 = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"has-feedback hovering",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"\u03BB"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.code_mirror,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value-atom","value-atom",-887321133),val_cursor,new cljs.core.Keyword(null,"css-class","css-class",-919455334),"form-control",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091),true,new cljs.core.Keyword(null,"insta-repl?","insta-repl?",-848576250),true,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__10747,map__10747__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,editing_QMARK_,true);
});})(map__10747,map__10747__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__10747,map__10747__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,change__GT_str_QMARK_))){
titanoboa.designer.set_prop.call(null,step_cursor__$1,ks__$1,map_flag__$1,value,new cljs.core.Keyword(null,"value","value",305978217));
} else {
}

cljs.core.reset_BANG_.call(null,editing_QMARK_,false);

return cljs.core.reset_BANG_.call(null,change__GT_str_QMARK_,false);
});})(map__10747,map__10747__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
], null)], null),(((cljs.core.not.call(null,cljs.core.deref.call(null,editing_QMARK_))) && (cljs.core.not.call(null,(function (){var and__4996__auto__ = cljs.core.not.call(null,map_flag__$1);
if(and__4996__auto__){
return titanoboa.designer.ks_map_QMARK_.call(null,ks__$1);
} else {
return and__4996__auto__;
}
})())))?(((cljs.core.not.call(null,titanoboa.designer.ks_map_QMARK_.call(null,ks__$1))) && (cljs.core._EQ_.call(null,cljs.core.peek.call(null,ks__$1),(cnt__$1 - (1)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.rem_input_ico,step_cursor__$1,ks__$1,cnt__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.add_input_ico,step_cursor__$1,ks__$1,cnt__$1], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.rem_input_ico,step_cursor__$1,ks__$1,cnt__$1], null)):null),(cljs.core.truth_(cljs.core.deref.call(null,editing_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__10747,map__10747__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,change__GT_str_QMARK_,true);
});})(map__10747,map__10747__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"lambda-ico form-control-feedback",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"0px"], null),new cljs.core.Keyword(null,"title","title",636505583),"Toggle expression mode"], null)], null)], null)], null):null)], null);
});
;})(value,editing_QMARK_,change__GT_str_QMARK_,change__GT_textarea_QMARK_,val_cursor,map__10744,map__10744__$1,prop,step_cursor,ks,cnt,map_flag,read_only_QMARK_))
});
titanoboa.designer.prop_key_input = (function titanoboa$designer$prop_key_input(p__10750){
var map__10756 = p__10750;
var map__10756__$1 = ((((!((map__10756 == null)))?((((map__10756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10756):map__10756);
var prop = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var cnt = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var map_flag = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var editing_ks = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var read_only_QMARK_ = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var key_edit_fn = cljs.core.get.call(null,map__10756__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var val = reagent.core.atom.call(null,[cljs.core.str(prop)].join(''));
return ((function (val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn){
return (function (p__10758){
var map__10759 = p__10758;
var map__10759__$1 = ((((!((map__10759 == null)))?((((map__10759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10759):map__10759);
var prop__$1 = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor__$1 = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks__$1 = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var cnt__$1 = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var map_flag__$1 = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var editing_ks__$1 = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"has-feedback hovering"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10759,map__10759__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,editing_ks__$1,val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn){
return (function (p1__10749_SHARP_){
return cljs.core.swap_BANG_.call(null,val,cljs.core.reset_BANG_,p1__10749_SHARP_.target.value);
});})(map__10759,map__10759__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,editing_ks__$1,val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn))
,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (map__10759,map__10759__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,editing_ks__$1,val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn){
return (function (e){
if(cljs.core._EQ_.call(null,(13),e.charCode)){
titanoboa.designer.update_prop_key_BANG_.call(null,step_cursor__$1,ks__$1,e.target.value);

return key_edit_fn.call(null,null);
} else {
return null;
}
});})(map__10759,map__10759__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,editing_ks__$1,val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__10759,map__10759__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,editing_ks__$1,val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn){
return (function (e){
titanoboa.designer.update_prop_key_BANG_.call(null,step_cursor__$1,ks__$1,e.target.value);

return key_edit_fn.call(null,null);
});})(map__10759,map__10759__$1,prop__$1,step_cursor__$1,ks__$1,cnt__$1,map_flag__$1,editing_ks__$1,val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(map_flag__$1)?"property":"value"),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(ks__$1)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.rem_input_ico,step_cursor__$1,ks__$1,cnt__$1], null)], null);
});
;})(val,map__10756,map__10756__$1,prop,step_cursor,ks,cnt,map_flag,editing_ks,read_only_QMARK_,key_edit_fn))
});
titanoboa.designer.prop_key_label = (function titanoboa$designer$prop_key_label(p__10761){
var map__10764 = p__10761;
var map__10764__$1 = ((((!((map__10764 == null)))?((((map__10764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10764):map__10764);
var highlight_fn = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553));
var map_flag = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var ks = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var editing_ks = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var step_cursor = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var key_edit_fn = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var cnt = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var prop = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var read_only_QMARK_ = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var show_parens_QMARK_ = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360));
if(cljs.core.truth_((function (){var and__4996__auto__ = map_flag;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core._EQ_.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,ks),editing_ks);
} else {
return and__4996__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_key_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"cnt","cnt",283978798),cnt,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),map_flag,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),editing_ks,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),key_edit_fn], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("hovering tag label "),cljs.core.str((((prop instanceof cljs.core.Keyword))?(cljs.core.truth_(map_flag)?"label-primary":"label-keyword"):(cljs.core.truth_(map_flag)?"label-text":"label-info")))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(ks)].join(''),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((cljs.core.not.call(null,read_only_QMARK_))?(cljs.core.truth_(map_flag)?((function (map__10764,map__10764__$1,highlight_fn,map_flag,ks,editing_ks,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return key_edit_fn.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,ks));
});})(map__10764,map__10764__$1,highlight_fn,map_flag,ks,editing_ks,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:titanoboa.designer.propkey__GT_str.call(null,step_cursor,ks,map_flag)):null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_((function (){var and__4996__auto__ = map_flag;
if(cljs.core.truth_(and__4996__auto__)){
return highlight_fn;
} else {
return and__4996__auto__;
}
})())?((function (map__10764,map__10764__$1,highlight_fn,map_flag,ks,editing_ks,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
if(cljs.core.truth_(show_parens_QMARK_)){
return highlight_fn.call(null,ks);
} else {
return null;
}
});})(map__10764,map__10764__$1,highlight_fn,map_flag,ks,editing_ks,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_((function (){var and__4996__auto__ = map_flag;
if(cljs.core.truth_(and__4996__auto__)){
return highlight_fn;
} else {
return and__4996__auto__;
}
})())?((function (map__10764,map__10764__$1,highlight_fn,map_flag,ks,editing_ks,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
if(cljs.core.truth_(show_parens_QMARK_)){
return highlight_fn.call(null,null);
} else {
return null;
}
});})(map__10764,map__10764__$1,highlight_fn,map_flag,ks,editing_ks,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name.call(null,prop)], null),((cljs.core.not.call(null,read_only_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),titanoboa.designer.rem_prop.call(null,step_cursor,ks,cnt)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"remove glyphicon glyphicon-remove glyphicon-white"], null)], null)], null):null)], null);
}
});
titanoboa.designer.prop_add_button = (function titanoboa$designer$prop_add_button(p__10766){
var map__10769 = p__10766;
var map__10769__$1 = ((((!((map__10769 == null)))?((((map__10769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10769):map__10769);
var prop = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var step_cursor = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var ks = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var map_flag = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var key_edit_fn = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var style = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var default_add_value = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword(null,"default-add-value","default-add-value",-1663874198),"");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group btn-group-sm dropup",new cljs.core.Keyword(null,"style","style",-496642736),style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-info",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Add simple property",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(map_flag)?((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.assoc,"","");

return key_edit_fn.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,"")));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
:((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.conj,default_add_value);
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-playlist-plus","span.zmdi.zmdi-playlist-plus",162677647),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"-3px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-info dropdown-toggle",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"caret"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,ks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null)))?"disabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),titanoboa.designer.rem_prop.call(null,step_cursor,ks,null)], null),[cljs.core.str("Delete")].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(map_flag)?((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.assoc,"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null));

return key_edit_fn.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,"")));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
:((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
)], null),[cljs.core.str("Add matrix")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(map_flag)?((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.assoc,"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null));

return key_edit_fn.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,"")));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
:((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
)], null),[cljs.core.str("Add vector")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(map_flag)?((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.assoc,"",linked.core.map.call(null));

return key_edit_fn.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,"")));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
:((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.conj,linked.core.map.call(null));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
)], null),"Add map"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(map_flag)?((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.assoc,"","");

return key_edit_fn.call(null,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,"")));
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
:((function (map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,ks,cljs.core.conj,"");
});})(map__10769,map__10769__$1,prop,step_cursor,ks,map_flag,key_edit_fn,style,default_add_value))
)], null),"Add simple ",(cljs.core.truth_(map_flag)?"property":"item")], null)], null)], null)], null);
});
titanoboa.designer.v_starts_with = (function titanoboa$designer$v_starts_with(v1,v2){
if((cljs.core.count.call(null,v2) > cljs.core.count.call(null,v1))){
return false;
} else {
return cljs.core._EQ_.call(null,v2,cljs.core.subvec.call(null,v1,(0),cljs.core.count.call(null,v2)));
}
});
titanoboa.designer.render_1D_vect = (function titanoboa$designer$render_1D_vect(p__10771,recursive_fn){
var map__10774 = p__10771;
var map__10774__$1 = ((((!((map__10774 == null)))?((((map__10774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10774):map__10774);
var highlight_fn = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553));
var map_flag = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var ks = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var editing_ks = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var highlighted_parens = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251));
var step_cursor = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var key_edit_fn = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var cnt = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var prop = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var read_only_QMARK_ = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var show_parens_QMARK_ = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360));
var wr = titanoboa.designer.comp_width_ratio.call(null,prop,(24));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str("form-group")].join('')], null),cljs.core.map_indexed.call(null,((function (wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (i,n){
var first_QMARK_ = (function (){var and__4996__auto__ = cljs.core._EQ_.call(null,i,(0));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core.not.call(null,map_flag);
if(and__4996__auto____$1){
return show_parens_QMARK_;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var last_QMARK_ = (function (){var and__4996__auto__ = cljs.core._EQ_.call(null,(i + (1)),cljs.core.count.call(null,prop));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core.not.call(null,map_flag);
if(and__4996__auto____$1){
return show_parens_QMARK_;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var reduction = (cljs.core.truth_((function (){var and__4996__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return last_QMARK_;
} else {
return and__4996__auto__;
}
})())?(2):(cljs.core.truth_((function (){var or__5008__auto__ = first_QMARK_;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return last_QMARK_;
}
})())?(1):(0)
));
var ksi = cljs.core.conj.call(null,ks,i);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ksi),cljs.core.str("-wrapping-div")].join('')], null),(cljs.core.truth_(first_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ksi),cljs.core.str("lpar1d")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null)], null),(cljs.core.truth_(map_flag)?"{":"[")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("col-sm-"),cljs.core.str((wr.call(null,i) - reduction)),cljs.core.str((((n instanceof cljs.core.Keyword))?" control-label":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ksi,highlighted_parens))?"beige":""),new cljs.core.Keyword(null,"min-height","min-height",398480837),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ksi,highlighted_parens))?"30px":"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recursive_fn,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251),new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),new cljs.core.Keyword(null,"cnt","cnt",283978798),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553)],[cljs.core.conj.call(null,ks,i),editing_ks,highlighted_parens,key_edit_fn,step_cursor,cljs.core.count.call(null,prop),n,read_only_QMARK_,show_parens_QMARK_,false,highlight_fn])], null)], null),(cljs.core.truth_(last_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i)),cljs.core.str("ppar1d")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(first_QMARK_,last_QMARK_,reduction,ksi,wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null)], null),(cljs.core.truth_(map_flag)?"}":"]")], null):null)], null);
});})(wr,map__10774,map__10774__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,prop)], null);
});
titanoboa.designer.render_multirow_vect = (function titanoboa$designer$render_multirow_vect(p__10776,recursive_fn,row_size){
var map__10779 = p__10776;
var map__10779__$1 = ((((!((map__10779 == null)))?((((map__10779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);
var highlight_fn = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553));
var map_flag = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var ks = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var editing_ks = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var vec_max_length = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"vec-max-length","vec-max-length",72309835));
var highlighted_parens = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251));
var step_cursor = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var key_edit_fn = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var cnt = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var prop = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var read_only_QMARK_ = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var show_parens_QMARK_ = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360));
var map_flag__$1 = false;
var partitioned = cljs.core.partition_all.call(null,row_size,prop);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str("form-group")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ks,highlighted_parens))?"beige":"")], null)], null),cljs.core.map_indexed.call(null,((function (map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (i1,m){
var m__$1 = cljs.core.vec.call(null,m);
var col_count = (cljs.core.truth_(show_parens_QMARK_)?(23):(24));
var wr = ((map_flag__$1)?titanoboa.designer.width_ratio_map.call(null,m__$1,col_count):titanoboa.designer.comp_width_ratio.call(null,m__$1,col_count));
var ksi = cljs.core.conj.call(null,ks,i1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str(i1),cljs.core.str("form-group")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"form-group form-group-sm"], null),cljs.core.map_indexed.call(null,((function (m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (i2,n){
var real_idx = ((i1 * row_size) + i2);
var first_of_all_QMARK_ = (function (){var and__4996__auto__ = cljs.core._EQ_.call(null,i2,(0));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core._EQ_.call(null,i1,(0));
if(and__4996__auto____$1){
return show_parens_QMARK_;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var consec_map_offset_QMARK_ = (function (){var and__4996__auto__ = show_parens_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return (cljs.core._EQ_.call(null,i2,(0))) && (cljs.core.not.call(null,first_of_all_QMARK_));
} else {
return and__4996__auto__;
}
})();
var first_in_vec_QMARK_ = false;
var last_in_vec_QMARK_ = false;
var reduction = (((first_in_vec_QMARK_) && (last_in_vec_QMARK_))?(2):(((first_in_vec_QMARK_) || (last_in_vec_QMARK_))?(1):(0)
));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i1,i2)),cljs.core.str("-wrapping")].join('')], null),(cljs.core.truth_(first_of_all_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(ks)].join('')], null),((map_flag__$1)?"{":"[")], null):null),((first_in_vec_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ksi),cljs.core.str("lpar2d")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(first_of_all_QMARK_)?"col-sm-1":"col-sm-1 col-sm-offset-1"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ksi,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ksi);
});})(real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null)], null),((map_flag__$1)?"{":"[")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i1,i2))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("col-sm-"),cljs.core.str((wr.call(null,i2) - reduction)),cljs.core.str(((((n instanceof cljs.core.Keyword)) || ((map_flag__$1) && (cljs.core._EQ_.call(null,i2,(0)))))?" control-label":null)),cljs.core.str((cljs.core.truth_(consec_map_offset_QMARK_)?" col-sm-offset-1":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),((cljs.core._EQ_.call(null,editing_ks,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,m__$1.call(null,(0))))))?"0px":null),new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ksi,highlighted_parens))?"beige":""),new cljs.core.Keyword(null,"min-height","min-height",398480837),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ksi,highlighted_parens))?"30px":"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recursive_fn,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),new cljs.core.Keyword(null,"vec-max-length","vec-max-length",72309835),new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251),new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),new cljs.core.Keyword(null,"cnt","cnt",283978798),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553)],[((map_flag__$1)?cljs.core.conj.call(null,ks,m__$1.call(null,(0))):cljs.core.conj.call(null,ks,real_idx)),editing_ks,vec_max_length,highlighted_parens,key_edit_fn,step_cursor,cljs.core.count.call(null,prop),n,read_only_QMARK_,show_parens_QMARK_,(map_flag__$1) && (cljs.core._EQ_.call(null,i2,(0))),highlight_fn])], null)], null),((last_in_vec_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i1,i2)),cljs.core.str("ppar2d")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ksi);
});})(real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(real_idx,first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ksi,highlighted_parens))?"#9c27b0":"black")], null)], null),((map_flag__$1)?"}":"]")], null):null)], null);
});})(m__$1,col_count,wr,ksi,map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,m__$1)], null);
});})(map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,partitioned),(cljs.core.truth_(read_only_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_add_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),map_flag__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),key_edit_fn], null)], null)),(cljs.core.truth_(show_parens_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(map_flag__$1,partitioned,map__10779,map__10779__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null)], null),((map_flag__$1)?"}":"]")], null):null)], null);
});
titanoboa.designer.render_2D_vect = (function titanoboa$designer$render_2D_vect(p__10781,recursive_fn){
var map__10784 = p__10781;
var map__10784__$1 = ((((!((map__10784 == null)))?((((map__10784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10784):map__10784);
var highlight_fn = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553));
var map_flag = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var ks = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var editing_ks = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var vec_max_length = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"vec-max-length","vec-max-length",72309835));
var highlighted_parens = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251));
var step_cursor = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var key_edit_fn = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var cnt = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var prop = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var read_only_QMARK_ = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var show_parens_QMARK_ = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str("form-group")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ks,highlighted_parens))?"beige":"")], null)], null),cljs.core.map_indexed.call(null,((function (map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (i1,m){
var col_count = (cljs.core.truth_(show_parens_QMARK_)?(23):(24));
var wr = (cljs.core.truth_(map_flag)?titanoboa.designer.width_ratio_map.call(null,m,col_count):titanoboa.designer.comp_width_ratio.call(null,m,col_count));
var ksi = cljs.core.conj.call(null,ks,i1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str(i1),cljs.core.str("form-group")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"form-group form-group-sm"], null),cljs.core.map_indexed.call(null,((function (col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (i2,n){
var first_of_all_QMARK_ = (function (){var and__4996__auto__ = cljs.core._EQ_.call(null,i2,(0));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core._EQ_.call(null,i1,(0));
if(and__4996__auto____$1){
return show_parens_QMARK_;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var consec_map_offset_QMARK_ = (function (){var and__4996__auto__ = map_flag;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = show_parens_QMARK_;
if(cljs.core.truth_(and__4996__auto____$1)){
return (cljs.core._EQ_.call(null,i2,(0))) && (cljs.core.not.call(null,first_of_all_QMARK_));
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var first_in_vec_QMARK_ = (function (){var and__4996__auto__ = cljs.core._EQ_.call(null,i2,(0));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core.not.call(null,map_flag);
if(and__4996__auto____$1){
return show_parens_QMARK_;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var last_in_vec_QMARK_ = (function (){var and__4996__auto__ = cljs.core._EQ_.call(null,(i2 + (1)),cljs.core.count.call(null,m));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core.not.call(null,map_flag);
if(and__4996__auto____$1){
return show_parens_QMARK_;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})();
var reduction = (cljs.core.truth_((function (){var and__4996__auto__ = first_in_vec_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return last_in_vec_QMARK_;
} else {
return and__4996__auto__;
}
})())?(2):(cljs.core.truth_((function (){var or__5008__auto__ = first_in_vec_QMARK_;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return last_in_vec_QMARK_;
}
})())?(1):(0)
));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i1,i2)),cljs.core.str("-wrapping")].join('')], null),(cljs.core.truth_(first_of_all_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(ks)].join('')], null),(cljs.core.truth_(map_flag)?"{":"[")], null):null),(cljs.core.truth_(first_in_vec_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ksi),cljs.core.str("lpar2d")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(first_of_all_QMARK_)?"col-sm-1":"col-sm-1 col-sm-offset-1"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ksi,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ksi);
});})(first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null)], null),(cljs.core.truth_(map_flag)?"{":"[")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i1,i2))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("col-sm-"),cljs.core.str((wr.call(null,i2) - reduction)),cljs.core.str((cljs.core.truth_((function (){var or__5008__auto__ = (n instanceof cljs.core.Keyword);
if(or__5008__auto__){
return or__5008__auto__;
} else {
var and__4996__auto__ = map_flag;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core._EQ_.call(null,i2,(0));
} else {
return and__4996__auto__;
}
}
})())?" control-label":null)),cljs.core.str((cljs.core.truth_(consec_map_offset_QMARK_)?" col-sm-offset-1":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),((cljs.core._EQ_.call(null,editing_ks,titanoboa.designer.get_full_ks.call(null,step_cursor,cljs.core.conj.call(null,ks,m.call(null,(0))))))?"0px":null),new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ksi,highlighted_parens))?"beige":""),new cljs.core.Keyword(null,"min-height","min-height",398480837),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ksi,highlighted_parens))?"30px":"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recursive_fn,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),new cljs.core.Keyword(null,"vec-max-length","vec-max-length",72309835),new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251),new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),new cljs.core.Keyword(null,"cnt","cnt",283978798),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553)],[(cljs.core.truth_(map_flag)?cljs.core.conj.call(null,ks,m.call(null,(0))):cljs.core.conj.call(null,ks,i1,i2)),editing_ks,vec_max_length,highlighted_parens,key_edit_fn,step_cursor,cljs.core.count.call(null,m),n,read_only_QMARK_,show_parens_QMARK_,(function (){var and__4996__auto__ = map_flag;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core._EQ_.call(null,i2,(0));
} else {
return and__4996__auto__;
}
})(),highlight_fn])], null)], null),(cljs.core.truth_(last_in_vec_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.conj.call(null,ks,i1,i2)),cljs.core.str("ppar2d")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ksi);
});})(first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(first_of_all_QMARK_,consec_map_offset_QMARK_,first_in_vec_QMARK_,last_in_vec_QMARK_,reduction,col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ksi,highlighted_parens))?"#9c27b0":"black")], null)], null),(cljs.core.truth_(map_flag)?"}":"]")], null):null)], null);
});})(col_count,wr,ksi,map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,m)], null);
});})(map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,prop),(cljs.core.truth_(read_only_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_add_button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),map_flag,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),key_edit_fn,new cljs.core.Keyword(null,"default-add-value","default-add-value",-1663874198),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null)], null)),(cljs.core.truth_(show_parens_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(map__10784,map__10784__$1,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null)], null),(cljs.core.truth_(map_flag)?"}":"]")], null):null)], null);
});
titanoboa.designer.render_nD_vect = (function titanoboa$designer$render_nD_vect(p__10786,recursive_fn){
var map__10789 = p__10786;
var map__10789__$1 = ((((!((map__10789 == null)))?((((map__10789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10789):map__10789);
var highlight_fn = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553));
var map_flag = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var ks = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var editing_ks = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var highlighted_parens = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251));
var step_cursor = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var key_edit_fn = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var cnt = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var prop = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var read_only_QMARK_ = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var show_parens_QMARK_ = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str("form-group")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"form-group form-group-sm",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(titanoboa.designer.v_starts_with.call(null,ks,highlighted_parens))?"beige":""),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),(cljs.core.truth_(show_parens_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"7px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(ks)].join('')], null),(cljs.core.truth_(map_flag)?"{":"[")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(show_parens_QMARK_)?"col-sm-23":"col-sm-24"),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str("top-lvl-div")].join('')], null),cljs.core.map_indexed.call(null,((function (map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (i,n){
var col_count = (cljs.core.truth_(show_parens_QMARK_)?(23):(24));
var ksi = cljs.core.conj.call(null,ks,i);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recursive_fn,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251),new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),new cljs.core.Keyword(null,"cnt","cnt",283978798),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553)],[ksi,editing_ks,highlighted_parens,key_edit_fn,step_cursor,cljs.core.count.call(null,prop),n,read_only_QMARK_,show_parens_QMARK_,false,highlight_fn])], null);
});})(map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,prop)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-23",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(ks),cljs.core.str("footer-div")].join('')], null),(cljs.core.truth_(read_only_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_add_button,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null),new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),map_flag,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),key_edit_fn,new cljs.core.Keyword(null,"default-add-value","default-add-value",-1663874198),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null)], null)),(cljs.core.truth_(show_parens_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(highlight_fn)?((function (map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,ks);
});})(map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(highlight_fn)?((function (map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (){
return highlight_fn.call(null,null);
});})(map__10789,map__10789__$1,highlight_fn,map_flag,ks,editing_ks,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"7px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,ks,highlighted_parens))?"#9c27b0":"black")], null)], null),(cljs.core.truth_(map_flag)?"}":"]")], null):null)], null)], null);
});
titanoboa.designer.render_properties = (function titanoboa$designer$render_properties(p__10792){
var map__10795 = p__10792;
var map__10795__$1 = ((((!((map__10795 == null)))?((((map__10795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10795):map__10795);
var opts = map__10795__$1;
var highlight_fn = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553));
var map_flag = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313));
var ks = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var editing_ks = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807));
var vec_max_length = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"vec-max-length","vec-max-length",72309835));
var highlighted_parens = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251));
var step_cursor = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012));
var key_edit_fn = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436));
var cnt = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));
var prop = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var read_only_QMARK_ = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var show_parens_QMARK_ = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360));

if((cljs.core.coll_QMARK_.call(null,prop)) && (!((prop instanceof titanoboa.exp.Expression)))){
if(cljs.core.map_QMARK_.call(null,prop)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa$designer$render_properties,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.vec.call(null,prop),new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),true)], null);
} else {
if(cljs.core.truth_((function (){var and__4996__auto__ = vec_max_length;
if(cljs.core.truth_(and__4996__auto__)){
return (cljs.core.vector_QMARK_.call(null,prop)) && ((cljs.core.count.call(null,prop) > vec_max_length));
} else {
return and__4996__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa$designer$render_properties,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.vec.call(null,cljs.core.take.call(null,vec_max_length,prop)))], null);
} else {
if((cljs.core.vector_QMARK_.call(null,prop)) && (cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,prop))){
return titanoboa.designer.render_2D_vect.call(null,opts,titanoboa$designer$render_properties);
} else {
if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core.vector_QMARK_.call(null,prop);
if(and__4996__auto__){
return cljs.core.some.call(null,((function (and__4996__auto__,map__10795,map__10795__$1,opts,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_){
return (function (p1__10791_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__10791_SHARP_)) || (cljs.core.sequential_QMARK_.call(null,p1__10791_SHARP_));
});})(and__4996__auto__,map__10795,map__10795__$1,opts,highlight_fn,map_flag,ks,editing_ks,vec_max_length,highlighted_parens,step_cursor,key_edit_fn,cnt,prop,read_only_QMARK_,show_parens_QMARK_))
,prop);
} else {
return and__4996__auto__;
}
})())){
return titanoboa.designer.render_multirow_vect.call(null,opts,titanoboa$designer$render_properties,(1));
} else {
if((cljs.core.vector_QMARK_.call(null,prop)) && ((cljs.core.count.call(null,prop) > (4)))){
return titanoboa.designer.render_multirow_vect.call(null,opts,titanoboa$designer$render_properties,(4));
} else {
if(cljs.core.vector_QMARK_.call(null,prop)){
return titanoboa.designer.render_1D_vect.call(null,opts,titanoboa$designer$render_properties);
} else {
return null;
}
}
}
}
}
}
} else {
if(cljs.core.truth_((function (){var or__5008__auto__ = map_flag;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return (prop instanceof cljs.core.Keyword);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_key_label,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),new cljs.core.Keyword(null,"cnt","cnt",283978798),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553)],[ks,editing_ks,key_edit_fn,step_cursor,cnt,prop,read_only_QMARK_,show_parens_QMARK_,map_flag,highlight_fn])], null);
} else {
if((prop instanceof titanoboa.exp.Expression)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_expression,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"cnt","cnt",283978798),cnt,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),map_flag,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),read_only_QMARK_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.prop_input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"cnt","cnt",283978798),cnt,new cljs.core.Keyword(null,"map-flag","map-flag",-587157313),map_flag,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),read_only_QMARK_], null)], null);

}
}
}
});
titanoboa.designer.properties_component = (function titanoboa$designer$properties_component(opts){
var highlight_parens_atom = reagent.core.atom.call(null,null);
var highlight_parens_BANG_ = ((function (highlight_parens_atom){
return (function (ks){
return cljs.core.reset_BANG_.call(null,highlight_parens_atom,ks);
});})(highlight_parens_atom))
;
var editing_key = reagent.core.atom.call(null,null);
var key_edit_fn = ((function (highlight_parens_atom,highlight_parens_BANG_,editing_key){
return (function (p1__10797_SHARP_){
return cljs.core.reset_BANG_.call(null,editing_key,p1__10797_SHARP_);
});})(highlight_parens_atom,highlight_parens_BANG_,editing_key))
;
return ((function (highlight_parens_atom,highlight_parens_BANG_,editing_key,key_edit_fn){
return (function (opts__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-horizontal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.render_properties,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"highlighted-parens","highlighted-parens",431614251),cljs.core.deref.call(null,highlight_parens_atom),new cljs.core.Keyword(null,"highlight-fn","highlight-fn",-1488767553),highlight_parens_BANG_,new cljs.core.Keyword(null,"editing-ks","editing-ks",356988807),cljs.core.deref.call(null,editing_key),new cljs.core.Keyword(null,"key-edit-fn","key-edit-fn",675899436),key_edit_fn)], null)], null);
});
;})(highlight_parens_atom,highlight_parens_BANG_,editing_key,key_edit_fn))
});
titanoboa.designer.get_step_name = (function titanoboa$designer$get_step_name(job_name,step_id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),job_name,new cljs.core.Keyword(null,"steps","steps",-128433302),step_id,new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
titanoboa.designer.properties_panel_heading = (function titanoboa$designer$properties_panel_heading(title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"7px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,titanoboa.designer.show_parens_atom,cljs.core.not);
}),new cljs.core.Keyword(null,"title","title",636505583),"toggle parentheses outline"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.designer.show_parens_atom))?"btn btn-secondary active":"btn btn-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),"{[]}"], null)], null)], null);
});
titanoboa.designer.new_props_panel_heading = (function titanoboa$designer$new_props_panel_heading(title,on_click_fn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"6px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn,new cljs.core.Keyword(null,"title","title",636505583),"clear changes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-ico","button.btn.btn-default.btn-ico",29493193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.zmdi.zmdi-refresh-alt","b.zmdi.zmdi-refresh-alt",1400895181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null)], null)], null)], null)], null);
});
titanoboa.designer.edit_job_panel = (function titanoboa$designer$edit_job_panel(p__10798){
var map__10801 = p__10798;
var map__10801__$1 = ((((!((map__10801 == null)))?((((map__10801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10801):map__10801);
var app_state_atom = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812));
var jd_cursor = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var job_name = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("job-editor-"),cljs.core.str(job_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_panel_heading,"Job Properties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jd_cursor)),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),jd_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),cljs.core.deref.call(null,titanoboa.designer.show_parens_atom)], null)], null)], null)], null)], null);
});
titanoboa.designer.select_picker = (function titanoboa$designer$select_picker(props,children){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var el = titanoboa.designer.jquery.call(null,reagent.core.dom_node.call(null,this$));
return el.selectpicker("val",new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(props));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var el = titanoboa.designer.jquery.call(null,reagent.core.dom_node.call(null,this$));
return el.selectpicker("refresh");
}),new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163),(function (this$,p__10807,p__10808){
var vec__10809 = p__10807;
var _ = cljs.core.nth.call(null,vec__10809,(0),null);
var prev_props = cljs.core.nth.call(null,vec__10809,(1),null);
var prev_more = cljs.core.nth.call(null,vec__10809,(2),null);
var vec__10810 = p__10808;
var ___$1 = cljs.core.nth.call(null,vec__10810,(0),null);
var new_props = cljs.core.nth.call(null,vec__10810,(1),null);
var new_more = cljs.core.nth.call(null,vec__10810,(2),null);
var el = titanoboa.designer.jquery.call(null,reagent.core.dom_node.call(null,this$));
cljs.core.println.call(null,"[",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),"] value changed, new value is ",new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(new_props)," old was ",el.val());

return !(cljs.core._EQ_.call(null,el.val(),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(new_props)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (props__$1,children__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control selectpicker",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"data-header","data-header",-407479365),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"data-show-tick","data-show-tick",2098977903),"false"], null)),children__$1], null);
})], null));
});
titanoboa.designer.load_step_type_modal = (function titanoboa$designer$load_step_type_modal(p__10812){
var map__10818 = p__10812;
var map__10818__$1 = ((((!((map__10818 == null)))?((((map__10818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10818):map__10818);
var step_type_atom = cljs.core.get.call(null,map__10818__$1,new cljs.core.Keyword(null,"step-type-atom","step-type-atom",805567345));
var on_merge = cljs.core.get.call(null,map__10818__$1,new cljs.core.Keyword(null,"on-merge","on-merge",2044365074));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (p__10820){
var map__10821 = p__10820;
var map__10821__$1 = ((((!((map__10821 == null)))?((((map__10821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10821):map__10821);
var step_type_atom__$1 = cljs.core.get.call(null,map__10821__$1,new cljs.core.Keyword(null,"step-type-atom","step-type-atom",805567345));
var type_name = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)) instanceof cljs.core.Keyword))?cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1))):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"load-step-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"start-job-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"load-step-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"8%",new cljs.core.Keyword(null,"left","left",-399115937),"18%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"load-step-modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Merge properties from step type template ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px 0px 0px 0px",new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"width","width",-384071477),"28px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/assets/svg/step-icons/"),cljs.core.str(type_name),cljs.core.str(".svg")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),type_name], null)," ?"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),(cljs.core.truth_(new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.arrange-horizontally","div.arrange-horizontally",1762174154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close.hover-blue","button.close.hover-blue",1797934973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (){
return cljs.core.swap_BANG_.call(null,step_type_atom__$1,cljs.core.dissoc,new cljs.core.Keyword(null,"supertype","supertype",355302204));
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"-13",new cljs.core.Keyword(null,"top","top",-1856271961),"5",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-delete","span.zmdi.zmdi-delete",521126765)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"44px"], null)], null),"Supertype"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"data-live-search","data-live-search",-181231710),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[true,"load-step-type-supertype","Select Supertype",(((new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)) instanceof cljs.core.Keyword))?cljs.core.name.call(null,new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1))):null),(((new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)) instanceof cljs.core.Keyword))?cljs.core.name.call(null,new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1))):null),"text","Select Supertype","load-step-type-supertype","form-control",((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (p1__10811_SHARP_){
return cljs.core.swap_BANG_.call(null,step_type_atom__$1,cljs.core.assoc,new cljs.core.Keyword(null,"supertype","supertype",355302204),cljs.core.keyword.call(null,p1__10811_SHARP_.target.value));
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
]),titanoboa.designer.select_options.call(null,cljs.core.map.call(null,((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,n),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-content","data-content",-508111796),[cljs.core.str("<span><img style='margin:2px 0px 0px 0px' height='28' width='28' src='/assets/svg/step-icons/"),cljs.core.str(cljs.core.name.call(null,n)),cljs.core.str(".svg'/> "),cljs.core.str(cljs.core.name.call(null,n)),cljs.core.str("</span>")].join('')], null)], null);
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"supertype","supertype",355302204),cljs.core.deref.call(null,titanoboa.designer.step_types)))),"stepsupertype-opts")], null)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.arrange-horizontally","div.arrange-horizontally",1762174154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close.hover-blue","button.close.hover-blue",1797934973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (){
return cljs.core.swap_BANG_.call(null,step_type_atom__$1,cljs.core.dissoc,new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195));
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"-13",new cljs.core.Keyword(null,"top","top",-1856271961),"3",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-delete","span.zmdi.zmdi-delete",521126765)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label"], null),"Workload fn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.code_mirror,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),"load-step-type-modal-fn-field",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)),new cljs.core.Keyword(null,"value-atom","value-atom",-887321133),reagent.core.cursor.call(null,step_type_atom__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195)], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"autoClearEmptyLines","autoClearEmptyLines",62836823),false,new cljs.core.Keyword(null,"theme","theme",-1247880880),"mdn-like"], null),new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091),true,new cljs.core.Keyword(null,"insta-repl?","insta-repl?",-848576250),true], null)], null)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close.hover-blue","button.close.hover-blue",1797934973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (){
return cljs.core.swap_BANG_.call(null,step_type_atom__$1,cljs.core.dissoc,new cljs.core.Keyword(null,"properties","properties",685819552));
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"-13",new cljs.core.Keyword(null,"top","top",-1856271961),"3",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-delete","span.zmdi.zmdi-delete",521126765)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.new_props_panel_heading,"Step Properties",((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (){
return cljs.core.swap_BANG_.call(null,step_type_atom__$1,cljs.core.assoc,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (i){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_type_atom__$1)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(i));
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
,cljs.core.deref.call(null,titanoboa.designer.step_types)))));
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.get_in.call(null,cljs.core.deref.call(null,step_type_atom__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null)),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_type_atom__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),cljs.core.deref.call(null,titanoboa.designer.show_parens_atom)], null)], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-default.pull-left","button.btn.btn-danger.btn-default.pull-left",-2125044425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Cancel"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (e){
on_merge.call(null);

return titanoboa.designer.jquery.call(null,"#load-step-modal").modal("hide");
});})(type_name,map__10821,map__10821__$1,step_type_atom__$1,map__10818,map__10818__$1,step_type_atom,on_merge))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-import","span.glyphicon.glyphicon-import",617476535)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Merge"], null)], null)], null)], null)], null)], null);
});})(map__10818,map__10818__$1,step_type_atom,on_merge))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (this$){
titanoboa.designer.jquery.call(null,"#load-step-modal-content").resizable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["alsoResize",".modal-dialog"], null)));

titanoboa.designer.jquery.call(null,"#load-step-modal-dialog").draggable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["handle",".modal-header"], null)));

return titanoboa.designer.jquery.call(null,"#load-step-modal").on("hidden.bs.modal",((function (map__10818,map__10818__$1,step_type_atom,on_merge){
return (function (e){
return cljs.core.reset_BANG_.call(null,step_type_atom,null);
});})(map__10818,map__10818__$1,step_type_atom,on_merge))
);
});})(map__10818,map__10818__$1,step_type_atom,on_merge))
], null));
});
titanoboa.designer.edit_step_panel = (function titanoboa$designer$edit_step_panel(p__10829){
var map__10834 = p__10829;
var map__10834__$1 = ((((!((map__10834 == null)))?((((map__10834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10834):map__10834);
var app_state_atom = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812));
var graph_cursor = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var jd_cursor = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var job_name = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
var step_id = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"step-id","step-id",712954044));
var step_cursor = titanoboa.designer.get_step_cursor.call(null,app_state_atom,job_name,step_id);
var _ = cljs.core.println.call(null,"re-rendering edit-step-panel");
var ___$1 = cljs.core.add_watch.call(null,step_cursor,new cljs.core.Keyword(null,"edit","edit",-1641834166),((function (step_cursor,_,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (k,r,os,ns){
if(cljs.core.truth_(ns)){
if(cljs.core.truth_((function (){var or__5008__auto__ = (function (){var and__4996__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ns));
if(and__4996__auto__){
return titanoboa.designer.not_nil_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os));
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
var and__4996__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(os),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ns));
if(and__4996__auto__){
return titanoboa.designer.not_nil_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(os));
} else {
return and__4996__auto__;
}
}
})())){
titanoboa.designer.update_fl_node_BANG_.call(null,graph_cursor,step_id,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ns),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ns));
} else {
}

if(cljs.core.truth_((function (){var and__4996__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(os),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(ns));
if(and__4996__auto__){
return titanoboa.designer.not_nil_QMARK_.call(null,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(os));
} else {
return and__4996__auto__;
}
})())){
return titanoboa.designer.reload_vertices_BANG_.call(null,cljs.core.deref.call(null,jd_cursor),graph_cursor);
} else {
return null;
}
} else {
return null;
}
});})(step_cursor,_,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(job_name),cljs.core.str(step_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(titanoboa.designer.check_unique_step_name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor))))?"input-group editor-field":"input-group editor-field has-error")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label"], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (p1__10823_SHARP_){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__10823_SHARP_.target.value);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Step Name"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"44px"], null)], null),"Supertype"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor))),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.name.call(null,new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (p1__10824_SHARP_){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"supertype","supertype",355302204),cljs.core.keyword.call(null,p1__10824_SHARP_.target.value));
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"data-live-search","data-live-search",-181231710),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select Supertype",new cljs.core.Keyword(null,"title","title",636505583),"Select Supertype"], null),titanoboa.designer.select_options.call(null,cljs.core.map.call(null,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,n),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-content","data-content",-508111796),[cljs.core.str("<span><img style='margin:2px 0px 0px 0px' height='28' width='28' src='/assets/svg/step-icons/"),cljs.core.str(cljs.core.name.call(null,n)),cljs.core.str(".svg'/> "),cljs.core.str(cljs.core.name.call(null,n)),cljs.core.str("</span>")].join('')], null)], null);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"supertype","supertype",355302204),cljs.core.deref.call(null,titanoboa.designer.step_types)))),"stepsupertype-options")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"44px"], null)], null),"Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"val","val",128701612),cljs.core.name.call(null,(function (){var or__5008__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor));
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (p1__10825_SHARP_){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,p1__10825_SHARP_.target.value)).call(null,cljs.core.reset_BANG_.call(null,titanoboa.designer.loaded_step_type,cljs.core.first.call(null,cljs.core.filter.call(null,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (i){
return cljs.core._EQ_.call(null,cljs.core.keyword.call(null,p1__10825_SHARP_.target.value),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(i));
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,cljs.core.deref.call(null,titanoboa.designer.step_types)))),titanoboa.designer.jquery.call(null,"#load-step-modal").modal());
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"data-live-search","data-live-search",-181231710),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select Type",new cljs.core.Keyword(null,"title","title",636505583),"Select Type"], null),titanoboa.designer.select_options.call(null,cljs.core.map.call(null,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (p__10836){
var vec__10837 = p__10836;
var s = cljs.core.nth.call(null,vec__10837,(0),null);
var t = cljs.core.nth.call(null,vec__10837,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,t),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-content","data-content",-508111796),[cljs.core.str("<span><img style='margin:2px 0px 0px 0px' height='28' width='28' src='/assets/svg/step-icons/"),cljs.core.str(cljs.core.name.call(null,t)),cljs.core.str(".svg'/> "),cljs.core.str(cljs.core.name.call(null,t)),cljs.core.str(" <small class='text-muted'> "),cljs.core.str(cljs.core.name.call(null,s)),cljs.core.str(" </small></span>")].join('')], null)], null);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,cljs.core.map.call(null,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"supertype","supertype",355302204).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(i)], null);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,cljs.core.deref.call(null,titanoboa.designer.step_types))),"steptype-options")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.load_step_type_modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step-type-atom","step-type-atom",805567345),titanoboa.designer.loaded_step_type,new cljs.core.Keyword(null,"on-merge","on-merge",2044365074),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (p1__10826_SHARP_){
return cljs.core.merge_with.call(null,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (val_in_result,val_in_latter){
if((cljs.core.map_QMARK_.call(null,val_in_result)) && (cljs.core.map_QMARK_.call(null,val_in_latter))){
return cljs.core.merge.call(null,val_in_result,val_in_latter);
} else {
return val_in_latter;
}
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,p1__10826_SHARP_,cljs.core.deref.call(null,titanoboa.designer.loaded_step_type));
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label"], null),"Workload fn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.code_mirror,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)),new cljs.core.Keyword(null,"value-atom","value-atom",-887321133),reagent.core.cursor.call(null,step_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workload-fn","workload-fn",-402456195)], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"autoClearEmptyLines","autoClearEmptyLines",62836823),false,new cljs.core.Keyword(null,"theme","theme",-1247880880),"mdn-like"], null),new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091),true,new cljs.core.Keyword(null,"insta-repl?","insta-repl?",-848576250),true], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group editor-field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update,new cljs.core.Keyword(null,"retry-on-error?","retry-on-error?",1482901351),cljs.core.not);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"retry-on-error?","retry-on-error?",1482901351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),"-2px"], null)], null)," Retries on error"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (p1__10828_SHARP_){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121),titanoboa.designer.eval_property.call(null,p1__10828_SHARP_.target.value));
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,new cljs.core.Keyword(null,"retry-on-error?","retry-on-error?",1482901351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),"Next Steps",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"7px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update,new cljs.core.Keyword(null,"allow-parallel?","allow-parallel?",-139374809),cljs.core.not);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"title","title",636505583),"allow parallel execution"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"allow-parallel?","allow-parallel?",-139374809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)))?"btn btn-secondary active":"btn btn-secondary")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(cljs.core.truth_(new cljs.core.Keyword(null,"allow-parallel?","allow-parallel?",-139374809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)))?"./assets/svg/parallel.svg":"./assets/svg/parallel-disabled.svg"),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-hover"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Step"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Condition"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Action"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (i,s){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),titanoboa.designer.get_step_name.call(null,job_name,cljs.core.second.call(null,s))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.first.call(null,s)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-delete",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Delete",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-container","data-container",1473653353),"body"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (){
return titanoboa.designer.remove_jd_link_BANG_.call(null,jd_cursor,step_id,s);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
], null),"  ",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-edit",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Edit",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-container","data-container",1473653353),"body"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.modal_link_props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show","show",-576705889),true,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)),new cljs.core.Keyword(null,"to","to",192099007),titanoboa.designer.get_step_name.call(null,job_name,cljs.core.second.call(null,s)),new cljs.core.Keyword(null,"cond","cond",-33823472),cljs.core.first.call(null,s),new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720),((function (step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id){
return (function (c){
return cljs.core.swap_BANG_.call(null,step_cursor,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485)], null),cljs.core.assoc,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.second.call(null,s)], null));
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
], null));
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
], null)], null)], null);
});})(step_cursor,_,___$1,map__10834,map__10834__$1,app_state_atom,graph_cursor,jd_cursor,job_name,step_id))
,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor))))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_panel_heading,"Step Properties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,step_cursor)),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),step_cursor,new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),cljs.core.deref.call(null,titanoboa.designer.show_parens_atom)], null)], null)], null)], null)], null);
});
titanoboa.designer.button_bar_readonly = (function titanoboa$designer$button_bar_readonly(p__10838){
var map__10841 = p__10838;
var map__10841__$1 = ((((!((map__10841 == null)))?((((map__10841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10841):map__10841);
var graph_cursor = cljs.core.get.call(null,map__10841__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jobs-tab vertical-buttons"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group-vertical graph-buttons-vertical",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_menu_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"css-class","css-class",-919455334),"btn-ico-edit",new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"title","title",636505583),"edit job & step properties"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_menu_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"css-class","css-class",-919455334),"btn-ico-move",new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"title","title",636505583),"move step icons"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group-vertical graph-buttons-vertical",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_pin_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor], null)], null)], null)], null);
});
titanoboa.designer.run_job_btns = (function titanoboa$designer$run_job_btns(p__10845){
var map__10851 = p__10845;
var map__10851__$1 = ((((!((map__10851 == null)))?((((map__10851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10851):map__10851);
var jd_cursor = cljs.core.get.call(null,map__10851__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var job_name = cljs.core.get.call(null,map__10851__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));

var temp_props_atom = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (p__10853){
var map__10854 = p__10853;
var map__10854__$1 = ((((!((map__10854 == null)))?((((map__10854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10854):map__10854);
var jd_cursor__$1 = cljs.core.get.call(null,map__10854__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var job_name__$1 = cljs.core.get.call(null,map__10854__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group graph-buttons",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-ico","button.btn-ico",-713437553),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"run job",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (){
if(cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,temp_props_atom),job_name__$1))){
cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc,job_name__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jd_cursor__$1))], null));
} else {
}

return titanoboa.designer.jquery.call(null,"#start-job-modal").modal();
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"3"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-ico","button.btn-ico",-713437553),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"run job in debug mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (){
if(cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,temp_props_atom),job_name__$1))){
cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc,job_name__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jd_cursor__$1))], null));
} else {
}

return titanoboa.designer.jquery.call(null,"#start-job-modal").modal();
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-bug","span.zmdi.zmdi-bug",-1601684065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"3",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"start-job-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"start-job-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"start-job-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"20%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"start-job-modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Start a new ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),job_name__$1], null)," job"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./assets/svg/system.svg",new cljs.core.Keyword(null,"height","height",1025178622),(48)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," System"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.select_picker,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null),new cljs.core.Keyword(null,"val","val",128701612),[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"system","system",-29381724)], null)))].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (p1__10843_SHARP_){
return cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"system","system",-29381724)], null),titanoboa.util.s__GT_key.call(null,p1__10843_SHARP_.target.value));
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select System",new cljs.core.Keyword(null,"title","title",636505583),"Select System"], null),titanoboa.designer.select_options.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.deref.call(null,titanoboa.systems.systems_state))),"systems-running")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default editor-field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.new_props_panel_heading,"Job Properties",((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (){
return cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc,job_name__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jd_cursor__$1))], null));
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.properties_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"properties","properties",685819552)], null)),new cljs.core.Keyword(null,"step-cursor","step-cursor",96048012),temp_props_atom,new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"properties","properties",685819552)], null),new cljs.core.Keyword(null,"show-parens?","show-parens?",2124438360),cljs.core.deref.call(null,titanoboa.designer.show_parens_atom)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-default.pull-left","button.btn.btn-danger.btn-default.pull-left",-2125044425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Cancel"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (e){
titanoboa.designer.jquery.call(null,"#start-job-modal").modal("hide");

return titanoboa.api.start_job_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"system","system",-29381724)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jobdef","jobdef",402501090),titanoboa.designer.job_def__GT_server.call(null,cljs.core.update_in.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),job_name__$1], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revision","revision",-1350113114)], null),((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (p1__10844_SHARP_){
return [cljs.core.str((p1__10844_SHARP_ + (1))),cljs.core.str("-SNAPSHOT")].join('');
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
)),new cljs.core.Keyword(null,"properties","properties",685819552),titanoboa.designer.all_linked__GT_maps.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"properties","properties",685819552)], null)))], null),((function (map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (r){
cljs.core.swap_BANG_.call(null,temp_props_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"last-job-id","last-job-id",-2103925493)], null),new cljs.core.Keyword(null,"jobid","jobid",-936230576).cljs$core$IFn$_invoke$arity$1(r));

return titanoboa.designer.jquery.call(null,"#job-started-modal").modal();
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
);
});})(map__10854,map__10854__$1,jd_cursor__$1,job_name__$1,temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Start"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"job-started-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"job-started-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"job-started-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"20%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"job-started-modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"New instance of job ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),job_name__$1], null)," was successfully started"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Job ID is: ",cljs.core.get_in.call(null,cljs.core.deref.call(null,temp_props_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1,new cljs.core.Keyword(null,"last-job-id","last-job-id",-2103925493)], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241)], null)], null)], null)], null)], null);
});})(temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name){
return (function (this$){
titanoboa.designer.jquery.call(null,"#start-job-modal-content").resizable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["alsoResize",".modal-dialog"], null)));

return titanoboa.designer.jquery.call(null,"#start-job-modal-dialog").draggable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["handle",".modal-header"], null)));
});})(temp_props_atom,map__10851,map__10851__$1,jd_cursor,job_name))
], null));
});
titanoboa.designer.button_bar = (function titanoboa$designer$button_bar(p__10856){
var map__10859 = p__10856;
var map__10859__$1 = ((((!((map__10859 == null)))?((((map__10859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10859):map__10859);
var graph_cursor = cljs.core.get.call(null,map__10859__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825));
var jd_cursor = cljs.core.get.call(null,map__10859__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011));
var job_name = cljs.core.get.call(null,map__10859__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-buttons-container",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("graph-buttons-container-"),cljs.core.str(job_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group graph-buttons",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_save_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"job-name","job-name",607418212),job_name], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group graph-buttons",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_menu_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"css-class","css-class",-919455334),"btn-ico-edit",new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"title","title",636505583),"edit job & step properties"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_menu_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"css-class","css-class",-919455334),"btn-ico-move",new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"title","title",636505583),"move step icons"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_menu_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"css-class","css-class",-919455334),"btn-ico-link",new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"title","title",636505583),"add/remove links"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group graph-buttons",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default btn-ico-refresh",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"reload job visualization",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10859,map__10859__$1,graph_cursor,jd_cursor,job_name){
return (function (){
return titanoboa.designer.reload_force_BANG_.call(null,cljs.core.deref.call(null,jd_cursor),titanoboa.designer.graph_view,cljs.core.deref.call(null,titanoboa.designer.opened_job));
});})(map__10859,map__10859__$1,graph_cursor,jd_cursor,job_name))
], null),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_pin_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_add_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.graph_delete_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.run_job_btns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor,new cljs.core.Keyword(null,"job-name","job-name",607418212),job_name], null)], null)], null);
});
titanoboa.designer.compile_status_ico = (function titanoboa$designer$compile_status_ico(p__10861){
var map__10870 = p__10861;
var map__10870__$1 = ((((!((map__10870 == null)))?((((map__10870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10870):map__10870);
var status = cljs.core.get.call(null,map__10870__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var message = cljs.core.get.call(null,map__10870__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__10870,map__10870__$1,status,message){
return (function (p__10872){
var map__10873 = p__10872;
var map__10873__$1 = ((((!((map__10873 == null)))?((((map__10873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10873):map__10873);
var status__$1 = cljs.core.get.call(null,map__10873__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var message__$1 = cljs.core.get.call(null,map__10873__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__10875 = (((status__$1 instanceof cljs.core.Keyword))?status__$1.fqn:null);
switch (G__10875) {
case "error":
return "zmdi zmdi-alert-circle";

break;
case "warn":
return "zmdi zmdi-alert-triangle";

break;
case "ok":
return "zmdi zmdi-check-circle";

break;
default:
return "zmdi zmdi-alert-circle";

}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__10876 = (((status__$1 instanceof cljs.core.Keyword))?status__$1.fqn:null);
switch (G__10876) {
case "error":
return "#d9534f";

break;
case "warn":
return "#f0ad4e";

break;
case "ok":
return "#5cb85c";

break;
default:
return "#f0ad4e";

}
})(),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"left","left",-399115937),"15px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"data-content","data-content",-508111796),message__$1,new cljs.core.Keyword(null,"data-title","data-title",-83549535),(function (){var G__10877 = (((status__$1 instanceof cljs.core.Keyword))?status__$1.fqn:null);
switch (G__10877) {
case "error":
return "Compilation Failed";

break;
case "warn":
return "Invalid job definition format!";

break;
case "ok":
return "";

break;
default:
return "";

}
})()], null)], null);
});})(map__10870,map__10870__$1,status,message))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__10870,map__10870__$1,status,message){
return (function (this$){
var el = titanoboa.designer.jquery.call(null,reagent.core.dom_node.call(null,this$));
return el.popover(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placement","placement",768366651),"left",new cljs.core.Keyword(null,"trigger","trigger",103466139),"hover"], null)));
});})(map__10870,map__10870__$1,status,message))
], null));
});
titanoboa.designer.job_editor = (function titanoboa$designer$job_editor(p__10884){
var map__10895 = p__10884;
var map__10895__$1 = ((((!((map__10895 == null)))?((((map__10895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10895):map__10895);
var app_state_atom = cljs.core.get.call(null,map__10895__$1,new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812));
var graph_view_atom = cljs.core.get.call(null,map__10895__$1,new cljs.core.Keyword(null,"graph-view-atom","graph-view-atom",-804096471));
var job_name = cljs.core.get.call(null,map__10895__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
var graph_minimized = reagent.core.atom.call(null,false);
var compile_status = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"message","message",-406056002),""], null));
return ((function (graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (p__10897){
var map__10898 = p__10897;
var map__10898__$1 = ((((!((map__10898 == null)))?((((map__10898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10898):map__10898);
var app_state_atom__$1 = cljs.core.get.call(null,map__10898__$1,new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812));
var graph_view_atom__$1 = cljs.core.get.call(null,map__10898__$1,new cljs.core.Keyword(null,"graph-view-atom","graph-view-atom",-804096471));
var job_name__$1 = cljs.core.get.call(null,map__10898__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212));
var graph_cursor = reagent.core.cursor.call(null,graph_view_atom__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [job_name__$1], null));
var jd_cursor = reagent.core.cursor.call(null,app_state_atom__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),job_name__$1], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"job-editor-content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("anim job-visualization"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,graph_minimized))?" in":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.button_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor,new cljs.core.Keyword(null,"job-name","job-name",607418212),job_name__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.job_graph_visualization,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"arrange-vertically step-editor-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.step-editor-tab","div.step-editor-tab",1315992439),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav nav-tabs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.graph_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437)], null))))?"active":""),new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (){
return cljs.core.swap_BANG_.call(null,titanoboa.designer.graph_view,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job)], null),cljs.core.assoc,new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"properties","properties",685819552));
});})(graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"properties"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.graph_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437)], null))))?"active":""),new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (){
return cljs.core.swap_BANG_.call(null,titanoboa.designer.graph_view,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job)], null),cljs.core.assoc,new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"edn","edn",1317840885));
});})(graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"edn"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"active",new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (){
return cljs.core.reset_BANG_.call(null,graph_minimized,cljs.core.not.call(null,cljs.core.deref.call(null,graph_minimized)));
});})(graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,graph_minimized))?"glyphicon glyphicon-chevron-right":"glyphicon glyphicon-chevron-left"),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),""], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__10900 = (((cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.graph_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437)], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.graph_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437)], null)).fqn:null);
switch (G__10900) {
case "properties":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"step-editor",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (175))], null)], null),(cljs.core.truth_((function (){var and__4996__auto__ = titanoboa.designer.not_nil_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null)));
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null)),"start");
} else {
return and__4996__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.edit_step_panel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812),app_state_atom__$1,new cljs.core.Keyword(null,"job-name","job-name",607418212),job_name__$1,new cljs.core.Keyword(null,"graph-cursor","graph-cursor",-662080825),graph_cursor,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor,new cljs.core.Keyword(null,"step-id","step-id",712954044),cljs.core.get_in.call(null,cljs.core.deref.call(null,graph_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.edit_job_panel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812),app_state_atom__$1,new cljs.core.Keyword(null,"jd-cursor","jd-cursor",-311232011),jd_cursor,new cljs.core.Keyword(null,"job-name","job-name",607418212),job_name__$1], null)], null))], null);

break;
case "edn":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.compile_status_ico,cljs.core.deref.call(null,compile_status)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.code_mirror,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.Keyword(null,"transform-read-fn","transform-read-fn",-346718559),new cljs.core.Keyword(null,"job-name","job-name",607418212),new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"on-compile","on-compile",-1162120153),new cljs.core.Keyword(null,"transform-write-fn","transform-write-fn",1608502159),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"value-atom","value-atom",-887321133),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"base-value","base-value",921379228)],[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"autoClearEmptyLines","autoClearEmptyLines",62836823),false,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"native",new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),(10),new cljs.core.Keyword(null,"theme","theme",-1247880880),"mdn-like",new cljs.core.Keyword(null,"styleActiveLine","styleActiveLine",-677594147),true], null),((function (G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (p1__10881_SHARP_){
var sb__5963__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10901_10906 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10902_10907 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10901_10906,_STAR_print_fn_STAR_10902_10907,sb__5963__auto__,G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (x__5964__auto__){
return sb__5963__auto__.append(x__5964__auto__);
});})(_STAR_print_newline_STAR_10901_10906,_STAR_print_fn_STAR_10902_10907,sb__5963__auto__,G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
;

try{fipp.clojure.pprint.call(null,titanoboa.designer.job_def__GT_server.call(null,p1__10881_SHARP_));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10902_10907;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10901_10906;
}
return [cljs.core.str(sb__5963__auto__)].join('');
});})(G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
,job_name__$1,true,[cljs.core.str("edn-editor-"),cljs.core.str(job_name__$1)].join(''),((function (G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (p1__10883_SHARP_){
cljs.core.println.call(null,"On compile called: ",p1__10883_SHARP_);

return cljs.core.reset_BANG_.call(null,compile_status,p1__10883_SHARP_);
});})(G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
,((function (G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (p1__10882_SHARP_){
try{var new_val = titanoboa.designer.job_def__GT_client.call(null,cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),titanoboa.exp.edn_reader_map], null),p1__10882_SHARP_));
try{titanoboa.designer.validate_jobdef.call(null,new_val);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"message","message",-406056002),"",new cljs.core.Keyword(null,"value","value",305978217),new_val], null);
}catch (e10904){if((e10904 instanceof Error)){
var err = e10904;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str(err)].join(''),new cljs.core.Keyword(null,"value","value",305978217),null], null);
} else {
throw e10904;

}
}}catch (e10903){if((e10903 instanceof Error)){
var err = e10903;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str(err)].join(''),new cljs.core.Keyword(null,"value","value",305978217),null], null);
} else {
throw e10903;

}
}});})(G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px 0px 5px;",new cljs.core.Keyword(null,"background","background",-863952629),"#ccc",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (175))], null),jd_cursor,((function (G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name){
return (function (new$,old){
if(cljs.core._EQ_.call(null,titanoboa.designer.parse_job_graph.call(null,new$),titanoboa.designer.parse_job_graph.call(null,old))){
return null;
} else {
return titanoboa.designer.reload_force_BANG_.call(null,cljs.core.deref.call(null,jd_cursor),titanoboa.designer.graph_view,cljs.core.deref.call(null,titanoboa.designer.opened_job));
}
});})(G__10900,graph_cursor,jd_cursor,map__10898,map__10898__$1,app_state_atom__$1,graph_view_atom__$1,job_name__$1,graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
,cljs.core.deref.call(null,jd_cursor)])], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.graph_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,titanoboa.designer.opened_job),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437)], null)))].join('')));

}
})()], null)], null)], null);
});
;})(graph_minimized,compile_status,map__10895,map__10895__$1,app_state_atom,graph_view_atom,job_name))
});
titanoboa.designer.head_revision_opened_QMARK_ = (function titanoboa$designer$head_revision_opened_QMARK_(jd_name){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.designer.job_def_list),jd_name),cljs.core.get_in.call(null,cljs.core.deref.call(null,titanoboa.designer.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534),jd_name,new cljs.core.Keyword(null,"revision","revision",-1350113114)], null)));
});
titanoboa.designer.render_nav_tabs = (function titanoboa$designer$render_nav_tabs(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (jd_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,jd_name,cljs.core.deref.call(null,titanoboa.designer.opened_job)))?"active":null),new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(jd_name),cljs.core.str("-tab")].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.opened_job,jd_name);
})], null),[cljs.core.str(jd_name),cljs.core.str(" ")].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(jd_name),cljs.core.str("-tab-rev")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(titanoboa.designer.head_revision_opened_QMARK_.call(null,jd_name))?"label label-default":"label label-danger"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(titanoboa.designer.head_revision_opened_QMARK_.call(null,jd_name))?"0.4":"0.8")], null)], null),[cljs.core.str("rev."),cljs.core.str(titanoboa.designer.get_jd_rev.call(null,jd_name))].join('')], null),((cljs.core._EQ_.call(null,jd_name,cljs.core.deref.call(null,titanoboa.designer.opened_job)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return titanoboa.designer.stop_force_BANG_.call(null,titanoboa.designer.graph_view,jd_name).call(null,cljs.core.reset_BANG_.call(null,titanoboa.designer.opened_job,null),titanoboa.designer.remove_definition_BANG_.call(null,jd_name),cljs.core.reset_BANG_.call(null,titanoboa.designer.opened_job,cljs.core.first.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.designer.app_state))))),cljs.core.swap_BANG_.call(null,titanoboa.designer.graph_view,cljs.core.dissoc,jd_name));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-remove",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null):null)], null)], null);
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"loaded-job-defs","loaded-job-defs",1068977534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.designer.app_state)))));
});
titanoboa.designer.designer_tab = (function titanoboa$designer$designer_tab(){
var grid_minimized = reagent.core.atom.call(null,false);
return ((function (grid_minimized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"designer-tab"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.add_link_modal_dialog], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("anim job-table"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,grid_minimized))?" in":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"job-def-list","job-def-list",228175520),cljs.core.deref.call(null,titanoboa.designer.job_def_list)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.new_definition], null)], null),(((cljs.core.not.call(null,cljs.core.deref.call(null,titanoboa.designer.opened_job))) || (cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.designer.opened_job),"")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/logo_watermark.svg",new cljs.core.Keyword(null,"title","title",636505583),"\"Why should anyone be frightened by a hat?\"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"arrange-vertically job-editor",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav nav-tabs"], null),titanoboa.designer.render_nav_tabs.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"active",new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (grid_minimized){
return (function (){
return cljs.core.reset_BANG_.call(null,grid_minimized,cljs.core.not.call(null,cljs.core.deref.call(null,grid_minimized)));
});})(grid_minimized))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,grid_minimized))?"glyphicon glyphicon-chevron-right":"glyphicon glyphicon-chevron-left"),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),""], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.job_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812),titanoboa.designer.app_state,new cljs.core.Keyword(null,"graph-view-atom","graph-view-atom",-804096471),titanoboa.designer.graph_view,new cljs.core.Keyword(null,"job-name","job-name",607418212),cljs.core.deref.call(null,titanoboa.designer.opened_job)], null)], null)], null))], null);
});
;})(grid_minimized))
});
titanoboa.designer.store_win_size_BANG_ = (function titanoboa$designer$store_win_size_BANG_(){
return cljs.core.reset_BANG_.call(null,titanoboa.designer.win_height_atom,titanoboa.designer.jquery.call(null,window).height());
});
titanoboa.designer.initiate_resize_listener = (function titanoboa$designer$initiate_resize_listener(){
return titanoboa.designer.add_resize_listener.call(null,(function (){
return titanoboa.designer.store_win_size_BANG_.call(null);
}));
});
