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
        var selStr = "��ӭ���٣�:\r\n\r\n#b#L0#����#v1662002#�߼����ܻ�����(��)#l\r\n#L1#���� #v1662003#�߼������ܻ�����(Ů)#l\r\n#L2#����#v1662004#ѩ�����ܻ�����(��)#l\r\n#L3#����#v1662005#ѩ�����ܻ�����(Ů)#l\r\n#L4#����#v1662009#���˽����ܻ�����(��)#l\r\n#L5#����#v1662010#���˽����ܻ�����(Ů)#l\r\n#L6#����#v1662006#�ҵĹ���#l\r\n#L7#�������������#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
    cm.gainItem(1662002,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 1:
    cm.gainItem(1662003,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 2:
    cm.gainItem(1662004,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 3:
    cm.gainItem(1662005,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 4:
    cm.gainItem(1662009,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 5:
    cm.gainItem(1662010,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 6:
    cm.gainItem(1662006,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        case 7:
    cm.gainItem(1672000,1);
cm.gainItem(1672004,1);
cm.gainItem(1672005,1);
cm.gainItem(1672003,1);
cm.gainItem(1672006,1);
cm.gainItem(1672007,1);
cm.gainItem(1672008,1);
cm.gainItem(1672013,1);
cm.gainItem(1672015,1);
cm.gainItem(1672016,1);
     cm.sendOk("����ɹ�.");
            cm.dispose();
            break;
        }
    }
}
