//====================��������==================

var name = "5Ԫð�յ�";//����������.

var v1_laba = 1;//V1ÿ��ʹ�����ȴ���
var v2_laba = 2;//V2ÿ��ʹ�����ȴ���
var v3_laba = 3;//V3ÿ��ʹ�����ȴ���
var v4_laba = 5;//V4ÿ��ʹ�����ȴ���
var v0_laba = 0;
var Gm_laba = 99;

var qflaba1 = 1;//ˢȫ��������Ҫ��Ԫ��1
var qflaba2 = 1;//ˢȫ��������Ҫ��Ԫ��2
var qflaba3 = 1;//ˢȫ��������Ҫ��Ԫ��3

var splaba1 = 1;//ˢȫ��������Ҫ��Ԫ��1
var splaba2 = 2;//ˢ������Ҫ��Ԫ��2
var splaba3 = 1;//ˢȫ��������Ҫ��Ԫ��3
var splaba4 = 1;//ˢȫ��������Ҫ��Ԫ��4


//===========��ʱװ��ѡ��================
var yuezhangzb = 20;//����Ԫ������װ��ʹ��������Ǯ

var timezb = 30;//���������>

var yuezhangcsb = 50;//���Ѵ�������װ��ʹ��������Ǯ

var timecsb = 10;//���������>

var yuezhangNX = 100000;//���ѵ������װ��ʹ��������Ǯ

var timeNX = 10;//���������>

var yuezhangmoney = 15;//����ð������װ��ʹ��������Ǯ ���ڡ�

var timemoney = 5;//���������>


var viplaba = Array(Array(1,5120000),
                    Array(1,5120001),
                    Array(1,5120002),
                    Array(1,5120003),
                    Array(1,5120004), //V1  5

                    Array(1,5120005),
                    Array(1,5120006),  //V2  7
 
                    Array(1,5120007),
                    Array(1,5120008), //V3  9

                    Array(1,5120009),
                    Array(1,5120010),
                    Array(1,5120012),
                    Array(1,5120015));	//�������� 13

//=====================����============================================
//װ��ʱ�����:1 * 24 * 60 * 60 * 1000 =86400000  ���� =1��

var trues = 0;
var viplabas = -1;
var choose = -1;
var choose1 = -1;
var choose2 = -1;
var choose3 = -1;
var typedd=1;
var chanceo=(Math.floor(Math.random()*8)+1);1-9
var shuxing1= 0;
						
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var status = 0;
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.sendOk("#b"+cm.mxdmz()+"ð�յ���ɫ����\r\n��."+cm.mxdmz()+"ð�յ��������ƹ���5W������.\r\n��.����Ա����ʱ�ٰ���������ʱ���﹥��.\r\n��.Boss������Ʒ��Ԫ������ͨ���������ү��\r\n��.���������޸���飬����092�·���.\r\n��.����������е�062��079��������.\r\n��.�����᲻�ϸ����Դ���������֧��"+cm.mxdmz()+"ð�յ�.");
cm.dispose();
} else {
if (mode == 0) {
cm.sendOk("#b"+cm.mxdmz()+"ð�յ���ɫ����\r\n��."+cm.mxdmz()+"ð�յ��������ƹ���5W������.\r\n��.����Ա����ʱ�ٰ���������ʱ���﹥��.\r\n��.Boss������Ʒ��Ԫ������ͨ���������ү��\r\n��.���������޸���飬����092�·���.\r\n��.����������е�062��079��������.\r\n��.�����᲻�ϸ����Դ���������֧��"+cm.mxdmz()+"ð�յ�.");
cm.dispose();
return;
}
if (mode == 0 && status == 0 && status == 1 && status == 2 && status == 3 && status == 4 && status == 5 ) {

cm.dispose();			
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
var text = "#b"+cm.mxdmz()+"#k,���ȹ�Ӧ��.\r\n#b  ��Ա�ȼ�:#r"+vipstr+"  #bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n";

text += "#L3#"+ttt+"ʹ�û�Ա�������"+ttt3+"#l\r\n";

text += "#L4#"+ttt+"ʹ��ȫ���޵к���"+ttt3+"#l\r\n"; 

text += "#L6#"+ttt2+"ʹ��ˢ���޵к���"+ttt3+"#l  ";

cm.sendSimple(text);


} else if (status == 1) {
if (selection == 1) {
cm.openNpc( 2133001);	
}
if (selection == 2) {
cm.sendOk("��Ա���,��ʱ������.");
cm.dispose();	
}           
if (selection == 3) {//��Ա����
var  ttz = "#b��,������һ���ֿ�ʼ��,����ǿ����?#k\r\n";

ttz += "����Ա�ر�Ϊ��Ա��׼����#b�����޵д����ȹ���#k,�����԰�.\r\n\r\n"

ttz +=  "#rvIp��#k���,ÿ�����ʹ��#r1#k��.\r\n#rvIp��#k���,ÿ�����ʹ��#r2#k��.\r\n#rvIp��#k���,ÿ�����ʹ��#r3#k��.\r\n#rvIp��#k���,ÿ�����ʹ��#r5#k��.";
cm.sendYesNo(ttz);
test=1;
} 
                                                     if (selection == 4) {//ȫ������
  var  ttz1 = "#b��һ���Է������������?#k\r\n";

       ttz1 += "����Ա�ر�׼����#bȫ������#k��Ŀ,�����԰�."

			cm.sendYesNo(ttz1);
test=10;
} 
                                                     if (selection == 5) {
			cm.openNpc( 9120106);
}
		                                     if (selection == 6) {//ȫ������
  var  ttz2 = "#b��һ���Է������������?#k\r\n";

       ttz2 += "����Ա�ر�׼����#bˢ������#k��Ŀ,�����԰�."

			cm.sendYesNo(ttz2);
test=100;
}                                                     
                                                     if (selection == 7) {
			cm.openNpc( 9000021);

}

                                                     if (selection == 8) {
			cm.openNpc( 1022100);
}
                                                     if (selection == 9) {
			cm.openNpc( 9310060);
}
                                                     if (selection == 10) {
			cm.openNpc( 1032114);
}

                                                     if (selection == 11) {
			cm.openNpc( 9209103);
}

                                                     if (selection == 12) {
			cm.openNpc( 9010002);
}

                                                     if (selection == 13) {
	var  ssqh = "#bʱ��ǿ������:#k\r\n\r\n";

       ssqh += ttt+"  ��ԭ�е�װ��#b����ʱ��ֵ#k,ͬʱ#b����������#k\r\n\r\n";

       ssqh += ttt+"  ͨ��#bָ������#k����#bʱ��#k���Խ�װ����������.#k.\r\n\r\n";

       ssqh += ttt+"  ��װ��ʱ�䵽��ʱ,װ������ʧ.#k\r\n\r\n";

       ssqh += ttt+"  ��ʱװ��������ʹ�ó���#b�Ӿ�#k�����ǿ����ʽ.#k";

			cm.sendYesNo(ssqh);
test=200;
}

                                                     if (selection == 14) {
	var  ssqh = "#bĿǰ��Ҫ���õĹ���Ϊ:#k\r\n\r\n";

       ssqh += ttt+"  ������NPC����#k\r\n\r\n"

       ssqh += "                                  #e#b  �Ƿ��������?#k";

			cm.sendYesNo(ssqh);
test=201;
}
                                                     if (selection == 15) {
	var  ssqh = "#bĿǰ��Ҫ���õĹ���Ϊ:#k\r\n\r\n";

       ssqh += ttt+"  ��Ա�Զ���ȡ����#k\r\n\r\n"

       ssqh += "                                  #e#b  �Ƿ��������?#k";

			cm.sendYesNo(ssqh);
test=202;
}
                                                        if (selection == 16) {
	var  ssqh = "#bĿǰ��Ҫ���õĹ���Ϊ:#k\r\n\r\n";

       ssqh += ttt+"  ��ʱ����Ҫ��������.#k\r\n\r\n"

    //   ssqh += "                                  #e#b  �Ƿ��������?#k";

			cm.sendOk(ssqh);
cm.dispose();

}                                                  
//-----------------------------------------------------
                   }  else if (status == 2) {
                                                     if (test == 1) {
     var ttm = "а�����Ϊ�������Ļ�Ա�ȼ�!.\r\n\r\n";

 if(cm.getChar().getVip() < 2) {
            
            //ttm += "#dGMͬѧ#k:\r\n\r\n";
 
            ttm += "��������ʹ�����ȡ�";
 
            //ttm += "#r����ʹ����������:\r\n";

            //ttm += "   #i5120000#   #i5120001#   #i5120002#   #i5120003#   #i5120004#\r\n";
 
           // ttm += "   #i5120005#   #i5120006#   #i5120009#   #i5120008#\r\n";

       //     ttm += "   #i5120009#   #i5120010#   #i5120012#   #i5120015#"; 


                                               }else if(cm.getChar().getGMLevel() != 0) {
            
            ttm += "#dGMͬѧ#k:\r\n\r\n";
 
            ttm += "������ʹ�����޴�,��ʹ��#r " + cm.getBossLog('viplaba') + "��. \r\n\r\n";
 
            ttm += "#r����ʹ����������:\r\n";

            ttm += "   #i5120000#   #i5120001#   #i5120002#   #i5120003#   #i5120004#\r\n";
 
            ttm += "   #i5120005#   #i5120006#   #i5120009#   #i5120008#\r\n";

            ttm += "   #i5120009#   #i5120010#   #i5120012#   #i5120015#"; 


                                               }else if(cm.getChar().getVip() == 2) {
            
            ttm += "#d2�ǻ�Ա���#k:\r\n\r\n";
 
            ttm += "������ʹ�õ���������Ϊ: #r"+v1_laba+"#k��,��ʹ��#r " + cm.getBossLog('viplaba') + "��. \r\n\r\n";
 
            ttm += "#r����ʹ����������:\r\n";

            ttm += "   #i5120000#   #i5120001#   #i5120002#   #i5120003#   #i5120004#\r\n";
 
            ttm += "#rδ��ȡʹ����������:\r\n";

            ttm += "   #i5120005#   #i5120006#   #i5120009#   #i5120008#\r\n";

            ttm += "   #i5120009#   #i5120010#   #i5120012#   #i5120015#"; 


                                               }else if(cm.getChar().getVip() == 3) {


            ttm += "#d3�ǻ�Ա���#k:\r\n\r\n";
 
            ttm += "������ʹ�õ���������Ϊ: #r"+v2_laba+"#k��,��ʹ��#r " + cm.getBossLog('viplaba') + "��. \r\n\r\n";
 
            ttm += "#r����ʹ����������:\r\n";

            ttm += "   #i5120000#   #i5120001#   #i5120002#   #i5120003#\r\n";

            ttm += "   #i5120004#   #i5120005#      #i5120006#\r\n";
 
            ttm += "#rδ��ȡʹ����������:\r\n";

            ttm += "   #i5120007#   #i5120008#   #i5120009#\r\n";

            ttm += "   i5120010#   #i5120012#   #i5120015#"; 

                                               }else if(cm.getChar().getVip() == 4) {


            ttm += "#d4�ǻ�Ա���#k:\r\n\r\n";
 
            ttm += "������ʹ�õ���������Ϊ: #r"+v3_laba+"#k��,��ʹ��#r " + cm.getBossLog('viplaba') + "��. \r\n\r\n";
 
            ttm += "#r����ʹ����������:\r\n";

            ttm += "   #i5120000#   #i5120001#   #i5120002#   #i5120003#   #i5120004#\r\n";

            ttm += "   #i5120005#   #i5120006#   #i5120007#   #i5120008#\r\n";
 
            ttm += "#rδ��ȡʹ����������:\r\n";

            ttm += "   #i5120009#   i5120010#   #i5120012#   #i5120015#"; 


                                               }else if(cm.getChar().getVip() == 5) {


            ttm += "#d������Ա���#k:\r\n\r\n";
 
            ttm += "������ʹ�õ���������Ϊ: #r"+v4_laba+"#k��,��ʹ��#r " + cm.getBossLog('viplaba') + "��. \r\n\r\n";
 
            ttm += "#r����ʹ����������:\r\n";

           ttm += "   #i5120000#   #i5120001#   #i5120002#   #i5120003#   #i5120004#\r\n";

            ttm += "   #i5120005#   #i5120006#   #i5120007#   #i5120008#   #i5120009#\r\n";

            ttm += "   #i5120010#   #i5120012#   #i5120015#"; 
                                              
}
            ttm += "\r\n\r\n#b   �����ѡ��";

            cm.sendNext(ttm);   
            test=2;


}


                                             if (test == 10) {
              var ttm3 = "�����ѡ��:\r\n";

            ttm3 += "#b#L0#"+ttt+" ��ɫ����[��ʾ3��]\r\n\r\n";

            ttm3 += "#b#L1#"+ttt+" �׹ǹ���[��ʾ3��]\r\n\r\n";
                                              
            ttm3 += "#r#L2#"+ttt+" ���Ĺ���[��ʾ3��]\r\n\r\n";

       //     ttm3 += "#r#L3#"+ttt+" ˢ��10�ź�ɫ����\r\n\r\n";

        //    ttm3 += "#r#L4#"+ttt+" ˢ�� 5�ź�ɫ����\r\n\r\n";

            cm.sendSimple(ttm3);  
    test=11;
}

                                             if (test == 100) {
        var ttm3 = "�����ѡ��:\r\n";

            ttm3 += "#b#L3#"+ttt+" ˢ�� 5����ɫ����\r\n\r\n";

            ttm3 += "#b#L4#"+ttt+" ˢ��10����ɫ����\r\n\r\n";
                                              
            ttm3 += "#r#L5#"+ttt+" ˢ�� 5�ź�ɫ����\r\n\r\n";

            ttm3 += "#r#L6#"+ttt+" ˢ��10�ź�ɫ����\r\n\r\n";

           // ttm3 += "#r#L3#"+ttt+" ˢ�� 5�ź�ɫ����\r\n\r\n";

          //  ttm3 += "#r#L4#"+ttt+" ˢ��10�ź�ɫ����\r\n\r\n";

            cm.sendSimple(ttm3);  
    test=11;
}

                                             if (test == 200) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
            cm.sendOk("�뽫ǿ����Ʒ����#b��һ��#kλ��,���ܼ���.");
            cm.dispose();
} else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() ==null) {
var i = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
        var ttm3 = "��ǰװ��: #v"+i.getItemId()+"#. ����ʱ��:#b����#k.\r\n";

            ttm3 += "#b#L0#"+ttt+" ת����ʱ��װ��#l\r\n\r\n";

            ttm3 += "   #r������ת����ʱ��װ��,���ܽ��н�һ������.";

            cm.sendSimple(ttm3);  
    test=110;	

} else {
var i = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
        var ttm3 = "��ǰװ��:#v"+i.getItemId()+"#,����ʱ��:#b"+i.getExpiration()+"#k.\r\n\r\n";
            ttm3 += "#b#L1#"+ttt+" �ӳ�װ��ʱ������\r\n\r\n";

            ttm3 += "#b#L2#"+ttt+" ��Ʒ������ֵ�ƻ�#rHOT\r\n\r\n";
                                              
            ttm3 += "#d#L3#"+ttt+" ʱ��װ���ͼ۳���\r\n\r\n";



            cm.sendSimple(ttm3);  
    test=110;
}}
                                             if (test == 201) {
        var ttm3 = "#b��ѡ�񷽰�:#k.\r\n\r\n";

            ttm3 += "#b#L0#"+ttt+" �����NPC#n\r\n\r\n";

            ttm3 += "#b#L1#"+ttt+" ���ֱ�ӽ��������г�.#n\r\n\r\n";


            cm.sendSimple(ttm3); test=111; }


if (test == 202) {
if (cm.getPlayer().getVip() <= 2){
cm.sendOk("�Ĺ���ֻ����#r���ǻ�Ա,�����Ա#k����.")
cm.dispose();}
else if (cm.getPlayer().getRw1() == 1)
{
cm.sendSimple("#b��ã��װ�����Ϸ��ң���������Ϊ#rVIP3���ϵĻ�Ա#b�ṩ��ֵ���ð���Զ���ȡ���񼴣�\r\n#r�����԰Ѵ�ֵõ��Ľ�Ǯ�Զ����뱳����\r\n#d�㵱ǰ�Ľ�Ǯ�Զ���ȡ״̬Ϊ��#r����\r\n#e#k[ע��]:������ʹ��ȫ������,���ܿ���.#n\r\n\r\n#L0#����ҹر��Զ���ȡ��Ǯ����#l");
test=112;
}
else if (cm.getPlayer().getRw1() == 0)
{
cm.sendSimple("#b��ã��װ�����Ϸ��ң���������Ϊ#rVIP3���ϵĻ�Ա#b�ṩ��ֵ���ð���Զ���ȡ���񼴣�\r\n#r�����԰Ѵ�ֵõ��Ľ�Ǯ�Զ����뱳����\r\n#d�㵱ǰ�Ľ�Ǯ�Զ���ȡ״̬Ϊ��#r�ر�\r\n#e#k[ע��]:������ʹ��ȫ������,���ܿ���.#n\r\n#L1#����ҿ����Զ���ȡ��Ǯ����#l");
test=112;
}}
//-----------------------------------------------------
                                                  }else if (status == 3) {
                                                     if (test == 2) {
     
          var ttzz = "�����ѡ��һ����������:\r\n\r\n";

                                                  if(cm.getChar().getGMLevel() != 0) {
              for (var i = 0; i < 13; i++) {
				ttzz += "#L" + i + "##v" + viplaba[i][1] + "#  #b[#z" + viplaba[i][1] + "#]#l\r\n";}

cm.sendSimple(ttzz);
                        // choose = selection;

            
                          tures = 1;

                                                  }else if(cm.getChar().getVip() == 1) {
              for (var i = 0; i < 5; i++) {
				ttzz += "#L" + i + "##v" + viplaba[i][1] + "#  #b[#z" + viplaba[i][1] + "#]#l\r\n";}

cm.sendSimple(ttzz);
                        // choose = selection;

            
                          tures = 1;

                                         }else if(cm.getChar().getVip() == 2) {
              for (var i = 0; i < 7; i++) {
				ttzz += "#L" + i + "##v" + viplaba[i][1] + "#  #b[#z" + viplaba[i][1] + "#]#l\r\n";}

cm.sendSimple(ttzz);
                        // choose = selection;

            
                          tures = 1;

                                         }else if(cm.getChar().getVip() == 3) {
              for (var i = 0; i < 9; i++) {
				ttzz += "#L" + i + "##v" + viplaba[i][1] + "#  #b[#z" + viplaba[i][1] + "#]#l\r\n";}

cm.sendSimple(ttzz);
                        // choose = selection;

            
                          tures = 1;

                                         }else if(cm.getChar().getVip() == 4) {
              for (var i = 0; i < 13; i++) {
				ttzz += "#L" + i + "##v" + viplaba[i][1] + "#  #b[#z" + viplaba[i][1] + "#]#l\r\n";}

                        cm.sendSimple(ttzz);
                        // choose = selection;

            
                          tures = 1;

}
}
                                 if (test == 11) {
           if(selection==0){
cm.sendGetText("#k[ʹ����Ҫ����#r "+qflaba1+"#k Ԫ��][��֤������20������]!");  
tures = 12;
     }else if(selection==1){
cm.sendGetText("#k[ʹ����Ҫ����#r "+qflaba2+"#k Ԫ��][��֤������20������]!");  
tures = 13;
     }else if(selection==2){
cm.sendGetText("#k[ʹ����Ҫ����#r "+qflaba3+"#k Ԫ��][��֤������20������]!");  
tures = 14;
     }else if(selection==3){
cm.sendGetText("#k[ʹ����Ҫ����#r "+splaba1+"#k Ԫ��][��֤������20������]!");  
tures = 15;
     }else if(selection==4){
cm.sendGetText("#k[ʹ����Ҫ����#r "+splaba2+"#k Ԫ��][��֤������20������]!");  
tures = 16;
     }else if(selection==5){
cm.sendGetText("#k[ʹ����Ҫ����#r "+splaba3+"#k Ԫ��][��֤������20������]!");  
tures = 17;
     }else if(selection==6){
cm.sendGetText("#k[ʹ����Ҫ����#r "+splaba4+"#k Ԫ��][��֤������20������]!");  
tures = 18;

}
}

                             if (test == 110) {
                if(selection==0){

        var ttm3 = "#b#L0#"+ttt+" ת��ʱ��3��Ȩ[����ȫ������#d5%~30%]\r\n\r\n";

            ttm3 += "#d#L1#"+ttt+" ת��ʱ��10��Ȩ[����ȫ������10%.]#l\r\n\r\n";

            ttm3 += "   #k��ʾ������ֵ��10������,������Ч,����һ��װ����Ҫʹ�øù���.";

            cm.sendSimple(ttm3);  

            tures=111;

           }else if(selection==1){

        var ttm3 = "#L2#"+ttt+" #kʹ��Ԫ��#r"+yuezhangzb+"#k��.�ӳ���#r"+timezb+"��#kʹ������.\r\n\r\n";

             ttm3 += "#L3#"+ttt+" #kʹ�ô���#r"+yuezhangcsb+"#k��.�ӳ���#r"+timecsb+"��#kʹ������.\r\n\r\n";

             ttm3 += "#L4#"+ttt+" #kʹ�õ��þ�#r"+yuezhangNX+"#k��.�ӳ���#r"+timeNX+"��#kʹ������.\r\n\r\n";
             ttm3 += "#L5#"+ttt+" #kʹ��ð��#r"+yuezhangmoney+"#k��.�ӳ���#r"+timemoney+"��#kʹ������.\r\n\r\n";
            cm.sendSimple(ttm3);  
            tures=111;


           }else if(selection==2){

        var ttm3 = "#L6#"+ttt+" #e#b��½���� #n#kÿ���½,#rֱ�����#k������������!.\r\n\r\n";

             ttm3 += "#L7#"+ttt+" #e#b����ǿ�� #n#k������������������������.\r\n\r\n";

            cm.sendSimple(ttm3);  
            tures=111;

           }else if(selection==3){
  var text = "��ʱװ�����ܲ�������ǿ��/����,���Թ���Ա�����������Ŀ.\r\n\r\n";

  text += "װ�����ռ������:\r\n";

  text += "   ��ʱװ������Խ��,������õĻ���Խ��,�����ɷ�Ϊ#bԪ��#k,#b����#k,#b����#k,#b���#k4�ֻ�����ʽ.\r\n   ͨ����ʱǿ��ϵͳ,��������װ���ۺ�����,��װ��ʣ��ʱ�䲻��ʱ,����ʹ�øù���.";

  text += "\r\n\r\n"; 

  text += "���ռ����㷨:\r\n\r\n";

  text += "#b����#bԪ��#k:\r\n�� #d[�ۺ�����/40]+[[װ��������-100(���㲻��)]/10]+װ���ɹ����� #k[���Ƶ�����߷���:#r100#kԪ��]\r\n";

  text += "#b����#b����#k:\r\n�� #d[�ۺ�����/40]+[[װ��������-100(���㲻��)]/10]+װ���ɹ����� #k[���Ƶ�����߷���:#r200#k����]\r\n";
  text += "#b����#b����#k:\r\n�� #d[�ۺ�����/40]+[[װ��������-100(���㲻��)]/10]+װ���ɹ����� #k[���Ƶ�����߷���:#r200#k����]\r\n";
  text += "#b����#b���þ�#k:\r\n�� #d[�ۺ�����*100]+[[װ��������-100(���㲻��)]*200]+װ���ɹ����� #k[���Ƶ�����߷���:#r20��#k���þ�]\r\n";
cm.sendNext(text);
  tures=112;
}

}


                             if (test == 111) {
   if(selection==0){
                cm.setRw11(0);
                cm.getPlayer().dropMessage(1, "���óɹ�.");
                cm.dispose();
   }else if(selection==1){
                cm.setRw11(1);
                cm.getPlayer().dropMessage(1, "���óɹ�.");
                cm.dispose();
   }else if(selection==2){
                cm.setRw6(2);
                cm.getPlayer().dropMessage(1, "���óɹ�,����ͼ��Ч.");
                cm.dispose();
   }else{
               
                cm.getPlayer().dropMessage(1, "����ô����������?");
                cm.dispose();
 } }

                             if (test == 112) {
if (selection == 0)
{
cm.getPlayer().setRw1(0);
cm.sendOk("�رմ�ֵõ���Ǯ�Զ����뱳���ɹ���");
cm.dispose();
}
else if (selection == 1)
{
cm.getPlayer().setRw1(1);
cm.sendOk("������ֵõ���Ǯ�Զ����뱳���ɹ���");
cm.dispose();
}}
//-----------------------------------------------------
                                              }else if (status == 4) {
                                                     if (tures == 1) {
      if(selection==0){
typedd=5120000;
}else if(selection==1){
typedd=5120001;
}else if(selection==2){
typedd=5120002;
}else if(selection==3){
typedd=5120003;
}else if(selection==4){
typedd=5120004;
}else if(selection==5){
typedd=5120005;
}else if(selection==6){
typedd=5120006;
}else if(selection==7){
typedd=5120007;
}else if(selection==8){
typedd=5120008;
}else if(selection==9){
typedd=5120009;
}else if(selection==10){
typedd=5120010;
}else if(selection==11){
typedd=5120012;
}else if(selection==12){
typedd=5120015;
}

cm.sendGetText("#k�����ͷ�һ��֮����,���ͺ�ȫ�����˶�����#bף��#k����ʽ��ʾ,��һ��?\r\n\r\n[����ʹ�ô���һ��][��֤������20������]!");  
tures = 2000;
}
                                            if (tures == 12) {
if (cm.getzb() >= qflaba1) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());


cm.setzb(-qflaba1);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+qflaba1+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}
                                             if (tures == 13) {
if (cm.getzb() >= qflaba2) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());


cm.setzb(-qflaba2);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+qflaba2+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}

                                             if (tures == 14) {
if (cm.getzb() >= qflaba3) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());


cm.setzb(-qflaba3);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+qflaba3+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}

if (tures == 15) {
if (cm.getzb() >= splaba1) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.setzb(-splaba1);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+splaba1+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}

if (tures == 16) {
if (cm.getzb() >= splaba2) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.setzb(-splaba2);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+splaba2+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}


if (tures == 17) {
if (cm.getzb() >= splaba3) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.setzb(-splaba3);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+splaba3+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}

if (tures == 18) {
if (cm.getzb() >= splaba4) {
selected = cm.getText();
if (selected.isEmpty) {
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),cm.getPlayer().getName() + "[ˢ]"+" : " + selected ,true).getBytes());
cm.setzb(-splaba4);
cm.getPlayer().dropMessage(1, "�ɹ�ˢ��.�۳�"+splaba4+"Ԫ��.");
cm.dispose();
}else{
cm.sendOk("������ʾ����,������.");
cm.dispose();
}
}else{
cm.sendOk("Ԫ������.");
cm.dispose();
}}
                                           if (tures == 111) {
  var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
  var zg =zz.getStr() + zz.getInt()+ zz.getDex()+ zz.getLuk();
  var zgmin = zg *1.05;
  var zgmax = zg *1.3;

                               if(selection==0){
           var text = "�����ڽ��еĲ�����:#bװ��ʱ��ת��#k.\r\n\r\n";
 
            text += "#b�����������������T��װ��ʱ��ǰ��T����������������#n#l\r\n";
 
            text += ttt +" #dװ��:#v"+zz.getItemId()+"#    "+ttt+" #d���Ե��ܺ�:#b"+zg+"��\r\n\r\n";

            text += "#d�����������������T��װ��ʱ�޺��T����������������#n#l\r\n\r\n";

            text += ttt +" װ����ʱ:#b3��#d  "+ttt+" װ�����Բ�����Χ:#b"+zgmin+"��~"+zgmax+"��.\r\n\r\n";
            text += "#e#r[��ʾ]#n:\r\n#b"+ttt+" װ�������м�������5%~30%[����������].#k������������.��Ʒ������,����ʹ������ǿ���ֶ�.\r\n\r\n";
            text += "#b#e                                �Ƿ������#n#l\r\n\r\n";
          
cm.sendNext(text);
tures=30;
                               }else if(selection==1){
  var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
  var zg =zz.getStr() + zz.getInt()+ zz.getDex()+ zz.getLuk();
  var zgmin = zg *1.1;
           var text = "�����ڽ��еĲ�����:#bװ��ʱ��ת��#k.\r\n\r\n";
 
            text += "#b�����������������T��װ��ʱ��ǰ��T����������������#n#l\r\n";
 
            text += ttt +" #dװ��:#v"+zz.getItemId()+"#    "+ttt+" #d���Ե��ܺ�:#b"+zg+"��\r\n\r\n";

            text += "#d�����������������T��װ��ʱ�޺��T����������������#n#l\r\n\r\n";

            text += ttt +" װ����ʱ:#b10��#d  "+ttt+" װ�����Ըı�Ϊ:#b"+zgmin+".\r\n\r\n";
            text += "#e#r[��ʾ]#n:\r\n#b"+ttt+" װ�����Խ�����10%.[����������].#k������������.��Ʒ������,����ʹ������ǿ���ֶ�.\r\n\r\n";
            text += "#b#e                                �Ƿ������#n#l\r\n\r\n";
          
cm.sendNext(text);
tures=31;

                               }else if(selection==2){
var i = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var shuxing =50;//�����������͵�װ�����Ե�.
  var text = "�����ڽ��еĲ�����:#bװ��ʱ������#k.\r\n\r\n";
 
            text += "#b�����������������T��װ��ʱ��ǰ��T����������������#n#l\r\n";
 
            text += ttt +" #dװ��:#v"+zz.getItemId()+"#"+ttt+" #d����ʱ��:#b"+i.getExpiration()+"#k.\r\n\r\n";

            text += "#d�����������������T��װ��ʱ�޺��T����������������#n#l\r\n\r\n";

            text += ttt +" װ��ʱ���ӳ���:#b"+timezb+"��#d  "+ttt+" #rװ����������#r30%#k.\r\n\r\n";
            text += "#e#r[��ʾ]#n:\r\n#b"+ttt+" װ�����Խ����ȡ��һ�����Ե��������.#k������������.\r\n\r\n";
            text += "#b#e                                �Ƿ������#n#l\r\n\r\n";
          
cm.sendNext(text);
tures=32;
                               }else if(selection==3){
var i = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var shuxing =30;//�����������͵�װ�����Ե�.
  var text = "�����ڽ��еĲ�����:#bװ��ʱ������#k.\r\n\r\n";
 
            text += "#b�����������������T��װ��ʱ��ǰ��T����������������#n#l\r\n";
 
            text += ttt +" #dװ��:#v"+zz.getItemId()+"#"+ttt+" #d����ʱ��:#b"+i.getExpiration()+"#k.\r\n\r\n";

            text += "#d�����������������T��װ��ʱ�޺��T����������������#n#l\r\n\r\n";

            text += ttt +" װ��ʱ���ӳ���:#b"+timecsb+"��#d  "+ttt+" װ����������#r20%#k.\r\n\r\n";
            text += "#e#r[��ʾ]#n:\r\n#b"+ttt+" װ�����Խ����ȡ��һ�����Ե��������.#k������������.\r\n\r\n";
            text += "#b#e                                �Ƿ������#n#l\r\n\r\n";
          
cm.sendNext(text);
tures=33;
                               }else if(selection==4){
var i = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var shuxing =10;//�����������͵�װ�����Ե�.
  var text = "�����ڽ��еĲ�����:#bװ��ʱ������#k.\r\n\r\n";
 
            text += "#b�����������������T��װ��ʱ��ǰ��T����������������#n#l\r\n";
 
            text += ttt +" #dװ��:#v"+zz.getItemId()+"#"+ttt+" #d����ʱ��:#b"+i.getExpiration()+"#k.\r\n\r\n";

            text += "#d�����������������T��װ��ʱ�޺��T����������������#n#l\r\n\r\n";

            text += ttt +" װ��ʱ���ӳ���:#b"+timeNX+"��#d  "+ttt+" װ����������#r10%#k.\r\n\r\n";
            text += "#e#r[��ʾ]#n:\r\n#b"+ttt+" װ�����Խ����ȡ��һ�����Ե��������.#k������������.\r\n\r\n";
            text += "#b#e                                �Ƿ������#n#l\r\n\r\n";
          
cm.sendNext(text);
tures=34;
                               }else if(selection==5){
var i = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var shuxing =10;//�����������͵�װ�����Ե�.
  var text = "�����ڽ��еĲ�����:#bװ��ʱ������#k.\r\n\r\n";
 
            text += "#b�����������������T��װ��ʱ��ǰ��T����������������#n#l\r\n";
 
            text += ttt +" #dװ��:#v"+zz.getItemId()+"#"+ttt+" #d����ʱ��:#b"+i.getExpiration()+"#k.\r\n\r\n";

            text += "#d�����������������T��װ��ʱ�޺��T����������������#n#l\r\n\r\n";

            text += ttt +" װ��ʱ������:#b"+timemoney+"��#d  "+ttt+" װ����������#r10%#k.\r\n\r\n";
            text += "#e#r[��ʾ]#n:\r\n#b"+ttt+" װ�����Խ����ȡ��һ�����Ե��������.#k������������.\r\n\r\n";
            text += "#b#e                                �Ƿ������#n#l\r\n\r\n";
          
cm.sendNext(text);
tures=35;
                               }else if(selection==6){
     if(cm.getVip() == 0) {
   var t =2-cm.getBossLog('SXqianghua');
   var zz = "����#r��ͨ���#k,������ʹ��#r" + cm.getBossLog('SXqianghua') + "#k��,����ʹ��#r"+t+"#k��.";
     }else if(cm.getVip() == 1) {
   var t =2-cm.getBossLog('SXqianghua');
   var zz = "����#rһ�ǻ�Ա#k,������ʹ��#r" + cm.getBossLog('SXqianghua') + "#k��,����ʹ��#r"+t+"#k��.";
     }else if(cm.getVip() == 2) {
   var t =3-cm.getBossLog('SXqianghua');
   var zz = "����#r���ǻ�Ա#k,������ʹ��#r" + cm.getBossLog('SXqianghua') + "#k��,����ʹ��#r"+t+"#k��.";
     }else if(cm.getVip() == 3) {
   var t =3-cm.getBossLog('SXqianghua');
   var zz = "����#r���ǻ�Ա#k,������ʹ��#r" + cm.getBossLog('SXqianghua') + "#k��,����ʹ��#r"+t+"#k��.";
     }else if(cm.getVip() == 4) {
   var t =3-cm.getBossLog('SXqianghua');
   var zz = "����#r�����Ա#k,������ʹ��#r" + cm.getBossLog('SXqianghua') + "#k��,����ʹ��#r"+t+"#k��.";
}

 var text = "ÿ���ֵ�½,�ȿ���װ��������ֵ.\r\n\r\n";

  text += "#r��ͨ���#kÿ���ʹ#r2#k��װ����ֵ#e#b 5#n#k������ֵ.\r\n";

  text += "#rһ�ǻ�Ա#kÿ���ʹ#r2#k��װ����ֵ#e#b10#n#k������ֵ.\r\n";

  text += "#r���ǻ�Ա#kÿ���ʹ#r3#k��װ����ֵ#e#b10#n#k������ֵ.\r\n";

  text += "#r���ǻ�Ա#kÿ���ʹ#r3#k��װ����ֵ#e#b15#n#k������ֵ.\r\n";

  text += "#r�����Ա#kÿ���ʹ#r3#k��װ����ֵ#e#b20#n#k������ֵ.\r\n\r\n";

  text += ""+zz+"\r\n\r\n";
cm.sendNext(text);
tures=36;
                               }else if(selection==7){
 cm.sendOk("��ϵͳ������,���ڴ�.")
 cm.dispose();                           
}
}
                                               if (tures == 112) {
var ttm3 = "��ѡ��Ҫ�����ķ�ʽ:\r\n\r\n";

     ttm3 += "#L1#"+ttt+" ����Ԫ��#l\r\n";

     ttm3 += "#L2#"+ttt+" ��������#l\r\n";

     ttm3 += "#L3#"+ttt+" ��������#l\r\n";

     ttm3 += "#L4#"+ttt+" �������þ�#l\r\n";

cm.sendSimple(ttm3);  
tures= 168;
}
//-----------------------------------------------------

                                              }else if (status == 5) {
     if (tures == 2000) {
if(cm.getChar().getGMLevel() != 0) {
var vipxianz =999999; 
}else if(cm.getChar().getVip() == 1) {
var vipxianz =v1_laba; 
}else if(cm.getChar().getVip() == 2) {
var vipxianz =v2_laba; 
}else if(cm.getChar().getVip() == 3) {
var vipxianz =v3_laba; 
}else if(cm.getChar().getVip() == 4) {
var vipxianz =v4_laba; 

}
selected = cm.getText();
                     if (cm.getBossLog('viplaba') < vipxianz) {
cm.viplaba(selected,typedd);
cm.setBossLog('viplaba');
cm.getPlayer().dropMessage(1, "���ȷ��ͳɹ�.");
cm.dispose();
}else{
cm.sendOk("��Ӧ���յ�ʹ�ô����Ѿ�����.����������~");
cm.dispose();
}}
                                                   if (tures == 30) {  
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
                         if (chanceo>=1 && chanceo <=3){
var beilv =0.10;
        }else if (chanceo>=4 && chanceo <=5){
var beilv =0.15;
        }else if (chanceo>=6 && chanceo <=7){
var beilv =0.25;
        }else if (chanceo>=8 && chanceo <=9){
var beilv =0.30;
        }else {
var beilv =0.05;
}
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 3*86400000);
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var newstr = (item.getStr())* beilv;
var newdex = (item.getDex())* beilv;
var newint = (item.getInt())* beilv;
var newluk = (item.getLuk())* beilv;
                    item.setExpiration(temptime);
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newint);
                    item.setDex(item.getDex()+newdex);
                    item.setLuk(item.getLuk()+newluk);

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.getChar().lockitem1(1,true)
cm.sendOk("�ɹ�,��ϲ��װ���ɹ���Ϊ#b��ʱװ��#k.����ֵ�õ���������.");
cm.dispose();
        }                        

if (tures == 31) {  
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var beilv = 0.1;
var newstr = (item.getStr())* beilv;
var newdex = (item.getDex())* beilv;
var newint = (item.getInt())* beilv;
var newluk = (item.getLuk())* beilv;
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 3*86400000);
                    item.setExpiration(temptime);
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newint);
                    item.setDex(item.getDex()+newdex);
                    item.setLuk(item.getLuk()+newluk);

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.getChar().lockitem1(1,true)
cm.sendOk("�ɹ�,��ϲ��װ���ɹ���Ϊ#b��ʱװ��#k.����ֵ�õ���������.");
cm.dispose();
        }                        

if (tures == 32) { 
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
   var text ="����ʹװ��:#v"+zz.getItemId()+"#��ʹ�����޸ı���#r"+timezb+"#k��.װ����������#r30%#k.����#r"+yuezhangzb+"#k��Ԫ��.��ȷ���Ƿ����."; 
                  cm.sendYesNo(text);
tures=210;
 } 

if (tures == 33) { 
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
   var text ="����ʹװ��:#v"+zz.getItemId()+"#��ʹ�����޸ı���#r"+timecsb+"#k��.װ����������#r20%#k.����#r"+yuezhangcsb+"#k�����.��ȷ���Ƿ����."; 
                  cm.sendYesNo(text);
tures=211;
 } 

if (tures == 34) { 
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
   var text ="����ʹװ��:#v"+zz.getItemId()+"#��ʹ�����޸ı���#r"+timeNX+"#k��.װ����������#r10%#k.����#r"+yuezhangNX+"#k����.��ȷ���Ƿ����."; 
                  cm.sendYesNo(text);
tures=212;
 } 
if (tures == 35) { 
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
   var text ="����ʹװ��:#v"+zz.getItemId()+"#��ʹ�����޸ı���#r"+timemoney+"#k��.װ����������#r10%#k.����#r"+yuezhangmoney+"#k��ð��.��ȷ���Ƿ����."; 
                  cm.sendYesNo(text);
tures=213;
 } 
if (tures == 36) { 
   var text ="��ѡ��Ҫǿ��������ֵ:\r\n\r\n"; 

   text +="#L1#"+ttt+" #d��������#l#L2#"+ttt+" #d��������#l\r\n\r\n#L3#"+ttt+" #d��������#l#L4#"+ttt+" #d��������#l";
                  cm.sendSimple(text);
tures=214;
 } 
                                                   if (tures == 168) {  
if(selection==1){

var ttm3 = "��ѡ�����#bԪ��#k����.��ѡ�����Ӧ�õķ���:\r\n\r\n";

}else if(selection==2){

var ttm3 = "��ѡ�����#b����#k����.��ѡ�����Ӧ�õķ���:\r\n\r\n";

}else if(selection==3){

var ttm3 = "��ѡ�����#b����#k����.��ѡ�����Ӧ�õķ���:\r\n\r\n";

}else if(selection==4){

var ttm3 = "��ѡ�����#b���þ�#k����.��ѡ�����Ӧ�õķ���:\r\n\r\n";

}



     ttm3 += "#L1#"+ttt+" װ�������ܺͷ�Χ��#r100#k��-#r200#k��[����#r50%#k]#l\r\n";

     ttm3 += "#L2#"+ttt+" װ�������ܺͷ�Χ��#r200#k��-#r300#k��[����#r100%#k]#l\r\n";

     ttm3 += "#L3#"+ttt+" װ�������ܺͷ�Χ��#r300#k��-#r400#k��[����#r120%#k]#l\r\n";

     ttm3 += "#L4#"+ttt+" װ�������ܺͷ�Χ��#r400#k��-#r500#k��[����#r150%#k]#l\r\n";

     ttm3 += "#L5#"+ttt+" װ�������ܺͷ�Χ��#r500#k��-#r600#k��[����#r180%#k]#l\r\n";

     ttm3 += "#L6#"+ttt+" װ�������ܺͷ�Χ��#r600#k��-#r700#k��[����#r#e200%#n#k]#l\r\n\r\n";

     ttm3 += "  #e#b[ע]:������Χװ�������ܶһ�.";

cm.sendSimple(ttm3);  
choose =selection;
tures=215;
    }                
//===========================
                                          }else if (status == 6) {
                                         if (tures == 210) { 
if(cm.getzb() >= yuezhangzb) { 
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var newstr = (item.getStr())* 0.3;
var newInt = (item.getInt())* 0.3;
var newDex = (item.getDex())* 0.3;
var newLuk = (item.getLuk())* 0.3;
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + timezb *86400000);
                     item.setExpiration(temptime);
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newInt);
                    item.setDex(item.getDex()+newDex);
                    item.setLuk(item.getLuk()+newLuk);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.setzb(-yuezhangzb);
cm.sendOk("�ɹ�,��ϲ#v"+zz.getItemId()+"#ʹ�������ɹ���Ϊ#r"+timezb+"#k��.");
cm.dispose();
}else{ 
cm.sendOk("Ԫ����������,���ܽ���.");
cm.dispose();
        } }
                                         if (tures == 211) { 
if(cm.getcsb() >= yuezhangcsb) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var newstr = (item.getStr())* 0.2;
var newInt = (item.getInt())* 0.2;
var newDex = (item.getDex())* 0.2;
var newLuk = (item.getLuk())* 0.2;
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + timecsb *86400000);
                     item.setExpiration(temptime);
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newInt);
                    item.setDex(item.getDex()+newDex);
                    item.setLuk(item.getLuk()+newLuk);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.setcsb(-yuezhangcsb);
cm.sendOk("�ɹ�,��ϲ#v"+zz.getItemId()+"#ʹ�������ɹ���Ϊ#r"+timecsb+"#k��.");
cm.dispose();
}else{ 
cm.sendOk("������������,���ܽ���.");
cm.dispose();
        } }
                                         if (tures == 212) {
if(cm.getPlayer().getCSPoints(1) >= yuezhangNX) { 
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var newstr = (item.getStr())* 0.1;
var newInt = (item.getInt())* 0.1;
var newDex = (item.getDex())* 0.1;
var newLuk = (item.getLuk())* 0.1;
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + timecsb *86400000);
                     item.setExpiration(temptime);
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newInt);
                    item.setDex(item.getDex()+newDex);
                    item.setLuk(item.getLuk()+newLuk);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.getPlayer().modifyCSPoints(1,-yuezhangNX);
cm.sendOk("�ɹ�,��ϲ#v"+zz.getItemId()+"#ʹ�������ɹ���Ϊ#r"+timeNX+"#k��.");
cm.dispose();
}else{ 
cm.sendOk("�����,���ܽ���.");
cm.dispose();
        } }
                                         if (tures == 213) { 
if(cm.getMeso() >= yuezhangmoney*100000000) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
var newstr = (item.getStr())* 0.1;
var newInt = (item.getInt())* 0.1;
var newDex = (item.getDex())* 0.1;
var newLuk = (item.getLuk())* 0.1;
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + timecsb *86400000);
                     item.setExpiration(temptime);
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newInt);
                    item.setDex(item.getDex()+newDex);
                    item.setLuk(item.getLuk()+newLuk);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.gainMeso(-yuezhangmoney*100000000);
cm.sendOk("�ɹ�,��ϲ#v"+zz.getItemId()+"#ʹ�������ɹ���Ϊ#r"+timemoney+"#k��.");
cm.dispose();
}else{ 
cm.sendOk("��Ǯ����,���ܽ���.");
cm.dispose();
        } }

                                         if (tures == 214) { 
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
if(selection==1){
var shuxing =Array("����ֵ",5,10,10,15,20,1372);

var nc =zz.getStr();
}else if(selection==2){
var shuxing =Array("����ֵ",5,10,10,15,20,2372);

var nc =zz.getDex();
}else if(selection==3){
var shuxing =Array("����ֵ",5,10,10,15,20,3372);

var nc =zz.getInt();
}else if(selection==4){
var shuxing =Array("����ֵ",5,10,10,15,20,4372);
var nc =zz.getLuk();
}
if(cm.getVip()== 0){
var zt =shuxing[1];
 var t =2-cm.getBossLog('SXqianghua');
 var t1 =2;
}else if(cm.getVip()== 1){
var zt =shuxing[2];
 var t =2-cm.getBossLog('SXqianghua');
 var t1 =2;
}else if(cm.getVip()== 2){
 var t1 =2;
var zt =shuxing[3];
 var t =3-cm.getBossLog('SXqianghua');
}else if(cm.getVip()== 3){
 var t1 =3;
var zt =shuxing[4];
 var t =3-cm.getBossLog('SXqianghua');
 var t1 =3;
}else if(cm.getVip()== 4){
var zt =shuxing[5];
 var t =3-cm.getBossLog('SXqianghua');
 var t1 =3;
}
if(cm.getBossLog('SXqianghua') < t1){
var ncd =nc+zt;
   var text ="����ʹװ��:#v"+zz.getItemId()+"# #b"+shuxing[0]+"#k����#b:"+zt+"#k��.\r\n\r\n"; 

    text +="װ��"+shuxing[0]+"����Ϊ:#r"+ncd+"#k��.";

    text +="   ��ǰʣ��:#r"+t+"#k��ʹ�ô���.";
                  cm.sendYesNo(text);
shuxing1=selection;
tures=152;
}else {
cm.sendOk("��Ǹ.������Ѿ�ʹ�ù�:#r"+cm.getBossLog('SXqianghua')+"#k��,����ʹ��:#r"+t1+"#k��.����������.");
cm.dispose();
 } }

                                         if (tures == 215) { 
  var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
  var zg =zz.getStr() + zz.getInt()+ zz.getDex()+ zz.getLuk();
  var accde =zz.getWatk() + zz.getMatk();
if(selection==1){
var acc = Array(100,200,0.5);//����,����,����
}else if(selection==2){
var acc = Array(200,300,1.0);
}else if(selection==3){
var acc = Array(300,400,1.2);
}else if(selection==4){
var acc = Array(400,500,1.5);
}else if(selection==5){
var acc = Array(500,600,1.8);
}else if(selection==6){
var acc = Array(600,700,2);
}
if(choose==1){
var gb = Array("Ԫ��",100,40,10);//���֡����ޡ�����*/.����*/.
var gbz =gb[2];
var gbm =gb[3];
var s1=zg/gbz;//����
var s2m =accde-100;
var s2=s2m/gbm;//����
choose1 =1;
}else if(choose==2){
var gb = Array("����",200,40,10);
var gbz =gb[2];
var gbm =gb[3];
var s1=zg/gbz;
var s2m =accde-100;
var s2=s2m/gbm;//����
choose1 =2;
}else if(choose==3){
var gb = Array("����",200,40,10);
var gbz =gb[2];
var gbm =gb[3];
var s1=zg/gbz;//����
var s2m =accde-100;
var s2=s2m/gbm;//����
choose1 =3;
}else if(choose==4){
var gb = Array("���þ�",200000,100,200);
var gbz =gb[2];
var gbm =gb[3];
var s1=zg*gbz;//����
var s2m =accde-100;
var s2=s2m/gbm;//����
choose1 =4;
}
if(accde <100){//�жϹ���
var s2z = 0;
}else{
var s2z = s2;
}

//����
var s3 =zz.getUpgradeSlots();//��������s3
sb =s1+s3+s2z;//�ܺ�
var bb =acc[2]*100;
var cc =acc[2]*sb;
if(zg>=acc[0] && zg<acc[1]){//�ж���������

         if(sb <=gb[1]*acc[2]){//�ж��Ƿ�������һ�ֵ-����������.
                    if(zz.getItemId() ==1142178 &&zz.getItemId() ==1142074 &&zz.getItemId() ==1142174 &&zz.getItemId() ==1142151){//�ж��Ƿ�������һ�ֵ-����������.
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
   var text ="�㷨����:#v"+zz.getItemId()+"#����ֵ�ܺ�Ϊ:#r"+zg+"#k��,�������ܺ�:#r"+accde+"#k��,�����ڸ÷���.\r\n\r\n �������:���Զһ�#r"+sb+"#k��"+gb[0]+"��\r\n ���ڷ�Χ����,�������#r"+bb+"%#k,#r"+cc+"#k��"+gb[0]+".�Ƿ�һ�?"; 
                  cm.sendYesNo(text);
choose =cc;
tures=210;

}else{
   var text ="VIPѫ�²��ɶһ�."; 
   cm.sendOk(text);
cm.dispose();
}

}else{
   var text ="#b�㷨���#k:\r\n   ��ǰ�����ɶһ�"+gb[0]+"#r"+sb+"#k��."+gb[0]+"��߿��Զһ�#r"+gb[1]+"#k��.��Ĭ��."; 
   cm.sendOk(text);
cm.dispose();
}
}else{
   var text ="#b�㷨���#k:\r\n   ��ǰ����������:#r"+zg+"#k��,������:#r"+acc[0]+"#k��-#r"+acc[1]+"#k��,������,������ѡ��.[��ȡ����]"; 
   cm.sendOk(text);
cm.dispose();
}
}


//-------------------------------------------
                                               }else if (status == 7) {
                              if (tures == 210) {
if (choose1 == 1) {
cm.setzb(+choose);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
cm.sendOk("�ɹ�,����Ԫ��#b"+choose+"#k��.[ʵ�ʰ���������.4��5����]");
cm.dispose();
}else if (choose1 == 2) {
cm.setcsb(+choose);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
cm.sendOk("�ɹ�,���Ӵ���#b"+choose+"#k��.[ʵ�ʰ���������.4��5����]");
cm.dispose();
}else if (choose1 == 3) {
cm.setjfb(+choose);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
cm.sendOk("�ɹ�,���ӻ���#b"+choose+"#k��.[ʵ�ʰ���������.4��5����]");
cm.dispose();
}else if (choose1 == 4) {
cm.getPlayer().modifyCSPoints(1,+choose);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
cm.getChar().UpdateCash();//������ʾ
cm.sendOk("�ɹ�,���ӵ��þ�#b"+choose+"#k��.[ʵ�ʰ���������.4��5����]");
cm.dispose();

        }}
                              if (tures == 152) {

var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var zz =cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
if(cm.getVip()== 0){
var lz =5;
}else if(cm.getVip()== 1){
var lz =10;
var max = 2;
}else if(cm.getVip()== 2){
var lz =10;
var max = 2;
}else if(cm.getVip()== 3){
var lz =15;
var max = 3;
}else if(cm.getVip()== 4){
var lz =20;
var max = 3;
}
if (shuxing1 == 1) {
var newstr = lz;
var newInt = 0;
var newDex = 0;
var newLuk = 0;
 }else if (shuxing1 == 2) {
var newstr = 0;
var newInt = 0;
var newDex = lz;
var newLuk = 0;
 }else if (shuxing1 == 3) {
var newstr = 0;
var newInt = lz;
var newDex = 0;
var newLuk = 0;
 }else if (shuxing1 == 4) {
var newstr = 0;
var newInt = 0;
var newDex = 0;
var newLuk = lz;
 }
                    item.setStr(item.getStr()+newstr);
                    item.setInt(item.getInt()+newInt);
                    item.setDex(item.getDex()+newDex);
                    item.setLuk(item.getLuk()+newLuk);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.setBossLog('SXqianghua');
cm.sendOk("�ɹ�,��ϲ#v"+zz.getItemId()+"#���Գɹ�����.");
cm.dispose();
        }  
                              

//                   



}
}

}                                                                                                                                                                                                                                                                    