importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("��û����׼������ô׼���ú���������˵һ����");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendAcceptDecline("��ʼ�������������ɣ�׼�����ˣ���ȷ��һ�½��Ƿ�װ�����ˣ����ܺ�ҩˮ�Ƿ��Ѿ��е��˿�����У�");
		} else if (status == 1) {
			if (!qm.isQuestActive(21016)) {
				qm.startQuest();
			}
			qm.sendNext("�ܺá�����Ҫȥ���Ե�#r#o0100132#s#k���Ǳ�#o0100131#s������һЩ�Ĺ��ޡ�ȥ#b#m140020100##kץ#r15ֻ#k���⽫���������������ߡ���������ð�ն�������Դ�����ȥ�ɣ�", 1);
		} else if (status == 2) {
			qm.showWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3", 1);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {

}