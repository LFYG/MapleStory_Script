
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
	cm.sendSimple("��Ҫʲô�����𣿣���ǰ���ʣ�10E���=1�������ң�\r\n#b#L1#�ý�Ҷһ��ɹ�������\r\n#L2#�ù������Ҷһ��ɽ��");
    } else if (status == 1) {
	if (selection == 1) {
		if (cm.getMeso() >= 1000000000) {
			if (cm.getSpace(4) < 1) {
				cm.sendOk("��������������1���ո�");
			} else {
				cm.gainItem(4000463, 1);
				cm.gainMeso(-1000000000);
			}
		} else {
			cm.sendOk("���Ľ�Ҳ���10E");
		}
	} else {
		if (cm.itemQuantity(4000463) >= 1) {
			if (cm.getMeso() > 1147483647) {
				cm.sendOk("���Ľ�ҳ���1147483647��Ϊ�˱������Σ������Ϊ���һ�");
			} else {
				cm.gainMeso(1000000000);
				cm.gainItem(4000463, -1);
			}
		} else {
			cm.sendOk("��ȷ����ӵ�й���������");
		}
	}
	cm.dispose();
    }
}