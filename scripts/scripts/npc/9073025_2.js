var status = 0;
var typed=0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("��ȡδ���Ľ���������ȡ�Ľ�����\r\n#b#L6#[ʮ������]#v1142541#��ǿѫ��\r\n#L7#[ʮ������]#v1142499#�������ǡ�\r\n#L1#[ʮ������]#v1142503#���������Ķ���\r\n#L2#[ʮ������]#v1142502#����ϣ���Ķ���\r\n#L3#[ʮ������]#v1142500#���ذࡤ�װ��Ķ���\r\n#L4#[ʮ������]#v1142504#���ذ��������Ķ���\r\n#L5#[ʮ������]#v1142501#���ذ������յĶ���");
		} else if (status == 1) {
			if (selection == 1) {
			if(cm.haveItem(4033302,15)){
			   cm.gainItem(4033302,-15);
			   cm.gainItem(1142503,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ������������Ķ���ѫ�¡�");
			   cm.sendOk("��� ���������Ķ��� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��ı����Ƿ���� ������ʯƬ x15��");
			}
			}
			if (selection == 2) {
			if(cm.haveItem(4033304,15)){
			   cm.gainItem(4033304,-15);
			   cm.gainItem(1142502,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ�������ϣ���Ķ���ѫ�¡�");
			   cm.sendOk("��� ����ϣ���Ķ��� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��ı����Ƿ���� ϣ����ͷ�� x15��");
			}
			}
			if (selection == 3) {
			if(cm.haveItem(4033311,15)){
			   cm.gainItem(4033311,-15);
			   cm.gainItem(1142500,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ������ذࡤ�װ��Ķ���ѫ�¡�");
			   cm.sendOk("��� ���ذࡤ�װ��Ķ��� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��ı����Ƿ���� �ࡤ�װ���ͷ�� x15��");
			}
			}
			if (selection == 4) {
			if(cm.haveItem(4033303,15)){
			   cm.gainItem(4033303,-15);
			   cm.gainItem(1142504,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ������ذ��������Ķ���ѫ�¡�");
			   cm.sendOk("��� ���ذ��������Ķ��� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��ı����Ƿ���� ������������Ƭ x15��");
			}
			}
			if (selection == 5) {
			if(cm.haveItem(4033312,15)){
			   cm.gainItem(4033312,-15);
			   cm.gainItem(1142501,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ������ذ������յĶ���ѫ�¡�");
			   cm.sendOk("��� ���ذ������յĶ��� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��ı����Ƿ���� �������յĺ��� x15��");
			}
			}
			if (selection == 6) {
			if(cm.haveItem(1142503,1) && cm.haveItem(1142504,1) && cm.haveItem(1142501,1) && cm.haveItem(1142502,1) && cm.haveItem(1142500,1)){
			   cm.gainItem(1142500,-1);
			   cm.gainItem(1142501,-1);
			   cm.gainItem(1142502,-1);
			   cm.gainItem(1142503,-1);
			   cm.gainItem(1142504,-1);
			   cm.gainItem(1142541,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ�����ǿѫ�¡���(��)��ð�յ�ʷ����ǿ���ˡ�");
			   cm.sendOk("��� ��ǿѫ�� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��ı����Ƿ���� ��������5��Bossѫ�¡�");
			}
			}
			if (selection == 7) {
			if(cm.getPlayer().getCSPoints(1) >= 30000){
			   cm.gainNX(-30000);
			   cm.gainItem(1142499,1,30);
			   cm.worldMessage(cm.getChar().getName() + "����������һ��˳������ǡ��(��)�����Ǿ����ˡ�");
			   cm.sendOk("��� �������ǡ� ѫ�� x1");
			}else{
			   cm.dispose();
			   cm.sendOk("��鿴��������Ƿ���� 30000 ���");
			}
			}
		}
	}
}