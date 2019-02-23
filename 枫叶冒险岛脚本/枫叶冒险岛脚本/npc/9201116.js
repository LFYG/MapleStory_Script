var status = 0;
//////////////////////////////////////////////////
//�������
var bosslogId = "20141227�������1";
//�����ʼ��ȡʱ��
var startTime = "2014-12-27 20:30:00";
//���������ȡʱ��
var endTime = "2014-12-27 23:00:00";
//��ȡҪ����С�ȼ�
var minLevel = 180;
//��Ҫ����ʱ��
var minOnlineTime = 240;
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
			text+="#L2#��ȡ��������#l\r\n";
			text+="#L3#�˽�ʲô�ǽ�������#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			if (selection == 1) {
				if (cm.getPlayer().getLevel() < minLevel) {
					cm.sendOk("���ĵȼ�С��#r"+minLevel+"#k�����޷���ȡ����������Ŷ��");
					cm.dispose();
					return; 
				}
				if (cm.getPlayer().getTodayOnlineTime() < minOnlineTime) {
					cm.sendOk("����ʱ��С��#r"+minOnlineTime+"#k���ӣ��޷���ȡ����������Ŷ��");
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
						Array(5062000, 20),
						Array(5062002, 20),
						Array(5062500, 20),
						Array(2431741, 5)
					);
					var str = "���ɹ���ȡ�˲������������������£�\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					cm.sendOk(str);
					cm.dispose();
				} else {
					cm.sendOk("���Ѿ���ȡ���������");
					cm.dispose();
				}
			} else if (selection == 2) {
				var giftBosslogId = '�������20150101';
				if (cm.getBossLogAcc(giftBosslogId)!=-1) {
					
					if (cm.getPlayer().getLevel() < minLevel) {
						cm.sendOk("���ĵȼ�С��#r"+minLevel+"#k�����޷���ȡ����������Ŷ��");
						cm.dispose();
						return; 
					}
					if (cm.getPlayer().getTodayOnlineTime() < minOnlineTime) {
						cm.sendOk("����ʱ��С��#r"+minOnlineTime+"#k���ӣ��޷���ȡ����������Ŷ��");
						cm.dispose();
						return; 
					}
					//д��BOSSLOG
					cm.setBossLogAcc(giftBosslogId, -2);
					var itemList = Array(
						Array(5062000, 10),
						Array(5062002, 10),
						Array(5062500, 10),
						Array(2431741, 5)
					);
					var str = "���ɹ���ȡ�˽������������������£�\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					cm.sendOk(str);
					cm.dispose();
				} else {
					cm.sendOk("���Ѿ��������ˣ�");
					cm.dispose();
				}
			} else if (selection == 3) {
				cm.sendSimple("��������Ҷ������Ҵ���һЩ����ÿ�ν���������߲������������Ե�����������ȡ��");
				status=-1;
				//cm.dispose();
			}
		}
   }
}