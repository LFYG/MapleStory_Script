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
            cm.sendYesNo("#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.\r\n���᣿�������ް�Ʒ���Ͷ�û�У����⻹��һ������Ҫô��.\r\n#b������#v3010070#[24СʱȨ]\r\n������Ҫ����10��#v4032226# 1000��#v4001126# 10��#v4001035#");
            }
            else if (status == 1) {
            if ((cm.haveItem(4032226, 10)) && (cm.haveItem(4001126, 1000)) && (cm.haveItem(4001035, 10)))  {
            cm.sendYesNo("#b��ϲ���Ѿ��ɹ��������,��ô�������Ǹ���ȡ��Ʒ��.");
            }
            else if (!cm.haveItem(4032226, 10)) {
            cm.sendOk("��û��#v4032226# x 10��");
            cm.dispose();
            }
            else if (!cm.haveItem(4001126, 1000)) {
            cm.sendOk("��û��#v4001126# x 1000��");
            cm.dispose();
            }
            else if (!cm.haveItem(4001035, 10)) {
            cm.sendOk("��û��#v4001035# x 10��");
            cm.dispose();
            }
            }
            else if (status == 2) {
            cm.gainItem(4032226, -10);
            cm.gainItem(4001126, -1000); 
            cm.gainItem(4001035, -10);  
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(3010070); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(3010070)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 ); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��					
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);                  
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"5Ԫð�յ�" + " : " + "��ϲ [" + cm.getPlayer().getName() + "] ��η�����������������񣬻�þ��ް�PB���ӽ���.",true).getBytes());
            cm.dispose();
            
}
}
}
