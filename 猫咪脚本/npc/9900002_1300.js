/* ϴװ��Ǳ�� */

var status = -1;
var potList = Array(
Array(40603, "����BOSSʱ�˺���+40%", 1500),
Array(40292, "���ӹ���40%�ķ�����", 1500),
Array(42051, "��������+12%", 1500),
Array(60001, "���˺���+12% ", 1500),
Array(60002, "�������ԣ�+20% ", 1500),
Array(60007, "MaxHP : +10% ", 1500),
Array(60008, "������/ħ����+10% ", 1500),
Array(40055, "������ 12%", 1500));
var potId = -1; //Ǳ�ܵ�ID
var depict = ""; //Ǳ�ܵ�����
var points = -1; //ÿ�εļ۸�
var potline = 1; //�޸ĵ�Ǳ���ǵڼ���
var oldEquip;
var newEquip;
var count = -1; //����ϴ���Ǹ����ԵĴ���
var slot = 1; //������Ҫ�޸ĵ�װ���ڱ�����λ��
var potline = 1 //������Ҫ�޸ĵ��ǵڼ���Ǳ�� [1-3] Ϊ��ͨ [4-6] Ϊ����
var Nx = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����!��ѡ��ʲô����Ǳ��:\r\n\r\n   #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#��ǰӵ�е��: #r" + cm.getNX(1) + "#k #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#��ǰӵ�е��þ�: #r" + cm.getNX(2) + "#k\r\n                   (�����޸ĸ���Ǳ��)\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#";
        for (var i = 0; i < potList.length; i++) {
            selStr += "\r\n#L" + i + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + potList[i][1] + "#k  (�۸� #r" + potList[i][2] + "#k #k ���ÿ��)#l";
        }
        cm.sendSimple(selStr + " \r\n ");
    } else if (status == 1) {
        oldEquip = cm.getEquipBySlot(slot);
        if (oldEquip == null || oldEquip.getState() != 0x14) { //oldEquip.getState() != 0x14 ���װ����ͨǱ���Ƿ� SS
            cm.sendOk("���ִ���: \r\n��������1��λ�õ�װ��Ϊ�� ���� װ����Ǳ�ܵȼ���Ϊ SS");
            cm.dispose();
            return; //���ִ���ֱ�ӷ��� ��ִ������Ĳ��� �������ע��
        }
        var pot = potList[selection];
        if (pot != null) {
            potId = pot[0];
            depict = pot[1];
            points = pot[2];
            cm.sendYesNo("���Ƿ�Ҫ��#bװ������һ��װ��\r\n��һ��Ǳ������(����ı�����Ǳ������)#kһ��ϴǱ������Ϊ #b" + depict + "#k��\r\n#rע�����β�����Ҫ�۳�15000���!!!#k");
        } else {
            cm.sendOk("���ִ���...1");
            cm.dispose();
        }
    } else if (status == 2) {
	if(cm.getPlayer().getCSPoints(1) < 15000) {
	    cm.sendOk("��ĳ�ֵ����15000��,���ֵ!!!");
	    cm.dispose();
	    return;
	} else {
	    if(cm.getPlayer().getCSPoints(1) > 15000) {
		//cm.gainNX(+ 15000);
	    cm.gainNX(- 15000);
	    } else {
		cm.sendOk("���ִ���...2");
	    }
	}
        if (potId <= 0 || depict == "" || points <= 0) {
            cm.sendOk("������߳��ִ���...");
            cm.dispose();
            return;
        }
       	 count = cm.getRandomPotential(slot, potId);
	 count = count + Math.floor(Math.random() * 40) + 60;
        if (count > 0) {
	    Nx = points * count;
            cm.sendYesNo("ϴ��Ǳ������Ϊ #b" + depict + "#k ���� #b" + count + "#k �� ���α�����������Ҫ: #r" + Nx + "#k ���.�Ƿ��������ԣ�");
        } else {
            cm.sendOk("���ִ���...3");
            cm.dispose();
        }
    } else if (status == 3) {
        newEquip = cm.getEquipBySlot(slot);
        if (oldEquip == newEquip) { //����ط�����Ҫ���������
	    if(cm.getPlayer().getCSPoints(1) >= Nx) {
                if (cm.changePotential(slot, potline, potId, true)) { //[װ��λ��] [Ǳ��λ��] [Ǳ��ID] [�Ƿ񹫸�]
                    //todo �۵��
		    cm.gainNX( - Nx);
                    cm.sendOk("��ϲ���ɹ�ϴ��Ǳ������....");
		    cm.getPlayer().saveToDB(false, false);
		    cm.dispose();
		    return;
                } else {
                    cm.sendOk("���ִ���...4");
		    cm.dispose();
                }
            } else {
		cm.sendYesNo("���ĵ�����Ƿ�Ҫʹ�ó�ֵ���?");
	    }
        } else {
            cm.sendOk("���ִ���...");
	    cm.dispose();
        }
    } else if (status == 4) {
	if(cm.getPlayer().getCSPoints(1) * 3000 >= Nx) {
		var pay = Nx/3000 + ((Nx % 3000 > 0) ? 1 : 0);
		var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0 );
		pay = pay - temp/10;
		if(cm.getPlayer().getCSPoints(1) > (pay)) {
			//cm.gainNX( - Nx);
		    cm.gainNX( - pay * 0);
        	    if(cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, potline, potId, true)) {
		    	cm.gainNX( - Nx);
           	        cm.sendOk("��ϲ���ɹ�ϴ��Ǳ������....");
			cm.getPlayer().saveToDB(false, false);
		        cm.dispose();
		    } else {
                        cm.sendOk("���ִ���...5");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�һ����� ����ϵ����Ա");
		    cm.dispose();
		}
	} else {
	    cm.sendYesNo("���ĳ�ֵ�����Ƿ�Ҫ���г�ֵ?");
	}
    } else if (status == 5) {
	cm.openWeb("http://www.libaopay.com/buy/?wid=38796");
	cm.sendYesNo("��ֵ���������!\r\n�˳�������");
	status = 3;
    }
}
