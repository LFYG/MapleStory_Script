var status = 0;
var typed=0;
var random = java.lang.Math.floor(Math.random() * 10) + 1;
var random1 = java.lang.Math.floor(Math.random() * 3) + 1;
var eff = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var zx1;
var zx3;
var zx6;
var zx9;
var zx12;
var zx13;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(cm.getEventCount("����1") > 0){
	zx1 ="#e#b����ȡ����#k#n";
	}else if (cm.getGamePoints() >= 60){
	zx1 ="#e#g����ȡ����#n#k";
	}else{
    zx1 ="#eδ�ﵽ����#n";
    }
    if(cm.getEventCount("����3") > 0){
	zx3 ="#e#b����ȡ����#k#n";
	}else if (cm.getGamePoints() >= 180){
	zx3 ="#e#g����ȡ����#n#k";
	}else{
    zx3 ="#eδ�ﵽ����#n";
    }
    if(cm.getEventCount("����6") > 0){
	zx6 ="#e#b����ȡ����#k#n";
	}else if (cm.getGamePoints() >= 360){
	zx6 ="#e#g����ȡ����#n#k";
	}else{
    zx6 ="#eδ�ﵽ����#n";
    }
    if(cm.getEventCount("����9") > 0){
	zx9 ="#e#b����ȡ����#k#n";
	}else if (cm.getGamePoints() >= 540){
	zx9 ="#e#g����ȡ����#n#k";
	}else{
    zx9 ="#eδ�ﵽ����#n";
    }
    if(cm.getEventCount("����12") > 0){
	zx12 ="#e#b����ȡ����#k#n";
	}else if (cm.getGamePoints() >= 720){
	zx12 ="#e#g����ȡ����#n#k";
	}else{
    zx12 ="#eδ�ﵽ����#n";
    }	
	if(cm.getEventCount("����13") > 0){
	zx13 ="#e#b����ȡ����#k#n";
	}else if (cm.getGamePoints() >= 780){
	zx13 ="#e#g����ȡ����#n#k";
	}else{
    zx13 ="#eδ�ﵽ����#n";
    }	
	if(mode == -1) {
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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n"+ eff +"�װ���#r#h ##k���ã���������ʱ�佱��ϵͳ:\r\n#r#L1#"+ eff +"����ʱ�佱�����#l\r\n\r\n   "+ eff +"#k�������ߣ� #r"+cm.getGamePoints()+"#k ����#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L6##b"+ eff +"[����]���� 180 ���ӽ���   (#kĿǰ״̬��"+ zx3 +")#l\r\n#L2##b"+ eff +"[����]���� 360 ���ӽ���   (#kĿǰ״̬��"+ zx6 +")#l\r\n#L3##b"+ eff +"[����]���� 540 ���ӽ���   (#kĿǰ״̬��"+ zx9 +")#l\r\n#L7##b"+ eff +"[����]���� 780 ���ӽ���   (#kĿǰ״̬��"+ zx13 +")#l");
		} else if (status == 1) {
		    if (cm.getSpace(2) > 3 && cm.getSpace(4) > 3){	
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n"+ eff +"�װ���#r#h ##k����,��������ʱ�佱��ϵͳ���:\r\n  ʹ�õ���: ��ǰ�ʺ�����ʱ�� \r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n"+ eff +"��ɫֻ��Ҫ����Ϸ��������.\r\n\r\n"+ eff +"#rע��ÿ�ֽ������ʺ��µ��κν�ɫ��ǰֻ�ܹ���ȡһ��.");
                    	cm.dispose();		
			} else if (selection == 2) {
			if (cm.getGamePoints() >= 360 && cm.getEventCount("����6") == 0) {
			    if(random > 9){
				cm.gainNX(2,200);
				}
				//cm.gainNX(2,3500);
			    cm.gainItem(2049303,1,1); //�߼�װ��ǿ������
			    cm.gainItem(2049407,1,1); //�߼�Ǳ�ܸ��Ӿ���
			    cm.setEventCount("����6");
    			cm.sendOk("����6Сʱ���� ��ȡ�ɹ���");
			    cm.worldSpouseMessage(0x20,"[���߽���] ��� "+ cm.getChar().getName() +" ��ȡ�� ����6Сʱ���� ϵͳ������(��)������Ʒ��");
			}else{
    			    cm.sendOk("#b��ȡʧ��.\r\n��ȷ�ϸ��ʺ�����ʱ��ﵽ6Сʱ.\r\n��ȷ�����б���������5�������.\r\n��ȷ�ϸ��ʺŽ����Ƿ��Ѿ���ȡ��.");
			}
    cm.dispose();
			} else if (selection == 3) {
			if (cm.getGamePoints() >= 540 && cm.getEventCount("����9") == 0) {
			    cm.gainItem(2049303,2,1); //�߼�װ��ǿ������
			    cm.gainItem(2049407,1,1); //�߼�Ǳ�ܸ��Ӿ���
			    cm.setEventCount("����9");
    			cm.sendOk("����9Сʱ���� ��ȡ�ɹ���");
			    cm.worldSpouseMessage(0x20,"[���߽���] ��� "+ cm.getChar().getName() +" ��ȡ�� ����9Сʱ���� ϵͳ������(��)������Ʒ��");
			}else{
    			    cm.sendOk("#b��ȡʧ��.\r\n��ȷ�ϸ��ʺ�����ʱ��ﵽ9Сʱ.\r\n��ȷ�����б���������5�������.\r\n��ȷ�ϸ��ʺŽ����Ƿ��Ѿ���ȡ��.");
			}
    cm.dispose();
			} else if (selection == 4) {
			if (cm.getGamePoints() >= 720 && cm.getEventCount("����12") == 0) {
			    cm.gainItem(2049303,5); //�߼�װ��ǿ������
			    cm.gainItem(2049407,1); //�߼�Ǳ�ܸ��Ӿ���
			    cm.setEventCount("����12");
    			cm.sendOk("����12Сʱ���� ��ȡ�ɹ���");
			    cm.worldSpouseMessage(0x20,"[���߽���] ��� "+ cm.getChar().getName() +" ��ȡ�� ����12Сʱ���� ϵͳ������(��)������Ʒ��");
			}else{
    			    cm.sendOk("#b��ȡʧ��.\r\n��ȷ�ϸ��ʺ�����ʱ��ﵽ12Сʱ.\r\n��ȷ�����б���������5�������.\r\n��ȷ�ϸ��ʺŽ����Ƿ��Ѿ���ȡ��.");
			}
    cm.dispose();
	        } else if (selection == 5) {
			if (cm.getGamePoints() >= 60 && cm.getEventCount("����1") == 0) {
			    if(random > 10){
				cm.gainNX(2,1000);
				}
				cm.gainItem(2049303,1); //�߼�װ��ǿ������
			    cm.gainItem(2049407,1); //�߼�Ǳ�ܸ��Ӿ���
			    cm.setEventCount("����1");
    			cm.sendOk("����1Сʱ���� ��ȡ�ɹ���");
			    cm.worldSpouseMessage(0x20,"[���߽���] ��� "+ cm.getChar().getName() +" ��ȡ�� ����1Сʱ���� ϵͳ������(��)������Ʒ��");
			}else{
    			    cm.sendOk("#b��ȡʧ��.\r\n��ȷ�ϸ��ʺ�����ʱ��ﵽ12Сʱ.\r\n��ȷ�����б���������5�������.\r\n��ȷ�ϸ��ʺŽ����Ƿ��Ѿ���ȡ��.");
			}
    cm.dispose();
	        } else if (selection == 6) {
			if (cm.getGamePoints() >= 180 && cm.getEventCount("����3") == 0) {
			    if(random > 9){
				cm.gainNX(2,200);
				}
				cm.gainItem(2049303,1,1); //�߼�װ��ǿ������
			    cm.gainItem(2049407,1,1); //�߼�Ǳ�ܸ��Ӿ���
			    cm.setEventCount("����3");
    			cm.sendOk("����3Сʱ���� ��ȡ�ɹ���");
			    cm.worldSpouseMessage(0x20,"[���߽���] ��� "+ cm.getChar().getName() +" ��ȡ�� ����3Сʱ���� ϵͳ������(��)������Ʒ��");
			}else{
    			    cm.sendOk("#b��ȡʧ��.\r\n��ȷ�ϸ��ʺ�����ʱ��ﵽ12Сʱ.\r\n��ȷ�����б���������5�������.\r\n��ȷ�ϸ��ʺŽ����Ƿ��Ѿ���ȡ��.");
			}
    cm.dispose();
	        } else if (selection == 7) {
			if (cm.getGamePoints() >= 780 && cm.getEventCount("����13") == 0) {
			    cm.gainItem(2049303,3,1); //�߼�װ��ǿ������
			    cm.gainItem(2049407,1,1); //�߼�Ǳ�ܸ��Ӿ���
				if(random > 9){
				cm.gainNX(1,200);//���
			    cm.gainItem(2049116,random1); //ǿ���������
			    }
			    cm.setEventCount("����13");
    			    cm.sendOk("����13Сʱ���� ��ȡ�ɹ���");
			    cm.worldSpouseMessage(0x20,"[���߽���] ��� "+ cm.getChar().getName() +" ��ȡ�� ����13Сʱ���� ϵͳ������(��)������Ʒ��");
			}else{
    			    cm.sendOk("#b��ȡʧ��.\r\n��ȷ�ϸ��ʺ�����ʱ��ﵽ15Сʱ.\r\n��ȷ�����б���������5�������.\r\n��ȷ�ϸ��ʺŽ����Ƿ��Ѿ���ȡ��.");
			}
    cm.dispose();
			}
			}else{
			cm.playerMessage(1,"��ȷ�����������������������3�����Ͽ�λ��");
			cm.dispose();
			}
	   }
      }
}