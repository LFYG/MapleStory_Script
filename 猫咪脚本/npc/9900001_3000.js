var status = 0;
var typed=0;
var typed1=0;
var random = java.lang.Math.floor(Math.random() * 9 + 1);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0 || mode == 0 && status == 2) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����!��ѡ��ʲô�����ر�:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�ר�����#l\r\n\r\n #k  #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�������ߣ�#r"+cm.getGamePoints()+"#k ����#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[����]��������н�    (#kĿǰ״̬�� #r���Ƽ�#b)#l\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[����]���һ��Ǳ��    (#kĿǰ״̬�� #r���Ƽ�#b)#l\r\n#L9##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�һ�]�һ�����ħ��    (#kĿǰ״̬�� #r���Ƽ�#b)#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[����]�˺�����ͻ��    (#kĿǰ״̬�� #r���Ƽ�#b)#l\r\n  ");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�����ר�����:\r\n  �ר���ṩ���е����ϲ���ʱ��ٰ�\r\n  �ר���ṩ�Ļ�����������򲻵�\r\n  ��������Ŷ���ʲô�����ḻ��Ȥ!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n  #bȫ����Ϸ����....\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע�����ֻר��24�����á�\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע��������ע�ר�� ��ֵ��ӵ�С�");
                    	cm.dispose();
			} else if (selection == 2) {
			typed=3;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�������ճ�ֵ����:\r\n  �ﵽһ�������������Ի�ô����һ��\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)#b\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]�鿴#r30W#b  ������#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]�鿴#r150W#b  ������#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]�鿴#r300W#b ������#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]�鿴#r900W#b ������#l\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]�鿴#r1800W#b ������#l\r\n#L7##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]�鿴#r3000W#b������#l\r\n\r\n   #r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#");
			/*cm.sendOk("��Ѿ�����...���ڴ� ���ڻ��!!!");
			cm.dispose();*/
			} else if (selection == 3) {
			typed=4;
			cm.dispose();
			cm.openNpc(9900001,3012);
			} else if (selection == 4) {
			typed=5;
			cm.dispose();
			cm.openNpc(9900001,3014);
			} else if (selection == 5) {
			cm.dispose();
			cm.openNpc(9900001,3013);
			} else if (selection == 6) {
			typed=7;
		    	cm.dispose();
		    	cm.openNpc(9900001,3001);
			} else if (selection == 7) {
			cm.sendOk("��Ѿ�����...!!!");
			cm.dispose();
			/*cm.dispose();
			cm.openNpc(9900001,3009);*/
			} else if (selection == 8) {
			cm.sendOk("��Ѿ�����...!!!");
			cm.dispose();
			} else if (selection == 9) {
			cm.dispose();
			cm.openNpc(9900001,3011);
			}
		} else if (status == 2) {
		if (typed == 3) {
		if (selection == 2) {
			typed1=1;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�鿴100 ����������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r�����������100#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r[�����������]���#r100#b  ���������ȡ#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���������ÿ��24�����á�\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���û��2013/12/30 - 2014/01/04����");
		}else if(selection == 3){
			typed1=2;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�鿴500 ����������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r�����������500#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046008##t2046008# x2\r\n#v2046009##t2046009# x2\r\n#v2046108##t2046108# x2\r\n#v2046109##t2046109# x2\r\n#v2049122##t2049122# x25\r\n#v2049116##t2049116# x25\r\n#v2049322##t2049322# x2\r\n#v2049751##t2049751# x2\r\n#v3010590##t3010590# x1\r\n#v3010606##t3010606# x1\r\n#v1142347##t1142347# x1\r\n#v1112151##t1112151# x1\r\n#v1112915##t1112915# x1\r\n#v1003797#150װ����� x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]���#r500#b  ���������ȡ#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���������ÿ��24�����á�\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���û��2013/12/30 - 2014/01/04������\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##bע��ӵ��1�����ʹ��һ��Ǳ�ܸ��ĵ�1�����Ի��ᡣ");
		}else if(selection == 4){
			typed1=3;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�鿴1000 ����������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r�����������1000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046110##t2046110# x1\r\n#v2046111##t2046111# x1\r\n#v2046010##t2046010# x1\r\n#v2046010##t2046010# x1\r\n#v2049122##t2049122# x50\r\n#v2049116##t2049116# x50\r\n#v2049322##t2049322# x4\r\n#v2049750##t2049750# x2\r\n#v3010494##t3010494# x1\r\n#v3010661##t3010661# x1\r\n#v1142348##t1142348# x1\r\n#v1112150##t1112150# x1\r\n#v1122122##t1122122# x1\r\n#v1112915##t1112915# x2\r\n#v1003797#150װ����� x1\r\n#v1132176#150������� x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]���#r1000#b  ���������ȡ#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���������ÿ��24�����á�\r\n     #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���û��2013/12/30 - 2014/01/04������\r\n     #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##bע��ӵ��2�����ʹ��һ��Ǳ�ܸ��ĵ�1�����Ի��ᡣ");
		}else if(selection == 5){
			typed1=4;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�鿴3000 ����������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r�����������3000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046110##t2046110# x2\r\n#v2046111##t2046111# x2\r\n#v2046010##t2046010# x2\r\n#v2046011##t2046011# x2\r\n#v2049137##t2049137# x50\r\n#v2049119##t2049119# x50\r\n#v2049322##t2049322# x8\r\n#v2049750##t2049750# x4\r\n#v1112140##t1112140# x1\r\n#v1112247##t1112247# x1\r\n#v1112787##t1112787# x1\r\n#v1003698##t1003698# x1\r\n#v3700071##t3700071# x1\r\n#v3010509##t3010509# x1\r\n#v3010621##t3010621# x1\r\n#v3010670##t3010670# x1\r\n#v3010070##t3010070# x1\r\n#v1122122##t1122122# x2\r\n#v1112915##t1112915# x3\r\n#v1672027##t1672027# x1\r\n#v1003797#150װ����� x1\r\n#v1132176#150������� x1\r\n#v1472214#150������� x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]���#r3000#b  ���������ȡ#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���������ÿ��24�����á�\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���û��2013/12/30 - 2014/01/04������\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##bע��ӵ��1�����ʹ��һ��Ǳ�ܸ��ĵ�1,2�����Ի��ᡣ");
		}else if(selection == 6){
			typed1=5;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�鿴6000 ����������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r�����������6000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046074##t2046074# x2\r\n#v2046075##t2046075# x2\r\n#v2046149##t2046149# x2\r\n#v2049137##t2049137# x100\r\n#v2049119##t2049119# x100\r\n#v2049322##t2049322# x16\r\n#v2049750##t2049750# x6\r\n#v1112139##t1112139# x1\r\n#v1112246##t1112246# x1\r\n#v1112786##t1112786# x1\r\n#v1003697##t1003697# x1\r\n#v3700070##t3700070# x1\r\n#v3010508##t3010508# x1\r\n#v3010658##t3010658# x1\r\n#v3010594##t3010594# x1\r\n#v3010520##t3010520# x1\r\n#v1122122##t1122122# x3\r\n#v1112915##t1112915# x4\r\n#v1672027##t1672027# x1\r\n#v1003797#150װ����� x1\r\n#v1132176#150������� x1\r\n#v1472214#150������� x1\r\n#v1132246#��߼����յ�������� x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]���#r6000#b  ���������ȡ#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���������ÿ��24�����á�\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���û��2013/12/30 - 2014/01/04������\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##bע��ӵ��2�����ʹ��һ��Ǳ�ܸ��ĵ�1,2�����Ի��ᡣ");
		}else if(selection == 7){
			typed1=6;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�鿴10000 ����������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�˺�Ŀǰ (#k��ǰӵ�е��: #r" + cm.getNX(1) + "#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r�����������10000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046074##t2046074# x4\r\n#v2046075##t2046075# x4\r\n#v2046149##t2046149# x4\r\n#v2049137##t2049137# x200\r\n#v2049119##t2049119# x200\r\n#v2049322##t2049322# x32\r\n#v2049750##t2049750# x8\r\n#v1112138##t1112138# x1\r\n#v1112245##t1112245# x1\r\n#v1112785##t1112785# x1\r\n#v1003696##t1003696# x1\r\n#v3700069##t3700069# x1\r\n#v3010507##t3010507# x1\r\n#v3010696##t3010696# x1\r\n#v3010492##t3010492# x1\r\n#v3010519##t3010519# x1\r\n#v1122122##t1122122# x4\r\n#v1112915##t1112915# x5\r\n#v1672027##t1672027# x1\r\n#v1003797#150װ����� x2\r\n#v1132176#150������� x2\r\n#v1472214#150������� x2\r\n#v1132246#��߼����յ�������� x2\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�����������]���#r10000#b  ���������ȡ#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���������ÿ��24�����á�\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע���û��2013/12/30 - 2014/01/04������\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##bע��ӵ��2�����ʹ��һ��Ǳ�ܸ��ĵ�1,2,3�����Ի��ᡣ");
		}
		}
		} else if (status == 3) {
		if (typed1 == 1) {
		if (selection == 2) {
		   if(cm.getEventCount("100����") == 0){
		   if(cm.getPlayer().getCSPoints(1) < 30000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("��ȷ���˺�����Ƿ�ﵽ100�������\r\n��ȷ��װ�����������ٿճ�7������λ��\r\n��ȷ�����ı��������ٿճ�7������λ��\r\n��ȷ���������������ٿճ�7������λ��\r\n��ȷ�����ñ��������ٿճ�7������λ��");
		        cm.dispose();
		   }else if(cm.getPlayer().getCSPoints(1) > 30000){
			cm.gainNX(-100 * 3000);
		        cm.gainItem(2431987,1);//������50%������
		        cm.gainItem(2049122,5);//���������� ���ɽ��� 50%
		        cm.gainItem(2049116,5);//ǿ��������� 60%
		        cm.gainItem(2049322,1);//5��װ��ǿ������ 30%
		        cm.gainItem(2049752,2);//S��Ǳ�ܸ��Ӿ��� 30%
		        cm.gainItem(3010659,1);//ð�հ�ʿվ����
		        cm.gainItem(3010608,1);//��������������
		        cm.gainItem(1142346,1);//����÷���ѫ��
		        cm.gainItem(1112141,1);//��õ����Ƭ��ָ
		        cm.setEventCount("100����");
		     	cm.sendOk("��ע����ա�");
			cm.worldSpouseMessage(0x20,"[�������] ��� "+ cm.getChar().getName() +" ��ȡ������100���������");
		        cm.dispose();
		     }else{
		     	cm.sendOk("����㣬�޷�����");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("���˺Ž����Ѿ���ȡ��100���������");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 2) {
		if (selection == 2) {
		   if(cm.getEventCount("500����1") == 0){
		   if(cm.getPlayer().getCSPoints(1) < 500 * 3000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("��ȷ���˺�����Ƿ�ﵽ500�������\r\n��ȷ��װ�����������ٿճ�7������λ��\r\n��ȷ�����ı��������ٿճ�7������λ��\r\n��ȷ���������������ٿճ�7������λ��\r\n��ȷ�����ñ��������ٿճ�7������λ��");
		        cm.dispose();
		   }else if(cm.getPlayer().getCSPoints(1) > 500 * 3000){
			cm.gainNX(-500 * 3000);
		        cm.gainItem(2431987,2);//������50%������ 
		        cm.gainItem(2049122,25);//���������� ���ɽ��� 50%
		        cm.gainItem(2049116,25);//ǿ��������� 60%
		        cm.gainItem(2049322,2);//5��װ��ǿ������ 30%
		        cm.gainItem(2049751,2);//S��Ǳ�ܸ��Ӿ��� 60%
		        cm.gainItem(3010590,1);//�����������
		        cm.gainItem(3010606,1);//δ��ɫ����������
		        cm.gainItem(1142347,1);//���커����ѫ��
		        cm.gainItem(1112151,1);//��ζ������Ƭ��ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(2431988,1);//150װ����
		        cm.gainItem(3994417,1);//��ɫ����
		        cm.setEventCount("500����");
		     	cm.sendOk("��ע����ա�");
			cm.worldSpouseMessage(0x20,"[�������] ��� "+ cm.getChar().getName() +" ��ȡ������500���������");
		        cm.dispose();
		     }else{
		     	cm.sendOk("����㣬�޷�����");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("���˺Ž����Ѿ���ȡ��500���������");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 3) {
		if (selection == 2) {
		   if(cm.getEventCount("1000����") == 0){
		   if(cm.getPlayer().getCSPoints(1) < 1000 * 3000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("��ȷ���˺�����Ƿ�ﵽ1000�������\r\n��ȷ��װ�����������ٿճ�7������λ��\r\n��ȷ�����ı��������ٿճ�7������λ��\r\n��ȷ���������������ٿճ�7������λ��\r\n��ȷ�����ñ��������ٿճ�7������λ��");
		        cm.dispose();
		   }else if(cm.getPlayer().getCSPoints(1) > 1000 * 3000){
			cm.gainNX(-1000 * 3000);
		        cm.gainItem(2431990,1);//������100%������ 
		        cm.gainItem(2049122,50);//���������� ���ɽ��� 50%
		        cm.gainItem(2049116,50);//ǿ��������� 60%
		        cm.gainItem(2049322,4);//5��װ��ǿ������ 30%
		        cm.gainItem(2049750,2);//S��Ǳ�ܸ��Ӿ��� 80%
		        cm.gainItem(3010494,1);//TV����
		        cm.gainItem(3010661,1);//�����������
		        cm.gainItem(1142348,1);//������ɱ��ѫ��
		        cm.gainItem(1112150,1);//��ʹ������Ƭ��ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(2431991,1);//��*���ѵ�ð��֮����
		        cm.gainItem(2431992,1);//150������
		        cm.gainItem(2431988,1);//150װ����
		        cm.gainItem(3994417,2);//��ɫ����
		        cm.setEventCount("1000����");
		     	cm.sendOk("��ע����ա�");
			cm.worldSpouseMessage(0x20,"[�������] ��� "+ cm.getChar().getName() +" ��ȡ������1000���������");
		        cm.dispose();
		     }else{
		     	cm.sendOk("����㣬�޷�����");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("���˺Ž����Ѿ���ȡ��1000���������");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 4) {
		if (selection == 2) {
		   if(cm.getEventCount("3000����") == 0){
		   if(cm.getPlayer().getCSPoints(1) < 3000 * 3000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("��ȷ���˺�����Ƿ�ﵽ3000�������\r\n��ȷ��װ�����������ٿճ�7������λ��\r\n��ȷ�����ı��������ٿճ�7������λ��\r\n��ȷ���������������ٿճ�7������λ��\r\n��ȷ�����ñ��������ٿճ�7������λ��");
		        cm.dispose();
		   }else if(cm.getPlayer().getCSPoints(1) > 3000 * 3000){
			cm.gainNX(-3000 * 3000);
		        cm.gainItem(2431990,2);//������100%������ 
		        cm.gainItem(2049137,50);//�������������� ���ɽ��� 40%
		        cm.gainItem(2049119,50);//����ǿ��������� 60%
		        cm.gainItem(2049322,8);//5��װ��ǿ������ 30%
		        cm.gainItem(2049750,4);//S��Ǳ�ܸ��Ӿ��� 80%
		        cm.gainItem(1112140,1);//����VIP��Ƭ��ָ
		        cm.gainItem(1112247,1);//����VIP�����ָ
		        cm.gainItem(1112787,1);//����VIP��ָ
		        cm.gainItem(1003698,1);//����VIPר������
		        cm.gainItem(3700071,1);//����VIP��ר���ƺš�
		        cm.gainItem(3010509,1);//����VIP��ף��
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1672027,1);//���������
		        cm.gainItem(2431991,2);//��*���ѵ�ð��֮����
		        cm.gainItem(2431992,1);//150������
		        cm.gainItem(2431988,1);//150װ����
		        cm.gainItem(2431989,1);//150������
		        cm.gainItem(3010070,1);//���ް�Ʒ��������
		        cm.gainItem(3010670,1);//����ָ��������
		        cm.gainItem(3010621,1);//�����������
		        cm.gainItem(3994417,1);//��ɫ����
		        cm.gainItem(3994418,1);//��ɫ����
		        cm.setEventCount("3000����");
		     	cm.sendOk("��ע����ա�");
			cm.worldSpouseMessage(0x20,"[�������] ��� "+ cm.getChar().getName() +" ��ȡ������3000���������");
		        cm.dispose();
		     }else{
		     	cm.sendOk("����㣬�޷�����");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("���˺Ž����Ѿ���ȡ��3000���������");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 5) {
		if (selection == 2) {
		if(cm.getEventCount("6000����") == 0){
		   if(cm.getPlayer().getCSPoints(1) < 6000 * 3000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("��ȷ���˺�����Ƿ�ﵽ6000�������\r\n��ȷ��װ�����������ٿճ�7������λ��\r\n��ȷ�����ı��������ٿճ�7������λ��\r\n��ȷ���������������ٿճ�7������λ��\r\n��ȷ�����ñ��������ٿճ�7������λ��");
		        cm.dispose();
		   }else if(cm.getPlayer().getCSPoints(1) > 6000 * 3000){
			cm.gainNX(-6000 * 3000);
		        cm.gainItem(2431994,2);//����99%������ 
		        cm.gainItem(2049137,100);//�������������� ���ɽ��� 40%
		        cm.gainItem(2049119,100);//����ǿ��������� 60%
		        cm.gainItem(2049322,16);//5��װ��ǿ������ 30%
		        cm.gainItem(2049750,6);//S��Ǳ�ܸ��Ӿ��� 80%
		        cm.gainItem(1112139,1);//�ƽ�VIP��Ƭ��ָ
		        cm.gainItem(1112246,1);//�ƽ�VIP�����ָ
		        cm.gainItem(1112786,1);//�ƽ�VIP��ָ
		        cm.gainItem(1003697,1);//�ƽ�VIPר������
		        cm.gainItem(3700070,1);//�ƽ�VIP��ר���ƺš�
		        cm.gainItem(3010508,1);//�ƽ�VIP��ף��
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1672027,1);//���������
		        cm.gainItem(2431991,3);//��*���ѵ�ð��֮����
		        cm.gainItem(2431992,1);//150������
		        cm.gainItem(2431988,1);//150װ����
		        cm.gainItem(2431989,1);//150������
		        cm.gainItem(2431993,1);//��߼����յ�������
		        cm.gainItem(3010658,1);//�������ϱ�����
		        cm.gainItem(3010594,1);//��ݮ��������
		        cm.gainItem(3010520,1);//�޴����������
		        cm.gainItem(3994417,2);//��ɫ����
		        cm.gainItem(3994418,2);//��ɫ����
		        cm.setEventCount("6000����");
		     	cm.sendOk("��ע����ա�");
			cm.worldSpouseMessage(0x20,"[�������] ��� "+ cm.getChar().getName() +" ��ȡ������6000���������");
		        cm.dispose();
		     }else{
		     	cm.sendOk("����㣬�޷�����");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("���˺Ž����Ѿ���ȡ��6000���������");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 6) {
		if (selection == 2) {
		if(cm.getEventCount("10000����") == 0){
		   if(cm.getPlayer().getCSPoints(1) < 10000 * 3000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("��ȷ���˺�����Ƿ�ﵽ10000�������\r\n��ȷ��װ�����������ٿճ�7������λ��\r\n��ȷ�����ı��������ٿճ�7������λ��\r\n��ȷ���������������ٿճ�7������λ��\r\n��ȷ�����ñ��������ٿճ�7������λ��");
		        cm.dispose();
		   }else if(cm.getPlayer().getCSPoints(1) > 10000 * 3000){
			cm.gainNX(-10000 * 3000);
		        cm.gainItem(2431994,4);//����99%������ 
		        cm.gainItem(2049137,200);//�������������� ���ɽ��� 40%
		        cm.gainItem(2049119,200);//����ǿ��������� 60%
		        cm.gainItem(2049322,32);//5��װ��ǿ������ 30%
		        cm.gainItem(2049750,8);//S��Ǳ�ܸ��Ӿ��� 80%
		        cm.gainItem(1112138,1);//��ʯVIP��Ƭ��ָ
		        cm.gainItem(1112245,1);//��ʯVIP�����ָ
		        cm.gainItem(1112785,1);//��ʯVIP��ָ
		        cm.gainItem(1003696,1);//��ʯVIPר������
		        cm.gainItem(3700069,1);//��ʯVIP��ר���ƺš�
		        cm.gainItem(3010507,1);//��ʯVIP��ף��
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1112915,1);//������ָ
		        cm.gainItem(1672027,1);//���������
		        cm.gainItem(2431991,4);//��*���ѵ�ð��֮����
		        cm.gainItem(2431992,2);//150������
		        cm.gainItem(2431988,2);//150װ����
		        cm.gainItem(2431989,2);//150������
		        cm.gainItem(2431993,2);//��߼����յ�������
		        cm.gainItem(3010696,1);//���Ѽ
		        cm.gainItem(3010492,1);//��������
		        cm.gainItem(3010519,1);//�޴�ѩ��������
		        cm.gainItem(3994417,2);//��ɫ����
		        cm.gainItem(3994418,2);//��ɫ����
		        cm.gainItem(3994419,2);//��ɫ����
		        cm.setEventCount("10000����");
		     	cm.sendOk("��ע����ա�");
			cm.worldSpouseMessage(0x20,"[�������] ��� "+ cm.getChar().getName() +" ��ȡ������10000���������");
		        cm.dispose();
		     }else{
		     	cm.sendOk("����㣬�޷�����");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("���˺Ž����Ѿ���ȡ��10000���������");
		        cm.dispose();
		   }
		}
		}
	   }
      }
}
