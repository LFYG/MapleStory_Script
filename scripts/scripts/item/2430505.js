function start() {
    im.gainItem(2430505, -1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112670)).copy(); // ����һ��Equip��                    
	toDrop.setEnhance(30); //
	//var timeStamp = java.lang.System.currentTimeMillis();
	//var expirationDate = timeStamp+30*86400*1000;
	//toDrop.setExpiration(expirationDate);
	toDrop.setOwner("Chinað�յ�");
	im.addFromDrop(im.getC(), toDrop, false);
    im.sendOk("��ϲ����� #r����Ա�ͳ�������#k ��");
	im.worldSpouseMessage(0x20,"[��������]����� "+ im.getChar().getName() +" ����ɱ������Chinað�յ�,Ta�����г����һ����˭�����ˣ�");
	im.dispose(); 
}
