var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var vvv = "#fUI/UIWindow2.img/ValuePack/button/complete/0#";//��ȡ���

function start() {
	var text ="���.����ר��ͳ�Ʊ���������Ϣ��,���Ƿ��ϰ�����?\r\n";
	//text +="#L10#" + aaa + " #b#e��ֵ�������У��½����а񣬸߶��װ���ȣ�#n#l\r\n";
	//text +="#L7#" + aaa + " #r#e�������У�˭��У԰����ʵ������ң�#n#l\r\n";
	text +="#L8#" + aaa + " #r#e��֮��Уͨ��ʱ�����У�˭�Ǹ������ˣ�#n#l\r\n";
	text +="#L0#" + aaa + " #b�������У�˭��У԰�������������ǣ�#l\r\n";
	text +="#L1#" + aaa + " �������У�˭��У԰��ǿ��ļ��壩\r\n";
	text +="#L2#" + aaa + " ת�����У�˭��ת�����,���ϰ����𣿣�\r\n";
	text +="#L3#" + aaa + " ���¶������У�˭��У԰����ʵ����ң�\r\n";
	text +="#L9#" + aaa + " ʹ�÷������ͨ��#z4310081#Ϊ������������50GP";
	//text +="#L6#" + aaa + " ʹ�÷������ͨ��#z4310081#Ϊ������������50GP";
	cm.sendOk (text,2);    
}
function action(mode, type, selection) {
	cm.dispose();
	if  (selection == 0) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#ȫ����һ�������#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.rqMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 1) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#ȫ����һ����#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.guildMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}if (selection == 10) {
				    cm.dispose();
                    cm.openNpc(9040008,1);//���Ѱ�ͳ��
		}else if  (selection == 7) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#ȫ����һ�������#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.payMing(10);        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 8) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#ȫ����һ��������#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.studyMing(10);        
        	        cm.sendOkS(a,2);
			cm.dispose();
    	}else if  (selection == 2) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#ȫ����һת�����#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.paiMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 3) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112312/0/3#ȫ����һ��������#fEffect/ItemEff/1112312/0/3##n#k\r\n"; 
        	a+=cm.marriageMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 9) {
            if (cm.getPlayerStat("GID") < 1) {
                cm.sendOk("������˼��û�м���");
                cm.dispose();
            } else if (cm.haveItem(4310081, 1) == false) {
                cm.sendOk("��û��1��#z4310081#");
                cm.dispose();
            } else {
                cm.gainGP(50);
                cm.gainItem(4310081,-1)
                cm.sendOk("��ϲ��Ϊ����������50GP");
                cm.dispose();
    	}
    	}else if  (selection == 4) {
            if (cm.getChar().getId() != 56) {
                cm.sendOk("������˼�㲻�ǵ�һ�����");
                cm.dispose();
            } else if (cm.getBossLog("ת��",1) == 1) {
                cm.sendOk("���Ѿ������");
                cm.dispose();
            } else {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1142076); //VIPѫ��
                var toDrop = ii.randomizeStats(ii.getEquipById(1142076)).copy(); // ����һ��Equip��
                toDrop.setStr(1000); //װ������
                toDrop.setDex(1000); //װ������
                toDrop.setInt(1000); //װ������
                toDrop.setLuk(1000); //װ������
                toDrop.setMatk(1000); //������
                toDrop.setWatk(1000); //ħ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ��ʥ��
                cm.addHyPay(-100000, true);
                cm.setBossLog("ת��", 1);
                cm.sendOk("" + vvv + "\r\n" + bbb + " 100000ʥ����\r\n" + bbb + " #z1142076#��ȫ����+1000��");
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "��ת���������" + " : " + "[" + cm.getChar().getName() + "]��ȡ��ת����һ������"));
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "��ת���������" + " : " + "[" + cm.getChar().getName() + "]��ȡ��ת����һ������"));
                cm.dispose();
            }
    	}else if  (selection == 5) {
            if (cm.getChar().getId() != 45) {
                cm.sendOk("������˼�㲻�ǵڶ������");
                cm.dispose();
            } else if (cm.getBossLog("ת��",1) == 1) {
                cm.sendOk("���Ѿ������");
                cm.dispose();
            } else {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1142076); //VIPѫ��
                var toDrop = ii.randomizeStats(ii.getEquipById(1142076)).copy(); // ����һ��Equip��
                toDrop.setStr(500); //װ������
                toDrop.setDex(500); //װ������
                toDrop.setInt(500); //װ������
                toDrop.setLuk(500); //װ������
                toDrop.setMatk(500); //������
                toDrop.setWatk(500); //ħ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ��ʥ��
                cm.addHyPay(-50000, true);
                cm.setBossLog("ת��", 1);
                cm.sendOk("" + vvv + "\r\n" + bbb + " 50000ʥ����\r\n" + bbb + " #z1142076#��ȫ����+500��");
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "��ת���������" + " : " + "[" + cm.getChar().getName() + "]��ȡ��ת���ڶ�������"));
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "��ת���������" + " : " + "[" + cm.getChar().getName() + "]��ȡ��ת���ڶ�������"));
                cm.dispose();
            }
    	}else if  (selection == 6) {
            if (cm.getChar().getId() != 77 && cm.getChar().getId() != 208) {
                cm.sendOk("������˼�㲻�ǵ��������");
                cm.dispose();
            } else if (cm.getBossLog("ת��",1) == 1) {
                cm.sendOk("���Ѿ������");
                cm.dispose();
            } else {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1142076); //VIPѫ��
                var toDrop = ii.randomizeStats(ii.getEquipById(1142076)).copy(); // ����һ��Equip��
                toDrop.setStr(100); //װ������
                toDrop.setDex(100); //װ������
                toDrop.setInt(100); //װ������
                toDrop.setLuk(100); //װ������
                toDrop.setMatk(100); //������
                toDrop.setWatk(100); //ħ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ��ʥ��
                cm.addHyPay(-15000, true);
                cm.setBossLog("ת��", 1);
                cm.sendOk("" + vvv + "\r\n������������Ҳ��У���Ʒ/2\r\n" + bbb + " 15000ʥ����\r\n" + bbb + " #z1142076#��ȫ����+100��");
//cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "��ת���������" + " : " + "[" + cm.getChar().getName() + "]��ȡ��ת������������"));
//cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "��ת���������" + " : " + "[" + cm.getChar().getName() + "]��ȡ��ת������������"));
                cm.dispose();
            }
	}
}
