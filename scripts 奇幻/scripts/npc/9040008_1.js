/*
���
����������ȡ
2015.1.28
*/

function start() {

    status = -1;
    action(1, 0, 0);	
 
}

function getPaiming(){
	var rs = 999;
	var getPM = cm.getConnection().prepareStatement("SELECT id FROM UsedMonth where accname = ?");
					 getPM.setString(1, cm.getC().getAccountName());
					 getPM = getPM.executeQuery();
	if(getPM.next())
	{
		rs = getPM.getInt("id")%15;
		if(rs ==0){rs = 15;}
	}
	return rs;
}

function getLingqu(){
	var rs = 999;
	var getLQ = cm.getConnection().prepareStatement("SELECT lingqu FROM UsedMonth where accname = ?");
					 getLQ.setString(1, cm.getC().getAccountName());
					 getLQ = getLQ.executeQuery();
	if(getLQ.next())
	{
		rs = getLQ.getInt("lingqu");
	}
	return rs;
}

function setLingqu(){
	var getLQ = cm.getConnection().prepareStatement("Update UsedMonth set lingqu = 1 where accname = ?");
					 getLQ.setString(1, cm.getC().getAccountName());
					 getLQ = getLQ.executeUpdate();
}

    var yesno;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
	
        if (status == 0) {
					var lastmonthpay = cm.getConnection().prepareStatement("SELECT payUsed,lastmonth FROM hypay where accname = ?");
					 lastmonthpay.setString(1, cm.getC().getAccountName());
					 lastmonthpay = lastmonthpay.executeQuery();
					var payUsed = 0;
					var lastmonth = 0;
					while(lastmonthpay.next()){
						payUsed = lastmonthpay.getInt("payUsed");
						lastmonth = lastmonthpay.getInt("lastmonth");
					}
					var a = "#e����������ã���ӭ����ÿ�������������Ѱ��µ�ͳ�Ʒ���ÿ����������������ƴ�µ�ˬ���������#n\r\n";

						a+= "#r#e�����ڼ�������У԰�ң�#b[ "+(payUsed-lastmonth)+" ]#r ��#k#n\r\n\r\n";
						//a+= "#L1# #fEffect/CharacterEff/1082565/4/0##e#b �����������ѻ���� #fEffect/CharacterEff/1082565/4/0##n#l\r\n";
						a+= "#L2# #fEffect/CharacterEff/1082565/4/0##e#g ������������������� #fEffect/CharacterEff/1082565/4/0##n#k#l\r\n";
						a+= "#L3# #fEffect/CharacterEff/1082565/4/0##r#e�����������л�#b[����콱]#r#fEffect/CharacterEff/1082565/4/0##n#l\r\n";
					if (cm.getPlayer().getGMLevel() >= 6) {
						a+= "\r\n\r\n#L4# ������Ա ��ջ�����ּ�¼ ˢ�����ݡ� #l\r\n";
						}
        	cm.sendNext(a);
		
		}else if(status == 1){
			if(selection == 1){
				var b = "#e#r�´�����#k���ֽ�ÿ�¾����������л���µ��賿ͳ�Ʒ�����������У԰��������ߵ���ҽ����������з��󽱣��������²�ѯ���飩\r\n\r\n";
					b+="#b���Ѱ�#k#rNo.1#k��\r\n #r388888���#k #v2340000#ף������#b*10#k��#v2022530#ӭ��������#b*3#k��#v2431724#�ߵ�װ����#b*2#k��#v2431990#������100%������#b*5#k\r\n\r\n";
					b+="#b���Ѱ�#k#rNo.2#k��\r\n#r188888���#k #v2340000#ף������#b*7#k��#v2022530#ӭ��������#b*2#k��#v2431724#�ߵ�װ����#b*1#k��#v2431990#������100%������#b*3#k\r\n\r\n";
					b+="#b���Ѱ�#k#rNo.3#k��\r\n#r58888���#k #v2340000#ף������#b*5#k��#v2022530#ӭ��������#b*1#k��#v2431724#�ߵ�װ����#b*1#k��#v2431990#������100%������#b*2#k\r\n\r\n";
					b+="#b���Ѱ�#k#rNo.4#k��\r\n#r38888���#k #v2340000#ף������#b*3#k��#v2431724#�ߵ�װ����#b*1#k��#v2431990#������100%������#b*2#k\r\n\r\n";
					b+="#b���Ѱ�#k#rNo.5-No.10#k��\r\n#r18888���#k #v2340000#ף������#b*2#k��#v2430453#��˵�챦ʯ#b*2#k��#v2431990#������100%������#b*1#k\r\n\r\n";
					b+="#b���Ѱ�#k#rNo.10-No.15#k��\r\n#r8888���#k #v2340000#ף������#b*1#k��#v2430453#��˵�챦ʯ#b*1#k��#v2431987#������50%������#b*2#k\r\n\r\n";
					b+="#e#v2431724#�ߵ�װ���䣺�����ӱص�#r[#b150������#r]#k��#r[#b����ϵ��#r]#k��#r[#b����ϵ��#r]#k��#r[#b��߼����յ�ϵ��#r]#kװ����\r\n";
					b+="#e#v2431990#���������ӣ�˫�����ɿ�������#r[#b������100%����#r]#k��#r[#b������50%����#r]#kһ�š�\r\n";
				    b+="#e#v2430453#��˵�챦ʯ��˫����������������ͻ�����ޣ�ͻ����ֵ��Χ��#r[#b5W-20W#r]#k���ȡ�\r\n\r\n";
					b+="#b��ܰ��ʾ��ÿ���µ��賿ͳ��������ʾ��������У԰�ҽ�������Ӱ�������ܼ����а���ע�⡣\r\n\r\n";
					cm.sendOk(b);
					cm.dispose();
			}else if(selection == 2){
				var c = "У԰�������а� #b#e15#k#n ����ң�\r\n";
					c+="#r#e��ܰ��ʾ�����ע�����밲ȫ����Ҫ���׸����������롣�޸��ѶȽϸߵ����룬��ֹ���š�#n\r\n\r\n";
					var paimingAcc=new Array();
			var pairs = cm.getConnection().prepareStatement("SELECT accname,(payUsed - lastmonth) as UM FROM hypay order by (payUsed - lastmonth) desc limit 15").executeQuery();
			var i = 0;
			while(pairs.next())
			{
				paimingAcc[i]= pairs.getString(1);
				name = paimingAcc[i].substr(0,4)+"*****";
				if(i == 0){
				c+="#e#r No."+(i+1)+"#n#k\t\t #e#r"+name+"\t\t ������"+pairs.getInt("UM")+"#n#k\r\n";
				}else if(i == 1){
				c+="#e#b No."+(i+1)+"#n#k\t\t #e#b"+name+"\t\t ������"+pairs.getInt("UM")+"#n#k\r\n";
				}else if(i == 2){
				c+="#e#g No."+(i+1)+"#n#k\t\t #e#g"+name+"\t\t ������"+pairs.getInt("UM")+"#n#k\r\n";
				}else if(i >= 3 && i<= 8){
				c+="#e No."+(i+1)+"#n#k\t\t #e"+name+"\t\t ������"+pairs.getInt("UM")+"#n#k\r\n";
				}else{
				c+="#e No."+(i+1)+"#n#k\t\t#e"+name+"\t\t ������"+pairs.getInt("UM")+"#n#k\r\n";
				}
				i++;
			}

				    
					cm.sendOk(c);
					cm.dispose();					
			}else if(selection == 3){
				var d = "#e���������������л���ѽ�����Ŀǰ�䷢#rǰ15��#k�������ѻ񽱵���ң�������ȡ�����ɣ�\r\nÿ���賿��ͳ�������������������������У԰�ҽ�����ʣ��У԰�ҵ���������ѵ����������û�ϰ���������ҽ����ȵǵ���ʧ��#n#k\r\n\r\n";
					d+="#L1##fEffect/CharacterEff/1082565/2/0##b�����������а������������콱��#k#fEffect/CharacterEff/1082565/2/0##l"
					cm.sendOk(d);
			}else if(selection == 4){
			cm.sendYesNoS("ȷ��Ҫ������������а���",2);
			yesno = 1;
			}

		}else if(status == 2){
		    if(yesno == 1){
			if (cm.getPlayer().getGMLevel() >= 6) {
				var qingkong = cm.getConnection().prepareStatement("TRUNCATE TABLE UsedMonth").executeUpdate();
				var baocun = cm.getConnection().prepareStatement("insert into UsedMonth (accname,usedMonth,lingqu) select accname,(payUsed - lastmonth) as usedMonth,0 as lingqu from hypay order by (payUsed - lastmonth) desc limit 15").executeUpdate();
				var cleanmonth = cm.getConnection().prepareStatement("update hypay set lastmonth = payUsed").executeUpdate();
				var d = "����ǰ15�������ݿ⣬���ɹ�����������ѻ��棡\r\n\r\n";
					cm.sendOk(d);
					cm.dispose();
			}else{
			    cm.playerMessage(1,"�����ǹ���Ա");
				cm.dispose();
			}
			}
			var paimingAcc=new Array();
			var pairs = cm.getConnection().prepareStatement("SELECT accname FROM UsedMonth limit 15").executeQuery();
			var i = 0;
			while(pairs.next())
			{
				paimingAcc[i]= pairs.getString(1);
				i++;
			}
			if(selection == 1){
				var e = "#e�����Ӧ�˺ţ�ϵͳ�Զ����Ž�����#rע�Ᵽ���ո����#k��������ɲ���Ҫ����ʧ�������ѵĽ���ͳ������������Ҿ�����ȡ����õ�У԰�ҽ������������������������֪Ϥ��#n\r\n";
				var pm = getPaiming();
				var lq = getLingqu();
			var paimingAcc=new Array();
			var Accname=new Array();
			var pairs = cm.getConnection().prepareStatement("SELECT accname FROM UsedMonth limit 15").executeQuery();
			var i = 0;
			while(pairs.next())
			{
				
				paimingAcc[i]= pairs.getString(1);
				Accname[i] = paimingAcc[i].substr(0,4)+"*****";
				i++;
			}

					if(pm<=15&&lq==0)
					{
					e+="#e#r��ϲ�㣬����ϸ������������� ��"+pm+"�����㻹û��ȡ��Ľ������뾡����ȡ��#n#k\r\n";
					e += "#L1##e#r��һ����#b"+Accname[0]+"#k#r[�����ȡ]\r\n";
					e += "#L2##r�ڶ�����#b"+Accname[1]+"#k#r[�����ȡ]\r\n";
					e += "#L3##r��������#b"+Accname[2]+"#k#r[�����ȡ]\r\n";
					e += "#L4##r��������#b"+Accname[3]+"#k#r[�����ȡ]\r\n";
					e += "#L5##r��5-10����#b"+Accname[4]+","+Accname[5]+","+Accname[6]+","+Accname[7]+","+Accname[8]+","+Accname[9]+","+"#k#r[�����ȡ]\r\n";
					e += "#L6##r��11-15����#b"+Accname[10]+","+Accname[11]+","+Accname[12]+","+Accname[13]+","+Accname[14]+","+"#k#r[�����ȡ]\r\n";
						cm.sendOk(e);
					}else if(pm>15){
						e+="#e#r���ź��������û�н���ǰ15����û���κν���������ȡ���´��ټ���Ŭ���ɣ�#n#k";
						cm.sendOk(e);
					cm.dispose();	
					}else{
						e+="#e#r�������Ѿ���ȡ����Ŷ,����¼���Ŭ����!#n#k";
						cm.sendOk(e);
					cm.dispose();	
					}
					
			}
		
		
		}else if(status == 3){
			if(selection == 1){ //ѡ���һ���������ﴦ��
				var pm = getPaiming();
				if(pm == 1 && getLingqu() == 0){//�õ��������ж��ǲ��ǵ�һ��
					//-�� 1 ��
					// 388888���
					// 2340000,10 ף������
					// 2022530,3 ӭ��������
					// 2431724,2 �ߵ�װ������
					// 2431990,5 ������100%��������
					cm.gainNX(388888);
					cm.gainItem(2340000,10);
					cm.gainItem(2022530,3);
					cm.gainItem(2431724,2);
					cm.gainItem(2431990,5);
					setLingqu();//������ȡ��¼ 
					cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�����󽱣���ϲ��ϲ����", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    /*cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    cm.worldMessage("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    cm.worldMessage("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");
                    cm.worldMessage("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.1�߶�󽱣���ϲ��ϲ����");*/
					cm.sendOk("��ϲ���ɹ���ȡ��һ������");
					cm.dispose();
				}else{
					cm.sendOk("�Բ��������Ǹ��������� �� ������ȡ����");
					cm.dispose();
				}

			}else if(selection == 2){ //ѡ���һ���������ﴦ��
				var pm = getPaiming();
				if(pm == 2 && getLingqu() == 0){//�õ��������ж��ǲ��ǵ�һ��
					//��ƷԤ��λ��
					// �� 2 ��
					// 188888���
					// 2340000,7 ף������
					// 2022530,2 ӭ��������
					// 2431724,1 �ߵ�װ������
					// 2431990,3 ������100%��������
					cm.gainNX(188888);
					cm.gainItem(2340000,7);
					cm.gainItem(2022530,2);
					cm.gainItem(2431724,1);
					cm.gainItem(2431990,3);
					setLingqu();//������ȡ��¼ 
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.2�߶�󽱣�ף��ף�أ���", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.2�߶�󽱣�ף��ף�أ���");
                    cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getName() +"����ȡ�������а�No.2�߶�󽱣�ף��ף�أ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getName() +"����ȡ�������а�No.2�߶�󽱣�ף��ף�أ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getName() +"����ȡ�������а�No.2�߶�󽱣�ף��ף�أ���");
					cm.sendOk("��ϲ���ɹ���ȡ�ڶ�������");
					cm.dispose();
				}else{
					cm.sendOk("�Բ��������Ǹ��������� �� ������ȡ����");
					cm.dispose();
				}
					
			}else if(selection == 3){ //ѡ���һ���������ﴦ��
				var pm = getPaiming();
				if(pm == 3 && getLingqu() == 0){//�õ��������ж��ǲ��ǵ�һ��
					//��ƷԤ��λ��
					// -�� 3 ��
					// 58888���
					// 2431724,1 �ߵ�װ������
					// 2022530,1 ӭ��������
					// 2340000,5 ף������
					// 2431990,2 ������100%��������
					cm.gainNX(58888);
					cm.gainItem(2431724,1);
					cm.gainItem(2022530,1);
					cm.gainItem(2340000,5);
					cm.gainItem(2431990,2);
					setLingqu();//������ȡ��¼ 
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.3���󽱣�ף��ף�أ���", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.3���󽱣�ף��ף�أ���");
                    cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.3���󽱣�ף��ף�أ���");	
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.3���󽱣�ף��ף�أ���");	
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.3���󽱣�ף��ף�أ���");	
					cm.sendOk("��ϲ���ɹ���ȡ����������");
					cm.dispose();
				}else{
					cm.sendOk("�Բ��������Ǹ��������� �� ������ȡ����");
					cm.dispose();
				}
					
			}else if(selection == 4){ //ѡ���һ���������ﴦ��
				var pm = getPaiming();
				if(pm == 4 && getLingqu() == 0){//�õ��������ж��ǲ��ǵ�һ��
					//��ƷԤ��λ��
					// -�� 4 ��
					// 38888���
					// 2431724,1 �ߵ�װ������
					// 2340000,3 ף������
					// 2431990,2 ������100%��������
					cm.gainNX(38888);
					cm.gainItem(2431724,1);
					cm.gainItem(2340000,3);
					cm.gainItem(2431990,2);

					setLingqu();//������ȡ��¼ 
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.4���󽱣�ף��ף�أ���", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.4���󽱣�ף��ף�أ���");
                    cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.4���󽱣�ף��ף�أ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.4���󽱣�ף��ף�أ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.4���󽱣�ף��ף�أ���");
					cm.sendOk("��ϲ���ɹ���ȡ����������");
					cm.dispose();
				}else{
					cm.sendOk("�Բ��������Ǹ��������� �� ������ȡ����");
					cm.dispose();
				}
					
			}else if(selection == 5){ //ѡ���һ���������ﴦ��
				var pm = getPaiming();
				if(pm>=5 && pm<=10 && getLingqu() == 0){//�õ��������ж��ǲ��ǵ�һ��
					//��ƷԤ��λ��
					// -��5-10��
					// 18888���
					// 2340000,2 ף������
					// 2430453,2 ��˵�챦ʯ��ͻ�������������޵���
					// 2431990,1 ������100%��������
					cm.gainNX(18888);
					cm.gainItem(2340000,2);
					cm.gainItem(2430453,2);
					cm.gainItem(2431990,1);
					setLingqu();//������ȡ��¼ 
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.5-10���ִ󽱣�ף��ף�أ���", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.5-10���ִ󽱣�ף��ף�أ���");
                    cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.5-10���ִ󽱣�ף��ף�أ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.5-10���ִ󽱣�ף��ף�أ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.5-10���ִ󽱣�ף��ף�أ���");
					cm.sendOk("��ϲ���ɹ���ȡ������ʮ������");
					cm.dispose();
				}else{
					cm.sendOk("�Բ��������Ǹ��������� �� ������ȡ����");
					cm.dispose();
				}
					
			}else if(selection == 6){ //ѡ���һ���������ﴦ��
				var pm = getPaiming();
				if(pm>=11 && pm<=15 && getLingqu() == 0){//�õ��������ж��ǲ��ǵ�һ��
					//��ƷԤ��λ��
					// -��11-15��
					// 8888���
					// 2340000,1 ף������
					// 2430453,1 ��˵�챦ʯ��ͻ�������������޵���
					// 2431987,2 ������50%��������
					cm.gainNX(8888);
					cm.gainItem(2340000,1);
					cm.gainItem(2430453,1);
					cm.gainItem(2431987,2);
					setLingqu();//������ȡ��¼ 
                    cm.getPlayer().getMap().startMapEffect("[������������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.11-15���ߴ󽱣���ϲ�ɺأ���", 5121043);
                    cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"����ȡ�������а�No.11-15���ߴ󽱣���ϲ�ɺأ���");
                    cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.11-15���ߴ󽱣���ϲ�ɺأ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.11-15���ߴ󽱣���ϲ�ɺأ���");
					cm.worldMessage(0x19, "[������������]" + " : " + "��"+ cm.getChar().getName() +"����ȡ�������а�No.11-15���ߴ󽱣���ϲ�ɺأ���");
					cm.sendOk("��ϲ���ɹ���ȡ��ʮһ��ʮ�影��");
					cm.dispose();
				}else{
					cm.sendOk("�Բ��������Ǹ��������� �� ������ȡ����");
					cm.dispose();
				}
					
			}



}}
