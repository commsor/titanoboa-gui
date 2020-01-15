// Compiled by ClojureScript 1.7.28 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16928 = arguments.length;
var i__6048__auto___16929 = (0);
while(true){
if((i__6048__auto___16929 < len__6047__auto___16928)){
args__6054__auto__.push((arguments[i__6048__auto___16929]));

var G__16930 = (i__6048__auto___16929 + (1));
i__6048__auto___16929 = G__16930;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16921){
var map__16922 = p__16921;
var map__16922__$1 = ((((!((map__16922 == null)))?((((map__16922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16922):map__16922);
var args = map__16922__$1;
var model = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__16919_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16919_SHARP_));
});})(current,tabs__$1,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16919#","p1__16919#",239674806,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16919#","p1__16919#",239674806,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__5761__auto__ = ((function (current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__16924(s__16925){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__16925__$1 = s__16925;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16925__$1);
if(temp__4425__auto__){
var s__16925__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16925__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__16925__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__16927 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__16926 = (0);
while(true){
if((i__16926 < size__5760__auto__)){
var t = cljs.core._nth.call(null,c__5759__auto__,i__16926);
cljs.core.chunk_append.call(null,b__16927,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16926,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16927,s__16925__$2,temp__4425__auto__,current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16926,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16927,s__16925__$2,temp__4425__auto__,current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__16931 = (i__16926 + (1));
i__16926 = G__16931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16927),re_com$tabs$iter__16924.call(null,cljs.core.chunk_rest.call(null,s__16925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16927),null);
}
} else {
var t = cljs.core.first.call(null,s__16925__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16925__$2,temp__4425__auto__,current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16925__$2,temp__4425__auto__,current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__16924.call(null,cljs.core.rest.call(null,s__16925__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__16922,map__16922__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__5761__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq16920){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16920));
});
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16941 = arguments.length;
var i__6048__auto___16942 = (0);
while(true){
if((i__6048__auto___16942 < len__6047__auto___16941)){
args__6054__auto__.push((arguments[i__6048__auto___16942]));

var G__16943 = (i__6048__auto___16942 + (1));
i__6048__auto___16942 = G__16943;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16934){
var map__16935 = p__16934;
var map__16935__$1 = ((((!((map__16935 == null)))?((((map__16935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16935):map__16935);
var model = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__16935__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__16932_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16932_SHARP_));
});})(current,tabs__$1,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16932#","p1__16932#",829787037,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16932#","p1__16932#",829787037,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__5761__auto__ = ((function (current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__16937(s__16938){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__16938__$1 = s__16938;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16938__$1);
if(temp__4425__auto__){
var s__16938__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16938__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__16938__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__16940 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__16939 = (0);
while(true){
if((i__16939 < size__5760__auto__)){
var t = cljs.core._nth.call(null,c__5759__auto__,i__16939);
cljs.core.chunk_append.call(null,b__16940,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16939,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16940,s__16938__$2,temp__4425__auto__,current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16939,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16940,s__16938__$2,temp__4425__auto__,current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__16944 = (i__16939 + (1));
i__16939 = G__16944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16940),re_com$tabs$iter__16937.call(null,cljs.core.chunk_rest.call(null,s__16938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16940),null);
}
} else {
var t = cljs.core.first.call(null,s__16938__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16938__$2,temp__4425__auto__,current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16938__$2,temp__4425__auto__,current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__16937.call(null,cljs.core.rest.call(null,s__16938__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__16935,map__16935__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__5761__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq16933){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16933));
});
re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16949 = arguments.length;
var i__6048__auto___16950 = (0);
while(true){
if((i__6048__auto___16950 < len__6047__auto___16949)){
args__6054__auto__.push((arguments[i__6048__auto___16950]));

var G__16951 = (i__6048__auto___16950 + (1));
i__6048__auto___16950 = G__16951;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16946){
var map__16947 = p__16946;
var map__16947__$1 = ((((!((map__16947 == null)))?((((map__16947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16947):map__16947);
var args = map__16947__$1;
var model = cljs.core.get.call(null,map__16947__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16947__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16947__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16947__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__16947__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16947__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq16945){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16945));
});
re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16956 = arguments.length;
var i__6048__auto___16957 = (0);
while(true){
if((i__6048__auto___16957 < len__6047__auto___16956)){
args__6054__auto__.push((arguments[i__6048__auto___16957]));

var G__16958 = (i__6048__auto___16957 + (1));
i__6048__auto___16957 = G__16958;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16953){
var map__16954 = p__16953;
var map__16954__$1 = ((((!((map__16954 == null)))?((((map__16954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16954):map__16954);
var args = map__16954__$1;
var model = cljs.core.get.call(null,map__16954__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16954__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16954__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16954__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__16954__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16954__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq16952){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16952));
});
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16968 = arguments.length;
var i__6048__auto___16969 = (0);
while(true){
if((i__6048__auto___16969 < len__6047__auto___16968)){
args__6054__auto__.push((arguments[i__6048__auto___16969]));

var G__16970 = (i__6048__auto___16969 + (1));
i__6048__auto___16969 = G__16970;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16961){
var map__16962 = p__16961;
var map__16962__$1 = ((((!((map__16962 == null)))?((((map__16962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16962):map__16962);
var model = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__16962__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__16959_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16959_SHARP_));
});})(current,tabs__$1,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16959#","p1__16959#",2086477581,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16959#","p1__16959#",2086477581,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__5761__auto__ = ((function (current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__16964(s__16965){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__16965__$1 = s__16965;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16965__$1);
if(temp__4425__auto__){
var s__16965__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16965__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__16965__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__16967 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__16966 = (0);
while(true){
if((i__16966 < size__5760__auto__)){
var t = cljs.core._nth.call(null,c__5759__auto__,i__16966);
cljs.core.chunk_append.call(null,b__16967,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16966,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16967,s__16965__$2,temp__4425__auto__,current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16966,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16967,s__16965__$2,temp__4425__auto__,current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__16971 = (i__16966 + (1));
i__16966 = G__16971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16967),re_com$tabs$iter__16964.call(null,cljs.core.chunk_rest.call(null,s__16965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16967),null);
}
} else {
var t = cljs.core.first.call(null,s__16965__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16965__$2,temp__4425__auto__,current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16965__$2,temp__4425__auto__,current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__16964.call(null,cljs.core.rest.call(null,s__16965__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__16962,map__16962__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__5761__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq16960){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16960));
});
re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16976 = arguments.length;
var i__6048__auto___16977 = (0);
while(true){
if((i__6048__auto___16977 < len__6047__auto___16976)){
args__6054__auto__.push((arguments[i__6048__auto___16977]));

var G__16978 = (i__6048__auto___16977 + (1));
i__6048__auto___16977 = G__16978;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16973){
var map__16974 = p__16973;
var map__16974__$1 = ((((!((map__16974 == null)))?((((map__16974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16974):map__16974);
var args = map__16974__$1;
var model = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq16972){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16972));
});
re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16983 = arguments.length;
var i__6048__auto___16984 = (0);
while(true){
if((i__6048__auto___16984 < len__6047__auto___16983)){
args__6054__auto__.push((arguments[i__6048__auto___16984]));

var G__16985 = (i__6048__auto___16984 + (1));
i__6048__auto___16984 = G__16985;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16980){
var map__16981 = p__16980;
var map__16981__$1 = ((((!((map__16981 == null)))?((((map__16981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16981):map__16981);
var args = map__16981__$1;
var model = cljs.core.get.call(null,map__16981__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16981__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16981__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16981__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__16981__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16981__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq16979){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16979));
});
