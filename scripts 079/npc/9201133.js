importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);
var status = 0;
var party;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
var party4 = cm.getPlayer().getParty();	
 var treeboss00Map = cm.getC().getChannelServer().getMapFactory().getMap(677000012); 
 var mapobjects = treeboss00Map.getMapObjects(); 
 var boss = null; 
 var player = null; 
 var iter = mapobjects.iterator(); 
var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(677000012);

 o = iter.next(); 
   if (o.getType() == MapleMapObjectType.MONSTER){ 
    boss = o; 
   } 
   if (o.getType() == MapleMapObjectType.PLAYER){ 
    player = o; 
   } 
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
					var vipstr = " 5ԪvIp��";					
				}else if(cm.getChar().getVip() == 2){
					var vipstr = " 5ԪvIp��";					
				}else if(cm.getChar().getVip() == 3){
					var vipstr = " 5ԪvIp��";
                                }else if(cm.getChar().getVip() == 4){
					var vipstr = " 5ԪvIp��";						
				}else{
					var vipstr = " 5ԪvIp��";					
				}
if (cm.getPlayer().getMapId() == 105050400 &&cm.haveItem(4001035)>=1){
cm.summonMob(8830000, 2000000000, 100000, 1);//����5EѪ
 cm.gainItem(4001035,-1);
cm.serverNotice("[����]: ��� [" + cm.getPlayer() + "] �ҵ��˷�ŭ�������,���Ƿ��ܻ�ý�һ��ͻ����?");
cm.sendOk("[�޴�����ħ]��#rѪ��:#d�������������������� \r\n#r              ����:#d����������\r\n�ٻ��ɹ�������������ô������\r\n#d�����ռ�������[#v3010040##v1122012##v1332055##v1332056#]#k�����ʽϵ�."); 
cm.dispose();

}else if (cm.getPlayer().getMapId() == 677000013){//��ʼǰ
			cm.sendSimple("�����󹫵�����,�����𺳲���!��Ը����ս��������?\r\n\r\n#r�������̣�\r\n  #k1.��ʼ������������,ֱ����ȡ#b�������Ұ��ñ��#kΪֹ#n.\r\n  #k2.����#b�������Ұ��ñ��#k��������󹫵�ͼ,�����.#n.\r\n#r��������\r\n  #v4031344#,����ϵ������,����ð�ձ�.\r\n#r������ʾ��\r\n  #k1.�������һ���������,�ɵ�������,�ڶ��ؿ����.\r\n  #k2.�ڶ�����Ҫ���#bָ��ñ��#k,��;����ñ��,���̻س�.\r\n  #k3.������ɽ��з�Χ:#r0ת-70ת���#k.\r\n#L6##bNo.1 ���������������Χ#l");

}else if (cm.getPlayer().getMapId() == 677000012){//����
        cm.sendSimple("�����󹫵�����,�����𺳲���!��Ը����ս��������?\r\n\r\n#r�������̣�\r\n  #k1.��ʼ������������,ֱ����ȡ#b�������Ұ��ñ��#kΪֹ#n.\r\n  #k2.����#b�������Ұ��ñ��#k��������󹫵�ͼ,�����.#n.\r\n#r��������\r\n  #v4031344#,����ϵ������,����ð�ձ�.\r\n#r������ʾ��\r\n  #k1.�������һ���������,�ɵ�������,�ڶ��ؿ����.\r\n  #k2.�ڶ�����Ҫ���#bָ��ñ��#k,��;����ñ��,���̻س�.\r\n  #k3.������ɽ��з�Χ:#r0ת-70ת���#k.\r\n#L71##b��������#l");	
}else if (cm.getPlayer().getMapId() == 677000011){//����
	cm.sendSimple("�����󹫵�����,�����𺳲���!��Ը����ս��������?\r\n\r\n#r�������̣�\r\n  #k1.��ʼ������������,ֱ����ȡ#b�������Ұ��ñ��#kΪֹ#n.\r\n  #k2.����#b�������Ұ��ñ��#k��������󹫵�ͼ,�����.#n.\r\n#r��������\r\n  #v4031344#,����ϵ������,����ð�ձ�.\r\n#r������ʾ��\r\n  #k1.�������һ���������,�ɵ�������,�ڶ��ؿ����.\r\n  #k2.�ڶ�����Ҫ���#bָ��ñ��#k,��;����ñ��,���̻س�.\r\n  #k3.������ɽ��з�Χ:#r0ת-70ת���#k.\r\n#L70##bNo.2 ���������#l");	
}
}else if (status == 1) {
			var viplevel = cm.getChar().getVip();
			if(selection == 2){
				var text = "�ʼ�ı仯�Ǵ����鴬��ʼ,���鴬������,����ˮ���Ǳ�ñ��겻��,�ǲ��Ǻ�ħ��ʦ��Ϊ?\r\n�����鴬���ŵ�ʱ��ֻ��ÿ���#r16:00-24:00#b\r\n����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��\r\n\r\n�����Ҹò���ȥ���Һ�ħ��ʦ���µ�֤����?";
cm.sendNext(text);
			}else if(selection == 3){
          if (cm.haveItem(4001035)>=1) {
				var text = "��ħ��ʶ����Ϣ������Ʈ��������֮�ǵ�ĳ���ض�,����ʲô�����أ�\r\n��ʶ�����¼�������:  #r�޴�..����..��..#b������! �ڰ�ͨ��!#k\r\n\r\n�����Ҹò���ȥ���Һ�ħ��ʦ���µ�֤����?";
cm.sendOk(text);cm.dispose();
}else{
var text = "���ռ���һ�׶���Ʒ#v4001035#";
cm.sendOk(text);cm.dispose();
}

			}else if(selection == 6){
				if(cm.haveItem(1003036,1,true,false)){
cm.sendOk("���ӵ������ñ��.");
cm.dispose();
				}else if(cm.getPlayer().getReborns()>70){
cm.sendOk("���Ѿ�û���ʸ�μӸ�����.");
cm.dispose();
}else {

cm.warp(677000011,0);	
cm.sendOk("�����ܴ�����.�ռ���#r�������Ұ��ñ��#k,������ʿ����������.");				
					cm.dispose();
				}

			}else if (selection == 4){
			  if (cm.haveItem(4031282)>=1) {
				var text = "��ħ��ʶ����Ϣ������Ʈ��������֮�ǵ�ĳ���ض�,����ʲô�����أ�\r\n��ʶ�����¼�������:  #r�޴�..����..��..#b������! �ڰ�ͨ��!#k\r\n\r\n�����Ҹò���ȥ���Һ�ħ��ʦ���µ�֤����?";
cm.sendOk(text);cm.dispose();
}else{
var text = "���ռ���һ�׶���Ʒ#v4031282#";
cm.sendOk(text);cm.dispose();
}

}else if (selection == 111){
				cm.showlvl();				
					cm.dispose();
}else if (selection == 112){
				cm.showfame();				
					cm.dispose();
}else if (selection == 113){
				cm.showreborns();				
					cm.dispose();
}else if (selection == 114){
				cm.displayGuildRanks();				
					cm.dispose();
}else if (selection == 115){
				cm.showpvpkills();				
					cm.dispose();
}else if (selection == 116){
				cm.showpvpdeaths();				
					cm.dispose();
				
			}else if (selection == 70){
if(!cm.haveItem(1003036,1,true,false)){
cm.sendOk("�㻹û�ռ���ñ��.");
cm.dispose();
}else if (nextmap.countMobOnMap() > 0 && nextmap.playerCount() > 0){
			cm.sendOk("����������ս.���Ե�.");
			cm.dispose();

}else if (party4 == null || party4.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ������ˡ���Ӷ��ɽ��С�");
                    cm.dispose();

                               }else{

cm.getC().getChannelServer().getMapFactory().getMap(677000012).clearMapTimer();
cm.getC().getChannelServer().getMapFactory().getMap(677000012).killAllMonsters();
			nextmap.setOnUserEnter("diyudagong");
			cm.warpParty(677000012);
			cm.dispose();

				}
			}else if (selection == 71){
              var m = cm.getPlayer().getMap()
		//if(m.playerCount() > 1){
			m.clearMapTimer();
			m.killAllMonsters();
			//m.resetReactors();
			m.setOnUserEnter("");
			cm.warp(910000000,0);	
cm.dispose();
			}else if (selection == 8){
				if(viplevel < 0){					
					cm.sendOk("��Ŀǰ��VIP�ȼ���Ȩ����˵�ͼ!")
					cm.dispose();
				}else{
					cm.warp(vip4bj,0);					
					cm.dispose();
				}
			}else if (selection == 5){
				if(cm.getBossLog("smmxd_GZ")< 1){
					var vipstr = "��ͨ���";
					var sf_money = 0;
					var sf_item = 0;
					var sf_Nx = 0;
					var noticeType = 2;
					var quantity;
					if(viplevel <= 0){
						sf_money = GZ_Player_money;
						sf_item = GZ_Player_item[0];
						quantity = GZ_Player_item[1];
						sf_Nx = GZ_Player_Nx;
                                                sf_zb = GZ_Player_zb; 
						vipstr = "��ͨ���"
						var noticeType = 2;
					}else if(viplevel == 1){
						sf_money = GZ_V1_money;
						sf_item = GZ_V1_item[0];
						quantity = GZ_V1_item[1];
						sf_Nx = GZ_V1_Nx;
						sf_zb = GZ_V1_zb;	
						vipstr = "�����VIP��";
						var noticeType = 2;
					}else if(viplevel == 2){
						sf_money = GZ_V2_money;
						sf_item = GZ_V2_item[0];
						quantity = GZ_V2_item[1];
						sf_Nx = GZ_V2_Nx;
						sf_zb = GZ_V2_zb;
						vipstr = "���߼�VIP���";
						var noticeType = 3;
					}else if(viplevel == 3){
						sf_money = GZ_V3_money;
						sf_item = GZ_V3_item[0];
						quantity = GZ_V3_item[1];
						sf_Nx = GZ_V3_Nx;
						sf_zb = GZ_V3_zb;
						vipstr = "����ƽ�VIP����";
						var noticeType = 11;

					}else if(viplevel >= 4){
						sf_money = GZ_V4_money;
						sf_item = GZ_V4_item[0];
						quantity = GZ_V4_item[1];
						sf_Nx = GZ_V4_Nx;
						sf_zb = GZ_V4_zb;
						vipstr = "���������VIP�����";	
						var noticeType = 12;						
					}
					if((cm.getMeso()+ sf_money) < 2147483647){
						cm.gainMeso(sf_money);
                                                cm.setzb(sf_zb);			
						cm.getChar().modifyCSPoints(1,sf_Nx);
						cm.getChar().UpdateCash();   //������ʾ����״̬
						if (quantity > 0){
							cm.gainItem(sf_item,quantity);
						}
						cm.setBossLog("smmxd_GZ");
						cm.sendOk("���ѳɹ���ȡ��#rVIP"+ cm.getChar().getVip() +"#k�Ĺ���#r" + sf_money + "#k��ҡ�#r" + sf_Nx + "#k�����ȯ��#r" + sf_zb + "#k��������#r" + quantity + "#k��ף����");
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(noticeType,cm.getC().getChannel(),"���ʷ���Ա" + " : " + "��ϲ " + vipstr + " " + cm.getPlayer().getName() +" ��ȡ������Ĺ���"  + sf_money + "��ҡ�" + sf_Nx + "�����ȯ��" + sf_zb + "��������" + quantity + "��ף����",true).getBytes());
						cm.dispose();
					}else{
						cm.sendOk("���������ϵ�Ǯ����,�Ѿ�װ���½���Ĺ�����,������к�������ȡ�ɣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("����Ϊ24Сʱ����һ��,�������Ѿ���ȡ��������,����������!");
					cm.dispose();
				}
			}									
		}else if (status == 2) {
if(cm.haveItem(1003036,1,true,false)){
cm.sendOk("���ӵ������ñ��.");
cm.dispose();
}else if (cm.haveItem(4000382) ||cm.haveItem(4000379) ||cm.haveItem(4000383)) {
cm.sendOk("����㱳�������:#v4000382##v4000379##v4000383#���.");
cm.dispose();
}else {	
cm.warp(541010010,0);	
cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�300��#v4000382#.��ע��ʱ��!!!����24��,������Ϊ����.!");
cm.dispose();
}
}	
	}
}

