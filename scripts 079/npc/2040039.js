importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա

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
if(cm.getChar().getVip() <= 0){
var vipstr = "��ͨ���";					
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
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}
var textz = "#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.\r\n#b  ��Ա�ȼ�:#r"+vipstr+"  #bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n";


//textz += "#L7#"+ttt3+"�����̳ǵ��"+ttt4+"#l#l\r\n";

//textz += "#L8#"+ttt3+"�����̳�����        "+ttt4+"#l#l\r\n";

textz += "#L2#"+ttt3+"�ϳ�ף������[���ϸ���BOSS�б�]         "+ttt4+"#l#l\r\n";

textz += "#L10##r"+ttt3+"������������[һ��������ȫԱ�ý���]     "+ttt4+"#l#b\r\n";

textz += "#L3#"+ttt3+"��һ���Ʒ[����ϵͳ]                   "+ttt4+"#l\r\n";

textz += "#L1#"+ttt3+"�����ް�Ʒ�ͱ���#r          [ϡ��][Hot]#b"+ttt+"#l#b\r\n";

textz += "#L4#"+ttt3+"�������ϵ��������#r            [����][Hot]"+ttt2+ "#b#l\r\n";

textz += "#L5#"+ttt3+"�������ϵ���������#r          [����][Hot]"+ttt+"#b#l\r\n";

textz += "#L9#"+ttt3+"#r������������#b             [���������ϳ�]"+ttt2+"#l\r\n";

textz += "#L6#"+ttt3+"#r����װ��ǿ��#b           [ǿ��][���ַ�ʽ]"+ttt+"#l\r\n";

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if(selection == 1){
cm.openNpc( 9330042);

}else if(selection == 2){
cm.openNpc( 9000017);

}else if(selection == 10){
cm.openNpc( 9000019);

}else if(selection == 9){
cm.openNpc( 1022003);

}else if(selection == 5){
cm.openNpc( 9310070);

}else if(selection == 6){
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,װ��ǿ��ϵͳ#r\r\n["+ttt4+"]#kװ��ǿ���������֣�����Ҫ����ƷҲ����ͬ.\r\n#L99#"+ttt2+"#b>>>> װ��ǿ������һ [1Ԫ��][2000����][100%�ɹ�]#l\r\n#L8#"+ttt+"#b>>>> װ��ǿ�������� #r[װ������][2E���][70%�ɹ�]#b#l\r\n#L17#"+ttt2+"#b>>>> װ��ǿ�������� [ʱ��ǿ��][������]#l");

}else if(selection == 77){
cm.sendOk("#b����������.");
cm.dispose();

}else if(selection == 88){
cm.openNpc( 9330078);


}else if(selection == 4){
cm.openNpc( 9310071);


}else if(selection == 3){
cm.openNpc( 9000041);
}


}else if (selection == 5) {
if (cm.itemQuantity(4002002) >= 500) {
cm.sendOk("#b�����Ʊ����,��ʹ�ò��ֺ������һ�.");
cm.dispose();

} else if (cm.getMeso() >= 1500000000) {
cm.gainMeso(-1500000000);                
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻�Ľ�����һ���Ʊ.");
cm.dispose();
}   
                             
} else if (selection == 6) {
if (cm.getMeso() >= 647000000) {
cm.sendOk("#b�Բ���,�����ϵ�Ǯ����,ǿ�ƶһ����ܵ��´���.");
cm.dispose();

} else if (cm.itemQuantity(4002002) >= 1) {
cm.gainMeso(1450000000);                
cm.gainItem(4002002, -1); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻����Ʊ���һ����.");
cm.dispose();
}    

} else if (selection == 7) {
cm.sendOk("#b����������.");
cm.dispose();

} else if (selection == 8) {
cm.openNpc( 9330078);

} else if (selection == 17) {
cm.openNpc( 9250028);
 
} else if (selection == 99) {
cm.openNpc( 9900005);

} else if (selection == 10) {
if (cm.getMeso() >= 1647000000) {
cm.sendOk("#b�Բ���,�����ϵ�Ǯ����,ǿ�ƶһ����ܵ��´���.");
cm.dispose();

} else if (cm.itemQuantity(4002000) >= 1) {
cm.gainMeso(450000000);                
cm.gainItem(4002000, -1); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻����Ʊ���һ����.");
cm.dispose();
}    

















					
}
}
}

