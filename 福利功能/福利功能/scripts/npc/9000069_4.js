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
        cm.sendSimple("ϵͳ�Ὣ��תΪ����,���ҽ������ļ���\r\n��ȷ���������ְҵ����.\r\n#r#L0#��ȷ��������");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() > 0&& cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(0);
                cm.clearSkills();
		cm.sendOk("ϵͳ�ѽ���תΪ����.\r\n�����������ļ���.");
            } else {
                cm.sendOk("����������ְҵ ����ĵȼ�û�дﵽ10.");
            }
            cm.dispose();

         } 
    }
}