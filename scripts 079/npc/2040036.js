importPackage(net.sf.odinms.client);
var status = 0;
//ֱ�ӹ�����Ҫ��Ԫ��

var v1 = 00;//��VIP1��Ҫ��Ԫ��
var v2 = 30;//��VIP2��Ҫ��Ԫ��
var v3 = 70;//��VIP3��Ҫ��Ԫ��
var v4 = 120;//��VIP4��Ҫ��Ԫ��
var v5 = 180;//��VIP5��Ҫ��Ԫ��
var v6 = 240;//��VIP6��Ҫ��Ԫ��
var v7 = 320;//��VIP7��Ҫ��Ԫ��
var v8 = 400;//��VIP8��Ҫ��Ԫ��

//������Ҫ

var v2v3 = 40;//2-3
var v3v4 = 50;//3-4
var v4v5 = 60;//4-5
var v5v6 = 60;//5-6
var v6v7 = 80;//6-7
var v7v8 = 80;//7-8


//���|10E��Ʊ|������|ѫ������|�����׹10��,����|���Ե�|GM��|�ƽ�����|���齱��
var libao1 = Array(100000,1,1000,500,100,100,0,5,0);	
var libao2 = Array(1000000,3,5000,1000,300,1000,10,5,2);
var libao3 = Array(3000000,5,10000,1500,600,3000,15,10,3);
var libao4 = Array(4000000,8,20000,2000,1000,4000,20,15,5);
var libao5 = Array(5000000,12,30000,2500,1200,5000,25,20,6);
var libao6 = Array(6000000,15,40000,3000,1500,6000,30,30,7);
var libao7 = Array(8000000,18,50000,4000,1800,7000,35,35,8);
var libao8 = Array(10000000,20,60000,5000,2000,8000,40,40,10);


//����������������������ΪVIP��ͼ����,�������Ҫ���õ�ͼID
var vip1map = 209000000;
var vip2map = 229020000;
var vip3map = 229020100;
var vip4map = 229020200;
var vip5map = 229020300;
var vip6map = 229020400;

var vip7map = 209000006;
var vip8map = 209000007;




//����������������������Ϊ���ʣ���ң�����,�������Ҫ��������;
var GZ_Player_money = 1000000;
var GZ_V1_money = 100000000;
var GZ_V2_money = 300000000;
var GZ_V3_money = 500000000;
var GZ_V4_money = 800000000;
var GZ_V5_money = 1200000000;
var GZ_V6_money = 1500000000;
var GZ_V7_money = 1800000000;
var GZ_V8_money = 2000000000;
//����������������������Ϊ���ʣ����ߣ�����,�������Ҫ��������; 
var GZ_Player_item = Array(4002002,0);   //���÷��� ֻ����� Aarray(����ID,����);
var GZ_V1_item = Array(4002002,0);       //����Ϊ0 ��ʾ����.
var GZ_V2_item = Array(4002002,0);
var GZ_V3_item = Array(4002002,0);
var GZ_V4_item = Array(4002002,0);
var GZ_V5_item = Array(4002002,0);
var GZ_V6_item = Array(4002002,0);
var GZ_V7_item = Array(4002002,0);
var GZ_V8_item = Array(4002002,0);
//����������������������Ϊ���ʣ�����ȯ������,�������Ҫ��������;

var GZ_Player_Nx = 2000;
var GZ_V1_Nx = 5000;
var GZ_V2_Nx = 8000;
var GZ_V3_Nx = 10000;
var GZ_V4_Nx = 15000;
var GZ_V5_Nx = 20000;
var GZ_V6_Nx = 30000;
var GZ_V7_Nx = 40000;
var GZ_V8_Nx = 50000;
//����������������������Ϊ���ʣ����ֱң�����,�������Ҫ��������;

var GZ_Player_zb = 0;
var GZ_V1_zb = 0;
var GZ_V2_zb = 1;
var GZ_V3_zb = 2;
var GZ_V4_zb = 3;
var GZ_V5_zb = 4;
var GZ_V6_zb = 5;
//////////////////////////////////////////////////////////

//==============�����ǲ�������======================


var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/basic#";//"+ttt3+"//����3
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var name = "5Ԫð�յ�";//��������F������
importPackage(net.sf.odinms.client);
function start() { 
status = -1; 
action(1, 0, 0); 
} 
function action(mode, type, selection) { 
if (mode == -1) { 
cm.dispose(); 
} else { 
if (status >= 0 && mode == 0) { 
cm.sendOk("#d�õ�,�´�������!"); 
cm.dispose(); 
return;                     
} 
if (mode == 1) { 
status++; 
} else { 
status--; 
} 


if (status == 0) { 
//����
if(cm.getChar().getVip() <= 0){
var vipstr = ""+ttt6+" ��ͨ���";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";	
}else if(cm.getChar().getVip() == 6){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";	
}else if(cm.getChar().getVip() == 7){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";				
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}

//ѡ��

var textz = "#r"+cm.mxdmz()+"ð�յ�#k,��Աϵͳ.\r\n#b  ��Ա�ȼ�:#r"+vipstr+"  #bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n\r\n";

textz += "#L2#"+ttt+" #b Vip�� #k#b"+ttt3+"#l";

textz += "#L3#"+ttt+" #b "+cm.mxdmz()+"Vip�� #k#b[#r"+v2+"#n#b Ԫ��]#l\r\n";

textz += "#L4#"+ttt+" #b "+cm.mxdmz()+"Vip�� #k#b[#r"+v3+" #n#bԪ��]#l";

textz += "#L5#"+ttt+" #b "+cm.mxdmz()+"Vip�� #k#b[#r"+v4+"#n#bԪ��]#l\r\n";

textz += "#L6#"+ttt+" #b "+cm.mxdmz()+"Vip�� #k#b[#r"+v5+"#n#bԪ��]#l";

textz += "#L7#"+ttt+" #b "+cm.mxdmz()+"Vip�� #k#b[#r"+v6+"#n#bԪ��]#l\r\n\r\n";

//textz += "#L8#"+ttt+" ����#r ��Ա�� #k#b[#r"+v7+"#n#bԪ��]#l";

//textz += "#L9#"+ttt+" ����#r ��Ա�� #k#b[#r"+v8+"#n#bԪ��]#l\r\n\r\n";

textz += "#L100#"+ttt+" ����#r#k#b[#r��Ա#n#b,��Ȼ����]#l";

textz += "#L101#"+ttt+" ��ȡ#r#k#b[#r��Ա����#n#b]#l\r\n\r\n";

textz += "#L17#"+ttt2+" �鿴#k#b>>>>[#r��Ա˵��#n#b]#l  ";

textz += "#L16#"+ttt2+" ��ȡ#k#b>>>>[#r�سɾ���#n#b]#l\r\n";

textz += "#L18#"+ttt2+" ��ȡ#k#b>>>>[#r�������#n#b]#l  ";

textz += "#L19#"+ttt2+" ʹ��#k#b>>>>[#r��Ա����#n#b]#l\r\n";

//textz += "#L20#"+ttt+" ����#r ��Ա�� #k#b[#r��ͼ��#n#b]#l";

//textz += "#L21#"+ttt+" ����#r ��Ա�� #k#b[#r��ͼ��#n#b]#l\r\n";

//textz += "#L22#"+ttt+" ����#r ��Ա�� #k#b[#r��ͼ��#n#b]#l";

//textz += "#L23#"+ttt+" ����#r ��Ա�� #k#b[#r��ͼ��#n#b]#l\r\n\r\n";

cm.sendSimple (textz);    




//�����������������������

//����5Ԫ��Ա��

}else if  (selection == 2) { 
if(cm.getChar().getVip() >= 1) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����."); 
cm.dispose(); 

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ��еȼ�����120�� �����޷�����

} else if(cm.getPlayer().getLevel() >= 1) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v1);  
cm.getChar().SetVip(1); 

//��ͨ���
cm.gainNX(libao1[0]);//���
cm.gainItem(4002001,libao1[1]);//��Ʊ
cm.gainrw13(libao1[2]); //����

//ѫ��
var xunzhang = 1142004;//ѫ��
var shuxing = libao1[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao1[4]);
toDrop.setDex(libao1[4]);
toDrop.setInt(libao1[4]);
toDrop.setLuk(libao1[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	

//��ͨ���	
cm.getPlayer().gainAp(libao1[5]);//���Ե�
cm.gainItem(4001003,libao1[6]);//��(��GM��)
cm.gainItem(4032226,libao1[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao1[8]);//ʢ���ױ�(���齱)


//---------------------------------------------------
cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ��" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ��" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ��" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.dispose(); 
}
} else { 
cm.sendOk("#b���ĵȼ�����120��."); 
cm.dispose();   
} 



//�����������������������

//����5Ԫ��Ա��

}else if  (selection == 3) { 
if(cm.getChar().getVip() >= 2) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����."); 
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v2) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v2);  
cm.getChar().SetVip(2); 


//��ͨ���
cm.gainNX(libao2[0]);//���
cm.gainItem(4002001,libao2[1]);//��Ʊ
cm.gainrw13(libao2[2]); //����

//ѫ��
var xunzhang = 1142173;//ѫ��
var shuxing = libao2[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao2[4]);
toDrop.setDex(libao2[4]);
toDrop.setInt(libao2[4]);
toDrop.setLuk(libao2[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	

//��ͨ���	
cm.getPlayer().gainAp(libao1[5]);//���Ե�
cm.gainItem(4001003,libao2[6]);//��(��GM��)
cm.gainItem(4032226,libao2[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao2[8]);//���齱��4031579
cm.gainItem(4031579,1);//�����

//---------------------------------------------------
cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
}  


//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 4) { 
if(cm.getChar().getVip() >= 3) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����."); 
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v3) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v3);  
cm.getChar().SetVip(3); 

//��ͨ���
cm.gainNX(libao3[0]);//���
cm.gainItem(4002001,libao3[1]);//��Ʊ
cm.gainrw13(libao3[2]); //����

//ѫ��
var xunzhang = 1142174;//ѫ��
var shuxing = libao3[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao3[4]);
toDrop.setDex(libao3[4]);
toDrop.setInt(libao3[4]);
toDrop.setLuk(libao3[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao3[5]);//���Ե�
cm.gainItem(4001003,libao3[6]);//��(��GM��)
cm.gainItem(4032226,libao3[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao3[8]);//���齱��
cm.gainItem(4031579,2);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 



//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 5) { 
if(cm.getChar().getVip() >= 4) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����.");
cm.dispose();    

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v4) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v4);  
cm.getChar().SetVip(4); 

//��ͨ���
cm.gainNX(libao4[0]);//���
cm.gainItem(4002001,libao4[1]);//��Ʊ
cm.gainrw13(libao4[2]); //����

//ѫ��
var xunzhang = 1142177;//ѫ��
var shuxing = libao4[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao4[4]);
toDrop.setDex(libao4[4]);
toDrop.setInt(libao4[4]);
toDrop.setLuk(libao4[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao4[5]);//���Ե�
cm.gainItem(4001003,libao4[6]);//��(��GM��)
cm.gainItem(4032226,libao4[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao4[8]);//���齱��
cm.gainItem(4031579,3);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 


//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 6) { 
if(cm.getChar().getVip() >= 5) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����.");
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v5) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v5);  
cm.getChar().SetVip(5); 

//��ͨ���
cm.gainNX(libao5[0]);//���
cm.gainItem(4002001,libao5[1]);//��Ʊ
cm.gainrw13(libao4[2]); //����

//ѫ��
var xunzhang = 1142178;//ѫ��
var shuxing = libao5[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao5[4]);
toDrop.setDex(libao5[4]);
toDrop.setInt(libao5[4]);
toDrop.setLuk(libao5[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	

//��ͨ���	
cm.getPlayer().gainAp(libao5[5]);//���Ե�
cm.gainItem(4001003,libao5[6]);//��(��GM��)
cm.gainItem(4032226,libao5[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao5[8]);//���齱��
cm.gainItem(4031579,4);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����.")
cm.dispose();   
} 


//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 7) { 
if(cm.getChar().getVip() >= 6) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����.");  
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v6) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{  
 
cm.setzb(-v6);  
cm.getChar().SetVip(6); 

//��ͨ���
cm.gainNX(libao6[0]);//���
cm.gainItem(4002001,libao6[1]);//��Ʊ
cm.gainrw13(libao6[2]); //����

//ѫ��
var xunzhang = 1142176;//ѫ��
var shuxing = libao6[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao6[4]);
toDrop.setDex(libao6[4]);
toDrop.setInt(libao6[4]);
toDrop.setLuk(libao6[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao6[5]);//���Ե�
cm.gainItem(4001003,libao6[6]);//��(��GM��)
cm.gainItem(4032226,libao6[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao6[8]);//���齱��
cm.gainItem(4031579,5);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"����"+cm.mxdmz()+"��Ա��.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 



//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 8) { 
if(cm.getChar().getVip() >= 7) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����."); 
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v7) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{  
 
cm.setzb(-v7);  
cm.getChar().SetVip(7); 

//��ͨ���
cm.gainNX(libao7[0]);//���
cm.gainItem(4002001,libao7[1]);//��Ʊ
cm.gainrw13(libao7[2]); //����

//ѫ��
var xunzhang = 1142189;//ѫ��
var shuxing = libao7[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao7[4]);
toDrop.setDex(libao7[4]);
toDrop.setInt(libao7[4]);
toDrop.setLuk(libao7[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao7[5]);//���Ե�
cm.gainItem(4001003,libao7[6]);//��(��GM��)
cm.gainItem(4032226,libao7[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao7[8]);//���齱��

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"����"+cm.mxdmz()+"��Ա��.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 




//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 9) { 
if(cm.getChar().getVip() >= 8) {
cm.sendOk("#b���Ѿ���"+cm.mxdmz()+"��Ա����."); 
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v8) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{  
 
cm.setzb(-v8);  
cm.getChar().SetVip(8); 

//��ͨ���
cm.gainNX(libao8[0]);//���
cm.gainItem(4002001,libao8[1]);//��Ʊ
cm.gainrw13(libao8[2]); //����

//ѫ��
var xunzhang = 1142167;//ѫ��
var shuxing = libao8[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao8[4]);
toDrop.setDex(libao8[4]);
toDrop.setInt(libao8[4]);
toDrop.setLuk(libao8[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao8[5]);//���Ե�
cm.gainItem(4001003,libao8[6]);//��(��GM��)
cm.gainItem(4032226,libao8[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao8[8]);//���齱��

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"����"+cm.mxdmz()+"��Ա��.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





}else if  (selection == 100) { 
cm.sendSimple ("#bVIP�������͵���Ʒ��Ȼ��Ŷ..#k\r\n#L10#"+ttt+"#b ���� >>>> #r��Ա������Ա�� #k#b[#r"+v2v3+"#n#bԪ��]#l\r\n\r\n#L11#"+ttt+"#b ���� >>>> #r��Ա������Ա�� #k#b[#r"+v3v4+"#n#bԪ��]#l\r\n\r\n#L12#"+ttt+"#b ���� >>>> #r��Ա������Ա�� #k#b[#r"+v4v5+"#n#bԪ��]#l\r\n\r\n#L13#"+ttt+"#b ���� >>>> #r��Ա������Ա�� #k#b[#r"+v5v6+"#n#bԪ��]#l");







//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 10) { 
if(cm.getChar().getVip() != 2) {
cm.sendOk("#b���Ļ�Ա�ȼ����ʺϽ��иò���.");
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v2v3) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v2v3);  
cm.getChar().SetVip(3); 

//��ͨ���
cm.gainNX(libao3[0]-libao2[0]);//���
cm.gainItem(4002001,libao3[1]-libao2[1]);//��Ʊ
cm.gainrw13(libao3[2]-libao2[2]); //����

//ѫ��
var xunzhang = 1142174;//ѫ��
var shuxing = libao3[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao3[4]);
toDrop.setDex(libao3[4]);
toDrop.setInt(libao3[4]);
toDrop.setLuk(libao3[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao3[5]-libao2[5]);//���Ե�
cm.gainItem(4001003,libao3[6]-libao2[6]);//��(��GM��)
cm.gainItem(4032226,libao3[7]-libao2[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao3[8]-libao2[8]);//���齱��
cm.gainItem(4031579,1);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 



//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 11) { 
if(cm.getChar().getVip() != 3) {
cm.sendOk("#b���Ļ�Ա�ȼ����ʺϽ��иò���.");
cm.dispose();    

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v3v4) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v3v4);  
cm.getChar().SetVip(4); 

//��ͨ���
cm.gainNX(libao4[0]-libao3[0]);//���
cm.gainItem(4002001,libao4[1]-libao3[1]);//��Ʊ
cm.gainrw13(libao4[2]-libao3[2]); //����

//ѫ��
var xunzhang = 1142177;//ѫ��
var shuxing = libao4[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao4[4]);
toDrop.setDex(libao4[4]);
toDrop.setInt(libao4[4]);
toDrop.setLuk(libao4[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao4[5]-libao3[5]);//���Ե�
cm.gainItem(4001003,libao4[6]-libao3[6]);//��(��GM��)
cm.gainItem(4032226,libao4[7]-libao3[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao4[8]-libao3[8]);//���齱��
cm.gainItem(4031579,1);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 


//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 12) { 
if(cm.getChar().getVip() != 4) {
cm.sendOk("#b���Ļ�Ա�ȼ����ʺϽ��иò���.");
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v4v5) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{   

cm.setzb(-v4v5);  
cm.getChar().SetVip(5); 

//��ͨ���
cm.gainNX(libao5[0]);//���
cm.gainItem(4002001,libao5[1]-libao4[1]);//��Ʊ
cm.gainrw13(libao4[2]-libao3[2]); //����

//ѫ��
var xunzhang = 1142178;//ѫ��
var shuxing = libao5[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao5[4]);
toDrop.setDex(libao5[4]);
toDrop.setInt(libao5[4]);
toDrop.setLuk(libao5[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	

//��ͨ���	
cm.getPlayer().gainAp(libao5[5]-libao4[5]);//���Ե�
cm.gainItem(4001003,libao5[6]-libao4[6]);//��(��GM��)
cm.gainItem(4032226,libao5[7]-libao4[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao5[8]-libao4[8]);//���齱��
cm.gainItem(4031579,1);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����.")
cm.dispose();   
} 


//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 13) { 
if(cm.getChar().getVip() != 5) {
cm.sendOk("#b���Ļ�Ա�ȼ����ʺϽ��иò���.");
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v5v6) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{  
 
cm.setzb(-v5v6);  
cm.getChar().SetVip(6); 

//��ͨ���
cm.gainNX(libao6[0]);//���
cm.gainItem(4002001,libao6[1]-libao5[1]);//��Ʊ
cm.gainrw13(libao6[2]-libao5[2]); //����

//ѫ��
var xunzhang = 1142176;//ѫ��
var shuxing = libao6[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao6[4]);
toDrop.setDex(libao6[4]);
toDrop.setInt(libao6[4]);
toDrop.setLuk(libao6[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao6[5]-libao5[5]);//���Ե�
cm.gainItem(4001003,libao6[6]-libao5[6]);//��(��GM��)
cm.gainItem(4032226,libao6[7]-libao5[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao6[8]-libao5[8]);//���齱��
cm.gainItem(4031579,1);//�����

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"����"+cm.mxdmz()+"��Ա��.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 



//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 14) { 
if(cm.getChar().getVip() != 6) {
cm.sendOk("#b���Ļ�Ա�ȼ����ʺϽ��иò���.");
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v6v7) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{  
 
cm.setzb(-v6v7);  
cm.getChar().SetVip(7); 

//��ͨ���
cm.gainNX(libao7[0]);//���
cm.gainItem(4002001,libao7[1]);//��Ʊ
cm.gainrw13(libao7[2]); //����

//ѫ��
var xunzhang = 1142189;//ѫ��
var shuxing = libao7[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao7[4]);
toDrop.setDex(libao7[4]);
toDrop.setInt(libao7[4]);
toDrop.setLuk(libao7[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao7[5]);//���Ե�
cm.gainItem(4001003,libao7[6]);//��(��GM��)
cm.gainItem(4032226,libao7[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao7[8]);//���齱��

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"����"+cm.mxdmz()+"��Ա��.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 




//�����������������������

//����5Ԫ��Ա��
}else if  (selection == 15) { 
if(cm.getChar().getVip() != 7) {
cm.sendOk("#b���Ļ�Ա�ȼ����ʺϽ��иò���.");
cm.dispose();  

//�ж��Ƿ��е�׹ �����޷�����

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
cm.dispose();

//�ж��Ƿ�ӵ���㹻Ԫ�� û�����޷�����

} else if(cm.getzb() >= v7v8) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b�뱣֤������λ�пո����VIP���.");
cm.dispose();

}else{  
 
cm.setzb(-v7v8);  
cm.getChar().SetVip(8); 

//��ͨ���
cm.gainNX(libao8[0]);//���
cm.gainItem(4002001,libao8[1]);//��Ʊ
cm.gainrw13(libao8[2]); //����

//ѫ��
var xunzhang = 1142167;//ѫ��
var shuxing = libao8[3]; //����
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//��׹
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(libao8[4]);
toDrop.setDex(libao8[4]);
toDrop.setInt(libao8[4]);
toDrop.setLuk(libao8[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		

//��ͨ���
cm.getPlayer().gainAp(libao8[5]);//���Ե�
cm.gainItem(4001003,libao8[6]);//��(��GM��)
cm.gainItem(4032226,libao8[7]);//�ƽ�����(�齱)
cm.gainItem(4031250,libao8[8]);//���齱��

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ���Ϊ#r"+cm.mxdmz()+"��Ա��#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"ð�յ�" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ"+cm.mxdmz()+"��Ա��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"����"+cm.mxdmz()+"��Ա��.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��.����ϵ�ͷ�����."); 
cm.dispose();   
} 









                   
//=====================================================================================
//�����Ա��ͼ
}else if(selection == 16){
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,ʹ��#v4001003#�һ��سɾ�.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L89#"+ttt+" �һ����׹������� #l  #L90#"+ttt+" �һ�ȭ�׹������� #l\r\n#L91#"+ttt+" �һ�սǹ�������� #l  #L92#"+ttt+" �һ�˫�ֽ������� #l\r\n#L93#"+ttt+" �һ����ֽ������� #l  #L94#"+ttt+" �һ�ì���������� #l\r\n#L95#"+ttt+" �һ�����ħ������ #l  #L96#"+ttt+" �һ�����ħ������ #l\r\n#L97#"+ttt+" �һ������������� #l  #L98#"+ttt+" �һ�Ь����Ծ���� #l\r\n#L99#"+ttt+" �һ��̽��������� #l  #L200#"+ttt+" �һ������������� #l");

}else if(selection == 17){
cm.openNpc(9330081);

}else if(selection == 18){
cm.openNpc(9310074);

}else if(selection == 19){
cm.openNpc(9310072);









}else if(selection == 20){
if(cm.getChar().getVip() < 5){					
cm.sendOk("#b��Ŀǰ��VIP�ȼ���Ȩ����˵�ͼ!")
cm.dispose();
}else{
cm.warp(vip5map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();		
cm.dispose();
}

}else if(selection == 21){
if(cm.getChar().getVip() < 6){					
cm.sendOk("#b��Ŀǰ��VIP�ȼ���Ȩ����˵�ͼ!")
cm.dispose();
}else{
cm.warp(vip6map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();			
cm.dispose();
}

}else if(selection == 22){
if(cm.getChar().getVip() < 7){					
cm.sendOk("#b��Ŀǰ��VIP�ȼ���Ȩ����˵�ͼ!")
cm.dispose();
}else{
cm.warp(vip7map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();			
cm.dispose();
}

}else if(selection == 23){
if(cm.getChar().getVip() < 8){					
cm.sendOk("#b��Ŀǰ��VIP�ȼ���Ȩ����˵�ͼ!")
cm.dispose();
}else{
cm.warp(vip8map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();		
cm.dispose();
}




}else if (selection == 89) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2040807,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 90) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044703,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 91) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044303,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 92) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044003,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 93) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043003,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 94) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044403,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 95) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043703,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 96) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043803,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 97) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2040303,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 98) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2040710,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 99) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043303,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}

}else if (selection == 200) {
if (cm.haveItem(4001003) == false){
cm.sendOk("��Ǹ,��û�д���#v4001003#,�����Ҳ��ܺ��㽻��"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044503,1); 
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); 
}







}else if (selection == 101){
if(cm.getBossLog("smmxd_GZ")< 1){
var vipstr = "��ͨ���";
var sf_money = 0;
var sf_item = 0;
var sf_Nx = 0;
var noticeType = 2;
var quantity;


if(cm.getChar().getVip() <= 0){
sf_money = GZ_Player_money;
sf_item = GZ_Player_item[0];
quantity = GZ_Player_item[1];
sf_Nx = GZ_Player_Nx; 
vipstr = "��5Ԫ���"
var noticeType = 2;


}else if(cm.getChar().getVip() == 1){
sf_money = GZ_V1_money;
sf_item = GZ_V1_item[0];
quantity = GZ_V1_item[1];
sf_Nx = GZ_V1_Nx;	
vipstr = "��5Ԫ��Ա��";
var noticeType = 2;


}else if(cm.getChar().getVip() == 2){
sf_money = GZ_V2_money;
sf_item = GZ_V2_item[0];
quantity = GZ_V2_item[1];
sf_Nx = GZ_V2_Nx;
vipstr = "��5Ԫ��Ա��";
var noticeType = 3;


}else if(cm.getChar().getVip() == 3){
sf_money = GZ_V3_money;
sf_item = GZ_V3_item[0];
quantity = GZ_V3_item[1];
sf_Nx = GZ_V3_Nx;
sf_zb = GZ_V3_zb;
vipstr = "��5Ԫ��Ա��";
var noticeType = 11;


}else if(cm.getChar().getVip() == 4){
sf_money = GZ_V4_money;
sf_item = GZ_V4_item[0];
quantity = GZ_V4_item[1];
sf_Nx = GZ_V4_Nx;
sf_zb = GZ_V4_zb;
vipstr = "��5Ԫ��Ա��";	
var noticeType = 12;	


}else if(cm.getChar().getVip() == 5){
sf_money = GZ_V5_money;
sf_item = GZ_V5_item[0];
quantity = GZ_V5_item[1];
sf_Nx = GZ_V5_Nx;
sf_zb = GZ_V5_zb;
vipstr = "��5Ԫ��Ա��";	
var noticeType = 12;	

					                                
}else if(cm.getChar().getVip() == 6){
sf_money = GZ_V6_money;
sf_item = GZ_V6_item[0];
quantity = GZ_V6_item[1];
sf_Nx = GZ_V6_Nx;
sf_zb = GZ_V6_zb;
vipstr = "��5Ԫ��Ա��";	
var noticeType = 12;	


}else if(cm.getChar().getVip() == 7){
sf_money = GZ_V7_money;
sf_item = GZ_V7_item[0];
quantity = GZ_V7_item[1];
sf_Nx = GZ_V7_Nx;
vipstr = "��5Ԫ��Ա��";	
var noticeType = 12;	


}else if(cm.getChar().getVip() == 8){
sf_money = GZ_V8_money;
sf_item = GZ_V8_item[0];
quantity = GZ_V8_item[1];
sf_Nx = GZ_V8_Nx;
vipstr = "��5Ԫ��Ա��";	
var noticeType = 12;
}
					

if((cm.getMeso()+ sf_money) < 2147483647){
cm.gainMeso(sf_money);			
cm.getChar().modifyCSPoints(1,sf_Nx);
cm.getChar().UpdateCash();   //������ʾ����״̬
if (quantity > 0){
cm.gainItem(sf_item,quantity);
}
cm.setBossLog("smmxd_GZ");
cm.sendOk("���ѳɹ���ȡ��#r" + vipstr + "#k�Ĺ���#r" + sf_money + "#k��ҡ�#r" + sf_Nx + "#k�����ȯ"  + sf_zb + "#kԪ��.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(noticeType,cm.getC().getChannel(),"���ʷ���Ա" + " : " + "��ϲ " + vipstr + " " + cm.getPlayer().getName() +" ��ȡ������Ĺ���"  + sf_money + "��ҡ�" + sf_Nx + "�����ȯ" + sf_zb + "#kԪ��.",true).getBytes());
cm.setzb(sf_zb);
cm.dispose();
}else{
cm.sendOk("#b���������ϵ�Ǯ����,�Ѿ�װ���½���Ĺ�����,������к�������ȡ�ɣ�");
cm.dispose();
}
}else{
cm.sendOk("#b����Ϊ24Сʱ����һ��,�����Ѿ���ȡ��������,����������!");
cm.dispose();
}





} 
}
}
