



var status = 0;
var item = 
Array(
//-------����-------
			

			Array(1032082,300,1), //ĩ������֮�Ͷ���			
			Array(1032083,300,1), //ĩ������֮�Ͷ���
			Array(1032084,300,1), //������֮�Ͷ���
			Array(1132038,300,1), //ĩ������֮������
			Array(1132039,300,1), //ĩ������֮������
			Array(1132040,300,1), //������֮������
			Array(1122083,300,1), //ĩ������֮������
			Array(1122084,300,1), //ĩ������֮������
			Array(1122085,300,1), //������֮������			
			Array(1302146,100,1), //���ֽ�
			Array(1302147,300,1), //��Ҷñ



			Array(1322089,300,1), //��Ҷ��
			Array(1322090,300,1), //��Ҷ��
			Array(1332119,300,1), //ĩ������֮�Ͷ̽�-��
			Array(1332120,300,1), //������֮�Ͷ̽�-��
			Array(1332124,300,1), //ĩ������֮�Ͷ̽�-��
			Array(1332125,300,1), //������֮�Ͷ̽�-��
			Array(1372077,300,1), //ĩ������֮�Ͷ���
			Array(1372078,300,1), //������֮�Ͷ���
			Array(1382098,300,1), //ĩ������֮�ͳ���
			Array(1382099,300,1), //������֮�ͳ���
			Array(1402089,300,1), //ĩ������֮��˫�ֽ�
			Array(1402090,300,1), //������֮��˫�ֽ�
			Array(1422062,300,1), //ĩ������֮��˫�ֶ���
			Array(1422063,300,1), //������֮��˫�ֶ���
			Array(1432080,300,1), //ĩ������֮��ǹ
			Array(1432081,300,1), //������֮��ǹ
			Array(1442110,300,1), //ĩ��ì
			Array(1442111,300,1), //����ì
			
			
			Array(1452105,300,1), //ĩ������֮�͹�
			Array(1452106,300,1), //������֮�͹�
			Array(1462090,300,1), //ĩ������֮����
			Array(1462091,300,1), //������֮����
			
			

			Array(1092082,300,1), //���������
			Array(1092083,300,1), //���������
			Array(1092084,300,1), //����������
		
			Array(1092079,300,1), //��������
			Array(1092078,300,1), //��·��
			Array(1092100,100,1), //��·��
	//-----�Դ�����
			Array(1302106,100,1), //���������
			Array(1302069,100,1), //����������
			Array(1002926,100,1), //������
			
		
			Array(1002743,150,1), //����ñ
			Array(1002744,150,1), //����ñ
			

			Array(1002745,130,1), //����ñ
			Array(1002746,130,1), //����ñ
			Array(1002742,100,1), //����ñ
			
			Array(1402071,200,1), //���������
			Array(1402153,200,1), //����������
			Array(1432151,250,1), //ʥ��������ʹ����(����)
			
			Array(1432153,100,1), //���ս�
			Array(1432150,100,1), //���ս�
			Array(1432152,100,1), //���ս�
			
	
			Array(1452043,50,1), //������

			Array(1452060,120,1), //��Ҷ3����

			Array(1402082,120,1), //�Ϲϵ���
			Array(1402060,120,1), //������ڤ��
			Array(1452037,120,1), //������ڤ��
			Array(1402052,80,1), //ʥ��������ʹ����(˫�ֽ�)
			

			//------ҩˮ------
	
			Array(1402045,218,1), //��ɫ��������
			Array(1432063,128,1), //��ɫ��������
			Array(1402049,115,1), //�齵�
			Array(1432062,118,1), //���񺣱�����
			Array(3010016,118,1), //��ɫ��������
			Array(1452047,118,1), //��ɫ��������
			Array(1402065,100,1), //��߷�����
			Array(1402066,100,1), //�Ƴ�����(��ɫ)
			Array(1402067,100,1), // �Ƴ�����(��ɫ)
			Array(1402051,3,1), //������ǧ
			Array(1402070,125,1), //������
			Array(1402150,105,1), //ħŮ�ķ�ɨ��
			Array(1452053,105,1), //��������
			Array(1402152,105,1), //������
			Array(1452150,105,1), //������ 
			Array(1402038,15,1), //ʥ��������
			Array(1382038,25,1), //ѩ����
			Array(1402061,25,1), //��������
			Array(3010124,50,1), //ɳĮ����1����
			Array(3010125,50,1), //ɳĮ����2����
			Array(3010126,20,1), //Ѫɫõ��
			Array(3010058,10,1), //����ĩ��
			Array(3010127,25,1), //¶ˮ����
			Array(3010129,1,1), //���ް�Ʒ����
			Array(3012002,15,1), //ԡͰ
			Array(3010073,15,1), //PB����
			Array(3012003,15,1), //��������

			Array(1402085,15,1), //�������
			Array(1402085,15,1), //�������
			Array(1432075,15,1), //ͬһ��ɡ��
			Array(1442104,15,1), //����
			Array(1452100,15,1), //ԡͰ
			Array(1472111,15,1), //PB����
			Array(1482073,15,1) //��������
);



var mhair = Array(30900, 30910);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getzb() >= 3) {
var str1 = "";	
           for (var i = 0; i < item.length; i++){
                   str1 += "#v"+item[i][0]+"#";
            }
				cm.sendYesNo("#b#r"+cm.mxdmz()+"ð�յ�#b,Ԫ���齱��[ÿ��1�λ���3Ԫ��]\r\n#d[�Դ�������ָ����ʢ�������������]#b.\r\n���н�Ʒ����#r[��ʵ,����ƭ,40%�н�]:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < item.length; i++){
                   str1 += "#v"+item[i][0]+"#";
            }
				cm.sendOk("#b#r"+cm.mxdmz()+"ð�յ�#b,Ԫ���齱��[ÿ��1�λ���3Ԫ��].\r\n���н�Ʒ����#r[��ʵ,����ƭ,20%����Դ�����]" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
			for(var i = 1;i<=5;i++){
			if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
			cm.sendOk("������Ӧ�������а������ճ�һ��");
			cm.dispose();
			return;
			}
			}
			var chance = Math.floor(Math.random()*450);
			var finalitem = Array();
			for(var i = 0 ;i<item.length;i++){
			if(item[i][1] >= chance){
			finalitem.push(item[i]);
			}
			}
			if(finalitem.length != 0){
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var Laba = finalitem[finalchance][2];
			if(ii.getInventoryType(itemId).getType() == 1){
			var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
			} else {
			var toDrop = new net.sf.odinms.client.Equip(itemId,0).copy();
			}
			net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,-1);
			if(Laba == 1){
			cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ӷ������ã����һ��ϲ��/���ɣ�����",toDrop, true).getBytes());
				
			cm.setzb(-3);
			cm.getPlayer().saveToDB(true);
			cm.sendOk("�ǳ���л�μӱ���ϵͳ������Ŭ������ȡ���������ɣ�");
			cm.dispose();}
			} else {							
			cm.setzb(-3);
			cm.getPlayer().saveToDB(true);
			cm.sendOk("��ӭ�μӱ���ϵͳ�����Ǹ�����û���н���!");
			cm.dispose();
			}
		}
	}
}
