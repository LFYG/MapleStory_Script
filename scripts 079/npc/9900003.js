function start() {

if(cm.getChar().getVip() < 0) {
cm.sendOk("����רΪVIP3����ʮ��������ս")
}else if(cm.getChar().getMapId() != 910000000) {
cm.sendOk("ʮ��������սֻ���������г���������")
} else {
    cm.sendSimple (""+cm.mxdmz()+"ð�յ�ʮ��������ս˵����\r\n\r\nÿ����սһ��boss��Ҫ10E���.#r����װ������Ϊ30%#k\r\n���ֲ��ϱ���Ϊ90%[#d���Ͽɺϳ���Ʒ.Ԫ��.�سɾ�#k]\r\n#L0##r[ʮ��������ս]-ħЫ[#d��ϡ�н�ָ+���ֲ���#k]#b[Ѫ����10E]#k#l\r\n#L1##r[ʮ��������ս]-��ţ[#d��ϡ������+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L2##r[ʮ��������ս]-����[#d��ϡ�ж���+���ֲ���]#b[Ѫ����5 E]#k#l\r\n#L3##r[ʮ��������ս]-˫��[#d��ϡ������+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L4##r[ʮ��������ս]-ʨ��[#d��ϡ��Ь��+���ֲ���]#b[Ѫ����80W]#k#l\r\n#L5##r[ʮ��������ս]-��Ů[#d��ϡ������+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L6##r[ʮ��������ս]-���[#d��ϡ��ñ��+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L7##r[ʮ��������ս]-����[#d��ϡ������+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L8##r[ʮ��������ս]-ˮƿ[#d��ϡ�����+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L9##r[ʮ��������ս]-˫��[#d��ϡ���۾�+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L10##r[ʮ��������ս]-Ģ��[#d��ϡ�����+���ֲ���]#b[Ѫ����10E]#k#l\r\n#L11##r[ʮ��������ս]-ѩ��[#d��ϡ������+���ֲ���]#b[Ѫ����10E]#k#l\r\n\#b#e#L111#<<�����ؼ�,���˱ؿ�>>#k#n\r\n\r\n#L110#<<�������г�>>#l");
    }
}
function action(mode, type, selection) {
        cm.dispose();
    
if (cm.getMeso() >= 100000000) {

cm.dispose();
        
    if (selection == 0) {
        cm.gainMeso(-1000000000);
        //����ID, HP, EXP, ����
        cm.summonMob(9500342, 1000000000, 10000, 1);//з
    } else if (selection == 1) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9400612, 1000000000, 10000, 1);//ţħ��
    } else if (selection == 2) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9100010, 300000000, 100, 1);//������
    } else if (selection == 3) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9300380, 1000000000, 100, 1);//˫��
    } else if (selection == 4) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9600063, 800000, 100, 1);//ʨ��
    } else if (selection == 5) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9400121, 1000000000, 100, 1);//��Ů��Ů�ϰ�
    } else if (selection == 6) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9600000, 1000000000, 100, 1);//��ƽ��[�ƽ�]
    } else if (selection == 7) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9001002, 1000000000, 100, 1);//����
    } else if (selection == 8) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9400300, 1000000000, 100, 1);//С��
    } else if (selection == 9) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9600074, 1000000000, 100, 1);//˫��
    } else if (selection == 10) {
        cm.gainMeso(-1000000000);
        cm.summonMob(3300008, 1000000000, 500, 1);//Ģ��
    } else if (selection == 11) {
        cm.gainMeso(-1000000000);
        cm.summonMob(3300007, 1000000000, 500, 1);//ѩ��
    } else if (selection == 12) {
        cm.gainMeso(-1000000);
        cm.summonMob(9300012, 1000000000, 4800, 1);//����ɯ��
    } else if (selection == 13) {
        cm.gainMeso(-1000000);
        cm.summonMob(9300012, 1000000000, 4800, 1);//����ɯ��
    } 
}

if (cm.getMeso() >= 5000000) {

cm.dispose();
        
    if (selection == 41) {
        cm.gainMeso(-1000000);
        cm.summonMob(9500167, 200000, 18000, 15);//����
    } else if (selection == 42) {
        cm.gainMeso(-1000000);
        cm.summonMob(6130207, 16700, 1200, 20);//Գ��
    } else if (selection == 43) {
        cm.gainMeso(-1000000);
        cm.summonMob(4230102, 18500, 5500, 30);//������ 
    } else if (selection == 44) {
        cm.gainMeso(-5000000);
        cm.summonMob(9001000, 18000, 450, 5);//�̹�
        cm.summonMob(9001001, 18000, 450, 5);
        cm.summonMob(9001002, 18000, 450, 5);
        cm.summonMob(9001003, 18000, 450, 5);
    } else if (selection == 45) {
        cm.gainMeso(-5000000);
        cm.summonMob(100100, 400, 25000, 8);//����ţ 
    } else if (selection == 46) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130001, 75000, 11000, 20);//��Ȯ
    } else if (selection == 47) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140500, 15000, 17500, 10);//������Ȯ
    } else if (selection == 48) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130200, 18000, 30000, 10);//����
    } else if (selection == 49) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140000, 5000, 10000, 8);//����
    } else if (selection == 50) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140100, 5000, 10000, 8);//��������ѩ�� 
    } else if (selection == 51) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140103, 18000, 10500, 1);//����������
    } else if (selection == 52) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140101, 2000, 12000, 1);//���ڰ�����
    } else if (selection == 53) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810020, 1800, 10000, 8);//������ 
    } else if (selection == 54) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810021, 1800, 10000, 8);//�ڷ���
    } else if (selection == 55) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810023, 2200, 15000, 10);//а��˫������
    } else if (selection == 56) {
        cm.gainMeso(-5000000);
        cm.summonMob(9300077, 3000, 20000, 20);//������
    } else if (selection == 57) {
        cm.gainMeso(-5000000);
        cm.summonMob(8150101, 1800, 10000, 20);//������� 
    } else if (selection == 58) {
        cm.gainMeso(-5000000);
        cm.summonMob(8142100, 1800, 10000, 20);//���������� 
    } else if (selection == 59) {
        cm.gainMeso(-5000000);
        cm.summonMob(8160000, 4000, 11500, 10);//ʱ������ 
    } else if (selection == 60) {
        cm.gainMeso(-5000000);
        cm.summonMob(8170000, 5000, 11500, 10);//�ڼ�����
    } else if (selection == 61) {
        cm.gainMeso(-5000000);
        cm.summonMob(8141100, 6000, 12500, 10);//������
    } else if (selection == 62) {
        cm.gainMeso(-5000000);
        cm.summonMob(8143000, 6000, 12500, 10);//ʱ֮���� 
    } else if (selection == 100) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000019,200);//��ɫ��ţ�� 
    } else if (selection == 101) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000000,200);//��ɫ��ţ��  
    } else if (selection == 102) {
        cm.gainMeso(-5000000); 
        cm.gainItem(4000016,200);//��ɫ��ţ�� 
        
    } 
}
    
if (cm.getMeso() >= 10000000) {

cm.dispose();
        
    if (selection == 71) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220000, 1800000, 50000, 1);//�ϵ���
    } else if (selection == 72) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220000, 1670000, 50000, 1);//�����
    } else if (selection == 73) {
        cm.gainMeso(-10000000);
        cm.summonMob(3220001, 1850000, 50000, 1);//����
    } else if (selection == 74) {
        cm.gainMeso(-10000000);
        cm.summonMob(4220000, 1800000, 450, 1);//Ъ����
    } else if (selection == 75) {
        cm.gainMeso(-10000000);
        cm.summonMob(5220002, 4000000, 50000, 1);//��ʿ��
    } else if (selection == 76) {
        cm.gainMeso(-10000000);
        cm.summonMob(6220000, 75000000, 11000, 1);//���
    } else if (selection == 77) {
        cm.gainMeso(-10000000);
        cm.summonMob(6220001, 150000000, 17500, 1);//��ŵ
    } else if (selection == 78) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220001, 1800000, 30000, 1);//��β��
    } else if (selection == 79) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220002, 5000000, 10000, 1);//������ʿ
    } else if (selection == 80) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220002, 5000000, 10000, 1);//������
    } else if (selection == 81) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220003, 1800000, 10500, 1);//����
    } else if (selection == 82) {
        cm.gainMeso(-10000000);
        cm.summonMob(9300151, 2000000, 12000, 1);//������
    } else if (selection == 83) {
        cm.gainMeso(-10000000);
        cm.summonMob(9300151, 1800000, 10000, 1);//��ŭ������
    } else if (selection == 84) {
        cm.gainMeso(-10000000);
        cm.summonMob(9400014, 1800000, 10000, 1);//�칷
    } else if (selection == 111) {
cm.sendOk("#r5Ԫð�յ�#k,ʮ����������˵��.\r\n\r\n#d[ħ Ы ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[�� ţ ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[�� �� ��]��#rѪ��:#d������ \r\n#r            ����:#d������ [��������������]\r\n[˫ �� ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[ʨ �� ��]��#rѪ��:#d�������������� \r\n#r            ����:#d���������� [ʨ�����˺��̶�]\r\n[�� Ů ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[�� �� ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[�� �� ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[ˮ ƿ ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[Ģ �� ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[ѩ �� ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������");
cm.dispose();

    } 
    
} else {
cm.sendOk("���Ǯ����ѽ.");
cm.dispose();
}
    if (selection == 110) {
        cm.warp(910000000, 0);
		cm.dispose();
    } 
    
}