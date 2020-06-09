// Compiled by ClojureScript 1.10.238 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if(typeof fipp.engine.serialize_node !== 'undefined'){
} else {
fipp.engine.serialize_node = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__8789){
var vec__8790 = p__8789;
var seq__8791 = cljs.core.seq.call(null,vec__8790);
var first__8792 = cljs.core.first.call(null,seq__8791);
var seq__8791__$1 = cljs.core.next.call(null,seq__8791);
var _ = first__8792;
var text = seq__8791__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__8793){
var vec__8794 = p__8793;
var seq__8795 = cljs.core.seq.call(null,vec__8794);
var first__8796 = cljs.core.first.call(null,seq__8795);
var seq__8795__$1 = cljs.core.next.call(null,seq__8795);
var _ = first__8796;
var text = seq__8795__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__8797){
var vec__8798 = p__8797;
var _ = cljs.core.nth.call(null,vec__8798,(0),null);
var text = cljs.core.nth.call(null,vec__8798,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__8801){
var vec__8802 = p__8801;
var seq__8803 = cljs.core.seq.call(null,vec__8802);
var first__8804 = cljs.core.first.call(null,seq__8803);
var seq__8803__$1 = cljs.core.next.call(null,seq__8803);
var _ = first__8804;
var children = seq__8803__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__8805){
var vec__8806 = p__8805;
var _ = cljs.core.nth.call(null,vec__8806,(0),null);
var inline = cljs.core.nth.call(null,vec__8806,(1),null);
var terminate = cljs.core.nth.call(null,vec__8806,(2),null);
var inline__$1 = (function (){var or__3922__auto__ = inline;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__3922__auto__ = terminate;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__8809__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__8809 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8810__i = 0, G__8810__a = new Array(arguments.length -  0);
while (G__8810__i < G__8810__a.length) {G__8810__a[G__8810__i] = arguments[G__8810__i + 0]; ++G__8810__i;}
  _ = new cljs.core.IndexedSeq(G__8810__a,0,null);
} 
return G__8809__delegate.call(this,_);};
G__8809.cljs$lang$maxFixedArity = 0;
G__8809.cljs$lang$applyTo = (function (arglist__8811){
var _ = cljs.core.seq(arglist__8811);
return G__8809__delegate(_);
});
G__8809.cljs$core$IFn$_invoke$arity$variadic = G__8809__delegate;
return G__8809;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__8812){
var vec__8813 = p__8812;
var seq__8814 = cljs.core.seq.call(null,vec__8813);
var first__8815 = cljs.core.first.call(null,seq__8814);
var seq__8814__$1 = cljs.core.next.call(null,seq__8814);
var _ = first__8815;
var children = seq__8814__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__8816){
var vec__8817 = p__8816;
var seq__8818 = cljs.core.seq.call(null,vec__8817);
var first__8819 = cljs.core.first.call(null,seq__8818);
var seq__8818__$1 = cljs.core.next.call(null,seq__8818);
var _ = first__8819;
var args = seq__8818__$1;
var vec__8820 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__8821 = cljs.core.seq.call(null,vec__8820);
var first__8822 = cljs.core.first.call(null,seq__8821);
var seq__8821__$1 = cljs.core.next.call(null,seq__8821);
var offset = first__8822;
var children = seq__8821__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__8823){
var vec__8824 = p__8823;
var seq__8825 = cljs.core.seq.call(null,vec__8824);
var first__8826 = cljs.core.first.call(null,seq__8825);
var seq__8825__$1 = cljs.core.next.call(null,seq__8825);
var _ = first__8826;
var args = seq__8825__$1;
var vec__8827 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__8828 = cljs.core.seq.call(null,vec__8827);
var first__8829 = cljs.core.first.call(null,seq__8828);
var seq__8828__$1 = cljs.core.next.call(null,seq__8828);
var offset = first__8829;
var children = seq__8828__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__8831 = null;
var G__8831__0 = (function (){
return rf.call(null);
});
var G__8831__1 = (function (res){
return rf.call(null,res);
});
var G__8831__2 = (function (res,node){
var delta = (function (){var G__8830 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__8830__$1 = (((G__8830 instanceof cljs.core.Keyword))?G__8830.fqn:null);
switch (G__8830__$1) {
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__8831 = function(res,node){
switch(arguments.length){
case 0:
return G__8831__0.call(this);
case 1:
return G__8831__1.call(this,res);
case 2:
return G__8831__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__8831.cljs$core$IFn$_invoke$arity$0 = G__8831__0;
G__8831.cljs$core$IFn$_invoke$arity$1 = G__8831__1;
G__8831.cljs$core$IFn$_invoke$arity$2 = G__8831__2;
return G__8831;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8836 = arguments.length;
var i__4500__auto___8837 = (0);
while(true){
if((i__4500__auto___8837 < len__4499__auto___8836)){
args__4502__auto__.push((arguments[i__4500__auto___8837]));

var G__8838 = (i__4500__auto___8837 + (1));
i__4500__auto___8837 = G__8838;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq8833){
var G__8834 = cljs.core.first.call(null,seq8833);
var seq8833__$1 = cljs.core.next.call(null,seq8833);
var G__8835 = cljs.core.first.call(null,seq8833__$1);
var seq8833__$2 = cljs.core.next.call(null,seq8833__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8834,G__8835,seq8833__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__8839){
var map__8840 = p__8839;
var map__8840__$1 = ((((!((map__8840 == null)))?(((((map__8840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8840):map__8840);
var options = map__8840__$1;
var width = cljs.core.get.call(null,map__8840__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__8840,map__8840__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__8840,map__8840__$1,options,width){
return (function() {
var G__8845 = null;
var G__8845__0 = (function (){
return rf.call(null);
});
var G__8845__1 = (function (res){
return rf.call(null,res);
});
var G__8845__2 = (function (res,p__8842){
var map__8843 = p__8842;
var map__8843__$1 = ((((!((map__8843 == null)))?(((((map__8843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8843):map__8843);
var node = map__8843__$1;
var op = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__8846 = buffers_STAR__STAR_;
var G__8847 = res_STAR___$1;
buffers_STAR_ = G__8846;
res__$1 = G__8847;
continue;
}
}
break;
}
}
}
});
G__8845 = function(res,p__8842){
switch(arguments.length){
case 0:
return G__8845__0.call(this);
case 1:
return G__8845__1.call(this,res);
case 2:
return G__8845__2.call(this,res,p__8842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__8845.cljs$core$IFn$_invoke$arity$0 = G__8845__0;
G__8845.cljs$core$IFn$_invoke$arity$1 = G__8845__1;
G__8845.cljs$core$IFn$_invoke$arity$2 = G__8845__2;
return G__8845;
})()
;})(pos,bufs,map__8840,map__8840__$1,options,width))
});
;})(map__8840,map__8840__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__8848){
var map__8849 = p__8848;
var map__8849__$1 = ((((!((map__8849 == null)))?(((((map__8849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8849):map__8849);
var options = map__8849__$1;
var width = cljs.core.get.call(null,map__8849__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__8849,map__8849__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__8849,map__8849__$1,options,width){
return (function() {
var G__8855 = null;
var G__8855__0 = (function (){
return rf.call(null);
});
var G__8855__1 = (function (res){
return rf.call(null,res);
});
var G__8855__2 = (function (res,p__8851){
var map__8852 = p__8851;
var map__8852__$1 = ((((!((map__8852 == null)))?(((((map__8852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8852):map__8852);
var node = map__8852__$1;
var op = cljs.core.get.call(null,map__8852__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__8852__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__8854 = op;
var G__8854__$1 = (((G__8854 instanceof cljs.core.Keyword))?G__8854.fqn:null);
switch (G__8854__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__8855 = function(res,p__8851){
switch(arguments.length){
case 0:
return G__8855__0.call(this);
case 1:
return G__8855__1.call(this,res);
case 2:
return G__8855__2.call(this,res,p__8851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__8855.cljs$core$IFn$_invoke$arity$0 = G__8855__0;
G__8855.cljs$core$IFn$_invoke$arity$1 = G__8855__1;
G__8855.cljs$core$IFn$_invoke$arity$2 = G__8855__2;
return G__8855;
})()
;})(fits,length,tab_stops,column,map__8849,map__8849__$1,options,width))
});
;})(map__8849,map__8849__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_8857__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_8857__$1),fipp.engine.format_nodes.call(null,options_8857__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});
