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
    if (status == 0) {//#L0#ʹ��100��#v4000016#�һ�1��#v5062002##l\r\n#L5#ʹ��50��#v4000175#�һ�1��#v5064000##l\r\n
        var selStr = "���ã��ҿ��԰���һ�����Ҫ����Ʒ:\r\n\r\n#L16##r[New]�һ��Ŵ�#l\r\n\r\n#b#L0#ʹ��100��#v4000004#�һ�1��#v5062000##l\r\n#L1#ʹ��100��#v2049301#�һ�1��#v2049300##l\r\n#L2#ʹ��10��#v4000659#�һ�1��#v4000038##l\r\n#L3#ʹ��10��#v4000040#�һ�1��#v5072000##l\r\n#L4#ʹ��20��#v2210006#�һ�1��#v5064100##l\r\n#L6#ʹ��20��#v4000175#�һ�1��#v5360014##l\r\n#L7#ʹ��50��#v2049002#�һ�1��#v2049004##l\r\n#L8#ʹ��3��#v2049004#�һ�1��#v2049005##l\r\n#L9#ʹ��20��#v4030010#�һ�1��#v2290285##l\r\n#L10#ʹ��50��#v4310015#�һ�10��#v4031997##l\r\n#L11#ʹ��50��#v4021012#�һ�10��#v4031997##l\r\n#L12#ʹ��50��#v4021011#�һ�10��#v4031997##l\r\n#L13#ʹ��10��#v4000659#�һ�1��#v4000038##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.haveItem(4000004,100)) {
                cm.gainItem(4000004,-100);
                cm.gainItem(5062000,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ������ħ��" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v5062000#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��100��#v4000004#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.haveItem(2049301,100)) {
                cm.gainItem(2049301,-100);
                cm.gainItem(2049300,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ���߼�װ��ǿ������" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v2049300#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��100��#v2049301#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.haveItem(4000659,10)) {
                cm.gainItem(4000659,-10);
                cm.gainItem(4000038,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ����" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v4000038#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��10��#v4000659#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.haveItem(4000040,10)) {
                cm.gainItem(4000040,-10);
                cm.gainItem(5072000,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ�����ʵ�����" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v5072000#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��10��#v4000040#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.haveItem(2210006,20)) {
                cm.gainItem(2210006,-20);
                cm.gainItem(5064100,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ����������" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v5064100#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��20��#v2210006#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.haveItem(4000175,50)) {
                cm.gainItem(4000175,-50);
                cm.gainItem(5064000,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ����������" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v5064000#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��50��#v4000175#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.haveItem(4000175,20)) {
                cm.gainItem(4000175,-20);
                cm.gainItem(5360014,1,30);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�1��˫�����ʿ���СʱȨ" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v5360014#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��20��#v4000175#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.haveItem(2049002,50)) {
                cm.gainItem(2049002,-50);
                cm.gainItem(2049004,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�1������-��" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v2049004#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��50��#v2049002#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.haveItem(2049004,3)) {
                cm.gainItem(2049004,-3);
                cm.gainItem(2049005,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�1������-��" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v2049005#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��3��#v2049004#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.haveItem(4030010,20)) {
                cm.gainItem(4030010,-20);
                cm.gainItem(2290285,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ���������ֲ�" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v2290285#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��20��#v4030010#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.haveItem(4310015,50)) {
                cm.gainItem(4310015,-50);
                cm.gainItem(4031997,10);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�10��Ģ�����" );
                cm.sendOk("��ϲ��ɹ��һ�10��#v4031997#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��50��#v4310015#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.haveItem(4021012,50)) {
                cm.gainItem(4021012,-50);
                cm.gainItem(4031997,10);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�10��Ģ�����" );
                cm.sendOk("��ϲ��ɹ��һ�10��#v4031997#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��50��#v4021012#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.haveItem(4021011,50)) {
                cm.gainItem(4021011,-50);
                cm.gainItem(4031997,10);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�10��Ģ�����" );
                cm.sendOk("��ϲ��ɹ��һ�10��#v4031997#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��50��#v4021011#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.haveItem(4000659,10)) {
                cm.gainItem(4000659,-10);
                cm.gainItem(4000038,1);
		cm.worldMessage("��ϲ���" + cm.getChar().getName() + "�ɹ��һ�һ����" );
                cm.sendOk("��ϲ��ɹ��һ�1��#v4000038#!");
		cm.dispose();
            } else {
                cm.sendOk("��û��10��#v4000659#�Ҳ��ܸ���һ�.");
		cm.dispose();
            }
            break;
        case 16:
		cm.dispose();
		cm.openNpc(9900002,30);
            break;
        }
    }
}