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
var textz = "#r"+cm.mxdmz()+"ð�յ�#k,��Ա����ר��.\r\n\r\n#b  ��Ա�ȼ�:#r"+vipstr+"  #bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n";

textz += "#L1#"+ttt2+""+ttt2+"[#r"+cm.mxdmz()+"��Ա��#b] #e>>>> ר��������ͼ <<<<#n#l\r\n";

textz += "#L2#"+ttt2+""+ttt2+"[#r"+cm.mxdmz()+"��Ա��#b] #e>>>> ר��������ͼ <<<<#n#l\r\n";

textz += "#L6#"+ttt2+""+ttt2+"[#r"+cm.mxdmz()+"��Ա��#b] #e>>>> ר��������ͼ <<<<#n#l\r\n";

textz += "#L13#"+ttt2+""+ttt2+"[#r"+cm.mxdmz()+"��Ա��#b] #e>>>> ר��������ͼ <<<<#n#l\r\n";

textz += "#L14#"+ttt2+""+ttt2+"[#r"+cm.mxdmz()+"��Ա��#b] #e>>>> ר��������ͼ <<<<#n#l\r\n";

textz += "#L15#"+ttt2+""+ttt2+"[#r"+cm.mxdmz()+"��Ա��#b] #e>>>> ר��������ͼ <<<<#n#l\r\n";

textz += "#L3#"+ttt+""+ttt+"#e>>>> >>>> #n����������������[#r��Ա�ȼ���#b]#l\r\n";

textz += "#L4#"+ttt+""+ttt+"#e>>>> >>>> #n����110����װ�� [#r��Ա�ȼ���#b]#l\r\n";

//textz += "#L5#"+ttt+""+ttt+"#e>>>> >>>> #n����ʥ�������̵�[#r��Ա�ȼ���#b]#l\r\n";

textz += "#L7#"+ttt+""+ttt+"#e>>>> >>>> #n��Ȩ�����̵��̵�[#r��Ա�ȼ���#b]#l\r\n";

//textz += "#L8#"+ttt+""+ttt+"#e>>>> >>>> #n����ʥ�������̵�[#r��Ա�ȼ���#b]#l\r\n";

textz += "#L9#"+ttt+""+ttt+"#e>>>> >>>> #n������Ȩ����̵�[#r��Ա�ȼ���#b]#l\r\n";

textz += "#L10#"+ttt+""+ttt+"#e>>>> >>>> #n����ת��ְҵ����[#r��Ա�ȼ���#b]#l\r\n";

//textz += "#L11#"+ttt+""+ttt+"#e>>>> >>>> #n����ʥ�������̵�[#r��Ա�ȼ���#b]#l\r\n";

textz += "#L12#"+ttt+""+ttt+"#e>>>> >>>> #n����ƽ������̵�[#r��Ա�ȼ���#b]#l\r\n";

textz += "#L16#"+ttt+""+ttt+"#e>>>> >>>> #n��Ȩװ�������̵�[#r��Ա�ȼ���#b]#l\r\n";

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
if(cm.getChar().getVip() >= 1){
cm.warp(910000016);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 2) {
if(cm.getChar().getVip() >= 2){
cm.warp(910000017);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 13) {
if(cm.getChar().getVip() >= 4){
cm.warp(910000019);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 14) {
if(cm.getChar().getVip() >= 5){
cm.warp(910000020);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 15) {
if(cm.getChar().getVip() >= 6){
cm.warp(910000021);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 



}else if (selection == 16) {
if(cm.getChar().getVip() >= 6){
cm.openShop (5007);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 6) {
if(cm.getChar().getVip() >= 3){
cm.warp(910000018);
cm.dispose();
}else{
cm.sendOk("#b������5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 5) {
if(cm.getChar().getVip() >= 2){
cm.openShop (5003);
cm.dispose();
}else{
cm.sendOk("#b�㲻��5Ԫ��Ա�ڣ�����ʲô��������...");
cm.dispose();
} 

}else if (selection == 8) {
if(cm.getChar().getVip() >= 4){
cm.openShop (5000);
cm.dispose();
}else{
cm.sendOk("#b�㲻��5Ԫ��Ա�ܣ�����ʲô��������...");
cm.dispose();
} 


}else if (selection == 9) {
if(cm.getChar().getVip() >= 4){
cm.openShop (5005);
cm.dispose();
}else{
cm.sendOk("#b�㲻��5Ԫ��Ա�ܣ�����ʲô��������...");
cm.dispose();
} 


}else if (selection == 11) {
if(cm.getChar().getVip() >= 5){
cm.openShop (5002);
cm.dispose();
}else{
cm.sendOk("#b�㲻��5Ԫ��Ա�ݣ�����ʲô��������...");
cm.dispose();
} 


}else if (selection == 12) {
if(cm.getChar().getVip() >= 5){
cm.openShop (5008);
cm.dispose();
}else{
cm.sendOk("#b�㲻��5Ԫ��Ա�ݣ�����ʲô��������...");
cm.dispose();
} 


}else if (selection == 10) {
if (cm.getLevel() < 120) {
cm.sendOk("#bʹ�øù�����Ҫʹ�ȼ��ﵽ#rLv.120.");
cm.dispose(); 
} else if (cm.getBossLog('VIPZZ') >= 5) {
cm.sendOk("#b�Բ���,�˹�����ÿ��ֻ����ʹ��5��.����������.");
cm.dispose(); 
} else if(cm.getChar().getVip() >= 4){
text = "��ѡ����Ҫת��ְ #b[ÿ������5��.][ְҵ����][ְҵ����]#k:\r\n";
text += "\r\nð�ռ�  #dսʿְҵ#k\r\n";
text += "#L17#Ӣ��[112]#l\r\n#L18#ʥ��ʿ[122]#l\r\n#L19#����ʿ[132]#l  \r\n";
text += "\r\nð�ռ�  #dħ��ʦְҵ#k\r\n";
text += "#L20#ħ��ʦ ��[212]#l\r\n#L21#ħ��ʦ ����[222]#l\r\n#L22#����[232]#l  \r\n";
text += "\r\nð�ռ�  #d������ְҵ#k\r\n";
text += "#L23#������[312]#l\r\n#L24#����[322]#l  \r\n";
text += "\r\nð�ռ�  #d����ְҵ#k\r\n";
text += "#L25#��ʿ[412]#l\r\n#L26#����[422]#l  \r\n";
text += "\r\nð�ռ�#d����ְҵ#k\r\n";
text += "#L27#���ӳ�[512]#l\r\n#L28#����[522]#l  \r\n";
text += "\r\nð����  #d��ʿ��ְҵ#k\r\n";
text += "#L29#����ʿ[1111]#l\r\n#L30#����ʿ[1211]#l\r\n#L31#����ʹ��[1311]#l\r\n#L32#ҹ����[1411]#l\r\n#L33#��Ϯ��[1511]#l\r\n";
text += "\r\nð�յ�  #d��Ӣ��#k\r\n";
text += "#L34#ս��[2112]#l\r\n";
text += "\r\n";
cm.sendSimple(text); 
} else {
cm.sendOk("#b�㲻��5Ԫ��Ա�ܣ�����ʲô��������...");
cm.dispose();
}

}else if (selection == 4) {
if(cm.getChar().getVip() >= 2){
cm.sendSimple ("\r\n		#L6#"+ttt+"#d����ʦװ��#l\r\n		#d#L7#"+ttt+"����սʿװ��#l\r\n		#L8#"+ttt+"������װ��#l\r\n		#L9#"+ttt+"�������װ��#l");
}else{
cm.sendOk("#b�㲻�ǡ�5Ԫ��Ա�ڣ�����ʲô��������...");
cm.dispose();
}


}else if (selection == 7) {
if(cm.getChar().getVip() >= 3){
cm.sendSimple ("\r\n		#L10#"+ttt+"#d���������̵�#l\r\n		#d#L11#"+ttt+"���������̵�#l\r\n		#L12#"+ttt+"����ʥ������#l\r\n		#L13#"+ttt+"���������̵�#l");
}else{
cm.sendOk("#b�㲻�ǡ�5Ԫ��Ա�ۣ�����ʲô��������...");
cm.dispose();
}


}else if (selection == 3) {
if(cm.getChar().getVip() >= 1){
cm.openNpc( 2002000);
}else{
cm.sendOk("#b�㲻�ǡ�5Ԫ��Ա�٣�����ʲô��������...");
cm.dispose();
}


}else if(selection == 2){
cm.openShop( 201);
cm.dispose();

}else if(selection == 3){
cm.openShop( 10008);
cm.dispose();

}else if(selection == 4){
cm.openShop( 10009);
cm.dispose();

}else if(selection == 5){
cm.openShop( 223);
cm.dispose();

}else if(selection == 6){
cm.openShop( 904);
cm.dispose();

}else if(selection == 7){
cm.openShop( 904);
cm.dispose();

}



} else if (selection == 6) {
cm.openShop (2001);
cm.dispose();

} else if (selection == 7) {
cm.openShop (2000);
cm.dispose();

} else if (selection == 8) {
cm.openShop (2002);
cm.dispose();

} else if (selection == 9) {
cm.openShop (2003);
cm.dispose();

} else if (selection == 10) {
cm.openShop (10003);
cm.dispose();

} else if (selection == 11) {
cm.openShop (10000);
cm.dispose();

} else if (selection == 12) {
cm.openShop (10002);
cm.dispose();

} else if (selection == 13) {
cm.openShop (10001);
cm.dispose();



} else if (selection == 17) {
cm.changeJob(MapleJob.HERO);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 18) {
cm.changeJob(MapleJob.PALADIN);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 19) {
cm.changeJob(MapleJob.DARKKNIGHT);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 20) {
cm.changeJob(MapleJob.FP_ARCHMAGE);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 21) {
cm.changeJob(MapleJob.IL_ARCHMAGE);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 22) {
cm.changeJob(MapleJob.BISHOP);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 23) {
cm.changeJob(MapleJob.BOWMASTER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 24) {
cm.changeJob(MapleJob.CROSSBOWMASTER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 25) {
cm.changeJob(MapleJob.NIGHTLORD);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 26) {
cm.changeJob(MapleJob.SHADOWER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();

} else if (selection == 27) {
cm.changeJob(MapleJob.BUCCANEER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 28) {
cm.changeJob(MapleJob.CORSAIR);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 29) {
cm.changeJob(MapleJob.GHOST_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 30) {
cm.changeJob(MapleJob.FIRE_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 31) {
cm.changeJob(MapleJob.WIND_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 32) {
cm.changeJob(MapleJob.NIGHT_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 33) {
cm.changeJob(MapleJob.THIEF_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 34) {
cm.changeJob(MapleJob.Ares_4);
cm.setBossLog('VIPZZ');
cm.serverNotice("[תְϵͳ]: ����VIP [" + cm.getPlayer() + "] ʹ����Ȩ,����תְ�ɹ�");
cm.teachSkill(1111002,0,0);  //���� ����+����ը��BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();





}
}
}