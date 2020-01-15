// Compiled by ClojureScript 1.7.28 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if(typeof fipp.engine.serialize_node !== 'undefined'){
} else {
fipp.engine.serialize_node = (function (){var method_table__5902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5906__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5906__auto__,method_table__5902__auto__,prefer_table__5903__auto__,method_cache__5904__auto__,cached_hierarchy__5905__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp$engine$serialize,doc);
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
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__11078){
var vec__11079 = p__11078;
var _ = cljs.core.nth.call(null,vec__11079,(0),null);
var text = cljs.core.nthnext.call(null,vec__11079,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__11080){
var vec__11081 = p__11080;
var _ = cljs.core.nth.call(null,vec__11081,(0),null);
var text = cljs.core.nthnext.call(null,vec__11081,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__11082){
var vec__11083 = p__11082;
var _ = cljs.core.nth.call(null,vec__11083,(0),null);
var text = cljs.core.nth.call(null,vec__11083,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"text","text",-150030170,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__11084){
var vec__11085 = p__11084;
var _ = cljs.core.nth.call(null,vec__11085,(0),null);
var children = cljs.core.nthnext.call(null,vec__11085,(1));
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__11086){
var vec__11087 = p__11086;
var _ = cljs.core.nth.call(null,vec__11087,(0),null);
var inline = cljs.core.nth.call(null,vec__11087,(1),null);
var terminate = cljs.core.nth.call(null,vec__11087,(2),null);
var inline__$1 = (function (){var or__5008__auto__ = inline;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__5008__auto__ = terminate;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null))))].join('')));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"terminate","terminate",-1398432273,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__11088__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__11088 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__11089__i = 0, G__11089__a = new Array(arguments.length -  0);
while (G__11089__i < G__11089__a.length) {G__11089__a[G__11089__i] = arguments[G__11089__i + 0]; ++G__11089__i;}
  _ = new cljs.core.IndexedSeq(G__11089__a,0);
} 
return G__11088__delegate.call(this,_);};
G__11088.cljs$lang$maxFixedArity = 0;
G__11088.cljs$lang$applyTo = (function (arglist__11090){
var _ = cljs.core.seq(arglist__11090);
return G__11088__delegate(_);
});
G__11088.cljs$core$IFn$_invoke$arity$variadic = G__11088__delegate;
return G__11088;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__11091){
var vec__11092 = p__11091;
var _ = cljs.core.nth.call(null,vec__11092,(0),null);
var children = cljs.core.nthnext.call(null,vec__11092,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__11093){
var vec__11094 = p__11093;
var _ = cljs.core.nth.call(null,vec__11094,(0),null);
var args = cljs.core.nthnext.call(null,vec__11094,(1));
var vec__11095 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var offset = cljs.core.nth.call(null,vec__11095,(0),null);
var children = cljs.core.nthnext.call(null,vec__11095,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__11096){
var vec__11097 = p__11096;
var _ = cljs.core.nth.call(null,vec__11097,(0),null);
var args = cljs.core.nthnext.call(null,vec__11097,(1));
var vec__11098 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var offset = cljs.core.nth.call(null,vec__11098,(0),null);
var children = cljs.core.nthnext.call(null,vec__11098,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 * hypothetical single-line formatting of the document. Groups and indentation
 * directives are temporarily assumed to be zero-width. These values are used
 * by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__11101 = null;
var G__11101__0 = (function (){
return rf.call(null);
});
var G__11101__1 = (function (res){
return rf.call(null,res);
});
var G__11101__2 = (function (res,node){
var delta = (function (){var G__11100 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__11100) {
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
G__11101 = function(res,node){
switch(arguments.length){
case 0:
return G__11101__0.call(this);
case 1:
return G__11101__1.call(this,res);
case 2:
return G__11101__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11101.cljs$core$IFn$_invoke$arity$0 = G__11101__0;
G__11101.cljs$core$IFn$_invoke$arity$1 = G__11101__1;
G__11101.cljs$core$IFn$_invoke$arity$2 = G__11101__2;
return G__11101;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(){
var args__6054__auto__ = [];
var len__6047__auto___11106 = arguments.length;
var i__6048__auto___11107 = (0);
while(true){
if((i__6048__auto___11107 < len__6047__auto___11106)){
args__6054__auto__.push((arguments[i__6048__auto___11107]));

var G__11108 = (i__6048__auto___11107 + (1));
i__6048__auto___11107 = G__11108;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

fipp.engine.update_right.cljs$lang$applyTo = (function (seq11103){
var G__11104 = cljs.core.first.call(null,seq11103);
var seq11103__$1 = cljs.core.next.call(null,seq11103);
var G__11105 = cljs.core.first.call(null,seq11103__$1);
var seq11103__$2 = cljs.core.next.call(null,seq11103__$1);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(G__11104,G__11105,seq11103__$2);
});
/**
 * Given printing options, returns a transducer which annotate the right-side
 * of groups on their :begin nodes.  This includes the pruning algorithm which
 * will annotate some :begin nodes as being :too-far to the right without
 * calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__11109){
var map__11115 = p__11109;
var map__11115__$1 = ((((!((map__11115 == null)))?((((map__11115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11115):map__11115);
var options = map__11115__$1;
var width = cljs.core.get.call(null,map__11115__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__11115,map__11115__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__11115,map__11115__$1,options,width){
return (function() {
var G__11120 = null;
var G__11120__0 = (function (){
return rf.call(null);
});
var G__11120__1 = (function (res){
return rf.call(null,res);
});
var G__11120__2 = (function (res,p__11117){
var map__11118 = p__11117;
var map__11118__$1 = ((((!((map__11118 == null)))?((((map__11118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11118):map__11118);
var node = map__11118__$1;
var op = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"buffers*","buffers*",-1961623915,null))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null))))].join('')));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if(((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width))){
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

var G__11121 = buffers_STAR__STAR_;
var G__11122 = res_STAR___$1;
buffers_STAR_ = G__11121;
res__$1 = G__11122;
continue;
}
}
break;
}
}
}
});
G__11120 = function(res,p__11117){
switch(arguments.length){
case 0:
return G__11120__0.call(this);
case 1:
return G__11120__1.call(this,res);
case 2:
return G__11120__2.call(this,res,p__11117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11120.cljs$core$IFn$_invoke$arity$0 = G__11120__0;
G__11120.cljs$core$IFn$_invoke$arity$1 = G__11120__1;
G__11120.cljs$core$IFn$_invoke$arity$2 = G__11120__2;
return G__11120;
})()
;})(pos,bufs,map__11115,map__11115__$1,options,width))
});
;})(map__11115,map__11115__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 * laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__11123){
var map__11130 = p__11123;
var map__11130__$1 = ((((!((map__11130 == null)))?((((map__11130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);
var options = map__11130__$1;
var width = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__11130,map__11130__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__11130,map__11130__$1,options,width){
return (function() {
var G__11136 = null;
var G__11136__0 = (function (){
return rf.call(null);
});
var G__11136__1 = (function (res){
return rf.call(null,res);
});
var G__11136__2 = (function (res,p__11132){
var map__11133 = p__11132;
var map__11133__$1 = ((((!((map__11133 == null)))?((((map__11133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11133):map__11133);
var node = map__11133__$1;
var op = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__11135 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__11135) {
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
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str("\n")].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

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
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__5320__auto__ = (0);
var y__5321__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__5320__auto__ > y__5321__auto__) ? x__5320__auto__ : y__5321__auto__);
})());

return res;

break;
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
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__11136 = function(res,p__11132){
switch(arguments.length){
case 0:
return G__11136__0.call(this);
case 1:
return G__11136__1.call(this,res);
case 2:
return G__11136__2.call(this,res,p__11132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11136.cljs$core$IFn$_invoke$arity$0 = G__11136__0;
G__11136.cljs$core$IFn$_invoke$arity$1 = G__11136__1;
G__11136.cljs$core$IFn$_invoke$arity$2 = G__11136__2;
return G__11136;
})()
;})(fits,length,tab_stops,column,map__11130,map__11130__$1,options,width))
});
;})(map__11130,map__11130__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_11138__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_11138__$1),fipp.engine.format_nodes.call(null,options_11138__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});
