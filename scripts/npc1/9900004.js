/*NPC������Nemo*/
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
        var selStr = "�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n\r\n#b���:#r "+cm.getPlayer().getCSPoints(1)+"#k               #b����ʱ�����:#r "+cm.getPlayer().getXw()+"                #b��ֵ���:#r " + cm.getHyPay(1) + " #k#bԪ             �����ѽ��:#r " + cm.getHyPay(2) + " #k#bԪ\r\n�ۼƳ�ֵ�ܽ��:#r " + cm.getHyPay(3) + "#bԪ\r\n\r\n#b#L1#�������г�#l #L2#��Ϸ����#l #L3#����NPC#l #L4#��������#l\r\n\r\n#L5#��Ӷ�̵�#l   #L6#����ֵ#l #L7#��������#l\r\n#L8#������#l\r\n\r\n    #r����Ψһ�ͷ�QQ��XXXXXXXXX�������ͷ���Ϊƭ�ӣ�";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 2:
            cm.sendOk("�����");
            cm.dispose();
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("��ĵȼ�����10,���������ֵ�ͼ����.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 7:
            cm.sendOk("�����");
            cm.dispose();
            break;
        case 8:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;
         }
    }
}