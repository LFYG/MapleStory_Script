var status = 0;
var gv="��û��BOSS�ٻ���ͼ�������ٻ�BOSS";
var a="";
var id;
var id1;
var id2;
var sl;
var gw;
var zj=2;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
    if (cm.getMapId()==104010200) {
	gv="��ţ��";
	a=0;
	id=4000000;
	id1=4000016;
	id2=4000019;
	sl=100;
	gw=2220000;
   }else if (cm.getMapId()==102020500) {
	gv="������";
	a=0;
	id=4000003;
	id1=4000018;
	id2=4000005;
	sl=100;
	gw=3220000;
   }else if (cm.getMapId()==120030500) {
	gv="�޾�з";
	a=0;
	id=4000043;
	id1=4000044;
	id2=4000045;
	sl=100;
	gw=5220001;
   }else if (cm.getMapId()==101040300) {
	gv="��ʿ��";
	a=0;
	id=4000029;
	id1=4000031;
	id2=4000041;
	sl=100;
	gw=5220002;
   }else if (cm.getMapId()==220050100) {
	gv="��Ī";
	a=0;
	id=4000113;
	id1=4000114;
	id2=4000115;
	sl=100;
	gw=5220003;
   }else if (cm.getMapId()==103030400) {
	gv="���";
	a=0;
	id=4000034;
	id1=4000032;
	id2=4000033;
	sl=100;
	gw=6220000;
   }else if (cm.getMapId()==105020400) {
	gv="С�Ե�";
	a=0;
	id=4031151;
	id1=4001430;
	id2=4000185;
	sl=100;
	gw=8220009;
   }else if (cm.getMapId()==240040401) {
	gv="����";
	a=0;
	id=4000268;
	id1=4000269;
	id2=4000270;
	sl=100;
	gw=8220003;
   }else if (cm.getMapId()==200080000) {
	gv="Զ�ž���";
	a=0;
	id=4000059;
	id1=4000060;
	id2=4000061;
	sl=100;
	gw=9300039;
   }else if (cm.getMapId()==541010050) {
	gv="���鴬��";
	a=0;
	id=4000379;
	id1=4000382;
	id2=4000383;
	sl=100;
	gw=9420513;
   }else if (cm.getMapId()==200010302) {
	gv="������";
	a=0;
	id=4000070;
	id1=4000071;
	id2=4000072;
	sl=100;
	gw=8220000;
   }else if (cm.getMapId()==105030500) {
	gv="�����";
	a=0;
	id=4000028;
	id1=4000046;
	id2=4000027;
	sl=100;
	gw=8130100;
   }else if (cm.getMapId()==200000100) {
	gv="����ħ";
	a=0;
	id=4000028;
	id1=4000046;
	id2=4000027;
	sl=100;
	gw=8150000;
   }else if (cm.getMapId()==211040300) {
	gv="����ѩ��";
	a=0;
	id=4000050;
	id1=4000053;
	id2=4000054;
	sl=100;
	gw=8220001;
   }else if (cm.getMapId()==251010102) {
	gv="�������";
	a=0;
	id=4000293;
	id1=4000294;
	id2=4000295;
	sl=100;
	gw=5220004;
   }else if (cm.getMapId()==270030500) {
	gv="�׿�";
	a=0;
	id=4000457;
	id1=4000455;
	id2=4000458;
	sl=100;
	gw=8220006;
   }else if (cm.getMapId()==270020500) {
	gv="����������";
	a=0;
	id=4000452;
	id1=4000453;
	id2=4000450;
	sl=100;
	gw=8220005;
   }else if (cm.getMapId()==270010500) {
	gv="���";
	a=0;
	id=4000447;
	id1=4000448;
	id2=4000445;
	sl=100;
	gw=8220004;
   }else if (cm.getMapId()==250020300) {
	gv="������ż";
	a=0;
	id=4000287;
	id1=4000287;
	id2=4000287;
	sl=100;
	gw=5090001;
   }else if (cm.getMapId()==250010504) {
	gv="������ʦ";
	a=0;
	id=4000288;
	id1=4000289;
	id2=4000290;
	sl=50;
	gw=7220002;
   }else if (cm.getMapId()==250010304) {
	gv="�ϵ���";
	a=0;
	id=4000279;
	id1=4000280;
	id2=4000281;
	sl=100;
	gw=7220000;
   }else if (cm.getMapId()==801030000) {
	gv="Ů�ϰ�";
	a=0;
	id=4000092;
	id1=4000093;
	id2=4000094;
	sl=100;
	gw=9400121;
        zj=10;
   }else if (cm.getMapId()==100010000) {
	gv="��ˮ����";
	a=0;
	id=4000004;
	id1=4000004;
	id2=4000011;
	sl=100;
	gw=9300003;
   }else if (cm.getMapId()==222010402) {
	gv="��ɫ���";
	a=0;
	id=4000169;
	id1=4000173;
	id2=4000172;
	sl=100;
	gw=7130400;
   }else if (cm.getMapId()==222010401) {
	gv="��ɫ���";
	a=0;
	id=4000169;
	id1=4000173;
	id2=4000172;
	sl=100;
	gw=7130401;
   }else if (cm.getMapId()==222010400) {
	gv="��ɫ���";
	a=0;
	id=4000169;
	id1=4000173;
	id2=4000172;
	sl=100;
	gw=7130402;
   }else if (cm.getMapId()==261010102) {
	gv="������";
	a=0;
	id=4000361;
	id1=4000355;
	id2=4000354;
	sl=100;
	gw=8220002;
   }else if (cm.getMapId()==260010201) {
	gv="������";
	a=0;
	id=4000329;
	id1=4000330;
	id2=4000331;
	sl=100;
	gw=3220001;
       }
        var selStr = "�װ���#r#h ##k���ã�����ѡ������Ҫ���ٻ���BOSS:\r\n\r\n#b#L"+a+"#"+gv+"#l\r\n#L1#��"+zj+"���н��ٻ�"+gv;
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if(cm.haveItem(id,sl)&&cm.haveItem(id1,sl)&&cm.haveItem(id2,sl)){
cm.gainItem(id,-sl);
cm.gainItem(id1,-sl);
cm.gainItem(id2,-sl);
cm.spawnMonster(gw,1);
}else{
cm.sendOk("��û�д���\r\n#v"+id+"#"+sl+"��,#v"+id1+"#"+sl+"��,#v"+id2+"#"+sl+"��.");
cm.dispose();
}
            break;
        case 1:
            if(cm.haveItem(4000463,zj)){
cm.gainItem(4000463,-zj);
cm.spawnMonster(gw,1);
cm.dispose();
}else{
cm.sendOk("��û�д���\r\n#v4000463#"+zj+"��.");
cm.dispose();
}
            break;
        }
    }
}