importPackage(net.sf.odinms.client);
var status = 0;

var name = "������ð�յ�";//��������F������

var web = "�ٷ���վ";//����������ҳ

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("�õģ�������Ҫ������ʱ��������.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
            if (status == 0) {
            cm.sendYesNo("#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.\r\n5Ԫ�õ��ɿ���Ϣ��ħ���ķ�ӡҪ�������.������ħ�������װ��Ҳ̫�����˰�~�ðɣ��ҾͰ��ҵĴ���֮���������������������������߸����.\r\n������Ҫ����1��#v1492012# 1��#v1432030# 1��#v1382060# 1��#v4002002#\r\n#b�����ɹ�����#v1132012#(ȫ��+1000)[30��Ȩ]");
            }
            else if (status == 1) {
            if ((cm.haveItem(1492012, 1)) && (cm.haveItem(1432030, 1)) && (cm.haveItem(1382060, 1)) && (cm.haveItem(4002002, 1)))  {
            cm.sendYesNo("#b��ϲ���Ѿ��ɹ��������,��ô�������Ǹ���ȡ��Ʒ��.");
            }
            else if (!cm.haveItem(1492012, 1)) {
            cm.sendOk("��û��#v1492012# x 1��");
            cm.dispose();
            }
            else if (!cm.haveItem(1432030, 1)) {
            cm.sendOk("��û��#v1432030# x 1��");
            cm.dispose();
            }
            else if (!cm.haveItem(1382060, 1)) {
            cm.sendOk("��û��#v1382060# x 1��");
            cm.dispose();
            }
            else if (!cm.haveItem(4002002, 1)) {
            cm.sendOk("��û��#v4002002# x 1��");
            cm.dispose();
            }
            }
            else if (status == 2) {
            cm.gainItem(1492012, -1);
            cm.gainItem(1432030, -1); 
            cm.gainItem(1382060, -1);  
            cm.gainItem(4002002, -1);                   
            var xnzhang = 1132012;//
var shxing = 1000; //����
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xnzhang); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(xnzhang)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 30); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(shxing);
toDrop.setDex(shxing);
toDrop.setInt(shxing);
toDrop.setLuk(shxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);

            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : " + "��ϲ [" + cm.getPlayer().getName() + "] ����������˷��ϵ�����.",true).getBytes());
            cm.dispose();
            
}
}
}
