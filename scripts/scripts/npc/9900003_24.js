
var status = 0;

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
        	var text="���ã������������������װ������ѡ������Ҫ������װ�����ͣ�\r\n";
			text+="#b#L259#����S������������#l\r\n";
			text+="#b#L258#�����桤����ͼ��#l\r\n";
			text+="#b#L250#����100������<10�����ɫ>#l\r\n";
			text+="#b#L252#����120������<���鷨ʦ>#l\r\n";
			text+="#b#L253#����120������<���鷨ʦ>#l\r\n";
			text+="#b#L256#����130������<�ʼ�>#l\r\n";
			text+="#b#L257#����130������<�ʼ�>#l\r\n";
			text+="#b#L246#����130������<����>#l\r\n";
			text+="#b#L245#����130������<����>#l\r\n";
			text+="#b#L254#����130������<����>#l\r\n";
			text+="#b#L255#����130������<����>#l\r\n";
			text+="#b#L248#����135������<��������>#l\r\n";
			text+="#b#L241#����140������<ʨ�ġ���β��ӥ����ѻ����ݡ����>#l\r\n";
			text+="#b#L242#����140������<ʨ�ġ���β��ӥ����ѻ�����>#l\r\n";
			text+="#b#L251#����140������<����>#l\r\n";
			text+="#b#L249#����145������<���>#l\r\n";
			text+="#b#L247#����145������<�޽�>#l\r\n";
			text+="#b#L244#����150������<�߹�ӥ�ۡ�ħ��ʦ>#l\r\n";text+="#b#L243#����150������<������>#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			cm.dispose();
			cm.openNpc(9900003, selection);
		}
	}
}