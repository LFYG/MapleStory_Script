importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendOk("�ڵ�ǰ���ڵ�Ƶ���п��Բμ�#b��ģʽ�����Զ����#k�������μ�����ģʽ�����ƶ�����Ӧ��Ƶ����\r\n#b#i3994115#����Ƶ��/50��70��/3��6��\r\n#b#i3994116#5Ƶ����10Ƶ��/50������/6��15��\r\n#b#i3994117#����ģʽ������2Ƶ��/120������/15��30��\r\n#b#i3994118#��ģʽ�ɹ���Ա����/180������/20��35��");
			cm.dispose();
			return;
		}
	}
}	