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
            cm.sendYesNo("#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.\r\n�����ĸ����������������Ƴ����������������ķ�������������ô���������Ϸǳ��ѵ�Ŷ.\r\n������Ҫ����1��#v1132012# 1��#v1122000# 1��#v1002357# 2��#v4002002# \r\n5��#v2340000#\r\n#b�����ɹ�����#v1132013#(ȫ��+2000)[7��Ȩ]");
            }
            else if (status == 1) {
            if ((cm.haveItem(1132012, 1)) && (cm.haveItem(1122000, 1)) && (cm.haveItem(1002357, 1)) && (cm.haveItem(2340000, 1)) && (cm.haveItem(4002002, 2)))  {
            cm.sendYesNo("#b��ϲ���Ѿ��ɹ��������,��ô�������Ǹ���ȡ��Ʒ��.");
            }
            else if (!cm.haveItem(1132012, 1)) {
            cm.sendOk("��û��#v1132012# x 1��");
            cm.dispose();
            }
            else if (!cm.haveItem(1122000, 1)) {
            cm.sendOk("��û��#v2340000# x 1��");
            cm.dispose();
            }
            else if (!cm.haveItem(1002357, 1)) {
            cm.sendOk("��û��#v1382060# x 1��");
            cm.dispose();
            }
            else if (!cm.haveItem(2340000, 5)) {
            cm.sendOk("��û��#v2340000# x 5��");
            cm.dispose();
            }
            else if (!cm.haveItem(4002002, 2)) {
            cm.sendOk("��û��#v4002002# x 2��");
            cm.dispose();
            }
            }
            else if (status == 2) {
            cm.gainItem(1132012, -1);
            cm.gainItem(1122000, -1); 
            cm.gainItem(1002357, -1); 
            cm.gainItem(2340000, -5);   
            cm.gainItem(4002002, -2);                   
                        var xnzhang = 1132013;//
var shxing = 2000; //����
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xnzhang); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(xnzhang)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 7); //ʱ��
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
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"����ϵͳ" + " : " + "��ϲ [" + cm.getPlayer().getName() + "] ���ڽ����ϵ���������Ϊ[�����]����������.����̫�����ˣ�������ҿ���ף������~~",true).getBytes());
            cm.dispose();
            
}
}
}
