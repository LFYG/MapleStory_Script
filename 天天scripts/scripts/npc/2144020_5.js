var status = 0;
var a = 11;
var level = 120;
var maxhp = 10000;
var maxmp = 12000;
var cx = 2000;
var reborn = 1;

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
     if(cm.getChar().getAccountID()==1){
        cm.sendSimple("���� #r#h ##k ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#b#L0#������������ �ȼ� ����----0#l\r\n#b#L1#�������޼ӵ����Ժ���---1#l\r\n#b#L2#�������� ת��  ����----2#l\r\n#b#L3#�������� ����HP  ����----3#l\r\n#b#L4#�������� ����MP  ����----4#l\r\n#d#L5#�������� setCXHPMP��gainReborns  ����----5#l\r\n\r\n��Ŀǰ��VIP�ȼ�Ϊ#r " + cm.getVip() + " #k  ת�����Ϊ#e#r" + cm.getPlayer().getReborns() + "#n#k�Ρ�\r\n" + cm.getPlayer().getAPS() + " ");
 } else {

cm.sendOk("�Բ����Ҳ���Ϊ�����"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.setLV(level);
           // cm.getPlayer().resetAPSP();
            cm.sendOk("�ɹ�.");
            break;
        case 1:
            cm.dispose();
            cm.Chongxiusx(400,400,400, 400);
            cm.getPlayer().resetAPSP();
            cm.sendOk("�ɹ�����ת�����Ϊ#e#r" + cm.getPlayer().getReborns() + "#n#k�Ρ�");
            break;
        case 2:
            cm.dispose();
            cm.getPlayer().doReborn1();
            cm.getPlayer().resetAPSP();
            cm.Chongxiusx(401,400,400, 400);
            cm.sendOk("�ɹ�����ת�����Ϊ#e#r" + cm.getPlayer().getReborns() + "#n#k�Ρ�");
            break;

        case 3:
            cm.dispose();
            cm.getPlayer().setMaxhp2(maxhp);
            cm.sendOk("�ɹ�.");
            break;

        case 4:
            cm.dispose();
            cm.getPlayer().setMaxmp2(maxmp);
            cm.sendOk("�ɹ�.");
            break;

        case 5:
            cm.dispose();
            cm.setLV(a);
	    cm.getPlayer().setCXHPMP(cx);
            cm.getPlayer().gainReborns(reborn);
            cm.sendOk("�ɹ�����ת�����Ϊ#e#r" + cm.getPlayer().getReborns() + "#n#k�Ρ�");
            break;
        case 6:
            cm.dispose();
            cm.sendOk("��ֵ��վ.\r\n������ֵ����Ϊ1:3000.\r\n���������������.\r\n�����ʲô��������ѯ����Ա.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    //cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}