// Compiled by ClojureScript 1.7.28 {}
goog.provide('clojure.core.rrb_vector.trees');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.trees.tail_offset = (function clojure$core$rrb_vector$trees$tail_offset(cnt,tail){
return (cnt - tail.length);
});
clojure.core.rrb_vector.trees.array_for = (function clojure$core$rrb_vector$trees$array_for(cnt,shift,root,tail,i){
if((((0) <= i)) && ((i < cnt))){
if((i >= clojure.core.rrb_vector.trees.tail_offset.call(null,cnt,tail))){
return tail;
} else {
var i__$1 = i;
var node = root;
var shift__$1 = shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__11394 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__11395 = (shift__$2 - (5));
node__$1 = G__11394;
shift__$2 = G__11395;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__11396 = (j + (1));
j = G__11396;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__11397 = i__$2;
var G__11398 = (node.arr[j]);
var G__11399 = (shift__$1 - (5));
i__$1 = G__11397;
node = G__11398;
shift__$1 = G__11399;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,cnt);
}
});
clojure.core.rrb_vector.trees.new_path = (function clojure$core$rrb_vector$trees$new_path(tail,edit,shift,current_node){
if((tail.length === (32))){
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);
(arr[(0)] = n);

var G__11400 = (s + (5));
var G__11401 = ret;
s = G__11400;
n = G__11401;
continue;
}
break;
}
} else {
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);
(arr[(0)] = n);

(arr[(32)] = rngs);

(rngs[(32)] = (1));

(rngs[(0)] = tail.length);

var G__11402 = (s + (5));
var G__11403 = ret;
s = G__11402;
n = G__11403;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.trees.push_tail = (function clojure$core$rrb_vector$trees$push_tail(shift,cnt,root_edit,current_node,tail_node){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node))){
var arr = cljs.core.aclone.call(null,current_node.arr);
var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
var n_11404 = ret;
var shift_11405__$1 = shift;
while(true){
var arr_11406__$1 = n_11404.arr;
var subidx_11407 = (((cnt - (1)) >> shift_11405__$1) & (31));
if((shift_11405__$1 === (5))){
(arr_11406__$1[subidx_11407] = tail_node);
} else {
var temp__4423__auto___11408 = (arr_11406__$1[subidx_11407]);
if(cljs.core.truth_(temp__4423__auto___11408)){
var child_11409 = temp__4423__auto___11408;
var new_carr_11410 = cljs.core.aclone.call(null,child_11409.arr);
var new_child_11411 = cljs.core.__GT_VectorNode.call(null,root_edit,new_carr_11410);
(arr_11406__$1[subidx_11407] = new_child_11411);

var G__11412 = new_child_11411;
var G__11413 = (shift_11405__$1 - (5));
n_11404 = G__11412;
shift_11405__$1 = G__11413;
continue;
} else {
(arr_11406__$1[subidx_11407] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_11405__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
return clojure$core$rrb_vector$trees$push_tail.call(null,(shift - (5)),(ccnt + (1)),root_edit,child,tail_node);
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
clojure.core.rrb_vector.trees.pop_tail = (function clojure$core$rrb_vector$trees$pop_tail(shift,cnt,root_edit,current_node){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node))){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var new_child = clojure$core$rrb_vector$trees$pop_tail.call(null,(shift - (5)),cnt,root_edit,(current_node.arr[subidx]));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
(arr[subidx] = new_child);

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
(arr[subidx] = null);

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if(((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31)))){
return subidx__$1;
} else {
var G__11414 = (subidx__$1 + (1));
subidx__$1 = G__11414;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone.call(null,rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = clojure$core$rrb_vector$trees$pop_tail.call(null,(shift - (5)),child_cnt,root_edit,child);
if(((new_child == null)) && ((subidx__$1 === (0)))){
return null;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child))){
var arr = cljs.core.aclone.call(null,current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else {
var rng = clojure.core.rrb_vector.nodes.last_range.call(null,child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range.call(null,new_child):(0)));
var arr = cljs.core.aclone.call(null,current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var child = (arr[subidx__$1]);
var new_rngs__$1 = cljs.core.aclone.call(null,rngs);
(arr[subidx__$1] = null);

(arr[(32)] = new_rngs__$1);

(new_rngs__$1[subidx__$1] = (0));

(new_rngs__$1[(32)] = ((new_rngs__$1[(32)]) - (1)));

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
}
});
clojure.core.rrb_vector.trees.do_assoc = (function clojure$core$rrb_vector$trees$do_assoc(shift,current_node,i,val){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node))){
var node = clojure.core.rrb_vector.nodes.clone.call(null,shift,current_node);
var shift_11415__$1 = shift;
var node_11416__$1 = node;
while(true){
if((shift_11415__$1 === (0))){
var arr_11417 = node_11416__$1.arr;
(arr_11417[(i & (31))] = val);
} else {
var arr_11418 = node_11416__$1.arr;
var subidx_11419 = ((i >> shift_11415__$1) & (31));
var child_11420 = clojure.core.rrb_vector.nodes.clone.call(null,shift_11415__$1,(arr_11418[subidx_11419]));
(arr_11418[subidx_11419] = child_11420);

var G__11421 = (shift_11415__$1 - (5));
var G__11422 = child_11420;
shift_11415__$1 = G__11421;
node_11416__$1 = G__11422;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__11423 = (subidx__$1 + (1));
subidx__$1 = G__11423;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = clojure$core$rrb_vector$trees$do_assoc.call(null,(shift - (5)),(arr[subidx__$1]),i__$1,val));

return cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
}
});
