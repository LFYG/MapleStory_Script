function start() {
	if(im.haveItem(4033755)) {
		if(im.canHold(1122224)) {
			im.gainItem(4033755, -1);
			im.used(1);
			im.gainItem(1122224, 1);
		} else {
			im.sendOk("��ȷ���㱳�����㹻�Ŀռ䡣");
		}
	} else {
		im.sendOk("��ȷ���㱳������#t4033755#��");
	}
	im.dispose();
}