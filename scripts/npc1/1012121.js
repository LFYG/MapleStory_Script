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
        var selStr = "���ã�����ѡ������Ҫ�Ĺ���:\r\n\r\n#b#L0#��˫���̵�#l\r\n#L2#���ӻ���(���ܲ�/��ս��Ʒ/����ʳƷ/��ħ���Ƶ�.)#l\r\n#L3#���ӻ���2(ҩˮ/����/��..)#l\r\n#L10#�򿪻�Ӱ�̵�#l\r\n#L4#�򿪻�����װ����#l\r\n#L5#��˫��װ����#l\r\n#L7#�򿪷ɱ�ר����#l\r\n#L8#������̵�#l\r\n#L6#��Ҫ��������ְҵװ��#l"; //#L9#ʨ�������߶һ�#r[New]#k#l\r\n
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	    cm.openShop(1033001);
            break;
        case 2:
            cm.dispose();
            cm.openShop(1012123);
            break;
        case 3:
            cm.dispose();
            cm.openShop(9090000);
            break;
        case 4:
            cm.dispose();
            cm.openShop(1012124);
            break;
        case 5:
            cm.dispose();
            cm.openShop(1012125);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("����ְҵ��װ���뵽�������е�װ���̵깺��.\r\n�߼�װ�����Կ�ˢ��/BOSS/�齱/�/���...\r\nף����Ϸ���!����кõĽ�������ϵ����Ա.");
            break;
        case 7:
            cm.dispose();
            cm.openShop(1033003);
            break;
        case 8:
            cm.dispose();
            cm.openShop(2060003);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2161010);
            break;
        case 10:
            cm.dispose();
            cm.openShop(1400001);
            break;
        }
    }
}