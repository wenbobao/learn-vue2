webpackJsonp([2],{"41fD":function(t,e,s){"use strict";var i=s("Dd8w"),n=s.n(i),a=s("NYxO"),o={name:"item",props:["type"],data:function(){return{itemId:null,choosedNum:null,choosedId:null}},computed:Object(a.c)(["itemNum","level","itemDetail","timer"]),methods:n()({},Object(a.b)(["addNum","initializeData"]),{nextItem:function(){null!==this.choosedNum?(this.choosedNum=null,this.addNum(this.choosedId)):alert("您还没有选择答案哦")},chooseType:function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},choosed:function(t,e){this.choosedNum=t,this.choosedId=e},submitAnswer:function(){null!==this.choosedNum?(this.addNum(this.choosedId),clearInterval(this.timer),this.$router.push("score")):alert("您还没有选择答案哦")}}),created:function(){"home"==this.type&&this.initializeData()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("header",{staticClass:"top_tips"},["home"==t.type?s("span",{staticClass:"num_tip"},[t._v(" "+t._s(t.level))]):t._e(),t._v(" "),"item"==t.type?s("span",{staticClass:"num_tip"},[t._v("题目"+t._s(t.itemNum))]):t._e()]),t._v(" "),"home"==t.type?s("div",[s("div",{staticClass:"home_logo item_container_style"}),t._v(" "),s("router-link",{staticClass:"start button_style",attrs:{to:"item"}})],1):t._e(),t._v(" "),"item"==t.type?s("div",[s("div",{staticClass:"item_back item_container_style"},[t.itemDetail.length>0?s("div",{staticClass:"item_list_container"},[s("header",{staticClass:"item_title"},[t._v(" "+t._s(t.itemDetail[t.itemNum-1].topic_name)+" ")]),t._v(" "),s("ul",t._l(t.itemDetail[t.itemNum-1].topic_answer,function(e,i){return s("li",{key:i,staticClass:"item_list",on:{click:function(s){t.choosed(i,e.topic_answer_id)}}},[s("span",{staticClass:"option_style",class:{has_choosed:t.choosedNum==i}},[t._v(t._s(t.chooseType(i)))]),t._v(" "),s("span",{staticClass:"option_detail"},[t._v(t._s(e.answer_name))])])}))]):t._e(),t._v(" "),t.itemNum<t.itemDetail.length?s("span",{staticClass:"next_item button_style",on:{click:t.nextItem}}):s("span",{staticClass:"submit_item button_style",on:{click:t.submitAnswer}})])]):t._e()])},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("XTr2")},"data-v-4d47b714",null);e.a=l.exports},XTr2:function(t,e){},pYXN:function(t,e){},xldL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"item",components:{topic:s("41fD").a},data:function(){return{}},created:function(){this.$store.commit("REMBER_TIME")}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("topic",{attrs:{type:"item"}})],1)},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("pYXN")},"data-v-17025443",null);e.default=a.exports}});
//# sourceMappingURL=2.4c252408b653cae5c139.js.map