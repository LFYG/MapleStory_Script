function start() {
        if (im.getEventCount("���þ�10000") == 0) {
         im.gainItem(2431743, -1);
	 im.setEventCount("���þ�10000");
         im.gainNX(2,10000);
         im.sendOk("��ϲ����� #r10000#k ���þ�");
         im.dispose(); 
        } else {
	im.gainItem(2431743, -1);
        im.sendOk("��Ǹ�����ʺ��Ѿ�ʹ�ù����޷��ٴ�ʹ��.");
        im.dispose();
    }
}