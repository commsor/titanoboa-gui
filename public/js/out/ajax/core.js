// Compiled by ClojureScript 1.7.28 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
* @param {*} name
* @param {*} request
* @param {*} response
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k11468,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__11470 = (((k11468 instanceof cljs.core.Keyword))?k11468.fqn:null);
switch (G__11470) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11468,else__5606__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__11471,opts){
var self__ = this;
var map__11472 = p__11471;
var map__11472__$1 = ((((!((map__11472 == null)))?((((map__11472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11472):map__11472);
var request__$1 = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__11474 = this;
var map__11474__$1 = ((((!((map__11474 == null)))?((((map__11474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11474):map__11474);
var request__$2 = cljs.core.get.call(null,map__11474__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__11476,xhrio){
var self__ = this;
var map__11477 = p__11476;
var map__11477__$1 = ((((!((map__11477 == null)))?((((map__11477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11477):map__11477);
var response__$1 = cljs.core.get.call(null,map__11477__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__11479 = this;
var map__11479__$1 = ((((!((map__11479 == null)))?((((map__11479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11479):map__11479);
var response__$2 = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11467){
var self__ = this;
var G__11467__$1 = this;
return (new cljs.core.RecordIter((0),G__11467__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_imap.call(null,this__5598__auto____$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
var self__ = this;
var this__5599__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4996__auto__ = other__5600__auto__;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (this__5599__auto____$1.constructor === other__5600__auto__.constructor);
if(and__4996__auto____$1){
return cljs.core.equiv_map.call(null,this__5599__auto____$1,other__5600__auto__);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__11467){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__11481 = cljs.core.keyword_identical_QMARK_;
var expr__11482 = k__5611__auto__;
if(cljs.core.truth_(pred__11481.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__11482))){
return (new ajax.core.StandardInterceptor(G__11467,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11481.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__11482))){
return (new ajax.core.StandardInterceptor(self__.name,G__11467,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11481.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__11482))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__11467,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__11467),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__11467){
var self__ = this;
var this__5602__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__11467,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__11469){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__11469),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__11469),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__11469),null,cljs.core.dissoc.call(null,G__11469,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__5008__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__11485,xhrio){
var map__11488 = p__11485;
var map__11488__$1 = ((((!((map__11488 == null)))?((((map__11488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11488):map__11488);
var description = cljs.core.get.call(null,map__11488__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(){
var args__6054__auto__ = [];
var len__6047__auto___11494 = arguments.length;
var i__6048__auto___11495 = (0);
while(true){
if((i__6048__auto___11495 < len__6047__auto___11494)){
args__6054__auto__.push((arguments[i__6048__auto___11495]));

var G__11496 = (i__6048__auto___11495 + (1));
i__6048__auto___11495 = G__11496;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((3) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6055__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq11490){
var G__11491 = cljs.core.first.call(null,seq11490);
var seq11490__$1 = cljs.core.next.call(null,seq11490);
var G__11492 = cljs.core.first.call(null,seq11490__$1);
var seq11490__$2 = cljs.core.next.call(null,seq11490__$1);
var G__11493 = cljs.core.first.call(null,seq11490__$2);
var seq11490__$3 = cljs.core.next.call(null,seq11490__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__11491,G__11492,G__11493,seq11490__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
* @param {*} read
* @param {*} description
* @param {*} content_type
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k11499,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__11501 = (((k11499 instanceof cljs.core.Keyword))?k11499.fqn:null);
switch (G__11501) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11499,else__5606__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__11502,request){
var self__ = this;
var map__11503 = p__11502;
var map__11503__$1 = ((((!((map__11503 == null)))?((((map__11503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11503):map__11503);
var content_type__$1 = cljs.core.get.call(null,map__11503__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__11505 = this;
var map__11505__$1 = ((((!((map__11505 == null)))?((((map__11505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11505):map__11505);
var content_type__$2 = cljs.core.get.call(null,map__11505__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__11505,map__11505__$1,content_type__$2,map__11503,map__11503__$1,content_type__$1){
return (function (p1__11497_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__5008__auto__ = p1__11497_SHARP_;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__11505,map__11505__$1,content_type__$2,map__11503,map__11503__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__11507,xhrio){
var self__ = this;
var map__11508 = p__11507;
var map__11508__$1 = ((((!((map__11508 == null)))?((((map__11508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11508):map__11508);
var format = map__11508__$1;
var read__$1 = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__11510 = this;
var map__11510__$1 = ((((!((map__11510 == null)))?((((map__11510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11510):map__11510);
var format__$1 = map__11510__$1;
var read__$2 = cljs.core.get.call(null,map__11510__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__11513 = status;
switch (G__11513) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e11514){if((e11514 instanceof Object)){
var e = e11514;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e11514;

}
}
}
}catch (e11512){if((e11512 instanceof Object)){
var e = e11512;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e11512;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11498){
var self__ = this;
var G__11498__$1 = this;
return (new cljs.core.RecordIter((0),G__11498__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_imap.call(null,this__5598__auto____$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
var self__ = this;
var this__5599__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4996__auto__ = other__5600__auto__;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (this__5599__auto____$1.constructor === other__5600__auto__.constructor);
if(and__4996__auto____$1){
return cljs.core.equiv_map.call(null,this__5599__auto____$1,other__5600__auto__);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__11498){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__11515 = cljs.core.keyword_identical_QMARK_;
var expr__11516 = k__5611__auto__;
if(cljs.core.truth_(pred__11515.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__11516))){
return (new ajax.core.ResponseFormat(G__11498,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11515.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__11516))){
return (new ajax.core.ResponseFormat(self__.read,G__11498,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11515.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__11516))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__11498,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__11498),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__11498){
var self__ = this;
var this__5602__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__11498,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__11500){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__11500),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__11500),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__11500),null,cljs.core.dissoc.call(null,G__11500,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(){
var args11520 = [];
var len__6047__auto___11523 = arguments.length;
var i__6048__auto___11524 = (0);
while(true){
if((i__6048__auto___11524 < len__6047__auto___11523)){
args11520.push((arguments[i__6048__auto___11524]));

var G__11525 = (i__6048__auto___11524 + (1));
i__6048__auto___11524 = G__11525;
continue;
} else {
}
break;
}

var G__11522 = args11520.length;
switch (G__11522) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11520.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(){
var args11527 = [];
var len__6047__auto___11534 = arguments.length;
var i__6048__auto___11535 = (0);
while(true){
if((i__6048__auto___11535 < len__6047__auto___11534)){
args11527.push((arguments[i__6048__auto___11535]));

var G__11536 = (i__6048__auto___11535 + (1));
i__6048__auto___11535 = G__11536;
continue;
} else {
}
break;
}

var G__11529 = args11527.length;
switch (G__11529) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11527.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__11530){
var vec__11531 = p__11530;
var key = cljs.core.nth.call(null,vec__11531,(0),null);
var value = cljs.core.nth.call(null,vec__11531,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__11532){
var vec__11533 = p__11532;
var key = cljs.core.nth.call(null,vec__11533,(0),null);
var value = cljs.core.nth.call(null,vec__11533,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__11540){
var vec__11541 = p__11540;
var k = cljs.core.nth.call(null,vec__11541,(0),null);
var v = cljs.core.nth.call(null,vec__11541,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(){
var args11542 = [];
var len__6047__auto___11545 = arguments.length;
var i__6048__auto___11546 = (0);
while(true){
if((i__6048__auto___11546 < len__6047__auto___11545)){
args11542.push((arguments[i__6048__auto___11546]));

var G__11547 = (i__6048__auto___11546 + (1));
i__6048__auto___11546 = G__11547;
continue;
} else {
}
break;
}

var G__11544 = args11542.length;
switch (G__11544) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11542.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
* @param {*} params_to_str
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k11550,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__11552 = (((k11550 instanceof cljs.core.Keyword))?k11550.fqn:null);
switch (G__11552) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11550,else__5606__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__11553){
var self__ = this;
var map__11554 = p__11553;
var map__11554__$1 = ((((!((map__11554 == null)))?((((map__11554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11554):map__11554);
var request = map__11554__$1;
var method = cljs.core.get.call(null,map__11554__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#ajax.core.ProcessGet{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11549){
var self__ = this;
var G__11549__$1 = this;
return (new cljs.core.RecordIter((0),G__11549__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_imap.call(null,this__5598__auto____$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
var self__ = this;
var this__5599__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4996__auto__ = other__5600__auto__;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (this__5599__auto____$1.constructor === other__5600__auto__.constructor);
if(and__4996__auto____$1){
return cljs.core.equiv_map.call(null,this__5599__auto____$1,other__5600__auto__);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__11549){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__11556 = cljs.core.keyword_identical_QMARK_;
var expr__11557 = k__5611__auto__;
if(cljs.core.truth_(pred__11556.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__11557))){
return (new ajax.core.ProcessGet(G__11549,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__11549),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__11549){
var self__ = this;
var this__5602__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__11549,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__11551){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__11551),null,cljs.core.dissoc.call(null,G__11551,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k11561,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__11563 = k11561;
switch (G__11563) {
default:
return cljs.core.get.call(null,self__.__extmap,k11561,else__5606__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__11564){
var self__ = this;
var map__11565 = p__11564;
var map__11565__$1 = ((((!((map__11565 == null)))?((((map__11565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11565):map__11565);
var request = map__11565__$1;
var body = cljs.core.get.call(null,map__11565__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__11565__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11560){
var self__ = this;
var G__11560__$1 = this;
return (new cljs.core.RecordIter((0),G__11560__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_imap.call(null,this__5598__auto____$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
var self__ = this;
var this__5599__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4996__auto__ = other__5600__auto__;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (this__5599__auto____$1.constructor === other__5600__auto__.constructor);
if(and__4996__auto____$1){
return cljs.core.equiv_map.call(null,this__5599__auto____$1,other__5600__auto__);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__11560){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__11567 = cljs.core.keyword_identical_QMARK_;
var expr__11568 = k__5611__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__11560),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__11560){
var self__ = this;
var this__5602__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__11560,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__11562){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__11562),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k11572,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__11574 = k11572;
switch (G__11574) {
default:
return cljs.core.get.call(null,self__.__extmap,k11572,else__5606__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__11575){
var self__ = this;
var map__11576 = p__11575;
var map__11576__$1 = ((((!((map__11576 == null)))?((((map__11576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11576):map__11576);
var request = map__11576__$1;
var uri = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__11578 = ajax.core.get_request_format.call(null,format);
var map__11578__$1 = ((((!((map__11578 == null)))?((((map__11578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11578):map__11578);
var write = cljs.core.get.call(null,map__11578__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__11578__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__5008__auto__ = headers;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11571){
var self__ = this;
var G__11571__$1 = this;
return (new cljs.core.RecordIter((0),G__11571__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
var h__5424__auto__ = self__.__hash;
if(!((h__5424__auto__ == null))){
return h__5424__auto__;
} else {
var h__5424__auto____$1 = cljs.core.hash_imap.call(null,this__5598__auto____$1);
self__.__hash = h__5424__auto____$1;

return h__5424__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
var self__ = this;
var this__5599__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4996__auto__ = other__5600__auto__;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (this__5599__auto____$1.constructor === other__5600__auto__.constructor);
if(and__4996__auto____$1){
return cljs.core.equiv_map.call(null,this__5599__auto____$1,other__5600__auto__);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__11571){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__11580 = cljs.core.keyword_identical_QMARK_;
var expr__11581 = k__5611__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__11571),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__11571){
var self__ = this;
var this__5602__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__11571,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__11573){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__11573),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__11584){
var map__11587 = p__11584;
var map__11587__$1 = ((((!((map__11587 == null)))?((((map__11587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11587):map__11587);
var type = cljs.core.get.call(null,map__11587__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__5008__auto__ = type;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__5008__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var args11589 = [];
var len__6047__auto___11592 = arguments.length;
var i__6048__auto___11593 = (0);
while(true){
if((i__6048__auto___11593 < len__6047__auto___11592)){
args11589.push((arguments[i__6048__auto___11593]));

var G__11594 = (i__6048__auto___11593 + (1));
i__6048__auto___11593 = G__11594;
continue;
} else {
}
break;
}

var G__11591 = args11589.length;
switch (G__11591) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11589.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__5008__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var args11596 = [];
var len__6047__auto___11599 = arguments.length;
var i__6048__auto___11600 = (0);
while(true){
if((i__6048__auto___11600 < len__6047__auto___11599)){
args11596.push((arguments[i__6048__auto___11600]));

var G__11601 = (i__6048__auto___11600 + (1));
i__6048__auto___11600 = G__11601;
continue;
} else {
}
break;
}

var G__11598 = args11596.length;
switch (G__11598) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11596.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var args11603 = [];
var len__6047__auto___11606 = arguments.length;
var i__6048__auto___11607 = (0);
while(true){
if((i__6048__auto___11607 < len__6047__auto___11606)){
args11603.push((arguments[i__6048__auto___11607]));

var G__11608 = (i__6048__auto___11607 + (1));
i__6048__auto___11607 = G__11608;
continue;
} else {
}
break;
}

var G__11605 = args11603.length;
switch (G__11605) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11603.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__4996__auto__ = prefix;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4996__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(){
var args11610 = [];
var len__6047__auto___11613 = arguments.length;
var i__6048__auto___11614 = (0);
while(true){
if((i__6048__auto___11614 < len__6047__auto___11613)){
args11610.push((arguments[i__6048__auto___11614]));

var G__11615 = (i__6048__auto___11614 + (1));
i__6048__auto___11614 = G__11615;
continue;
} else {
}
break;
}

var G__11612 = args11610.length;
switch (G__11612) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11610.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var args11617 = [];
var len__6047__auto___11623 = arguments.length;
var i__6048__auto___11624 = (0);
while(true){
if((i__6048__auto___11624 < len__6047__auto___11623)){
args11617.push((arguments[i__6048__auto___11624]));

var G__11625 = (i__6048__auto___11624 + (1));
i__6048__auto___11624 = G__11625;
continue;
} else {
}
break;
}

var G__11619 = args11617.length;
switch (G__11619) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11617.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__11620){
var map__11621 = p__11620;
var map__11621__$1 = ((((!((map__11621 == null)))?((((map__11621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11621):map__11621);
var prefix = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(){
var args11627 = [];
var len__6047__auto___11630 = arguments.length;
var i__6048__auto___11631 = (0);
while(true){
if((i__6048__auto___11631 < len__6047__auto___11630)){
args11627.push((arguments[i__6048__auto___11631]));

var G__11632 = (i__6048__auto___11631 + (1));
i__6048__auto___11631 = G__11632;
continue;
} else {
}
break;
}

var G__11629 = args11627.length;
switch (G__11629) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11627.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(){
var args11634 = [];
var len__6047__auto___11637 = arguments.length;
var i__6048__auto___11638 = (0);
while(true){
if((i__6048__auto___11638 < len__6047__auto___11637)){
args11634.push((arguments[i__6048__auto___11638]));

var G__11639 = (i__6048__auto___11638 + (1));
i__6048__auto___11638 = G__11639;
continue;
} else {
}
break;
}

var G__11636 = args11634.length;
switch (G__11636) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11634.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(){
var args11641 = [];
var len__6047__auto___11644 = arguments.length;
var i__6048__auto___11645 = (0);
while(true){
if((i__6048__auto___11645 < len__6047__auto___11644)){
args11641.push((arguments[i__6048__auto___11645]));

var G__11646 = (i__6048__auto___11645 + (1));
i__6048__auto___11645 = G__11646;
continue;
} else {
}
break;
}

var G__11643 = args11641.length;
switch (G__11643) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11641.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var args11648 = [];
var len__6047__auto___11651 = arguments.length;
var i__6048__auto___11652 = (0);
while(true){
if((i__6048__auto___11652 < len__6047__auto___11651)){
args11648.push((arguments[i__6048__auto___11652]));

var G__11653 = (i__6048__auto___11652 + (1));
i__6048__auto___11652 = G__11653;
continue;
} else {
}
break;
}

var G__11650 = args11648.length;
switch (G__11650) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11648.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__11655){
var map__11658 = p__11655;
var map__11658__$1 = ((((!((map__11658 == null)))?((((map__11658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11658):map__11658);
var request = map__11658__$1;
var response_format = cljs.core.get.call(null,map__11658__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var args11660 = [];
var len__6047__auto___11663 = arguments.length;
var i__6048__auto___11664 = (0);
while(true){
if((i__6048__auto___11664 < len__6047__auto___11663)){
args11660.push((arguments[i__6048__auto___11664]));

var G__11665 = (i__6048__auto___11664 + (1));
i__6048__auto___11664 = G__11665;
continue;
} else {
}
break;
}

var G__11662 = args11660.length;
switch (G__11662) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11660.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__11667){
var map__11670 = p__11667;
var map__11670__$1 = ((((!((map__11670 == null)))?((((map__11670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11670):map__11670);
var request = map__11670__$1;
var response_format = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var args11672 = [];
var len__6047__auto___11675 = arguments.length;
var i__6048__auto___11676 = (0);
while(true){
if((i__6048__auto___11676 < len__6047__auto___11675)){
args11672.push((arguments[i__6048__auto___11676]));

var G__11677 = (i__6048__auto___11676 + (1));
i__6048__auto___11676 = G__11677;
continue;
} else {
}
break;
}

var G__11674 = args11672.length;
switch (G__11674) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11672.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__11679){
var map__11682 = p__11679;
var map__11682__$1 = ((((!((map__11682 == null)))?((((map__11682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11682):map__11682);
var opts = map__11682__$1;
var response_format = cljs.core.get.call(null,map__11682__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var args11684 = [];
var len__6047__auto___11687 = arguments.length;
var i__6048__auto___11688 = (0);
while(true){
if((i__6048__auto___11688 < len__6047__auto___11687)){
args11684.push((arguments[i__6048__auto___11688]));

var G__11689 = (i__6048__auto___11688 + (1));
i__6048__auto___11688 = G__11689;
continue;
} else {
}
break;
}

var G__11686 = args11684.length;
switch (G__11686) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11684.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__11691){
var map__11694 = p__11691;
var map__11694__$1 = ((((!((map__11694 == null)))?((((map__11694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11694):map__11694);
var handler = cljs.core.get.call(null,map__11694__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__11696_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__5008__auto__ = p1__11696_SHARP_;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__11697){
var map__11700 = p__11697;
var map__11700__$1 = ((((!((map__11700 == null)))?((((map__11700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11700):map__11700);
var request = map__11700__$1;
var interceptors = cljs.core.get.call(null,map__11700__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__5008__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__11703 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__11703) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__11706 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__11706) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__11708_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__11708_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
});
ajax.core.default_handler = cljs.core.atom.call(null,ajax.core.print_response);
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
});
ajax.core.default_error_handler = cljs.core.atom.call(null,ajax.core.print_error_response);
ajax.core.transform_handler = (function ajax$core$transform_handler(p__11709){
var map__11715 = p__11709;
var map__11715__$1 = ((((!((map__11715 == null)))?((((map__11715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11715):map__11715);
var handler = cljs.core.get.call(null,map__11715__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__11715__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__11715__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__5008__auto__ = handler;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_handler);
}
})();
var e = (function (){var or__5008__auto__ = error_handler;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__11715,map__11715__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__11717){
var vec__11719 = p__11717;
var ok = cljs.core.nth.call(null,vec__11719,(0),null);
var result = cljs.core.nth.call(null,vec__11719,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__11715,map__11715__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__11720){
var map__11723 = p__11720;
var map__11723__$1 = ((((!((map__11723 == null)))?((((map__11723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11723):map__11723);
var opts = map__11723__$1;
var method = cljs.core.get.call(null,map__11723__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__11723__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__11723__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__11723__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__11723__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__5008__auto__ = format;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var args__6054__auto__ = [];
var len__6047__auto___11727 = arguments.length;
var i__6048__auto___11728 = (0);
while(true){
if((i__6048__auto___11728 < len__6047__auto___11727)){
args__6054__auto__.push((arguments[i__6048__auto___11728]));

var G__11729 = (i__6048__auto___11728 + (1));
i__6048__auto___11728 = G__11729;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq11725){
var G__11726 = cljs.core.first.call(null,seq11725);
var seq11725__$1 = cljs.core.next.call(null,seq11725);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__11726,seq11725__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var args__6054__auto__ = [];
var len__6047__auto___11732 = arguments.length;
var i__6048__auto___11733 = (0);
while(true){
if((i__6048__auto___11733 < len__6047__auto___11732)){
args__6054__auto__.push((arguments[i__6048__auto___11733]));

var G__11734 = (i__6048__auto___11733 + (1));
i__6048__auto___11733 = G__11734;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq11730){
var G__11731 = cljs.core.first.call(null,seq11730);
var seq11730__$1 = cljs.core.next.call(null,seq11730);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__11731,seq11730__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var args__6054__auto__ = [];
var len__6047__auto___11737 = arguments.length;
var i__6048__auto___11738 = (0);
while(true){
if((i__6048__auto___11738 < len__6047__auto___11737)){
args__6054__auto__.push((arguments[i__6048__auto___11738]));

var G__11739 = (i__6048__auto___11738 + (1));
i__6048__auto___11738 = G__11739;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq11735){
var G__11736 = cljs.core.first.call(null,seq11735);
var seq11735__$1 = cljs.core.next.call(null,seq11735);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__11736,seq11735__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var args__6054__auto__ = [];
var len__6047__auto___11742 = arguments.length;
var i__6048__auto___11743 = (0);
while(true){
if((i__6048__auto___11743 < len__6047__auto___11742)){
args__6054__auto__.push((arguments[i__6048__auto___11743]));

var G__11744 = (i__6048__auto___11743 + (1));
i__6048__auto___11743 = G__11744;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq11740){
var G__11741 = cljs.core.first.call(null,seq11740);
var seq11740__$1 = cljs.core.next.call(null,seq11740);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__11741,seq11740__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var args__6054__auto__ = [];
var len__6047__auto___11747 = arguments.length;
var i__6048__auto___11748 = (0);
while(true){
if((i__6048__auto___11748 < len__6047__auto___11747)){
args__6054__auto__.push((arguments[i__6048__auto___11748]));

var G__11749 = (i__6048__auto___11748 + (1));
i__6048__auto___11748 = G__11749;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq11745){
var G__11746 = cljs.core.first.call(null,seq11745);
var seq11745__$1 = cljs.core.next.call(null,seq11745);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__11746,seq11745__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var args__6054__auto__ = [];
var len__6047__auto___11752 = arguments.length;
var i__6048__auto___11753 = (0);
while(true){
if((i__6048__auto___11753 < len__6047__auto___11752)){
args__6054__auto__.push((arguments[i__6048__auto___11753]));

var G__11754 = (i__6048__auto___11753 + (1));
i__6048__auto___11753 = G__11754;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq11750){
var G__11751 = cljs.core.first.call(null,seq11750);
var seq11750__$1 = cljs.core.next.call(null,seq11750);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__11751,seq11750__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var args__6054__auto__ = [];
var len__6047__auto___11757 = arguments.length;
var i__6048__auto___11758 = (0);
while(true){
if((i__6048__auto___11758 < len__6047__auto___11757)){
args__6054__auto__.push((arguments[i__6048__auto___11758]));

var G__11759 = (i__6048__auto___11758 + (1));
i__6048__auto___11758 = G__11759;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq11755){
var G__11756 = cljs.core.first.call(null,seq11755);
var seq11755__$1 = cljs.core.next.call(null,seq11755);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__11756,seq11755__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(){
var args__6054__auto__ = [];
var len__6047__auto___11762 = arguments.length;
var i__6048__auto___11763 = (0);
while(true){
if((i__6048__auto___11763 < len__6047__auto___11762)){
args__6054__auto__.push((arguments[i__6048__auto___11763]));

var G__11764 = (i__6048__auto___11763 + (1));
i__6048__auto___11763 = G__11764;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7365__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__7365__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7365__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq11760){
var G__11761 = cljs.core.first.call(null,seq11760);
var seq11760__$1 = cljs.core.next.call(null,seq11760);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__11761,seq11760__$1);
});
