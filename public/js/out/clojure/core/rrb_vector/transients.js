// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.rrb_vector.transients');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone.call(null,node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone.call(null,(new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy.call(null,tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret))){
var n_4985 = ret;
var shift_4986__$1 = shift;
while(true){
var arr_4987 = n_4985.arr;
var subidx_4988 = (((cnt - (1)) >> shift_4986__$1) & (31));
if((shift_4986__$1 === (5))){
(arr_4987[subidx_4988] = tail_node);
} else {
var child_4989 = (arr_4987[subidx_4988]);
if((child_4989 == null)){
(arr_4987[subidx_4988] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_4986__$1 - (5)),tail_node));
} else {
var editable_child_4990 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,child_4989);
(arr_4987[subidx_4988] = editable_child_4990);

var G__4991 = editable_child_4990;
var G__4992 = (shift_4986__$1 - (5));
n_4985 = G__4991;
shift_4986__$1 = G__4992;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
return clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,(shift - (5)),(ccnt + (1)),root_edit,child,tail_node);
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret))){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,(shift - (5)),cnt,root_edit,(ret.arr[subidx]));
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__4993 = (subidx__$1 + (1));
subidx__$1 = G__4993;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,(shift - (5)),child_cnt,root_edit,child);
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child))){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range.call(null,child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range.call(null,new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret))){
var shift_4994__$1 = shift;
var node_4995 = ret;
while(true){
if((shift_4994__$1 === (0))){
var arr_4996 = node_4995.arr;
(arr_4996[(i & (31))] = val);
} else {
var arr_4997 = node_4995.arr;
var subidx_4998 = ((i >> shift_4994__$1) & (31));
var child_4999 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr_4997[subidx_4998]));
(arr_4997[subidx_4998] = child_4999);

var G__5000 = (shift_4994__$1 - (5));
var G__5001 = child_4999;
shift_4994__$1 = G__5000;
node_4995 = G__5001;
continue;
}
break;
}
} else {
var arr_5002 = ret.arr;
var rngs_5003 = clojure.core.rrb_vector.nodes.ranges.call(null,ret);
var subidx_5004 = ((i >> shift) & (31));
var subidx_5005__$1 = (function (){var subidx__$1 = subidx_5004;
while(true){
if((i < ((rngs_5003[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__5007 = (subidx__$1 + (1));
subidx__$1 = G__5007;
continue;
}
break;
}
})();
var i_5006__$1 = (((subidx_5005__$1 === (0)))?i:(i - (rngs_5003[(subidx_5005__$1 - (1))])));
(arr_5002[subidx_5005__$1] = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,(shift - (5)),root_edit,(arr_5002[subidx_5005__$1]),i_5006__$1,val));
}

return ret;
});
