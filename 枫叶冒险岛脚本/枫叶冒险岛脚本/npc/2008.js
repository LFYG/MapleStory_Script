/*
	���ܣ������볡������ʾ
	���ڣ�2013-11-23
	���ߣ����˰�
*/

var status = 0;
var text;
function start () {
	status = -1;
	action(1, 0, 0);
}

function action (mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}

		if (status == 0) {
            if (!cm.MissionStatus(cm.getPlayer().getId(), 10000, 0, 4)) {//�鿴����û
                cm.MissionMake(cm.getPlayer().getId(), 10000, 0, 0, 0, 0)
            }
            if (!cm.MissionStatus(cm.getPlayer().getId(), 10000, 0, 0) && cm.getLevel() <= 10) {//���û����ҽ�ɫ�ȼ�С�ڵ���10��
                cm.MissionFinish(cm.getPlayer().getId(), 10000);
				text = "#h0# ��ӭ����" + cm.getServerName() + "#k,��������˽�һ�±�����ɫ��\r\n\r\n";
				text += "�� ����Ϊ�¹ٷ�ģʽ\r\n";
				text += "�� �������ã�����10��  ���10��  ����5��\r\n";
				text += "�� ���˵���������ť(�̳ǰ�ť�Ա�),�ṩ���ֱ�ݷ���\r\n";
				text += "�� ����ȫְҵ,�����޸����ܡ�BOSS����ħ��.����.\r\n";
				text += "�� ÿ��ǩ�����������Լ�ħ���㶼�����������ٻ�ü�Ʒװ��\r\n";
				//text += "�� ����ת������,ÿ��ת���ɻ��ȫ����+5,ÿ�η����ɻ��ȫ����+100\r\n";
				text += "�� ���ַ¹ٷ����̸���Ȥζ������,������Ϸ����\r\n";
				text += "\r\n\r\n���ྫ��,�����ڴ�!";
				cm.sendNextS(text, 1);
            }
		} else if (status == 1) {
			cm.sendNext("Ϊ��������˳���ɳ�,����׼���������������:" + "\r\n\r\n#t3010145# �� 1\r\n#t2430241# �� 1");
		} else if (status == 2) {
			cm.gainItem(3010145, 1);	// ������ˮ����Ҷ����
			cm.gainItem(2430241, 1);	// �������
			cm.gainMeso(100000);
			cm.warp(50000, 0);
			//cm.useItem(2003519);
			Operate(cm.getJob());
			text = "����ֱ��ȥ������ţ����10��,��ʼ���ð��֮�ð�~ \r\n�����ظ������NPC��������Ҫʹ��#r@ea#k�⿨��\r\n#r����Ҫ�����Ļ����Ե��������ť�鿴���˵���";
			cm.sendOk(text);
			cm.dispose();
		}
	}
}




function Operate(job) {
    switch (job) {
        case 6001://��������ʹ
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)//����10��
            cm.gainItem(1222000, -1);//ɾ��ԭʼ����
            equip(1352600)//����������
            cm.changeJob(6500);
            cm.gainItem(2431305, 1);
            cm.sendY("���͸��� >>> ��������� һ�������Ը�����Ľ�ɫ�ȼ���ȡ��Ӧ�ĵ��ߣ�")
            break;
    }
}

function equip(itemId) {
    if (!cm.haveItem(itemId, 1, true, true)) {
        cm.gainItem(itemId, 1);
    }
    //������ұ�����û�������Ʒ,û�о͸����
    cm.gainItemAndEquip(itemId, -10);
}
