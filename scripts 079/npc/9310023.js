importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

function start() {
var ptyz = 10; //���ù��򵥼���Ҫ��Ԫ��
var gjyz = 10; //���ù��򵥼���Ҫ��Ԫ��


if (cm.getLevel() > 1 ) {  
    cm.sendSimple ("#b"+cm.mxdmz()+"ð�յ�,�����ۻ�����\r\n#k[�������ӻ���������][�������������л��]\r\n#dʣ��Ԫ��:#r" + cm.getzb() + "��\r\n��ϡ�����ӡ�\r\n#L12##v3010050#"+gjyz+"Ԫ��#l #L13##v3012003#"+gjyz+"Ԫ��#l #L14##v3010034#"+gjyz+"Ԫ��#l\r\n#L15##v3010035#"+gjyz+"Ԫ��#l#L16##v3010068#"+gjyz+"Ԫ��#l#L17##v3010069#"+gjyz+"Ԫ��#l\r\n#L18##v3010021#"+gjyz+"Ԫ��#l#L19##v3010002#"+gjyz+"Ԫ��#l#L20##v3010004#"+gjyz+"Ԫ��#l\r\n#L21##v3010005#"+gjyz+"Ԫ��#l#L22##v3010006#"+gjyz+"Ԫ��#l#L23##v3012001#"+gjyz+"Ԫ��#l\r\n#L24##v3012002#"+gjyz+"Ԫ��#l#L25##v3010046#"+gjyz+"Ԫ��#l#L26##v3010047#"+gjyz+"Ԫ��#l\r\n#L27##v3010041#"+gjyz+"Ԫ��#l#L28##v3010043#"+gjyz+"Ԫ��#l#L29##v3010051#"+gjyz+"Ԫ��#l\r\n#L30##v3010052#"+gjyz+"Ԫ��#l#L31##v3010044#"+gjyz+"Ԫ��#l#L32##v3010036#"+gjyz+"Ԫ��#l\r\n#L33##v3010019#"+gjyz+"Ԫ��#l#L34##v3010124#"+gjyz+"Ԫ��#l#L35##v3010125#"+gjyz+"Ԫ��#l\r\n#L36##v3010126#"+gjyz+"Ԫ��#l#L37##v3010127#"+gjyz+"Ԫ��#l#L38##v3010128#"+gjyz+"Ԫ��#l\r\n#L39##v3010129#"+gjyz+"Ԫ��#l#L40##v3010131#"+gjyz+"Ԫ��#l#L41##v3010132#"+gjyz+"Ԫ��#l\r\n#L42##v3010133#"+gjyz+"Ԫ��#l#L43##v3010137#"+gjyz+"Ԫ��#l#L44##v3010139#"+gjyz+"Ԫ��#l\r\n#L45##v3010149#"+gjyz+"Ԫ��#l#L46##v3010152#"+gjyz+"Ԫ��#l#L47##v3010112#"+gjyz+"Ԫ��#l");
    } else {
    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
    }
}
function action(mode, type, selection) {
var ptyz = 10; //���ù��򵥼���Ҫ��Ԫ��
var gjyz = 10; //���ù��򵥼���Ҫ��Ԫ��
cm.dispose();
if (selection == 0) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010007,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 1) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010010,1);//���񺣱�����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 2) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010008,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 3) { 
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010016,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 4) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010029,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 5) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010031,1);//�컷��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 6) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010030,1);//�ڻ���
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 7) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010031,1);//�컷��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010032,1);//�ƻ���
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 9) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010033,1);//�̻���
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 10) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010003,1);//��ɫʱ��ת��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 11) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010037,1);//�������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 12) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010050,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 13) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3012003,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 14) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010034,1);//�Ƴ�����(��ɫ)
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 15) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010035,1);//�Ƴ�����(��ɫ)
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 16) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010068,1);//¶ˮ����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 17) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010069,1);//��Ʒ�
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 18) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010021,1);//ůů��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 19) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010002,1);//��ɫʱ��ת��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 20) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010004,1);//����������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 21) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010005,1);//����������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 22) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010006,1);//��ɫʱ��ת��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 23) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3012001,1);//����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 24) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3012002,1);//ԡͰ
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 25) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010046,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 26) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010047,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 27) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010041,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 28) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010043,1);//ħŮ�ķ�ɨ��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 29) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010051,1);//ɳĮ����1����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 30) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010052,1);//ɳĮ����2����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 31) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010044,1);//ͬһ��ɡ��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}

} else if (selection == 32) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010036,1);//������ǧ
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 34) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010124,1);//����˹��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 35) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010125,1);//�ᱴ¡ս����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 36) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010126,1);//����ħ����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 37) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010127,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 38) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010128,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 39) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010129,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 40) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010131,1);//̰����è
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 41) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010132,1);//����è����     
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 42) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010133,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 43) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010137,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 44) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010139,1);//˽�ܿռ� 
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 45) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010149,1);//è�з� 
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 46) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010152,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 47) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010112,1);//�������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();}
} else if (selection == 33) {
	if(cm.getzb() >= gjyz) {
            cm.setzb(-gjyz); 
	cm.gainItem(3010019,1);//��˾�� 
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û���㹻��Ԫ��"); 
	cm.dispose();
}
}
}