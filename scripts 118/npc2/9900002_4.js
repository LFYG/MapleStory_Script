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
        var selStr = "���ã���ӭ��������ð�յ�:\r\n\r\n#b#L0#������ɫʱ��ת��#v3010002#   60000���#l\r\n#L1#��ɫʱ��ת��#v3010003#   60000���#l\r\n#L2#�����ɫʱ��ת��#v3010006#   60000���#l\r\n#L3#�������������#v3010004#   60000���#l\r\n#L4#�������������#v3010005#   60000���#l\r\n#L5#����Ҭ����ɳ̲��#v3010018#   60000���#l\r\n#L6#����������#v3010029#   60000���#l\r\n#L7#����ڻ���#v3010030#   60000���#l\r\n#L8#����컷��#v3010031#   60000���#l\r\n#L9#����ƻ���#v3010032#   60000���#l\r\n#L10#�����̻���#v3010033#   60000���#l\r\n#L11#����ħŮ�ķ�ɨ��#v3010043#   60000���#l\r\n#L12#�����̻���#v3013002#   60000���#l\r\n#L13#����˫��ͬ��#v3010166#   60000���#l\r\n#L14#�����ɫ��������#v3010007#   90000���#l\r\n#L15#������ɫ��������#v3010008#   90000���#l\r\n#L16#�����ɫ��������#v3010010#   90000���#l\r\n#L17#�����ɫ��������#v3010016#   90000���#l\r\n#L18#�����ɫ��������#v3010017#   90000���#l\r\n#L19#������߷�����#v3010024#   90000���#l\r\n#L20#�����Ҷ�����#v3010025#   90000���#l\r\n#L21#����������#v3010014#   120000���#l\r\n#L22#������˾��#v3010019#   120000���#l\r\n#L23#����ůů��#v3010021#   120000���#l\r\n#L24#�����Ƴ�����(��)#v3010034#   120000���#l\r\n#L25#�����Ƴ�����(��)#v3010035#   120000���#l\r\n#L26#���������#v3010037#   120000���#l\r\n#L27#�������ɳ��#v3010038#   120000���#l\r\n#L28#����������#v3010040#   120000���#l\r\n#L29#������������#v3010041#   120000���#l\r\n#L30#����ͬһ��ɡ��#v3010044#   120000���#l\r\n#L31#���򺮱�����#v3010045#   120000���#l\r\n#L32#����ѩ����#v3010049#   120000���#l\r\n#L33#����¶ˮ����#v3010068#   120000���#l\r\n#L34#��������#v3010050#   120000���#l\r\n#L35#�����Ʒ�#v3010069#   120000���#l\r\n#L36#���������Ļ�#v3010093#   120000���#l\r\n#L37#����ƯƯ������#v3010094#   120000���#l\r\n#L38#����ʯͷ������#v3010095#   120000���#l\r\n#L39#����������#v3010009#   130000���#l\r\n#L40#���򺣵��ķ�²#v3010028#   130000���#l\r\n#L41#����������ǧ#v3010036#   130000���#l\r\n#L42#���������#v3010046#   130000���#l\r\n#L43#����������#v3010047#   130000���#l\r\n#L44#����ʥ��������#v3010048#   130000���#l\r\n#L45#����ɳĮ���ӿ���1#v3010051#   130000���#l\r\n#L46#����ɳĮ���ӿ���2#v3010052#   130000���#l\r\n#L47#���������ല#v3010054#   130000���#l\r\n#L48#����Ѫɫõ��#v3010057#   130000���#l\r\n#L49#��������ĩ��#v3010058#   130000���#l\r\n#L50#����������#v3010071#   130000���#l\r\n#L51#����babyƷ����#v3010073#   130000���#l\r\n#L52#������Ϊ���ֿ�#v3010075#   130000���#l\r\n#L53#����èͷӥ����#v3010077#   130000���#l\r\n#L54#���������ʯ����#v3010096#   130000���#l\r\n#L55#�������լ��#v3010098#   130000���#l\r\n#L56#���򱱼�������#v3010099#   130000���#l\r\n#L57#�����������#v3010100#   130000���#l\r\n#L59#�������ʴ��������#v3010110#   130000���#l\r\n#L60#���򻢻�����#v3010111#   130000���#l\r\n#L61#�����������#v3010112#   130000���#l\r\n#L62#����ҡ��֮������#v3010116#   130000���#l\r\n#L63#����ħ��������#v3010117#   130000���#l\r\n#L64#�����ǹ���������#v3010118#   130000���#l\r\n#L65#������������#v3010119#   130000���#l\r\n#L66#����ʵ�����#v3010120#   130000���#l\r\n#L67#�������ջ���#v3010123#   130000���#l\r\n#L68#������˹��������#v3010124#   130000���#l\r\n#L69#�����ᱴ¡ս����#v3010125#   130000���#l\r\n#L70#��������ħ����#v3010126#   130000���#l\r\n#L71#��������#v3012001#   130000���#l\r\n#L72#����ԡͰ#v3012002#   130000���#l\r\n#L73#��������ɫ��ëɳ��#v3010066#   130000���#l\r\n#L74#�����ɫ���ʦ��#v3010067#   130000���#l\r\n#L75#�����������F�a#v3010080#   130000���#l\r\n#L76#�����ñ�������#v3010081#   130000���#l\r\n#L77#������ñ�������#v3010082#   130000���#l\r\n#L78#���������������#v3010083#   130000���#l\r\n#L79#����̫ƽ���������#v3010084#   130000���#l\r\n#L80#���������ĵ�����#v3010107#   130000���#l\r\n#L81#����������ǧ#v3010108#   130000���#l\r\n#L82#����ů¯��#v3010109#   130000���#l\r\n#L83#�����Ļ귢��������#v3010113#   130000���#l\r\n#L84#�����ѩ��������#v3010055#   130000���#l\r\n#L85#����������ˮ����Ҷ��#v3010145#   130000���#l\r\n#L86#����6�����������#v3010136#   130000���#l\r\n#L87#������������#v3010137#   130000���#l\r\n#L88#����è�������#v3010149#   130000���#l\r\n#L89#������Ϧ����#v3010144#   130000���#l\r\n#L90#����Ӱ˫����èͷӥ#v3010155#   130000���#l\r\n#L91#�������è����#v3010078#   130000���#l\r\n#L93#��������è����#v3010132#   130000���#l\r\n#L94#����������#v3010133#   130000���#l\r\n#L95#����������#v3012003#   180000���#l\r\n#L96#����紵����#v3012006#   180000���#l\r\n#L97#�����ɿ�����������#v3012010#   180000���#l\r\n#L98#�����Ұ��ɿ������#v3012011#   180000���#l\r\n#L99#�����η�����#v3010156#   180000���#l\r\n#L100#���������������#v3010152#   180000���#l\r\n#L101#�����������#v3010162#   180000���#l\r\n#L102#����������#v3010163#   180000���#l\r\n#L103#������ն���������#v3010135#   180000���#l\r\n#L104#����˽�ܿռ�#v3010139#   180000���#l\r\n#L105#����������������#v3010168#   180000���#l\r\n#L106#�����ǿ�����#v3010172#   180000���#l\r\n#L107#������ʥ����������#v3010173#   180000���#l\r\n#L108#��������������#v3010175#   180000���#l\r\n#L109#������β��è����#v3010179#   180000���#l\r\n#L110#����ֽ����(������)#v3010169#   180000���#l\r\n#L111#�������������#v3010171#   180000���#l\r\n#L112#����Ů����ҩ��#v3010174#   180000���#l\r\n#L113#�������Ӽ�����#v3010182#   180000���#l\r\n#L114#������ܲ�����#v3010183#   180000���#l\r\n#L115#�������Ӽ��������#v3010053#   180000���#l\r\n#L116#����ˮ�������#v3010142#   180000���#l\r\n#L117#�����ݮ������±���#v3010209#   180000���#l\r\n#L118#������ݱ�����±���#v3010210#   180000���#l\r\n#L119#����Ӣ�۵�����-ս��#v3010197#   180000���#l\r\n#L120#����Ӣ�۵�����-����#v3010200#   180000���#l\r\n#L121#����Ӣ�۵�����-��Ӱ#v3010201#   180000���#l\r\n#L122#����������#v3010161#   180000���#l\r\n#L123#�����¹���������#v3010226#   180000���#l\r\n#L124#�������������#v3010085#   300000���#l\r\n#L125#����ӣ������#v3013000#   300000���#l\r\n#L126#�����ֱ�����#v3010177#   300000���#l\r\n#L127#������������#v3010127#   900000���#l\r\n#L128#�����������#v3010128#   1200000���#l\r\n#L129#�����������#v3010311#   1200000���#l\r\n#L130#������ް�Ʒ����#v3010070#   1300000���0#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010002,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010003,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010006,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010004,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010005,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010018,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010029,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010030,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010031,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010032,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010033,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010043,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010002,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010166,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����60000.");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010007,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010008,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010010,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010016,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010017,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010024,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010025,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����90000.");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010014,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010019,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010021,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010034,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 25:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010035,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 26:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010037,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 27:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010038,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 28:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010040,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 29:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010041,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 30:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010044,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 31:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010045,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 32:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010049,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 33:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010068,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 34:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010050,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 35:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010069,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 36:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010093,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 37:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010094,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 38:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010095,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����120000.");
		cm.dispose();
            }
            break;
        case 39:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010009,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 40:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010028,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 41:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010036,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 42:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010046,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 43:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010047,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 44:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010048,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 45:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010051,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 46:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010052,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 47:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010054,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 48:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010057,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 49:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010058,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 50:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010071,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 51:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010073,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 52:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010075,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 53:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010077,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 54:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010096,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 55:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010098,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 56:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010099,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 57:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010100,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 58:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010101,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 59:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010110,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 60:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010111,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 61:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010112,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 62:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010116,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 63:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010117,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 64:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010118,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 65:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010119,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 66:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010120,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 67:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010123,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 68:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010124,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 69:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010125,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 70:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010126,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 71:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3012001,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 72:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3012002,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 73:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010066,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 74:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010067,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 75:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010080,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 76:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010081,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 77:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010082,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 78:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010083,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 79:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010084,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 80:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010107,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 81:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010108,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 82:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010109,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 83:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010113,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 84:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010055,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 85:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010145,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 86:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010136,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 87:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010137,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 88:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010149,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 89:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010144,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 90:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010155,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 91:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010078,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 92:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(30100127,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 93:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(30100132,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 94:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(30100133,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����130000.");
		cm.dispose();
            }
            break;
        case 95:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012003,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 96:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012006,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 97:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012010,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 98:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012011,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 99:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010156,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 100:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010152,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 101:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010162,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 102:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010163,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 103:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010135,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 104:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010139,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 105:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010168,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 106:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010172,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 107:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010173,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 108:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010175,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 109:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010179,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 110:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010169,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 111:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010171,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 112:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010174,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 113:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010182,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 114:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010183,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 115:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010053,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 116:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010142,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 117:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010209,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 118:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010210,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 119:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010197,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 120:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010200,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 121:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010201,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 122:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010161,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 123:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010226,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����180000.");
		cm.dispose();
            }
            break;
        case 124:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(3010085,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����300000.");
		cm.dispose();
            }
            break;
        case 125:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(3013000,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����300000.");
		cm.dispose();
            }
            break;
        case 126:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(3010177,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����300000.");
		cm.dispose();
            }
            break;
        case 127:
            if (cm.getPlayer().getCSPoints(1)>=900000) { 
	    cm.gainNX(-900000);
	    cm.gainItem(3010127,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����900000.");
		cm.dispose();
            }
            break;
        case 128:
            if (cm.getPlayer().getCSPoints(1)>=1200000) { 
	    cm.gainNX(-1200000);
	    cm.gainItem(3010128,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����1200000.");
		cm.dispose();
            }
            break;
        case 129:
            if (cm.getPlayer().getCSPoints(1)>=1200000) { 
	    cm.gainNX(-1200000);
	    cm.gainItem(3010311,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����1200000.");
		cm.dispose();
            }
            break;
        case 130:
            if (cm.getPlayer().getCSPoints(1)>=1300000) { 
	    cm.gainNX(-1300000);
	    cm.gainItem(3010070,1);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����1300000.");
		cm.dispose();
            }
            break;
        }
    }
}