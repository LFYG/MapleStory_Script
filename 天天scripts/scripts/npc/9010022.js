var status;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getPlayerStat("LVL") < 10) {
                cm.playerMessage("û�п���ͨ����Ԫ֮���ƶ��ĵط���");
                cm.dispose();
            } else {
                var selStr = "";
                if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#801#��������#800#��ʽ���";
                }
                if (cm.getPlayerStat("LVL") >= 25) {
                    selStr += "#1#�����Ժ";
                }
                if (cm.getPlayerStat("LVL") >= 25 && cm.getPlayerStat("LVL") <= 255) {
                    selStr += "#9#��������#10#���ѵ����";
                }
                if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayerStat("LVL") <= 255) {
                    selStr += "#2#������껪1";
                }
                if (cm.getPlayerStat("LVL") >= 51 && cm.getPlayerStat("LVL") <= 255) {
                    selStr += "#3#������껪2";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#4#���������鴬";
                }
                if (cm.getPlayerStat("LVL") >= 60) {
                    selStr += "#5#���صĽ�����";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#6#�����ĵ���վ";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#7#�Ҹ���";
                }
                if (cm.getPlayerStat("LVL") >= 20) {
                    selStr += "#11#ʱ���ѷ�";
                }
                if (cm.getPlayerStat("LVL") >= 70) {
                    selStr += "#12#����ʿ������#13#Ů��ĺۼ�#14#�Ϻ���#15#����ŷ������Ҷ";
                }
                if (cm.getPlayerStat("LVL") >= 120) {
                    selStr += "#16#٪��ֻʵ۵ĸ���#17#����ħ";
                }
				if (cm.getPlayerStat("LVL") >= 20) {
                    selStr += "#19#�ֹ�լۡ";
                }
                if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#21#����Σ�յĿ���#22#����";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#23#����ϵͳ�о���";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#24#ά��ɭ��";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#25#���ٴ���";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#26#��Ԫͼ���";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#27#��������볡";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#28#��������볡<�м�>";
                }
				if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#29#��������볡<�߼�>";
                }
                cm.askMapSelection(selStr);
            }
        } else if (status == 1) {
            //cm.playerMessage("��ǰѡ�� " + selection);
            cm.saveReturnLocation("MULUNG_TC");
            switch (selection) {
            case 1:
                cm.warp(925020000, 0); //����������
                break;
            case 2:
                cm.warp(980000000, 4); //������껪1
                break;
            case 3:
                cm.warp(980030000, 4); //������껪2
                break;
            case 4:
                cm.warp(923020000, 0); //���������鴬
                break;
            case 5:
                cm.warp(926010000, 4); //���صĽ�����
                break;
            case 6:
                cm.warp(910320000, 2); //�����ĵ���վ
                break;
            case 7:
                cm.warp(209000000, 0); //�Ҹ���
                break;
            case 8:
                cm.warp(950100000, 9);
                break;
            case 9:
                cm.warp(910010500, 0); //��������
                break;
            case 10:
                cm.warp(910340700, 0); //���ѵ����
                break;
            case 11:
                cm.warp(221023300, 0); //ʱ���ѷ�
                break;
            case 12:
                cm.warp(300030100, 0); //����ʿ������
                break;
            case 13:
                cm.warp(200080101, 0); //Ů��ĺۼ�
                break;
            case 14:
                cm.warp(251010404, 0); //�Ϻ���
                break;
            case 15:
                cm.warp(261000021, 0); //����ŷ������Ҷ
                break;
            case 16:
                cm.warp(211000002, 0); //٪��ֻʵ۵ĸ���
                break;
            case 17:
                cm.warp(240080000, 0); //����ħ
                break;
            case 19:
                cm.warp(229010000, 0); //�ֹ�լۡ
                break;
            case 21:
                cm.warp(923040000, 0); //����Σ�յĿ���
                break;
            case 22:
                cm.warp(921160000, 0); //����
                break;
            case 23:
                cm.warp(957000000, 0); //����ϵͳ�о���
                break;
			case 24:
                cm.warp(510000000, 0); //ά��ɭ��
                break;
			case 25:
                cm.warp(710000000, 0); //���ٴ���
                break;
			case 26:
                cm.warp(302000000, 0); //��Ԫͼ���
                break;
			case 27:
                cm.warp(910002000, 0); //��������볡
                break;
			case 28:
                cm.warp(910002010, 0); //��������볡<�м�>
                break;
			case 29:
                cm.warp(910002020, 0); //��������볡<�߼�>
                break;
            case 98:
                cm.warp(677000010, 0);
                break;
            case 521:
                cm.warp(520000000, 0);
                break;
            case 522:
                cm.warp(610010000, 0);
                break;
            case 523:
                cm.warp(800000000, 0);
                break;
            case 524:
                cm.warp(600000000, 0);
                break;
            case 800:
                cm.warp(700000000, 0); //��𽹬���
                break;
            case 801:
                cm.warp(950000000, 0); //���μ�ɢ����
                break;
            default:
                cm.playerMessage("û���ҵ���ǰѡ��Ĵ��͵㡣");
                cm.clearSavedLocation("MULUNG_TC");
                break;
            }
            cm.dispose();
        }
    }
}