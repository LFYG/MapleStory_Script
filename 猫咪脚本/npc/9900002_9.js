/* ����̵� - ���ȵ��� */

var status = -1;
var itemList = Array(
// ���ʵ����� - ȫ�����˶����ü���ɫ˵��
Array(5072000, 10, 5000), Array(5072000, 50, 25000), Array(5072000, 100, 50000),
// ����߼����� - ȫ�����˶����ü���ɫ˵�ģ��ڶԻ������������־
Array(5073000, 10, 10000), Array(5073000, 50, 50000), Array(5073000, 100, 100000),
// �׹Ǹ߼����� - ȫ�����˶����ü���ɫ˵�ģ��ڶԻ������ְ׹Ǳ�־
Array(5074000, 10, 10000), Array(5074000, 50, 50000), Array(5074000, 100, 100000),
// �������� - ������ܵĵ��߷���ȥ���Ϳ�����ȫ������ʾ�����鱨�ͽ�ɫ��˵�Ļ���
Array(5076000, 10, 10000), Array(5076000, 50, 50000), Array(5076000, 100, 100000),
// ����߼����� - ����ģ���ĸ߼�����
Array(5079001, 10, 10000), Array(5079001, 50, 50000), Array(5079001, 100, 100000),
// �ڱ��߼����� - �ڱ�ģ���ĸ߼�����
Array(5079002, 10, 10000), Array(5079002, 50, 50000), Array(5079002, 100, 100000),
// �ͷ����� - һ�ο�����ʾ3�о��ӵ��ͷ����ȣ�������ѡ�����ͼ�ġ�ȫ���������˶����Կ������ǳ��𺳡�
Array(5077000, 10, 15000), Array(5077000, 50, 75000), Array(5077000, 100, 150000),
// �����龰���� - ʹ�������԰����������ʾ������Ƶ����������Ĵ�����ʾ�������˵���Ļ�ϣ�����ȼ�ձ���Ŷ
Array(5390000, 10, 15000), Array(5390000, 50, 75000), Array(5390000, 100, 150000),
// Ѥ���龰���� - ʹ�������԰����������ʾ������Ƶ����������Ĵ�����ʾ�������˵���Ļ�ϣ�������������Ŷ
Array(5390001, 10, 15000), Array(5390001, 50, 75000), Array(5390001, 100, 150000),
// �����龰���� - ʹ�������԰����������ʾ������Ƶ����������Ĵ�����ʾ�������˵���Ļ�ϣ����а��ı���Ŷ
Array(5390002, 10, 15000), Array(5390002, 50, 75000), Array(5390002, 100, 150000),
// С�ϻ��龰���� - ʹ�øõ���,�����С�ϻ�����,ȫ���������˶����Կ��ü��Ŀɰ����龰����Ŷ!
Array(5390005, 10, 15000), Array(5390005, 50, 75000), Array(5390005, 100, 150000),
// �����ϻ��龰���� - ����ר���龰����,���ϻ�����Ч��.ȫ���������˶����Կ��ü���˧�����龰����Ŷ!
Array(5390006, 10, 20000), Array(5390006, 50, 100000), Array(5390006, 100, 200000),
// �����!�龰���� - "����ļ���ʱ��,�����ź�""�����!"" ��Ľ�ɫ������ʾ����Ļ���Ϸ�."
Array(5390007, 10, 20000), Array(5390007, 50, 100000), Array(5390007, 100, 200000),
// ���籭�龰���� - "Ϊ���籭�Ȳ�!  ��Ľ�ɫ������ʾ����Ļ���Ϸ�."
Array(5390008, 10, 20000), Array(5390008, 50, 100000), Array(5390008, 100, 200000),
// ���û�龰���� - ʹ�������԰����������ʾ������Ƶ����������Ĵ�����ʾ�������˵���Ļ�ϣ��������鱳��Ŷ��
Array(5390010, 10, 25000), Array(5390010, 50, 130000), Array(5390010, 100, 250000),
Array(5390013, 10, 30000), Array(5390013, 50, 150000), Array(5390013, 100, 300000),
Array(5390012, 10, 50000), Array(5390012, 50, 250000), Array(5390012, 100, 500000),
Array(5390011, 10, 60000), Array(5390011, 50, 300000), Array(5390011, 100, 600000));
var selectedItem = -1;
var selequantity = -1;
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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x (" + itemList[i][1] + ")   #r" + itemList[i][2] * 3 +  "#k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2] * 3;
            cm.sendYesNo("���Ƿ���#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") ��Ҫ #r" + selectedCost + "#k ���");
        } else {
            cm.sendOk("���ִ���...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("������߳��ִ���...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX( - selectedCost );
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("������̳ǡ� " + cm.getName() + " ����ڵ���̳ǹ�����ߣ� " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("��ϲ���ɹ�����#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") ��");
            } else {
                cm.sendOk("����ʧ�ܣ�����ȷ���ڱ���������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
            }
        } else {
            cm.sendOk("��û����ô����\r\n\r\n����#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") ��Ҫ #r" + selectedCost + "#k ���");
        }
        cm.dispose();
    }
}