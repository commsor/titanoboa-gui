// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 */
cljs_time.core.DateTimeProtocol = {};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.year[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.month[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.day[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.hour[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.minute[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.sec[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.second[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.milli[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$,that);
} else {
var m__5645__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$,that);
} else {
var m__5645__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$,that);
} else {
var m__5645__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.plus_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$,period);
} else {
var m__5645__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.minus_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$,period);
} else {
var m__5645__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 */
cljs_time.core.InTimeUnitProtocol = {};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_days[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_months[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__5644__auto__ = (((this$ == null))?null:this$);
var m__5645__auto__ = (cljs_time.core.in_years[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,this$);
} else {
var m__5645__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
* @param {*} start
* @param {*} end
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k16600,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__16602 = (((k16600 instanceof cljs.core.Keyword))?k16600.fqn:null);
switch (G__16602) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16600,else__5606__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#cljs-time.core.Interval{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16599){
var self__ = this;
var G__16599__$1 = this;
return (new cljs.core.RecordIter((0),G__16599__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
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

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
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

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__16599){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__16603 = cljs.core.keyword_identical_QMARK_;
var expr__16604 = k__5611__auto__;
if(cljs.core.truth_(pred__16603.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__16604))){
return (new cljs_time.core.Interval(G__16599,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16603.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__16604))){
return (new cljs_time.core.Interval(self__.start,G__16599,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__16599),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__16599){
var self__ = this;
var this__5602__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__16599,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__16601){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__16601),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__16601),null,cljs.core.dissoc.call(null,G__16601,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 * Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"end","end",1372345569,null)))))].join('')));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
* @param {*} years
* @param {*} months
* @param {*} weeks
* @param {*} days
* @param {*} hours
* @param {*} minutes
* @param {*} seconds
* @param {*} millis
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5603__auto__,k__5604__auto__){
var self__ = this;
var this__5603__auto____$1 = this;
return cljs.core._lookup.call(null,this__5603__auto____$1,k__5604__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5605__auto__,k16608,else__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
var G__16610 = (((k16608 instanceof cljs.core.Keyword))?k16608.fqn:null);
switch (G__16610) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16608,else__5606__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5617__auto__,writer__5618__auto__,opts__5619__auto__){
var self__ = this;
var this__5617__auto____$1 = this;
var pr_pair__5620__auto__ = ((function (this__5617__auto____$1){
return (function (keyval__5621__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,cljs.core.pr_writer,""," ","",opts__5619__auto__,keyval__5621__auto__);
});})(this__5617__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5618__auto__,pr_pair__5620__auto__,"#cljs-time.core.Period{",", ","}",opts__5619__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16607){
var self__ = this;
var G__16607__$1 = this;
return (new cljs.core.RecordIter((0),G__16607__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5601__auto__){
var self__ = this;
var this__5601__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5607__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5598__auto__){
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

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5599__auto__,other__5600__auto__){
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

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5612__auto__,k__5613__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__5613__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5612__auto____$1),self__.__meta),k__5613__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5613__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5610__auto__,k__5611__auto__,G__16607){
var self__ = this;
var this__5610__auto____$1 = this;
var pred__16611 = cljs.core.keyword_identical_QMARK_;
var expr__16612 = k__5611__auto__;
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__16612))){
return (new cljs_time.core.Period(G__16607,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__16612))){
return (new cljs_time.core.Period(self__.years,G__16607,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__16612))){
return (new cljs_time.core.Period(self__.years,self__.months,G__16607,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__16612))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__16607,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__16612))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__16607,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__16612))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__16607,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__16612))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__16607,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16611.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__16612))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__16607,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5611__auto__,G__16607),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5615__auto__){
var self__ = this;
var this__5615__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5602__auto__,G__16607){
var self__ = this;
var this__5602__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__16607,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5608__auto__,entry__5609__auto__){
var self__ = this;
var this__5608__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5609__auto__)){
return cljs.core._assoc.call(null,this__5608__auto____$1,cljs.core._nth.call(null,entry__5609__auto__,(0)),cljs.core._nth.call(null,entry__5609__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5608__auto____$1,entry__5609__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__5637__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__5637__auto__,writer__5638__auto__){
return cljs.core._write.call(null,writer__5638__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__16609){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__16609),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__16609),null,cljs.core.dissoc.call(null,G__16609,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(){
var args16615 = [];
var len__6047__auto___16621 = arguments.length;
var i__6048__auto___16622 = (0);
while(true){
if((i__6048__auto___16622 < len__6047__auto___16621)){
args16615.push((arguments[i__6048__auto___16622]));

var G__16623 = (i__6048__auto___16622 + (1));
i__6048__auto___16622 = G__16623;
continue;
} else {
}
break;
}

var G__16620 = args16615.length;
switch (G__16620) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args16615.slice((2)),(0)));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6066__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,new cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq16616){
var G__16617 = cljs.core.first.call(null,seq16616);
var seq16616__$1 = cljs.core.next.call(null,seq16616);
var G__16618 = cljs.core.first.call(null,seq16616__$1);
var seq16616__$2 = cljs.core.next.call(null,seq16616__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__16617,G__16618,seq16616__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"millis","millis",-1338288387),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__16625_SHARP_,p2__16626_SHARP_){
return p1__16625_SHARP_.setMilliseconds(p2__16626_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__16627_SHARP_,p2__16628_SHARP_){
return p1__16627_SHARP_.setSeconds(p2__16628_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"minutes","minutes",1319166394),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__16629_SHARP_,p2__16630_SHARP_){
return p1__16629_SHARP_.setMinutes(p2__16630_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__16631_SHARP_,p2__16632_SHARP_){
return p1__16631_SHARP_.setHours(p2__16632_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__16633_SHARP_,p2__16634_SHARP_){
return p1__16633_SHARP_.setDate(p2__16634_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"weeks","weeks",1844596125),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),((7) * value)));
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"months","months",-45571637),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_16635 = op.call(null,(0),value);
var i_16636 = (new goog.date.Interval(goog.date.Interval.MONTHS,m_16635));
date__$1.add(i_16636);
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"years","years",-1298579689),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__4996__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = cljs_time.core._EQ_.call(null,(2),cljs_time.core.month.call(null,date__$1));
if(cljs.core.truth_(and__4996__auto____$1)){
return cljs_time.core._EQ_.call(null,(29),cljs_time.core.day.call(null,date__$1));
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.call(null,(function (d,p__16639){
var vec__16640 = p__16639;
var k = cljs.core.nth.call(null,vec__16640,(0),null);
var v = cljs.core.nth.call(null,vec__16640,(1),null);
return cljs_time.core.periods.call(null,k).call(null,operator,d,v);
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
cljs_time.core.utc = {"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY};
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return Date.now();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return (Date.now() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__16642 = (new goog.date.UtcDateTime());
G__16642.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__16642;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 * in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__16644 = (new goog.date.DateTime());
G__16644.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__16644;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__16646 = datetime__$1;
G__16646.setHours((0));

G__16646.setMinutes((0));

G__16646.setSeconds((0));

G__16646.setMilliseconds((0));

return G__16646;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__16648 = (new goog.date.UtcDateTime());
G__16648.setTime((0));

return G__16648;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 * Specify the year, month of year, day of month. Note that month and day are
 * 1-indexed. Any number of least-significant components can be ommited, in
 * which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(){
var args16649 = [];
var len__6047__auto___16652 = arguments.length;
var i__6048__auto___16653 = (0);
while(true){
if((i__6048__auto___16653 < len__6047__auto___16652)){
args16649.push((arguments[i__6048__auto___16653]));

var G__16654 = (i__6048__auto___16653 + (1));
i__6048__auto___16653 = G__16654;
continue;
} else {
}
break;
}

var G__16651 = args16649.length;
switch (G__16651) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16649.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;
/**
 * Constructs and returns a new DateTime in UTC.
 * 
 * Specify the year, month of year, day of month, hour of day, minute if hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(){
var args16656 = [];
var len__6047__auto___16659 = arguments.length;
var i__6048__auto___16660 = (0);
while(true){
if((i__6048__auto___16660 < len__6047__auto___16659)){
args16656.push((arguments[i__6048__auto___16660]));

var G__16661 = (i__6048__auto___16660 + (1));
i__6048__auto___16660 = G__16661;
continue;
} else {
}
break;
}

var G__16658 = args16656.length;
switch (G__16658) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16656.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(){
var args16663 = [];
var len__6047__auto___16666 = arguments.length;
var i__6048__auto___16667 = (0);
while(true){
if((i__6048__auto___16667 < len__6047__auto___16666)){
args16663.push((arguments[i__6048__auto___16667]));

var G__16668 = (i__6048__auto___16667 + (1));
i__6048__auto___16667 = G__16668;
continue;
} else {
}
break;
}

var G__16665 = args16663.length;
switch (G__16665) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16663.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 * local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
var G__16671 = (new goog.date.Date());
G__16671.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__16671;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 * hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(){
var args16672 = [];
var len__6047__auto___16675 = arguments.length;
var i__6048__auto___16676 = (0);
while(true){
if((i__6048__auto___16676 < len__6047__auto___16675)){
args16672.push((arguments[i__6048__auto___16676]));

var G__16677 = (i__6048__auto___16676 + (1));
i__6048__auto___16676 = G__16677;
continue;
} else {
}
break;
}

var G__16674 = args16672.length;
switch (G__16674) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16672.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__5008__auto__ = minutes;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;
/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__16680 = (new goog.date.DateTime());
G__16680.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__16680;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 * corresponding to the same absolute instant in time as the given
 * DateTime, but with calendar fields corresponding to in the default
 * (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 * corresponding to the same point in calendar time as the given
 * DateTime, but for a correspondingly different absolute instant in
 * time in the default (local) timezone.
 * 
 * Note: This implementation uses the ECMAScript 5.1 implementation which
 * trades some historical daylight savings transition accuracy for simplicity.
 * see http://es5.github.io/#x15.9.1.8
 * 
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 * Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(){
var args16681 = [];
var len__6047__auto___16684 = arguments.length;
var i__6048__auto___16685 = (0);
while(true){
if((i__6048__auto___16685 < len__6047__auto___16684)){
args16681.push((arguments[i__6048__auto___16685]));

var G__16686 = (i__6048__auto___16685 + (1));
i__6048__auto___16685 = G__16686;
continue;
} else {
}
break;
}

var G__16683 = args16681.length;
switch (G__16683) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16681.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many months.
 * Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(){
var args16688 = [];
var len__6047__auto___16691 = arguments.length;
var i__6048__auto___16692 = (0);
while(true){
if((i__6048__auto___16692 < len__6047__auto___16691)){
args16688.push((arguments[i__6048__auto___16692]));

var G__16693 = (i__6048__auto___16692 + (1));
i__6048__auto___16692 = G__16693;
continue;
} else {
}
break;
}

var G__16690 = args16688.length;
switch (G__16690) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16688.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many weeks.
 * Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(){
var args16695 = [];
var len__6047__auto___16698 = arguments.length;
var i__6048__auto___16699 = (0);
while(true){
if((i__6048__auto___16699 < len__6047__auto___16698)){
args16695.push((arguments[i__6048__auto___16699]));

var G__16700 = (i__6048__auto___16699 + (1));
i__6048__auto___16699 = G__16700;
continue;
} else {
}
break;
}

var G__16697 = args16695.length;
switch (G__16697) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16695.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many days.
 * Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(){
var args16702 = [];
var len__6047__auto___16705 = arguments.length;
var i__6048__auto___16706 = (0);
while(true){
if((i__6048__auto___16706 < len__6047__auto___16705)){
args16702.push((arguments[i__6048__auto___16706]));

var G__16707 = (i__6048__auto___16706 + (1));
i__6048__auto___16706 = G__16707;
continue;
} else {
}
break;
}

var G__16704 = args16702.length;
switch (G__16704) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16702.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many hours.
 * Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(){
var args16709 = [];
var len__6047__auto___16712 = arguments.length;
var i__6048__auto___16713 = (0);
while(true){
if((i__6048__auto___16713 < len__6047__auto___16712)){
args16709.push((arguments[i__6048__auto___16713]));

var G__16714 = (i__6048__auto___16713 + (1));
i__6048__auto___16713 = G__16714;
continue;
} else {
}
break;
}

var G__16711 = args16709.length;
switch (G__16711) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16709.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many minutes.
 * Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(){
var args16716 = [];
var len__6047__auto___16719 = arguments.length;
var i__6048__auto___16720 = (0);
while(true){
if((i__6048__auto___16720 < len__6047__auto___16719)){
args16716.push((arguments[i__6048__auto___16720]));

var G__16721 = (i__6048__auto___16720 + (1));
i__6048__auto___16720 = G__16721;
continue;
} else {
}
break;
}

var G__16718 = args16716.length;
switch (G__16718) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16716.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many seconds.
 * Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(){
var args16723 = [];
var len__6047__auto___16726 = arguments.length;
var i__6048__auto___16727 = (0);
while(true){
if((i__6048__auto___16727 < len__6047__auto___16726)){
args16723.push((arguments[i__6048__auto___16727]));

var G__16728 = (i__6048__auto___16727 + (1));
i__6048__auto___16727 = G__16728;
continue;
} else {
}
break;
}

var G__16725 = args16723.length;
switch (G__16725) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16723.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many milliseconds.
 * Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(){
var args16730 = [];
var len__6047__auto___16733 = arguments.length;
var i__6048__auto___16734 = (0);
while(true){
if((i__6048__auto___16734 < len__6047__auto___16733)){
args16730.push((arguments[i__6048__auto___16734]));

var G__16735 = (i__6048__auto___16734 + (1));
i__6048__auto___16734 = G__16735;
continue;
} else {
}
break;
}

var G__16732 = args16730.length;
switch (G__16732) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16730.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;
/**
 * Returns a new date/time corresponding to the given date/time moved
 * forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(){
var args16737 = [];
var len__6047__auto___16743 = arguments.length;
var i__6048__auto___16744 = (0);
while(true){
if((i__6048__auto___16744 < len__6047__auto___16743)){
args16737.push((arguments[i__6048__auto___16744]));

var G__16745 = (i__6048__auto___16744 + (1));
i__6048__auto___16744 = G__16745;
continue;
} else {
}
break;
}

var G__16742 = args16737.length;
switch (G__16742) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args16737.slice((2)),(0)));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6066__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq16738){
var G__16739 = cljs.core.first.call(null,seq16738);
var seq16738__$1 = cljs.core.next.call(null,seq16738);
var G__16740 = cljs.core.first.call(null,seq16738__$1);
var seq16738__$2 = cljs.core.next.call(null,seq16738__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__16739,G__16740,seq16738__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a new date/time object corresponding to the given date/time
 * moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(){
var args16747 = [];
var len__6047__auto___16753 = arguments.length;
var i__6048__auto___16754 = (0);
while(true){
if((i__6048__auto___16754 < len__6047__auto___16753)){
args16747.push((arguments[i__6048__auto___16754]));

var G__16755 = (i__6048__auto___16754 + (1));
i__6048__auto___16754 = G__16755;
continue;
} else {
}
break;
}

var G__16752 = args16747.length;
switch (G__16752) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6066__auto__ = (new cljs.core.IndexedSeq(args16747.slice((2)),(0)));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6066__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq16748){
var G__16749 = cljs.core.first.call(null,seq16748);
var seq16748__$1 = cljs.core.next.call(null,seq16748);
var G__16750 = cljs.core.first.call(null,seq16748__$1);
var seq16748__$2 = cljs.core.next.call(null,seq16748__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__16749,G__16750,seq16748__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a DateTime a supplied period before the present.
 * 
 * e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 * e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(){
var args16757 = [];
var len__6047__auto___16760 = arguments.length;
var i__6048__auto___16761 = (0);
while(true){
if((i__6048__auto___16761 < len__6047__auto___16760)){
args16757.push((arguments[i__6048__auto___16761]));

var G__16762 = (i__6048__auto___16761 + (1));
i__6048__auto___16761 = G__16762;
continue;
} else {
}
break;
}

var G__16759 = args16757.length;
switch (G__16759) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16757.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(){
var args16764 = [];
var len__6047__auto___16767 = arguments.length;
var i__6048__auto___16768 = (0);
while(true){
if((i__6048__auto___16768 < len__6047__auto___16767)){
args16764.push((arguments[i__6048__auto___16768]));

var G__16769 = (i__6048__auto___16768 + (1));
i__6048__auto___16768 = G__16769;
continue;
} else {
}
break;
}

var G__16766 = args16764.length;
switch (G__16766) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16764.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 * of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(){
var args__6054__auto__ = [];
var len__6047__auto___16773 = arguments.length;
var i__6048__auto___16774 = (0);
while(true){
if((i__6048__auto___16774 < len__6047__auto___16773)){
args__6054__auto__.push((arguments[i__6048__auto___16774]));

var G__16775 = (i__6048__auto___16774 + (1));
i__6048__auto___16774 = G__16775;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq16771){
var G__16772 = cljs.core.first.call(null,seq16771);
var seq16771__$1 = cljs.core.next.call(null,seq16771);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__16772,seq16771__$1);
});
cljs_time.core.month_range = (function cljs_time$core$month_range(p__16778){
var map__16781 = p__16778;
var map__16781__$1 = ((((!((map__16781 == null)))?((((map__16781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16781):map__16781);
var start = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__16781,map__16781__$1,start,end){
return (function (p1__16777_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__16777_SHARP_,end));
});})(map__16781,map__16781__$1,start,end))
,cljs.core.map.call(null,((function (map__16781,map__16781__$1,start,end){
return (function (p1__16776_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__16776_SHARP_ + (1))));
});})(map__16781,map__16781__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__16783_SHARP_){
return p1__16783_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 * For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 * returns 1 month.
 * 
 * Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 * But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 * And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__16784){
var map__16787 = p__16784;
var map__16787__$1 = ((((!((map__16787 == null)))?((((map__16787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16787):map__16787);
var interval = map__16787__$1;
var start = cljs.core.get.call(null,map__16787__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__16787__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__16789){
var map__16792 = p__16789;
var map__16792__$1 = ((((!((map__16792 == null)))?((((map__16792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16792):map__16792);
var start = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__4996__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__4996__auto____$1)){
var and__4996__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__4996__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__4996__auto____$2;
}
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__16794){
var map__16795 = p__16794;
var map__16795__$1 = ((((!((map__16795 == null)))?((((map__16795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16795):map__16795);
var millis = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__16797 = this;
var map__16797__$1 = ((((!((map__16797 == null)))?((((map__16797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16797):map__16797);
var millis__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__16799){
var map__16800 = p__16799;
var map__16800__$1 = ((((!((map__16800 == null)))?((((map__16800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16800):map__16800);
var millis = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__16800__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__16802 = this;
var map__16802__$1 = ((((!((map__16802 == null)))?((((map__16802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16802):map__16802);
var millis__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__5008__auto__ = years__$1;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__16804){
var map__16805 = p__16804;
var map__16805__$1 = ((((!((map__16805 == null)))?((((map__16805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16805):map__16805);
var millis = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__16807 = this;
var map__16807__$1 = ((((!((map__16807 == null)))?((((map__16807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16807):map__16807);
var millis__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__16809){
var map__16810 = p__16809;
var map__16810__$1 = ((((!((map__16810 == null)))?((((map__16810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16810):map__16810);
var start = cljs.core.get.call(null,map__16810__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__16810__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__16812 = this;
var map__16812__$1 = ((((!((map__16812 == null)))?((((map__16812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16812):map__16812);
var start__$1 = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 * DateTime. Note that if the DateTime is exactly equal to the
 * end of the interval, this function returns false.
 * 
 * With 3 arguments: Returns true if the start DateTime is
 * equal to or before and the end DateTime is equal to or after the test
 * DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(){
var args16814 = [];
var len__6047__auto___16820 = arguments.length;
var i__6048__auto___16821 = (0);
while(true){
if((i__6048__auto___16821 < len__6047__auto___16820)){
args16814.push((arguments[i__6048__auto___16821]));

var G__16822 = (i__6048__auto___16821 + (1));
i__6048__auto___16821 = G__16822;
continue;
} else {
}
break;
}

var G__16816 = args16814.length;
switch (G__16816) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16814.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__16817,date){
var map__16818 = p__16817;
var map__16818__$1 = ((((!((map__16818 == null)))?((((map__16818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16818):map__16818);
var start = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__5008__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
var and__4996__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__4996__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__4996__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 * Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 * With 4 arguments: Returns true if the range specified by start-a and end-a
 * overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(){
var args16824 = [];
var len__6047__auto___16833 = arguments.length;
var i__6048__auto___16834 = (0);
while(true){
if((i__6048__auto___16834 < len__6047__auto___16833)){
args16824.push((arguments[i__6048__auto___16834]));

var G__16835 = (i__6048__auto___16834 + (1));
i__6048__auto___16834 = G__16835;
continue;
} else {
}
break;
}

var G__16826 = args16824.length;
switch (G__16826) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16824.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__16827,p__16828){
var map__16829 = p__16827;
var map__16829__$1 = ((((!((map__16829 == null)))?((((map__16829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16829):map__16829);
var start_a = cljs.core.get.call(null,map__16829__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__16829__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__16830 = p__16828;
var map__16830__$1 = ((((!((map__16830 == null)))?((((map__16830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16830):map__16830);
var start_b = cljs.core.get.call(null,map__16830__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__16830__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__4996__auto__ = cljs.core.not.call(null,(function (){var or__5008__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__4996__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__4996__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__5008__auto__ = (function (){var and__4996__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__4996__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
var or__5008__auto____$1 = (function (){var and__4996__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__4996__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(or__5008__auto____$1)){
return or__5008__auto____$1;
} else {
var or__5008__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__5008__auto____$2)){
return or__5008__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 * beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__16837,p__16838){
var map__16843 = p__16837;
var map__16843__$1 = ((((!((map__16843 == null)))?((((map__16843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16843):map__16843);
var start_a = cljs.core.get.call(null,map__16843__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__16843__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__16844 = p__16838;
var map__16844__$1 = ((((!((map__16844 == null)))?((((map__16844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16844):map__16844);
var start_b = cljs.core.get.call(null,map__16844__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__16844__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__5008__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__4996__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__4996__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(){
var args16849 = [];
var len__6047__auto___16852 = arguments.length;
var i__6048__auto___16853 = (0);
while(true){
if((i__6048__auto___16853 < len__6047__auto___16852)){
args16849.push((arguments[i__6048__auto___16853]));

var G__16854 = (i__6048__auto___16853 + (1));
i__6048__auto___16853 = G__16854;
continue;
} else {
}
break;
}

var G__16851 = args16849.length;
switch (G__16851) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16849.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(){
var args16856 = [];
var len__6047__auto___16859 = arguments.length;
var i__6048__auto___16860 = (0);
while(true){
if((i__6048__auto___16860 < len__6047__auto___16859)){
args16856.push((arguments[i__6048__auto___16860]));

var G__16861 = (i__6048__auto___16860 + (1));
i__6048__auto___16860 = G__16861;
continue;
} else {
}
break;
}

var G__16858 = args16856.length;
switch (G__16858) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16856.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(){
var args16863 = [];
var len__6047__auto___16866 = arguments.length;
var i__6048__auto___16867 = (0);
while(true){
if((i__6048__auto___16867 < len__6047__auto___16866)){
args16863.push((arguments[i__6048__auto___16867]));

var G__16868 = (i__6048__auto___16867 + (1));
i__6048__auto___16867 = G__16868;
continue;
} else {
}
break;
}

var G__16865 = args16863.length;
switch (G__16865) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16863.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.IToPeriod = {};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__5644__auto__ = (((obj == null))?null:obj);
var m__5645__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,obj);
} else {
var m__5645__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__16872){
var map__16873 = p__16872;
var map__16873__$1 = ((((!((map__16873 == null)))?((((map__16873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16873):map__16873);
var interval = map__16873__$1;
var start = cljs.core.get.call(null,map__16873__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__16873__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__16875 = this;
var map__16875__$1 = ((((!((map__16875 == null)))?((((map__16875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16875):map__16875);
var interval__$1 = map__16875__$1;
var start__$1 = cljs.core.get.call(null,map__16875__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__16875__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(){
var args16877 = [];
var len__6047__auto___16882 = arguments.length;
var i__6048__auto___16883 = (0);
while(true){
if((i__6048__auto___16883 < len__6047__auto___16882)){
args16877.push((arguments[i__6048__auto___16883]));

var G__16884 = (i__6048__auto___16883 + (1));
i__6048__auto___16883 = G__16884;
continue;
} else {
}
break;
}

var G__16879 = args16877.length;
switch (G__16879) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16877.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (function (){var G__16880 = (new goog.date.Date());
G__16880.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__16880;
})();
var G__16881 = (new goog.date.UtcDateTime((0)));
G__16881.setYear(midnight.getYear());

G__16881.setMonth(midnight.getMonth());

G__16881.setDate(midnight.getDate());

G__16881.setHours(hours);

G__16881.setMinutes(minutes);

G__16881.setSeconds(seconds);

G__16881.setMilliseconds(millis);

return G__16881;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_16887 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_16887;
}});
