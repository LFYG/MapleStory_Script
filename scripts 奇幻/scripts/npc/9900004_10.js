var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "��ã���ѡ�������ü��ܾ��ᡣ\r\n#L111##b��������SP����#v2500000#����ְҵ����#l\r\n#L1##bϴ1ת���ܵ����#v5050001##l\r\n#L2##bϴ2ת���ܵ����#v5050002##l\r\n#L3##bϴ3ת���ܵ����#v5050003##l\r\n#L4##bϴ4ת���ܵ����#v5050004##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
	case 111:
	    if(cm.getMeso() >= 500000) {
	    cm.gainMeso(- 500000);
            cm.gainItem(2500000, 1);
            cm.sendOk("��ϲ������ɹ�!!!");
	    } else {
	    cm.sendOk("ϲ������ɹ�!!!");
	    }
	    cm.dispose();
            break;
	case 1:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050001, 1);
            cm.sendOk("��ϲ������ɹ�!!!");
	    } else {
	    cm.sendOk("ϲ������ɹ�!!!");
	    }
	    cm.dispose();
            break;
	case 2:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050002, 1);
            cm.sendOk("��ϲ������ɹ�!!!");
	    } else {
	    cm.sendOk("ϲ������ɹ�!!!");
	    }
	    cm.dispose();
            break;
	case 3:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050003, 1);
            cm.sendOk("��ϲ������ɹ�!!!");
	    } else {
	    cm.sendOk("ϲ������ɹ�!!!");
	    }
	    cm.dispose();
            break;
	case 4:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050004, 1);
            cm.sendOk("��ϲ������ɹ�!!!");
	    } else {
	    cm.sendOk("ϲ������ɹ�!!!");
	    }
	    cm.dispose();
            break;
		}
    }
}
