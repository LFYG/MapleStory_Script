/*
 �ű����ܣ������ű�V2��
 */

var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////��ɳ©
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////��ָ��
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////����ָ��
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////����ָ��
var yun4 = "#fUI/UIWindow/Quest/reward#";////����
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////����2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////����!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //�ʹ�
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //�ʺ��
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //�ʹ�
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //�ʹ�1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //����
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //��ϵ
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //���� 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //שʯ��
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //שʯ��
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //��ϵ
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //������
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //������
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //������!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////��ɫԲ
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
var a = 0;
var time = new Date();
var day = time.getDay();
switch (day) {
    case 0:
        var d = "������";
        break;
    case 1:
        var d = "����һ";
        break;
    case 2:
        var d = "���ڶ�";
        break;
    case 3:
        var d = "������";
        break;
    case 4:
        var d = "������";
        break;
    case 5:
        var d = "������";
        break;
    case 6:
        var d = "������";
        break;
    default:
}
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hour > 12) {
    hour -= 12;
    var apm = "����";
} else {
    var apm = "����";
}
if (hour < 10) {
    hour = "0" + hour;
}
if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}
//ʱ����Ʋ��ֽ���
var icon = "#fUI/Basic.img/icon/arrow#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var iconMeso = "#fUI/Basic.img/BtCoin/normal/0#";
var List = Array(
        //1 �������  2 ��Ϸ��԰
        //Array(icon + " �����г�", 99, 1),
        Array(icon + " ���ܴ���", 2, 1),
        Array(icon + " ����תְ", 4, 3),
        Array(icon + " ÿ�ջ�Ծ", 23, 3),
        Array(icon + " ÿ�ո���", 41, 2),
        Array(icon + " ������", 800, 1,9900003),
        Array(icon + " ��ɫ����", 108, 3),
        Array(icon + " ��Ӹ���", 6, 3, 9310144),
        Array(icon + " ���и���", 13, 1),
        //Array(icon + " �н�һ�", 0, 1, 9310071), //? testing
        Array(icon + " ���öһ�", 42, 1), //todo
        //Array(icon + " ����֮·", 1, 1, 9900004),
        Array(icon + " ������", 500, 3),
        Array(icon + " ѧϰ����", 22, 3),
		Array(icon + " �����̵�", 1, 1),
		
		Array(icon + " ������", 2, 1,9900002),
		Array(icon + " ���߽���", 608, 1,9900003),
		//Array(icon + " ���д��", 14, 1,9900003),
		
		Array(icon + " ��ֵ����", 8, 1,9310144),
		Array(icon + " �ȼ�����", 12, 1,9900002),
		Array(icon + " ���긱��", 0, 1,2091011),
		
		Array(icon + " ���ۻ���", 17, 1,9310144),
		Array(icon + " �������", 6, 1,9900003),
		Array(icon + " �һ�ħ��", 0, 1,9010014),
		
		Array(icon + " ��Ʒ����", 500, 1,9900003)
        )
var text;
//�Ƿ������֣�ģʽ�����

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "" + xxx + "���ߣ�" + cm.getPlayer().getTodayOnlineTime() + "��\t\t  " + xxx + "�ۼƳ�ֵ��" + cm.getTotalRMB() + "\r\n" + xxx + "��ȯ:" + cm.getNX(1) + "\t\t" + xxx + "����ȯ:" + cm.getNX(2) + "\r\n" + xxx + "��ǰ������ʱ�䣺" + hour + "ʱ" + min + "��" + sec + "��\r\n";
            //text += "#e------------------------------------------#n\r\n"
            text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "\r\n"
            var x = 0;
            for (var i = 0; i < List.length; i++) {
                if (x == 2) {
                    text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                    x = 0;
                } else {
                    text += "  #L" + i + "#" + List[i][0] + "#l";
                    x++;
                }
            }
            //text += "#e\r\n------------------------------------------#n\r\n"
            text += "\r\n" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + ""
            text += " #d#e#L1002#" + iconMeso + "�����̳�" + iconMeso + "#l#L1000#" + iconMeso + "��ֵ��վ" + iconMeso + "#l#L1001#" + iconMeso + "�ٷ���վ" + iconMeso + "#l"
            text += " \r\n#L2000##e#r��#b����#r��#k ��ף((��;))ð�յ����ȿ���~������\r\n"
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 2000) {
                cm.sendOk("��ף((��;))ð�յ����ȿ���~��������");
                a = -1;
            }
            else if (selection == 1002) {
                cm.dispose();
                cm.EnterCS();
                cm.dispose();
            } else if (selection == 1000) {
                cm.dispose();
                cm.openWeb("http://www.baidu.com");
            } else if (selection == 1001) {
                cm.dispose();
                cm.openWeb("http://www.baidu.com");
            } else {
                var mode_ = List[selection][1];
                var npcid = 9900003;
                if (List[selection][3] != null)
                {
                    npcid = List[selection][3];
                }
                cm.dispose();
                cm.openNpc(npcid, mode_);
            }
        }//a
    }//mode
}//f


function getMyRmb() {
    var myRmb;
    var conn = cm.getConnection();
    var sql = "select rmb from accounts where id = ?;";
    var pstmt = conn.prepareStatement(sql);
    pstmt.setString(1, cm.getPlayer().getAccountID());
    var myRmbSql = pstmt.executeQuery();
    if (myRmbSql.next()) {
        myRmb = myRmbSql.getString("rmb");
    } else {
        myRmb = 0;
    }
    myRmbSql.close();
    pstmt.close();
    return myRmb;
}

