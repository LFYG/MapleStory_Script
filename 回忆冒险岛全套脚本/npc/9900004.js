/*
 �ű����ܣ������ű�V2��
 */

var a = 0;
var iconQ = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = iconQ;//"#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var List = Array(
		
		//��������

        
		
		//Array(icon1+"#r��Ϸ����#k", 200, 1, 9900004),
		
		
		Array(icon1+" ���ܴ���#k", 2, 1),
		
		Array(icon1+" Ԫ���һ�#k", 101, 1, 9310144),
		Array(icon1+" ְҵתְ#k", 4, 1),
		
        //Array(icon1+"#rÿ������#k", 12, 2), //TODO
       
		//Array(icon3+"#b���߽���#k",608, 2, 9900003),
		
		Array(icon1+" ѧϰ����#k", 22, 2),
		Array(icon1+" ��Ծ���#k", 23, 2),
		Array(icon1+" #b�����г�#k", 99, 2),
		
		
		
		//Array("#b��ϲ����#k", 108, 3),
		//Array("#b��ս����", 13, 3),
		//Array("#b�������", 6, 3, 9310144),
		//Array(icon1+" ��������", 501, 3),//TODO
		
		Array(icon1+" ����н�", 5, 3, 9900004),
		Array(icon1+" ������Ϸ", 0, 3, 9000232),//TODO
		//Array("#r��Ϸ����#k", 10, 3),
		//Array("#r�����̳�", 16, 3), //TODO
		//Array("#r����̵�", 15, 3),
		//Array(icon1+" ���й���#k", 14, 3),
		Array(icon1+" �̵��ȫ#k", 0, 3,9310143),
		Array(icon1+" ���ʲ�ѯ#k", 5, 3),
		Array(icon1+" ��Ʒ����", 500, 3),
		Array(icon1+" #e#r���ร��#n#k", 0, 3, 9310144)
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
			if (cm.getBossLog("���ּݵ�")>=0) {
				cm.dispose();
				cm.openNpc(2008, 1);
				return;
			}
			var myRmb = getMyRmb();
			text = "  "+icon3+"�𾴵����#b#h ##k����ӭ����#b#e����ð�յ�#n#k\r\n";
			text+="  "+iconQ+" ���ߣ�#r"+cm.getPlayer().getTodayOnlineTime()+"#k ����\t��Ծ�ȣ�#r"+ cm.getActivity()+"#k\t����ֵ��#r"+cm.getPlayerEnergy()+"#k\r\n";
            text += "  "+iconQ+" ���#r"+cm.getPlayer().getCSPoints(1)+"#k\t����ȯ��#r"+cm.getPlayer().getCSPoints(2)+"#k\r\n";
			text += "  "+iconQ+" Ԫ����#r"+myRmb+"#k\t�ۼƳ�ֵ��#r"+cm.getRMB()+"#k\r\n";
			
			text+="    \t#r#L10005#"+icon3+"#e#b#r��ֵ����#k#n"+icon3+"#l\t#r#L10007#"+icon3+"#e#b#r�ƹ㽱��#k#n"+icon3+"#l\r\n";
			text+=" #e#d#L10001#"+icon2+"��¥�#n#k"+icon2+"#l #e#b#L10002#"+icon2+"�ȼ����#n#k"+icon2+"#l #e#d#L10003#"+icon2+"���10��#n#k"+icon2+"#l\r\n";
            text+="     #r#L10004#"+icon2+"#e#r�������߽���#n#k"+icon2+"#l #r#L10006#"+icon2+"#e#r�������ո���#n#k"+icon2+"#l\r\n\r\n";
			ListFor(1);
			ListFor(2);
			text+="\r\n";
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
					cm.openNpc(9300011);
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
					cm.openNpc(9900003, 608);
				break;
				case 10005:
					cm.dispose();
					cm.openNpc(9201116);
				break;
				case 10006:
					cm.dispose();
					cm.openNpc(9900002, 1);
				break;
				case 10007:
					cm.dispose();
					cm.openNpc(9900002, 200);
				break;
				default: 
					var mode_ = List[selection][1];
					var npcid = 9900003;
					if (List[selection][3] != null)
						npcid = List[selection][3];
					cm.dispose();
					if (npcid == 1) {
						cm.openWeb("http://www.huiyimxd.com");
					} else {
						cm.openNpc(npcid, mode_);
					}
			}
            
		}//a
    }//mode
}//f


function ListFor(type) {
    var x = 0;
	var space = "    ";
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
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
