var status = 0;
var typed=0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var xz = 1 + Math.floor(Math.random() * 49);
var xz1 = 1 + Math.floor(Math.random() * 29);
var xz2 = 1 + Math.floor(Math.random() * 19);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
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
        if (cm.getPlayer().getMapId() == 101000005) {
		    cm.setEventCount("��ħ");
		    cm.warp(910000000);
		if (cm.getChar().getLevel() < 200) {
			cm.gainGachaponItem(2431174, xz, "[�ճ�]��ս�ڰ���", 3);
			cm.playerMessage(1,"��� "+ xz +" ������ѫ��");
 } else if (cm.getChar().getLevel() > 200 && cm.getChar().getLevel() < 240) {
			cm.gainGachaponItem(2432586, xz1, "[�ճ�]��ս�ڰ���", 3);
			cm.playerMessage(1,"��� "+ xz1 +" ��ʧȥ������ѫ��");
 } else if (cm.getChar().getLevel() >= 240) {
			cm.gainGachaponItem(2432602, xz2, "[�ճ�]��ս�ڰ���", 3);
			cm.playerMessage(1,"��� "+ xz2 +" ������������ѫ��");
 }
            cm.gainItem(5064300,1);//�����������
		    cm.gainPlayerEnergy(5);
			cm.worldSpouseMessage(0x20,"[�ճ��] ��� "+ cm.getChar().getName() +" ����ս�ڰ����л��ܺڰ���� 5 ���Ծ������");
			cm.dispose();
		} else {
		var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã������Ǳ���Ȥζ����.��ȤҲ�в���Ľ�����:\r\n";
        selStr += "#L2##b����֮��У����������ѧ����#l\r\n"
        selStr += "#L10##b�����﹫԰���������޹�԰(�Ƽ�30-250��)#l\r\n"
		if (cm.getPlayer().getGMLevel() >= 6) {
        selStr += "#L5##b��а����ħ���Կ����еĺڰ���#l\r\n"
		}
        selStr += "#L1##b����Ӹ�������˹�������ѣ���������.#l\r\n"
        //selStr += "#L3##b�����⸱������������-�ս�����#l\r\n"
        selStr += "#L4##b�����㸱�����������뱦��#l\r\n"
		//selStr += "#L11##b�����㸱��������ӡ��С��#l\r\n"
        selStr += "#L8##b�����㸱���������ռ��#l\r\n"
        selStr += "#L6##b��ʱ���ѷ졿��Ԫ����#l\r\n"
		cm.sendSimple(selStr);
		}
		} else if (status == 1) {
			if (selection == 1) {
                    cm.dispose();
		    cm.warp(262030000);
						cm.dispose();
			//cm.sendOk("��������������.���ڴ���");
			}
			if (selection == 2) {
                    cm.dispose();
		    cm.warp(744000000);
			}
			if (selection == 3) {
                    cm.dispose();
		    cm.openNpc(2085001);
			}
			if (selection == 4) {
                    cm.dispose();
		    cm.openNpc(9000008);
			}
			if (selection == 5) {
            cm.dispose();
			//cm.sendOk("���ڳﱸ��");
		    cm.openNpc(9000178,5);
			}
			if (selection == 6) {
                    cm.dispose();	
		    cm.warp(940020000);
			}
			if (selection == 7) {
                    cm.dispose();
		    cm.openNpc(9000178,6);
			}
			if (selection == 8) {
                    cm.dispose();
		    cm.openNpc(9000178,8);
			}
			if (selection == 9) {
                    cm.dispose();
		    cm.openNpc(2094000);
			}
			if (selection == 10) {
                    cm.dispose();
		    cm.openNpc(9071003);
			}
			if (selection == 11) {
                    cm.dispose();
		    cm.warp(910025000);
			}
		}
	}
}