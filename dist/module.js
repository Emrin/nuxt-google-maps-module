'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_require=require('path'),resolve=_require.resolve;module.exports=function(a){var b=_extends({},{defer:!0,async:!0,body:!0,key:null,libraries:['places']},this.options.maps,a),c=b.libraries.join(',');this.options.head.__dangerouslyDisableSanitizers=['script'],this.options.head.script.push({innerHTML:'window.initMap = function(){\n      window.dispatchEvent(new Event(\'maps-module:loaded\'));\n      window.addEventListener(\'maps-module:initiated\', function(){\n        setTimeout(function(){\n          window.dispatchEvent(new Event(\'maps-module:loaded\'));\n        });\n      });\n    }',type:'text/javascript'}),this.options.head.script.push({src:'//maps.googleapis.com/maps/api/js?key='+b.key+'&libraries='+c+'&callback=initMap',defer:b.defer,async:b.async}),this.addPlugin({src:resolve(__dirname,'./plugin.template.js'),options:b})},module.exports.meta=require(resolve(__dirname,'./../package.json'));