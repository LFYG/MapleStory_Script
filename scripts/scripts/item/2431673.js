function start() {
	if (im.getPlayer().getCSPoints(1) >= 3000000 && im.getPlayer().getRMB() >= 8000) {
	im.gainItem(2431673, -1);
	im.gainNX(1, -3000000);
	im.gainPlayerPoints(100);
	im.gainItem(5062002, 10); //��ɫ����
	//im.gainItem(5062002, 10); //��ɫ����
	//im.gainItem(5062002, 10); //��ɫ����
	//im.gainItem(5062002, 10); //��ɫ����
	//im.gainItem(5062002, 10); //��ɫ����
	//im.gainItem(5062002, 10); //��ɫ����
	im.gainItem(2049750, 1); //S��Ǳ�ܾ��� 80% 
	im.gainItem(2049402, 1); //����Ǳ�ܸ��Ӿ���
	im.gainItem(2048307, 1); //���⸽��Ǳ�ܸ��Ӿ���
	im.gainItem(5062002, 1); // 10E
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142796)).copy(); // ����һ��Equip��                    
	toDrop.setStr(15); //װ������
	toDrop.setDex(15); //װ������
	toDrop.setInt(15); //װ������
	toDrop.setLuk(15); //װ������
	toDrop.setMatk(15); //������
	toDrop.setWatk(15); //ħ������ 
	toDrop.setAcc(15); //
	toDrop.setOwner("������װ");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // ����һ��Equip��                    
	toDrop.setStr(15); //װ������
	toDrop.setDex(15); //װ������
	toDrop.setInt(15); //װ������
	toDrop.setLuk(15); //װ������
	toDrop.setMatk(15); //������
	toDrop.setWatk(15); //ħ������ 
	toDrop.setAcc(15); //
	toDrop.setOwner("������װ");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1332225)).copy(); // ����һ��Equip��                    
	toDrop.setStr(30); //װ������
	toDrop.setDex(30); //װ������
	toDrop.setInt(30); //װ������
	toDrop.setLuk(30); //װ������
	toDrop.setMatk(50); //������
	toDrop.setWatk(50); //ħ������ 
	toDrop.setSpeed(30); //�ƶ��ٶ�
	toDrop.setJump(30); //��Ծ
	toDrop.setAcc(30); //
	toDrop.setOwner("������װ");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("�ɹ���� #r�������#k һ����");
	im.channelMessage(0x18, "�����СǮ���桻" + " : " + "��� " + im.getChar().getName() + " ����ʱ8000Ԫ�����л�� ��װ �Լ� ���� �Լ� 10�� ��ҡ�");
	im.dispose(); 
    } else {
	//im.sendOk("#b���СǮ��һ�°ɡ�����ֵδ�ﵽ8000Ԫ���ߵ����300��#k\r\n\r\n#v3994417# #v3994418# #v3994419# #v3994420# #v3994421# #v3994422# #v2049750# #v2049402# #v2048307#\r\n#r#t1003719##v1003719# : ȫ����30��������ħ��50��\r\n#t1112276##v1112276# : ȫ����15��������ħ��15��\r\n#t1112164##v1112164# : ȫ����15��������ħ��15��\r\n\r\n- #e#d����BUFF�Լ���輼��#k#n:\r\n#s80000077# #s80000077# #s80000077# #s80000081# #s80000082# #s80000083# #s80001198# #s80001241#");
	im.sendOk("#b���СǮ��һ�°ɡ�����ֵδ�ﵽ8000Ԫ���ߵ����300��#k\r\n\r\n#v5062002# #v5062002# #v5062002# #v5062002# #v5062002# #v5062002# #v2049750# #v2049402# #v2048307#\r\n#r#t1332225##v1332225# : ȫ����30��������ħ��50��\r\n#t1142574##v1142574# : ȫ����15��������ħ��15��\r\n#t1142796##v1142796# : ȫ����15��������ħ��15��");
	im.dispose();
	}
}