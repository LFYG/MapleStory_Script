importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա

//����������������������ΪVIP��ͼ����,�������Ҫ���õ�ͼID
var vip1map = 803001200;
var vip2map = 925020000;
var vip2bj = 910000004;
var vip3map = 925010400;
var vip3bj = 910000005;
var vip4map = 920010000;
var vip4bj = 910000006;


//����������������������Ϊ���ʣ���ң�����,�������Ҫ��������;
var GZ_Player_money = 2000000;
var GZ_V1_money = 50000000;
var GZ_V2_money = 100000000;
var GZ_V3_money = 200000000;
var GZ_V4_money = 300000000;


//����������������������Ϊ���ʣ����ߣ�����,�������Ҫ��������; 
var GZ_Player_item = Array(1002140,0);   //���÷��� ֻ����� Aarray(����ID,����);
var GZ_V1_item = Array(2340000,0);       //����Ϊ0 ��ʾ����.
var GZ_V2_item = Array(2340000,5);
var GZ_V3_item = Array(2340000,10);
var GZ_V4_item = Array(2340000,20);


//����������������������Ϊ���ʣ�����ȯ������,�������Ҫ��������;

var GZ_Player_Nx = 10000;
var GZ_V1_Nx = 10000;
var GZ_V2_Nx = 20000;
var GZ_V3_Nx = 30000;
var GZ_V4_Nx = 40000;


//����������������������Ϊ���ʣ�������������,�������Ҫ��������;

var GZ_Player_zb = 1000;
var GZ_V1_zb = 1000;
var GZ_V2_zb = 5000;
var GZ_V3_zb = 7000;
var GZ_V4_zb = 10000;


//////////////////////////////////////////////////////////
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
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k��������\r\n��ѡ����Ҫ��ս������.\r\n#b#L9#"+ttt+""+ttt2+""+ttt+""+ttt2+"#r1 VS 1#bPK����#e >>>> #n[����PKϵͳ]#l\r\n#b#L12#"+ttt+""+ttt2+""+ttt+""+ttt2+"��սʮ������#e >>>> #n[ȫ��Boss,������]#l\r\n#b#L0#"+ttt+""+ttt2+""+ttt+""+ttt2+"��ս糺�����#e >>>> #n[糺������õ�����]#l\r\n#b#L1#"+ttt+""+ttt2+""+ttt+""+ttt2+"�����������#e >>>> #n[������Ѽ��]#l\r\n#b#L3#"+ttt+""+ttt2+""+ttt+""+ttt2+"������������#e >>>> #n[�������������]#l\r\n#b#L10#"+ttt+""+ttt2+""+ttt+""+ttt2+"������������#e >>>> #n[��������������]#l\r\n#b#L4#"+ttt+""+ttt2+""+ttt+""+ttt2+"�����ţ����#e >>>> #n[ÿ��8��,���ɵ�������]#l\r\n#L5#"+ttt+""+ttt2+""+ttt+""+ttt2+"���������#e >>>> #n[а��BOSS����ս]#l\r\n#L6#"+ttt+""+ttt2+""+ttt+""+ttt2+"����������#e >>>> #n[����������ر�]#l\r\n#L8#"+ttt+""+ttt2+""+ttt+""+ttt2+"��ս������ħ#e >>>> #n[��Ҫ��ħ��ʶ]#l\r\n#L7#"+ttt+""+ttt2+""+ttt+""+ttt2+"�����ۺ�ϵͳ#e >>>> #n[�ü������ڲ�ͬ]#l");	
			
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if(selection == 0){
if(viplevel < 0){					
cm.sendOk("#b�����ǡ�5Ԫ��Ա,�޷�����˵�ͼ")
cm.dispose();
}else{
cm.warp(vip1map,0);
cm.sendOk("#b��糺�ϵ��װ��!.");					
cm.dispose();
}


} else if (selection == 8) { 
if (cm.haveItem(4001035)>=1){
cm.warp(105050400,0);	
cm.dispose();
}else  {
cm.sendOk("������� ��ħ��ʶ���ܽ���.");
cm.dispose();
}

} else if (selection == 10) { 
cm.openNpc(9250010);

} else if (selection == 9) { 
cm.openNpc(9000036);

} else if (selection == 1) { 
cm.openNpc(9020000);

}else if(selection == 2){
cm.sendOk("#b���������!.");				
cm.dispose();

} else if (selection == 3) { 
cm.openNpc(9250011);

} else if (selection == 7) { 
cm.openNpc(1002003);

} else if (selection == 11) { 
cm.openNpc(9900002);

} else if (selection == 12) { 
cm.openNpc(9900003);

}else if (selection == 4){
if(viplevel < 0){					
cm.sendOk("��Ŀǰ��VIP�ȼ���Ȩ����˵�ͼ!")					
cm.dispose();
}else{
cm.warp(vip3map,0);
cm.sendOk("��������ȴ�ʱ��ĵ�����!.");						
cm.dispose();
}

} else if (selection == 5) { 
if (cm.getHour() < 16) {
cm.sendOk("�������鴬�Ĵ��Ż�û�д�.");
cm.dispose();
}else if (cm.haveItem(4000382) ||cm.haveItem(4000379) ||cm.haveItem(4000383)) {
cm.sendOk("����㱳�������:#v4000382##v4000379##v4000383#���.");
cm.dispose();
}else {	
cm.warp(541010010,0);	
cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�300��#v4000382#.��ע��ʱ��!!!����24��,������Ϊ����.!");
cm.dispose();
}

} else if (selection == 6) { 
cm.warp(677000013,0);	
cm.dispose();




			}										
		}
	}
}

