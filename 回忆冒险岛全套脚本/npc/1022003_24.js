
var status = 0;
var icon="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
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
        	var text="���ã��������������140��150��װ������ѡ������Ҫ������װ�����ͣ�\r\n";
			text+="#b#L241#"+icon+" ����140������#l\r\n";
			text+="#b#L242#"+icon+" ����140������#l\r\n";
			text+="#b#L244#"+icon+" ����150������#l\r\n";
			text+="#b#L243#"+icon+" ����150������#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			cm.dispose();
			cm.openNpc(1022003, selection);
		}
	}
}