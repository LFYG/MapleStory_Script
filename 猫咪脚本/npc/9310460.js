var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //�ʹ�
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //�ʹ�1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //����
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //��ϵ
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //���� 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var zs = "#fEffect/CharacterEff/1062114/1/0#";  //����
var zss = "#fEffect/CharacterEff/1112946/2/0#";  //שʯ��
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //שʯ��
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //��ϵ
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
var tz2 = "#fEffect/CharacterEff/1082565/0/0#";  //���ӻ�ɫ
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //���
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //����
var tz5 = "#fEffect/CharacterEff/1082588/1/0#";  //�̵�
var tz6 = "#fEffect/CharacterEff/1112900/2/1#";  //������
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //������
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //������
var tz8 = "#fEffect/CharacterEff/1112900/5/1#";  //������!
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //����
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //����
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //����
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //����
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //����
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //����
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //��������
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //��������
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //��������
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //��������
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //��������
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //���ǻ�
var sz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////����2

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("#e#r  "+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"è����ɫѫ��ϵͳ"+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"\r\n"+tz1+""+tz2+""+tz3+""+tz4+""+tz5+""+tz6+""+tz7+""+tz8+""+tz9+""+tz10+""+tz11+""+tz12+""+tz13+""+tz14+""+tz15+""+tz16+""+tz17+""+tz18+""+tz19+""+tz20+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+"\r\n#n#b             ����ѫ�¶���ȫ����+30:��GM��ȡ\r\n#e#k#v1142003#:�����ﵽ300��-300��ȫ��+-��1ö��\r\n#e#k#v1142002#:�ռ�����ţ2�����GM(ȫ��1ö)\r\n#e#k#v1142146#:����ͽ����δ���ţ�ȫ��1ö��\r\n#e#k#v1142656#:����һ���²�ͬ����������ࣨȫ��1ö��\r\n#e#k#v1142543#:�ռ�100��#v4310003#��û�յ��ߣ�ȫ��1ö��\r\n#e#k#v1142541#:��һ���ﵽ250������ң�ȫ��1ö��\r\n#e#k#v1142540#:�ڶ����ﵽ250������ң�ȫ��1ö��\r\n#e#k#v1142539#:�������ﵽ250������ң�ȫ��1ö��\r\n#e#k#v1142218#:��һ������ȫ�����е���ң�ȫ��1ö��\r\n#e#k#v1142790#:�Ա������������׵���ң�GM�Է�ȫ��1ö��\r\n#e#k#v1142335#:QȺ��һ����ǩ��һ���£�ȫ��1ö��\r\n#e#k#v1142794#:GM��л�ã�ȫ��1ö��\r\n#e#k#v1142793#:GM��л�ã�ȫ��1ö��\r\n#e#k#v1142792#:GM��л�ã�ȫ��1ö��\r\n#e#k#v1142791#:GM��л�ã�ȫ��1ö��");
		} else if (status == 1) {
            cm.sendPrev("\r\n#b7):#rÿ��20��,�����������պ�������Ͳ�ͣ,�涨��ʱ����ֻ�������.\r\n#b8):#rͨ�����������Ի������ѫ��,ѫ��˫��ʹ�ú���Ի������,�����ȼ����������������\r\n#b9):#rͨ�����������Ի������֮��RED,˫��ʹ�ú����Ի��RED��,�����г�RED���̵깺����Ʒ\r\n#b10):#r��boss�����Ե�������,����Ҽ������г�������̵깺����Ʒ\r\n#b11):#r��������һԪ,���Ի���׳�����.���������뵽�г�����鿴\r\n#b12):#r�������������ǵĹٷ�����Ⱥ:2335015,���ס���ǵ���վ��www.65465.cn");
		} else if (status == 3) {
			cm.dispose();
		}
	}
}
