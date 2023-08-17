<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Spec Export - Sketch Measure 2.4</title>
    <style type="text/css">
    /*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}template,[hidden]{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}

*{box-sizing:border-box;}
::-webkit-scrollbar{width:8px;height:8px;background:#202123;border-radius:4px;}
::-webkit-scrollbar-thumb{border:1px solid rgba(255,255,255,.16);background-color:rgba(0,0,0,.64);border-radius:4px;}
::-webkit-scrollbar-corner,
::-webkit-resizer{background:#202123;}
html{width:100vw;height:100vh;overflow:hidden;}
body{-webkit-user-select:none;width:100vw;height:100vh;min-width:1024px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;font-size:12px;color:#989A9C;background:#191919;letter-spacing:1px;overflow:hidden;}
header{position:relative;height:60px;display:flex;align-items:center;z-index:215;background:#000;}
header .header-center,header .header-left,header .header-right{width:240px;height:60px;background:#0F0F0F;}
header .header-center{display:flex;flex:1;background:#000;}
header .header-center .show-notes,header .header-center .zoom-widget{padding:20px;width:160px;}
header .header-center h1{flex:1;}
header .header-center .show-notes{text-align:right;line-height:20px;}
header .header-center .show-notes .slidebox{margin-left:10px;}
header .header-left{display:flex;}
.zoom-widget{display:flex;}
.zoom-widget button{position:relative;display:block;width:20px;height:20px;border-radius:10px;border:0;background:#3484F5;cursor:pointer;}
.zoom-widget button:after,.zoom-widget button:before{position:absolute;top:9px;left:5px;content:"";display:block;width:10px;height:2px;background:#FFF;}
.zoom-widget button:after{top:5px;left:9px;width:2px;height:10px;}
.zoom-widget button:disabled{background:#222;cursor:default;}
.zoom-widget button:disabled:after,.zoom-widget button:disabled:before{background:#606264;}
.zoom-widget button.zoom-in:after{display:none;}
.zoom-widget .zoom-text{display:block;text-align:center;line-height:20px;flex:1;}
.unit-box{height:60px;}
.unit-box .overlay{content:"";position:absolute;top:60px;left:0;width:100vw;height:calc(100vh - 60px);display:none;background:rgba(0,0,0,.56);z-index:1;}
.unit-box:focus .overlay{display:block;}
.unit-box:focus{height:auto;outline:0;}
.unit-box h3,.unit-box p{position:relative;margin:0;padding:20px 20px 20px 54px;display:block;height:100%;line-height:20px;font-size:12px;font-weight:400;cursor:pointer;}
.unit-box h3,.unit-box:focus p{display:none;}
.unit-box h3:before,.unit-box p:before{position:absolute;top:18px;left:18px;content:"";display:block;width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAABhY2VgZGdgYmRubxBCAAAAA3RSTlMA5EpWbVq4AAAALUlEQVQoz2OgOuD8DwTfoBx2EOcvlMP/HwSwcsDEKIeKHETwEuZgRBYiGqkNAFJPNT9Sw3d/AAAAAElFTkSuQmCC) no-repeat;background-size:24px 24px;}
.unit-box ul{position:absolute;margin:1px 0 0 240px;padding:0;list-style:none;background:#0F0F0F;width:240px;height:calc(100vh - 61px);overflow:auto;display:block;transition:all .15s ease;z-index:2;}
.unit-box:focus h3{color:#3A3A3A;display:block;}
.unit-box:focus ul{margin:1px 0 0;}
.unit-box .sub-title,.unit-box label{display:flex;padding:14px 20px;}
.unit-box label{cursor:pointer;}
.unit-box li:hover label{color:#FFF;}
.page-list label span,.unit-box label span{flex:1;}
.page-list input,.unit-box input{position:absolute;visibility:hidden;}
.page-list span:before,.unit-box span:before{float:right;display:block;content:"";width:16px;height:16px;}
.page-list input:checked+span:before,.page-list label:hover span:before,.unit-box input:checked+span:before,.unit-box label:hover span:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAADICAMAAAAp4rTzAAAAaVBMVEUAAACYm5yYm500hPaDoMKYucs0hfaYm52Znp6bnZ01hfeYnJ2Zm540hvc8iv81hPWYm52YnJ2ZnJ01h/g2ifmcnJw4h/o1hfY1hfU1hfY1hfU1hfY0hfaZnJ41hfY2h/aYnJw0hfU0hPbpk+wAAAAAInRSTlMAo5LmCAP0nDIVeHFNSg6diGVZNCciGtvSw7arj3xpVkSETvQOmQAAAPlJREFUeNrt1MtuwjAQheFxYhNyIUBCwqXcOu//kHWMl6wqRlWl/1tYs5ojzZEsAH7rUZYbMXZX1VJsfat5SNhqtDI9l/+yyuibps/TOd1qlM+7qB7nZZhPKeMgBlZ58+Go0WkWC6+ux7HU6NyLidz2ankvXoyEq2bbIHYaTa5i6q5RI8Y2ZfkQAAAAAAAAAAAAAAAA4K11UazF2NM5V4itwZmHhL2LKtNzhdYqw3edz9Mt3WqSz2ud29XLUO9SRi0Gqry5LpxLeRZeXU9Tyrh5MZHbrpa39WIkDC7bB7HTuWQQU08XdfLOP/sVAQAAAAAAAAAAAAD4Yz84hg8qlGTZeQAAAABJRU5ErkJggg==);background-size:50px 100px;}
.page-list label:hover span:before,.unit-box label:hover span:before{background-position:0 -50px;}
.page-list input:checked+span:before,.unit-box input:checked+span:before{background-position:0 0;}
.unit-box .sub-title{font-size:12px;background:#000;color:#3A3A3A;}
main{position:relative;height:calc(100vh - 60px);}
.inspector,.navbar{position:absolute;top:0;bottom:0;display:flex;width:240px;background:#232527;z-index:5;}
.inspector{transition:all .15s ease;right:-240px;display:block;}
.inspector.active{right:0;}
.navbar{left:-240px;width:240px;transition:all .15s ease;}
.navbar.on{left:0;}
.navbar nav{width:40px;background:#000204;}
.navbar section{flex:1;}
.tab{margin:0;padding:0;display:flex;width:100%;list-style:none;}
.tab li{display:flex;flex:1;height:60px;cursor:pointer;font-size:12px;justify-content:center;align-items:center;}
.tab li.current{background-color:#232527;}
.tab li:before{content:"";width:40px;height:40px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsCAMAAACxJAyMAAAAY1BMVEUAAABfYmTY2NjY2NhgYGPa2tpdYGNfYGHZ2dlgYGRfX2LY2NhfYGPZ2dldX2Pb29vV1dXR0dFdYWNgYGPb29vU1NRdXV1aYWVdXWNYWGJbYGLX19fX19fa2trX19fY2NhgYmTufXliAAAAH3RSTlMA8/LjZq/mrzHHnp3VyIJqRQv7VVQbC0csGjrSX4l65F0P9QAAAvFJREFUeNrt3Nlu4kAURdHrCTMYM8ZAGKr+/yubSkdcRJy3OlI6vdcbj1vIPlEkrgEAAAAAAACAUnjy5XMm8cnrZ0IIIYQQQn5XyDNJyAtCCPnXQn7Nw04IIY6HnxBCzHjYCSGEEEII+ZEhAAAAAAAAAAAAAAAAAAAAAAAAAAD8HOEbllH8BiHjITYid4iNIIQQQgjJE+Kmi8VaE+KO8/lBHTItQ1iIQ96LGOfikLd7R2i0Icd7R2y1IW9VuLtIQ06TeFdLQzbL4F+IKGSYRf9CVCFN6lhupCFt6pgN0pBF6qjeTBkyTx2TkylDbqmjnEp3pE8dxVG6I5eQrKWDWKeO7UE6iOuQrKTLftj6C0sVMi1Tx9VEIT4gsTdViA/I0lQhPiAzU4ZszuHDRRgydPFDrQnxAVE/I7MYs5eETz4gD/vc/3zwAXnYqUKu3tGYKKT3jtZEVt6xMJHaO+Ymsn5klBcT8AFJitoEfECSamoi70X81B1NwAckuZmAD0hS9OZEHc2bqZy6+Fd7MpllSMrF1DR8QIr50XSaVNGsNibUpoq2Hkzoem5uU9Pqu7Z/NwAAAAAAAAAAAAAAAAAAAAAAAAAA/jO3m8n1vcmtQliZWB1jbWKXsVsP+TvkJXu/kCCz26aQ7c6E1uHT2mQOqeP1Qo2gQ13iv8ov3k3Erwv49SNFh67EO9QlR+94ueOU+7qA88taua8kuMnJ8luGF0vLbhZfzCy7VXghGMY6vlDMSRW+qCyzSfxiYi7fEjrJLu7iiNy7uAhOdXJnHp3s5M45jDhbVl0c0VleZRhRWlZFHFFYXmGUZbWNI7aWVxWC/LU1iVH62vI51E2iz6F6Eq9hxNWy6uOI3vJaB6f6W/4QRxwss7Ps7es63dvX7WXD7nbCYXcL2a67uXrX/d6yW24su2EmfGV5SROeNBsTGNr4pB1MY1U9pnBlIvXkMYW1yWz2TVWWVbPfmMywa7ui6NrdYAAAAAAAAAAAAAAAAADw5A96XDaWeHqp+wAAAABJRU5ErkJggg==) no-repeat -50px 0;background-size:100px 150px;overflow:hidden;}
.tab li.current:before{background-position-x:0;}
.tab li.icon-slices:before{background-position-y:-50px;}
.tab li.icon-colors:before{background-position-y:-100px;}
#inspector .code-item{display:none!important;}
#inspector .code-item textarea{padding: 16px;}
#inspector .code-item.select{display: block!important;}
#inspector .tab li{height:40px;}
#inspector .tab li:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsCAMAAACxJAyMAAAAn1BMVEUAAABgYmTZ2dnf39/b29tkZWZnaGhgYmRgY2TZ2dlpaW/Z2dnZ2dna2trn5+dgYmRgYmRgYmXBwcHY2NhhY2XZ2dlhY2VkZGhkZWhgYmXZ2dlgYmRhYmVhZGXZ2dnZ2dnb29tiZGZhYmXa2trb29vZ2dlgYmVgY2Ta2trb29thZGbb29vZ2dlgYmTZ2dna2tra2tphY2Xe3t7Y2NhgYmRl+xw/AAAAM3RSTlMA8PIeLzAge9fWDOeHfAz16OEG7YfebCkZurnBsVvGsTc3jnBTp6fLXUVFJ76Zj5poURVaW7T5AAAFHklEQVR4Ae3dyVLzyhIE4JRs0CAPsjzPNmAbMHPV+z/b/YWI+xtw6yxONRGHyG/VwS5DlbS0oMAvQ0RERERERERE9CB1MliYa50cJkKps4aFQOssYKEhtdowcKm1Ili4kVo3MPCqtV5hoSW1GjAw0FoTWJj9QNenP9H1hsOLlGawMLk8b2TYddSPXAs+DbQ0gFez+q4bjtwrvMrsuu6Ua+kSFtahg5T6sLAIHLQUwEQmdWawkGudqf973ajrE601+C33+hIW2j9wr0fqZtd1qRPCwkLrBDBxbJ53LaUHWBhfnDfS0hxetY3vdffIXcGrtZRu4dPCsOtOQykd4VNPS2NYaCWlW3z1Ztj1QVxa4quJZdcTKW3w1Z2UVrAQa2mLr+4Nu17Iu46j608wUOi71GvXN/LueYNPmq3Mrutbffe4xSfjQW7Y9Rf5kFy//U2RyIcmDIz0Qzya/E0Ra8Wo68/y1+7uJEUFFh71/7r7+zJFFJ/8yK7rfw2fEzm1goWDnuo9xnrqABM7qTG8hYW91oiXsPF2nThStJowMoliPas3uIChzXP4PcUGpraP3e8ptrDWeVl5TFFJR4fTFFdb+NF86kspe9rAl/FV4DdFpbiZeUxRKZbTf5eCiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqBW24NsgGMA7EYFvqvpbgxT+gzSTrOk7yEWcX/gO0uyLtD0HuQhUI69Bqhz9hs8gVY7g0keQ9mwYhsm63ahyNH10JJr2ukG8iCZVjguYkxMzPzmgJ6aecrTklJ8cAz3lJUdnLV+sOjCWLvSLQ/oTW0BnBWzN9ZtpAVttOeMJpiI94wqmNlJqd9ry6dCEoa2WojTST4cLD3uCOujIp8OD/Z6gFKl+OsxhqCHnn4g0YGai55+IXvptSOXaa0MqkelkOcwsJ8thCjuJOCQwc1CHGHZCcQhhJlCHAPRbXYfiFF7DxKirTt2RfUO8taSrNbqwIbVgQmv9wifCjlTECWaMBotBzDAIgzAIg9jJxCGDmVwdctjZicMOZvbqsIedRl/O6jdgZhLoWcEEhhq7TL7Jdg0Ymuxz/SbfT0BERERERERERERERERERERERERERERERPTfUdzOMnhWLKc5PLsbivTh133P/5aEW/ljBa+W1XIXr+6kdA2f7rUUwacikz/6HXhU9PSPIIVPL1K6gU8jLS3h1YP80YZXU7+DVel7LUglqPYK+BUOn47wLOg9juFH82k2THY3HZQ27VUWDtcvHZgaX03jw36ZorSN5nk3XoxSWDo+yIf17V1rKBXbqoznWukulveDnn7oRrBzE4rDQwEjr4E6zFPTG9BhZ3kDOuy9/slxZbiBiUmuTr0tbDyLU9KBjUd1ilPY6ITiEh5hIw3UJRjDyIs4tWBkpE4DWNmJ0xFG9uo0hpWVuGSwMleXHGYycVnBSk9dDjAjPxBEfyJI9gOjlatLD2YScWrASKxOl7AyE6c2jEzVKYKVljiFb/a7sP3tRbkTt1Xh/5XR7OW3kBqrN1hItcZ84rcklezFZ0kq+QgmbqTOAyy8ap05bAylxq3Xu72yhI1rcUv8v/9qDCNFIk53sFHE6nQP/7+BZ7Byry5T2Hn2/YlY87XbHcNOkfhseiWN/Ta90sj8/3OFy1zPuIKtYyLvkudWay2VFmyNY30XP0ZXi659jkqnlYSr9rE63+yG2XoDa+kgDg7RuDq/7uPeYgsiIiIiIiIiIiIiIiIiIiKif/Y/jlFGecKAUnMAAAAASUVORK5CYII=);
}
#inspector .tab li.select{background-color:rgba(255,255,255,.05);}
#inspector .tab li.select:before{background-position-x: 0;}
#inspector .tab li.icon-android-panel:before {background-position-y: -50px;}
#inspector .tab li.icon-ios-panel:before {background-position-y: -100px;}
.screen-viewer{position:absolute;width:100vw;height:calc(100vh - 60px);background:#191919 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMAUvP2/eAAAAARSURBVAjXY6ASYD6ATlAHAADy5gMN0fCqFwAAAABJRU5ErkJggg==);background-size:16px 16px;overflow:auto;}
.screen-viewer,.screen-viewer .overlay{position:absolute;width:100vw;height:calc(100vh - 60px);background:#191919 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMAUvP2/eAAAAARSURBVAjXY6ASYD6ATlAHAADy5gMN0fCqFwAAAABJRU5ErkJggg==);background-size:16px 16px;overflow:auto;}
.screen-viewer .overlay{display:none;position:fixed;top:60px;left:0;background:transparent;overflow:hidden;z-index:2;cursor:none;}
.screen-viewer.moving-screen .overlay{display:block;}
.screen-viewer-inner{position:relative;margin:0 auto;}
.screen{margin:0 auto;position:absolute;left:50%;top:50%;background:#FFF;box-shadow:0 2px 10px 0 rgba(0,0,0,.2);transition:all .15s ease;}
.layer{position:absolute;cursor:pointer;}
.hover,.selected{border:1px solid #EE6723;}
.has-slice{border:1px dashed #EE6723;background:rgba(255,85,0,.32);}
.layer b,.layer i{position:absolute;width:5px;height:5px;background:#FFF;border:1px solid #EE6723;border-radius:50%;overflow:hidden;display:none;}
.layer b{width:3px;height:3px;background:#EE6723;}
.selected i{display:block;}
.distance.h div[data-width]:before,.distance.v div[data-height]:before,.selected:after,.selected:before{position:absolute;display:block;left:50%;top:-23px;transform:translateX(-50%);content:attr(data-width);font-size:12px;color:#FFF;height:12px;line-height:12px;padding:4px;background:#EE6723;border-radius:2px;z-index:1;}
.percentage-mode .distance.h div[data-width]:before,.percentage-mode .distance.v div[data-height]:before,.percentage-mode .selected:after,.percentage-mode .selected:before{content:attr(percentage-width);}
.selected.hidden:after,.selected.hidden:before{display:none;}
.distance.v div[data-height]:before,.selected:after{content:attr(data-height);left:auto;right:0;top:50%;transform:translateX(calc(100% + 3px)) translateY(-50%);}
.percentage-mode .distance.v div[data-height]:before,.percentage-mode .selected:after{content:attr(percentage-height);}
.layer .tl{top:-3px;left:-3px;}
.layer .tr{top:-3px;right:-3px;}
.layer .bl{bottom:-3px;left:-3px;}
.layer .br{bottom:-3px;right:-3px;}
.hover{border:1px solid #419bf9;}
.selected{border:1px solid #EE6723;}
.ruler{position:absolute;width:100%;height:100%;border:1px dashed #419bf9;}
.ruler.h{border-left:0;border-right:0;}
.ruler.v{border-top:0;border-bottom:0;}
.distance,.distance div,.distance div:before,.distance:after,.distance:before{position:absolute;}
.distance.v,.distance.v div{width:1px;}
.distance.h,.distance.h div{height:1px;}
.distance.v div{top:0;bottom:0;background:#EE6723;}
.distance.h div{left:0;right:0;background:#EE6723;}
.distance.v:after,.distance.v:before{content:"";top:0;left:-2px;width:5px;height:1px;background:#EE6723;}
.distance.h:after,.distance.h:before{content:"";top:-2px;left:0;width:1px;height:5px;background:#EE6723;}
.distance.v:after{top:auto;bottom:0;}
.distance.h:after{left:auto;right:0;}
.note{position:absolute;margin:-12px 0 0 -12px;width:24px;height:24px;background:#F5A623;border-radius:50%;border:2px solid #FFF;box-shadow:0 0 3px rgba(0,0,0,.24);}
.note:before{content:attr(data-index);font-size:12px;display:block;color:#FFF;text-align:center;width:100%;height:100%;line-height:20px;}
.note:hover{box-shadow:0 0 3px rgba(0,0,0,.64);}
.note div{position:absolute;top:50%;left:30px;border-radius:4px;padding:8px;background:#FFF;box-shadow:0 0 3px rgba(0,0,0,.5);-webkit-user-select:text;color:#222;transform:translateY(-50%);z-index:2;}
.note div:before{content:"";position:absolute;left:-7px;top:50%;width:8px;height:14px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAMAAABf788oAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAADR0dEAAAAAAAAAAAAAAAAAAADNzc0AAAAAAADa2trk5OT////5auFFAAAAEXRSTlMAAgYKEhydNCkYDiOfLieWjz4MUj4AAABrSURBVBjTZZFbDoAgEANVFHmIOve/rERjWGj/psnCbjv1gg7nGTpcFmtUdA4Mu7QmMLzGGMHwlvMNhs9yAY3D7qkamcYHr/75ys1IMRePNbbwsRo6oo/qt7rY6Ohxer4GpBFqyFqDFtWqfAD4dQrlWDmShAAAAABJRU5ErkJggg==) no-repeat;background-size:8px 14px;transform:translateY(-50%);}
.slidebox{position:relative;width:40px;height:20px;display:inline-block;}
.slidebox input{visibility:hidden;}
.slidebox label{position:absolute;top:0;left:0;width:40px;height:20px;background:#898989;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.3);border-radius:10px;cursor:pointer;transition:all .2s ease;}
.slidebox label:after{position:absolute;content:"";top:2px;left:2px;width:16px;height:16px;background-image:linear-gradient(-180deg,#F8F9F6 0,#F5F5F5 100%);box-shadow:0 1px 2px 0 rgba(0,0,0,.3);border-radius:8px;transition:all .15s ease;}
.slidebox input[type=checkbox]:checked+label{background:#3484F5;}
.slidebox input[type=checkbox]:checked+label:after{left:22px;}
.inspector{overflow:auto;}
.inspector h2,.inspector h3{margin:0;padding:0;font-weight:400;}
.inspector h2{font-size:12px;line-height:24px;padding:12px 16px;text-align:center;}
.inspector h3{height:32px;font-size:12px;line-height:32px;padding:0 16px;background-image:linear-gradient(90deg,rgba(0,4,9,.32) 0,rgba(0,2,4,0) 100%);}
.inspector .context{padding:16px;}
.inspector .color,.inspector .item{display:flex;margin:0 0 8px;}
.inspector .item[data-label]:before{content:attr(data-label);display:block;width:70px;font-size:12px;height:24px;line-height:24px;}
.inspector .color:last-child,.inspector .item:last-child{margin:0;}
.inspector .item div,.inspector .item label{flex:1;}
.inspector .item label{padding:0 4px;}
.inspector .item label:first-child{padding:0 4px 0 0;}
.inspector .item label:last-child{padding:0 0 0 4px;}
.inspector .item label:only-child{padding:0;}
.inspector .item label[data-label]:after{content:attr(data-label);font-size:10px;text-align:center;display:block;margin:2px 0 0;}
.inspector input,.inspector textarea{padding:3px 4px;width:100%;background:rgba(255,255,255,.05);border-radius:2px;border:0;line-height:18px;height:24px;font-size:12px;color:#FFF;text-align:center;outline:0;resize:none;}
.inspector textarea{min-width:100%;height:auto;text-align:left;}
.context h4{font-size:12px;font-weight:400;position:0;margin:0 0 16px;color:#FFF;}
.context h4:before{margin:0 10px 0 0;display:inline-block;content:"";width:8px;height:8px;border-radius:1px;background:#3484F5;}
.context .colors{margin:0 0 8px;}
.context .colors:last-child,.context .items-group:last-child{margin:0;}
.context .items-group{margin:0 0 24px;}
.inspector .color{display:block;}
.inspector .color[data-name]:after{content:attr(data-name);font-size:10px;text-align:center;padding:0 0 0 24px;display:block;margin:2px 0 0;}
.inspector .color label,.inspector .color label em,.inspector .color label em i{position:absolute;display:block;width:24px;height:24px;padding:0;}
.inspector .color label em{position:relative;background-color:#fff;background-image:linear-gradient(45deg,#dddadc 25%,transparent 25%,transparent 75%,#dddadc 75%,#dddadc),linear-gradient(45deg,#dddadc 25%,transparent 25%,transparent 75%,#dddadc 75%,#dddadc);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:2px 0 0 2px;overflow:hidden;}
.inspector .color label em i{position:relative;}
.inspector .item .color input{text-align:center;}
.inspector .color input{padding-left:32px;width:100%;text-align:left;}
.gradient .color label:before{position:absolute;top:12px;left:11px;content:"";width:2px;height:32px;background:#FFF;z-index:2;box-shadow:0 0 2px 1px rgba(0,0,0,.2);}
.gradient .color label:after{position:absolute;top:8px;left:8px;content:"";width:8px;height:8px;background:#FFF;z-index:3;border-radius:4px;box-shadow:0 0 2px 1px rgba(0,0,0,.2);}
.gradient .color[data-name] label:before{height:42px;}
.gradient .color:last-child label:before{display:none;}
.navbar section{position:relative;overflow:auto;}
.artboard-list,.asset-list,.color-list{margin:0;padding:0;list-style:none;}
.artboard-list li{padding:16px;display:flex;cursor:pointer;}
.artboard-list li:hover,.asset-list li:hover,.color-list li:hover{background:#191A1E;}
.artboard-list li.active{background:#454748;}
.preview-img{display:block;width:44px;height:44px;text-align:center;background:rgba(0,0,0,.32);}
.preview-img:before{content:' ';display:inline-block;vertical-align:middle;height:100%;}
.preview-img img{max-width:44px;max-height:44px;background:#FFF;vertical-align:middle;}
.pages-select{padding:24px;position:relative;}
.pages-select h3{margin:0;text-align:center;font-size:12px;font-weight:400;color:#FFF;cursor:pointer;}
.page-list em,.pages-select h3 em{font-style:normal;font-size:10px;color:#989A9C;}
.pages-select h3:after{content:"";margin:0 0 0 4px;width:12px;height:6px;display:inline-block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMAgMAAAAFXpXmAAAACVBMVEUAAABiZGZgYmThY1mHAAAAAnRSTlMAgJsrThgAAAA1SURBVAjXFckxAQAgDMTAZ6kI1KAHNYjoAipJsmS47Ec303XKnQy3AkIRm5UUUAIhERIhEfoqmRfpcqcFcAAAAABJRU5ErkJggg==) no-repeat;background-size:12px 6px;}
.pages-select .page-list{display:none;position:absolute;left:50%;transform:translateX(-50%);margin:-32px 0 0;padding:8px;border-radius:4px;list-style:none;width:180px;background:#0F0F0F;box-shadow:0 2px 10px 0 rgba(0,0,0,.8);}
.pages-select:focus{outline:0;}
.pages-select:focus .page-list{display:block;}
.pages-select .page-list label{padding:10px;cursor:pointer;}
.pages-select .page-list label,.pages-select .page-list span{display:block;}
.page-list span:before{position:absolute;right:8px;}
.exportable{margin:0;padding:0;list-style:none;background:#191A1E;border:1px solid #2D2F31;border-radius:4px;}
.exportable li{position:relative;padding:0 8px;height:32px;line-height:32px;border-bottom:1px solid #222;white-space:nowrap;text-overflow:ellipsis;}
.exportable li a{color:#FFF;text-decoration:none;outline:0;}
.exportable li:last-child{border:0;}
.exportable img{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}
.asset-list li,.color-list li{padding:24px;display:flex;cursor:pointer;}
.color-list li{cursor:default;}
.asset-list li picture,.color-list li em{position:relative;display:block;text-align:center;width:32px;height:32px;background-color:#4A4A4A;background-image:linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000),linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000);background-size:8px 8px;background-position:0 0,4px 4px;border-radius:2px;}
.color-list li em{background-color:#fff;background-image:linear-gradient(45deg,#dddadc 25%,transparent 25%,transparent 75%,#dddadc 75%,#dddadc),linear-gradient(45deg,#dddadc 25%,transparent 25%,transparent 75%,#dddadc 75%,#dddadc);border-radius:50%;overflow:hidden;}
.color-list li em i{position:absolute;top:0;left:0;right:0;bottom:0;}
.artboard-list li div,.asset-list li div,.color-list li div{padding:0 0 0 16px;flex:1;}
.artboard-list li div{padding:6px 0 4px 16px;}
.asset-list li picture:before{content:"";display:inline-block;height:100%;vertical-align:middle;}
.asset-list li picture img{vertical-align:middle;max-width:28px;max-height:28px;}
.asset-list li picture:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;}
.artboard-list h3, .asset-list h3,.color-list h3{margin:0 0 4px;padding:0;color:#FFF;font-size:12px;font-weight:400;overflow:hidden;text-overflow:ellipsis;}
.artboard-list small, .asset-list small,.color-list small{font-size:10px;}
.artboard-list li.active small{color:#FFF;}
.empty{position:absolute;top:30%;left:0;right:0;transform:translateY(-50%);vertical-align:middle;text-align:center;}
.message{position:absolute;top:50%;left:50%;padding:10px 20px;max-width:320px;transform:translateX(-50%) translateY(-50%);text-align:center;border-radius:4px;background:rgba(0,0,0,.96);border: 1px solid rgba(255,255,255,.16);color:#FFF;box-shadow:0 2px 10px rgba(0,0,0,.32);z-index:9;display:none;}
.cursor{position:absolute;display:none;margin:-8px 0 0 -8px;top:50%;left:50%;width:16px;height:17px;background-size:16px 17px;background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAABVlBMVEUAAAAGBgYBAQEBAQEAAAAAAAAAAAAnJycAAAA3NzcDAwMNDQ0AAAAAAAAAAAAhISEbGxsYGBgPDw8CAgIDAwMBAQEAAAAAAAAAAAAAAAAAAAAvLy8UFBQCAgIBAQEAAAAAAAAAAAAAAAAAAAA+Pj5BQUE/Pz8zMzMCAgIDAwMDAwMCAgIBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7OzsAAAAAAAAAAAAAAAD///8AAABhYWEdHR36+vpVVVX9/f329vbz8/Pb29uBgYF0dHRjY2MsLCz39/ft7e3r6+vR0dFxcXFSUlJNTU3X19fKysq4uLh3d3dXV1dJSUlGRkZERETv7+/o6Ojj4+O8vLy1tbW0tLSnp6empqaTk5OKioqGhoZtbW1nZ2dcXFxPT0/Dw8PCwsKwsLCurq6pqamhoaGZmZmNjY16enpeXl5JnG7xAAAAPHRSTlMA/fj9B1EC/jf+/vw8Ew7+/fz85t26mpRoYyX9/OLMoHlKMiL+/f398enY0cC1tLGojouGVh4Z/qpyQy7UG/vLAAACHUlEQVQ4T33QVVdbURBA4bk3QjwQIIa7u9T2QDwQxx2K1+X/v/QhlzRpWN2v51tnZo1IS4ERx4b8J4epaht+5cHpiKzGRfzmxH55R0ftseERZwuIqGGY6xLTLKSNoTlV7W0WY7Z8qjRhflgxADrUOMjcarQJjGgZiqHecBfAuB4Cfb1NwKcHwJ0OdgKc6jWw1S0y5rLXgd18AIqGdtVBGdjpti+r9sTrYqkrBSS1H+BEz4GjnojmvnutQQ79AnxTL8CxFoCkqXnYmakD58AkkPEYADUPQFVDGajOWmsOaxboU4DnEEBN80Dfgoj4og7/pu0QeNQ08NxZ32QPEp41cS6rqvluqT8FX4MJIPcEkHQDn9Qh65rP7le1W/dpKVEAcraArHpTQE71nvZO50TWjAxARU9eAaGwiEtvARJTnQCpNKTPIFEEuNCoiCwYnwGKWYCKG7bGobILcK0+EfHPevcafz4FoboLW9sA9xoQEdmY6Si8gN9BSDZArad+xvf66wVsbTeBMyNiHXrIs9cMOixwp6MW8E9PWmBnG44scOFdlJdi+tMCXQ2QcE/HG8D5Vj8CkO+Axymo7HKoDvmbfd5zA5AoQeYcCqWsLSzNBeZtP2guZ/O3ALEvWlMoveksQ7JH/sk56K6DmjkQTHM8+C+Qof6rg8vLqweNumzHN+7uNhDWeisiMVN1oA3YR10un8+1KSISiI/Z28Dr/QHPa6Em8DfwfAAAAABJRU5ErkJggg==');background-repeat:no-repeat;cursor:none;z-index:1;
}
.cursor.show{display:block;}
.cursor.moving{background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAABMlBMVEUAAAAAAAA2NjYsLCwCAgIAAAAAAAAMDAwBAQECAgIBAQECAgIBAQEBAQEAAAAAAAAAAAA5OTkgICAICAgAAAAcHBwCAgIAAAAAAAAAAAAAAAAAAABDQ0M8PDwxMTE0NDQVFRUCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDw8DAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAABhYWEcHBz6+vr39/dMTEzs7Oy8vLy4uLhWVlYqKiooKCj09PTw8PC1tbWnp6d2dnZZWVn8/Pzp6enj4+Pd3d3a2trNzc2tra2pqammpqaKioqAgIBzc3NwcHBmZmZdXV1TU1NHR0c+Pj7W1tbR0dHGxsbAwMCampqSkpKPj4+GhoZycnJsbGwkJCTy91wiAAAANnRSTlMAPP7+/ZcN/Pnr487Kv7QlEv7+/fz71jk2GAcE/v7+/fzzpaCUkGZZQTEsIAn826uEg3JtXFGryOxIAAABkElEQVR4AeXS1XLbQBjF8RXIDHbNdiBpOCnDOa4kg2Oww9w2KUPf/xW6s8q2sTXT6X1+t99/NJozK+6lR8ZmRPzDZpxc3sg9y2Sez3aNl+mUsx23TjpzxbJtmnaqMR08ZO8mGuNn4JA8AU75YiXl5ISW5SXwgTwAUGIfcAuM3thpoRnsAJhnC8DcY0gWj3HBmg5qPAdw1nMBfJ9Aai4AQ1aFllzENNcD2jSEsuOkEvyIEB1k44XrEicI6bCigtXoIbzFN5D2PMAbAG4L0im3VVD2AQyOIF3lgeY88MOC9JXBEEkf2rsHwHtLRup749jtikvTQU8Hflkor/hJB00ZdHUwKKwKJRLP70FRh+7ubXDOLRHY4GU4wEE0I7Q1foPyVh4mQeCay1nxx1OeqWC8K6MF4MrCmK/FX/W0PQKCgfr7gLd/ZDvirkiaX3DXRTE381wzHEFp5UvHQPeJmNFImlD8WOJXH35SzFpZGnba7eFPrleK1yMzEQocBtaEWI+R4aC+Va0YRrWm/jm7Uxf/5zeExWvZghlTSgAAAABJRU5ErkJggg==');}
    </style>
    <script type="text/javascript">
    <!--
    /*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
var I18N = {},
    lang = navigator.language.toLocaleLowerCase(),
    timestamp = new Date().getTime();

(function(window) {

    String.prototype.firstUpperCase = function(){
        return this.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
            return $1.toUpperCase() + $2.toLowerCase();
        });
    }
    var _ = function(str){
        return (I18N[lang] && I18N[lang][str])? I18N[lang][str]: str;
    }
    var SMApp = function(project) {
        return new SMApp.fn.init(project);
    }
    SMApp.fn = SMApp.prototype = {
        constructor:SMApp,
        artboardID: undefined,
        selectedID: undefined,
        targetID: undefined,
        zoomSize: function(size) {
            return (size * this.configs.zoom);
        },
        percentageSize: function(size, size2){
            return (Math.round( size / size2 * 1000 ) / 10) + "%";
        },
        unitSize: function(length, isText){
            var length = Math.round( length / this.configs.scale * 100 ) / 100,
                units = this.configs.unit.split("/"),
                unit = units[0];
            if( units.length > 1 && isText){
                unit = units[1];
            }
            return length + unit;
        },
        scaleSize: function (length){
            return Math.round( length / this.configs.scale * 10 ) / 10;
        },
        positive: function(number) {
            return number < 0 ? -number :number;
        },
        isIntersect: function(selectedRect, targetRect){
            return !(
                selectedRect.maxX <= targetRect.x ||
                selectedRect.x >= targetRect.maxX ||
                selectedRect.y >= targetRect.maxY ||
                selectedRect.maxY <= targetRect.y
            );
        },
        getID: function(element){
            return '#' + $(element).attr('id');
        },
        getIndex: function(element){
            return $(element).attr('data-index');
        },
        getRect: function( index ){
            var layer = this.current.layers[index];
            return {
                x: layer.rect.x,
                y: layer.rect.y,
                width: layer.rect.width,
                height: layer.rect.height,
                maxX: layer.rect.x + layer.rect.width,
                maxY: layer.rect.y + layer.rect.height
            }
        },
        getDistance: function(selected, target){
            return {
                top: (selected.y - target.y),
                right: (target.maxX - selected.maxX),
                bottom: (target.maxY - selected.maxY),
                left: (selected.x - target.x)
            }
        },
        message: function(msg){
            var $message = $('#message').text(msg);
            $message.hide().fadeIn().delay( 1000 ).fadeOut('fast');
        },
        locationHash: function(options){
            if(options){
                var objHash = {},
                    arrHash = [];
                $.each(options, function(key, value){
                    if( /[a-z]+/.test(key) && !isNaN(value) ){
                        objHash[key] = parseInt(value);
                        arrHash.push(key + value);
                    }
                });
                window.history.replaceState(undefined, undefined, '#' + arrHash.join('-'));
                return objHash;
            }
            else{
                var objHash = {},
                    hash = window.location.hash.replace(/[\#\-]([a-z]+)([\d]+)/ig, function(match, key, value){
                        objHash[key] = parseInt(value);
                    });
                return objHash;
            }
        },
        render: function() {
            $('#app').html([
                '<header>',
                    '<div class="header-left">',
                        '<ul class="tab">',
                            '<li class="icon-artboards current" data-id="artboards"></li>',
                            '<li class="icon-slices" data-id="slices"></li>',
                            '<li class="icon-colors" data-id="colors"></li>',
                        '</ul>',
                    '</div>',
                    '<div class="header-center">',
                        '<div id="zoom" class="zoom-widget"></div>',
                        '<h1></h1>',
                        '<div class="show-notes">',
                            '<label for="show-notes">' + _('NOTES') + '</label>',
                            '<div class="slidebox">',
                                '<input id="show-notes" type="checkbox" name="show-notes" checked="checked">',
                                '<label for="show-notes"></label>',
                            '</div>',
                        '</div>',
                    '</div>',
                    '<div class="header-right"><div id="unit" class="unit-box" tabindex="0">XHDPI @2x (dp/sp)</div></div>',
                '</header>',
                '<main>',
                    '<aside class="navbar on">',
                        '<section id="artboards"></section>',
                        '<section id="slices" style="display: none;"><div class="empty">' + _('No slices added!') + '</div></section>',
                        '<section id="colors" style="display: none;"><div class="empty">' + _('No colors added!') + '</div></section>',
                    '</aside>',
                    '<section class="screen-viewer">',
                        '<div class="screen-viewer-inner">',
                            '<div id="screen" class="screen">',
                                '<div id="rulers" style="display:none;">',
                                    '<div id="rv" class="ruler v"></div>',
                                    '<div id="rh" class="ruler h"></div>',
                                '</div>',
                                '<div id="layers"></div>',
                                '<div id="notes"></div>',
                                '<div id="td" class="distance v" style="display:none;"><div data-height="3"></div></div>',
                                '<div id="rd" class="distance h" style="display:none;"><div data-width=""></div></div>',
                                '<div id="bd" class="distance v" style="display:none;"><div data-height=""></div></div>',
                                '<div id="ld" class="distance h" style="display:none;"><div data-width=""></div></div>',
                            '</div>',
                        '</div>',
                        '<div class="overlay"></div>',
                    '</section>',
                    '<aside id="inspector" class="inspector"></aside>',
                '</main>',
                '<div id="message" class="message"></div>',
                '<div id="cursor" class="cursor"></div>'
            ].join(''));
            this.zoom();
            this.unit();
            this.artboards();
            this.slices();
            this.colors();
            this.screen();
            this.layers();
            this.notes();
            this.events();
        },
        screen: function() {
            var imageData = (this.current.imageBase64)? this.current.imageBase64: this.current.imagePath + '?' + timestamp;

            if(!this.maxSize){
                var screenSize = (this.current.width > this.current.height)? this.current.width: this.current.height,
                    artboardSize = ($('.screen-viewer').outerWidth() > $('.screen-viewer').outerHeight())? $('.screen-viewer').outerWidth(): $('.screen-viewer').outerHeight();
                this.maxSize = (screenSize > artboardSize)? screenSize * 5: artboardSize * 5;

                $('#screen').parent().css({
                    width: this.maxSize,
                    height: this.maxSize
                });

                var scrollMaxX = this.maxSize - $('.screen-viewer').outerWidth(),
                    scrollMaxY = this.maxSize - $('.screen-viewer').outerHeight(),
                    scrollLeft = .5 * scrollMaxX,
                    scrollTop = .5 * scrollMaxY;

                $('.screen-viewer').scrollLeft(scrollLeft);
                $('.screen-viewer').scrollTop(scrollTop);
            }

            $('#screen').css({
                width: this.zoomSize( this.current.width ),
                height: this.zoomSize( this.current.height ),
                background: '#FFF url(' + imageData + ') no-repeat',
                backgroundSize: this.zoomSize( this.current.width ) + 'px ' + this.zoomSize( this.current.height ) + 'px'
            });

            $('.screen').css({
                marginLeft: -  parseInt( this.zoomSize( this.current.width / 2 ) ),
                marginTop: - parseInt( this.zoomSize( this.current.height / 2 ) )
            });

        },
        zoom: function(){
            var zoomText = this.configs.zoom * 100 + '%',
                inDisabled = (this.configs.zoom <= .25)? ' disabled="disabled"': '',
                outDisabled = (this.configs.zoom >= 4)? ' disabled="disabled"': '';
            $('#zoom').html([
                '<button class="zoom-in"' + inDisabled + '></button>',
                '<label class="zoom-text">' + zoomText + '</label>',
                '<button class="zoom-out"' + outDisabled + '></button>'
            ].join(''));
        },
        unit: function(){
            var self = this,
                unitsData = [
                    {
                        units: [
                            {
                                name: _('Standard'),
                                unit: 'px',
                                scale: 1
                            }
                        ]
                    },
                    {
                        name: _('iOS Devices'),
                        units: [
                            {
                                name: _('Points') + ' @1x',
                                unit: 'pt',
                                scale: 1
                            },
                            {
                                name: _('Retina') + ' @2x',
                                unit: 'pt',
                                scale: 2
                            },
                            {
                                name: _('Retina HD') + ' @3x',
                                unit: 'pt',
                                scale: 3
                            }
                        ]
                    },
                    {
                        name: _('Android Devices'),
                        units: [
                            {
                                name: 'LDPI @0.75x',
                                unit: 'dp/sp',
                                scale: .75
                            },
                            {
                                name: 'MDPI @1x',
                                unit: 'dp/sp',
                                scale: 1
                            },
                            {
                                name: 'HDPI @1.5x',
                                unit: 'dp/sp',
                                scale: 1.5
                            },
                            {
                                name: 'XHDPI @2x',
                                unit: 'dp/sp',
                                scale: 2
                            },
                            {
                                name: 'XXHDPI @3x',
                                unit: 'dp/sp',
                                scale: 3
                            },
                            {
                                name: 'XXXHDPI @4x',
                                unit: 'dp/sp',
                                scale: 4
                            }
                        ]
                    },
                    {
                        name: _('Web View'),
                        units: [
                            {
                                name: 'CSS Rem 12px',
                                unit: 'rem',
                                scale: 12
                            },
                            {
                                name: 'CSS Rem 14px',
                                unit: 'rem',
                                scale: 14
                            },
                            {
                                name: 'CSS Rem 16px',
                                unit: 'rem',
                                scale: 16
                            }
                        ]
                    }
                ],
                unitHtml = [],
                unitList = [],
                unitCurrent = '',
                hasCurrent = '';
                $.each(unitsData, function(index, data){
                    if(data.name) unitList.push('<li class="sub-title">' + _(data.name) + '</li>');
                    $.each(data.units, function(index, unit){
                        var checked = '';
                        // if(unit.scale == self.configs.scale){
                            if( unit.unit == self.configs.unit && unit.scale == self.configs.scale ){
                                checked = ' checked="checked"';
                                hasCurrent = _(unit.name);
                            }
                            unitList.push('<li><label><input type="radio" name="resolution" data-name="' + _(unit.name) + '" data-unit="' + unit.unit + '" data-scale="' + unit.scale + '"' + checked + '><span>' + _(unit.name) + '</span></label></li>');
                        // }
                    });
                });
                if(!hasCurrent){
                    unitCurrent = '<li><label><input type="radio" name="resolution" data-name="' + _('Custom') + ' (' + self.configs.scale + ', ' + self.configs.unit + ')" data-unit="' + self.configs.unit + '" data-scale="' + self.configs.scale + '" checked="checked"><span>' + _('Custom') + ' (' + self.configs.scale + ', ' + self.configs.unit + ')</span></label></li>';
                    hasCurrent = _('Custom') + ' (' + self.configs.scale + ', ' + self.configs.unit + ')';
                }
                unitHtml.push(
                    '<div class="overlay"></div>',
                    '<h3>' + _('Design resolution') + '</h3>',
                    '<p>' + hasCurrent + '</p>',
                    '<ul>',
                        unitCurrent,
                        unitList.join(''),
                    '</ul>'
                );
            $('#unit').html(unitHtml.join(''));
        },
        artboards: function(){
            var self = this,
                artboardListHTML = [],
                pagesSelect = [],
                pagesData = {};
            artboardListHTML.push('<ul class="artboard-list">');
            $.each(this.project.artboards, function(index, artboard){
                if(!pagesData[artboard.pageObjectID]){
                    pagesData[artboard.pageObjectID] = {
                        name: artboard.pageName,
                        objectID: artboard.pageObjectID,
                        count: 0
                    };
                }
                pagesData[artboard.pageObjectID].count++;
                var classNames = (self.artboardIndex == index && !artboard.fileName)? ' active': '',
                    fileName = (artboard.fileName)? ' data-file="' + artboard.fileName + '"': '',
                    imageData = (artboard.imageBase64)? artboard.imageBase64: artboard.imagePath + '?' + timestamp;
                artboardListHTML.push(
                        '<li id="artboard-' + index + '"' + fileName + ' class="artboard' + classNames + '" data-page-id="' + artboard.pageObjectID + '" data-id="' + artboard.objectID + '" data-index="' + index + '" >',
                            '<picture class="preview-img" data-name="' + artboard.name + '">',
                                '<img alt="' + artboard.name + '" src="' + imageData + '">',
                            '</picture>',
                            '<div>',
                            '<h3>' + artboard.name + '</h3>',
                            '<small>' + artboard.pageName + '</small>',
                            '</div>',
                        '</li>'
                    );
            });
            artboardListHTML.push('</ul>');
            pagesSelect.push('<div class="pages-select" tabindex="0">');
            pagesSelect.push('<h3>' + _('All artboards') + ' <em>(' + this.project.artboards.length + ')</em></h3>');
            pagesSelect.push('<ul class="page-list">');
            pagesSelect.push('<li><label><input type="radio" name="page" value="all" checked="checked"><span>' + _('All artboards') + ' <em>(' + this.project.artboards.length + ')</em></span></label></li>');
            $.each(pagesData, function(objectID, artboard){
                pagesSelect.push('<li><label><input type="radio" name="page" value="' + artboard.objectID + '"><span>' + artboard.name  + ' <em>(' + artboard.count + ')</em></span></label></li>');
            })
            pagesSelect.push('</ul>');
            pagesSelect.push('</div>');

            $('#artboards')
                .html([pagesSelect.join(''), artboardListHTML.join('')].join(''));
            return this;
        },
        layers: function() {
            var self = this,
                layersHTML = [];
            $.each(this.current.layers, function(index, layer) {
                var x = self.zoomSize( layer.rect.x ),
                    y = self.zoomSize( layer.rect.y ),
                    width = self.zoomSize( layer.rect.width ),
                    height = self.zoomSize( layer.rect.height ),
                    classNames = ['layer'];

                classNames.push('layer-' + layer.objectID);
                if(self.selectedIndex == index) classNames.push('selected');
                layersHTML.push([
                    '<div id="layer-' + index + '" class="' + classNames.join(' ') + '" data-index="' + index + '" percentage-width="' + self.percentageSize(layer.rect.width, self.current.width) + '" percentage-height="' + self.percentageSize(layer.rect.height, self.current.height) + '" data-width="' + self.unitSize(layer.rect.width) + '" data-height="' + self.unitSize(layer.rect.height) + '" style="left: ' + x + 'px; top: ' + y + 'px; width: ' + width + 'px; height: ' + height + 'px;">',
                        '<i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i>',
                        '<b class="et h"></b><b class="er v"></b><b class="eb h"></b><b class="el v"></b>',
                    '</div>'
                ].join(''));
            });
            $('#layers').html(layersHTML.join(''));
        },
        slices: function(){
            if(!this.project.slices){
                return false;
            }
            var self = this,
                sliceListHTML = [];
            sliceListHTML.push('<ul class="asset-list">');
            $.each(this.project.slices, function( index, sliceLayer ){
                if(sliceLayer.exportable.length > 0){
                    var asset = JSON.parse( JSON.stringify( sliceLayer.exportable ) ).pop();
                    sliceListHTML.push(
                        '<li id="slice-' + sliceLayer.objectID + '" class="slice-layer" data-objectId="' + sliceLayer.objectID + '">',
                            '<picture><img src="' +  'assets/' + asset.path + '?' + timestamp + '" alt=""></picture>',
                            '<div>',
                                '<h3>' + sliceLayer.name + '</h3>',
                                '<small>' + self.unitSize(sliceLayer.rect.width) + ' × ' + self.unitSize(sliceLayer.rect.height) + '</small>',
                            '</div>',
                        '</li>');
                }
            });
            sliceListHTML.push('</ul>');
            if(this.project.slices.length > 0){
                $('#slices').html(sliceListHTML.join(''));
            }
            return this;
        },
        colors: function(colors){
            if(!this.project.colors){
                return false;
            }
            var self = this,
                colorListHTML = [];
            this.project.colorNames = {};
            colorListHTML.push('<ul class="color-list">');
            $.each(this.project.colors, function( index, color ){
                self.project.colorNames[color.color['argb-hex']] = color.name;
                colorListHTML.push(
                    '<li id="color-' + index + '" data-color="' + encodeURI(JSON.stringify(color.color)) + '">',
                        '<em><i style="background:' + color.color['css-rgba'] + '"></i></em>',
                        '<div>',
                            '<h3>' + color.name + '</h3>',
                            '<small>' + color.color[self.configs.colorFormat] + '</small>',
                        '</div>',
                    '</li>');
            });
            colorListHTML.push('</ul>');
            if(this.project.colors.length > 0){
                $('#colors').html(colorListHTML.join(''));
            }
            return this;
        },
        notes: function(){
            var self = this,
                notesHTML = [];
            $.each(this.current.notes, function(index, note){
                notesHTML.push('<div class="note" data-index="' + (index + 1) +'" style="left: ' + self.zoomSize(note.rect.x) + 'px; top: ' + self.zoomSize(note.rect.y) + 'px;"><div style="white-space:nowrap;display:none;">' + note.note + '</div></div>');
            })
            $('#notes').html(notesHTML.join(''));
        },
        getEdgeRect: function( event ){
            var offset = $('#screen').offset();
            var x = (event.pageX - offset.left) / this.configs.zoom,
                y = (event.pageY - offset.top) / this.configs.zoom,
                width = 10,
                height = 10,
                xScope = ( x >= 0 && x <= this.current.width ),
                yScope = ( y >= 0 && y <= this.current.height );
            // left and top
            if( x <= 0 && y <= 0 ){
                x = -10;
                y = -10;
            }
            // right and top
            else if( x >= this.current.width && y <= 0 ){
                x = this.current.width;
                y = -10;
            }
            // right and bottom
            else if( x >= this.current.width && y >= this.current.height ){
                x = this.current.width;
                y = this.current.height;
            }
            // left and bottom
            else if( x <= 0 && y >= this.current.height ){
                x = -10;
                y = this.current.height;
            }
            // top
            else if( y <= 0 && xScope ){
                x = 0;
                y = -10;
                width = this.current.width;
            }
            // right
            else if( x >= this.current.width && yScope ){
                x = this.current.width;
                y = 0;
                height = this.current.height;
            }
            // bottom
            else if( y >= this.current.height && xScope ){
                x = 0;
                y = this.current.height;
                width = this.current.width;
            }
            // left
            else if( x <= 0 && yScope ){
                x = -10;
                y = 0;
                height = this.current.height;
            }
            if( xScope && yScope ){
                x = 0;
                y = 0;
                width = this.current.width;
                height = this.current.height;
            }
            return {
                x: x,
                y: y,
                width: width,
                height: height,
                maxX: x + width,
                maxY: y + height
            }
        },
        distance: function(){
            if( ( this.selectedIndex && this.targetIndex && this.selectedIndex != this.targetIndex ) || ( this.selectedIndex && this.tempTargetRect ) ){
                var selectedRect = this.getRect(this.selectedIndex),
                    targetRect = this.tempTargetRect || this.getRect(this.targetIndex),
                    topData, rightData, bottomData, leftData,
                    x = this.zoomSize(selectedRect.x + selectedRect.width / 2),
                    y = this.zoomSize(selectedRect.y + selectedRect.height / 2);
                if(!this.isIntersect(selectedRect, targetRect)){
                    if(selectedRect.y > targetRect.maxY){ //top
                        topData = {
                            x: x,
                            y: this.zoomSize(targetRect.maxY),
                            h: this.zoomSize(selectedRect.y - targetRect.maxY),
                            distance: this.unitSize(selectedRect.y - targetRect.maxY),
                            percentageDistance: this.percentageSize((selectedRect.y - targetRect.maxY), this.current.height)
                        };
                    }
                    if(selectedRect.maxX < targetRect.x){ //right
                        rightData = {
                            x: this.zoomSize(selectedRect.maxX),
                            y: y,
                            w: this.zoomSize(targetRect.x - selectedRect.maxX),
                            distance: this.unitSize(targetRect.x - selectedRect.maxX),
                            percentageDistance: this.percentageSize((targetRect.x - selectedRect.maxX), this.current.width)
                        }
                    }
                    if(selectedRect.maxY < targetRect.y){ //bottom
                        bottomData = {
                            x: x,
                            y: this.zoomSize(selectedRect.maxY),
                            h: this.zoomSize(targetRect.y - selectedRect.maxY),
                            distance: this.unitSize(targetRect.y - selectedRect.maxY),
                            percentageDistance: this.percentageSize((targetRect.y - selectedRect.maxY), this.current.height)
                        }
                    }
                    if(selectedRect.x > targetRect.maxX){ //left
                        leftData = {
                            x: this.zoomSize(targetRect.maxX),
                            y: y,
                            w: this.zoomSize(selectedRect.x - targetRect.maxX),
                            distance: this.unitSize(selectedRect.x - targetRect.maxX),
                            percentageDistance: this.percentageSize((selectedRect.x - targetRect.maxX), this.current.width)
                        }
                    }
                }
                else{
                    var distance = this.getDistance(selectedRect, targetRect);
                    if (distance.top != 0) { //top
                        topData = {
                            x: x,
                            y: (distance.top > 0)? this.zoomSize(targetRect.y): this.zoomSize(selectedRect.y),
                            h: this.zoomSize(this.positive(distance.top)),
                            distance: this.unitSize(this.positive(distance.top)),
                            percentageDistance: this.percentageSize(this.positive(distance.top), this.current.height)
                        };
                    }
                    if (distance.right != 0) { //right
                        rightData = {
                            x: (distance.right > 0)? this.zoomSize(selectedRect.maxX): this.zoomSize(targetRect.maxX),
                            y: y,
                            w: this.zoomSize(this.positive(distance.right)),
                            distance: this.unitSize(this.positive(distance.right)),
                            percentageDistance: this.percentageSize(this.positive(distance.right), this.current.width)
                        };
                    }
                    if (distance.bottom != 0) { //bottom
                        bottomData = {
                            x: x,
                            y: (distance.bottom > 0)? this.zoomSize(selectedRect.maxY): this.zoomSize(targetRect.maxY),
                            h: this.zoomSize(this.positive(distance.bottom)),
                            distance: this.unitSize(this.positive(distance.bottom)),
                            percentageDistance: this.percentageSize(this.positive(distance.bottom), this.current.height)
                        };
                    }
                    if (distance.left != 0) { //left
                        leftData = {
                            x: (distance.left > 0)? this.zoomSize(targetRect.x): this.zoomSize(selectedRect.x),
                            y: y,
                            w: this.zoomSize(this.positive(distance.left)),
                            distance: this.unitSize(this.positive(distance.left)),
                            percentageDistance: this.percentageSize(this.positive(distance.left), this.current.width)
                        };
                    }
                }
                if (topData) {
                    $('#td')
                        .css({
                            left: topData.x,
                            top: topData.y,
                            height: topData.h,
                        })
                        .show();
                    $('#td div')
                        .attr('data-height', topData.distance)
                        .attr('percentage-height', topData.percentageDistance);
                }
                if (rightData) {
                     $('#rd')
                        .css({
                            left: rightData.x,
                            top: rightData.y,
                            width: rightData.w
                        })
                        .show();
                    $('#rd div')
                        .attr('data-width', rightData.distance )
                        .attr('percentage-width', rightData.percentageDistance);
                }
                if (bottomData) {
                    $('#bd')
                        .css({
                            left: bottomData.x,
                            top: bottomData.y,
                            height: bottomData.h,
                        })
                        .show();
                    $('#bd div')
                        .attr('data-height', bottomData.distance )
                        .attr('percentage-height', bottomData.percentageDistance);
                }
                if (leftData) {
                     $('#ld')
                        .css({
                            left: leftData.x,
                            top: leftData.y,
                            width: leftData.w
                        })
                        .show();
                    $('#ld div')
                        .attr('data-width', leftData.distance )
                        .attr('percentage-width', leftData.percentageDistance);
                }
                $('.selected').addClass('hidden');
            }
        },
        inspector: function(){
            if(!this.selectedIndex || (!this.current && !this.current.layers && !this.current.layers[this.selectedIndex])) return false;
            var self = this,
                layerData = this.current.layers[this.selectedIndex],
                html = [];
            html.push('<h2>' + layerData.name + '</h2>');
            // fix 0 [opacity]
            // PROPERTIES
            var position = [
                        '<div class="item" data-label="' +_('Position') + ':">',
                            '<label data-label="' +_('X') + '"><input id="position-x" type="text" value="' + this.unitSize(layerData.rect.x) + '" readonly="readonly"></label>',
                            '<label data-label="' +_('Y') + '"><input id="position-y" type="text" value="' + this.unitSize(layerData.rect.y) + '" readonly="readonly"></label>',
                        '</div>'
                    ].join(''),
                size = [
                        '<div class="item" data-label="' +_('Size') + ':">',
                            '<label data-label="' +_('Width') + '"><input id="size-width" type="text" value="' + this.unitSize(layerData.rect.width) + '" readonly="readonly"></label>',
                            '<label data-label="' +_('Height') + '"><input id="size-height" type="text" value="' + this.unitSize(layerData.rect.height) + '" readonly="readonly"></label>',
                        '</div>'
                    ].join(''),
                opacity = (typeof layerData.opacity == 'number')? [
                        '<div class="item" data-label="' +_('Opacity') + ':">',
                            '<label><input id="opacity" type="text" value="' + Math.round( layerData.opacity * 10000 ) / 100  + '%" readonly="readonly"></label>',
                            '<label></label>',
                        '</div>'
                    ].join(''): '',
                radius = (layerData.radius)? [
                        '<div class="item" data-label="' +_('Radius') + ':">',
                            '<label><input id="radius" type="text" value="' + this.unitSize(layerData.radius) + '" readonly="readonly"></label>',
                            '<label></label>',
                        '</div>'
                    ].join(''): '',
                styleName = (layerData.styleName)? [
                        '<div class="item" data-label="' +_('Style') + ':">',
                            '<label><input id="styleName" type="text" value="' + layerData.styleName + '" readonly="readonly"></label>',
                        '</div>'
                    ].join(''): '';
            html.push(this.propertyType('PROPERTIES', [ position, size, opacity, radius, styleName ].join('')));
            // FILLS
            if(layerData.fills && layerData.fills.length > 0){
                var fills = [],
                    fillsData = $.extend(true, [], layerData.fills);
                $.each(fillsData.reverse(), function(index, fill){
                    fills.push('<div class="item items-group" data-label="' +_(fill.fillType.firstUpperCase()) + ':">');
                    if (fill.fillType == "color") {
                        fills.push( self.colorItem(fill.color) );
                    }
                    else{
                        fills.push('<div class="gradient">');
                        $.each(fill.gradient.colorStops, function(index, gradient) {
                            fills.push(self.colorItem(gradient.color));
                        });
                        fills.push('</div>');
                    }
                    fills.push('</div>');
                });
                html.push(this.propertyType('FILLS', fills.join('')));
            }
            // TYPEFACE
            if(layerData.type == 'text'){
                var fontFamily = [
                            '<div class="item" data-label="' +_('Family') + ':">',
                                '<label><input id="font-family" type="text" value="' + layerData.fontFace + '" readonly="readonly"></label>',
                            '</div>'
                        ].join(''),
                    textColor = [
                            '<div class="item" data-label="' +_('Color') + ':">',
                                '<div class="color">',
                                    self.colorItem(layerData.color),
                                '</div>',
                            '</div>'
                        ].join(''),
                    fontSize = (layerData.fontSize)? [
                            '<div class="item" data-label="' +_('Size') + ':">',
                                '<label><input id="opacity" type="text" value="' + this.unitSize(layerData.fontSize, true) + '" readonly="readonly"></label>',
                                '<label></label>',
                            '</div>'
                        ].join(''): '',
                    spacing = [
                            '<div class="item" data-label="' +_('Spacing') + ':">',
                                '<label data-label="' +_('Character') + '"><input id="letter-spacing" type="text" value="' + this.unitSize(layerData.letterSpacing, true) + '" readonly="readonly"></label>',
                                '<label data-label="' +_('Line') + '"><input id="line-height" type="text" value="' + this.unitSize(layerData.lineHeight, true) + '" readonly="readonly"></label>',
                            '</div>'
                        ].join(''),
                    content = [
                            '<div class="item">',
                                '<label data-label="' + _('Content') + '"><textarea id="content" rows="2" readonly="readonly" style="font-family: ' + layerData.fontFace + ', sans-serif">' + layerData.content + '</textarea></label>',
                            '</div>'
                        ].join('');
                html.push(this.propertyType('TYPEFACE', [ fontFamily, textColor, fontSize, spacing, content ].join('')));
            }
            // BORDERS
            if(layerData.borders && layerData.borders.length > 0){
                var borders = [],
                    bordersData = $.extend(true, [], layerData.borders);
                $.each(bordersData.reverse(), function(index, border) {
                    borders.push(
                        '<div class="items-group">',
                            '<h4>' + _(border.position.firstUpperCase() + ' Border') + '</h4>',
                            '<div class="item" data-label="' +_('Weight') + ':">',
                                '<label><input id="font-family" type="text" value="' + self.unitSize(border.thickness) + '" readonly="readonly"></label>',
                                '<label></label>',
                            '</div>');
                    borders.push('<div class="item" data-label="' +_(border.fillType.firstUpperCase()) + ':">');
                    if (border.fillType == "color") {
                        borders.push(self.colorItem(border.color));
                    }
                    else{
                        borders.push('<div class="colors gradient">');
                        $.each(border.gradient.colorStops, function(index, gradient) {
                            borders.push(self.colorItem(gradient.color));
                        });
                        borders.push('</div>');
                    }
                    borders.push('</div>');
                    borders.push('</div>');
                });
                html.push(this.propertyType('BORDERS', borders.join('')));
            }
            // SHADOWS
            if(layerData.shadows && layerData.shadows.length > 0){
                var shadows = [],
                    shadowsData = $.extend(true, [], layerData.shadows);
                $.each(shadowsData.reverse(), function(index, shadow) {
                    shadows.push(
                        '<div class="items-group">',
                            '<h4>' + _(shadow.type.firstUpperCase() + ' Shadow') + '</h4>',
                            '<div class="item" data-label="' + _('Offset') + ':">',
                                '<label data-label="' +_('X') + '"><input id="offset-x" type="text" value="' + self.unitSize(shadow.offsetX) + '" readonly="readonly"></label>',
                                '<label data-label="' +_('Y') + '"><input id="offset-y" type="text" value="' + self.unitSize(shadow.offsetY) + '" readonly="readonly"></label>',
                            '</div>',
                            '<div class="item" data-label="' + _('Effect') + ':">',
                                '<label data-label="' +_('Blur') + '"><input id="offset-x" type="text" value="' + self.unitSize(shadow.blurRadius) + '" readonly="readonly"></label>',
                                '<label data-label="' +_('Spread') + '"><input id="offset-y" type="text" value="' + self.unitSize(shadow.spread) + '" readonly="readonly"></label>',
                            '</div>',
                            '<div class="item" data-label="' + _('Color') + ':">',
                                self.colorItem(shadow.color),
                            '</div>',
                        '</div>'
                    );
                });
                html.push(this.propertyType('SHADOWS', shadows.join('')));
            }
            // CODE TEMPLATE
            if(layerData.css && layerData.css.length > 0){
                var tab =  ['<ul class="tab" id="code-tab" >',
                        '<li class="icon-css-panel" data-id="css-panel" data-codeType="css"></li>',
                        '<li class="icon-android-panel" data-id="android-panel" data-codeType="android" ></li>',
                        '<li class="icon-ios-panel" data-id="ios-panel" data-codeType="ios" ></li>',
                        '</ul>'].join('')
                var css = [
                    '<div id="css-panel" class="code-item item">',
                    '<label><textarea id="css" rows="' + (layerData.css.length + 1) + '" readonly="readonly">' + layerData.css.join("\r\n") + '</textarea></label>',
                    '</div>'
                ].join('');

                var android = [];
                if(layerData.type == "text"){
                    android.push(
                            '<div id="android-panel"  class="code-item item">',
                            '<label><textarea id="css" rows="6" readonly="readonly">'
                            + "&lt;TextView\r\n" + this.getAndroidWithHeight(layerData)
                            + "android:text=\"" + layerData.content + "\"\r\n" + "android:textColor=\"" + layerData.color["argb-hex"] + "\"\r\n"
                            + "android:textSize=\"" + this.unitSize(layerData.fontSize, true) + "\"\r\n" + "/&gt;" + '</textarea></label>',
                            '</div>'
                    );
                }else if (layerData.type == "shape"){
                    android.push(
                            '<div id="android-panel" class="code-item item">',
                            '<label><textarea id="css" rows="6" readonly="readonly">'
                            + "&lt;View\r\n" + this.getAndroidWithHeight(layerData)
                            + this.getAndroidShapeBackground(layerData)
                            + "/&gt;" + '</textarea></label>',
                            '</div>'
                    );
                } else if (layerData.type = "slice"){
                    android.push(
                            '<div id="android-panel" class="code-item item">',
                            '<label><textarea id="css" rows="6" readonly="readonly">'
                            + "&lt;ImageView\r\n" + this.getAndroidWithHeight(layerData)
                            + this.getAndroidImageSrc(layerData) + "/&gt;"
                            + '</textarea></label>',
                            '</div>'
                    );
                }

                var ios = [];
                if(layerData.type == "text"){
                    ios.push(
                            '<div id="ios-panel"  class="code-item item">',
                            '<label><textarea id="css" rows="6" readonly="readonly">'
                            + "UILabel *label = [[UILabel alloc] init];\r\n"
                            + "label.frame = CGRectMake(" + this.scaleSize(layerData.rect.x) + "\, " + this.scaleSize(layerData.rect.y) + "\, "
                            + this.scaleSize(layerData.rect.width) + "\, " + this.scaleSize(layerData.rect.height) + ");\r\n"
                            + "label.text = \@\"" + layerData.content + "\";\r\n"
                            + "label.font = [UIFont fontWithName:\@\"" + layerData.fontFace + "\" size:" + this.scaleSize(layerData.fontSize) + "];\r\n"
                            + "label.textColor = [UIColor colorWithRed:" + layerData.color.r + "/255.0 green:" + layerData.color.g + "/255.0 blue:" + layerData.color.b + "/255.0 alpha:" + layerData.color.a + "/1.0];\r\n"
                            + '</textarea></label>',
                            '</div>'
                    );
                }else if (layerData.type == "shape"){
                    ios.push(
                            '<div id="ios-panel" class="code-item item">',
                            '<label><textarea id="css" rows="6" readonly="readonly">'
                            + "UIView *view = [[UIView alloc] init];\r\n"
                            + "view.frame = CGRectMake(" + this.scaleSize(layerData.rect.x) + "\, " + this.scaleSize(layerData.rect.y) + "\, "
                            + this.scaleSize(layerData.rect.width) + "\, " + this.scaleSize(layerData.rect.height) + ");\r\n"
                            + this.getIOSShapeBackground(layerData)
                            + '</textarea></label>',
                            '</div>'
                    );
                } else if (layerData.type = "slice"){
                    ios.push(
                            '<div id="ios-panel" class="code-item item">',
                            '<label><textarea id="css" rows="6" readonly="readonly">'
                            + "UIImageView *imageView = [[UIImageView alloc] init];\r\n"
                            + "imageView.frame = CGRectMake(" + this.scaleSize(layerData.rect.x) + "\, " + this.scaleSize(layerData.rect.y) + "\, "
                            + this.scaleSize(layerData.rect.width) + "\, " + this.scaleSize(layerData.rect.height) + ");\r\n"
                            + this.getIOSImageSrc(layerData)
                            + '</textarea></label>',
                            '</div>'
                    );
                }
                html.push(this.propertyType('CODE TEMPLATE', [ tab, css, android.join(''), ios.join('') ].join(''), true));
            }
            //  EXPORTABLE
            if(layerData.exportable && layerData.exportable.length > 0){
                var expHTML = [],
                    path = 'assets/'
                expHTML.push('<ul class="exportable">')
                $.each(layerData.exportable, function(index, exportable) {
                    var filePath = path + exportable.path;
                    expHTML.push(
                        '<li>',
                            '<a href="' + filePath + '" data-format="' + exportable.format.toUpperCase() + '"><img src="' + filePath + '" alt="' + exportable.path + '">' + exportable.path.replace('drawable-', '') + '</a>',
                        '</li>');
                });
                expHTML.push('</ul>')
                html.push(this.propertyType('EXPORTABLE', expHTML.join('')));
            }
            self.renderInspector(html);
        },
        getAndroidWithHeight: function (layerData) {
            return "android:layout_width=\"" + this.unitSize(layerData.rect.width, false) + "\"\r\n" + "android:layout_height=\"" + this.unitSize(layerData.rect.height, false) + "\"\r\n";
        },
        getAndroidShapeBackground: function (layerData) {
            var colorCode = "";
            if (layerData.type != "shape" || typeof(layerData.fills) == 'undefined' || layerData.fills.length == 0) return colorCode;
            var f;
            for (f in layerData.fills) {
                if(layerData.fills[f].fillType == "color"){
                    return "android:background=\"" + layerData.fills[f].color["argb-hex"] + "\"\r\n";
                }
            }
            return colorCode;
        },
        getAndroidImageSrc: function (layerData) {
            if (layerData.type != "slice" || typeof(layerData.exportable) == 'undefined' || layerData.exportable == 0) return "";
            return "android:src=\"\@mipmap/" + layerData.exportable[0].name + "." + layerData.exportable[0].format + "\"\r\n";
        },
        getIOSShapeBackground: function (layerData) {
            var colorCode = "";
            if (layerData.type != "shape" || typeof(layerData.fills) == 'undefined' || layerData.fills.length == 0) return colorCode;
            var f;
            for (f in layerData.fills) {
                if(layerData.fills[f].fillType == "color"){
                    return "view.backgroundColor = [UIColor colorWithRed:" + layerData.fills[f].color.r + "/255.0 green:" + layerData.fills[f].color.g  + "/255.0 blue:" + layerData.fills[f].color.b + "/255.0 alpha:" + layerData.fills[f].color.a + "/1.0]\;\r\n";
                }
            }
            return colorCode;
        },
        getIOSImageSrc: function (layerData) {
            if (layerData.type != "slice" || typeof(layerData.exportable) == 'undefined' || layerData.exportable == 0) return "";
            return "imageView.image = [UIImage imageNamed:\@\"" + layerData.exportable[0].name + "." + layerData.exportable[0].format + "\"];\r\n";
        },
        renderInspector: function (html) {
            var self = this;
            $('#inspector').addClass('active').html(html.join(''));
            $('#inspector').find('[data-codeType=' + self.configs.codeType +']').addClass('select');
            $('#code-tab').unbind('click')
                    .on('click', 'li', function(){
                        var $this = $(this), id = $this.attr('data-id');
                        self.configs.codeType = $(this).attr('data-codeType')
                        $this.parent().find('li.select').removeClass('select')
                        $this.addClass('select')
                        $("#inspector").find('div.item.select').removeClass('select');
                        $("#inspector").find("#"+id).addClass('select');
                    });
            $('#code-tab').find('li.select').trigger('click');
        },
        propertyType: function(title, content, isCode){
            var nopadding = isCode? ' style="padding:0"': '';
            return ['<section>',
                    '<h3>' + _(title) + '</h3>',
                    '<div class="context"' + nopadding + '>',
                        content,
                    '</div>',
                '</section>'].join('');
        },
        colorItem: function(color){
            var colorName = (this.project.colorNames)? this.project.colorNames[color['argb-hex']]: '';
            colorName = (colorName)? ' data-name="' + colorName + '"': '';
            return [
                '<div class="color"' + colorName + '>',
                    '<label><em><i style="background-color:' + color['css-rgba'] + ';"></i></em></label><input data-color="' + encodeURI(JSON.stringify(color)) + '" type="text" value="' + color[this.configs.colorFormat] + '" readonly="readonly">',
                '</div>'].join('');
        },
        changeColorFormat: function(){
            var self = this;
            $('.color input').each(function(){
                var $this = $(this),
                    colors = JSON.parse( decodeURI( $this.attr('data-color') ) );
                $this.val(colors[self.configs.colorFormat]);
            });
            this.colors();
        },
        selectedLayer: function(){
            if( this.selectedIndex == undefined ) return false;
            $('.selected').removeClass('selected');
            $('#layer-' + this.selectedIndex).addClass('selected');
            $('#rulers').hide();
        },
        removeSelected: function(){
            if(!this.selectedIndex) return false;
            $('#layer-' + this.selectedIndex).removeClass('selected');
            $('#rulers').hide();
        },
        mouseoverLayer: function(){
            if( this.targetIndex && this.selectedIndex == this.targetIndex ) return false;
            var $target = $('#layer-' + this.targetIndex);
            $target.addClass('hover');
            $('#rv').css({
                left: $target.position().left,
                width: $target.outerWidth()
            });
            $('#rh').css({
                top: $target.position().top,
                height: $target.outerHeight()
            });
            $('#rulers').show();
        },
        mouseoutLayer: function(){
            $('.hover').removeClass('hover');
            $('#rulers').hide();
        },
        hideDistance: function(){
            $('#td').hide();
            $('#rd').hide();
            $('#bd').hide();
            $('#ld').hide();
            $('.selected').removeClass('hidden');
        },
        zoomRender: function(){
            var self = this;
            this.targetIndex = undefined;
            $('#rulers').hide();
            this.hideDistance();
            this.zoom();
            this.screen();
            $('#layers, #notes').html('');
            setTimeout(function(){ self.layers(); self.notes(); }, 150);
        },
        events: function() {
            var self = this;
            $('body')
                .on({
                        click: function( event ){
                            if(!$('.screen-viewer').hasClass('moving-screen')){
                                if( $(event.target).hasClass('layer') || $(event.target).hasClass('slice-layer')){
                                    var selected = (!$(event.target).hasClass('slice-layer'))? event.target: $('.layer-' + $(event.target).attr('data-objectid')).first();
                                    self.selectedIndex = self.getIndex(selected);
                                    self.hideDistance();
                                    self.mouseoutLayer();
                                    self.selectedLayer();
                                    self.inspector();
                                }
                                else{
                                    self.removeSelected();
                                    self.hideDistance();
                                    $('#inspector').removeClass('active');
                                    self.selectedIndex = undefined;
                                    self.tempTargetRect = undefined;
                                }
                            }
                        },
                        mousemove: function( event ){
                            if(!$('.screen-viewer').hasClass('moving-screen')){
                                self.mouseoutLayer();
                                self.hideDistance();
                                if( $(event.target).hasClass('screen-viewer') || $(event.target).hasClass('screen-viewer-inner') ){
                                    self.tempTargetRect = self.getEdgeRect( event );
                                    self.targetIndex = undefined;
                                    self.distance();
                                }
                                else if($(event.target).hasClass('layer')){
                                    self.targetIndex = self.getIndex(event.target);
                                    self.tempTargetRect = undefined;
                                    self.mouseoverLayer();
                                    self.distance();
                                }
                                else{
                                    self.tempTargetRect = undefined;
                                }

                            }
                        }
                    })
                .on('click', 'header, #inspector, .navbar', function( event ){
                     event.stopPropagation();
                })
                .on("dragstart", ".exportable img", function(event){
                    var jQThis = $(this),
                        offset = jQThis.offset();
                    jQThis.css({width: "auto", height: "auto"});
                    var left = event.originalEvent.pageX - offset.left - jQThis.width() / 2,
                        top = event.originalEvent.pageY - offset.top - jQThis.height() / 2;
                    jQThis.css({left: left, top: top});
                })
                .on("dragend", ".exportable img", function(event){
                    var jQThis = $(this);
                    jQThis.css({left: 0, top: 0, width: "100%", height: "100%"});
                });
            // zoom
            $('#zoom')
                .on('click', '.zoom-in:not(disabled)',function( event ){
                    self.configs.zoom -= .25;
                    self.zoomRender();
                    event.stopPropagation();
                })
                .on('click', '.zoom-out:not(disabled)',function( event ){
                    self.configs.zoom += .25;
                    self.zoomRender();
                    event.stopPropagation();
                });
            $(window)
                .keydown(function(event){
                    if((event.ctrlKey || event.metaKey) && (event.which == 187 || event.which == 189 || event.which == 48)) {
                        if(event.which == 187 && self.configs.zoom < 4){
                            $('.zoom-out').click();
                        }
                        else if(event.which == 189 && self.configs.zoom > .25){
                            $('.zoom-in').click();
                        }
                        else if(event.which == 48){
                            self.maxSize = undefined;
                            self.configs.zoom = 1;
                            self.zoomRender();
                        }
                        event.preventDefault();
                        return false;
                    }
                    else if(event.which == 32 ){
                        $('#cursor').show();
                        $('.screen-viewer').addClass('moving-screen');
                        self.mouseoutLayer();
                        self.hideDistance();
                        event.preventDefault();
                    }
                    else if(event.which == 18){
                        $('#screen').addClass('percentage-mode');
                    }
                })
                .keyup(function(event){
                    if(event.which == 32 ){
                        $('#cursor').hide();
                        $('.screen-viewer').removeClass('moving-screen');
                        $('#cursor').removeClass('moving');
                        event.preventDefault();
                    }
                    else if(event.which == 18){
                        $('#screen').removeClass('percentage-mode');
                        event.preventDefault();
                    }
                })
                .mousemove(function(event){
                    $('#cursor')
                        .css({
                            left: event.clientX,
                            top: event.clientY
                        });
                    var $target = $(event.target);
                    if(
                        $('.screen-viewer').hasClass('moving-screen') &&
                        $('#cursor').hasClass('moving')
                    ){
                        $('.screen-viewer').scrollLeft((self.moveData.x - event.clientX) + self.moveData.scrollLeft);
                        $('.screen-viewer').scrollTop((self.moveData.y - event.clientY) + self.moveData.scrollTop);
                        event.preventDefault();
                    }
                })
                .mousedown(function(event){
                    var $target = $(event.target);
                    if(
                        $('.screen-viewer').hasClass('moving-screen') &&
                        (
                            $target.hasClass('cursor') ||
                            $target.hasClass('overlay')
                        )
                    ){
                        self.moveData = {
                            x: event.clientX,
                            y: event.clientY,
                            scrollLeft: $('.screen-viewer').scrollLeft(),
                            scrollTop: $('.screen-viewer').scrollTop()
                        }
                        $('#cursor').addClass('moving');
                        event.preventDefault();
                    }
                })
                .mouseup(function(event){
                    var $target = $(event.target);
                    if(
                        $('.screen-viewer').hasClass('moving-screen')
                    ){
                        $('#cursor').removeClass('moving');
                        event.preventDefault();
                    }
                })

            // unit
            $('#unit')
                .on('change', 'input[name=resolution]', function(){
                    var $checked = $('input[name=resolution]:checked');
                    self.configs.unit = $checked.attr('data-unit');
                    self.configs.scale = Number( $checked.attr('data-scale') );
                    self.targetID = undefined;
                    self.layers();
                    self.inspector();
                    $('#unit')
                        .blur()
                        .find('p')
                        .text(
                            $checked.attr('data-name')
                            );
                    self.slices();
                })
                .on('click', 'h3, .overlay', function(){
                    $('#unit').blur();
                });
            $('#inspector').on('dblclick', 'input, textarea', function(){
                $(this).select();
            });
            $('#show-notes').change(function(){
                if( this.checked ){
                    $('#notes').fadeIn('fast');
                }
                else{
                    $('#notes').fadeOut('fast');
                }
            });
            $('#artboards')
                .on('click', '.artboard', function( event ){
                    if(self.artboardIndex == self.getIndex(this)) return;
                    self.maxSize = undefined;
                    self.artboardIndex = self.getIndex(this);
                    self.selectedIndex = undefined;
                    self.current = self.project.artboards[self.artboardIndex];
                    self.hideDistance();
                    self.screen();
                    self.layers();
                    self.notes();
                    $('.active').removeClass('active');
                    $(this).addClass('active');
                    self.locationHash({
                        artboard: self.artboardIndex
                    });
                })
                .on('click', '.pages-select', function( event ){
                    event.stopPropagation();
                })
                .on('change', 'input[name=page]', function(event){
                    var pObjectID = $('.page-list input[name=page]:checked').val();
                    $('.pages-select h3').html($(this).parent().find('span').html());
                    $('.artboard-list li').show();
                    if(pObjectID != 'all'){
                        $('.artboard-list li').each(function(){
                            var pageObjectID = $( this ).attr('data-page-id');
                            if(pObjectID != pageObjectID){
                                $( this ).hide();
                            }
                        });
                    }
                    $('.pages-select').blur();
                    event.stopPropagation();
                });
            $('#slices')
                .on('mouseover', 'li', function(){
                    var id = $(this).attr('data-objectid');
                    $('.layer-' + id).addClass('has-slice');
                })
                .on('mouseout', 'li', function(){
                    $('.has-slice').removeClass('has-slice');
                })
                .on('click', 'li', function(){
                    var id = $(this).attr('data-objectid');
                    if($('.layer-' + id).length > 0){
                        var offsets = $('.layer-' + id).offset(),
                            scrolls = {
                                left: $('.screen-viewer').scrollLeft(),
                                top: $('.screen-viewer').scrollTop()
                            },
                            sizes = {
                                width: $('.layer-' + id).outerWidth(),
                                height: $('.layer-' + id).outerHeight()
                            },
                            viewerSizes = {
                                width: $('.screen-viewer').outerWidth(),
                                height: $('.screen-viewer').outerHeight()
                            };
                            $('.screen-viewer').animate({
                                scrollLeft: ( offsets.left + scrolls.left) - ( ( viewerSizes.width - sizes.width ) / 2 ),
                                scrollTop: ( offsets.top + scrolls.top - 60) - ( ( viewerSizes.height - sizes.height ) / 2 )
                            }, 150);
                        $('.layer-' + id).click();
                    }
                    else{
                        self.message(_('The slice not in current artboard.'));
                    }

                });
            // color format
            $('#inspector')
                .on('click', '.color label', function(){
                    self.configs.colorFormat =
                        ( self.configs.colorFormat == 'color-hex')? 'argb-hex':
                        ( self.configs.colorFormat == 'argb-hex')? 'css-rgba':
                        ( self.configs.colorFormat == 'css-rgba')? 'ui-color':
                        'color-hex';
                    self.changeColorFormat();
                });
            // tab
            $('.tab')
                .on('click', 'li', function(){
                    var $this = $(this),
                        id = $this.attr('data-id');

                    if($this.hasClass('current')){
                        $('.current').removeClass('current');
                        $('.navbar').removeClass('on');
                    }
                    else{
                        $('.current').removeClass('current');
                        $('.navbar section').hide();
                        $this.addClass('current');
                        $('#' + id).show();
                        $('.navbar').addClass('on');
                    }

                });
            $('#notes')
                .on('mousemove', '.note', function(event){
                    event.stopPropagation();
                    self.mouseoutLayer();
                    self.hideDistance();
                    $(this).find('div').show();
                    var width = $(this).find('div').outerWidth();
                    if(width > 160){
                        $(this).find('div').css({
                            width: 160,
                            'white-space': 'normal'
                        })
                    }
                })
                .on('mouseout', '.note', function(){
                    $(this).find('div').hide();
                });

        }
    }
    var init = SMApp.fn.init = function(project) {
        var path = this.locationHash();
        this.project = project;
        this.configs = {
                scale: this.project.scale,
                unit: this.project.unit,
                colorFormat: this.project.colorFormat,
                codeType: 'css'
            };
        this.artboardIndex = (!isNaN(path.artboard))? path.artboard: 0;
        this.current = this.project.artboards[this.artboardIndex];
        var proportion = $(document).height() / this.current.height;
        if (proportion >= .8) {
            this.configs.zoom = 1;
        } else if (proportion >= .7) {
            this.configs.zoom = .75;
        } else {
            this.configs.zoom = .5;
        }
        this.render();
        if(!isNaN(path.artboard)){
            $('.current').removeClass('current');
            $('.navbar').removeClass('on');
        }
        if(this.current.imageBase64){
            $('.tab').remove();
            $('.navbar').remove();
        }
        return this;
    };
    init.prototype = SMApp.fn;
    window.SMApp = SMApp;
})(window);
$(function(){ SMApp({"scale":"1","unit":"px","colorFormat":"color-hex","artboards":[{"layers":[{"objectID":"4628DAD9-5C98-472B-A8A8-51EB7BCE91CE","type":"shape","name":"Foodfy","rect":{"x":231,"y":36.1,"width":90.6,"height":26.9},"rotation":0,"radius":0,"borders":[],"fills":[{"fillType":"color","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #111111;"]},{"objectID":"EBFB5263-6636-4E95-B7CF-B52F87E218A8","type":"text","name":"Buscando por “bacon”","rect":{"x":230,"y":115,"width":240,"height":28},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Buscando por “bacon”","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":24,"fontFace":"Roboto-Bold","textAlign":"left","letterSpacing":0,"lineHeight":28,"css":["font-family: Roboto-Bold;","font-size: 24px;","color: #111111;"]},{"objectID":"0D11CF43-6100-4A10-9266-122F6AC730D9","type":"slice","name":"Rectangle Copy 4","rect":{"x":550,"y":163,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy 4","format":"png","path":"Rectangle Copy 4.png"}]},{"objectID":"8AB16B1D-296A-4FAC-977F-AF6CA17C0ABB","type":"text","name":"Pizza de bacon","rect":{"x":550,"y":323,"width":122,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Pizza de bacon","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"E6B057E7-7D8D-488C-810D-5807CF1EA621","type":"text","name":"por Fabiana Melo","rect":{"x":550,"y":349,"width":108,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Fabiana Melo","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"6ADB2CD7-118E-40BE-9AB1-1010BD1AA61C","type":"slice","name":"Rectangle Copy 5","rect":{"x":870,"y":163,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy 5","format":"png","path":"Rectangle Copy 5.png"}]},{"objectID":"8FA64A3A-F582-44C3-9E11-26D372157D6E","type":"text","name":"Espaguete com alho e","rect":{"x":870,"y":323,"width":232,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Espaguete com alho e bacon","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"B928E7E9-6FE4-419F-8780-7D4C845F48EE","type":"text","name":"por Júlia Kinoto","rect":{"x":870,"y":349,"width":98,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Júlia Kinoto","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"88D338B7-06CB-4117-A645-FFA6A5315FFE","type":"slice","name":"Rectangle Copy","rect":{"x":230,"y":163,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy","format":"png","path":"Rectangle Copy.png"}]},{"objectID":"77E7279A-A47D-4A0F-A1C5-BCC40F88EC7F","type":"text","name":"Triplo bacon burger","rect":{"x":230,"y":323,"width":156,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Triplo bacon burger","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"114F83DB-BCF7-4E1F-8718-347D721C16C2","type":"text","name":"por Jorge Relato","rect":{"x":230,"y":349,"width":103,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Jorge Relato","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"AEBFEA95-C245-49D7-BB6A-BA24A78A1133","type":"shape","name":"Rectangle","rect":{"x":0,"y":1041,"width":1400,"height":62},"rotation":0,"radius":0,"borders":[],"fills":[{"fillType":"color","color":{"r":238,"g":238,"b":238,"a":1,"color-hex":"#EEEEEE 100%","argb-hex":"#FFEEEEEE","css-rgba":"rgba(238,238,238,1)","ui-color":"(r:0.93 g:0.93 b:0.93 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #EEEEEE;"]},{"objectID":"6CBCD3B2-02D6-4442-9698-06B290527BE4","type":"text","name":"Todos direitos reser","rect":{"x":567,"y":1064,"width":267,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Todos direitos reservados, receitas Foodfy.","color":{"r":153,"g":153,"b":153,"a":1,"color-hex":"#999999 100%","argb-hex":"#FF999999","css-rgba":"rgba(153,153,153,1)","ui-color":"(r:0.60 g:0.60 b:0.60 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"center","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #999999;","text-align: center;"]},{"objectID":"75D884B5-71DB-4C8F-A57E-333FA29CA978","type":"text","name":"Sobre","rect":{"x":444,"y":38,"width":42,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Sobre","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"037A9BBF-F246-4AA8-A38B-C62E6563CA42","type":"text","name":"Receitas","rect":{"x":516,"y":38,"width":62,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Receitas","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"7DB111E5-3433-413B-83E0-DD2AD9C5753C","type":"text","name":"Chefs","rect":{"x":608,"y":38,"width":42,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Chefs","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"6C900DBA-08BD-49E6-9740-A99D4BB283A7","type":"shape","name":"Rectangle","rect":{"x":1079,"y":28,"width":91,"height":37},"rotation":0,"radius":4,"borders":[],"fills":[{"fillType":"color","color":{"r":101,"g":88,"b":195,"a":1,"color-hex":"#6558C3 100%","argb-hex":"#FF6558C3","css-rgba":"rgba(101,88,195,1)","ui-color":"(r:0.40 g:0.35 b:0.76 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #6558C3;","border-radius: 4px;","border-radius: 4px;"]},{"objectID":"877DFAF3-EC88-4B1C-AC47-D9EC2640861F","type":"shape","name":"Rectangle Copy 2","rect":{"x":825,"y":28,"width":246,"height":37},"rotation":0,"radius":4,"borders":[{"fillType":"color","position":"inside","thickness":1,"color":{"r":221,"g":221,"b":221,"a":1,"color-hex":"#DDDDDD 100%","argb-hex":"#FFDDDDDD","css-rgba":"rgba(221,221,221,1)","ui-color":"(r:0.87 g:0.87 b:0.87 a:1.00)"}}],"fills":[{"fillType":"color","color":{"r":255,"g":255,"b":255,"a":1,"color-hex":"#FFFFFF 100%","argb-hex":"#FFFFFFFF","css-rgba":"rgba(255,255,255,1)","ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #FFFFFF;","border: 1px solid #DDDDDD;","border-radius: 4px;","border-radius: 4px;"]},{"objectID":"B3CB72D5-0572-473E-86D9-DC62D9B436CC","type":"text","name":"Buscar","rect":{"x":1099,"y":37,"width":51,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Buscar","color":{"r":255,"g":255,"b":255,"a":1,"color-hex":"#FFFFFF 100%","argb-hex":"#FFFFFFFF","css-rgba":"rgba(255,255,255,1)","ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Bold","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Bold;","font-size: 16px;","color: #FFFFFF;"]},{"objectID":"82BC2595-4DEB-4EAB-AC97-7EC71BEBC9AA","type":"text","name":"Buscar uma receita","rect":{"x":840,"y":39,"width":121,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Buscar uma receita","color":{"r":153,"g":153,"b":153,"a":1,"color-hex":"#999999 100%","argb-hex":"#FF999999","css-rgba":"rgba(153,153,153,1)","ui-color":"(r:0.60 g:0.60 b:0.60 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #999999;"]}],"notes":[],"pageName":"Desafio 05. Base de dados Copy","pageObjectID":"A87C2BA8-6BC4-4C26-A115-FA39AE8FB309","name":"Busca","slug":"desafio-05-base-de-dados-copy-busca","objectID":"93CF8CC9-1A5E-4B7F-87C9-4D09DB85660A","width":1400,"height":1103,"imagePath":"preview/desafio-05-base-de-dados-copy-busca.png"},{"layers":[{"objectID":"20D6152E-87AE-4604-8139-B8E09F07639F","type":"text","name":"Foodfy","rect":{"x":230,"y":31,"width":94,"height":32},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Foodfy","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":28,"fontFace":"Cochin","textAlign":"left","letterSpacing":1.647058823529412,"lineHeight":32,"css":["font-family: Cochin;","font-size: 28px;","color: #111111;","letter-spacing: 1.65px;"]},{"objectID":"72C858CB-7F03-4B8A-A15C-D0B058B03B48","type":"text","name":"Sobre","rect":{"x":444,"y":38,"width":42,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Sobre","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"182B4E9F-81D2-45E2-9B38-204EFFBBBFAE","type":"text","name":"Receitas","rect":{"x":516,"y":38,"width":62,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Receitas","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"3CB6B97F-1099-48DB-A75A-819AC8F39B49","type":"text","name":"Chefs","rect":{"x":608,"y":38,"width":43,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Chefs","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Bold","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Bold;","font-size: 16px;","color: #111111;"]},{"objectID":"EAF8FEB4-E3C0-46A9-AFD4-07187A2BFACD","type":"shape","name":"Rectangle","rect":{"x":0,"y":1061,"width":1400,"height":62},"rotation":0,"radius":0,"borders":[],"fills":[{"fillType":"color","color":{"r":238,"g":238,"b":238,"a":1,"color-hex":"#EEEEEE 100%","argb-hex":"#FFEEEEEE","css-rgba":"rgba(238,238,238,1)","ui-color":"(r:0.93 g:0.93 b:0.93 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #EEEEEE;"]},{"objectID":"F8E0E2BE-7270-4F41-A8BA-0A40C7C8DE10","type":"text","name":"Todos direitos reser","rect":{"x":567,"y":1084,"width":267,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Todos direitos reservados, receitas Foodfy.","color":{"r":153,"g":153,"b":153,"a":1,"color-hex":"#999999 100%","argb-hex":"#FF999999","css-rgba":"rgba(153,153,153,1)","ui-color":"(r:0.60 g:0.60 b:0.60 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"center","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #999999;","text-align: center;"]},{"objectID":"BCA1BEBE-C11F-4476-ACA4-7FD176173F4F","type":"shape","name":"Oval","rect":{"x":230,"y":113,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"2B27FBD9-6CFF-4525-86DE-0F1D948B3F61","type":"text","name":"Júlia Kinoto","rect":{"x":314,"y":124,"width":95,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Júlia Kinoto","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"3883327D-F86C-4F97-B823-D33EE59AECC1","type":"text","name":"3 receitas","rect":{"x":314,"y":150,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"3 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"570BCA4B-D8D3-44E2-B542-0D8E5C82864C","type":"shape","name":"Oval","rect":{"x":470,"y":113,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"53C8081C-019B-4A50-B58F-C31B6E72AF52","type":"text","name":"Bairam Frootan","rect":{"x":554,"y":124,"width":123,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Bairam Frootan","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"115EAF6D-1635-4C69-BD9C-34B81EC9EE36","type":"text","name":"3 receitas","rect":{"x":554,"y":150,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"3 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"9FD79313-A246-43E6-BC6A-96C13076B060","type":"shape","name":"Oval","rect":{"x":710,"y":113,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"A6B44DF7-BE0F-4791-9EBD-3CE698689145","type":"text","name":"Filipa Gaspar","rect":{"x":794,"y":124,"width":105,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Filipa Gaspar","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"B02C378D-E97A-45B0-8152-302ADC7A5DCE","type":"text","name":"3 receitas","rect":{"x":794,"y":150,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"3 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"5EBD2BB9-A845-4661-9940-ECA49D248EEC","type":"shape","name":"Oval","rect":{"x":950,"y":113,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"7A469F91-FF22-45F8-AEC5-15718BB1442A","type":"text","name":"Marysa Labrone","rect":{"x":1034,"y":124,"width":130,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Marysa Labrone","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"08B0F1A7-DBFA-4AE4-9A8E-BFED72C33E45","type":"text","name":"2 receitas","rect":{"x":1034,"y":150,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"2 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"47E1CB98-4AEB-4F64-B660-52E5AB008A6B","type":"shape","name":"Oval","rect":{"x":230,"y":207,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"28177C5B-B6E5-4829-8CF4-BBC175AAC00B","type":"text","name":"Mok Kwang","rect":{"x":314,"y":218,"width":94,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Mok Kwang","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"2C9A2829-1401-4636-8879-F4A1093F2D48","type":"text","name":"3 receitas","rect":{"x":314,"y":244,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"3 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"66DD661A-6381-4638-94B5-D4B9927502B5","type":"shape","name":"Oval","rect":{"x":470,"y":207,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"0B0EB90E-704A-42D1-8ADC-479088F96918","type":"text","name":"Kendasha Wood","rect":{"x":554,"y":218,"width":131,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Kendasha Wood","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"D9E7130D-1A30-4518-AE99-DE59A265EF9E","type":"text","name":"3 receitas","rect":{"x":554,"y":244,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"3 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"3B1B57F3-D01D-4A99-A891-87EF2DEA5874","type":"shape","name":"Oval","rect":{"x":710,"y":207,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"5DF33E48-6A70-43F3-B10A-AAE0B70345EC","type":"text","name":"Thenjiwe Msutu","rect":{"x":794,"y":218,"width":128,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Thenjiwe Msutu","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"AD079B4F-4C2E-4507-8796-E3459DAB8D88","type":"text","name":"3 receitas","rect":{"x":794,"y":244,"width":61,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"3 receitas","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]},{"objectID":"8EEBC32B-EE1B-432C-8D7E-0CA5734FF964","type":"shape","name":"Oval","rect":{"x":950,"y":207,"width":64,"height":64},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":""},{"objectID":"0AD65D77-F730-4FD6-AB83-52E90EA8821F","type":"text","name":"Uzoma Buchi","rect":{"x":1034,"y":218,"width":106,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Uzoma Buchi","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"CA27DFE8-8216-4A99-9554-1F78DD339C9D","type":"text","name":"1 receita","rect":{"x":1034,"y":244,"width":54,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"1 receita","color":{"r":102,"g":102,"b":102,"a":1,"color-hex":"#666666 100%","argb-hex":"#FF666666","css-rgba":"rgba(102,102,102,1)","ui-color":"(r:0.40 g:0.40 b:0.40 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #666666;"]}],"notes":[],"pageName":"Desafio 05. Base de dados Copy","pageObjectID":"A87C2BA8-6BC4-4C26-A115-FA39AE8FB309","name":"Chefs","slug":"desafio-05-base-de-dados-copy-chefs","objectID":"00CC6A26-CBB0-45DC-8075-64CA624FA96E","width":1400,"height":1123,"imagePath":"preview/desafio-05-base-de-dados-copy-chefs.png"},{"layers":[{"objectID":"F8777D74-45E9-4775-A91B-3804D450DD35","type":"shape","name":"Foodfy","rect":{"x":231,"y":36.1,"width":90.6,"height":26.9},"rotation":0,"radius":0,"borders":[],"fills":[{"fillType":"color","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #111111;"]},{"objectID":"952078BE-6EEA-40FC-8066-95DCC0476C57","type":"shape","name":"Rectangle","rect":{"x":230,"y":93,"width":940,"height":366},"rotation":0,"radius":30,"borders":[],"fills":[{"fillType":"color","color":{"r":251,"g":223,"b":219,"a":1,"color-hex":"#FBDFDB 100%","argb-hex":"#FFFBDFDB","css-rgba":"rgba(251,223,219,1)","ui-color":"(r:0.98 g:0.87 b:0.86 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #FBDFDB;","border-radius: 30px;","border-radius: 30px;"]},{"objectID":"085EF799-112C-4DB1-AF73-8EF0E795F96B","type":"slice","name":"119236-OQ05QX-268","rect":{"x":854,"y":159,"width":216,"height":300},"exportable":[{"name":"119236-OQ05QX-268","format":"png","path":"119236-OQ05QX-268.png"}]},{"objectID":"5E244B06-0473-4078-86B4-20BB70859482","type":"text","name":"As melhores receitas","rect":{"x":290,"y":210,"width":305,"height":38},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"As melhores receitas","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":32,"fontFace":"Roboto-Bold","textAlign":"left","letterSpacing":0,"lineHeight":38,"css":["font-family: Roboto-Bold;","font-size: 32px;","color: #111111;"]},{"objectID":"B363DD0B-542A-41BD-AC11-CCE815F4E2BF","type":"text","name":"Aprenda a construir","rect":{"x":290,"y":258,"width":316,"height":84},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":0.699999988079071,"styleName":"","content":"Aprenda a construir os melhores pratos\ncom receitas criadas por profissionais\ndo mundo inteiro.","color":{"r":0,"g":0,"b":0,"a":1,"color-hex":"#000000 100%","argb-hex":"#FF000000","css-rgba":"rgba(0,0,0,1)","ui-color":"(r:0.00 g:0.00 b:0.00 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":28,"css":["opacity: 0.7;","font-family: Roboto-Regular;","font-size: 18px;","color: #000000;","line-height: 28px;"]},{"objectID":"C785DBC5-000F-4A40-9AFF-52B407A5BED9","type":"text","name":"Mais acessadas","rect":{"x":230,"y":509,"width":174,"height":28},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Mais acessadas","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":24,"fontFace":"Roboto-Bold","textAlign":"left","letterSpacing":0,"lineHeight":28,"css":["font-family: Roboto-Bold;","font-size: 24px;","color: #111111;"]},{"objectID":"24092AC5-499A-44FE-8063-D1BF463E66C9","type":"slice","name":"Rectangle","rect":{"x":550,"y":789,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle","format":"png","path":"Rectangle.png"}]},{"objectID":"B14F5E14-1B70-436E-A77B-8C842A7ED398","type":"text","name":"Docinhos pão-do-céu","rect":{"x":550,"y":949,"width":170,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Docinhos pão-do-céu","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"8A41748A-85E1-469F-8175-25631891A8DF","type":"text","name":"por Ricardo Golvea","rect":{"x":550,"y":975,"width":118,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Ricardo Golvea","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"E2069857-20B7-4316-8633-2F38A88586D0","type":"slice","name":"Rectangle Copy","rect":{"x":550,"y":557,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy","format":"png","path":"Rectangle Copy.png"}]},{"objectID":"B073E216-4DED-41B8-9FA6-71D30F8C5C56","type":"text","name":"Pizza 4 estações","rect":{"x":550,"y":717,"width":136,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Pizza 4 estações","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"64AD8E71-6290-4D23-8AC4-ECDDB43B3258","type":"text","name":"por Fabiana Melo","rect":{"x":550,"y":743,"width":108,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Fabiana Melo","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"D2FF2696-79C6-4950-BFC8-E063C82ED181","type":"slice","name":"Rectangle Copy 2","rect":{"x":870,"y":557,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy 2","format":"png","path":"Rectangle Copy 2.png"}]},{"objectID":"1C50D963-9579-4F38-9F2F-9639E6F27FE7","type":"text","name":"Espaguete ao alho","rect":{"x":870,"y":717,"width":148,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Espaguete ao alho","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"4E8BCB0C-4B91-43C3-8C41-A290E2819EA8","type":"text","name":"por Júlia Kinoto","rect":{"x":870,"y":743,"width":98,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Júlia Kinoto","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"1525EE8A-CB58-4456-8339-B1E8D5424FFF","type":"slice","name":"Rectangle","rect":{"x":230,"y":789,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle","format":"png","path":"Rectangle.png"}]},{"objectID":"7839B651-9214-4B37-81F5-3FEA69E13654","type":"text","name":"Lasanha mac n’ chees","rect":{"x":230,"y":949,"width":187,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Lasanha mac n’ cheese","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"99841E79-BF5B-49BB-BE77-CEA558A9C001","type":"text","name":"por Juliano Vieira","rect":{"x":230,"y":975,"width":109,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Juliano Vieira","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"E28373F0-E562-4C06-AD53-FEB5F5D32559","type":"slice","name":"Rectangle Copy","rect":{"x":230,"y":557,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy","format":"png","path":"Rectangle Copy.png"}]},{"objectID":"C0E4F173-4BCF-4075-B6D1-098374CD09EE","type":"text","name":"Triplo bacon burger","rect":{"x":230,"y":717,"width":156,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Triplo bacon burger","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"B93446CF-2523-4854-A142-84DF0428DA9D","type":"text","name":"por Jorge Relato","rect":{"x":230,"y":743,"width":103,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Jorge Relato","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"08A6A559-9DFE-47CA-9E45-2E7AF33E96BA","type":"slice","name":"Rectangle Copy 2","rect":{"x":870,"y":789,"width":300,"height":140},"css":["border-radius: 15px;","border-radius: 15px;"],"exportable":[{"name":"Rectangle Copy 2","format":"png","path":"Rectangle Copy 2.png"}]},{"objectID":"E523A4EC-BD7A-4351-AFB4-57E23664FA12","type":"text","name":"Asinhas de frango ao","rect":{"x":870,"y":949,"width":249,"height":21},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Asinhas de frango ao barbecue","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":18,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":21,"css":["font-family: Roboto-Regular;","font-size: 18px;","color: #111111;"]},{"objectID":"77195F53-01AD-432B-8277-8DE3B1D3123B","type":"text","name":"por Vania Steroski","rect":{"x":870,"y":975,"width":114,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"por Vania Steroski","color":{"r":119,"g":119,"b":119,"a":1,"color-hex":"#777777 100%","argb-hex":"#FF777777","css-rgba":"rgba(119,119,119,1)","ui-color":"(r:0.47 g:0.47 b:0.47 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #777777;"]},{"objectID":"DBC9DD09-0D69-491D-A80E-01DB7298411E","type":"shape","name":"Rectangle","rect":{"x":0,"y":1041,"width":1400,"height":62},"rotation":0,"radius":0,"borders":[],"fills":[{"fillType":"color","color":{"r":238,"g":238,"b":238,"a":1,"color-hex":"#EEEEEE 100%","argb-hex":"#FFEEEEEE","css-rgba":"rgba(238,238,238,1)","ui-color":"(r:0.93 g:0.93 b:0.93 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #EEEEEE;"]},{"objectID":"D2764A80-31DA-42DB-87AB-3441F7286F1B","type":"text","name":"Todos direitos reser","rect":{"x":567,"y":1064,"width":267,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Todos direitos reservados, receitas Foodfy.","color":{"r":153,"g":153,"b":153,"a":1,"color-hex":"#999999 100%","argb-hex":"#FF999999","css-rgba":"rgba(153,153,153,1)","ui-color":"(r:0.60 g:0.60 b:0.60 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"center","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #999999;","text-align: center;"]},{"objectID":"E580F954-AFD7-4498-85BB-FB1C4ACA5693","type":"text","name":"Sobre","rect":{"x":444,"y":38,"width":42,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Sobre","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"AB4BC8BA-98FE-42F9-ACCD-A4CD96C48B09","type":"text","name":"Receitas","rect":{"x":516,"y":38,"width":62,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Receitas","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"EA5D310E-A70C-4FFD-AB74-58EEEB2AF4D9","type":"text","name":"Chefs","rect":{"x":608,"y":38,"width":42,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Chefs","color":{"r":17,"g":17,"b":17,"a":1,"color-hex":"#111111 100%","argb-hex":"#FF111111","css-rgba":"rgba(17,17,17,1)","ui-color":"(r:0.07 g:0.07 b:0.07 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Regular;","font-size: 16px;","color: #111111;"]},{"objectID":"7F90CBA0-A99B-4662-A39F-36B63BAACBC4","type":"shape","name":"Rectangle","rect":{"x":1079,"y":28,"width":91,"height":37},"rotation":0,"radius":4,"borders":[],"fills":[{"fillType":"color","color":{"r":101,"g":88,"b":195,"a":1,"color-hex":"#6558C3 100%","argb-hex":"#FF6558C3","css-rgba":"rgba(101,88,195,1)","ui-color":"(r:0.40 g:0.35 b:0.76 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #6558C3;","border-radius: 4px;","border-radius: 4px;"]},{"objectID":"03D5613D-006F-48FB-8783-23B44E20A8B9","type":"shape","name":"Rectangle Copy 2","rect":{"x":825,"y":28,"width":246,"height":37},"rotation":0,"radius":4,"borders":[{"fillType":"color","position":"inside","thickness":1,"color":{"r":221,"g":221,"b":221,"a":1,"color-hex":"#DDDDDD 100%","argb-hex":"#FFDDDDDD","css-rgba":"rgba(221,221,221,1)","ui-color":"(r:0.87 g:0.87 b:0.87 a:1.00)"}}],"fills":[{"fillType":"color","color":{"r":255,"g":255,"b":255,"a":1,"color-hex":"#FFFFFF 100%","argb-hex":"#FFFFFFFF","css-rgba":"rgba(255,255,255,1)","ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"}}],"shadows":[],"opacity":1,"styleName":"","css":["background: #FFFFFF;","border: 1px solid #DDDDDD;","border-radius: 4px;","border-radius: 4px;"]},{"objectID":"3156474B-BD3D-4ED3-93DC-1704DC9EFFA8","type":"text","name":"Buscar","rect":{"x":1099,"y":37,"width":51,"height":19},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Buscar","color":{"r":255,"g":255,"b":255,"a":1,"color-hex":"#FFFFFF 100%","argb-hex":"#FFFFFFFF","css-rgba":"rgba(255,255,255,1)","ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"},"fontSize":16,"fontFace":"Roboto-Bold","textAlign":"left","letterSpacing":0,"lineHeight":19,"css":["font-family: Roboto-Bold;","font-size: 16px;","color: #FFFFFF;"]},{"objectID":"232A0B84-A02F-41AE-84C0-FD5E07E6432C","type":"text","name":"Buscar uma receita","rect":{"x":840,"y":39,"width":121,"height":16},"rotation":0,"radius":0,"borders":[],"fills":[],"shadows":[],"opacity":1,"styleName":"","content":"Buscar uma receita","color":{"r":153,"g":153,"b":153,"a":1,"color-hex":"#999999 100%","argb-hex":"#FF999999","css-rgba":"rgba(153,153,153,1)","ui-color":"(r:0.60 g:0.60 b:0.60 a:1.00)"},"fontSize":14,"fontFace":"Roboto-Regular","textAlign":"left","letterSpacing":0,"lineHeight":16,"css":["font-family: Roboto-Regular;","font-size: 14px;","color: #999999;"]}],"notes":[],"pageName":"Desafio 05. Base de dados Copy","pageObjectID":"A87C2BA8-6BC4-4C26-A115-FA39AE8FB309","name":"Home","slug":"desafio-05-base-de-dados-copy-home","objectID":"1C929FBF-9F51-405E-8823-24BA94591ADA","width":1400,"height":1103,"imagePath":"preview/desafio-05-base-de-dados-copy-home.png"}],"slices":[{"name":"Rectangle Copy 4","objectID":"0D11CF43-6100-4A10-9266-122F6AC730D9","rect":{"x":550,"y":163,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy 4","format":"png","path":"Rectangle Copy 4.png"}]},{"name":"Rectangle Copy 5","objectID":"6ADB2CD7-118E-40BE-9AB1-1010BD1AA61C","rect":{"x":870,"y":163,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy 5","format":"png","path":"Rectangle Copy 5.png"}]},{"name":"Rectangle Copy","objectID":"88D338B7-06CB-4117-A645-FFA6A5315FFE","rect":{"x":230,"y":163,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy","format":"png","path":"Rectangle Copy.png"}]},{"name":"119236-OQ05QX-268","objectID":"085EF799-112C-4DB1-AF73-8EF0E795F96B","rect":{"x":854,"y":159,"width":216,"height":300},"exportable":[{"name":"119236-OQ05QX-268","format":"png","path":"119236-OQ05QX-268.png"}]},{"name":"Rectangle","objectID":"24092AC5-499A-44FE-8063-D1BF463E66C9","rect":{"x":550,"y":789,"width":300,"height":140},"exportable":[{"name":"Rectangle","format":"png","path":"Rectangle.png"}]},{"name":"Rectangle Copy","objectID":"E2069857-20B7-4316-8633-2F38A88586D0","rect":{"x":550,"y":557,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy","format":"png","path":"Rectangle Copy.png"}]},{"name":"Rectangle Copy 2","objectID":"D2FF2696-79C6-4950-BFC8-E063C82ED181","rect":{"x":870,"y":557,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy 2","format":"png","path":"Rectangle Copy 2.png"}]},{"name":"Rectangle","objectID":"1525EE8A-CB58-4456-8339-B1E8D5424FFF","rect":{"x":230,"y":789,"width":300,"height":140},"exportable":[{"name":"Rectangle","format":"png","path":"Rectangle.png"}]},{"name":"Rectangle Copy","objectID":"E28373F0-E562-4C06-AD53-FEB5F5D32559","rect":{"x":230,"y":557,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy","format":"png","path":"Rectangle Copy.png"}]},{"name":"Rectangle Copy 2","objectID":"08A6A559-9DFE-47CA-9E45-2E7AF33E96BA","rect":{"x":870,"y":789,"width":300,"height":140},"exportable":[{"name":"Rectangle Copy 2","format":"png","path":"Rectangle Copy 2.png"}]}],"colors":[]}) });
    -->
    </script>
  </head>
  <!--_-->
  <body id="app"></body>

</html>
