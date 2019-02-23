var status = 0;

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
        var selStr = "#r���������ȣ�#b\r\n#L0#���ʵ�����#v5072000#\r\n#L1#����߼�����#v5073000#\r\n#L2#�׹Ǹ߼�����#v5074000#\r\n#L3#�����龰����#v5390000#\r\n#L4#Ѥ���龰����#v5390001#\r\n#L5#�����龰����#v5390002#\r\n#L6#С�ϻ��龰����#v5390005#\r\n#L7#�����ϻ��龰����#v5390006#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 10 && cm.getBossLog("���ʵ�1") <= 2){           
                cm.gainMeso( - 10);
		cm.gainItem(5072000,1);
		cm.setBossLog("���ʵ�1", 1);
                cm.sendOk("���#b���ʵ�����#v5072000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r��ȡʧ��:\r\n#b1.10��Ҷ�û�У���ô��.����־�����.�������Ѿ�����10��!\r\nע:(ÿ��ֻ����10��)");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.getMeso() >= 7200000 && cm.getBossLog("����߼�") >= 10){
                cm.gainMeso( - 7200000);
		cm.gainItem(5073000,1,1);
		cm.setBossLog("����߼�");
                cm.sendOk("���#b����߼�����#v5073000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(720W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 7200000 && cm.getBossLog("�׹Ǹ߼�") >= 10){
                cm.gainMeso( - 7200000);
		cm.gainItem(5074000,1,1);
		cm.setBossLog("�׹Ǹ߼�");
                cm.sendOk("���#b�׹Ǹ߼�����#v5074000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(720W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("�����龰") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390000,1,1);
		cm.setBossLog("�����龰");
                cm.sendOk("���#b�����龰����#v5390000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1200W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("Ѥ���龰") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390001,1,1);
		cm.setBossLog("Ѥ���龰");
                cm.sendOk("���#bѤ���龰����#v5390001#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1200W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("�����龰") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390002,1,1);
		cm.setBossLog("�����龰");
                cm.sendOk("���#b�����龰����#v5390002#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1200W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("С�ϻ�") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390005,1,1);
		cm.setBossLog("С�ϻ�");
                cm.sendOk("���#bС�ϻ��龰����#v5390005#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1200W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 20000000 && cm.getBossLog("�����ϻ�") >= 10){
                cm.gainMeso( - 20000000);
		cm.gainItem(5390006,1,1);
		cm.setBossLog("�����ϻ�");
                cm.sendOk("���#b�����ϻ��龰����#v5390006#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)���Ѿ�����10��!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        }
    }
}