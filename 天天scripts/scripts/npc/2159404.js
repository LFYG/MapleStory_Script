// Script created: 13.10.2015 10:23
// Author: Administrator

var killlist= {
"Ӣ��":
Array( //Ӣ�ۼ����б�
Array(02290008,100),//[���ֲ�]���׶��� 20
Array(02290009,100),//[���ֲ�]���׶��� 30
Array(02290016,100),//[���ֲ�]�������� 20
Array(02290017,100),//[���ֲ�]�������� 30
Array(02290599,100),//[���ֲ�]�ռ���� 20
Array(02290600,100),//[���ֲ�]�ռ���� 30
Array(02291027,100),//[���ֲ�]�����ն 20
Array(02291028,100),//[���ֲ�]�����ն 30
//Array(02291029,100),//[���ֲ�]���Ԫ�� 20 (BUG)_
Array(02290096,100),//[���ֲ�]ð�յ���ʿ 20
Array(02290125,100),//[���ֲ�]ð�յ���ʿ 30
Array(02290291,100),//[���ֲ�]�����ռ�����30
Array(02290290,100),//[���ֲ�]�����ռ�����20
Array(02290065,100),//[���ֲ�]�����ռ�����30
Array(02290064,100)//[���ֲ�]�����ռ�����20
),
":
Array( //Ӣ�ۼ����б�
Array(02290030,100),//
)
,
"ʥ��ʿ":
Array( //Ӣ�ۼ����б�
Array(02290096,100),//[���ֲ�]ð�յ���ʿ 20
Array(02290125,100),//[���ֲ�]ð�յ���ʿ 30
Array(02290012,100),//[���ֲ�]�������� 20
Array(02290013,100),//[���ֲ�]�������� 30
Array(02290018,100),//[���ֲ�]��ʥ��� 20
Array(02290019,100),//[���ֲ�]��ʥ��� 30
Array(02290020,100),//[���ֲ�]ʥ�� 20
Array(02290021,100),//[���ֲ�]ʥ�� 30
Array(02291030,100),//[���ֲ�]���Ԫ�� 30
Array(02291031,100),//[���ֲ�]�ػ�֮�� 20
Array(02291032,100),//[���ֲ�]ʥ��ʿר�� 20
Array(02291033,100)//[���ֲ�]ʥ��ʿר�� 30
)
}

function start() {
    action(1, 0, 0);
}


var selectedItem = -1;
var selectedCost = -1;


var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }
    else
     {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
   if (status == 0) {
         var selStr =
"�װ���#r#h ##k���ã���ӭ�������ܶһ�����\r\n ���ְҵ��"+cm.getJobNameById(   cm.getJob())+"��\r\n "
var itemList=killlist[cm.getJobNameById(cm.getJob())];
if(itemList==null)
{
            cm.sendOk(selStr +"�ǳ���Ǹ��û������Ҫ�ļ����飬�˲��Ѿ�����Ϊ���������ְҵ�����ֲ�ȥ��");
            cm.dispose();            return;
}

        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList

[i][1] / 5 + " #k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1] / 5;
            cm.sendYesNo("���Ƿ���#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost +

" #k ���");
        } else {
            cm.sendOk("���ִ���...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("������߳��ִ���...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "����̵�", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost);
                cm.sendOk("��ϲ���ɹ�����#i" + selectedItem + ":# #b#t" + selectedItem + "##k��");
            } else {
                cm.sendOk("����ʧ�ܣ�����ȷ���ڱ���������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
            }
        } else {
            cm.sendOk("��û����ô����\r\n\r\n����#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r"

+ selectedCost + "#k ���");
        }
        cm.dispose();
    }
}