importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

function start() {
var ptyz = 10; //���ù��򵥼���Ҫ��Ԫ��
var gjyz = 10; //���ù��򵥼���Ҫ��Ԫ��


if (cm.getLevel() > 1 ) {  
    cm.sendSimple ("#b"+cm.mxdmz()+"ð�յ�,�����ۻ�����\r\n#k[�������ӻ���������][�������������л��]\r\n#dʣ��Ԫ��:#r" + cm.getzb() + "��\r\n��ϡ�����ӡ�\r\n#L12##v3010050#[�һ�]#l #L13##v3012003#[�һ�]#l #L14##v3010034#[�һ�]#l\r\n#L15##v3010035#[�һ�]#l#L16##v3010068#[�һ�]#l#L17##v3010069#[�һ�]#l\r\n#L18##v3010021#[�һ�]#l#L19##v3010002#[�һ�]#l#L20##v3010004#[�һ�]#l\r\n#L21##v3010005#[�һ�]#l#L22##v3010006#[�һ�]#l#L23##v3012001#[�һ�]#l\r\n#L24##v3012002#[�һ�]#l#L25##v3010046#[�һ�]#l#L26##v3010047#[�һ�]#l\r\n#L27##v3010041#[�һ�]#l#L28##v3010043#[�һ�]#l#L29##v3010051#[�һ�]#l\r\n#L30##v3010052#[�һ�]#l#L31##v3010044#[�һ�]#l#L32##v3010036#[�һ�]#l\r\n#L33##v3010019#[�һ�]#l#L34##v3010124#[�һ�]#l#L35##v3010125#[�һ�]#l\r\n#L36##v3010126#[�һ�]#l#L37##v3010127#[�һ�]#l#L38##v3010128#[�һ�]#l\r\n#L39##v3010129#[�һ�]#l#L40##v3010131#[�һ�]#l#L41##v3010132#[�һ�]#l\r\n#L42##v3010133#[�һ�]#l#L43##v3010137#[�һ�]#l#L44##v3010139#[�һ�]#l\r\n#L45##v3010149#[�һ�]#l#L46##v3010152#[�һ�]#l#L47##v3010112#[�һ�]#l");
    } else {
    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
    }
}
function action(mode, type, selection) {
var ptyz = 10; //���ù��򵥼���Ҫ��Ԫ��
var gjyz = 10; //���ù��򵥼���Ҫ��Ԫ��
cm.dispose();
if (selection == 0) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010007,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 1) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010010,1);//���񺣱�����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 2) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010008,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 3) { 
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010016,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 4) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010029,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 5) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010031,1);//�컷��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 6) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010030,1);//�ڻ���
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 7) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010031,1);//�컷��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010032,1);//�ƻ���
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 9) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010033,1);//�̻���
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 10) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010003,1);//��ɫʱ��ת��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 11) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010037,1);//�������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ����������ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 12) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010050,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 13) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3012003,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 14) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010034,1);//�Ƴ�����(��ɫ)
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 15) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010035,1);//�Ƴ�����(��ɫ)
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 16) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010068,1);//¶ˮ����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 17) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010069,1);//��Ʒ�
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 18) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010021,1);//ůů��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 19) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010002,1);//��ɫʱ��ת��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 20) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010004,1);//����������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 21) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010005,1);//����������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 22) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010006,1);//��ɫʱ��ת��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 23) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3012001,1);//����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 24) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3012002,1);//ԡͰ
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 25) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010046,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 26) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010047,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 27) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010041,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 28) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010043,1);//ħŮ�ķ�ɨ��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 29) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010051,1);//ɳĮ����1����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 30) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010052,1);//ɳĮ����2����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 31) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010044,1);//ͬһ��ɡ��
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}

} else if (selection == 32) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010036,1);//������ǧ
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 34) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010124,1);//����˹��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 35) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010125,1);//�ᱴ¡ս����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 36) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010126,1);//����ħ����
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 37) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010127,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 38) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010128,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 39) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010129,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 40) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010131,1);//̰����è
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 41) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010132,1);//����è����     
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 42) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010133,1);//������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 43) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010137,1);//��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 44) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010139,1);//˽�ܿռ� 
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 45) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010149,1);//è�з� 
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 46) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010152,1);//��ɫ��������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 47) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010112,1);//�������
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();}
} else if (selection == 33) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010019,1);//��˾�� 
         cm.sendOk("����ɹ���ף����Ϸ��죡 ������ʣ��Ԫ�� #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + cm.getPlayer().getName() +" ��ҳɹ�������ϡ�����ӣ����Ϊ��ף�أ�",true).getBytes());
        }else{
        cm.sendOk("��Ǹ��û��#v4031250#"); 
	cm.dispose();
}
}
}