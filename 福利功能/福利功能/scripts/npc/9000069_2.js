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
        cm.sendSimple("�׹���Ϊ�Զ�תְְҵ����Ҳ�����ֶ����תְ\r\n#b#L0#��ҪתְΪ�׹�����һת��#l  \r\n#L1#��ҪתְΪ�׹�������ת��#l \r\n#L2#��ҪתְΪ�׹�������ת��#l \r\n#L3#��ҪתְΪ�׹�������ת��#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(5100);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹���.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10��.");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getJob() == 5100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(5110);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹�������ת��.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻���׹�����һת�� ����ĵȼ�û�дﵽ30��.");
            }
            cm.dispose();
            break;
        case 2:
            if (cm.getJob() == 5110 && cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(5111);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹�������ת��.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻���׹�������ת�� ����ĵȼ�û�дﵽ70��.");
            }
            cm.dispose();
            break;
        case 3:
            if (cm.getJob() == 5111 && cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(5112);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹�������ת��.\r\n��ϲ��������׹���ȫ��תְ.");
            } else {
                cm.sendOk("�㲻���׹�������ת�� ����ĵȼ�û�дﵽ120��.");
            }
            cm.dispose();
            break;

         } 
    }
}