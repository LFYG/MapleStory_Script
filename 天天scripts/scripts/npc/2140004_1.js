var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
    // if(cm.getChar().getAccountID()==1){
        var selStr = "��ѡ����Ҫȥ�ĵط���:\r\n\r\n#b #L0#��¼�Ĺ�ȥ#l\r\n #L1#����е�����#l\r\n #L2#ȼ�յĹ�ȥ#l";
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.warp(270010000);
            break;
        case 1:
            cm.dispose();
            cm.warp(270020210);
            break;
        case 2:
            cm.dispose();
            cm.warp(270030000);
            break;

        case 3:
            cm.sendNext(cm.getRankingInformation(-1));
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("��ĵȼ�����10,���������ֵ�ͼ����.");
            }
            cm.dispose();
            break;
		}
    }
}