var status = 0;
var eff ="#fEffect/CharacterEff/1102232/2/0#";
var sl =1 + Math.floor(Math.random() * 5);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����

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
	        if(month == 12 && day <= 31 && day > 24 ){
            cm.sendSimple("=======================#rʥ����#bר��#k=====================\r\n�װ���#r" + cm.getChar().getName() + "#k��Merry Christmas��,����#p9209101#��\r\n ��ʥ���ڿ�ʼ����ÿ�춼����С�����͸���Ŷ���������ⶬ����ı��ůů�ġ���л��֧��#rChinað�յ�#k�������У԰��Խ��Խ�ã�\r\n#L1#" + eff + " #bʥ�����ˣ���Ҫ����!#n#l#k #v2430608##z2430608#\r\n#L2#" + eff + " #r���ۼơ�#b��ȡ��������Ӯȡ����!~#k#n#l")
        } else {
		    cm.sendOk("�ʱ��Ϊ��#b 2014 �� 12 �� 25 ��#k��#b 2014 �� 12 �� 30 ��#k\r\n��ǰ����Ϊ:#e#r "+ year +" �� "+ month +" �� "+ day +" ��#k#n��");
			cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getBossLog("ʥ������") > 0 || cm.getGamePoints() < 180 ) {
                cm.sendOk("#r - ʥ������ >> #k\r\n\r\n���Ѿ�����˻�������ʱ�䲻�� #r3#k ��Сʱ��");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(3) < 1 ) {
                cm.sendOk("#r - ʥ��ǩ�� >> #k\r\n\r\n��ı����ǲ���װ����?");
            } else {
                    cm.gainItem(2430608, 1);  
                    cm.gainItem(4310011, sl); 
                    cm.setBossLog("ʥ������");
                    cm.setBossLog("�ܼ�����", 1);
		            cm.worldMessage(0x18,""+ cm.getChar().getName() +"" + " : " + "Ү�����յ���ʥ�����˵������ˣ����ǵ� " + cm.getBossLog("�ܼ�����", 1) + " ����Ŷ���Ķ��͸Ͽ��ж��ɣ�");
                    cm.sendOk("#r - ʥ������ >> \r\n#d���������,�ܹ���:#k\r\n#b#v2430608##z2430608# x1\r\n#v4310011##z4310011# x"+ sl +"#k\r\n������");
            }
            cm.dispose();
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9209101, 4);
        } else if (selection == 15) {
            cm.dispose();
            cm.openNpc(9900001, 3013);
        } else if (selection == 5) {
            if(cm.getBossLog("ÿ������") == 0  && cm.getGamePoints()>360){
		cm.gainNX(2, 2000);
		cm.setBossLog("ÿ������");
                    cm.setBossLog("�ܼ�����", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ����2000���þ�.��ȡ�����ܴ���" + cm.getBossLog("�ܼ�����", 1) + "ע��һ����ɫ2000,һ���˺����19��ɫ,ÿ�վ�����ȡ36000���þ�Ŷ!");
                    cm.sendOk("#r - ÿ������ >> \r\n#dÿ��������ȡ�ɹ�#k\r\n�������2000���þ�...\r\nע��һ����ɫ2000,һ���˺����19��ɫ,ÿ�վ�����ȡ36000���þ�Ŷ!\r\n#r�һ�����6Сʱ �������-����NPC-�������߻����һ�3��2�����");
                } else {
                    cm.sendOk("#r - ÿ������ >> #k\r\n\r\n�Բ���һ��ֻ������һ�Ρ�\r\n����Ҫ����6Сʱ���ϲ�����ȡ��");
                }
		cm.dispose();
        } else if (selection == 4) {
           /* if (cm.getPlayerStat("LVL") < 70) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n70�����µĲ��ܲμӻ��");
            } else  */
	    if (cm.getSpace(5) < 3) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n����ʧ�ܣ������ֽ������߿ռ䲻�㡣");
	} else if (cm.getBossLog("ÿ�չ�Ӷ") == 0) {
	    cm.gainItemPeriod(5030019,1,1);
                    cm.setBossLog("ÿ�չ�Ӷ");
                    cm.setBossLog("�ܼƹ�Ӷ", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ��Ӷ�̵�.��ȡ��Ӷ�̵��ܴ�����" + cm.getBossLog("�ܼƹ�Ӷ", 1));
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dÿ�չ�Ӷ��ȡ�ɹ�#k\r\n��ù�Ӷ�̵�꿨x1");
            cm.dispose();
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ����ȡһ�Ρ�");
            cm.dispose();
        }
    }
}
    }
