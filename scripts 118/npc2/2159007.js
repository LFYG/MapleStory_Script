var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() == 931000011 || cm.getPlayer().getMapId() == 931000030) {
        cm.dispose();
        return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1) {
        if (status == 0) {
            cm.sendNext("�����ţ��ף���������ô���£���Ϊ�ղŵ��𶯣�������ǿ�ȱ������𡭡�����ô����ˣ�");
        } else if (status == 1) {
            cm.sendNextPrevS("���ˣ�����û�ж����������ˣ�����һ���߰ɣ�", 2);
        } else if (status == 2) {
            cm.sendNextPrev("�������ǡ���");
        } else if (status == 3) {
            cm.sendNextPrevS("�����������������", 2);
        } else if (status == 4) {
            cm.sendNextPrev("��ô���ܣ��Ҳ���һ������ʵ���壡");
        } else if (status == 5) {
            cm.sendNextPrevS("�����Ǿ�һ�����߰ɣ��죡", 2);
        } else if (status == 6) {
            cm.updateInfoQuest(23007, "vel00=2;vel01=2");
            cm.warp(931000020, 1);
            cm.dispose();
        }
    } else if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1) {
        if (status == 0) {
            cm.sendNext("�ã��þ�û��ʵ�����������ˡ�������ʲô�ط���");
        } else if (status == 1) {
            cm.sendNextPrevS("����ͨ�����ǵĴ��Ӱ��¶�˹̹��·���ڸղ���Щ��ֵĺ�ɫ֮�����֮ǰ�����ǿ��߰ɡ�", 2);
        } else if (status == 2) {
            cm.updateInfoQuest(23007, "vel00=2;vel01=3");
            cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
            cm.dispose();
        }
    } else {
        cm.sendOk("����ĺþ�û��ʵ�����������ˡ���");
        cm.dispose();
    }
}