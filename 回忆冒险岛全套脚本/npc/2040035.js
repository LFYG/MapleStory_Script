//Memory

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("��һֱ�ڵ��㣡����������������������ҵ����");
    } else if (status == 1) {
        getPrize();
		
        cm.dispose();
    }
}

function getPrize() {
	var text = "ͨ�سɹ���";
	var gifts = Array(4000313,4001713,4001713,5062000,5062000,5062002,5062500);
	var gifts1 = Array();
    if (cm.getSpace(2) >= 1 && cm.getSpace(4) >= 1 && cm.getSpace(5) >= 1 && cm.getSpace(1) >= 1) { // ��鱳���ռ�
		cm.setEventCount("������");
		cm.dispose();
		var itemid = gifts[Math.floor(Math.random()*gifts.length)];
		var quantity = Math.floor(Math.random()*3+2);
		cm.gainItem(4000313, 3);
		cm.gainItem(5062000, 2);
		cm.gainItem(4031169, 1);
		cm.gainItem(itemid, quantity);
		text+="��õ��ߣ�\r\n#b";
		text+="#v4000313##t4000313#x3\r\n";
		text+="#v5062000##t5062000#x2\r\n";
		text+="#v4031169##t4031169#x1\r\n";
		text+="#v"+itemid+"##t"+itemid+"#x"+quantity+"\r\n";
		cm.worldSpouseMessage(0x18, "[���-��߳�] ��� " + cm.getChar().getName() + " ͨ�� [" + cm.getEventCount("������") + "] �� ϵͳ����������ͨ�ؽ�����");
        cm.warp(910000000);
		cm.sendOk(text);
    } else {
        cm.sendNext("�������װ�����������������������������Ƿ���һ����Ŀ���ϵĿո�");
    }
}
