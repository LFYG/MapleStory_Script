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
			if(qm.getQuestStatus(4766).getId()==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����50�����Ի�ø��ཱ���");
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b40#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5030001# 1��");
			qm.gainItem(5030001, 1);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}