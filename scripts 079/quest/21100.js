importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("����");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("���ħ��ʦս����Ӣ���ǡ����й����ǵ���Ϣ����ʲô��û�����¡���ʹ��Ԥ������Ҳֻ�м���5λӢ�ۣ�Ҳû���κ��й�������ò���������㻹�ܼ�����Щʲô��", 8);
		} else if (status == 1) {
			qm.sendNextPrev("һ�㶼�벻�����ˡ���", 2);
		} else if (status == 2) {
			qm.sendNextPrev("��Ȼ����ħ��ʦ�������Ȼ����������������ΪӢ�۵���϶��͹�ȥӦ�û������ĳ����ϵ�㡣����ʲô�أ��������·��ǲ�����ս���ж��������ء����������ˣ�Ӧ����#b����#k��", 8);
		} else if (status == 3) {
			qm.sendNextPrev("������", 2);
		} else if (status == 4) {
			qm.sendNextPrev("��ǰ�������ڱ������ھ�Ӣ�۵�ʱ�򣬷��ֹ�һ���޴�����������ǲ²������Ӣ��ʹ�õ����������Ծͷ��ڴ��ӵ����롣������ȥȥ��ʱ��û������ #b#p1201001##k���� \r\r#i4032372#\r\r�����������ӡ���", 8);
		} else if (status == 5) {
			qm.sendNextPrev("ȷʵ���Ǹ��޴��ս���ڴ��������������Щ��֡�", 2);
		} else if (status == 6) {
			qm.sendAcceptDecline("û�������Ǹ���������˵Ӣ�۵������ǻ���ѡ���˵ģ���������ʹ�þ޴��ս����Ӣ�ۣ���ô��ץס�޴��ս����ɲ�ǣ�����Ӧ�û��з�ӳ�ġ���ȥ���#b�޴��ս������#k��");
		} else if (status == 7) {
			if (!qm.isQuestActive(21100)) {
				qm.updateQuest(21100, "create@");
				qm.completeQuest();
			}
			qm.sendOk("���#p1201001#�з�ӳ����˵������ʹ�ù��޴�ս����Ӣ�ۣ���#bս��#k��", 8);
		} else if (status == 8) {
			qm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm", 1);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {

}