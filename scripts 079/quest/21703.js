importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("I know it takes an incredible amount of strength and will to outdo your instructor, but you weren't meant to let yourself wither away. You must move on to bigger and better things! You must do everything you can to embrace your heroic nature!");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("�����������������ʲô�̶ȣ��Ҵ���˽��ˡ����Ǻǡ���û�뵽������Ϲ�ͷ�����н��졭�����Ǹж���Ҫ�����ᡭ�������Ǳ��顭��");
		} else if (status == 1) {
			qm.sendNextPrev("#b(����Ҳû��ô�������)#k", 2);
		} else if (status == 2) {
			qm.sendNextPrev("�ã����������ǿ�ʼ��3�׶ε����һ�׶εĶ�������������Ķ����ǡ���#r#o9300343##k���������˽�������");
		} else if (status == 3) {
			qm.sendNextPrev("һ��㡭��", 2);
		} else if (status == 4) {
			qm.sendNextPrev("������������սʿ���ӳ�������һ���𣬶�ʳ��ͳ���������ķ�ŭ���������Ǿ����ĵط������������κ�ʳ��ܿ��°ɣ�");
		} else if (status == 5) {
			qm.sendNextPrev("#b(�������ڿ���Ц�ɣ�)#k", 2);
		} else if (status == 6) {
			qm.sendAcceptDecline("�������#b�ٴν���������#k��ȥ����Щ������սʿ�������õ�����ս���ɣ���#r30ֻ#k���������������һ���ʵķ�Ծ��ȫ���Ը���ȥս���ɣ���Խ�������ʦ��");
		} else if (status == 7) {
			if (!qm.isQuestActive(21703))
				qm.startQuest();	
			qm.sendOk("���߰ɣ�ȥ����Щ#o9300343#��");
		} else if (status == 8) {
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("����");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("��ô��ʹ���30ֻ#o9300343#����������ͷ�ӹ�Ȼû�п�����Ȼ��ʧȥ�������ļ��䣬ʧȥ��������������������Ȼ�Ǹ�Ӣ�ۣ�ֻҪ���ϵĳ�ì���ڣ�");
		} else if (status == 1) {
			qm.sendNextPrev("#b(��ô˵��Ϊ�˰�ο����)#k", 2);
		} else if (status == 2) {
			qm.sendYesNo("���Ѿ�ûʲô�ɼ���������ˡ����Ѿ���Խ���������ͷ�ӡ��������ɽ�ˡ�������ûʲô�������ġ�������ͷ���ܹ��л���ָ���㣬�Ѿ��������ˡ�");
		} else if (status == 3) {
			if (qm.isQuestActive(21703)) {
				qm.completeQuest();
				qm.getPlayer().changeSkillLevel(net.sf.odinms.client.SkillFactory.getSkill(21000000), 0, -1);
				qm.getPlayer().gainExp(2800, true, true);
				qm.showWZEffect("Effect/BasicEff.img/AranGetSkill", 0);
			}
			qm.sendNext("(�������˼���#b��������#k�� �һ�������е�մ�����ͷ��ѵ����û��Ч���أ�û�뵽�����Ч��)", 2);
		} else if (status == 4) {
			qm.sendPrev("�������ȥ��#p1201000#�ɡ���������Ľ�����ܸ��˵ģ�");
		} else if (status == 5) {
			qm.dispose();
		}
	}
}