var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("GM���Թ���\r\n\r\n#L0# ѧԺ��ʾ ");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.testPacket(0x42);
            break;
        case 1:
            //cm.testPacket("C8 00");
            break;
        }
        cm.dispose();
    }
}