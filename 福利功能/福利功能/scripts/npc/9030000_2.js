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
        var selStr = "��ӭ���٣�:\r\n\r\n#b#L0#����#v1012174#�ֲ����޵��˿�#l\r\n#L1#���� #v1112586#����ʹ��ף��#l\r\n#L2#����#v4032246#�λ����⹫԰����#l\r\n#L3#����#v2022720#����ҩˮ*99#l\r\n#L4#����#v5062001#��������ħ��*99#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
    cm.gainItem(1012174,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 1:
    cm.gainItem(1112586,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 2:
    cm.gainItem(4032246,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 3:
    cm.gainItem(2022720,99);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 4:
    cm.gainItem(5062001,99);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        }
    }
}
