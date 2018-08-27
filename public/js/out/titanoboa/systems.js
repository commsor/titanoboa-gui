// Compiled by ClojureScript 1.7.28 {}
goog.provide('titanoboa.systems');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('titanoboa.api');
if(typeof titanoboa.systems.systems_state !== 'undefined'){
} else {
titanoboa.systems.systems_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.systems.cluster_state !== 'undefined'){
} else {
titanoboa.systems.cluster_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.systems.selected_node !== 'undefined'){
} else {
titanoboa.systems.selected_node = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.systems.selected_view !== 'undefined'){
} else {
titanoboa.systems.selected_view = reagent.core.atom.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944));
}
if(typeof titanoboa.systems.log_state !== 'undefined'){
} else {
titanoboa.systems.log_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.systems.opened_log !== 'undefined'){
} else {
titanoboa.systems.opened_log = reagent.core.atom.call(null,"");
}
if(typeof titanoboa.systems.dependencies_disabled_QMARK_ !== 'undefined'){
} else {
titanoboa.systems.dependencies_disabled_QMARK_ = reagent.core.atom.call(null,false);
}
if(typeof titanoboa.systems.dependencies !== 'undefined'){
} else {
titanoboa.systems.dependencies = reagent.core.atom.call(null,null);
}
if(typeof titanoboa.systems.dependencies_edit !== 'undefined'){
} else {
titanoboa.systems.dependencies_edit = reagent.core.atom.call(null,null);
}
/**
 * Create a code-mirror editor. The parameters:
 * value-atom (reagent atom)
 * when this changes, the editor will update to reflect it.
 * options
 * :style (reagent style map)
 * will be applied to the container element
 * :js-cm-opts
 * options passed into the CodeMirror constructor
 */
titanoboa.systems.code_mirror_read_only = (function titanoboa$systems$code_mirror_read_only(p__7995){
var map__8005 = p__7995;
var map__8005__$1 = ((((!((map__8005 == null)))?((((map__8005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8005):map__8005);
var css_class = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var style = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var js_cm_opts = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var on_blur = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_focus = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var value_atom = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"value-atom","value-atom",-887321133));
var value = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"value","value",305978217));
var cm = reagent.core.atom.call(null,null);
var get_value = ((function (cm,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value){
return (function (){
if(cljs.core.truth_(value_atom)){
return cljs.core.deref.call(null,value_atom);
} else {
return value;
}
});})(cm,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),false,new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),false,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"null",new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"value","value",305978217),get_value.call(null),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"mdn-like"], null),js_cm_opts))));
cljs.core.reset_BANG_.call(null,cm,inst);

if(cljs.core.truth_(on_focus)){
inst.on("focus",on_focus);
} else {
}

if(cljs.core.truth_(on_blur)){
return inst.on("blur",on_blur);
} else {
return null;
}
});})(cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value){
return (function (this$,old_argv){
cljs.core.println.call(null,":component-did-update entered...");

if(cljs.core._EQ_.call(null,get_value.call(null),cljs.core.deref.call(null,cm).getValue())){
} else {
cljs.core.deref.call(null,cm).setValue(get_value.call(null));
}

return cljs.core.deref.call(null,cm).refresh();
});})(cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value))
,new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163),((function (cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value){
return (function (this$,p__8007,p__8008){
var vec__8009 = p__8007;
var _ = cljs.core.nth.call(null,vec__8009,(0),null);
var prev_props = cljs.core.nth.call(null,vec__8009,(1),null);
var prev_more = cljs.core.nth.call(null,vec__8009,(2),null);
var vec__8010 = p__8008;
var ___$1 = cljs.core.nth.call(null,vec__8010,(0),null);
var new_props = cljs.core.nth.call(null,vec__8010,(1),null);
var new_more = cljs.core.nth.call(null,vec__8010,(2),null);
cljs.core.println.call(null,[cljs.core.str("should-component-update entered...")].join(''));

return cljs.core.not_EQ_.call(null,get_value.call(null),cljs.core.deref.call(null,cm).getValue());
});})(cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value){
return (function (p__8011){
var map__8012 = p__8011;
var map__8012__$1 = ((((!((map__8012 == null)))?((((map__8012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8012):map__8012);
var css_class__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var style__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var js_cm_opts__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var on_blur__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_focus__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var value_atom__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"value-atom","value-atom",-887321133));
var value__$1 = cljs.core.get.call(null,map__8012__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),css_class__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null);
});})(cm,get_value,map__8005,map__8005__$1,css_class,style,js_cm_opts,on_blur,on_focus,value_atom,value))
], null));
});
titanoboa.systems.node_item = (function titanoboa$systems$node_item(node_id,state,selected_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"active":((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"down","down",1565245570)))?"disabled":""
)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.selected_node,node_id);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media.subseq","div.media.subseq",-809142842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-left.media-middle","div.media-left.media-middle",-1286242750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.media-object","img.media-object",-79304573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__8015 = (((state instanceof cljs.core.Keyword))?state.fqn:null);
switch (G__8015) {
case "live":
return "./assets/svg/cluster-ok.svg";

break;
case "non-responsive":
return "./assets/svg/cluster-warn.svg";

break;
case "down":
return "./assets/svg/cluster-x.svg";

break;
default:
return "./assets/svg/cluster-warn.svg";

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(64)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-body","div.media-body",-1089439484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),node_id], null)], null)], null)], null);
});
titanoboa.systems.cluster_list = (function titanoboa$systems$cluster_list(systems_state,selected_node_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group.cluster-list","div.list-group.cluster-list",1754486418),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.selected_node))?"":"active"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.selected_node,null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media","div.media",-1604536597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-left.media-middle","div.media-left.media-middle",-1286242750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.media-object","img.media-object",-79304573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./assets/svg/cluster.svg",new cljs.core.Keyword(null,"height","height",1025178622),(64)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-body","div.media-body",-1089439484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Cluster Management"], null)], null)], null)], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__8019){
var vec__8020 = p__8019;
var k = cljs.core.nth.call(null,vec__8020,(0),null);
var v = cljs.core.nth.call(null,vec__8020,(1),null);
return titanoboa.systems.node_item.call(null,k,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v),cljs.core._EQ_.call(null,selected_node_id,k));
}),systems_state))], null);
});
titanoboa.systems.workers_list = (function titanoboa$systems$workers_list(sys_key,workers){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.workers-list","div.workers-list",197373404),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,w){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.worker-cell","div.worker-cell",-1806715373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str("worker "),cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./assets/svg/cpu.svg",new cljs.core.Keyword(null,"height","height",1025178622),(48)], null)], null)], null),(cljs.core.truth_(w)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-success","span.label.label-success",-156422062),"running"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),"stopped"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.btn-group-xs","div.btn-group.btn-group-xs",-1754792572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(w)?"disabled":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,w))?"disabled":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-stop","span.glyphicon.glyphicon-stop",1004707248)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,w))?"disabled":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-off","span.glyphicon.glyphicon-off",-1560507931)], null)], null)], null)], null)], null);
}),workers)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.worker-add","div.worker-add",-1638679702),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-ico-cpu","button.btn.btn-default.btn-ico-cpu",-1937723214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Start new worker",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return titanoboa.api.add_worker_BANG_.call(null,sys_key,cljs.core.deref.call(null,titanoboa.systems.selected_node));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442)], null)], null)], null)], null);
});
titanoboa.systems.system_item = (function titanoboa$systems$system_item(p__8021){
var map__8028 = p__8021;
var map__8028__$1 = ((((!((map__8028 == null)))?((((map__8028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8028):map__8028);
var sys_props = map__8028__$1;
var sys_key = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"sys-key","sys-key",-716469338));
var state = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var workers = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"workers","workers",-2054878819));
var system_def = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"system-def","system-def",1148947705));
var worker_def = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"worker-def","worker-def",-1381841053));
var system_def_source = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"system-def-source","system-def-source",-554723984));
var worker_def_source = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"worker-def-source","worker-def-source",-213418773));
var autostart = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"autostart","autostart",-2028194117));
var tab_selected = reagent.core.atom.call(null,(cljs.core.truth_(workers)?new cljs.core.Keyword(null,"workers","workers",-2054878819):new cljs.core.Keyword(null,"system-def","system-def",1148947705)));
return ((function (tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart){
return (function (p__8030){
var map__8031 = p__8030;
var map__8031__$1 = ((((!((map__8031 == null)))?((((map__8031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8031):map__8031);
var sys_props__$1 = map__8031__$1;
var sys_key__$1 = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"sys-key","sys-key",-716469338));
var state__$1 = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var workers__$1 = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"workers","workers",-2054878819));
var system_def__$1 = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"system-def","system-def",1148947705));
var worker_def__$1 = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"worker-def","worker-def",-1381841053));
var autostart__$1 = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"autostart","autostart",-2028194117));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item.list-inverted","li.list-group-item.list-inverted",1747941394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sys_key__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-item-title","div.systems-item-title",851391042),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./assets/svg/system.svg",new cljs.core.Keyword(null,"height","height",1025178622),(52)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-item-title","div.systems-item-title",851391042),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.arrange-vertically","div.arrange-vertically",-1752834375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-item-title","div.systems-item-title",851391042),system_def__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-item-title","div.systems-item-title",851391042),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str(sys_key__$1)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,state__$1,new cljs.core.Keyword(null,"running","running",1554969103)))?"label-success":"label-default")], null),(cljs.core.truth_(state__$1)?cljs.core.name.call(null,state__$1):"stopped")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-item-title","div.systems-item-title",851391042),"auto start:",(cljs.core.truth_(autostart__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-info","span.label.label-info",-1377012770),"on"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),"off"], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group-vertical.btn-group-s","div.btn-group-vertical.btn-group-s",1240475046),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),((cljs.core._EQ_.call(null,state__$1,new cljs.core.Keyword(null,"running","running",1554969103)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core._EQ_.call(null,state__$1,new cljs.core.Keyword(null,"running","running",1554969103))))?"disabled":null),new cljs.core.Keyword(null,"title","title",636505583),"Stop system",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart){
return (function (){
return titanoboa.api.update_system_BANG_.call(null,sys_key__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.deref.call(null,titanoboa.systems.selected_node));
});})(map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-off","span.glyphicon.glyphicon-off",-1560507931)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Start system",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart){
return (function (){
return titanoboa.api.update_system_BANG_.call(null,sys_key__$1,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.deref.call(null,titanoboa.systems.selected_node));
});})(map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-play","span.glyphicon.glyphicon-play",-1871300442)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-details","div.systems-details",632223874),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),(cljs.core.truth_(workers__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab_selected),new cljs.core.Keyword(null,"workers","workers",-2054878819)))?"active":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart){
return (function (){
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"workers","workers",-2054878819));
});})(map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart))
], null),"workers"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab_selected),new cljs.core.Keyword(null,"system-def","system-def",1148947705)))?"active":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart){
return (function (){
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"system-def","system-def",1148947705));
});})(map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart))
], null),"system definition"], null)], null),(cljs.core.truth_(worker_def__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab_selected),new cljs.core.Keyword(null,"worker-def","worker-def",-1381841053)))?"active":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart){
return (function (){
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"worker-def","worker-def",-1381841053));
});})(map__8031,map__8031__$1,sys_props__$1,sys_key__$1,state__$1,workers__$1,system_def__$1,worker_def__$1,autostart__$1,tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart))
], null),"worker definition"], null)], null):null)], null),(function (){var G__8033 = (((cljs.core.deref.call(null,tab_selected) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,tab_selected).fqn:null);
switch (G__8033) {
case "workers":
if(cljs.core.truth_(workers__$1)){
return titanoboa.systems.workers_list.call(null,sys_key__$1,workers__$1);
} else {
return cljs.core.reset_BANG_.call(null,tab_selected,new cljs.core.Keyword(null,"system-def","system-def",1148947705));
}

break;
case "system-def":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),"210px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),system_def__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.code_mirror_read_only,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(sys_key__$1),cljs.core.str("system-def-source")].join(''),new cljs.core.Keyword(null,"value","value",305978217),system_def_source,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),false,new cljs.core.Keyword(null,"showTrailingSpace","showTrailingSpace",1619882009),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"native",new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),(10),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"nocursor"], null)], null)], null)], null);

break;
case "worker-def":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),"210px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),worker_def__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.code_mirror_read_only,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(sys_key__$1),cljs.core.str("system-def-source")].join(''),new cljs.core.Keyword(null,"value","value",305978217),worker_def_source,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),false,new cljs.core.Keyword(null,"showTrailingSpace","showTrailingSpace",1619882009),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"native",new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),(10),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"nocursor"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,tab_selected))].join('')));

}
})()], null)], null);
});
;})(tab_selected,map__8028,map__8028__$1,sys_props,sys_key,state,workers,system_def,worker_def,system_def_source,worker_def_source,autostart))
});
titanoboa.systems.systems_list = (function titanoboa$systems$systems_list(p__8035){
var map__8040 = p__8035;
var map__8040__$1 = ((((!((map__8040 == null)))?((((map__8040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8040):map__8040);
var systems = cljs.core.get.call(null,map__8040__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__8040,map__8040__$1,systems){
return (function (p__8042){
var vec__8043 = p__8042;
var k = cljs.core.nth.call(null,vec__8043,(0),null);
var v = cljs.core.nth.call(null,vec__8043,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.system_item,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"sys-key","sys-key",-716469338),k)], null);
});})(map__8040,map__8040__$1,systems))
,systems))], null);
});
titanoboa.systems.systems_tab = (function titanoboa$systems$systems_tab(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.designer-tab","div.designer-tab",-937529570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.cluster_list,cljs.core.deref.call(null,titanoboa.systems.cluster_state),cljs.core.deref.call(null,titanoboa.systems.selected_node)], null),(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.selected_node))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary","div.panel.panel-primary",-1076833638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 10px 0px 0px",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"medium",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.systems-item-title","div.systems-item-title",851391042),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,titanoboa.systems.selected_node)], null)], null),(function (){var G__8047 = (((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.systems.cluster_state),cljs.core.deref.call(null,titanoboa.systems.selected_node))) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.systems.cluster_state),cljs.core.deref.call(null,titanoboa.systems.selected_node))).fqn:null);
switch (G__8047) {
case "live":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-success","span.label.label-success",-156422062),"live"], null);

break;
case "non-responsive":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-warning","span.label.label-warning",-681742177),"not responding"], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-danger","span.label.label-danger",-1648913628),"off"], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-error","span.label.label-error",-608855791),"unknown"], null);

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Last heartbeat age: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-default","span.label.label-default",-277664003),[cljs.core.str(new cljs.core.Keyword(null,"last-hearbeat-age","last-hearbeat-age",-766142048).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.systems.cluster_state),cljs.core.deref.call(null,titanoboa.systems.selected_node)))),cljs.core.str(" ms")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 5px 2px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.systems.selected_view),new cljs.core.Keyword(null,"systems","systems",-1015374944)))?"active":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.selected_view,new cljs.core.Keyword(null,"systems","systems",-1015374944));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Systems"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.systems.selected_view),new cljs.core.Keyword(null,"log","log",-1595516004)))?"active":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.selected_view,new cljs.core.Keyword(null,"log","log",-1595516004));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Log",((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.systems.selected_view),new cljs.core.Keyword(null,"log","log",-1595516004)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return titanoboa.api.get_log.call(null,(function (p1__8045_SHARP_){
var l = cljs.core.doall.call(null,cljs.core.reduce.call(null,(function (v,i){
return [cljs.core.str(i),cljs.core.str("\n"),cljs.core.str(v)].join('');
}),p1__8045_SHARP_));
cljs.core.swap_BANG_.call(null,titanoboa.systems.log_state,cljs.core.assoc,cljs.core.deref.call(null,titanoboa.systems.selected_node),l);

return cljs.core.reset_BANG_.call(null,titanoboa.systems.opened_log,l);
}),(150),cljs.core.deref.call(null,titanoboa.systems.selected_node));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-refresh","span.zmdi.zmdi-refresh",1300044421),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),""], null)], null):null)], null)], null)], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.systems.selected_view),new cljs.core.Keyword(null,"log","log",-1595516004)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.code_mirror_read_only,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("log-for-node-"),cljs.core.str(cljs.core.deref.call(null,titanoboa.systems.selected_node))].join(''),new cljs.core.Keyword(null,"value-atom","value-atom",-887321133),titanoboa.systems.opened_log,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,titanoboa.systems.opened_log),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 5px 2px 2px",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.deref.call(null,titanoboa.designer.win_height_atom) - (180))], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"showTrailingSpace","showTrailingSpace",1619882009),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"native",new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),(10),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"nocursor"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.systems_list,cljs.core.get.call(null,cljs.core.deref.call(null,titanoboa.systems.cluster_state),cljs.core.deref.call(null,titanoboa.systems.selected_node))], null))], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary","div.panel.panel-primary",-1076833638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 10px 0px 0px",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"medium",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 5px 2px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"External Dependencies"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.dependencies_edit))?" active":(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.dependencies_disabled_QMARK_))?" disabled":null)))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.dependencies_edit))){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies_edit,null);
} else {
return titanoboa.api.get_dependencies.call(null,(function (b){
cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(b));

return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies_edit,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(b));
}),(function (e){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies_disabled_QMARK_,true);
}));
}
}),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"edit",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0px 5px 5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-edit","span.zmdi.zmdi-edit",1451607057),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"6px",new cljs.core.Keyword(null,"top","top",-1856271961),"-2px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.dependencies_edit))?"#337ab7":null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default btn-ico-save"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.dependencies_disabled_QMARK_))?" disabled":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return titanoboa.api.save_dependencies_BANG_.call(null,cljs.core.deref.call(null,titanoboa.systems.dependencies),cljs.core.deref.call(null,titanoboa.systems.dependencies_edit),(function (r){
return null;
}));
}),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0px 5px 5px"], null),new cljs.core.Keyword(null,"title","title",636505583),"save"], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,titanoboa.systems.dependencies_disabled_QMARK_))?" disabled":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return titanoboa.api.get_dependencies.call(null,(function (b){
cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(b));

return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies_edit,null);
}),(function (e){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies_disabled_QMARK_,true);
}));
}),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"reload",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0px 5px 5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zmdi.zmdi-refresh","span.zmdi.zmdi-refresh",1300044421),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"6px",new cljs.core.Keyword(null,"top","top",-1856271961),"-2px"], null)], null)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,titanoboa.systems.dependencies_edit)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.code_mirror_read_only,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"cluster ext dependencies",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,titanoboa.systems.dependencies),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 5px 2px 2px"], null),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"showTrailingSpace","showTrailingSpace",1619882009),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"native",new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),(10),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"nocursor"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.code_mirror,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),"cluster ext dependencies edit",new cljs.core.Keyword(null,"value-atom","value-atom",-887321133),titanoboa.systems.dependencies_edit,new cljs.core.Keyword(null,"base-value","base-value",921379228),cljs.core.deref.call(null,titanoboa.systems.dependencies_edit),new cljs.core.Keyword(null,"transform-read-fn","transform-read-fn",-346718559),cljs.core.identity,new cljs.core.Keyword(null,"auto-save?","auto-save?",-785004091),true,new cljs.core.Keyword(null,"transform-write-fn","transform-write-fn",1608502159),(function (val){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"message","message",-406056002),null,new cljs.core.Keyword(null,"value","value",305978217),val], null);
}),new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"autoClearEmptyLines","autoClearEmptyLines",62836823),false,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"native",new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),(10),new cljs.core.Keyword(null,"theme","theme",-1247880880),"mdn-like",new cljs.core.Keyword(null,"styleActiveLine","styleActiveLine",-677594147),true], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 5px 2px 2px"], null)], null)], null))], null))], null);
});
titanoboa.systems.load_systems = (function titanoboa$systems$load_systems(){
return titanoboa.api.list_systems.call(null,(function (p1__8049_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.systems_state,p1__8049_SHARP_);
}));
});
titanoboa.systems.load_cluster = (function titanoboa$systems$load_cluster(){
return titanoboa.api.list_nodes.call(null,(function (p1__8050_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.cluster_state,p1__8050_SHARP_);
}));
});
titanoboa.systems.load_dependencies = (function titanoboa$systems$load_dependencies(){
return titanoboa.api.get_dependencies.call(null,(function (p1__8051_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(p1__8051_SHARP_));
}),(function (e){
return cljs.core.reset_BANG_.call(null,titanoboa.systems.dependencies_disabled_QMARK_,true);
}));
});
