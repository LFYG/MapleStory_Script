
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
	if (cm.itemQuantity(4032339)>0) {
		cm.sendNext("��������ô����#v4032339#,�ǲ�����͵��....\r\n������Ц����������л�������#v4032339#����Ҫ�Ұ��㻻��Ԫ����");
	} else {
		cm.sendOk("���Ⱳ����޵ľ���С͵��");
        	cm.dispose();
        	return;
	}
    } else if (status == 1) {
	cm.sendGetNumber("��Ҫ�һ����ٸ���?(#r#v4032339#=1000Ԫ��#k)",cm.itemQuantity(4032339),1,cm.itemQuantity(4032339));
    } else if (status == 2) {
	sl = selection;
	cm.sendYesNo("�����Ҫ�һ�#r" + sl + "#k��#v4032339#��\r\n�һ�������Ի��#r" + (sl * 1000) + "#kԪ��");
    } else if (status == 3) {
	if (cm.itemQuantity(4032339)>=sl){
		cm.addHyPay(-sl * 1000);
		cm.gainItem(4032339, -sl);
		cm.sendOk("�һ��ɹ�");
	} else {
		cm.sendOk("��ȷ����#r" + sl + "#k��#v4032339#��");
	}
	cm.dispose();
    }
}