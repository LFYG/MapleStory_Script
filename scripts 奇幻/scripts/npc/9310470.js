var status = 0;
//////////////////////////////////////////////////
//�������
var bosslogId = "�������1";
//�����ʼ��ȡʱ��
var startTime = "2015-4-17 21:00:00";
//���������ȡʱ��
var endTime = "2015-5-17 22:03:00";
//��ȡҪ����С�ȼ�
var minLevel = 0;
//////////////////////////////////////////////////
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
			var text = "��ã����Ǹ����������Ա��\r\n";
			text+="#b#L1#��ȡ�������#l\r\n";
			//text+="#L2#��ȡ��������#l\r\n";
			//text+="#L3#�˽�ʲô�ǽ�������#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			if (selection == 1) {
				if (cm.getPlayer().getLevel() < minLevel) {
					cm.sendOk("���ĵȼ�С��"+minLevel+"�����޷���ȡ����������Ŷ��");
					cm.dispose();
					return; 
				}
				
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var startTimestamp = java.sql.Timestamp.valueOf(startTime).getTime();
				var endTimestamp = java.sql.Timestamp.valueOf(endTime).getTime();
				//������ȡʱ��
				if (currentTimestamp < startTimestamp || currentTimestamp > endTimestamp) {
					cm.sendOk("��ȡʱ��Ϊ��#r"+startTime.substring(0, 16)+"#k��#r"+endTime.substring(0, 16)+"#k����ǰʱ�仹δ�����Ѿ���ʱ");
					cm.dispose();
					return ;
				}
				
				if (cm.getBossLogAcc(bosslogId)!=-1) {
					//д��BOSSLOG
					cm.setBossLogAcc(bosslogId, -2);
					//����������� ID,����
					var itemList = Array(
						Array(1102563, 1),
						Array(1122253, 1),
						Array(1132229, 1),
						Array(1012377, 1),
						Array(1052613, 1)
					);
					
					var str = "���ɹ���ȡ�˱�����������������������£�\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					if (cm.getBossLogAcc("�������")!=-1) {
						str+="#b���#kx#r1000#k��\r\n";
						cm.gainNX(1, 1000); //���1000
						cm.sendOk(str);
						cm.setBossLogAcc("�������", -2);
					}
					cm.dispose();
				} else {
					cm.sendOk("���Ѿ���ȡ���������");
					cm.dispose();
				}
			} else if (selection == 2) {
				cm.sendOk("��ǰû�н�������´ν�������ʱ��Ϊ��#r2015-2-10#k");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendSimple("��������Ҷ������Ҵ���һЩ����ÿ�ν���������߲������������Ե�����������ȡ��");
				status=-1;
				//cm.dispose();
			}
		}
   }
}