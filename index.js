
window.onload= function () {
    var oC=document.getElementById('c1');
    var oG=oC.getContext('2d');
    var x=200;
    var y=200;
    var r=150;

    function draw(){

        oG.clearRect(0,0,oC.width,oC.height); //清空画布
        //分针的刻度,画好刻度再描画；
        oG.beginPath();
        for(var i=0; i<60; i++){
            oG.moveTo(x,y);

            oG.arc(x,y,r,6*i*Math.PI/180,6*(i+1)*Math.PI/180,false);
        }
        oG.closePath();
        oG.stroke();

        //遮盖层
        oG.beginPath();
        oG.fillStyle='white';
        oG.moveTo(x,y);

        oG.arc(x,y,r*19/20,0,360*Math.PI/180,false);

        oG.closePath();
        oG.fill();

        //小时的刻度
        oG.beginPath();
        oG.lineWidth=2;
        for(var i=0; i<12; i++){
            oG.moveTo(x,y);
            oG.arc(x,y,r,30*i*Math.PI/180,30*(i+1)*Math.PI/180,false);
        }
        oG.closePath();
        oG.stroke();

        //遮盖层
        oG.beginPath();
        oG.fillStyle='white';
        oG.moveTo(x,y);

        oG.arc(x,y,r*18/20,0,360*Math.PI/180,false);

        oG.closePath();
        oG.fill();

        //获取时间
        var oDate=new Date();
        var oHour=oDate.getHours();
        var oMins=oDate.getMinutes();
        var oSec=oDate.getSeconds();

        var oHourValue=((oHour+oMins/60)*30-90)*Math.PI/180;
        var oMinsValue=(oMins*6-90)*Math.PI/180;
        var oSecValue=(oSec*6-90)*Math.PI/180;

        //时针
        oG.beginPath();
        oG.moveTo(x,y);
        oG.lineWidth=5;
        oG.arc(x,y,r*10/20,oHourValue,oHourValue,false);

        oG.closePath();
        oG.stroke();

        //分针
        oG.beginPath();
        oG.moveTo(x,y);
        oG.lineWidth=3;
        oG.arc(x,y,r*14/20,oMinsValue,oMinsValue,false);

        oG.closePath();
        oG.stroke();

        //秒针
        oG.beginPath();
        oG.moveTo(x,y);
        oG.lineWidth=2;
        oG.arc(x,y,r*17/20,oSecValue,oSecValue,false);

        oG.closePath();
        oG.stroke();
    }

    setInterval(function(){
        draw();
    },1000);
    draw();
}