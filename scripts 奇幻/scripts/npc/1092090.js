var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var status = -1;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {   
	if (mode == -1) {
		cm.dispose();
	}else {
        if (status >= 0 && mode == 0) {
		   cm.dispose();
		   return;                    
		}
		if (mode == 1) {
		   status++;
		}else {
		   status--;
		}
		if (status == 0) {
			weekday-=1;
			var text = "��ã�#r#h ##k��ÿ#r�ܶ������ġ�����#k���ϵ�#b08:10��08:15#k���м�ţ�̻��ÿ��һ�μ��ɻ��#r2��#k��ȯ~���м��ʻ��#b��ӡ�����ħ����������ף�����ᡢ��Ʒѫ��#kŶ��";
			if(hour == 20 && (minute >= 10 && minute <= 15) && (weekday == 6 || weekday == 4 || weekday == 2)){// || cm.getPlayer().getName() == "����Ա��ʿ��"){
				var random = Math.floor(Math.random()*4000);
				if (random == 1258)
				{
					cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �����á���ӡ�����һ�š�", 5120012);
					cm.worldSpouseMessage(0x15, "[��ţ����] : ��ϲ ��" + cm.getChar().getName() + "�� �ڼ�ţ�̵�ʱ������á���ӡ�����һ��.");
					cm.gainItem(2610001, 1);
				} else if (random >= 1000 && random <= 1050) {
					var itemList = Array(5062000,5062002,5062500,5064000,2430481,2340000,2431893,2430112,2340000,2049100,1142500,1142501,1142502,1142503,1142504,4310030,4310036,1142505);
					var itemIdx = Math.floor(Math.random()*itemList.length);
					cm.worldSpouseMessage(0x15, "[��ţ����] : ��ϲ ��" + cm.getChar().getName() + "�� �ڼ�ţ�̵�ʱ������á�"+cm.getItemName(itemList[itemIdx])+"��һ��.");
					cm.gainItem(itemList[itemIdx], 1);
				}
				cm.gainNX(2);
				cm.dispose();
			} else {
				cm.sendOk(text);
				cm.dispose();
			}
		}
	}
}
