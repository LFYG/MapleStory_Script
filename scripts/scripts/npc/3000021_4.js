/* ����̵� */

var status = -1;
var itemList = Array(
Array(1112238, 88888), 
Array(1112135, 88888), 
Array(1112289, 88888), 
Array(1112177, 88888), 
Array(1112291, 88888), 
Array(1112179, 88888), 
Array(1112290, 88888), 
Array(1112178, 88888), 
Array(1112288, 88888), 
Array(1112176, 88888),
Array(1112287, 88888), 
Array(1112175, 88888),
Array(1112286, 88888),
Array(1112174, 88888),
Array(1112285, 88888),
Array(1112173, 88888),
Array(1112278, 88888),
Array(1112166, 88888),
Array(1112277, 88888),
Array(1112165, 88888),
Array(1112276, 88888),
Array(1112164, 88888),
Array(1112275, 88888),
Array(1112163, 88888),
Array(1112274, 88888),
Array(1112162, 88888),
Array(1112273, 88888),
Array(1112161, 88888),
Array(1112272, 88888),
Array(1112160, 88888),
Array(1112270, 88888),
Array(1112269, 88888),
Array(1112271, 88888),
Array(1112159, 88888),
Array(1112158, 88888),
Array(1112157, 88888),
Array(1112113, 88888),
Array(1112806, 88888),
Array(1112183, 88888),
Array(1112181, 88888),
Array(1112252, 88888),
Array(1112141, 88888),
Array(1112254, 88888),
Array(1112143, 88888),
Array(1112171, 88888),
Array(1112283, 88888),
Array(1112284, 88888),
Array(1112172, 88888),
Array(1112282, 88888),
Array(1112170, 88888),
Array(1112253, 88888),
Array(1112142, 88888),
Array(1112256, 88888),
Array(1112144, 88888),
Array(1112257, 88888),
Array(1112145, 88888),
Array(1112258, 88888),
Array(1112146, 88888),
Array(1112261, 88888),
Array(1112149, 88888),
Array(1112118, 88888),
Array(1112119, 88888)
//
);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# ��ѡ������Ҫ�������Ʒ��";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("���Ƿ���#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + "#k ���");
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
                cm.gainNX( - selectedCost );
                cm.sendOk("��ϲ���ɹ�����#i" + selectedItem + ":# #b#t" + selectedItem + "##k��");
            } else {
                cm.sendOk("����ʧ�ܣ�����ȷ���ڱ���������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
            }
        } else {
            cm.sendOk("��û����ô����\r\n\r\n����#i" + selectedItem + ":# #b#t" + selectedItem + "##k ��Ҫ #r" + selectedCost + "#k ���");
        }
        cm.dispose();
    }
}