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
        var selStr = "�װ���#r#h ##k���ã�����Ҫ��������\r\n������ֿ�NPC ������@ea�⿨!#l \r\n#b#L1#һ������ȫ��#l \r\n#L2#����ְҵ����#l";
        cm.sendSimple(selStr);
    } else if (status == 1){
        } if (selection == 1) {
            //Beginner
                cm.maxAllSkills();
            cm.dispose();
        cm.sendOk("��ϲ�����м�����������");
	    } else if (selection == 2) {
                cm.maxSkillsByJob();
            cm.dispose();
        cm.sendOk("��ϲ��ְҵ������������");
	}
}
