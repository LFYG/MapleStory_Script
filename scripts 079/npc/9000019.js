importPackage(net.sf.odinms.client);
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("Ok, talk to me when you're sure you want to be #bReborn#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
            if (status == 0) {
            cm.sendYesNo("#r"+cm.mxdmz()+"ð�յ�#k,��������ÿ�ܽ�ͳ�Ƽ���GP����ߵļ���ȫԱ����ù���Ա�ͳ��Ľ���.\r\n#b��������#r����������200��#k\r\n������Ҫ���߸�3�� #v4002002# #v4031549# #v4001035# #v4031344#\r\n������Ҫ����Ҫͨ�����񸱱�,��������BOSS���.");
            }
            else if (status == 1) {
	    if (cm.getChar().getGuildId() == 0) {
	    cm.sendOk("#b�Բ���,��û�м���!");
	    cm.dispose();
	    }
            else if ((cm.haveItem(4002002, 3)) && (cm.haveItem(4031549, 3)) && (cm.haveItem(4001035, 3)) && (cm.haveItem(4031344, 3)))  {
            cm.sendYesNo("#b��ϲ���Ѿ��ɹ��������,��ô�������Ǹ���ȡ��Ʒ��.");
            }
            else if (!cm.haveItem(4002002, 3)) {
	    cm.sendOk("#b�Բ���,���ĵ��߲���.");
            cm.dispose();
            }
            else if (!cm.haveItem(4031549, 3)) {
	    cm.sendOk("#b�Բ���,���ĵ��߲���.");
            cm.dispose();
            }
            else if (!cm.haveItem(4001035, 3)) {
	    cm.sendOk("#b�Բ���,���ĵ��߲���.");
            cm.dispose();
            }
            else if (!cm.haveItem(4031344, 3)) {
	    cm.sendOk("#b�Բ���,���ĵ��߲���.");
            cm.dispose();  
            }
            }
            else if (status == 2) {
            cm.gainItem(4002002, -3);
            cm.gainItem(4031549, -3); 
            cm.gainItem(4001035, -3);
            cm.gainItem(4031344, -3); 
	    cm.gainGP(200);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : " + "��ϲ [" + cm.getPlayer().getName() + "] ��η������������������Ϊ������200������.",true).getBytes());
            cm.dispose();
            
}
}
}
