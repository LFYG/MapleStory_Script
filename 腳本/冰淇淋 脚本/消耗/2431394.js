function start() {
        im.gainItem(2431394, -1);
		im.gainItem(3800748, 1);
    var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // ����һ��Equip��                    
	toDrop.setStr(25); //װ������
	toDrop.setDex(25); //װ������
	toDrop.setInt(25); //װ������
	toDrop.setLuk(25); //װ������
	toDrop.setMatk(25); //������
	toDrop.setWatk(25); //ħ������ 
	toDrop.setAcc(25); //
	toDrop.setOwner("����Ů��");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("�ɹ����ȫ����+25��Ů����֤ѫ��һö+ָ����Ȩ����#v3800748#�� �뵽�г�����鿴Ů������˵����");
	im.dispose(); 
}
