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
			qm.sendNext("�������еĲ���ɣ������ʦ#p1202006#���Ժ�ǿ���һ�������Ҫ�ǳմ��˾Ͳ��ð��ˡ�������Ӣ�۵ļ���ȷʵ�����о�������Ӧ���ܰ��ϲ���æ��", 8);
		} else if (status == 1) {
			qm.sendNextPrev("#b(�������Լ�����������������������ܡ�)#k", 2);
		} else if (status == 2) {
			qm.sendAcceptDecline("���𣡿�������#p1202006#��ѵ����ʽ֮�⣬���Լ���Ȼ�ǵĴ�ǰ����Щ����Ҳ�ܹؼ�����������ֻ���ڱ�����ⶳ��̫�ã���Ҫʱ��ָ����ѡ�#b�������������ɣ���ȡ���ջָ����еļ��ܣ�#k  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 500 exp");
		} else if (status == 3) {
			qm.startQuest();
			qm.completeQuest();
			qm.getPlayer().gainExp(500, true, true);
			qm.dispose();
				
		}
	}
}

function end(mode, type, selection) {

}