/* �������̵� �·�*/

var status = -1;
var itemList = Array(
Array(1052626, 50000),
Array(1051414, 50000),
Array(1051385, 50000),
Array(1050314, 50000),
Array(1042330, 50000),
Array(1052605, 50000),
Array(1042314, 50000),
Array(1042320, 50000),
Array(1041114, 50000),
Array(1042278, 50000),
Array(1052709, 50000),
Array(1052657, 50000),
Array(1051366, 50000),
Array(1052727, 45000),
Array(1050310, 45000),
Array(1042159, 50000),
Array(1042285, 50000),
Array(1042275, 50000),
Array(1052656, 50000),
Array(1051366, 40000),
Array(1052550, 40000),
Array(1042240, 40000),
Array(1042315, 40000),
Array(1050319, 40000),
Array(1042316, 40000),
Array(1051390, 40000),
Array(1051392, 40000),
Array(1050299, 50000),
Array(1052782, 50000),
Array(1052781, 50000),
Array(1042214, 50000),
Array(1042311, 40000),
Array(1042321, 40000),
Array(1042312, 40000),
Array(1042313, 40000),
Array(1050152, 10000), //ˮ����(��)
Array(1051180, 10000), //ˮ����(Ů)
Array(1042104, 10000), //С��ҶT��
Array(1042105, 10000), //С��ҶT��
Array(1052224, 10000), //��ݮbabyװ
Array(1042142, 30000), //�ʺ�������
Array(1041142, 20000), //���ǵ������
Array(1052200, 10000), //������ɫ�����׷�
Array(1052061, 20000), //���������No.9
Array(1052059, 20000), //���������No.14
Array(1051131, 30000), //ʥ��Ů���ӷ�
Array(1051152, 10000), //õ�������ȹ
Array(1050210, 10000),
Array(1051280, 10000),
Array(1052426, 10000),
Array(1051278, 10000),
Array(1050229, 10000),
Array(1050227, 10000),
Array(1051235, 10000),
Array(1052201, 10000),
Array(1050232, 10000),
Array(1051282, 10000),
Array(1052425, 10000),
Array(1052412, 10000),
Array(1052455, 10000),
Array(1052503, 10000),
Array(1051261, 10000),
Array(1050230, 10000),
Array(1050231, 10000),
Array(1051149, 10000),
Array(1051192, 10000),
Array(1051255, 10000),
Array(1051256, 10000),
Array(1042238, 15000),
Array(1040192, 15000),
Array(1041194, 15000),
Array(1042265, 15000),
Array(1042241, 15000),
Array(1052593, 15000),
Array(1052536, 15000),
Array(1050312, 15000),
Array(1042236, 15000),
Array(1042240, 15000),
Array(1052661, 15000),
Array(1042277, 15000),
Array(1042204, 15000),
Array(1042198, 15000),
Array(1050119, 15000),
Array(1042263, 15000)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ������ĵ��ߣ�";
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