
function start() {
	if (im.getPlayer().getCSPoints(1) >= 900000) {
	im.gainItem(2431673, -1);
	im.gainNX(1, -900000);
	im.gainPlayerPoints(1000000);
	im.gainItem(2049750, 1); //S��Ǳ�ܾ��� 80% 
	im.gainItem(2049402, 1); //����Ǳ�ܸ��Ӿ���
	im.gainItem(2048307, 1); //���⸽��Ǳ�ܸ��Ӿ���
	im.gainItem(4001715, 1); // 1E
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112164)).copy(); // ����һ��Equip��                    
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
	var toDrop = ii.randomizeStats(ii.getEquipById(1112276)).copy(); // ����һ��Equip��                    
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
	var toDrop = ii.randomizeStats(ii.getEquipById(1003719)).copy(); // ����һ��Equip��                    
	toDrop.setStr(15); //װ������
	toDrop.setDex(15); //װ������
	toDrop.setInt(15); //װ������
	toDrop.setLuk(15); //װ������
	toDrop.setMatk(25); //������
	toDrop.setWatk(25); //ħ������ 
	toDrop.setSpeed(15); //�ƶ��ٶ�
	toDrop.setJump(15); //��Ծ
	toDrop.setAcc(15); //
	toDrop.setOwner("������װ");
	im.addFromDrop(im.getC(), toDrop, false);
	im.gainItem(2431926, 1);// ���
	im.gainItem(2049122, 25);// ���
	im.gainItem(2049116, 25);// ���
	im.gainItem(2340000, 25);// ���
	im.sendOk("�ɹ���� #r�������#k һ����");
	im.channelMessage(0x18, "�����СǮ���桻" + " : " + "��� " + im.getChar().getName() + " ����ʱ300Ԫ�����л�� ��װ �Լ� ���� �Լ� 1�� ��ҡ�");
	im.dispose(); 
    } else {
	//im.sendOk("#b���СǮ��һ�°ɡ�����ֵδ�ﵽ300Ԫ���ߵ����30��#k\r\n\r\n\r\n#r#t1003719##v1003719# : ȫ����15��������ħ��25��\r\n#t1112276##v1112276# : ȫ����15��������ħ��15��\r\n#t1112164##v1112164# : ȫ����15��������ħ��15��\r\n\r\n- #e#d����BUFF�Լ���輼��#k#n:\r\n#s80000077# #s80000077# #s80000077# #s80000081# #s80000082# #s80000083# #s80001198# #s80001241#");
	im.sendOk("#b���СǮ��һ�°ɡ��������90��#k\r\n\r\n #v2049750# #v2049402# #v2048307#(#v2431926#:ȫְҵ150���������һ��)\r\n#v2049122#(25��)     #v2049116#(25��)     #v2340000#(25��)\r\n#r#t1003719##v1003719# : ȫ����15��������ħ��25��\r\n#t1112276##v1112276# : ȫ����15��������ħ��15��\r\n#t1112164##v1112164# : ȫ����15��������ħ��15��");
	im.dispose();
	}
}