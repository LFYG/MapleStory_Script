/*
 �ű����ܣ������ű�V2��
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var List = Array(
		
		//��������
        
		Array(icon1+"#r���ܴ���#k", 2, 1),
		Array(icon1+"#r��Ϸ����#k", 200, 1, 9900004),
		Array(icon1+"#r���г�#k", 99, 1),
		Array(icon1+"#r��ֵ�һ�#k", 101, 1, 9310144),
		
		
		
		//Array(icon3+"#bÿ��ǩ��#k", 7, 2),
        Array(icon1+"#rÿ������#k", 12, 2), //TODO
        //Array(icon3+"#b����ǩ��#k", 502, 2),
		//Array(icon3+"#b���߽���#k",608, 2, 9900003),
		Array(icon1+"#rְҵתְ#k", 4, 2),
		Array(icon1+"#rѧ����#k", 22, 2),
		Array(icon1+"#r��Ծ��ѯ#k", 23, 2),
		
		
		
		Array("#b��ϲ����#k", 108, 3),
		Array("#b��ս����", 13, 3),
		Array("#b�������", 6, 3, 9310144),
		Array("#b��������", 501, 3),//TODO
		
		Array("#r��Ϸ��ֵ", 1000, 3, 1),
		Array("#r�����Ա#k", 17, 3, 9310144),
		Array("#r�����̳�", 16, 3), //TODO
		Array("#r����̵�", 15, 3),
		
		Array("#d���ʲ�ѯ#k", 5, 3),
		Array("#d���ø���", 3, 3, 9900004),
		Array("#d��Ʒ����", 500, 3),
		Array("#e#g����#r����#n#k", 0, 3, 9310144)
);

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
			var myRmb = getMyRmb();
			text = "  "+iconHR+"�𾴵����#b#h ##k����ӭ����#b#e��Ҷð�յ�#n#k\r\n";
			text+="  "+icon2+"�������ߣ�#r"+cm.getPlayer().getTodayOnlineTime()+"#k���� "+icon2+"���߻��֣�#r"+cm.getBossLog('���߻���')+"#k "+icon2+"����ֵ��#r"+cm.getPlayerEnergy()+"#k\r\n";
            text += "  "+icon2+"��#r"+myRmb+"#k "+icon2+"�ۼƳ�ֵ��#r"+cm.getRMB()+"#k\r\n";
			ListFor(1);
			ListFor(2);
			text+=" #e#d#L10001#"+iconHR+"��¥�#n#k"+iconHR+"#l #e#g#L10002#"+iconHR+"��Ҫ��ǿ#n#k"+iconHR+"#l #e#d#L10003#"+iconHR+"���10��#n#k"+iconHR+"#l\r\n";
            text+="\t\t\t   #r#L10004#"+iconHR+"����-����-����"+iconHR+"#l\r\n";
			ListFor(3);
			cm.sendSimple(text)
        } else if (a == 1) {
			switch(selection) {
				//��¥
				case 10001:
					cm.dispose();
					cm.openNpc(9900000);
				break;
				//��Ҫ��ǿ
				case 10002:
					cm.dispose();
					cm.openNpc(9900004, 1);
				break;
				//���10��:
				case 10003:
					if (cm.getLevel() < 10) {
						for(var i=0; i<10; i++) {
							if (cm.getLevel()>=10) 
								break;
							cm.gainExp(2000000000);
						}
					} else {
						cm.sendOk("���Ѿ��ﵽ10�����޷���ʹ�øù��ܡ�");
					}
					cm.dispose();
				break;
				//���߻�������
				case 10004:
					cm.dispose();
					cm.openNpc(9900003, 6008);
				break;
				default: 
					var mode_ = List[selection][1];
					var npcid = 9900003;
					if (List[selection][3] != null)
						npcid = List[selection][3];
					cm.dispose();
					cm.openNpc(npcid, mode_);
			}
            
		}//a
    }//mode
}//f


function ListFor(type) {
    var x = 0;
	var space = "";
	if (type>=3)
		space="  ";
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 3) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l"+space;
                x++;
            }
        }
    }
	//text+="\r\n";
}

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
