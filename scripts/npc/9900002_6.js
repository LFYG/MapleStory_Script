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
    if (status == 0) {
        var selStr = "���ã���ӭ����MapleWing:\r\n\r\n#b#L0#���򻪶���˿������ñ#v1002846#   114000���#l\r\n#L1#����ˮ����(��) #v1050152#   99000���#l\r\n#L2#����ˮ����(Ů) #v1051180#   99000���#l\r\n#L3#����С��ҶT��#v1042104#   114000���#l\r\n#L4#����С��ҶT��#v1042105#   114000���#l\r\n#L5#����ۺ��ö�ñ#v1002845#   114000���#l\r\n#L6#�����ݮbabyװ#v1052224#   99000���#l\r\n#L7#����ɿ��㽶#v1702228#   114000���#l\r\n#L8#������ë����#v1002721#   114000���#l\r\n#L9#�����ֹ���֯����#v1002568#   158400���#l\r\n#L10#����Ѥ���ʺ�#v1702155#   99000���#l\r\n#L11#����ʺ�������#v1042142#   99000���#l\r\n#L12#�����������ж̿�#v1062093#   99000���#l\r\n#L13#����ʺ��ǻ��ƽ�ָ#v1112904#   99000���#l\r\n#L14#������ǵ������#v1041142#   99000���#l\r\n#L15#������Ƿ�ɫ��ȹ#v1061148#   99000���#l\r\n#L16#��������������#v1702182#   99000���#l\r\n#L17#����˿������(��ɫ) #v1002888#   114000���#l\r\n#L18#����˿������(��ɫ)#v1002890#   114000���#l\r\n#L19#����������ɫ�����׷�#v1052200#   99000���#l\r\n#L20#����������#v1702208#   99000���#l\r\n#L21#����С���ܿɰ�ñ#v1002863#   99000���#l\r\n#L22#������������No.9#v1052061#   66500���#l\r\n#L23#���򷨹������No.14#v1052059#   66500���#l\r\n#L24#������ܲ��ñ�ըͷ#v1003207#   79200���#l\r\n#L25#������ɫ�����������#v1702285#   74000���#l\r\n#L26#����ð׵���#v1012131#   74000���#l\r\n#L27#���򱭾�#v1702302#   158400���#l\r\n#L28#����ϲ������Ь#v1072337#   99000���#l\r\n#L29#����ˮī�������ָ#v1112238#   99000���#l\r\n#L52#ˮī����Ƭ��ָ#v1112135#   114000���#l\r\n#L30#����ӣ����#v1702261#   99000���#l\r\n#L31#����������#v1702091#   79200���#l\r\n#L32#��������ʥ����#v1702168#   99000���#l\r\n#L33#����С����#v1003051#   79200���#l\r\n#L34#����ʥ��װ��ñ#v1003048#   79200���#l\r\n #L53#����ʼҺ���ñ#v1002995#   100000���#l\r\n #L35#�����϶�ʽ#v1003012#   79200���#l\r\n#L36#����ʥ���췢��#v1002876#   99000���#l\r\n#L37#�����Ϲϰ���ñ#v1002839#   79200���#l\r\n#L38#���������ñ#v1001048#   79200���#l\r\n#L39#�����϶�����#v1102225#   99000���#l\r\n#L40#�����β����#v1102217#   79200���#l\r\n#L41#������ܼ���#v1102157#   79200���#l\r\n#L42#����ʥ��Ů���ӷ�#v1051131#   99000���#l\r\n#L43#�����į�����ָ#v1112916#   114000���#l\r\n#L44#����¹����#v1012179#   79200���#l\r\n#L45#����õ�������ȹ1#v1051152#   114000���#l\r\n#L46#���������Ƭ��ָ#v1112118#   114000���#l\r\n#L47#�������(Red) ��Ƭ��ָ#v1112119#   114000���#l\r\n#L48#�������(White) ��Ƭ��ָ#v1112120#   114000���#l\r\n#L49#������������ָ#v1112228#   114000���#l\r\n#L50#�������(Red)�����ָ#v1112229#   114000���#l\r\n#L51#�������(White)�����ָ#v1112230#   114000���#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002846,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1050152,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1051180,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1042104,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1042105,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002845,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1052224,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1702228,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002721,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.getPlayer().getCSPoints(1)>=158400) { 
	    cm.gainNX(-158400);
	    cm.gainItem(1002568,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����158400.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702155,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1042142,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1062093,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1112904,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1041142,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1061148,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702182,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002888,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002890,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1052200,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702208,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1002863,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.getPlayer().getCSPoints(1)>=66500) { 
	    cm.gainNX(-66500);
	    cm.gainItem(1052061,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����66500.");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.getPlayer().getCSPoints(1)>=66500) { 
	    cm.gainNX(-66500);
	    cm.gainItem(1052059,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����66500.");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003207,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 25:
            if (cm.getPlayer().getCSPoints(1)>=74000) { 
	    cm.gainNX(-74000);
	    cm.gainItem(1702285,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����74000.");
		cm.dispose();
            }
            break;
        case 26:
            if (cm.getPlayer().getCSPoints(1)>=74000) { 
	    cm.gainNX(-74000);
	    cm.gainItem(1012131,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����74000.");
		cm.dispose();
            }
            break;
        case 27:
            if (cm.getPlayer().getCSPoints(1)>=158400) { 
	    cm.gainNX(-158400);
	    cm.gainItem(1702302,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����158400.");
		cm.dispose();
            }
            break;
        case 28:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1072337,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 29:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1112238,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 30:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702261,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 31:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1702091,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 32:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702168,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 33:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003051,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 34:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003048,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 35:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003012,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 36:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1002876,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 37:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1002839,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 38:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1001048,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 39:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1102225,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 40:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1102217,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 41:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1102157,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 42:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1051131,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 43:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112916,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 44:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1012179,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����79200.");
		cm.dispose();
            }
            break;
        case 45:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1051152,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 46:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112118,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 47:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112119,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 48:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112120,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 49:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112228,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 50:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112229,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 51:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112230,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����114000.");
		cm.dispose();
            }
            break;
        case 52:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1112135,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����99000.");
		cm.dispose();
            }
            break;
        case 53:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(1002995,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����100000.");
		cm.dispose();
            }
            break;
        }
    }
}