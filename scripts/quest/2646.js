/* RED 1st impact
 The Explorer Book and A Maple Leaf
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNextS("��?Ϊʲô��������?�������,�Ϳ��������Լ����������Լ��Ĺ��°�!", 4, 1012100);
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("�������������������,����һ�������ܹ��ڽ�����¼[zealms]��������ʱ,��������һ�е�#bð��֮��#k,�������,��������ܹ���¼���Լ��Ĺ�����!", 4, 1012100);
    } else if (status == 1) {
        qm.sendYesNoS("��ô����?Ҫ����#bð��֮��#k��?", 15, 1012100);
    } else if (status == 2) {
        qm.sendNextS("������һ��...�ʺ�սʿ���ð��֮��.....", 4, 1012100);
    } else if (status == 3) {
        qm.sendNextPrevS("��ô,ϣ���������ܹ���һ���������ð��.", 4, 1012100);
    } else if (status == 4) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        qm.sendNextS("#bð��֮��#k��? ��������Լ�¼�ҵ�ð�յ����µ���?", 16);
    } else if (status == 1) {
        qm.sendNextPrevS("�պ�����Ҫ��ʼð�յ�ʱ����ô�����ڿ�ʼ������. ����?", 16);
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.dispose();
        qm.showMapleLeafScene();
    }
}