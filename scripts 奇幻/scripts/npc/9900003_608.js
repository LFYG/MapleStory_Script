
var status = -1;
var text;
var sel;
var time;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����

// ÿ��������������ʱ��
var condition = new Array(10, 60, 180, 300, 420, 540, 680, 800);
var reward = new Array(// �����š�����id������
					// ���1
					Array(1, 5030001, 1, 1), //��Ӷ����һ��Ȩ
					Array(1, 2000005, 50),   //����ҩˮ
					//Array(1, 2431174, 1),    //��������
					Array(1, 2450020, 1),    //����ֵ1.5��

					// ���2
					//Array(2, 4000463, 1000),  //���
					Array(2, 5220040, 1),    //ת��
					Array(2, 2000005, 100),  //����ҩˮ
					Array(2, 5062000, 1),    //����ħ��
					Array(2, 2431174, 1),    //��������
					Array(2, 5121032, 1),    //���õ
					Array(2, 5072000, 5 , 1),//����5��			
	    			Array(2, 2450020, 1),    //����ֵ1.5��
					
					// ���3	
					Array(3, 5220040, 1),    //ת��
				    Array(3, 5062000, 1),    //����ħ��
					Array(3, 5062002, 1),    //�߼�����ħ��
					Array(3, 2340000, 1, 1), //ף������	
					Array(3, 2431174, 1),    //��������
					Array(3, 5121032, 1),    //���õ
					//Array(3, 4310030, 1),    //�˶����
					Array(3, 5076000, 5 , 1),//��������
					Array(3, 4001713, 5),    //50w

					// ���4-300
					//Array(4, 4000463, 1000),  //���
					Array(4, 5220040, 1),    //ת��
					Array(4, 5062000, 1),    //����ħ��
					Array(4, 5062500, 1),    //��ʦħ��
					Array(4, 5064000, 1, 1), //��������				
					Array(4, 4310110, 1),    //���ڼ����
					Array(4, 4310030, 5),    //�˶����
					//Array(4, 4310036, 3),    //������
					Array(4, 2431174, 1),    //��������
					Array(4, 5121032, 1),    //���õ
                    Array(4, 2431738, 1),    //���þ�500��Ʒ
                    Array(4, 4001714, 1),    //���ӽ�100���Ǯ
									
					// ���5-420
				    //Array(5, 5220040, 1),    //ת��
					Array(5, 5062000, 2),    //����ħ��       
					Array(5, 5062002, 1),    //�߼�����ħ��
					Array(5, 5062500, 1),    //��ʦħ��
                    Array(5, 2340000, 1),  //ף������
                    //Array(5, 5064000, 1),  //��������					
					//Array(5, 2049300, 1),  //�߼�װ��ǿ����
                   // Array(5, 2049400, 1),  //�߼�Ǳ�ܸ��Ӿ�C
				   	Array(5, 2049116, 1),  //ǿ��
					Array(5, 2431738, 1),  //���þ�500��Ʒ
					Array(5, 4310110, 1),  //���ڼ����
					Array(5, 4310030, 5),  //�˶����
					//Array(5, 4310036, 10),  //������
					Array(5, 2431174, 1),    //��������
					Array(5, 4001714, 1),  //���ӽ�100���Ǯ

					
					// ���6-540
					//Array(6, 4000463, 1000),  //���
				    //Array(6, 5220040, 1),    //ת��
					Array(6, 5062000, 2),               
					Array(6, 5062002, 1),
					Array(6, 5062500, 1),
                    //Array(6, 2340000, 1),  //ף������
                    Array(6, 5064000, 1),  //��������					
					//Array(5, 2049300, 1),  //�߼�װ��ǿ����
                    Array(6, 2049400, 1 , 1),  //�߼�Ǳ�ܸ��Ӿ�C
					//Array(6, 2049168, 1),  //��������20%
					Array(6, 2431739, 1),  //���þ�1000��Ʒ
					Array(6, 4310110, 1),  //���ڼ����
					Array(6, 4310030, 5),  //�˶����
					//Array(6, 4310036, 10),  //������
					Array(6, 2431174, 1),    //��������
					Array(6, 4001714, 1),  //���ӽ�100���Ǯ

					
					// ���7-680
					Array(7, 5062000, 2),               
					Array(7, 5062002, 2),
					Array(7, 5062500, 2),
                    //Array(7, 2340000, 1),  //ף������
                    //Array(7, 5064000, 1),  //��������					
					//Array(7, 4001839, 100),  //����
					//Array(7, 2049400, 1 , 1),  //�߼�Ǳ�ܸ��Ӿ�C
					Array(7, 2049300, 1 , 1),  //�߼�װ��ǿ����
					Array(7, 2049168, 1),  //��������20%
					Array(7, 2431742, 1),  //���þ�4000��Ʒ
					Array(7, 4310110, 1),  //���ڼ����
					//Array(7, 4310030, 10),  //�˶����
					//Array(7, 4310036, 10),  //������
					Array(7, 2431174, 2),    //��������
					Array(7, 4001714, 2),  //���ӽ�100���Ǯ
		
					//���8-800
					///Array(8, 4000463, 1000),  //���
					Array(8, 4001839, 100), //����
					//Array(8, 4001832, 100), //����
                    Array(8, 5062000, 3), //����ħ��
					Array(8, 5062002, 2), //�߼�����ħ��
					Array(8, 5062500, 2), //��ʦ������ħ��  
					Array(8, 2340000, 1),  //ף������
                    Array(8, 5064000, 1),  //��������
					Array(8, 2049300, 1 , 1),  //�߼�װ��ǿ����
					Array(8, 2049400, 1 , 1),  //�߼�Ǳ�ܸ��Ӿ�C
					//Array(8, 2048310, 1),  //����Ǳ�ܸ��Ӿ���60%
					Array(8, 2049124, 1),  //����������50%
					Array(8, 2431742, 1),  //���þ�4000��Ʒ
                    Array(8, 4310110, 2),  //���ڼ���� 				
					Array(8, 4000463, 5),  //5Ԫ���
					//Array(8, 4310030, 10), //�˶����
					//Array(8, 4310036, 10), //������
					Array(8, 2431174, 2),    //��������
					Array(8, 4001714, 2)   //���ӽ�100����
			);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	var time = cm.getGamePoints();
	var curlevel = -1;

	if (status == 0) {
		text = "#e#d��������Chinað�յ�����ʱ��Ϊ�� #r" + time + "#k #d����#n#k\r\n#e#d��ʾ#n#k��#e#r23 �� 55#n #b��#r #e00 �� 05#n #bʱ�޷���ȡ���߽�����#k\r\n#b���� #e#r23��55#n#b ��ǰ��ȡ����δ��ȡ�Ľ��������������ʧ��\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" [����] ��ȡ����" + condition[i-1] + "���ӽ���";
			if (cm.getBossLogAcc("�������" + i) > 0) {
				text += "(����ȡ)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 ǰһ�첻��ȡ��ʱ��  00:00 ~ 00:10 �ڶ��첻��ȡ��ʱ��  
		if ((hour == 23 && (minute >= 55 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 5))){
			cm.sendOk("#d��������ǰʱ�䣺 #r" + hour +" ʱ " + minute + " �� " + second + " ��#k\r\n\r\n#e#d��ʾ#n#k��#r23 �� 55 #b��#r 00 �� 05 #bʱ�޷���ȡ���߽�����#k");
			cm.dispose();
			return;
		}
		if (cm.getBossLogAcc("�������" + selection) > 0) {
			cm.sendOk("���������Ѿ���ȡ����");
			cm.dispose();
			return;
		}
		sel = selection;
		text = "\t\t\t\t#e#r- ���� " + condition[selection - 1] + " ���ӽ��� -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "��]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (time < condition[sel-1]) {
			cm.sendOk("����ʱ�䲻�㣬�޷���ȡ��");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				if (reward[i][3] == null || reward[i][3] == '')
					reward[i][3]=0;
				rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("�����ռ䲻�㣬��ȷ������ÿ����λ������ " + rewardlist.length + " ��ռ�");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			if (rewardlist[i][2] != 0) {
				//�����޵���
				cm.gainItemPeriod(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
				//java.lang.System.out.println("��");
			} else {
				//�����޵���
				cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
			}
		}
		cm.setBossLogAcc("�������" + sel);
		cm.playerMessage(1, "��ȡ�ɹ���");
		cm.worldSpouseMessage(0x20,"[���߽���] ��" + "��� " + cm.getChar().getName() + " ��ȡ������ " + condition[sel-1] + " ���ӽ���,�볬�������һ��");
		if (sel == 5) {
			cm.finishActivity(120108);
		} else if (sel == 6) {
			cm.finishActivity(120109);
		}
		cm.dispose();
	}
}
