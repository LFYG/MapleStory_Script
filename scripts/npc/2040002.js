var dh;
var entry = true;

function start() {
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.sendNext("�ҿ�����ܺ��¡����������ǿ������ġ������зǳ�ǿ��Ĺ�����������ˡ����Ժ���̸�������������������");
	cm.dispose();
	return;
    } else if(mode == 0 && status == 2) {
	cm.sendNext("�ðɡ�����׼���������Ԫ�ռ��ʱ�������̸������Ȱ���㲻Ҫ��̫���ʱ�䡣����ǿ��Ĺ�������ʵ�����ȫ��ͬ��");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if(cm.getQuestStatus(3230) == 1) {
	if(status == 0) {
	    cm.sendYesNo("�š�������˵�����#b#p2040001##kһ�ѡ�����Բ����԰����ҵ����Ԫ�ռ���һ�ˣ������ҳ����������С�ݡ�����");
	} else if(status == 1) {
	    cm.sendNext("�ǳ���лл�㣡ʵ����#b#p2040001##kҪ������ռ�20��#b#t4031093##k��Ϊ�˲������������������������������");
	} else if(status == 2) {
	    cm.sendYesNo("�ܾ���ǰ������������һ�����Ԫ�ռ䣬����һ���ѷ졣�������˳���������ȡ��ʱ���ϵİ��ӡ�����������	��������档���������кü�������ݡ����ܰ����ҳ�����");
	    if (dh != null && dh.getProperty("noEntry").equals("true")) {
		entry = false;
	    }
	} else if(status == 3) {
	    cm.sendNext("�ðɣ��Ҵ��㵽���Ԫ�ռ䡣����»ῴ���ܶ������ݡ���Ҫ��ϸ�۲���Щ����ݡ��Ѳ�ͬ��������ҳ���������������");
	} else if(status == 4) {
	    cm.sendNextPrev("��Ȼ������Ҳ�кܶ�ǳ�ǿ��Ĺ������ʱ������֮���ҵ�#t4031094#������ҵ����Ӱڡ�����Ժ�#p2040028#�Ի������ǻ���㳨�����Ԫ�ռ�Ĵ��ţ�");
	} else if(status == 5) {
	    if(dh == null || entry == false) {
		cm.sendPrev("�Բ��������Ѿ������ڵ���������ˡ����Ժ�������");
	    } else {
		cm.removeAll(4031093);
		dh.startInstance(cm.getChar());
	    }
	    cm.dispose();
	}
    } else if(cm.getQuestStatus(3230) == 2) {
	cm.sendNext("лл��������ҳ�������Ӱڣ����͸�������ﻹ����ɣ�");
	cm.dispose();
    } else {
	cm.sendOk("�������غ����������߱�����ֹ�κ��޹���Ա�Ľ��롣");
	cm.dispose();
    }
}