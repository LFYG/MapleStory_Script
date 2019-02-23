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
		cm.sendYesNo("#r�����ֻ��죬�弶�ͺ���#k�������ȼ��ﵽ��Ӧ����ʱ�����Էֱ�����������ȡһ�ݾ����������ÿ����ɫֻ�ܲ���һ��\r\n#r(*) ��ȡǰ��ȷ������ÿ������5����λ. #k\r\n\r\n#b#L1#��ȡ120�����ִ����#l\r\n#L3#��ȡ150���弶�����#l#k\r\n#b#L4#��ȡ200�����ɴ����#l#k\r\n#b#L2#��ȡ250��Բ�������#l#k");
    } else if (status == 1) {
		switch(selection) {
			case 1:
				if (cm.getLevel() >= 120) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110001) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110001, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110001,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142263, 1),
							Array(1112918, 1, 3)  //�ع��ָ
							//Array(5062000, 10, 1)
						);
						for(var i=0; i<libaoList.length; i++) {
							if (libaoList[i][2]==null) {
								cm.gainItem(libaoList[i][0], libaoList[i][1]);
							} else {
								cm.gainItem(libaoList[i][0], libaoList[i][1], libaoList[i][2]);
							}
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						
						if (cm.getBossLogAcc("�������120")!=-1){
							text+="#b����ȯ#k - #rx10000#k\r\n";
							cm.gainNX(2, 10000);
							cm.setBossLogAcc("�������120",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110001);
						cm.sendOk('��ϲ�������ɹ���ȡ��120�����˴��������Ʒ����:\r\n'+text);
						cm.worldSpouseMessage(0x20, "�治��˼�飬��ҡ�" + cm.getChar().getName() + "���ﵽ120�����ڲ��񴦳ɹ���ȡ�����˴������");
						//cm.worldSpouseMessage(0x20, "������������� : ��ϲ " + cm.getChar().getName() + " �ɹ��������г�������ȡ���������.");
						cm.dispose();
					} else {
						cm.sendOk('���Ѿ���ȡ�������ˣ��ף�');
						cm.dispose();
					}
				} else {
					cm.sendOk('���ĵȼ���û�дﵽҪ�󣬼������Ͱɣ�');
					cm.dispose();
				}
			break;
			case 2:
				if (cm.getLevel() >= 250) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110002) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110002, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110002,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142100, 1),
							Array(2049137, 10),
							Array(2431725, 1),
							//Array(2431988,1),
							//Array(3994421,1),
							Array(5062000,150),
							Array(5062002,150),
							Array(5062500,100),
							Array(5062010, 50)
							//Array(4310036, 15000),
							//Array(2049750, 3)
						);
						for(var i=0; i<libaoList.length; i++) {
							cm.gainItem(libaoList[i][0], libaoList[i][1]);
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						
						if (cm.getBossLogAcc("�������250")!=-1){
							text+="#bVIP�����#k - #r����Ȩ#k\r\n";
							text+="#b���#k - #rx15000#k\r\n";
							cm.gainItem(2430865,1,3); //VIP�����
							cm.gainNX(15000);
							cm.setBossLogAcc("�������250",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110002);
						cm.sendOk('��ϲ�������ɹ���ȡ���������������Ʒ����:\r\n'+text);
						cm.worldSpouseMessage(0x20, "�治��˼�飬��ҡ�" + cm.getChar().getName() + "������ͻ�ƿ��飬�ﵽ�������ڲ��񴦳ɹ���ȡ�������������");
						//cm.worldSpouseMessage(0x20, "������������� : ��ϲ " + cm.getChar().getName() + " �ɹ��������г�������ȡ���������.");
						cm.dispose();
					} else {
						cm.sendOk('���Ѿ���ȡ�������ˣ��ף�');
						cm.dispose();
					}
				} else {
					cm.sendOk('���ĵȼ���û�дﵽҪ�󣬼������Ͱɣ�');
					cm.dispose();
				}
			break;
			case 3:
				if (cm.getLevel() >= 150) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110003) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110003, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110003,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142264, 1),
							//Array(1112918, 1, 3),  //�ع��ָ
							Array(5062000, 10, 1)
							//Array(5062002,10, 1) //�߼�ħ��
						);
						for(var i=0; i<libaoList.length; i++) {
							if (libaoList[i][2]==null) {
								cm.gainItem(libaoList[i][0], libaoList[i][1]);
							} else {
								cm.gainItem(libaoList[i][0], libaoList[i][1], libaoList[i][2]);
							}
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						
						if (cm.getBossLogAcc("�������150")!=-1){
							text+="#b��ȯ#k - #rx1000#k\r\n";
							cm.gainNX(1, 1000);
							cm.setBossLogAcc("�������150",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110003);
						cm.sendOk('��ϲ�������ɹ���ȡ���������������Ʒ����:\r\n'+text);
						cm.worldSpouseMessage(0x20, "�治��˼�飬��ҡ�" + cm.getChar().getName() + "���Ծ��˵��ٶȴﵽ150�����ڲ��񴦳ɹ���ȡ�˳弶�������");
						//cm.worldSpouseMessage(0x20, "������������� : ��ϲ " + cm.getChar().getName() + " �ɹ��������г�������ȡ���������.");
						cm.dispose();
					} else {
						cm.sendOk('���Ѿ���ȡ�������ˣ��ף�');
						cm.dispose();
					}
				} else {
					cm.sendOk('���ĵȼ���û�дﵽҪ�󣬼������Ͱɣ�');
					cm.dispose();
				}
			break;
			case 4:
				if (cm.getLevel() >= 200) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110004) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110004, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110004,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142265, 1),  //���������
							//Array(2431988,1),  //
							//Array(3994421,1),
							Array(5062000,10) //����ħ��
							//Array(5062002,10), //�߼�ħ��
							//Array(5062500,20) //��ʦħ��
							//Array(5062010, 5) //�ռ�ħ��
							//Array(4310036, 3000),
							//Array(2049750, 1)
						);
						for(var i=0; i<libaoList.length; i++) {
							cm.gainItem(libaoList[i][0], libaoList[i][1]);
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						//text+="#bVIP�����#k - #r����Ȩ#k\r\n";
						
						if (cm.getBossLogAcc("�������200")!=-1){
							text+="#b��ȯ#k - #rx1000#k\r\n";
							//cm.gainItem(2430865,1,3); //VIP�����
							cm.gainNX(1, 1000);
							cm.setBossLogAcc("�������200",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110004);
						cm.sendOk('��ϲ�������ɹ���ȡ���������������Ʒ����:\r\n'+text);
						cm.worldSpouseMessage(0x20, "�治��˼�飬��ҡ�" + cm.getChar().getName() + "���Ծ��˵��ٶȴﵽ200�����ڲ��񴦳ɹ���ȡ�˳弶�������");
						//cm.worldSpouseMessage(0x20, "������������� : ��ϲ " + cm.getChar().getName() + " �ɹ��������г�������ȡ���������.");
						cm.dispose();
					} else {
						cm.sendOk('���Ѿ���ȡ�������ˣ��ף�');
						cm.dispose();
					}
				} else {
					cm.sendOk('���ĵȼ���û�дﵽҪ�󣬼������Ͱɣ�');
					cm.dispose();
				}
			break;
			default:
				cm.sendOk("What's wrong with you?");
		}
		cm.dispose();
	}
}