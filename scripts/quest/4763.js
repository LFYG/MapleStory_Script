var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4763).getId()==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����20�����Ի���½����");
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b15#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5360014# 1��");
			qm.gainItem(5360014, 1);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}