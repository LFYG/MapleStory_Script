var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            //qm.sendOk("��λ�µ������߰ɣ�����İ���ɣ�����[zealMS��]��ӪԱ���ú����ţ�����ĸ������Զ���ϵ���Ժ��ð�վ������棬������ȷ��ѡ��ְҵ���Ǻ���Ҫ�ġ�����㻹��֪��Ӧ��ѡ��ʲôְҵ������Ե��г���#b����Ա#k̸̸��Ҳ�����������һЩ����Ҫ֪���ġ�by:����");
            qm.openNpc(1540050, 1);
			qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}