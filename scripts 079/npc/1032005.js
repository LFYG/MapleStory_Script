var status = 0;
var cost;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 1 && mode == 0) {
		cm.sendNext("����������ﻹ�����Ư���ľ��㣬�������ȥ���϶��㳡����ӭ��ʱʹ�����ǵĳ��⳵����");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendNext("����~���������Ǽ����⳵����ͬ�ڴ���֮��������һ����а����Ǹ����ṩ���߼��ķ�����˳����е����ֻҪ֧��10000��ң����ǾͻὫ����ȫѸ�ٵ��͵�#b���϶��㳡#k�����ǵȼ�̫�ͽ�ȥ���Σ���Ƿ�Ҫ��ȥ�أ�");
	} else if (status == 1) {
		if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
			cm.sendYesNo("���϶��㳡��λ�ڽ������м���Թ������������24Сʱ�ŵ������Ƿ�Ҫ��10000��Һ�ȥ���϶��㳡��");
			
		} else {
			cm.sendYesNo("���϶��㳡��λ�ڽ������м���Թ������������24Сʱ�ŵ������Ƿ�Ҫ��10000��Һ�ȥ���϶��㳡��");
		
		}
	} else if (status == 2) {
		if (cm.getMeso() < cost) {
			cm.sendNext("�Բ�����Ľ�Ҳ���֧�����ѡ�");
			cm.dispose();
		} else {
			cm.gainMeso(-cost);
			cm.warp(105070001, 0);
			cm.dispose();
			}
		}
	}
}