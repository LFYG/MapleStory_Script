var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("�ߣ���Щ�����Ķ��������������ߣ�");
    } else if (status == 1) {
        cm.sendNextPrevS("�����������ˣ�", 2);
    } else if (status == 2) {
        cm.sendNextPrev("����Ҳ�Ӳ����ҵ������ġ���Ҫ����ν�ķ�������Ͷ���ɡ�ʵ�����ܵ�����ȥ�ء����ף���Ȼ����ļһ￴��ȥ�ܿ��ɡ��������������ʵ���尡��ʲô���Ǵ�������");
    } else if (status == 3) {
        cm.sendNextPrevS("�ǵģ����ǰ��¶�˹̹�ľ���", 2);
    } else if (status == 4) {
        cm.sendNextPrev("�С����Һü��ζ���������˲�Ҫ��С���ӿ�����ɽ������ȴ������ȥ���޴��Ĵ��񡭡�û�취���Ҳ�������ش���ȥɢ����ʵ�����йص���Ϣ���ҵð���ץ������");
    } else if (status == 5) {
        cm.sendNextPrevS("ʲô������Ϊ�һ����־�����", 2);
    } else if (status == 6) {
        cm.sendNextPrev("�ߣ�����������ҵ�Ҫ�������ܿ�����ʲôʱ��");
    } else if (status == 7) {
        if (cm.c.getPlayer().getHp() >= 50) {
            cm.c.getPlayer().setHp(25);
            cm.c.getPlayer().updateSingleStat(MapleStat.HP, 25);
        }
        cm.sendNextPrev("#b(�ܵ���ϯ�յĹ���������������һ�룡����ô���أ�������ս�Ļ�����û�취�������)#k");
    } else if (status == 8) {
        cm.sendNextPrev("�������ϲ����ٳ����˰ɣ���Ҫ�������÷���������������������ʵ�顣�ǺǺǡ����Թ�Ͷ���ɣ�");
    } else if (status == 9) {
        cm.sendNextPrevS("�ȵȣ�", 4, 2159010);
    } else if (status == 10) {
        cm.c.getPlayer().setHp(50);
        cm.c.getPlayer().updateSingleStat(MapleStat.HP, 50);
        cm.warp(931000021, 1);
        cm.dispose();
    }
}