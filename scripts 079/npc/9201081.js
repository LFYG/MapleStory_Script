//�Դ������̵�
//5Ԫ���� QQ601143764
var status = 0;  	
var itemS =  	
Array(
			
			Array(1302134,30,"#r20#kԪ��"), //����ͷ��(��)
			Array(1302156,30,"#r20#kԪ��"), //����ͷ��(��)
			Array(1302157,30,"#r20#kԪ��"), //����ͷ��(��)
			Array(1402051,30,"#r30#kԪ��"), //����ͷ��(��)

			
			Array(1402153,30,"#r30#kԪ��"), //�ϱ�ֽͷ��
			Array(1402080,30,"#r30#kԪ��"), //��Ҷñ

			Array(1432151,20,"#r30#kԪ��"), //�±�ñ
			Array(1432150,20,"#r30#kԪ��"), //����ñ
			Array(1432153,30,"#r30#kԪ��"), //��Ҷ���
			Array(1432152,20,"#r30#kԪ��"), //����ͷ��
			Array(1402048,30,"#r30#kԪ��"), //����ھ���
			Array(1402082,30,"#r30#kԪ��"), //��������ñ
			Array(1452037,30,"#r30#kԪ��"), //��������ñ
			Array(1402060,30,"#r30#kԪ��"), //��������ñ
			Array(1452037,30,"#r30#kԪ��"), //���㺣����
			Array(1402052,30,"#r30#kԪ��"), //�����ھ���
			Array(1402045,30,"#r30#kԪ��"), //��������ñ
			Array(1432063,30,"#r30#kԪ��"), //��������ñ
			Array(1402049,30,"#r30#kԪ��"), //��������ñ
			Array(1432062,30,"#r30#kԪ��"), //����������
			//------����------
		
			
			Array(1452047,30,"#r30#kԪ��"), //���㶨������
			Array(1402065,30,"#r30#kԪ��"), //������ң����
			Array(1402066,30,"#r30#kԪ��"), //�����������
			Array(1402067,30,"#r30#kԪ��"), //����̽������
			Array(1402070,30,"#r30#kԪ��"), //���㸧������
			Array(1402150,30,"#r30#kԪ��"), //������������
			Array(1452053,30,"#r30#kԪ��"), //������ң����
			Array(1402152,30,"#r30#kԪ��"), //������������
			Array(1452150,30,"#r30#kԪ��"), //����̽������
			Array(1302106,30,"#r30#kԪ��"), //������������
			Array(1302069,30,"#r30#kԪ��"), //����֮��
			Array(1302149,30,"#r30#kԪ��"), //������ң����
			Array(1332113,30,"#r30#kԪ��"), //������ң����
			Array(1432084,30,"#r30#kԪ��"), //����̽������
			Array(1442113,30,"#r30#kԪ��"), //������������
			Array(1462093,30,"#r30#kԪ��"), //����֮��
			Array(1492080,30,"#r30#kԪ��"), //������ң����
			Array(1402099,30,"#r30#kԪ��"), //������ң����

			Array(1302158,30,"#r30#kԪ��"), //����ͷ��(��)
			Array(1092100,30,"#r40#kԪ��")
);                                              
var StringS;                                    
function start() {                              
	status = -1;                            
	action(1, 0, 0);                        
}                                               
                                                
function action(mode, type, selection) {        
	if (mode == -1) {                       
		cm.dispose();                   
	} else {                                
		if (status >= 0 && mode == 0) { 
			cm.dispose();           
			return;                 
		}                               
		if (mode == 1)                  
			status++;
		else
			status--;
		if (status == 0) {
				  cm.sendNext(""+cm.mxdmz()+"ð�յ����Դ������̳�\r\n#d[װ����������ӣ������ϸ�ĵȴ�]");   
		}else if (status == 1) {
				StringS = "����!����ǰʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k��#b ѡ�������Ʒ.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "##d >>>> ���߱ر�#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getzb() >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.setzb(-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("����ɹ�����鿴������")
				cm.dispose();
			}else{
				cm.sendOk("�Բ������Ԫ������");
				cm.dispose();
			}
		}
	}
}