/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ�Ұ��BOSS
 */
 
 var status = 0;
var aaa ="#fEffect/CharacterEff/1082565/2/0#";
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã��봫�͵�ʲô�ط�:\r\n";
		selStr += "#L0#" + eff + "#b ���#l"
		selStr += "#L1#" + eff + "#b �����#l"
		selStr += "#L3#" + eff + "#b ��Ģ����#l"
		selStr += "#L4#" + eff + "#b ��ʬ����#l\r\n"

		selStr += "#L12#" + eff + "#b �׿�#l"
		selStr += "#L2#" + eff + "#b Ģ����#l"
		selStr += "#L5#" + eff + "#b ������ʦ#l"
		selStr += "#L6#" + eff + "#b ��������#l\r\n"

		selStr += "#L13#" + eff + "#b ����#l"
		selStr += "#L7#" + eff + "#b ����#l"
		selStr += "#L8#" + eff + "#b ����Ҷ�#l"
        selStr += "#L9#" + eff + "#b С�����#l\r\n"

        selStr += "#L10#" + eff + "#b ����#l"
        selStr += "#L14#" + eff + "#b �ϵ���#l"
		selStr += "#L11#" + eff + "#b ��������#l"
		selStr += "#L15#" + eff + "#b ��ɽ����#l\r\n"
		
		
		
		//selStr += "#L15#" + eff + " #b PK��ͼ#l\r\n"
		//selStr += "#L16#" + eff + "#b ������#l"
		//selStr += "#L24#" + eff + "#b Ʒ����#l"
		//selStr += "#L25#" + eff + "#b ϣ��˹#l"
		//selStr += "#L26#" + eff + "#b ǧ������#l\r\n"
		//selStr += "#L27#" + eff + "#r ���˱��յ�#r���м��ʻ��#v4310097##v1122267##v1132246#��#l\r\n"
		//selStr += "#L28#" + eff + "#r ���������˹#r���м��ʻ��#v4310058##v2049323#����ǿ����#l\r\n"
		//selStr += "#L29#" + eff + "#r[ϡ��]��߷�����#r���м��ʻ��#v1003797##v1042258##v1062169#��#l\r\n"
		//selStr += "#L30#" + eff + "#r[����]��Խ����Ĵ���#r���м��ʻ��#v2430189##v2430189#��#l\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
                cm.warp(270010500);
		        cm.sendOk("��ӭ������׷��֮·5��ף����Ϸ��죡");
				cm.dispose();
            break;
		case 1:
                cm.warp(105030500);
		        cm.sendOk("��ӭ���������ɼ�̳��ף����Ϸ��죡");
				cm.dispose();
            break;
		case 2:
                cm.warp(100020101);
		        cm.sendOk("��ӭ������Ģ����С����ף����Ϸ��죡");
				cm.dispose();
            break;
		case 3:
                cm.warp(100020301);
		        cm.sendOk("��ӭ��������Ģ����ɭ�֣�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 4:
                cm.warp(105010301);
		        cm.sendOk("��ӭ���������϶�Ѩ2��ף����Ϸ��죡");
				cm.dispose();
            break;
		case 5:
                cm.warp(250010504);
		        cm.sendOk("��ӭ����������ɭ��2��ף����Ϸ��죡");
				cm.dispose();
            break;
        case 6:
	            cm.warp(541020800);
		        cm.sendOk("��ӭ����������������ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 7:
	            cm.warp(240040401);
		        cm.sendOk("��ӭ����������Ͽ�ȣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 8:
	            cm.warp(240020101);
		        cm.sendOk("��ӭ����������Ҷ�ɭ�֣�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 9:
	            cm.warp(240020401);
		        cm.sendOk("��ӭ�������������Ϣ�أ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 10:
	            cm.warp(230040420);
		        cm.sendOk("��ӭ������Ƥ��ū˹��Ѩ��ף����Ϸ��죡");
				cm.dispose();
            break;
		case 11:
	            cm.warp(270010500);
		        cm.sendOk("��ӭ���������֮·5��ף����Ϸ��죡");
				cm.dispose();
            break;
		case 12:
	            cm.warp(270030500);
		        cm.sendOk("��ӭ��������ȴ֮·5��ף����Ϸ��죡");
				cm.dispose();
            break;
		case 13:
	            cm.warp(200010302);
		        cm.sendOk("��ӭ�������ڰ�ͥԺII��ף����Ϸ��죡");
				cm.dispose();
            break
         case 14:
	            cm.warp(250010304);
		        cm.sendOk("��ӭ�������ϵ��ܵĵ��̣�ף����Ϸ��죡");
				cm.dispose();
            break
		case 15:
	            cm.warp(211041400);
		        cm.sendOk("��ӭ����������֮��IV��ף����Ϸ��죡");
				cm.dispose();
            break





		 case 29:
		if (cm.getPlayer().getLevel() > 100 ) {
			cm.warp(701000210);
			cm.sendOk("����֮��Ϊ���սPK.����֮��Ϊ���PKս.����֮��Ϊ����PKս.ף������");
			} else {
				cm.sendOk("�Բ���.PK̫Σ����.100�����µ���Ҳ��ܽ�����.");
			}
			cm.dispose();
            break;
        case 3:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211070000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(ʨ�������߼�װ��Ŷ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 4:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(270050000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(Ʒ���ͱ�����װ����30��ʿŶ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 7:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000710);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 8:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000820);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 9:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(272030300);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 10:
			cm.dispose();
			cm.openNpc(9900002, 2011);
			break;
        case 11:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000710);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 12:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(910023000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 16:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(863010000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(���˱��յ±��߼���ƷŶ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 17:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(401072000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(���������˹���߼�����Ŷ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
		case 18:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(703020000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(����������˱�Ŷ.���Զһ��������Ե�װ��!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 19:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(814013000);
                cm.sendOk("�Ҹ����� #p9137204# �ɣ�");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;			
        }
        cm.dispose();
    }
}
