/*
  �������������
*/

// var status = 0;

// function start() {
//     status = -1;
//     action(1, 0, 0);
// }

// function action(mode, type, selection) {
//      cm.setBossLog("������");
//      cm.setBossLog("�ܼ�������", 1);
//      cm.gainMeso(1000000);
//      cm.gainItem(4032398,1);
//      cm.warp(910000000);
//      cm.sendOk("��ȥ�ɳ����������,��100WҲ�������!���Ǿʹ˰��֣��������ڴ˶�л�ˣ����գ�������л��");
//      cm.dispose();
// }


Lira
    *
    var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("Congratulations on getting this far!  Well, I suppose I'd better give you your #bBreath of Fire#k.  You've certainly earned it!");
    } else if (status == 1) {
        cm.sendNextPrev("Well, time for you to head off.");
    } else if (status == 2) {
        if (!cm.canHold(4031062, 1)) {
            cm.sendNext("Please clear inventory space.");
            cm.dispose();
            return;
        }
        cm.gainItem(4031062, 1);
        cm.warp(211042300);
        // if this is their first time, exp gain
        if (cm.getQuestStatus(100202) != 2) {
            cm.startQuest(100202);
            cm.completeQuest(100202);
            cm.gainExp(10000);
        }
        cm.dispose();
    }
}
