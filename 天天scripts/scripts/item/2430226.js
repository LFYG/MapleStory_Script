function start() {
        im.gainItem(2430226, -1);
	var ii = var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1102630)).copy(); // ����һ��Equip��                    
	toDrop.setStr(50); //װ������
	toDrop.setDex(50); //װ������
	toDrop.setInt(50); //װ������
	toDrop.setLuk(50); //װ������
	toDrop.setMatk(50); //������
	toDrop.setWatk(50); //ħ������ 
	toDrop.setSpeed(50); //�ƶ��ٶ�
	toDrop.setJump(50); //��Ծ
	toDrop.setAcc(50); //
	toDrop.setOwner("������װ");
	im.addFromDrop(im.getC(), toDrop, false);
	im.channelMessage(0x18, "���ۼƳ�ֵ������" + " : " + "��� " + im.getChar().getName() + " ���������Ҷ�����л���� ����������ʹ һ��");
	im.sendOk("�ɹ���� #r����������ʹ#k һ����");
	im.dispose(); 
}