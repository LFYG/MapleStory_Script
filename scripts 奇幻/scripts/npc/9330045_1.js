/*
 *			���㳡������Ա
 *			��� 2015.1.29
 */

var status;
var price1 = 100; //����۸� (���þ�)
var price2 = 150; //�߼�����۸� (���)
var price3 = 1  ;       //�߼����У԰�ҹ���
var price_st = -1;
var choose = -1;
var chooses = -1;
var str_name = '';
var num = -1;
var db;
var player;
var bbb = "#fUI/UIWindow.img/Shop/meso#";

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    //player = cm.getPlayer();
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
    }
    if (status == 0) {
        var str = "�ܸ����������ǵĵ��㳡����������Ҫʲô����\r\n"+getTimeNow()+"\r\n#b"+ bbb +" �������: #r#e"+getJF()+"#n#k #b��#k "+ bbb +" #bУ԰�ҵ�: #r#e" + cm.getHyPay(1) + "#n#k #b��#k\r\n";
        str += "#b"+ bbb +" ���: #r#e"+cm.getPlayer().getCSPoints(1)+"#n#k #b��#k "+ bbb +" #b���þ�: #r#e" + cm.getPlayer().getCSPoints(2) + "#n#k #b��#k\r\n";
        //str += "#L15#����#z4033507#������Ȩ��#l\r\n";
        str += "#L0#������ͨ����#b[15��Ȩ]#k#l\r\n";
		//str += "#L9#������ͨ���ͣ�����Ȩ��#l\r\n";
        str += "#L1#������ͨ���#k#l #L2#����߼����#b[�����]#k#l\r\n";
		str += "#L12#����߼����#b[У԰�ҹ���]#r[�Ż�60%]#k\r\n";
        //str += "#L10#����#z3011000#������Ȩ���º�����1.3��������ʣ�#l\r\n";
		//str += "#L11#����߼�˫�����㿨������Ȩ��#l\r\n"";
        str += "#L3#ʹ�ø�����һ��ɻ���#r��������֣�#k\r\n#L8#ʹ��#r#z2431690##k�һ�ϡ����Ʒ#l#L55##r#e������ֱ���������#n#l\r\n";
		str += "#L7#ÿ�µ������а��������#k#l";
        str += "#L4##k���α�����������#b#l\r\n";
        //str += "#L5#�˳����㳡#l\r\n";
        cm.sendSimple(str);
    } else if (status == 1) {
        choose = selection;
        if (selection == 0) {//�����
            cm.sendYesNo("����͵������� #v1432039#��15��Ȩ�� ,ʹ�õ���ͣ�15��Ȩ���������ڵ��㳡�����Ŷ����Ȼ���ڸ߼����㳡�У�����ͣ�ר�����ӣ�˫�����㿨���߼����Ҳ�Ǳ�Ҫ�ģ�\r\n\r\n\r\n���Ƿ���Ҫ��\r\n\r\n�۸�#b 5E/�ˣ�15��Ȩ��;");
        }
        if (selection == 9) {
            cm.sendYesNo("����͵������� #v1432039#������Ȩ�� ,ʹ�õ���ͣ�����Ȩ���������ڵ��㳡�����Ŷ����Ȼ���ڸ߼����㳡�У�����ͣ�ר�����ӣ�˫�����㿨���߼����Ҳ�Ǳ�Ҫ�ģ�\r\n\r\n\r\n���Ƿ���Ҫ��\r\n\r\n�۸�#b 20000У԰�ҵ�/�ˣ�����Ȩ��;");
        }
        if (selection == 10) {
            cm.sendYesNo("#z3011000#�������� #v3011000# ,#v3011000#�������ڵ��㳡�����Ŷ����Ȼ���ڸ߼����㳡�У�����ͣ�ר�����ӣ�˫�����㿨���߼����Ҳ�Ǳ�Ҫ�ģ�\r\n\r\n\r\n���Ƿ���Ҫ��\r\n\r\n�۸�#b 30000У԰�ҵ�/#r#z3011000#������Ȩ��");
        }
        if (selection == 12) {
            cm.sendGetText("�߼������������ #v2300001# ��������Ե���������Դ���������ջ�����#bÿ " + price3 + " ��У԰��/ #r50#b ��#k��\r\n����Ҫ����У԰�ҵ����:#b[ע�Ᵽ���㹻�Ŀո񣬷����޷�����]");
        }
        if (selection == 11) {
            cm.sendYesNo("�߼�˫�����㿨�������� #v5220002# ,#v5220002#�������ڵ��㳡�����Ŷ����Ȼ���ڸ߼����㳡�У�����ͣ�ר�����ӣ�˫�����㿨���߼����Ҳ�Ǳ�Ҫ�ģ�\r\n\r\n\r\n���Ƿ���Ҫ��\r\n\r\n�۸�#b 250000У԰�ҵ�/#r#z5220002#������Ȩ��");
        }
        if (selection == 15) {
            cm.sendYesNo("#z4033507#�������� #v4033507# ,#v4033507#�����Կ����������г����е��㣡����������ص��㣬�ٶȿ��ܻ���2������Ȼ����ͣ����Ҳ�Ǳ�Ҫ�ģ�\r\n\r\n\r\n���Ƿ���Ҫ��\r\n\r\n�۸�#b 50000У԰�ҵ�/#r#z4033507#������Ȩ��");
        }
        if (selection == 1) {
            cm.sendGetText("����������� #v2300000# ��ÿ #b" + price1 + " ���þ�/1��#k\r\n����Ҫ(#b����������#k):");
        }
        if (selection == 2) {
            cm.sendGetText("�߼������������ #v2300001# ��������Ե���������Դ���������ջ�����#bÿ " + price2 + " ���/1��#k������Ҫ#b[ע�Ᵽ���㹻�Ŀո񣬷����޷�����]:");
        }
        if (selection == 3) {
            cm.sendNext("�ò����ǽ����е������㻻�ɻ���,�Ƿ������");
        }
        if (selection == 4) { //����
			var m = "#r���µĵ������а����£��������µ׽���֮ǰ�������Լ������������ⱻ����󷴳�Ŷ��#k\r\n";
			var getPM = cm.getConnection().prepareStatement("SELECT name,dyjf FROM characters where gm<6 ORDER by dyjf desc LIMIT 20").executeQuery();
			var i = 0;
			while(getPM.next()){
				i++;
				var name = getPM.getString("name");
				var jf = getPM.getInt("dyjf");
				m+= "#e��"+i+"��\t\t#r"+jf+"#k����\t\t\t#b"+name+"#k#n\r\n";
			}
            cm.sendOkS(m,2);
            cm.dispose();
        }
        if (selection == 5) {
            cm.sendNext("���Ҫ�˳����㳡��");
        }
        if (selection == 6) {
            cm.sendOk("��ͨ���㳡����һ�㣬��Ҫ������ͨ��͡�������ۻ��ջ�������㣬�ύ���ֲ���ÿ�µ���󽱣��ḻ����������Ϯ������ϡ�еĽ�����ϵ�жһ����ö������㷢�֣�");
            cm.dispose();
        }
        if (selection == 7) {
cm.sendOk("#e����������#n\r\nÿ�½��е�������������ǰ20�����������´���Ŷ��\r\n#r[ע�⣺ÿ�µ׽����������ͳ��,ÿ��1��ͳ�Ʒ���]\r\n#e#rNo.1��\r\n#n#e#b#v3994577#iPodtouch��#v2430453#��˵�챦ʯ*5, #v2340000#ף������*5��#v2432971#�ļ�����������*2#k\n\r\n#e#rNo.2-4��\r\n#n#e#b99999���#v2430453#��˵�챦ʯ*3��#v2340000#ף������*3\r\n\r\n#r#eNo.5-10��\r\n#n#e#b58888���#v2430453#��˵�챦ʯ*2��#v2340000#ף������*2\r\n\r\n#r#eNo.11-20��\r\n#n#e#b9999���#v2430453#��˵�챦ʯ*1��#v2340000#ף������*1\r\n\r\##k#e#v2430453##b��˵�챦ʯ#k��˫����������������ͻ�����ޣ�ͻ����ֵ��Χ��#r[#b5W-20W#r]#k����\r\n#v2432971##b�ļ�����������#k��˫�����ɿ������־���ϡ�е�#r[#b����#r]#kŶ�����л�����#r[#bϡ�е���#r]#k\r\n#v3994577##g#k#biPodtouch#k��#g#k�����ڽ����棬������#g#e��������#k���ر��ļ�Ʒ#r[#kiPodtouch#r]#k");
            cm.dispose();
        }
        if (selection == 8) {
            //cm.sendNext("��ʱά���һ��������ڴ���");
           cm.dispose();
            cm.openNpc(9310025);
        }
        if (selection == 55) {
            //cm.sendNext("��ʱά���һ��������ڴ���");
           cm.dispose();
            cm.openNpc(9330045,3);
        }
    } else if (status == 2) {
               if (choose == 0) {
            if (cm.getMeso() >= 500000000) {
                cm.gainMeso( - 500000000);
                cm.gainItem(1432039, 1,15);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("�ɹ�����.");
            } else {
                cm.sendOk("ð�ձҲ���򱳰��ռ䲻��.");
            }
            cm.dispose();
        }
        if (choose == 15) {
            if (cm.getHyPay(1) >= 50000) {
	    cm.addHyPay(50000);
                cm.gainItem(4033507, 1);
               //giveitem(4033507,0,24*1);
                cm.sendOk("�ɹ�����.");
            } else {
                cm.sendOk("У԰�ҵ㲻��򱳰��ռ䲻��.");
            }
            cm.dispose();
        }
   if (choose == 10) {
               if (cm.getHyPay(1) >= 30000) {
				cm.addHyPay(30000);
                cm.gainItem(3011000, 1);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("�ɹ�����.");
            } else {
                cm.sendOk("У԰�ҵ㲻��򱳰��ռ䲻��.");
            }
            cm.dispose();
        }
   if (choose == 12) {
                num = parseInt(cm.getText());
            if (num < 0 || isNaN(num)) {
                cm.sendOk("����Ƿ�.");
                cm.dispose();
            }
            cm.sendYesNo("��������ǣ� #b" + num + " #k�� У԰�ң����Ի����� #b" + (num * 50) + " ��#k #v2300001#\r\nȷ��Ҫ������#b[ע�Ᵽ���㹻�Ŀո񣬷����޷�����]");
            }
   if (choose == 11) {
               if (cm.getHyPay(1) >= 250000) {
	    cm.addHyPay(250000);
                cm.gainItem(5220002, 1);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("�ɹ�����.");
            } else {
                cm.sendOk("У԰�ҵ㲻��򱳰��ռ䲻��.");
            }
            cm.dispose();
        }
  if (choose == 9) {
            if (cm.getHyPay(1) >= 20000) {
	    cm.addHyPay(20000);
                cm.gainItem(1432039, 1);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("�ɹ�����.");
            } else {
                cm.sendOk("У԰�ҵ㲻��򱳰��ռ䲻��.");
            }
            cm.dispose();
        }
        if (choose == 1) {
            num = parseInt(cm.getText());
            if (num < 0 || isNaN(num)) {
                cm.sendOk("����Ƿ�.");
                cm.dispose();
            }
            cm.sendYesNo("���� #b" + num + " #k�� #v2300000#�����Ҫ��#b" + (num * price1) + " ���þ�#k��ȷ��������");
        }
        if (choose == 2) {
            num = parseInt(cm.getText());
            if (num < 0 || isNaN(num)) {
                cm.sendOk("����Ƿ�.");
                cm.dispose();
            }
            cm.sendYesNo("���� #b" + num + " #k�� #v2300001#�߼������Ҫ��#b" + (num * price2) + " �� #k���\r\nȷ��Ҫ������#b[ע�Ᵽ���㹻�Ŀո񣬷����޷�����]");
        }
        if (choose == 3) {
            price_st = calculate();
            if (price_st) {

                cm.sendYesNo("�������£�\r\n" + calculate_text() + "\r\n\r\n#k���ƣ�#b " + price_st + "#k ����,�Ƿ�һ�?");
            } else {
                cm.sendOk("�㻹û��һ���ջ��.");
                cm.dispose();
            }
        }
        if (choose == 5) {
            cm.warp(910000000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        if (choose == 1) {
            if (cm.getPlayer().getCSPoints(2) >= num * price1 && cm.canHold(2300000) && cm.getSpace(2) > num/121 && cm.getSpace(2) > num/121) {
                cm.gainNX(2, - num * price1);
                cm.gainItem(2300000, num);
                cm.sendOk("����ɹ�.");
                cm.dispose();
            } else {
                cm.sendOk("���þ���򱳰��ռ䲻�㡣");
                cm.dispose();
            }
        }
        if (choose == 2) {
            if (cm.getPlayer().getCSPoints(1) >= num * price2 && cm.canHold(2300001) && cm.getSpace(2) > num/121 && cm.getSpace(2) > num/121) {
                cm.gainNX( - num * price2);
                cm.gainItem(2300001, num);
                cm.sendOk("����ɹ�.");
                cm.dispose();
            } else {
                cm.sendOk("�����򱳰��ռ䲻�㡣");
                cm.dispose();
            }
        }
        if (choose == 3) {
            addjf(price_st);
            calculate_del();
            cm.sendOk("�ɹ����ӻ��֡�");
			cm.playerMessage("[���ֶһ�]������ " + price_st + " �������֡�");
            cm.dispose();
        }
		if (choose == 12) {
            if (cm.getHyPay(1) < num || !cm.canHold(2300001) || cm.getSpace(2) < (num * 50) /121) {
				cm.sendOk("У԰�ҵ㲻��򱳰��ռ䲻��.");
                cm.dispose();
            } else if (cm.addHyPay(num) > 0 ) {
                cm.gainItem(2300001, num * 50);
				cm.playerMessage(- 1,"�������� "+ num +" ��У԰�ҡ�");
                cm.sendOk("����ɹ���");
				cm.worldMessage(0x19, "���������" + " : " + "��� " + cm.getChar().getName() + " ������ "+ num * 50 +" ����Ʒ���ʸ߼�������������������");
                cm.dispose();
            }
        }
    }
}

var fish = [
//�ܵ��������㣬�۸�
[4031627, 1], [4031628, 1], [4031630, 1], [4031631, 1], [4031633, 1], [4031634, 1], [4031635, 1], [4031636, 1], [4031637, 1], [4031638, 1], [4031639, 1], [4031640, 1], [4031641, 1], [4031642, 2], [4031643, 2], [4031644, 2], [4031645, 3], [4031646, 3], [4031647, 3], [4031648, 4]];
function getTimeNow(){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('0 5=3.2.4.t();0 7=5.6(3.2.4.e);0 8=5.6(3.2.4.h)+1;0 g=5.6(3.2.4.f);0 9=5.6(3.2.4.l);0 d=5.6(3.2.4.j);0 c=5.6(3.2.4.i);0 a=5.6(3.2.4.s);0 p="u��#b"+7+"v"+8+"r"+9+"n "+d+"m"+c+"o"+a+"q#k";',32,32,'var||util|java|Calendar|ca|get|year|month|day|sec||min|hour|YEAR|DAY_OF_WEEK|weekday|MONTH|MINUTE|HOUR_OF_DAY||DATE|ʱ|��|��|str|��|��|SECOND|getInstance|Ŀǰ������ʱ��Ϊ|��'.split('|'),0,{}));
	return str;
}

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('7 5(){6 5=4.m().k("s g,8 v h A K 8 E C F").y();9 5}7 G(){6 j=D;6 5=4.m().k("s 8 v h u g = ?");5.o(1,4.q());5=5.y();p(5.H()){j=5.L("8")}9 j}7 I(w){6 d=4.m().k("J h B 8 = 8 + ? u g = ?");d.U(1,w);d.o(2,4.q());d.T()}7 V(){6 e=\'\';l(6 i=0;i<3.f;i++){p(4.a(3[i][0])){e+="\\t#b>>#z"+3[i][0]+"# x "+4.a(3[i][0])+",O��"+4.a(3[i][0])*3[i][1]+" N.\\r\\n"}}9(e==\'\')?"M.":e}7 P(){l(6 i=0;i<3.f;i++){4.S(3[i][0],-4.a(3[i][0]))}9 R}7 Q(){6 c=0;l(6 i=0;i<3.f;i++){c+=4.a(3[i][0])*3[i][1]}9 c;c}',58,58,'|||fish|cm|getPM|var|function|dyjf|return|itemQuantity||count|add|str|length|name|characters||rs|prepareStatement|for|getConnection||setString|if|getName||SELECT||where|FROM|jf||executeQuery||ORDER|set|LIMIT|999|desc|20|getJF|next|addjf|UPDATE|by|getInt|��ʱ��|����|��ȡ|calculate_del|calculate|true|gainItem|executeUpdate|setInt|calculate_text'.split('|'),0,{}))
