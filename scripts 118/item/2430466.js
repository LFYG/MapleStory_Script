/* ���������˽���ȯ */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 0) {
            im.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (im.getPlayerStat("LVL") < 0) {
                im.playerMessage("�ȼ�С��0���޷�ʹ�á�");
                im.dispose();
            } else {
                im.sendSimple("��ӵ��#b#i2430466:##t2430466##k ������Ҫ�һ���#b#i1662006:##t1662006##k��#b#i1672008:##t1672008##kô?#b\r\n#L0#��Ҫ�һ�#l\r\n#L1#�����Ի�#l");
            }
        } else if (status == 1) {
            switch (selection) {
            case 0:
                im.gainItem(1662006,1);
                im.gainItem(1672008,1);
                im.gainItem(2430466,-1);
                im.dispose(); 
                break;
            case 1:
                im.dispose(); 
                break;
            case 2:
                im.warp(102000000, 0);
                break;
            case 3:
                im.warp(103000000, 0);
                break;
            }
            im.dispose();
        }
    }
}