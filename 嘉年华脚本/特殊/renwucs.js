var status = 0;
var typed=0;
var ttcj = "";
var ttty = "";
var ttll = "";
var ttyc = "";
var zdhl = "";
var zdlz = "";
var zdhd = "";
var zdgj = "";
var gply = "";
var jxjc = "";
var random = java.lang.Math.floor(Math.random() * 4);
var random1 = java.lang.Math.floor(Math.random() * 6);
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(cm.getEventCount("�齱") == 0){
	        ttcj = "#rδ�������#b";
	}else{
	        ttcj = "#k���������#b";
	}
	if(cm.getEventCount("��Ծ") == 0){
	        ttty = "#r�����"+cm.getEventCount("��Ծ")+"������#b";
	}else{
	        ttty = "#r�����"+cm.getEventCount("��Ծ")+"������#b";
	}
	if(cm.getEventCount("����") == 0){
	        ttll = "#rδ�������#b";
	}else{
	        ttll = "#k���������#b";
	}
	if(cm.getEventCount("����") == 0){
	        ttyc = "#rδ�������#b";
	}else{
	        ttyc = "#k���������#b";
	}
	if(cm.getEventCount("����") < 1){
	        zdhl = "#r�����"+cm.getEventCount("����")+"������#b";
	}else{
	        zdhl = "#k���������#b";
	}
	if(cm.getEventCount("����") < 1){
	        zdlz = "#r�����"+cm.getEventCount("����")+"������#b";
	}else{
	        zdlz = "#k���������#b";
	}
	if(cm.getEventCount("����") < 1){
	        zdhd = "#r�����"+cm.getEventCount("����")+"������#b";
	}else{
	        zdhd = "#k���������#b";
	}
	if(cm.getEventCount("���") < 1){
	        zdgj = "#r�����"+cm.getEventCount("���")+"������#b";
	}else{
	        zdgj = "#k���������#b";
	}
	if(cm.getEventCount("����") < 1){
	        hhhg = "#r�����"+cm.getEventCount("����")+"������#b";
	}else{
	        hhhg = "#k���������#b";
	}
	if(cm.getEventCount("����") == 0){
	        jxjc = "#rδ�������#b";
	}else{
	        jxjc = "#k���������#b";
	}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			var selStr = "�������ߵ�ʱ��Ϊ��#r"+cm.getOnlineTime()+"#k ����! ��ѡ��ʲô��������\r\n\r\n";
			//selStr +="#b#L999#[����/���]���޻��� #k#rnew      #k����:ħ��#l\r\n\r\n";
			//selStr +="#b#baidu#[����/���]��Ҷ��У #k#rnew      #k����:ͼ��#l\r\n\r\n";
			selStr +="#b#L988#���복վ<2> #k#rnew ����ñ�� #l\r\n\r\n";
			selStr +="#b#L987#[���]������ #k#rnew      #k����:#l\r\n\r\n";
		    selStr +="#b#L998#[����]�������� #k#rnew           #k����:ħ�������š����#l\r\n\r\n";
			selStr +="#b#L800#[����]������� #k#rnew           #k����:���ߡ����š�����#l\r\n\r\n";
			selStr +="#b#L995#[���]ħ������ #k#rnew           #k����:ħ��#l\r\n\r\n";
		    selStr +="#b#L997#[���������]������ #k#rnew       #k����:ħ��#l\r\n\r\n";
		    selStr +="#b#L994#[�¸���] �����˷ÿͣ�#k#rnew     #k����:��������Ƭװ��#l\r\n\r\n";
		    selStr +="#b#L993#[�¸���] ��깫԰��#k#rnew       #k����:����#l\r\n\r\n";
			selStr +="#b#L990#[�¸���] �����ʴ��⣡#k#rnew     #k����:���֡����ᡢħ��#l\r\n\r\n";
		    selStr +="#b#L992#[����] ���������#k#rnew         #k����:���� #l\r\n\r\n";
		    selStr +="#b#L991#[����] �����������#k#rnew     #k����:���֡����ᡢħ��#l\r\n\r\n";
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ���������ճ�������:\r\n  ͨ�������ճ��������Ի�ô�����Ϸ����,��������\r\n  ���������벻��������,�����-����ģʽ��Ȥ����.ɱ\r\n  ¾ ��ս ð�� ��Ʒ ���������Ӧ�о���,�Ͽ��ж�������!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v3010070#���� #v2049134#���� #v5062002#ħ��  #v1332225#װ�� #v1102453#��װ\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע�������ճ�����24�����á�\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע��ͨ���ճ�������Ի��������Ʒ��������ͺ���Ʒ��");
                    	cm.dispose();
			} else if (selection == 2) {
			typed=3;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�����ճ�����齱�:\r\n  ���������������������ȡ1-3����ĸ�̳齱��.\r\n  ˫��������õ����벻������ƷŶ.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#��ɫ���ߴﵽ2Сʱ (#k����ʱ�䣺 #r"+cm.getOnlineTime()+"#k)����\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���һ��[���]ɨ���ػ���.\r\n#L2#��Ҫ�齱#l");
			} else if (selection == 3) {
			typed=4;
                    	cm.dispose();
		    	cm.openNpc(9020000);
			} else if (selection == 4) {
			typed=5;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�����ճ����������:\r\n  ������������������ȡ����ֵ.\r\n  ��� ����ħ��x6 �߼�����ħ��x3 ��������x3 ף����x3\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#��ɫ���ߴﵽ3Сʱ (#k����ʱ�䣺 #r"+cm.getOnlineTime()+"#k)����\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���һ��[���]ɨ���ػ���.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���һ��[���]��ռ������.\r\n#L2#�������#l");
			} else if (selection == 5) {
			typed=6;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ�����ճ��������ɻ,����\r\n  ����������������С���.\r\n  ��� ����С���ɳ�ֵ 5 - 10 �� \r\n  #rע��С���ĳɳ����,�����г���ͼ����(�Ľ���)#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#��ɫ���ߴﵽ4Сʱ (#k����ʱ�䣺 #r"+cm.getOnlineTime()+"#k)����\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�ռ���Ʒ]#i4001083# #t4001083# (#c4001083# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�ռ���Ʒ]#i4001084# #t4001084# (#c4001084# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�ռ���Ʒ]#i4000460# #t4000460# (#c4000460# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�ռ���Ʒ]#i4000461# #t4000461# (#c4000461# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[�ռ���Ʒ]#i4000462# #t4000462# (#c4000462# / 1).\r\n#L2#�������#l");		} else if (selection == 6) {
			typed=7;
			if (cm.getEventCount("����") < 1) {
			cm.dispose();
			cm.openNpc(9330231);
			}else{
		    	cm.sendOk("������ʺ��Ѿ����[���]ɨ���ػ��ꡣ");
		    	cm.dispose();
			}
			} else if (selection == 7) {
			typed=9;
			if (cm.getEventCount("����") < 1) {
                    	cm.dispose();
			cm.openNpc(2094000);
			}else{
		    	cm.sendOk("������ʺ��Ѿ����[���]��ռ��������");
		    	cm.dispose();
			}
			} else if (selection == 9) {
			typed=10;
			if (cm.getEventCount("���") < 1) {
                    	cm.dispose();
			cm.openNpc(2022003);
			}else{
		    	cm.sendOk("������ʺ��Ѿ����[���]�ʵ۵ĸ��");
		    	cm.dispose();
			}
			} else if (selection == 10) {
			typed=11;
			cm.dispose();
			cm.openNpc(2040034);
			} else if (selection == 11) {
			cm.dispose();
			cm.openNpc(9020005);
			} else if (selection == 12) {
			typed=12;
			cm.sendOk("������ľ�нڲ�");
                    	cm.dispose();
			} else if (selection == 999) {
				cm.dispose();
				cm.openNpc(9201116,"wuxianhuoli");
			} else if (selection == 998) {
				cm.dispose();
				cm.openNpc(9201116,"9300006_1");
			} else if (selection == 997) {
				cm.dispose();
				cm.openNpc(9000233);
			} else if (selection == 996) {
				cm.warp(744000000);
				cm.dispose();
			} else if (selection == 995) {
				cm.dispose();
				cm.openNpc(9201116,"JinBi");
			} else if (selection == 994) {
				cm.warp(861000000);
				cm.dispose();
			} else if (selection == 993) {
				cm.warp(956100000);
				cm.dispose();
			} else if (selection == 992) {
				cm.warp(925020000);
				cm.dispose();
			} else if (selection == 991) {
				cm.warp(910002000);
				cm.dispose();
			} else if (selection == 990) {
				cm.warp(910048000);
				cm.dispose();
			} else if (selection == 800) {
				cm.warp(910340700,0);
				cm.dispose();
			} else if (selection == 988) {
				cm.warp(223030100,0);
				cm.dispose();
				//cm.openNpc(1540100);
			} else if (selection == 987) {
				
				cm.warp(221023300,0);
				cm.dispose();
				//cm.openNpc(1500016);
			}
		} else if (status == 2) {
		if (typed == 3) {
		if (selection == 2) {
                if (cm.getEventCount("�齱") == 0) {
		if(cm.getOnlineTime() >= 10 && cm.getEventCount("����") > 0 && (cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)){
		    var xzq = Math.floor(Math.random()*3+1);
			cm.gainItem(2430069, xzq);
		    cm.sendOk("��� #v2430069# #t2430069# "+xzq+"��");
           	    cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮�齱��л�� ��ĸ������ ��");
		    cm.setEventCount("�齱");
                    cm.dispose();
		}else{
		    cm.sendOk("��ȷ��������ʱ��ﵽ10���ӡ�\r\n��ȷ�����Ƿ����#b[���]ɨ���ػ���#k��\r\n��ȷ��������������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
                    cm.dispose();
		}
		}else{
		    cm.sendOk("������ʺ��Ѿ����[�ճ�]���찮�齱��");
		    cm.dispose();
		}
		}
		}
		if (typed == 5) {
		if (selection == 2) {
                if (cm.getEventCount("����") == 0) {
		if(cm.getOnlineTime() >= 20 && cm.getEventCount("����") > 0 && cm.getEventCount("����") > 0 && (cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)){
		if(random == 0){
		    cm.gainGachaponItem(5062000, 6, "���찮����", 3);
                    cm.sendOk("��� #v5062000# #t5062000# 6��");
		} else if(random == 1){
		    cm.gainGachaponItem(5062002, 3, "���찮����", 3);
                    cm.sendOk("��� #v5062002# #t5062002# 3��");
		} else if(random == 2){
		    cm.gainGachaponItem(5064000, 3, "���찮����", 3);
                    cm.sendOk("��� #v5064000# #t5064000# 3��");
		} else {
		    cm.gainGachaponItem(2340000, 3, "���찮����", 3);
                    cm.sendOk("��� #v2340000# #t2340000# 3��");
		}
		    cm.setEventCount("����");
		    cm.gainPlayerEnergy(50);
		    cm.gainItem(4033136, 1);
           	    cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮������л�� 50 �����ֵ ���ڼ�ֽ x1��");
                    cm.dispose();
		}else{
		    cm.sendOk("��ȷ��������ʱ��ﵽ20���ӡ�\r\n��ȷ�����Ƿ������ȫ��[���]����\r\n��ȷ��������������Ŀ�������Ƿ���һ�����ϵĿռ䡣");
                    cm.dispose();
		}
		}else{
		    cm.sendOk("������ʺ��Ѿ����[�ճ�]���찮������");
		    cm.dispose();
		}
		}
		}
		if (typed == 6) {
		if (selection == 2) {
                if (cm.getEventCount("����") == 0) {
		if(cm.getOnlineTime() >= 30 && cm.haveItem(4001083,1) && cm.haveItem(4001084,1) && cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
		if(random1 == 0){
		for(var i = 1; i <= 5; i++){
	   	    cm.setPQLog("�����ܼƳɳ�ֵ",1);
		}
		cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮���ɻ�л�� 5 ��ɳ�ֵ ��");
		} else if(random1 == 1){
		for(var i = 1; i <= 6; i++){
	   	    cm.setPQLog("�����ܼƳɳ�ֵ",1);
		}
		cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮���ɻ�л�� 6 ��ɳ�ֵ ��");
		} else if(random1 == 2){
		for(var i = 1; i <= 7; i++){
	   	    cm.setPQLog("�����ܼƳɳ�ֵ",1);
		}
		cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮���ɻ�л�� 7 ��ɳ�ֵ ��");
		} else if(random1 == 3){
		for(var i = 1; i <= 8; i++){
	   	    cm.setPQLog("�����ܼƳɳ�ֵ",1);
		}
		cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮���ɻ�л�� 8 ��ɳ�ֵ ��");
		} else if(random1 == 4){
		for(var i = 1; i <= 9; i++){
	   	    cm.setPQLog("�����ܼƳɳ�ֵ",1);
		}
		cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮���ɻ�л�� 9 ��ɳ�ֵ ��");
		} else {
		for(var i = 1; i <= 10; i++){
	   	    cm.setPQLog("�����ܼƳɳ�ֵ",1);
		}
		cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" �����찮���ɻ�л�� 10 ��ɳ�ֵ ��");
		}
		    cm.gainItem(4001083,-1);
		    cm.gainItem(4001084,-1);
		    cm.gainItem(4000460,-1);
		    cm.gainItem(4000461,-1);
		    cm.gainItem(4000462,-1);
		    cm.setEventCount("����");
                    cm.dispose();
		}else{
		    cm.sendOk("��ȷ��������ʱ��ﵽ30���ӡ�\r\n��ȷ�����Ƿ����ȫ��[�ռ���Ʒ]����");
                    cm.dispose();
		}
		}else{
		    cm.sendOk("������ʺ��Ѿ����[�ճ�]���찮���ɡ�");
		    cm.dispose();
		}
		}
		}
	   }
      }
}
