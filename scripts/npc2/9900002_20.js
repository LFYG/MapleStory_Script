var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("��ȷ��Ҫתְ��(��ħ/˫��/��.../�Զ�תְҵ.)\r\n������ѡ��...\r\n#b#L0#��ҪתְΪ������#l\r\n#b#L1#��ҪתְΪ˫��#l\r\n#b#L4#��ҪתְΪ˫��(һת)#l\r\n#b#L5#��ҪתְΪ��ħ(һת)#l\r\n#b#L3#��������ְҵתְ(սʿ/��ʦ/��...)#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(501);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10.");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(430);
            } else if (cm.getJob() == 433 && cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(434);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��.\r\n���Ѿ��ɹ�תְΪ������.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻�Ƿ���(һת)ְҵ ����ĵȼ�û�дﵽ20.(˫��һת��ת����)");
            }
            cm.dispose();
            break;
        case 2:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
                cm.sendOk("��ĵȼ�����9.���������ȥ");
            }
            cm.dispose();
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9000069, 1);
            break;
        case 4:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2300);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ˫�󹭼���.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10.");
            }
            cm.dispose();
            break;
        case 5:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3100);
                cm.gainItem(1322122,1);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ����.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10.");
            }
            cm.dispose();
            break;
        }
    }
}