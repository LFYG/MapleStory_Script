/*
	С��
*/

var status;
var reward = Array(
					Array(1062165, 1, 1),	 //ħ��ʦսʿ�̿�
					Array(1062166, 1, 1),	//ħ��ʦ��ά��̿�	
					Array(1062167, 1, 1),	//ħ��ʦ�����̿�	
					Array(1062168, 1, 1),   //ħ��ʦ�̿Ͷ̿�       
					Array(1062169, 1, 1),    //ħ��ʦ�����߶̿�   
					Array(1003797, 1, 1),	//	�߹�սʿͷ��
					Array(1003798, 1, 1),	//�߹�����ά��ñ
					Array(1003799, 1, 1),	//�߹���������ñ
					Array(1003800, 1, 1),	//�߹�̿���ñ
					Array(1003801, 1, 1),	//�߹�������ñ
					Array(1042254, 1, 1),	//ӥ��սʿ����
					Array(1042255, 1, 1),	//ӥ�۵�ά�泤��
					Array(1042256, 1, 1),	//ӥ����������
					Array(1042257, 1, 1),	//ӥ�۴̿ͳ���
					Array(1042258, 1, 1)	//ӥ������������
					);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		im.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
	}

	if (status == 0) {
		if (!im.haveSpace(2)) {
			im.sendOk("�������ռ䲻�㣬��������ٴ�");
			im.dispose();
			return;
		}
		var index = Math.floor(Math.random() * reward.length);
		var quantity = Math.floor(Math.random() * reward[index][2] + reward[index][1]);
		im.gainItem(2431926, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}