var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("MapleWing�����ð�ռ� ���Ŷ�� �Һ���������.....#b\r\n#L0#�Ҹ���һЩ���#l\r\n#L1#�������#l \r\n#L2#�����뿪#l#k#k");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.isLeader()) {
                cm.sendNext("Only the leader may bring me Rice Cake.");
            } else {
                if (cm.haveItem(4001101, 10)) {
                    cm.achievement(100);
                    cm.removeAll(4001101);
                    cm.givePartyExp_PQ(70, 1.5);
                    cm.givePartyNX(10);
                    cm.addPartyTrait("will", 5);
                    cm.addPartyTrait("sense", 1);
                    cm.endPartyQuest(1200);
                    cm.warpParty(910010300);
                } else {
                    cm.sendNext("��û��10�����~.. ");
                }
            }
        } else if (selection == 1) {
            cm.sendNext("����...��Ҳ��֪��Ҫ��ô�������...\r\n���ȿ�....Ӣ�Ĳ�����...��\r\n�����㶮��.....");
        } else if (selection == 2) {
           cm.warp(910010500);
        }



        cm.dispose();
    }
}