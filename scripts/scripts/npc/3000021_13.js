/* ����̵� */

var status = -1;
var itemList = Array(
Array(2431965, 30000),
Array(2432592, 300000),
Array(2432591, 300000),
Array(2432532, 300000),
Array(2432526, 300000),
Array(2432695, 300000),
Array(2432661, 300000),
Array(2432659, 300000),
Array(2432658, 300000),
Array(2432354, 300000),
Array(2432355, 300000),
Array(2432479, 300000),
Array(2432465, 300000),
Array(2432973, 300000),
Array(2433038, 300000),
Array(2433063, 300000),
Array(2432710, 300000),
Array(2432749, 300000),
Array(2432748, 300000),
Array(2433112, 300000),
Array(2433113, 300000),
Array(2433104, 300000),
Array(2433197, 300000),
Array(2433183, 300000),
Array(2432804, 300000),
Array(2433182, 300000),
Array(2432836, 300000),
Array(2431967, 300000),
Array(2432207, 300000),
Array(2432131, 300000)
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