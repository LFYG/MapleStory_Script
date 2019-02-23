var status = -1;
var text = "";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var typed=1;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		text = "���˽ڿ���~�������˽�~\r\n";
		text+="#L1#"+icon1+" ���˽�����˵��#l\r\n";
		text+="#L2#"+icon1+" ��ȡ��������#l\r\n";
		text+="#L3#"+icon1+" ��ȡ�����������#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == 1) {
			text = "Ϊ��λ������Ҹ�����׼�������������˵�������Ͳ���������������������������Ͳ�����ȡ�������";
			status = -1;
			cm.sendSimple(text);
		} else if (selection == 2) {
			typed = 2;
			cm.sendYesNo("�Ƿ�Ҫ��ȡ���˽ڵ��������ȡ֮���޷���ȡ�������");
		} else if (selection == 3) {
			if (cm.getParty() == null) { // û�����
				cm.sendOk("��������һ������Ժ������ȡŶ��");
				cm.dispose();
			} else if (!cm.isLeader()) { // ���Ƕӳ�
            	cm.sendOk("���öӳ�����˵��");
				cm.dispose();
			} else {
				typed = 3;
				cm.sendYesNo("�Ƿ�Ҫ��ȡ���˽����������ȡ֮���޷���ȡ�������");
			}
		}
	} else if (status == 2) {
		if (typed == 2) {
			if (cm.getSpace(1) < 2) {
				cm.sendOk("װ�����ռ䲻�㣬�����ٱ���2���ո�");
				cm.dispose();
				return ;
			}
			if (cm.getBossLogAcc("2015���˽�����") != -1) {
				cm.setBossLogAcc("2015���˽�����", -2);
				if (cm.getPlayerStat("GENDER")==0) {
					//��������
					cm.gainItem(1662003, 1);
					cm.gainItem(1672014, 1);
					cm.sendOk("��������#r����һ��Ů���ѣ�һ�뻢Ѩ���ƺ���#k");
					cm.dispose();
				} else {
					//Ů������
					cm.gainItem(1662002, 1);
					cm.gainItem(1672014, 1);
					cm.sendOk("��������#r����һ�������ѣ�һ�����첻�̰Σ�#k");
					cm.dispose();
				}
			} else {
				cm.sendOk("���Ѿ���ȡ�����˽�������Ŷ��");
				cm.dispose();
			}
		} else if (typed == 3) {
			if (cm.getBossLogAcc("2015���˽�����") != -1) {
				var party = cm.getParty().getMembers();
				var next = true;
				var isLover = 0;
				var levelValid = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= 120) && (cPlayer.getLevel() <= 250)) {
						levelValid += 1;
					} else {
						next = false;
					}
					var chr = getCharacterById(cPlayer.getId());
					isLover+=(chr[0]);
				}
				if (party.size() != 2 || isLover != 1 || levelValid != party.size()) {
					next = false;
				}
				var valid = 0;
				if (next) {
					var party = cm.getParty().getMembers();
					var it = party.iterator();
					while (it.hasNext()) {
						var player=it.next();
						var chr = getCharacterById(player.getId());
						if (getBossLogAcc("2015���˽�����", chr[1])==0) {
							valid++;
							setBossLogAcc("2015���˽�����", chr[1], player.getId());
						}
					}
					if (valid != 2) {
						cm.sendOk("�����������Ѿ���ȡ������޷��ٴ���ȡ��");
						cm.dispose();
						return;
					}
					cm.sendOk("�ɹ���ȡ������˫�����Σ���˫�����η�һ�Ѹ������һ��ɡ�");
					cm.gainItem(3012026,1);
					cm.gainItem(3012026,1);
					cm.dispose();
				} else {
					cm.sendOk("��ȡʧ�ܣ����ܵ�ԭ���У�\r\n1.˫���ȼ�����120��\r\n2.��ӱ���һ��һŮ\r\n3.���ֻ��Ϊ2����"+party.size()+" "+isLover+" "+levelValid);
					cm.dispose();
				}
			} else {
				cm.sendOk("���Ѿ���ȡ�����˽�������Ŷ��");
				cm.dispose();
			}
		}
	}
	
	function getCharacterById(id) {
		var conn=cm.getConnection();
		var sql = "select accountid, gender from characters where id = ?";
		var pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, id);
		var chr = pstmt.executeQuery();
		var rs = null
		if (chr.next()) {
			rs = Array(chr.getInt('gender'), chr.getInt('accountid'));
		}
		chr.close();
		pstmt.close();
		return rs;
	}
	
	function setBossLogAcc(bossid, accountid, characterid) {
		itemprice = selection;
		var conn = cm.getConnection();
		var delSql = "delete from bosslog where bossid = ? and accountid=?";
		var pstmt = conn.prepareStatement(delSql);
		pstmt.setString(1, bossid);
		pstmt.setInt(2, accountid);
		pstmt.executeUpdate();
		pstmt.close();
		
		var sql = "insert into bosslog(accountid, characterid, bossid, count, time) values(?,?,?,-1, CURRENT_TIMESTAMP)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, accountid);
		pstmt.setString(2, characterid);
		pstmt.setInt(3, bossid);
		pstmt.executeUpdate();
		pstmt.close();
		//conn.close();
	}
	
	function getBossLogAcc(bossid, accountid) {
		var conn=cm.getConnection();
		var sql = "select `count` from bosslog where bossid = ? and accountid = ?";
		var pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, bossid);
		pstmt.setInt(2, accountid);
		var chr = pstmt.executeQuery();
		var rs = null
		if (chr.next()) {
			rs = chr.getInt('count');
		}
		chr.close();
		pstmt.close();
		return rs;
	}
}