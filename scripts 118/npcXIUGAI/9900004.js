var status = 0;

var shop1 = 1012123;

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
            if (cm.getMapId() == 910000000) {
var selStr = "#r���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n#r#h ##d#n  ����!  ���� #r" + cm.getVipname() + " #n #d����ֵ�� #e#r" + cm.getMaplewing("maple")  +" #n#k\r\n��ѡ������Ҫ�ķ���#r\r\n#L100#��ݴ���#l  #L101#�����̵�#l  #L102#תְ��#l  #L103#��������#l\r\n#r#L104#VIP ר��#l  #L105#����ר��#l  #L106#����ר��#l  #L107#�ר��#l\r\n#d#L108#����ר��#l  #L109#����ר��#l  #L110#����ר��#l  #L111#����ר��#l\r\n#d#L112#Ӣ�۾���#l  #L113#ί������#l  #L114#����#l  #L115#������ս#l\r\n#b#L116#��������#l  #L117#����н�#l  #L118#�ֿ����#l  #L119#�ٱ��齱#l\r\n#L120#BOSS����#l  #L121#BOSS��ѯ#l  #L122#�ȼ�����#l  #L123#���ϵͳ#l  \r\n#b#L125#            �˽����з������ݺ�Ҫ��      #l \r\n\r\n#k������ר����������ڣ�\r\n#r#L104#���������T��       VIP ר��       ��T��������#l \r\n#d#L201#VIP ��Ȩ#l  #L202#VIP �̵�#l  #L203#VIP ����#l  #L204#VIP �#l \r\n#r#L105#���������T��       ����ר��       ��T��������#l \r\n#d#L301#��������#l  #L302#���ڹ���#l  #L303#����Ͷ��#l  #L304#������ҵ#l  \r\n#r#L106#���������T��       ����ר��       ��T��������#l \r\n#d#L401#��Ӹ���#l  #L402#�����#l  #L403#�ռ�����#l  #L404#Ȥζ����#l    \r\n#r#L107#���������T��       �ר��       ��T��������#l \r\n#d#L501#�ճ��#l  #L502#����#l  #L503#����#l  #L504#��˵�#l  \r\n#r#L108#���������T��       ����ר��       ��T��������#l \r\n#d#L601#��������#l  #L602#����ί��#l  #L603#�����̵�#l  #L604#���ƾ���#l   \r\n#r#L109#���������T��       ����ר��       ��T��������#l \r\n#d#L701#��������#l  #L702#�ɳ�����#l  #L703#�����̵�#l  #L704#������Ʊ#l    \r\n#r#L110#���������T��       ����ר��       ��T��������#l \r\n#d#L801#��������#l  #L802#�齱����#l  #L803#�����̵�#l  #L804#����ף��#l    \r\n#r#L111#���������T��       ����ר��       ��T��������#l \r\n#L901#�������#l  \r\n\r\n#b#L11#����תְ#l  #L12#���ܴ���#l  #L13#��Ϸ�̵�#l  #L14#��������#l\r\n#L15#�ٱ��齱#l  #L16#����̵�#l  #L17#BOSS����#l  #L18#��Ϸ����#l\r\n#L19#�ֿ����#l  #L20#����н�#l  #L21#ѧϰ����#l  #L22#���д��#l\r\n#L23##r�ȼ�����#l#l  #L24##r���ϵͳ#l  #L25##bÿ��ǩ��  #L26##r���帱��\r\n#l#L27##bBOSS��ѯ#l  #L28##rð�ո���  #L29##r�����̵�  #L30#���ս��\r\n#L31#ת������  #L32#������";
        cm.sendSimple(selStr);

       } else if(cm.getChar().getAccountID()==1){
var selStr = "#r" + cm.getVipname() + "#r#h ##k  #n���ã���ѡ������Ҫ�ķ���:\r\n\r\n#b#L0#���͵��г�#l #L2#�鿴�������#l\r\n#L1#���NPC����#l#L5#�����Ӷ�̵�#l\r\n#L7##rGMר��NPC#l ";
        cm.sendSimple(selStr);


       } else {
        var selStr = "#r" + cm.getVipname() + "#r#h ##k  #n���ã���ѡ������Ҫ�ķ���:\r\n\r\n#b#L0#���͵��г�#l #L2#�鿴�������#l\r\n#L1#���NPC����#l#L5#�����Ӷ�̵�#l";
        cm.sendSimple(selStr);

     } 

    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
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
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            break;
        case 7:
            cm.dispose();
	    cm.openShop(9900007);
            break;
        case 8:
	   //cm.warp(910530202,0);
            //cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;

        case 11:
            cm.dispose();
	    cm.openNpc(9900002,20);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9900004,70);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9900002,21);
            break;
        case 14:
            cm.dispose();
            cm.openNpc(9900004,90);
            break;
        case 15:
            cm.dispose();
	    cm.warp(749050400);
            break;
        case 16:
            cm.dispose();
	    cm.openNpc(9900002,2);
            break;
        case 17:
            cm.dispose();
	    cm.openNpc(9030100);
            break;
        case 18:
            cm.dispose();
	    cm.openNpc(9900002,8);
            break;
        case 19:
            cm.dispose();
	    cm.openNpc(9270035,1);
            break;
        case 20:
            cm.dispose();
	    cm.openShop(2060003);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9900002,5);
            break;
        case 22:
            cm.dispose();
	    cm.openNpc(9900004,998);
            break;
        case 23:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 24:
            cm.dispose();
	if(cm.getMapId() == 700000000)
{
	    cm.sendOk("���Ѿ��ڽ���ͼ��.");
}else{
            cm.warp(700000000);
	    cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n����ʢ��һ��.\r\n�������İ���.���������������!\r\nף���»����!!!");
}
            break;
        case 25:
            cm.dispose();
	    cm.openNpc(9900004, 999);
            break;
        case 26:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 27:
            cm.dispose();
	    cm.openNpc(9900004,80);
            break;
        case 28:
            cm.dispose();
	    cm.openNpc(9900004,4);
            break;
        case 29:
            cm.dispose();
            cm.openShop(shop1);
            break;
        case 30:
            cm.dispose();
	    cm.openNpc(9120033);
            break;
	case 31:
            cm.dispose();
	    cm.openNpc(9900002,24);
            break;
        case 32:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;
        case 33:
            cm.dispose();
	    cm.openNpc(9900002,25);
            break;
        case 34:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;



		}
    }
}