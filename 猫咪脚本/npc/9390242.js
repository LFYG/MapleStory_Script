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
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
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
			cm.sendNext("#e#r  "+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"è����ɫѫ��ϵͳ"+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"\r\n"+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+"\r\n#n#b             ����ѫ�¶���ȫ����+30:��GM��ȡ\r\n#e#k#v1142003#:�����ﵽ300��-300��ȫ��+-��1ö��\r\n#e#k#v1142002#:�ռ�����ţ2�����GM(ȫ��1ö)\r\n#e#k#v1142146#:����ͽ����δ���ţ�ȫ��1ö��\r\n#e#k#v1142656#:����һ���²�ͬ����������ࣨȫ��1ö��\r\n#e#k#v1142543#:�ռ�100��#v4310003#��û�յ��ߣ�ȫ��1ö��\r\n#e#k#v1142541#:��һ���ﵽ250������ң�ȫ��1ö��\r\n#e#k#v1142540#:�ڶ����ﵽ250������ң�ȫ��1ö��\r\n#e#k#v1142539#:�������ﵽ250������ң�ȫ��1ö��\r\n#e#k#v1142218#:��һ������ȫ�����е���ң�ȫ��1ö��\r\n#e#k#v1142790#:�Ա������������׵���ң�GM�Է�ȫ��1ö��\r\n#e#k#v1142335#:QȺ��һ����ǩ��һ���£�ȫ��1ö��\r\n#e#k#v1142794#:GM��л�ã�ȫ��1ö��\r\n#e#k#v1142793#:GM��л�ã�ȫ��1ö��\r\n#e#k#v1142792#:GM��л�ã�ȫ��1ö��\r\n#e#k#v1142791#:GM��л�ã�ȫ��1ö��");
		} else if (status == 1) {
            cm.sendPrev("\r\n#b7):#r���и���ѫ�¼��룬�н������ȡ����ϵ�ͷ���");
		} else if (status == 3) {
			cm.dispose();
		}
	}
}
