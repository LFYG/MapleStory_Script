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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = " #e#r#h ##n#k ��ã�����Ҫ#b#i4032922:##t4032922##k ��������ʿ��Ҫ�� ô?:\r\n\r\n#b#L0#�ţ�������һ��#l\r\n#L1#�����Ի�#l";
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
          if (cm.getSpace(4) > 2) {
            cm.dispose();
            cm.gainItem(4032922, 1);
            cm.sendOk("�Ѿ����͵���ı���.")
          } else {
            cm.sendOk("��ı������������ռ䲻��!��������2���ռ�����.");
            cm.dispose();
             }

            break;
        case 1:
            cm.dispose();
            break;
		}
    }
}