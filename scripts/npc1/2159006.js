var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() == 931000011) {
        cm.dispose();
        return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel00=1") == -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
        if (status == 0) {
            cm.sendNext("�����ټ��������ˡ�����");
        } else if (status == 1) {
            cm.sendNextPrev("������ô���������ģ������ǽ�ֹ�����������");
        } else if (status == 2) {
            cm.sendNextPrevS("����˭?!", 2);
        } else if (status == 3) {
            cm.sendNextPrev("�ҡ�������������档");
        } else if (status == 4) {
            cm.updateInfoQuest(23007, "vel00=1");
            cm.showWZEffect("Effect/Direction4.img/Resistance/ClickVel");
            cm.dispose();
        }
    } else if (cm.getInfoQuest(23007).indexOf("vel00=1") != -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
        if (status == 0) {
            cm.sendNext("�ҡ�����#r����÷����ʿ#k��ʵ���塣���ֽ�#b���ȵ�#k������Ȼ��֪��������ô���������ģ������������ȥ!Ҫ�Ǳ�����÷�����ֵĻ�������!");
        } else if (status == 1) {
            cm.sendNextPrevS("ʵ���壿����÷�����㵽����˵ʲô�������ﵽ�ס�����ʲô�ط�����Ϊʲô���Ǹ����棿", 2);
        } else if (status == 2) {
            cm.sendNextPrev("�㲻֪������÷��������÷����ʿ�����Ǻ�ɫ֮��ķ���ѧ��!�����Ǹ���÷����ʵ���ҡ�����÷���������������ʵ�顭��");
        } else if (status == 3) {
            cm.sendNextPrevS("���塭��ʵ�飿", 2);
        } else if (status == 4) {
            cm.sendNextPrev("�ǵģ�����ʵ�顣Ҫ����Ҳ��ץס��˵�����ᱻ����ʵ�����!������߰�!");
        } else if (status == 5) {
            cm.sendNextPrevS("ʲô���ӣ����ߡ����������㡭��!", 2);
        } else if (status == 6) {
            cm.updateInfoQuest(23007, "vel00=2");
            cm.warp(931000011, 0);
            cm.dispose();
        }
    } else if (cm.getInfoQuest(23007).indexOf("vel01=1") != -1) {
        if (status == 0) {
            cm.sendNext("����������÷������ȥ����������ˡ������ˣ������ʱ��������߰ɡ�");
        } else if (status == 1) {
            cm.sendNextPrevS("��һ�������ߣ������ء�����", 2);
        } else if (status == 2) {
            cm.sendNextPrev("�Ҳ������ߡ�����÷����ʿ�ǵ��Լ����е�ʵ���塭�������һ�������ˣ���һ���ᷢ�ֵġ�������Ӱɡ�");
        } else if (status == 3) {
            cm.sendNextPrevS("����!����һ���Ӱ�!", 2);
        } else if (status == 4) {
            cm.gainExp(60);
            cm.warp(931000013, 0);
            cm.dispose();
        }
    }
}