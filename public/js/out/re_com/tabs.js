// Compiled by ClojureScript 1.7.28 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16846 = arguments.length;
var i__6048__auto___16847 = (0);
while(true){
if((i__6048__auto___16847 < len__6047__auto___16846)){
args__6054__auto__.push((arguments[i__6048__auto___16847]));

var G__16848 = (i__6048__auto___16847 + (1));
i__6048__auto___16847 = G__16848;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16839){
var map__16840 = p__16839;
var map__16840__$1 = ((((!((map__16840 == null)))?((((map__16840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16840):map__16840);
var args = map__16840__$1;
var model = cljs.core.get.call(null,map__16840__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16840__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16840__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16840__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__16840__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16840__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__16837_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16837_SHARP_));
});})(current,tabs__$1,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16837#","p1__16837#",-1520779805,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16837#","p1__16837#",-1520779805,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__5761__auto__ = ((function (current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__16842(s__16843){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__16843__$1 = s__16843;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16843__$1);
if(temp__4425__auto__){
var s__16843__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16843__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__16843__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__16845 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__16844 = (0);
while(true){
if((i__16844 < size__5760__auto__)){
var t = cljs.core._nth.call(null,c__5759__auto__,i__16844);
cljs.core.chunk_append.call(null,b__16845,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16844,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16845,s__16843__$2,temp__4425__auto__,current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16844,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16845,s__16843__$2,temp__4425__auto__,current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__16849 = (i__16844 + (1));
i__16844 = G__16849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16845),re_com$tabs$iter__16842.call(null,cljs.core.chunk_rest.call(null,s__16843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16845),null);
}
} else {
var t = cljs.core.first.call(null,s__16843__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16843__$2,temp__4425__auto__,current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16843__$2,temp__4425__auto__,current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__16842.call(null,cljs.core.rest.call(null,s__16843__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__16840,map__16840__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__5761__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq16838){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16838));
});
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16859 = arguments.length;
var i__6048__auto___16860 = (0);
while(true){
if((i__6048__auto___16860 < len__6047__auto___16859)){
args__6054__auto__.push((arguments[i__6048__auto___16860]));

var G__16861 = (i__6048__auto___16860 + (1));
i__6048__auto___16860 = G__16861;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16852){
var map__16853 = p__16852;
var map__16853__$1 = ((((!((map__16853 == null)))?((((map__16853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16853):map__16853);
var model = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__16850_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16850_SHARP_));
});})(current,tabs__$1,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16850#","p1__16850#",734562306,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16850#","p1__16850#",734562306,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__5761__auto__ = ((function (current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__16855(s__16856){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__16856__$1 = s__16856;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16856__$1);
if(temp__4425__auto__){
var s__16856__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16856__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__16856__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__16858 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__16857 = (0);
while(true){
if((i__16857 < size__5760__auto__)){
var t = cljs.core._nth.call(null,c__5759__auto__,i__16857);
cljs.core.chunk_append.call(null,b__16858,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16857,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16858,s__16856__$2,temp__4425__auto__,current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16857,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16858,s__16856__$2,temp__4425__auto__,current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__16862 = (i__16857 + (1));
i__16857 = G__16862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16858),re_com$tabs$iter__16855.call(null,cljs.core.chunk_rest.call(null,s__16856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16858),null);
}
} else {
var t = cljs.core.first.call(null,s__16856__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16856__$2,temp__4425__auto__,current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16856__$2,temp__4425__auto__,current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__16855.call(null,cljs.core.rest.call(null,s__16856__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__16853,map__16853__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__5761__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq16851){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16851));
});
re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16867 = arguments.length;
var i__6048__auto___16868 = (0);
while(true){
if((i__6048__auto___16868 < len__6047__auto___16867)){
args__6054__auto__.push((arguments[i__6048__auto___16868]));

var G__16869 = (i__6048__auto___16868 + (1));
i__6048__auto___16868 = G__16869;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16864){
var map__16865 = p__16864;
var map__16865__$1 = ((((!((map__16865 == null)))?((((map__16865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16865):map__16865);
var args = map__16865__$1;
var model = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16865__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq16863){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16863));
});
re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16874 = arguments.length;
var i__6048__auto___16875 = (0);
while(true){
if((i__6048__auto___16875 < len__6047__auto___16874)){
args__6054__auto__.push((arguments[i__6048__auto___16875]));

var G__16876 = (i__6048__auto___16875 + (1));
i__6048__auto___16875 = G__16876;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16871){
var map__16872 = p__16871;
var map__16872__$1 = ((((!((map__16872 == null)))?((((map__16872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16872):map__16872);
var args = map__16872__$1;
var model = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq16870){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16870));
});
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16886 = arguments.length;
var i__6048__auto___16887 = (0);
while(true){
if((i__6048__auto___16887 < len__6047__auto___16886)){
args__6054__auto__.push((arguments[i__6048__auto___16887]));

var G__16888 = (i__6048__auto___16887 + (1));
i__6048__auto___16887 = G__16888;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16879){
var map__16880 = p__16879;
var map__16880__$1 = ((((!((map__16880 == null)))?((((map__16880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16880):map__16880);
var model = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__16880__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__16877_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16877_SHARP_));
});})(current,tabs__$1,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16877#","p1__16877#",475550990,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16877#","p1__16877#",475550990,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__5761__auto__ = ((function (current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__16882(s__16883){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__16883__$1 = s__16883;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16883__$1);
if(temp__4425__auto__){
var s__16883__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16883__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__16883__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__16885 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__16884 = (0);
while(true){
if((i__16884 < size__5760__auto__)){
var t = cljs.core._nth.call(null,c__5759__auto__,i__16884);
cljs.core.chunk_append.call(null,b__16885,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16884,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16885,s__16883__$2,temp__4425__auto__,current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16884,id,label,selected_QMARK_,t,c__5759__auto__,size__5760__auto__,b__16885,s__16883__$2,temp__4425__auto__,current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__16889 = (i__16884 + (1));
i__16884 = G__16889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16885),re_com$tabs$iter__16882.call(null,cljs.core.chunk_rest.call(null,s__16883__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16885),null);
}
} else {
var t = cljs.core.first.call(null,s__16883__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16883__$2,temp__4425__auto__,current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16883__$2,temp__4425__auto__,current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__16882.call(null,cljs.core.rest.call(null,s__16883__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__16880,map__16880__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__5761__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq16878){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16878));
});
re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16894 = arguments.length;
var i__6048__auto___16895 = (0);
while(true){
if((i__6048__auto___16895 < len__6047__auto___16894)){
args__6054__auto__.push((arguments[i__6048__auto___16895]));

var G__16896 = (i__6048__auto___16895 + (1));
i__6048__auto___16895 = G__16896;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16891){
var map__16892 = p__16891;
var map__16892__$1 = ((((!((map__16892 == null)))?((((map__16892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16892):map__16892);
var args = map__16892__$1;
var model = cljs.core.get.call(null,map__16892__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16892__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16892__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16892__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__16892__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16892__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq16890){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16890));
});
re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(){
var args__6054__auto__ = [];
var len__6047__auto___16901 = arguments.length;
var i__6048__auto___16902 = (0);
while(true){
if((i__6048__auto___16902 < len__6047__auto___16901)){
args__6054__auto__.push((arguments[i__6048__auto___16902]));

var G__16903 = (i__6048__auto___16902 + (1));
i__6048__auto___16902 = G__16903;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16898){
var map__16899 = p__16898;
var map__16899__$1 = ((((!((map__16899 == null)))?((((map__16899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16899):map__16899);
var args = map__16899__$1;
var model = cljs.core.get.call(null,map__16899__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__16899__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__16899__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__16899__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__16899__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16899__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq16897){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16897));
});