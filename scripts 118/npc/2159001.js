var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNextS("#h0#����ô��ô���쵽�������", 8);
    } else if (status == 1) {
        cm.sendNextPrevS("What was the hold up? You scared or something?", 4, 2159002);
    } else if (status == 2) {
        cm.sendNextPrevS("��û���¡�", 2);
    } else if (status == 3) {
        cm.sendNextPrevS("�棬������ҿ��е㺦�¡��������ǲ������ǵ�#�����ɽ#k�������������#r��ɫ֮�����#k���š���", 4, 2159000);
    } else if (status == 4) {
        cm.sendNextPrevS("�������ص��ƹ��˼����ߣ������������������ǳ�����ʱ������ʲôʱ���ܴ�#b���¶�˹̹#k�����ء���ѽ����С��", 4, 2159002);
    } else if (status == 5) {
        cm.sendNextPrevS("���ǡ���Ҫ�Ǳ����������ô�죿", 4, 2159000);
    } else if (status == 6) {
        cm.sendNextPrevS("���Ѿ����������ˣ�������ô�죿���㵽ʱ�ᱻ������ʱ����Ҫ�档��������׽�Բذɣ�", 8);
    } else if (status == 7) {
        cm.sendNextPrevS("�ţ�׽�Բأ�", 2);
    } else if (status == 8) {
        cm.sendNextPrevS("�����ɡ���", 4, 2159002);
    } else if (status == 9) {
        cm.sendNextPrevS("ʲô���ɣ����ﻹ����ʲô�������˵����#h0#������ץ���ǣ���Ϊ��ٵ��ˡ����ˣ�����ȥ�������ˣ�����10֮�����������ǣ�", 8);
    } else if (status == 10) {
        cm.warp(931000001, 1);
        cm.dispose();
    }
}