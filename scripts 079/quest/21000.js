importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            	status--;
		if (status == 0) {
			if (!qm.isQuestActive(2100))
				qm.startQuest();
			qm.sendAcceptDecline("��⣡�и����ӱ�����ɭ�����ˣ����ǲ��ܶ��º��Ӿ���ô���ߣ�ս�񡭡�����ȾȺ��Ӱɣ����˵���ô�أ���Ҫ��ȥս������������Ҳ�ܹ��ⲻȥ������ֻ�����ܹ����Ǻ��Ӱ���");
		} else if (status == 1) {
			qm.sendNext("#b���ӿ�����ɭ�ֵ��#k�������ں�ħ��ʦ�ҵ�����֮ǰ���������ۣ����Ա��뾡��ȳ����Ӳ��У�");
		} else if (status == 2) {
			qm.sendNextPrev("�ؼ��ǲ�Ҫ���ţ�ս�������Ҫ�鿴�������״̬����#bQ��#k�������������в鿴��");
		} else if (status == 3) {
			qm.sendNextPrev("�����ˣ�ս�񣡾ȾȺ��Ӱɣ����ǲ�����������Ϊ��ħ��ʦ�������ˣ�");
		} else if (status == 4) {
			qm.showWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1", 1);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {

}