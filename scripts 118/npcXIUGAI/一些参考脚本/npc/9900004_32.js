
var status = 0;
var sl = 0;//�һ�����

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
	if (cm.itemQuantity(4000313)>0) {
		cm.sendNext("������ܴ���#v4000313#,�ҿ��Ը���1W������Ϊ����\r\n��Ҫ�һ��ɵ����");
	} else {
		cm.sendOk("������ܴ���#v4000313#,�ҿ��Ը���1W������Ϊ����");
        	cm.dispose();
        	return;
	}
    } else if (status == 1) {
	cm.sendGetNumber("��Ҫ�һ����ٸ���?(#r#v4000313#=1W���#k)",cm.itemQuantity(4000313),1,cm.itemQuantity(4000313));
    } else if (status == 2) {
	sl = selection;
	cm.sendYesNo("�����Ҫ�һ�#r" + sl + "#k��#v4000313#��\r\n�һ�������Ի��#r" + (sl * 1) + "w#k���");
    } else if (status == 3) {
	if (cm.itemQuantity(4000313)>=sl){
		cm.gainNX(sl * 10000);
		cm.gainItem(4000313, -sl);
		cm.sendOk("�һ��ɹ�");
	} else {
		cm.sendOk("��ȷ����#r" + sl + "#k��#v4000313#��");
	}
	cm.dispose();
    }
}