/*!
 * Author: Xiaohe; Author: Henan Jieba（杰巴） Network Technology Co., Ltd
 * xiaohe@chnhonker.com qq:35924908 - v1.0.0 (2020-12-28 14:53)
 * jiebainc.com 
 */
; (function (global) {
    var selector = null;

    "use strict";
    var M = function (el) {
        selector = el;
        this.el = typeof el === "string" ? document.querySelector(el) : el;
    }
    M.prototype = {
        run: function (param) {
            if (!param.backcolor) {
                param.backcolor = "#007DB8";//默认背景色
            }
            if (!param.color) {
                param.color = "white";//默认字体颜色
            }
            if (!param.hoverbackcolor) {
                param.hoverbackcolor = "#F0AB00";//鼠标移入后的颜色
            }
            if (!param.direction) {
                param.direction = "right";
            }
            var cssStr = "";
            var csstop = "xiaoheBy" + Math.ceil(Math.random() * 1000) + "jiebaincSpotcom";
            //设置主样式属性
            var classcount = 0;
            if (selector.indexOf(".") != -1) {
                selector = selector.substring(1, selector.length);
                classcount = document.getElementsByClassName(selector).length;
            }
            if (classcount > 0) {
                cssStr += "." + csstop + " {";
                cssStr += "position:relative;";
                cssStr += "opacity:0.99;";
                cssStr += "overflow:hidden;";
                cssStr += "display:block;";
                cssStr += "border:none;";
                cssStr += "color:" + param.color + ";";
                cssStr += "}"
            } else {
                this.el.style.position = "relative";
                this.el.style.opacity = "0.99";
                this.el.style.overflow = "hidden";
                this.el.style.display = "block";
                this.el.style.border = "none";
                this.el.style.color = param.color;
            }

            this.el.classList.add(csstop);

            //元素下的大div
            cssStr += "." + csstop + " > div{";
            cssStr += "position: absolute;";
            cssStr += "display: flex;";
            if (param.direction == "left" || param.direction == "right") {
                cssStr += "height: 100%;";
                cssStr += "width: 200%;";
                cssStr += "top: 0;";
                if (param.direction == "left") {
                    cssStr += "right:-100%;";
                    cssStr += "transform:translateX(0%);";
                    cssStr += "transition: transform 0.2s;";
                } else if (param.direction == "right") {
                    cssStr += "left:-100%;";
                    cssStr += "transform:translateX(0%);";
                    cssStr += "transition: transform 0.2s;";
                }
            } else if (param.direction == "up" || param.direction == "down") {
                cssStr += "height: 200%;";
                cssStr += "width: 100%;";
                cssStr += "flex-direction: column;";
                cssStr += "flex-wrap:wrap;"
                cssStr += "left:0;";
                if (param.direction == "up") {
                    cssStr += "top: 0;";
                    cssStr += "transform:translateY(0%);";
                    cssStr += "transition: transform 0.2s;";
                } else if (param.direction == "down") {
                    cssStr += "top: -100%;";//这里反逻辑  特别注意
                    cssStr += "transform:translateY(0%);";
                    cssStr += "transition: transform 0.2s;";
                }
            }
            cssStr += "z-index: -999;";
            cssStr += "}";
            //元素下的大div
            //hou css
            cssStr += "." + csstop + " > div .hou{";
            if (param.direction == "left" || param.direction == "right") {
                cssStr += "width: 50%;";
                cssStr += "height: 100%;";
                if (param.direction == "left") {
                    cssStr += "background-color: " + param.backcolor + "!important;";
                } else if (param.direction == "right") {
                    cssStr += "background-color: " + param.hoverbackcolor + "!important;";
                }
            } else if (param.direction == "up" || param.direction == "down") {
                cssStr += "width: 100%;";
                cssStr += "height: 50%;";
                if (param.direction == "up") {
                    cssStr += "background-color: " + param.backcolor + "!important;";
                } else if (param.direction == "down") {
                    cssStr += "background-color: " + param.hoverbackcolor + "!important;";
                }
            }
            cssStr += "}";
            //hou css
            //qian css
            cssStr += "." + csstop + " > div .qian{";
            if (param.direction == "left" || param.direction == "right") {
                cssStr += "width: 50%;";
                cssStr += "height: 100%;";
                if (param.direction == "left") {
                    cssStr += "background-color: " + param.hoverbackcolor + "!important;";
                } else if (param.direction == "right") {
                    cssStr += "background-color: " + param.backcolor + "!important;";
                }
            } else if (param.direction == "up" || param.direction == "down") {
                cssStr += "width: 100%;";
                cssStr += "height: 50%;";
                if (param.direction == "up") {
                    cssStr += "background-color: " + param.hoverbackcolor + "!important;";
                } else if (param.direction == "down") {
                    cssStr += "background-color: " + param.backcolor + "!important;";
                }
            }
            cssStr += "}";
            //qian css
            ///hover
            cssStr += "." + csstop + ":hover > div{";
            if (param.direction == "right") {
                cssStr += "transform:translateX(50%);";
                cssStr += "transition: transform 0.2s;";
            } else if (param.direction == "left") {
                cssStr += "transform:translateX(-50%);";
                cssStr += "transition: transform 0.2s;";
            } else if (param.direction == "up") {
                cssStr += "transform:translateY(-50%);";
                cssStr += "transition: transform 0.2s;";
            } else if (param.direction == "down") {
                cssStr += "transform:translateY(50%);";
                cssStr += "transition: transform 0.2s;";
            }
            cssStr += "}"
            ///hover            
            //var insertHtml = '<div><div class="hou"></div><div class="qian"></div></div>';//这是要追加的html代码  这个 应该是最后追加的才是
            //添加css样式
            var style = window.document.createElement("style");
            style.type = "text/css";
            style.innerHTML = cssStr;
            window.document.getElementsByTagName("HEAD").item(0).appendChild(style);
            //添加css样式
            var div = document.createElement("div");
            div.innerHTML = '<div class="hou"></div><div class="qian"></div>';
            if (classcount > 0) {
                for (var m = 0; m < classcount; m++) {
                    document.getElementsByClassName(selector)[m].classList.add(csstop);
                }
                for (var m = 0; m < classcount; m++) {
                    var divs = document.createElement("div");
                    divs.innerHTML = '<div class="hou"></div><div class="qian"></div>';
                    document.getElementsByClassName(selector)[m].appendChild(divs);
                }
            } else {
                this.el.appendChild(div);
            }
        }
    };
    if (typeof module !== 'undefined' && module.exports) module.exports = M;
    if (typeof define === 'function') define(function () { return M; });
    global.BtnAfter = M;
})(this);