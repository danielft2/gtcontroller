const _0x13e5ee=_0x3a5e;function _0x1482(){const _0x5405a0=['4eMUFdi','style','1343658afgehs','../data/parceiros.json','alt','createElement','2451112tlXQaR','classList','343530XEZMvG','translate3d(','length','querySelector','5781504UplaxZ','setAttribute','8xuhXLw','27pOzxWl','appendChild','550925YznKEG','transform','3837694QgBLCZ','85338KterMI','.parceiros-marcadores\x20div','json','img'];_0x1482=function(){return _0x5405a0;};return _0x1482();}(function(_0x3b4872,_0x11302d){const _0x56fcaf=_0x3a5e,_0x5730f3=_0x3b4872();while(!![]){try{const _0x520c5f=parseInt(_0x56fcaf(0xf1))/0x1*(parseInt(_0x56fcaf(0x105))/0x2)+parseInt(_0x56fcaf(0xf3))/0x3*(parseInt(_0x56fcaf(0xff))/0x4)+parseInt(_0x56fcaf(0x102))/0x5+parseInt(_0x56fcaf(0xfd))/0x6+-parseInt(_0x56fcaf(0x104))/0x7+-parseInt(_0x56fcaf(0xf7))/0x8*(parseInt(_0x56fcaf(0x100))/0x9)+-parseInt(_0x56fcaf(0xf9))/0xa;if(_0x520c5f===_0x11302d)break;else _0x5730f3['push'](_0x5730f3['shift']());}catch(_0x15dedd){_0x5730f3['push'](_0x5730f3['shift']());}}}(_0x1482,0x9bdf7));const carrosel=document[_0x13e5ee(0xfc)]('.parceiros-items'),marcadores=document['querySelectorAll'](_0x13e5ee(0xee));let indexImage=0x0,distancia=-0xfa,valorInical=distancia,pararSlide=![],parceirosQtd=0x0;async function getParceiros(){const _0x4a6f52=_0x13e5ee,_0x458df8=await fetch(_0x4a6f52(0xf4)),_0x3fb561=await _0x458df8[_0x4a6f52(0xef)]();parceirosQtd=_0x3fb561[_0x4a6f52(0xfb)],_0x3fb561['forEach'](_0x672bee=>{const _0x490a7b=_0x4a6f52,_0x576cb3=document[_0x490a7b(0xf6)](_0x490a7b(0xf0));_0x576cb3[_0x490a7b(0xfe)]('src',_0x672bee['image_url']),_0x576cb3['setAttribute'](_0x490a7b(0xf5),_0x672bee[_0x490a7b(0xf5)]),_0x576cb3[_0x490a7b(0xf8)]['add']('parceiros-item'),carrosel[_0x490a7b(0x101)](_0x576cb3);});}function playSlide(){const _0x20ee03=_0x13e5ee;indexImage==parceirosQtd-0x4?(carrosel[_0x20ee03(0xf2)][_0x20ee03(0x103)]='translate3d(0%,\x200px,\x200px)',indexImage=0x0,distancia=valorInical):(carrosel[_0x20ee03(0xf2)]['transform']=_0x20ee03(0xfa)+distancia+'px,\x200px,\x200px)',indexImage++,distancia=distancia+valorInical);}async function rodarSlide(){await getParceiros(),setInterval(()=>{if(!pararSlide)playSlide();},0x7d0);}function _0x3a5e(_0xc8eb0c,_0x154563){const _0x1482e4=_0x1482();return _0x3a5e=function(_0x3a5e3a,_0x5c7869){_0x3a5e3a=_0x3a5e3a-0xee;let _0x1d71ae=_0x1482e4[_0x3a5e3a];return _0x1d71ae;},_0x3a5e(_0xc8eb0c,_0x154563);}window['addEventListener']('load',rodarSlide);