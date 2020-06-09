// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
return reagent.impl.template.as_element(x);
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((c["cljsReactClass"]) == null))));
});
reagent.impl.component.do_render_sub = (function reagent$impl$component$do_render_sub(c){
while(true){
var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error("Assert failed: (ifn? f)"))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?f.call(null,c):(function (){var argv = (p["argv"]);
var n = cljs.core.count.call(null,argv);
var G__6102 = n;
switch (G__6102) {
case (1):
return f.call(null);

break;
case (2):
return f.call(null,cljs.core.nth.call(null,argv,(1)));

break;
case (3):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)));

break;
case (4):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)),cljs.core.nth.call(null,argv,(3)));

break;
case (5):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)),cljs.core.nth.call(null,argv,(3)),cljs.core.nth.call(null,argv,(4)));

break;
default:
return cljs.core.apply.call(null,f,cljs.core.subvec.call(null,argv,(1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = (cljs.core.truth_(reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,p,res){
return (function() { 
var G__6104__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__6104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6105__i = 0, G__6105__a = new Array(arguments.length -  0);
while (G__6105__i < G__6105__a.length) {G__6105__a[G__6105__i] = arguments[G__6105__i + 0]; ++G__6105__i;}
  args = new cljs.core.IndexedSeq(G__6105__a,0,null);
} 
return G__6104__delegate.call(this,args);};
G__6104.cljs$lang$maxFixedArity = 0;
G__6104.cljs$lang$applyTo = (function (arglist__6106){
var args = cljs.core.seq(arglist__6106);
return G__6104__delegate(args);
});
G__6104.cljs$core$IFn$_invoke$arity$variadic = G__6104__delegate;
return G__6104;
})()
;})(c,f,_,p,res))
:res);
(c["cljsRender"] = f__$1);

var G__6107 = c;
c = G__6107;
continue;
} else {
return res;
}
}
break;
}
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_6108 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var ok = [false];
try{var res = reagent.impl.component.do_render_sub.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
console.error(["Error rendering component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join(''));
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_6108;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var c = this;
if(cljs.core.not.call(null,reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively.call(null,c,((function (c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(c))
);
} else {
return reagent.impl.component.do_render.call(null,c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__6109 = key;
var G__6109__$1 = (((G__6109 instanceof cljs.core.Keyword))?G__6109.fqn:null);
switch (G__6109__$1) {
case "getDefaultProps":
throw (new Error(["Assert failed: ","getDefaultProps not supported yet","\n","false"].join('')));


break;
case "getInitialState":
return ((function (G__6109,G__6109__$1){
return (function (){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(null,c));
});
;})(G__6109,G__6109__$1))

break;
case "componentWillReceiveProps":
return ((function (G__6109,G__6109__$1){
return (function (props){
var c = this;
return f.call(null,c,(props["argv"]));
});
;})(G__6109,G__6109__$1))

break;
case "shouldComponentUpdate":
return ((function (G__6109,G__6109__$1){
return (function (nextprops,nextstate){
var or__3922__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return (((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.call(null,old_argv,new_argv)));
} else {
return f.call(null,c,old_argv,new_argv);
}
}
});
;})(G__6109,G__6109__$1))

break;
case "componentWillUpdate":
return ((function (G__6109,G__6109__$1){
return (function (nextprops){
var c = this;
return f.call(null,c,(nextprops["argv"]));
});
;})(G__6109,G__6109__$1))

break;
case "componentDidUpdate":
return ((function (G__6109,G__6109__$1){
return (function (oldprops){
var c = this;
return f.call(null,c,(oldprops["argv"]));
});
;})(G__6109,G__6109__$1))

break;
case "componentWillMount":
return ((function (G__6109,G__6109__$1){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(null,c);
}
});
;})(G__6109,G__6109__$1))

break;
case "componentWillUnmount":
return ((function (G__6109,G__6109__$1){
return (function (){
var c = this;
reagent.impl.batching.dispose.call(null,c);

if((f == null)){
return null;
} else {
return f.call(null,c);
}
});
;})(G__6109,G__6109__$1))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
return (function() { 
var G__6111__delegate = function (args){
var c = this;
return cljs.core.apply.call(null,f,c,args);
};
var G__6111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6112__i = 0, G__6112__a = new Array(arguments.length -  0);
while (G__6112__i < G__6112__a.length) {G__6112__a[G__6112__i] = arguments[G__6112__i + 0]; ++G__6112__i;}
  args = new cljs.core.IndexedSeq(G__6112__a,0,null);
} 
return G__6111__delegate.call(this,args);};
G__6111.cljs$lang$maxFixedArity = 0;
G__6111.cljs$lang$applyTo = (function (arglist__6113){
var args = cljs.core.seq(arglist__6113);
return G__6111__delegate(args);
});
G__6111.cljs$core$IFn$_invoke$arity$variadic = G__6111__delegate;
return G__6111;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cljsRender","cljsRender",247449928),null,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"cljsName","cljsName",999824949),null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_.call(null,f)){
var G__6114 = f;
(G__6114["__reactDontBind"] = true);

return G__6114;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_(reagent.impl.component.dont_wrap.call(null,key))){
return reagent.impl.component.dont_bind.call(null,f);
} else {
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__3911__auto__ = wrap;
if(cljs.core.truth_(and__3911__auto__)){
return f;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected function in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),"\n","(ifn? f)"].join('')));
}
} else {
}

var or__3922__auto__ = wrap;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return reagent.impl.component.default_wrapper.call(null,f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"cljsRender","cljsRender",247449928),render_f,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
return cljs.core.assoc.call(null,fm,new cljs.core.Keyword(null,"cljsName","cljsName",999824949),((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__3911__auto__){
var or__3922__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (f["name"]);
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = ((!((f == null)))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__3911__auto__){
return cljs.core.name.call(null,f);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__5722__auto__ = new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__5722__auto__ == null)){
return fmap;
} else {
var cf = temp__5722__auto__;
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,fmap,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),cf),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104));
}
})();
var render_fun = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_.call(null,render_fun))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Render must be a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,render_fun))].join('')),"\n","(ifn? render-fun)"].join('')))})());
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return reagent.impl.component.fun_name.call(null,render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_.call(null,name))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"))].join(''):clojure.string.replace.call(null,name,/\$/,"."));
var fmap__$1 = reagent.impl.component.add_render.call(null,cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv.call(null,((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__6119 = o;
(G__6119[cljs.core.name.call(null,k)] = v);

return G__6119;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var spec = reagent.impl.component.cljsify.call(null,body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__6120__delegate = function (args){
if(typeof console !== 'undefined'){
console.warn(["Warning: ","Calling the result of create-class as a function is ","deprecated in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((res["displayName"])),". Use a vector ","instead."].join(''));
} else {
}

return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__6120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6121__i = 0, G__6121__a = new Array(arguments.length -  0);
while (G__6121__i < G__6121__a.length) {G__6121__a[G__6121__i] = arguments[G__6121__i + 0]; ++G__6121__i;}
  args = new cljs.core.IndexedSeq(G__6121__a,0,null);
} 
return G__6120__delegate.call(this,args);};
G__6120.cljs$lang$maxFixedArity = 0;
G__6120.cljs$lang$applyTo = (function (arglist__6122){
var args = cljs.core.seq(arglist__6122);
return G__6120__delegate(args);
});
G__6120.cljs$core$IFn$_invoke$arity$variadic = G__6120__delegate;
return G__6120;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class.call(null,f,res);

reagent.impl.util.cache_react_class.call(null,res,res);

return f;
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var elem = (function (){var G__6123 = (function (){var or__3922__auto__ = (function (){var G__6125 = c;
if((G__6125 == null)){
return null;
} else {
return (G__6125["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return c;
}
})();
if((G__6123 == null)){
return null;
} else {
return (G__6123["_currentElement"]);
}
})();
var name = (function (){var G__6126 = elem;
var G__6126__$1 = (((G__6126 == null))?null:(G__6126["type"]));
if((G__6126__$1 == null)){
return null;
} else {
return (G__6126__$1["displayName"]);
}
})();
var path = (function (){var G__6127 = elem;
var G__6127__$1 = (((G__6127 == null))?null:(G__6127["_owner"]));
var G__6127__$2 = (((G__6127__$1 == null))?null:reagent.impl.component.component_path.call(null,G__6127__$1));
if((G__6127__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6127__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__3922__auto__ = reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__6128 = c;
if((G__6128 == null)){
return null;
} else {
return (G__6128["cljsName"])();
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__6129(s__6130){
return (new cljs.core.LazySeq(null,(function (){
var s__6130__$1 = s__6130;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__6130__$1);
if(temp__5720__auto__){
var s__6130__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6130__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6130__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6132 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6131 = (0);
while(true){
if((i__6131 < size__4291__auto__)){
var k = cljs.core._nth.call(null,c__4290__auto__,i__6131);
cljs.core.chunk_append.call(null,b__6132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(o[k])], null));

var G__6133 = (i__6131 + (1));
i__6131 = G__6133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6132),reagent$impl$component$shallow_obj_to_map_$_iter__6129.call(null,cljs.core.chunk_rest.call(null,s__6130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6132),null);
}
} else {
var k = cljs.core.first.call(null,s__6130__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__6129.call(null,cljs.core.rest.call(null,s__6130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.js_keys.call(null,o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])(({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.call(null,reagent.impl.component.shallow_obj_to_map.call(null,(this$["props"])),new cljs.core.Keyword(null,"-elem-count","-elem-count",663797079),reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})}));
});
