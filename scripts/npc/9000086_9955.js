var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.dispose();
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("#b���������ܵ�NPCֻ�ܰ�������ǰְҵ����.���û�а����ӵļ��ܾ�˵����������ļ��ܡ�\r\n#r��Ҫ����һ��,˫��Ͱ�Ӱ˫��ְҵ�ǰ���ÿ��תְ���������ܵ�#k#l\r\n#L1##r��Ҫ������ǰְҵ�ļ���#k#l");
        } else if (status == 1) {
            if (cm.getJob() == 6000 || cm.getJob() >= 6100 && cm.getJob() <= 6112) {
                cm.teachSkill(60001218, 1, 1); //��ֱ����
                cm.teachSkill(60001216, 1, 1); //ģʽת��������ģʽ
                cm.teachSkill(60001217, 10, 10); //ģʽת��������ģʽ
                cm.teachSkill(27000003, 10, 10); //��ͨħ������
                cm.teachSkill(61001000, 20, 20); //����ն
                cm.teachSkill(61001101, 20, 20); //�һ��
                cm.teachSkill(61001002, 15, 15); //˫����Ծ
                cm.teachSkill(61000003, 10, 10); //Ƥ������
                cm.teachSkill(61101100, 20, 20); //�����
                cm.teachSkill(61101101, 20, 20); //���̳��
                cm.teachSkill(61101002, 20, 20); //����֮��
                cm.teachSkill(61101004, 0, 0); //�����һ�����
                cm.teachSkill(61100005, 20, 20); //����ģʽ1��ǿ��
                cm.teachSkill(61100006, 20, 20); //��׼��
                cm.teachSkill(61100007, 20, 20); //���Ļ���
                cm.teachSkill(61100008, 20, 20); //����ģʽ1��ǿ��
                cm.teachSkill(61100009, 20, 20); //����ն1��ǿ��
                cm.teachSkill(61111100, 20, 20); //�Ȼ�
                cm.teachSkill(61111101, 20, 20); //ǣ������
                cm.teachSkill(61111002, 15, 15); //ʯ��
                cm.teachSkill(61111003, 20, 20); //��ʰ����
                cm.teachSkill(61111004, 20, 20); //�߻�
                cm.teachSkill(61110005, 1, 1); //����ģʽ2��ǿ��
                cm.teachSkill(61110006, 5, 5); //���һָ�
                cm.teachSkill(61110007, 10, 10); //�������Ļ���
                cm.teachSkill(61111008, 10, 10); //�ռ�����
                cm.teachSkill(61110010, 1, 1); //����ģʽ2��ǿ��
                cm.teachSkill(61110015, 2, 2); //����ն 2��ǿ��
                cm.teachSkill(61121100, 10, 10); //ŭ������ն
                cm.teachSkill(61121102, 10, 10); //��ս�Ӱ
                cm.teachSkill(61121104, 10, 10); //����ͻϮ
                cm.teachSkill(61121105, 10, 10); //��ħ֮Ϣ
                cm.teachSkill(61120007, 10, 10); //���׽���֮��
                cm.teachSkill(61120008, 10, 10); //�ռ�����
                cm.teachSkill(61121009, 10, 10); //ǿ������
                cm.teachSkill(61120010, 1, 1); //����ģʽ3��ǿ��
                cm.teachSkill(61120011, 10, 10); //�޵�֮��
                cm.teachSkill(61120012, 10, 10); //���׾�׼��
                cm.teachSkill(61120013, 1, 1); //����ģʽ3��ǿ��
                cm.teachSkill(61121014, 30, 30); //ŵ�͵���ʿ
                cm.teachSkill(61120020, 2, 2); //����ն 3��ǿ��
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();

            } else if (cm.getJob() == 6001 || cm.getJob() >= 6500 && cm.getJob() <= 6512) {
                cm.teachSkill(60011218, 1, 1); //ħ����϶
                cm.teachSkill(60011221, 1, 1); //Э��
                cm.teachSkill(60011222, 1, 1); //װ��
                cm.teachSkill(60011216, 1, 1); //������
                cm.teachSkill(65001100, 20, 20); //��ĭ֮��
                cm.teachSkill(65001001, 20, 20); //ħ��ת��
                cm.teachSkill(65001002, 15, 15); //���۽�
                cm.teachSkill(65000003, 20, 20); //�׺͢�
                cm.teachSkill(65101100, 20, 20); //���̱�ը
                cm.teachSkill(65101001, 20, 20); //�۷�����
                cm.teachSkill(65101002, 20, 20); //����ת��
                cm.teachSkill(65100003, 10, 10); //��׼������
                cm.teachSkill(65100004, 5, 5); //����֮��
                cm.teachSkill(65100005, 20, 20); //�׺͢�
                cm.teachSkill(65111100, 20, 20); //�����ȡ
                cm.teachSkill(65111101, 20, 20); //׹��Ⱥ��
                cm.teachSkill(65111002, 20, 20); //�����ٻ�
                cm.teachSkill(65111003, 20, 20); //Զ���ٻ�
                cm.teachSkill(65111004, 20, 20); //��������
                cm.teachSkill(65110005, 10, 10); //����ƽ��
                cm.teachSkill(65110006, 20, 20); //�׺͢�
                cm.teachSkill(65121100, 10, 10); //ԭʼ֮��
                cm.teachSkill(65121101, 10, 10); //��λһ��
                cm.teachSkill(65121002, 10, 10); //��س����
                cm.teachSkill(65121003, 10, 10); //��깲��
                cm.teachSkill(65121004, 10, 10); //�������
                cm.teachSkill(65120005, 10, 10); //��������
                cm.teachSkill(65120006, 10, 10); //ǿ�׺͢�
                cm.teachSkill(65121009, 30, 30); //ŵ�͵���ʿ
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!00000000");
                cm.dispose();
            } else if (cm.getJob() == 2004 || cm.getJob() >= 2700 && cm.getJob() <= 2712) {
                cm.teachSkill(27001100, 20, 20); //ҫ�۹���
                cm.teachSkill(27001201, 20, 20); //�ڰ�����
                cm.teachSkill(27001002, 10, 10); //����˲��
                cm.teachSkill(27000003, 10, 10); //��ͨħ������
                cm.teachSkill(27001004, 10, 10); //ħ������
                cm.teachSkill(27001005, 1, 1); //ħ��͵��
                cm.teachSkill(27000106, 10, 10); //ǿ����֮ħ��
                cm.teachSkill(27000207, 10, 10); //ǿ����֮ħ��
                cm.teachSkill(27101100, 20, 20); //��Ů����
                cm.teachSkill(27101101, 20, 20); //��������
                cm.teachSkill(27101202, 20, 20); //�����ѹ
                cm.teachSkill(27100003, 20, 20); //�ڰ�ף��
                cm.teachSkill(27101004, 20, 20); //ħ����
                cm.teachSkill(27100005, 20, 20); //���ﾫͨ
                cm.teachSkill(27100006, 20, 20); //�ǻۼ���
                cm.teachSkill(27111100, 20, 20); //��������
                cm.teachSkill(27111101, 20, 20); //��ҫ����
                cm.teachSkill(27111202, 20, 20); //�������
                cm.teachSkill(27111303, 20, 20); //��ɫ����
                cm.teachSkill(27111004, 20, 20); //�ֿ�֮ħ����
                cm.teachSkill(27111005, 20, 20); //��Ӱ����
                cm.teachSkill(27111006, 20, 20); //���վ�����
                cm.teachSkill(27110007, 20, 20); //������ϫ
                cm.teachSkill(27121100, 30, 30); //���練��
                cm.teachSkill(27121201, 30, 30); //����׹��
                cm.teachSkill(27121202, 30, 30); //��ʾ¼
                cm.teachSkill(27121303, 30, 30); //��������
                cm.teachSkill(27121304, 5, 5); //ĩ������
                cm.teachSkill(27121005, 30, 30); //�ڰ��߳�
                cm.teachSkill(27121006, 30, 30); //�ڰ�����
                cm.teachSkill(27120007, 30, 30); //ħ����ͨ
                cm.teachSkill(27120008, 5, 5); //���⾫ͨ
                cm.teachSkill(27121009, 30, 30); //ð�յ���ʿ
                cm.teachSkill(27121010, 20, 20); //��ʿ����־
                cm.teachSkill(27120211, 30, 30); //����׹��
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() == 5000 || cm.getJob() >= 5100 && cm.getJob() <= 5112) {
                cm.teachSkill(51000000, 10, 10) //����HP
                cm.teachSkill(51000001, 15, 15) //����
                cm.teachSkill(51000002, 10, 10) //�������
                cm.teachSkill(51001003, 10, 10) //�����Ծ
                cm.teachSkill(51001004, 20, 20) //���֮��
                cm.teachSkill(51100000, 10, 10) //����ѵ��
                cm.teachSkill(51100001, 20, 20) //��׼��
                cm.teachSkill(51100002, 20, 20) //�սṥ��
                cm.teachSkill(51101003, 20, 20) //���ٽ�
                cm.teachSkill(51101004, 20, 20) //��ŭ
                cm.teachSkill(51101005, 20, 20) //���ͻ��
                cm.teachSkill(51101006, 20, 20) //��ҫ׷��
                cm.teachSkill(51110000, 30, 30) //���һָ�
                cm.teachSkill(51110001, 20, 20) //רע
                cm.teachSkill(51110002, 20, 20) //���ͻ��
                cm.teachSkill(51111003, 10, 10) //��ҫ֮��
                cm.teachSkill(51111004, 20, 20) //���ָ���
                cm.teachSkill(51111005, 20, 20) //ħ����Ч
                cm.teachSkill(51111006, 20, 20) //���ӽ�
                cm.teachSkill(51111007, 20, 20) //��ҫ����
                cm.teachSkill(51120000, 30, 30) //ս����ͨ
                cm.teachSkill(51120001, 30, 30) //���׾�׼��
                cm.teachSkill(51120002, 30, 30) //�����սṥ��
                cm.teachSkill(51120003, 30, 30) //��������
                cm.teachSkill(51121004, 30, 30) //����̩ɽ
                cm.teachSkill(51121005, 30, 30) //ð�յ���ʿ
                cm.teachSkill(51121006, 30, 30) //���֮ŭ
                cm.teachSkill(51121007, 30, 30) //������
                cm.teachSkill(51121008, 30, 30) //��ҫ��ը
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() == 2003 || cm.getJob() >= 2400 && cm.getJob() <= 2412) {
                //cm.teachSkill(20031203,1,1)//��Ӱ�ع�
                //cm.teachSkill(20031205,1,1)//��Ӱ����
                //cm.teachSkill(20031207,1,1)//ӡ��֮ͫ
                //cm.teachSkill(20031208,1,1)//��Ӱ����
                //cm.teachSkill(20031209,1,1)//��������
                //cm.teachSkill(20031210,1,1)//��������
                //cm.teachSkill(20031211,1,1)//Ǳ��
                //cm.teachSkill(20031212,1,1)//�ն�
                cm.teachSkill(24000003, 10, 10) //�����ӱ�
                cm.teachSkill(24001000, 20, 20) //������
                cm.teachSkill(24001001, 20, 20) //��Ӱӡ���츳 ��
                cm.teachSkill(24001002, 15, 15) //Ѹ�ݻ�Ӱ
                cm.teachSkill(24100003, 10, 10) //��Ƭѩ��
                cm.teachSkill(24100004, 20, 20) //��׼����
                cm.teachSkill(24100006, 10, 10) //����������
                cm.teachSkill(24101000, 20, 20) //�����ٻ�
                cm.teachSkill(24101001, 20, 20) //��Ӱӡ���츳 ��
                cm.teachSkill(24101002, 20, 20) //�ͷ翨��
                cm.teachSkill(24101005, 20, 20) //��������
                cm.teachSkill(24110004, 20, 20) //���ر�
                cm.teachSkill(24110007, 20, 20) //����ֱ��
                cm.teachSkill(24111000, 20, 20) //����ն��
                cm.teachSkill(24111001, 20, 20) //��Ӱӡ���츳 ��
                cm.teachSkill(24111002, 20, 0) //���ص����� 
                cm.teachSkill(24111003, 20, 20) //���˱���
                cm.teachSkill(24111005, 20, 20) //�¹�ף��
                cm.teachSkill(24111006, 20, 20) //��Ӱͻ��
                cm.teachSkill(24111008, 20, 20) //��Ӱͻ��
                cm.teachSkill(24120002, 10, 10) //��ɫ�ؿ�
                cm.teachSkill(24120006, 30, 30) //����ר��
                cm.teachSkill(24121000, 30, 30) //��������
                cm.teachSkill(24121001, 30, 30) //��Ӱӡ���츳 ��
                cm.teachSkill(24121003, 20, 20) //ĺ��ף��
                cm.teachSkill(24121004, 30, 30) //ʥ����
                cm.teachSkill(24121005, 30, 30) //��Ƭ�籩
                cm.teachSkill(24121007, 10, 0) //���͵ȡ
                cm.teachSkill(24121008, 30, 30) //ð�յ���ʿ
                cm.teachSkill(24121009, 10, 10) //��ʿ����־
                cm.teachSkill(24121010, 20, 20) //ĺ��ף��	
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() == 508 || cm.getJob() == 570 || cm.getJob() == 571 || cm.getJob() == 572) {
                cm.teachSkill(5080000, 10, 10) //������
                cm.teachSkill(5081001, 20, 20) //����ȭ
                cm.teachSkill(5081002, 20, 20) //˫�����
                cm.teachSkill(5081003, 10, 10) //ǰ�շ�
                cm.teachSkill(5080004, 10, 10) //ʨ�ӵ�����
                cm.teachSkill(5081005, 20, 20) //�������
                cm.teachSkill(5700000, 20, 20) //��׼ǹ
                cm.teachSkill(5700003, 10, 10) //����ѵ��
                cm.teachSkill(5700004, 20, 20) //������ɱ
                cm.teachSkill(5700005, 15, 15) //��ʿ������
                cm.teachSkill(5701001, 20, 20) //��è����
                cm.teachSkill(5701005, 20, 20) //����
                cm.teachSkill(5701006, 20, 20) //ڤ��
                cm.teachSkill(5701007, 20, 20) //˫������
                cm.teachSkill(5710004, 20, 20) //��������
                cm.teachSkill(5710005, 20, 20) //���˵���
                cm.teachSkill(5711000, 20, 20) //˫��ǹ���
                cm.teachSkill(5711001, 20, 20) //������
                cm.teachSkill(5711002, 20, 20) //�ͻ���ʳ
                cm.teachSkill(5711006, 30, 30) //���֮ȭ
                cm.teachSkill(5711011, 20, 20) //��������
                cm.teachSkill(5721000, 30, 30) //ð�յ���ʿ
                cm.teachSkill(5721001, 10, 10) //����
                cm.teachSkill(5721001, 5, 5) //��ʿ����־
                cm.teachSkill(5721003, 20, 20) //�޾�׷��
                cm.teachSkill(5721004, 30, 30) //�����л�
                cm.teachSkill(5720005, 0, 0) //˫��������
                cm.teachSkill(5721006, 30, 30) //��ͷ
                cm.teachSkill(5720008, 20, 20) //����
                cm.teachSkill(5721007, 30, 30) //Ӣ��ͻϮ
                cm.teachSkill(5721009, 20, 20) //��������
                cm.teachSkill(5721009, 20, 20) //��ʿ����־
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 100 && cm.getJob() <= 132) {
                cm.teachSkill(1001003, 20, 20); //ʥ����
                cm.teachSkill(1001004, 20, 20); //ʥ����
                cm.teachSkill(1001005, 20, 20); //ʥ����
                cm.teachSkill(1000006, 10, 10); //ʥ����
                cm.teachSkill(1100000, 20, 20); //ʥ����
                cm.teachSkill(1100002, 20, 20); //ʥ����
                cm.teachSkill(1101004, 20, 20); //ʥ����
                cm.teachSkill(1101006, 20, 20); //ʥ����
                cm.teachSkill(1101007, 20, 20); //ʥ����
                cm.teachSkill(1101008, 20, 20); //ʥ����
                cm.teachSkill(1100009, 10, 10); //ʥ����
                cm.teachSkill(1110000, 20, 20); //ʥ����
                cm.teachSkill(1111002, 20, 20); //��������
                cm.teachSkill(1101010, 10, 10); //����
                cm.teachSkill(1201010, 10, 10); //����
                cm.teachSkill(1301010, 10, 10); //����
                cm.teachSkill(1111003, 20, 20); //ʥ����
                cm.teachSkill(1111005, 20, 20); //ʥ����
                cm.teachSkill(1111007, 20, 20); //ʥ����
                cm.teachSkill(1111008, 20, 20); //ʥ����
                cm.teachSkill(1111010, 20, 20); //ʥ����
                cm.teachSkill(1110009, 20, 20); //ʥ����
                cm.teachSkill(1120003, 30, 30); //ʥ����
                cm.teachSkill(1121000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(1121001, 30, 30); //ʥ����
                cm.teachSkill(1121002, 30, 30); //ʥ����
                cm.teachSkill(1121006, 30, 30); //ʥ����
                cm.teachSkill(1121008, 30, 30); //ʥ����
                cm.teachSkill(1121010, 30, 30); //ʥ����
                cm.teachSkill(1121011, 5, 5); //ʥ����
                cm.teachSkill(1120012, 10, 10); //ʥ����
                cm.teachSkill(1120013, 30, 30); //ʥ����
                cm.teachSkill(1300000, 20, 20); //longqi
                cm.teachSkill(1300002, 20, 20); //ʥ����
                cm.teachSkill(1301004, 20, 20); //ʥ����
                cm.teachSkill(1301006, 20, 20); //ʥ����
                cm.teachSkill(1301007, 20, 20); //ʥ����
                cm.teachSkill(1301008, 20, 20); //ʥ����
                cm.teachSkill(1300009, 10, 10); //ʥ����
                cm.teachSkill(1111007, 20, 20); //ʥ����
                cm.teachSkill(1310000, 20, 20); //ʥ����
                cm.teachSkill(1311001, 20, 20); //ʥ����
                cm.teachSkill(1311003, 20, 20); //ʥ����
                cm.teachSkill(1311005, 20, 20); //ʥ����
                cm.teachSkill(1311006, 30, 30); //ʥ����
                cm.teachSkill(1311008, 20, 20); //ʥ����
                cm.teachSkill(1310009, 10, 10); //ʥ����
                cm.teachSkill(1311007, 0, 0); //ħ����Ч
                cm.teachSkill(1120013, 30, 30); //ʥ����
                cm.teachSkill(1320006, 30, 30); //ʥ����
                cm.teachSkill(1320008, 10, 10); //ʥ����
                cm.teachSkill(1321000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(1321001, 30, 30); //ʥ����
                cm.teachSkill(1321002, 30, 30); //ʥ����
                cm.teachSkill(1321003, 30, 30); //ʥ����
                cm.teachSkill(1321010, 5, 5); //ʥ����
                cm.teachSkill(1320011, 10, 10); //ʥ����
                cm.teachSkill(1321012, 30, 30); //ʥ����
                cm.teachSkill(1321007, 30, 30); //ʥ����
                cm.teachSkill(1320009, 10, 10); //���ף��
                cm.teachSkill(1200000, 20, 20); //shengqi
                cm.teachSkill(1200002, 20, 20); //ʥ����
                cm.teachSkill(1201004, 20, 20); //ʥ����
                cm.teachSkill(1201006, 20, 20); //ʥ����
                cm.teachSkill(1201007, 20, 20); //ʥ����
                cm.teachSkill(1201008, 20, 20); //ʥ����
                cm.teachSkill(1200009, 10, 10); //ʥ����
                cm.teachSkill(1210001, 20, 20); //ʥ����
                cm.teachSkill(1211002, 30, 30); //ʥ����
                cm.teachSkill(1211004, 20, 20); //ʥ����
                cm.teachSkill(1211006, 20, 20); //ʥ����
                cm.teachSkill(1211008, 20, 20); //ʥ����
                cm.teachSkill(1211009, 20, 20); //ʥ����
                cm.teachSkill(1211011, 20, 20); //ʥ����
                cm.teachSkill(1211010, 0, 0); //Ԫ���ָ�
                cm.teachSkill(1220005, 30, 30); //ʥ����
                cm.teachSkill(1220006, 30, 30); //ʥ����
                cm.teachSkill(1220010, 10, 10); //ʥ����
                //cm.teachSkill(1221000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(1221004, 0, 0); //��ʥ���
                cm.teachSkill(1221007, 30, 30); //ʥ����
                cm.teachSkill(1221009, 30, 30); //ʥ����
                cm.teachSkill(1221011, 30, 30); //ʥ����
                cm.teachSkill(1221012, 5, 5); //ʥ����
                cm.teachSkill(1221002, 30, 30); //ʥ����
                cm.teachSkill(1220013, 0, 0); //ף������
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 200 && cm.getJob() <= 232) {
                cm.teachSkill(2001002, 15, 15); //ħ����
                cm.teachSkill(2001003, 15, 15); //ħ����
                cm.teachSkill(2001004, 20, 20); //ħ����
                cm.teachSkill(2001005, 20, 20); //ħ����
                cm.teachSkill(2000006, 10, 10); //ħ����
                cm.teachSkill(2200000, 20, 20); //ħ����
                cm.teachSkill(2201001, 20, 20); //ħ����
                cm.teachSkill(2201002, 20, 20); //ħ����
                cm.teachSkill(2201003, 10, 10); //ħ����
                cm.teachSkill(2201004, 20, 20); //ħ����
                cm.teachSkill(2201005, 20, 20); //ħ����
                cm.teachSkill(2200006, 20, 20); //ħ����
                cm.teachSkill(2200007, 10, 10); //ħ����
                cm.teachSkill(2210000, 20, 20); //ħ����
                cm.teachSkill(2210001, 20, 20); //ħ����
                cm.teachSkill(2211002, 20, 20); //ħ����
                cm.teachSkill(2211003, 20, 20); //ħ����
                cm.teachSkill(2211004, 20, 20); //ħ����
                cm.teachSkill(2211005, 20, 20); //ħ����
                cm.teachSkill(2211006, 20, 20); //ħ����
                cm.teachSkill(2211007, 10, 10); //�����ƶ���ͨ
                cm.teachSkill(2211008, 10, 10); //��Ȼ������
                cm.teachSkill(2210009, 20, 20); //ħ������
                //cm.teachSkill(2221000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(2221001, 30, 30); //ħ����
                cm.teachSkill(2221003, 10, 10); //ħ����
                cm.teachSkill(2221004, 30, 30); //ħ����
                cm.teachSkill(2221005, 30, 30); //ħ����
                cm.teachSkill(2221006, 30, 30); //ħ����
                cm.teachSkill(2221007, 30, 30); //ħ����
                cm.teachSkill(2221008, 5, 5); //ħ����
                cm.teachSkill(2221009, 10, 10); //ħ����
                cm.teachSkill(2220010, 10, 10); //ħ����
                cm.teachSkill(2100006, 20, 20); //�𶾿�ʼ
                cm.teachSkill(2100000, 20, 20); //ħ����
                cm.teachSkill(2101001, 20, 20); //ħ����
                cm.teachSkill(2101002, 20, 20); //ħ����
                cm.teachSkill(2101003, 10, 10); //ħ����
                cm.teachSkill(2101004, 20, 20); //ħ����
                cm.teachSkill(2101005, 20, 20); //ħ����
                cm.teachSkill(2100007, 10, 10); //ħ����
                cm.teachSkill(2110000, 20, 20); //ħ����
                cm.teachSkill(2110001, 20, 20); //ħ����
                cm.teachSkill(2111002, 20, 20); //ħ����
                cm.teachSkill(2111003, 20, 20); //ħ����
                cm.teachSkill(2111006, 10, 10); //ħ����
                cm.teachSkill(2111007, 10, 10); //�����ƶ���ͨ
                cm.teachSkill(2111008, 10, 10); //ħ����
                cm.teachSkill(2110009, 20, 20); //ħ������
                cm.teachSkill(2111004, 20, 20); //��ӡ��
                cm.teachSkill(2111005, 20, 20); //ħ����
                //cm.teachSkill(2121000, 10, 10); //ð�յ���ʿ
                cm.teachSkill(2121001, 10, 10); //ħ����
                cm.teachSkill(2121002, 10, 10); //ħ����
                cm.teachSkill(2121003, 10, 10); //ħ����
                cm.teachSkill(2121004, 10, 10); //ħ����
                cm.teachSkill(2121005, 10, 10); //ħ����
                cm.teachSkill(2121006, 10, 10); //ħ����
                cm.teachSkill(2121007, 10, 10); //ħ����
                cm.teachSkill(2121008, 5, 5); //ħ����
                cm.teachSkill(2121009, 10, 10); //ħ����
                cm.teachSkill(2120010, 10, 10); //ħ����
                cm.teachSkill(2300000, 20, 20); //����
                cm.teachSkill(2301001, 20, 20); //ħ����
                cm.teachSkill(2301002, 20, 20); //ħ����
                cm.teachSkill(2301003, 15, 15); //ħ����
                cm.teachSkill(2301004, 15, 15); //ħ����
                cm.teachSkill(2301005, 20, 20); //ħ����
                cm.teachSkill(2300006, 20, 20); //ħ����
                cm.teachSkill(2300007, 10, 10); //ħ����
                cm.teachSkill(2311001, 10, 10); //ħ����
                cm.teachSkill(2311002, 10, 10); //ħ����
                cm.teachSkill(2311007, 10, 10); //�����ƶ���ͨ
                cm.teachSkill(2310010, 20, 20); //ħ������
                cm.teachSkill(2311003, 30, 30); //ħ����
                cm.teachSkill(2311004, 30, 30); //ħ����
                cm.teachSkill(2311005, 0, 0); //�׶���
                cm.teachSkill(2311006, 20, 20); //ħ����
                cm.teachSkill(2310008, 20, 20); //ħ����
                cm.teachSkill(2311009, 0, 0); //��ʥħ����
                //cm.teachSkill(2321000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(2321001, 0, 0); //����֮��
                cm.teachSkill(2321003, 30, 30); //ǿ��ʥ��
                cm.teachSkill(2321003, 30, 30); //ħ����
                cm.teachSkill(2321004, 0, 0); //�ռ�����
                cm.teachSkill(2321005, 30, 30); //ħ����
                cm.teachSkill(2321006, 5, 5); //ħ����
                cm.teachSkill(2321007, 30, 30); //ħ����
                cm.teachSkill(2321008, 30, 30); //ħ����
                cm.teachSkill(2321009, 5, 5); //ħ����
                cm.teachSkill(2321010, 10, 10); //ħ����
                cm.teachSkill(2320011, 10, 10); //ħ����
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 300 && cm.getJob() <= 322) {
                cm.teachSkill(3000001, 20, 20); //ǿ����
                cm.teachSkill(3000002, 15, 15); //Զ�̼�
                cm.teachSkill(3001004, 15, 15); //������
                cm.teachSkill(3001005, 15, 15); //�ϻ��
                cm.teachSkill(3100000, 15, 15); //��׼��
                cm.teachSkill(3100001, 20, 20); //��Ȼ����
                cm.teachSkill(3101002, 20, 20); //��Ȼ����
                cm.teachSkill(3101003, 10, 10); //��Ȼ����
                cm.teachSkill(3101004, 10, 10); //��Ȼ����
                cm.teachSkill(3101005, 20, 20); //��Ȼ����
                cm.teachSkill(3100006, 10, 10); //��Ȼ����
                cm.teachSkill(3101007, 15, 15); //��Ȼ����
                cm.teachSkill(3111000, 20, 20); //��Ȼ����
                cm.teachSkill(3110001, 15, 15); //��Ȼ����
                cm.teachSkill(3111002, 15, 15); //��Ȼ����
                cm.teachSkill(3111003, 20, 20); //��Ȼ����
                cm.teachSkill(3111004, 20, 20); //��Ȼ����
                cm.teachSkill(3111005, 20, 20); //��Ȼ����
                cm.teachSkill(3111006, 20, 20); //��Ȼ����
                cm.teachSkill(3110007, 10, 10); //��Ȼ����
                cm.teachSkill(3111008, 20, 20); //��Ȼ����
                cm.teachSkill(3120005, 10, 10); //�����
                cm.teachSkill(3120006, 10, 10); //�������ӣ�����
                //cm.teachSkill(3121000,20,20);//��Ȼ����
                cm.teachSkill(3121002, 30, 30); //���۾���
                cm.teachSkill(3121004, 30, 30); //�������
                cm.teachSkill(3121007, 10, 10); //��Ӱ��
                cm.teachSkill(3120008, 10, 10); //�����ռ�����
                cm.teachSkill(3121009, 5, 5); //��ʿ����־
                cm.teachSkill(3120010, 10, 10); //�ռ��һ��
                cm.teachSkill(3120011, 10, 10); //3120011
                cm.teachSkill(3120012, 15, 15); //3120012
                cm.teachSkill(3121000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(3200000, 20, 20); //��Ȼ����
                cm.teachSkill(3200001, 20, 20); //��Ȼ����
                cm.teachSkill(3201002, 20, 20); //��Ȼ����
                cm.teachSkill(3201003, 10, 10); //��Ȼ����
                cm.teachSkill(3201004, 10, 10); //��Ȼ����
                cm.teachSkill(3200006, 10, 10); //��Ȼ����
                cm.teachSkill(3201007, 15, 15); //��Ȼ����
                cm.teachSkill(3201005, 20, 20); //��͸������
                cm.teachSkill(3211000, 20, 20); //��Ȼ����
                cm.teachSkill(3210001, 15, 15); //��Ȼ����
                cm.teachSkill(3211002, 15, 15); //��Ȼ����
                cm.teachSkill(3211003, 20, 20); //��Ȼ����
                cm.teachSkill(3211004, 20, 20); //��Ȼ����
                cm.teachSkill(3211005, 20, 20); //��Ȼ����
                cm.teachSkill(3211006, 20, 20); //��Ȼ����
                cm.teachSkill(3210007, 10, 10); //��Ȼ����
                cm.teachSkill(3211008, 20, 20); //��Ȼ����
                cm.teachSkill(3220004, 10, 10); //��Ȼ����
                cm.teachSkill(3220005, 20, 20); //��Ȼ����
                cm.teachSkill(3221000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(3221001, 30, 30); //��Ȼ����
                cm.teachSkill(3221002, 30, 30); //��Ȼ����
                cm.teachSkill(3221006, 10, 10); //��Ȼ����
                cm.teachSkill(3221007, 30, 30); //��Ȼ����
                cm.teachSkill(3221008, 5, 5); //��Ȼ����
                cm.teachSkill(3220009, 10, 10); //��Ȼ����
                cm.teachSkill(3220010, 10, 10); //��Ȼ����
                cm.teachSkill(3220012, 30, 30); //��Ȼ����
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 400 && cm.getJob() <= 422) {
                cm.teachSkill(4001002, 10, 10); //������
                cm.teachSkill(4001011, 10, 0); //��Ծ
                cm.teachSkill(4000012, 10, 0); //����
                cm.teachSkill(4001013, 10, 0); //�쵶ն
                cm.teachSkill(4001003, 10, 10); //������
                cm.teachSkill(4001334, 20, 20); //������
                cm.teachSkill(4001344, 20, 20); //������
                cm.teachSkill(4000000, 20, 20); //������
                cm.teachSkill(4001005, 20, 20); //�Ṧ
                cm.teachSkill(4000001, 5, 5); //������
                cm.teachSkill(4100000, 20, 20); //������
                cm.teachSkill(4100001, 30, 30); //������
                cm.teachSkill(4101003, 20, 20); //������
                cm.teachSkill(4101004, 20, 20); //������
                cm.teachSkill(4101005, 20, 20); //������
                cm.teachSkill(4100006, 10, 10); //������
                cm.teachSkill(4100007, 5, 5); //����ѵ��
                cm.teachSkill(4110000, 20, 20); //������
                cm.teachSkill(4111001, 20, 20); //������
                cm.teachSkill(4111002, 20, 20); //Ӱ����
                cm.teachSkill(4111003, 20, 20); //������
                cm.teachSkill(4111004, 20, 20); //������
                cm.teachSkill(4111005, 20, 20); //������
                cm.teachSkill(4111006, 20, 20); //������
                //cm.teachSkill(4211007, 10, 10); //�ڰ���ˣ
                cm.teachSkill(4120002, 30, 30); //������
                cm.teachSkill(4120005, 30, 30); //������
                cm.teachSkill(4121000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(4121003, 30, 30); //������
                cm.teachSkill(4121004, 30, 30); //������
                cm.teachSkill(4121006, 30, 30); //������
                cm.teachSkill(4121007, 30, 30); //������
                cm.teachSkill(4121008, 10, 10); //������
                cm.teachSkill(4121009, 5, 5); //������
                cm.teachSkill(4120010, 10, 10); //������
                cm.teachSkill(4121015, 10, 10); //ģ������
                cm.teachSkill(4200000, 20, 20); //������
                cm.teachSkill(4201002, 20, 20); //������
                cm.teachSkill(4201003, 20, 20); //������
                cm.teachSkill(4201004, 20, 20); //������
                cm.teachSkill(4201005, 30, 30); //������
                cm.teachSkill(4200006, 10, 10); //������
                cm.teachSkill(4210000, 10, 10); //������
                cm.teachSkill(4211001, 10, 10); //������
                cm.teachSkill(4211002, 20, 20); //������
                cm.teachSkill(4211003, 10, 10); //������
                cm.teachSkill(4211004, 20, 20); //������
                cm.teachSkill(4211005, 10, 10); //������
                cm.teachSkill(4211006, 20, 20); //������
                cm.teachSkill(4220002, 30, 30); //������
                cm.teachSkill(4220005, 30, 30); //������
                cm.teachSkill(4221000, 30, 30); //������
                cm.teachSkill(4221001, 30, 30); //������
                cm.teachSkill(4221003, 30, 30); //������
                cm.teachSkill(4221004, 30, 30); //������
                cm.teachSkill(4221006, 0, 0); //��Ļ��
                cm.teachSkill(4221007, 30, 30); //������
                cm.teachSkill(4221008, 5, 5); //������
                cm.teachSkill(4220009, 10, 10); //������
                cm.teachSkill(4211008, 20, 20); //Ӱ����
                cm.teachSkill(4211009, 20, 20); //������


                cm.teachSkill(4201003, 20, 20); //�Ṧ
                cm.teachSkill(4201008, 20, 20); //������
                cm.teachSkill(4201009, 20, 20); //����
                cm.teachSkill(4201011, 10, 10); //��Ǯ����
                //cm.teachSkill(4210000,10,10);//�ܷ���ͨ
                cm.teachSkill(4211011, 20, 20); //����֮��
                cm.teachSkill(4210012, 10, 10); //̰��
                cm.teachSkill(4210013, 20, 20); //����ڰ�
                cm.teachSkill(4211007, 0, 0); //�ڰ���ˣ
                cm.teachSkill(4221010, 10, 10); //ͻȻϮ��
                cm.teachSkill(4220012, 10, 10); //�̵�ר��
                cm.teachSkill(4221013, 10, 10); //��������
                cm.teachSkill(4200007, 10, 10); //����ѵ��
                cm.teachSkill(4101008, 20, 20); //���ѷ���
                cm.teachSkill(4101009, 10, 10); //������
                cm.teachSkill(4101010, 20, 20); //��֮����
                cm.teachSkill(4110008, 20, 20); //����ڰ�
                cm.teachSkill(4111007, 0, 0); //�ڰ���ˣ
                cm.teachSkill(4111009, 10, 10); //��������
                cm.teachSkill(4111010, 20, 20); //�����������
                cm.teachSkill(4110012, 10, 10); //��������
                cm.teachSkill(4120012, 10, 10); //����ר��
                cm.teachSkill(4111013, 20, 20); //Ӱ�ӷ���
                cm.teachSkill(4110014, 10, 10); //ҩƷ����		
                cm.teachSkill(4121013, 10, 10); //������
                cm.teachSkill(4121014, 10, 10); //�ڰ�ף��
                cm.teachSkill(4121015, 0, 0); //ģ������
                cm.teachSkill(4121016, 10, 10); //ͻȻϮ��
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() == 500 || cm.getJob() >= 510 && cm.getJob() <= 522) {
                //500
                cm.teachSkill(5000000, 20, 20); //�춯��
                cm.teachSkill(5001001, 20, 20); //����ȭ
                cm.teachSkill(5001002, 20, 20); //������
                cm.teachSkill(5001003, 20, 20); //˫�����
                cm.teachSkill(5001005, 20, 20); //����
                cm.teachSkill(5000006, 20, 20); //����һ��
                cm.teachSkill(5000007, 10, 10); //��������
                cm.teachSkill(5100001, 20, 20); //��׼ȭ
                cm.teachSkill(5101002, 20, 20); //����
                cm.teachSkill(5101003, 20, 20); //��������
                cm.teachSkill(5101004, 20, 20); //��ǻ�
                cm.teachSkill(5101005, 20, 20); //��������
                cm.teachSkill(5101006, 20, 20); //����ȭ
                cm.teachSkill(5100009, 10, 10); //HP����
                cm.teachSkill(5100010, 10, 10); //����ѵ��
                cm.teachSkill(5101011, 20, 20); //����
                cm.teachSkill(5101012, 20, 20); //�����ȭ
                cm.teachSkill(5100013, 10, 10); //����
                cm.teachSkill(5110000, 20, 20); //�Ի����
                cm.teachSkill(5110001, 20, 20); //�������
                cm.teachSkill(5111002, 20, 20); //��������
                cm.teachSkill(5111007, 20, 20); //��������
                cm.teachSkill(5111009, 20, 20); //˫��쫷�
                cm.teachSkill(5111010, 20, 20); //��ľ����
                cm.teachSkill(5110011, 20, 20); //��������
                cm.teachSkill(5111012, 20, 20); //��ʯ�һ�
                cm.teachSkill(5121000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(5121001, 30, 30); //Ǳ����Ԩ
                cm.teachSkill(5120014, 20, 20); //��װ��ѹ
                cm.teachSkill(5121007, 30, 30); //��ŭȭ
                cm.teachSkill(5121009, 20, 20); //��������
                cm.teachSkill(5121010, 5, 5); //�Ż�����
                cm.teachSkill(5120011, 30, 30); //���ƹ���
                cm.teachSkill(5120012, 30, 30); //˫��������
                cm.teachSkill(5121013, 30, 30); //ŵ����˹ս��
                cm.teachSkill(5121015, 30, 30); //��ȭ
                cm.teachSkill(5121016, 30, 30); //������ը
                cm.teachSkill(5121013, 30, 30); //ŵ����˹ս��
                //----------------------------------------
                cm.teachSkill(5200000, 20, 20); //��׼ǹ
                cm.teachSkill(5201001, 20, 20); //��ǹ��
                cm.teachSkill(5201003, 20, 20); //����
                cm.teachSkill(5201006, 20, 20); //������ɱ
                cm.teachSkill(5201008, 10, 10); //�����ӵ�
                cm.teachSkill(5200009, 10, 10); //����ѵ��
                cm.teachSkill(5200010, 20, 20); //������ɱ
                cm.teachSkill(5201011, 5, 5); //����Ь		
                cm.teachSkill(5211007, 20, 20); //��������
                cm.teachSkill(5211008, 20, 20); //˫��ǹ���
                cm.teachSkill(5211009, 20, 20); //�ռⵯ
                cm.teachSkill(5211010, 20, 20); //��ײ��
                cm.teachSkill(5211011, 20, 20); //���ϴ�Ա
                cm.teachSkill(5210012, 30, 30); //���̲���
                cm.teachSkill(5210013, 20, 20); //�Ͻ��ӵ�
                cm.teachSkill(5211014, 20, 20); //�����ػ�ǹ
                cm.teachSkill(5221000, 20, 20); //ð�յ���ʿ
                cm.teachSkill(5221004, 20, 20); //�����籩
                cm.teachSkill(5220012, 20, 20); //���ƹ���
                cm.teachSkill(5221013, 30, 30); //ŵ����˹ս��
                cm.teachSkill(5220014, 5, 5); //˫��������
                cm.teachSkill(5221015, 20, 20); //�޾�׷��
                cm.teachSkill(5221016, 20, 20); //��ͷ
                cm.teachSkill(5221017, 20, 20); //����
                cm.teachSkill(5221018, 20, 20); //��������
                cm.teachSkill(5220019, 20, 20); //��Աͳ˧
                cm.teachSkill(5220020, 20, 20); //����������
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();

            } else if (cm.getJob() >= 1100 && cm.getJob() <= 1111) {
                cm.teachSkill(11000005, 10, 10); //ʥ����
                cm.teachSkill(11001001, 10, 10); //ʥ����
                cm.teachSkill(11001002, 20, 20); //ǿ������
                cm.teachSkill(11001003, 20, 20); //Ⱥ�幥��
                cm.teachSkill(11001004, 10, 10); //�꾫��
                cm.teachSkill(11100000, 20, 20); //��׼��
                cm.teachSkill(11101001, 20, 20); //���ٽ�
                cm.teachSkill(11101002, 30, 30); //�ռ���
                cm.teachSkill(11101003, 20, 20); //��ŭ֮��
                cm.teachSkill(11101004, 30, 30); //���֮��
                cm.teachSkill(11101006, 20, 20); //�˺�����
                cm.teachSkill(11100007, 10, 10); //����ѵ��
                cm.teachSkill(11101005, 10, 10); //���Ѹ��
                cm.teachSkill(11110000, 20, 20); //ħ���ָ�
                cm.teachSkill(11111001, 20, 20); //��������
                cm.teachSkill(11111002, 20, 20); //�ֻ�
                cm.teachSkill(11111003, 20, 20); //����
                cm.teachSkill(11111004, 20, 20); //�������
                cm.teachSkill(11110005, 20, 20); //���׶���
                cm.teachSkill(11111006, 20, 20); //���ͻ��
                cm.teachSkill(11111007, 20, 20); //�������
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 1200 && cm.getJob() <= 1211) {
                cm.teachSkill(12000005, 10, 10); //ħ����
                cm.teachSkill(12001001, 15, 15); //ħ����
                cm.teachSkill(12001002, 15, 15); //ħ������
                cm.teachSkill(12001003, 20, 20); //ħ��˫��
                cm.teachSkill(12001004, 10, 10); //�׾���
                cm.teachSkill(12101000, 20, 20); //������
                cm.teachSkill(12100007, 20, 20); //������
                cm.teachSkill(12101001, 10, 10); //������
                cm.teachSkill(12101002, 30, 30); //�����
                cm.teachSkill(12101003, 20, 20); //�����ƶ�
                cm.teachSkill(12101004, 20, 20); //ħ����
                cm.teachSkill(12101005, 10, 10); //��Ȼ������
                cm.teachSkill(12101006, 20, 20); //����
                cm.teachSkill(12100008, 10, 10); //�ǻۼ���
                cm.teachSkill(12110000, 20, 20); //ħ������
                cm.teachSkill(12110001, 20, 20); //ħ������
                cm.teachSkill(12111002, 20, 20); //��ӡ��
                cm.teachSkill(12111003, 0, 0); //�콵����
                cm.teachSkill(12111004, 20, 20); //��ħ��
                cm.teachSkill(12111005, 20, 20); //����������
                cm.teachSkill(12111006, 30, 30); //��籩
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 1300 && cm.getJob() <= 1311) {
                cm.teachSkill(13000000, 20, 20); //ǿ����
                cm.teachSkill(13000001, 15, 15); //Զ�̼�
                //cm.teachSkill(13001002,10,10);//������
                cm.teachSkill(13001003, 20, 20); //������
                cm.teachSkill(13001004, 10, 10); //�羫��
                cm.teachSkill(13100000, 20, 20); //��׼��
                cm.teachSkill(13101001, 20, 20); //���ټ�
                cm.teachSkill(13101002, 20, 20); //�ռ���
                cm.teachSkill(13101003, 10, 10); //���μ�
                cm.teachSkill(13101004, 10, 10); //���粽
                cm.teachSkill(13101005, 20, 20); //�������
                cm.teachSkill(13101006, 10, 10); //��Ӱ����
                cm.teachSkill(13101007, 20, 20); //��Ӱ����
                cm.teachSkill(13100008, 10, 10); //����ѵ��
                cm.teachSkill(13111000, 20, 20); //����
                cm.teachSkill(13111001, 20, 20); //��ɨ��
                cm.teachSkill(13111002, 30, 30); //�������
                //cm.teachSkill(13110003,20,20);//�����
                cm.teachSkill(13111004, 15, 15); //������
                cm.teachSkill(13111005, 0, 0); //������
                cm.teachSkill(13111006, 20, 20); //���鴩Խ
                cm.teachSkill(13111007, 20, 20); //����ɨ��
                cm.teachSkill(13110008, 10, 10); //����
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 1400 && cm.getJob() <= 1411) {
                cm.teachSkill(14000000, 20, 20); //������
                cm.teachSkill(14000001, 5, 5); //Զ�̰���
                cm.teachSkill(14001002, 10, 10); //������
                cm.teachSkill(14001003, 10, 10); //������
                cm.teachSkill(14001004, 20, 20); //˫��ն
                cm.teachSkill(14001005, 10, 10); //ҹ����
                //cm.teachSkill(14001007, 0, 0); //�Ṧ
                cm.teachSkill(14100000, 20, 20); //��׼����
                cm.teachSkill(14100001, 20, 20); //ǿ��Ͷ��
                cm.teachSkill(14101002, 20, 20); //���ٰ���
                //cm.teachSkill(14101003, 0, 0); //�Ṧ
                cm.teachSkill(14101004, 20, 20); //������
                cm.teachSkill(14100005, 10, 10); //����
                cm.teachSkill(14101006, 20, 20); //��Ѫ
                cm.teachSkill(14101008, 20, 20); //���ѷ���
                cm.teachSkill(14101009, 20, 20); //��֮����
                cm.teachSkill(14100010, 10, 10); //����ѵ��
                cm.teachSkill(14111000, 20, 20); //Ӱ����
                cm.teachSkill(14111001, 20, 20); //Ӱ����
                cm.teachSkill(14111002, 20, 20); //���ط���
                cm.teachSkill(14110003, 20, 20); //ҩ����ͨ
                cm.teachSkill(14110004, 20, 20); //�����ö�Һ
                cm.teachSkill(14111005, 20, 20); //�����������
                cm.teachSkill(14111006, 30, 30); //��ը��
                cm.teachSkill(14111007, 10, 10); //��������
                cm.teachSkill(14111008, 20, 20); //Ӱ�ӷ���
                cm.teachSkill(14110009, 20, 20); //����ڰ�
                cm.teachSkill(14110011, 10, 10); //ҩ������
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 1500 && cm.getJob() <= 1511) {
                cm.teachSkill(15000000, 20, 20); //�춯��
                cm.teachSkill(15001001, 20, 20); //����ȭ
                cm.teachSkill(15001002, 0, 0); //������
                cm.teachSkill(15001003, 10, 10); //����
                cm.teachSkill(15001004, 10, 10); //�׾���
                cm.teachSkill(15000006, 10, 10); //��������
                cm.teachSkill(15000008, 10, 10); //HP����
                cm.teachSkill(15100001, 20, 20); //��׼ȭ
                cm.teachSkill(15101002, 20, 20); //����ȭ
                cm.teachSkill(15101003, 0, 0); //��ǻ�
                cm.teachSkill(15100004, 20, 20); //�������
                cm.teachSkill(15101005, 20, 20); //��������
                cm.teachSkill(15101006, 20, 20); //����
                cm.teachSkill(15101008, 20, 20); //����
                cm.teachSkill(15101010, 30, 30); //�����ȭ
                cm.teachSkill(15100009, 20, 20); //����ѵ��
                cm.teachSkill(15110000, 15, 15); //��ɱȭ
                cm.teachSkill(15110009, 20, 20); //��������
                cm.teachSkill(15110010, 20, 20); //�Ի󹥻�
                cm.teachSkill(15111001, 20, 20); //������ת
                cm.teachSkill(15111002, 20, 20); //���˱���
                cm.teachSkill(15111012, 20, 20); //��ʯ�һ�
                cm.teachSkill(15111004, 20, 20); //����ȭ
                cm.teachSkill(15111005, 0, 0); //��������
                cm.teachSkill(15111006, 20, 20); //�����
                cm.teachSkill(15111007, 30, 30); //���㲨
                cm.teachSkill(15111008, 0, 0); //������ը
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 2100 && cm.getJob() <= 2112) {
                cm.teachSkill(21000000, 10, 10); //ì����ǿ��
                cm.teachSkill(21001001, 5, 5); //ս������
                cm.teachSkill(21000002, 20, 20); //˫���ػ�
                cm.teachSkill(21001003, 20, 20); //����ì
                cm.teachSkill(21000004, 10, 10); //��������
                cm.teachSkill(21100000, 20, 20); //��׼ì
                cm.teachSkill(21100001, 20, 20); //�����ػ�
                cm.teachSkill(21100002, 20, 20); //ս��ͻ��
                cm.teachSkill(21101003, 10, 10); //��ѹ
                cm.teachSkill(21100005, 20, 20); //������Ѫ
                cm.teachSkill(21101006, 20, 20); //��ѩì
                cm.teachSkill(21100007, 20, 20); //��Ӱ����
                cm.teachSkill(21100008, 10, 10); //����ѵ��
                cm.teachSkill(21100010, 20, 20); //�ռ�ì
                cm.teachSkill(21110000, 20, 20); //����ǿ��
                cm.teachSkill(21111001, 20, 20); //���ɻ���
                cm.teachSkill(21110002, 20, 20); //ȫ���ӻ�
                cm.teachSkill(21110003, 20, 20); //�ռ�Ͷ��
                cm.teachSkill(21110006, 20, 20); //����
                cm.teachSkill(21111009, 20, 20); //��������
                cm.teachSkill(21110010, 20, 20); //���ѹ���
                cm.teachSkill(21110011, 20, 20); //ս��֮����
                cm.teachSkill(21111012, 10, 10); //Ħڭף��
                //cm.teachSkill(21121000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(21120001, 30, 30); //��������
                cm.teachSkill(21120002, 30, 30); //ս��֮��
                cm.teachSkill(21121003, 30, 30); //ս�����־
                cm.teachSkill(21120004, 30, 30); //���ز���
                cm.teachSkill(21120005, 30, 30); //��������
                cm.teachSkill(21120006, 20, 20); //��ʯ�ǳ�
                cm.teachSkill(21120007, 30, 30); //ս��֮��
                cm.teachSkill(21121008, 5, 5); //��ʿ����־
                cm.teachSkill(21120009, 30, 30); //ս��֮�� - ˫���ػ�
                cm.teachSkill(21120010, 30, 30); //ս��֮�� - �����ػ�
                cm.teachSkill(21120011, 10, 10); //Ѹ���ƶ�
                cm.teachSkill(21120012, 10, 10); //�����ռ�����
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 2200 && cm.getJob() <= 2218) {
                cm.teachSkill(22000000, 20, 20); //����
                cm.teachSkill(22001001, 20, 20); //ħ������
                cm.teachSkill(22101000, 20, 20); //���滷
                cm.teachSkill(22101001, 20, 20); //�����ƶ�
                cm.teachSkill(22111000, 20, 20); //�����
                cm.teachSkill(22111001, 20, 20); //ħ����
                cm.teachSkill(22121000, 20, 20); //���㺮��
                cm.teachSkill(22121001, 10, 10); //��Ȼ������
                cm.teachSkill(22120002, 10, 10); //���ﾫͨ
                cm.teachSkill(22131000, 20, 20); //ħ������
                cm.teachSkill(22131001, 10, 10); //ħ������
                cm.teachSkill(22131002, 10, 10); //������
                cm.teachSkill(22140000, 15, 15); //ħ������
                cm.teachSkill(22141001, 20, 20); //������
                cm.teachSkill(22141002, 20, 20); //ħ����
                cm.teachSkill(22141004, 10, 10); //��������
                cm.teachSkill(22151001, 20, 20); //��������
                cm.teachSkill(22151002, 10, 10); //ħ��նɱ
                cm.teachSkill(22151003, 10, 10); //��ħ����
                cm.teachSkill(22150000, 15, 15); //ħ������
                cm.teachSkill(22160000, 5, 5); //���ķ�ŭ
                cm.teachSkill(22120001, 10, 10); //�ǻۼ���
                cm.teachSkill(22150004, 10, 10); //������
                cm.teachSkill(22161005, 10, 10); //�����ƶ���ͨs
                cm.teachSkill(22161001, 20, 20); //����
                cm.teachSkill(22161002, 10, 10); //��̷�
                cm.teachSkill(22161003, 5, 5); //����ָ�
                cm.teachSkill(22161004, 20, 20); //��觵ı���
                //cm.teachSkill(22171000, 30, 30); //ð�յ���ʿ
                cm.teachSkill(22170001, 30, 30); //ħ����ͨ
                cm.teachSkill(22171002, 30, 30); //ħ������
                cm.teachSkill(22171003, 30, 30); //������
                cm.teachSkill(22171004, 5, 5); //��ʿ����־
                cm.teachSkill(22181000, 25, 25); //��觵�ף��
                cm.teachSkill(22181001, 30, 30); //�����һ�
                cm.teachSkill(22181002, 30, 30); //�ڰ�����
                cm.teachSkill(22181003, 20, 20); //���֮ʯ
                cm.teachSkill(22181004, 20, 20); //��觵���־
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();


            } else if (cm.getJob() >= 2300 && cm.getJob() <= 2312) {
                //cm.teachSkill(20021110, 1, 1); //�����ף��
                //cm.teachSkill(20020111, 1, 1); //�����ƶ�
                //cm.teachSkill(20020112, 1, 1); //�����ʸ�
                cm.teachSkill(20021160, 1, 1);
                cm.teachSkill(23001000, 20, 0); //���ٶ�����
                cm.teachSkill(23000001, 15, 0); //Ǳ������
                cm.teachSkill(23001002, 20, 0); //��ˣ��
                cm.teachSkill(23000003, 20, 0); //������׼
                cm.teachSkill(23101000, 20, 0);
                cm.teachSkill(23101001, 20, 0);
                cm.teachSkill(23100004, 20, 0);
                cm.teachSkill(23110006, 20, 0);
                cm.teachSkill(23120011, 20, 0);
                cm.teachSkill(23001000, 20, 0);
                cm.teachSkill(23101002, 20, 0);
                cm.teachSkill(23101003, 20, 0);
                cm.teachSkill(23100005, 20, 0);
                cm.teachSkill(23100006, 20, 0);
                cm.teachSkill(23100008, 20, 0);
                cm.teachSkill(23101002, 20, 0);
                cm.teachSkill(23111000, 20, 0); //��Ϯ˫ɱ
                cm.teachSkill(23111001, 20, 0); //��Ҷ�����
                cm.teachSkill(23111002, 20, 0); //������֮��
                cm.teachSkill(23111003, 20, 0); //��縩��
                cm.teachSkill(23110006, 15, 0); //���ѷ���
                cm.teachSkill(23111004, 20, 0); //��������
                cm.teachSkill(23111005, 20, 0); //ˮ��
                cm.teachSkill(23111008, 20, 0); //������ʿ
                cm.teachSkill(23121000, 30, 0); //��ʦ��֮��
                cm.teachSkill(23121002, 20, 0); //��˵֮ì
                cm.teachSkill(23121003, 30, 0); //���絶��
                cm.teachSkill(23120011, 20, 0); //��ת����׹��
                cm.teachSkill(23121004, 30, 0); //������־
                cm.teachSkill(23120009, 30, 0); //˫��ǹר��
                cm.teachSkill(23120010, 20, 0); //����ͻ��
                cm.teachSkill(23120012, 30, 0); //�����ռ�����
                cm.teachSkill(23121005, 30, 0); //ð�յ���ʿ
                //cm.teachSkill(23121008, 0, 0); //��ʿ����־
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 3200 && cm.getJob() <= 3212) {
                cm.teachSkill(32001000, 20, 20); //���γ��
                cm.teachSkill(32001001, 10, 10); //�ͽ�
                cm.teachSkill(32100006, 20, 20)
                cm.teachSkill(32001002, 15, 15); //�����ƶ�
                cm.teachSkill(32001003, 20, 20); //�ڰ�����
                cm.teachSkill(32101000, 20, 20); //�Ķγ��
                cm.teachSkill(32101001, 20, 20); //�ڰ�����
                cm.teachSkill(32111012, 20, 20); //��ɫ����
                cm.teachSkill(32101003, 20, 20); //��ɫ����
                cm.teachSkill(32101004, 20, 20); //�˺�����
                cm.teachSkill(32101005, 20, 20); //���ٳ���
                cm.teachSkill(32100007, 10, 10); //�ǻۼ���
                cm.teachSkill(32110001, 20, 20); //ս����ͨ
                cm.teachSkill(32111002, 20, 20); //�������
                cm.teachSkill(32111003, 20, 20); //�ڰ�����
                cm.teachSkill(32111004, 10, 10); //ת��
                cm.teachSkill(32111005, 20, 20); //����
                cm.teachSkill(32111006, 20, 20); //����
                cm.teachSkill(32111010, 10, 10); //�����ƶ���ͨ
                cm.teachSkill(32111011, 20, 20); //���׺ڰ�����
                cm.teachSkill(32111014, 10, 10); //����̩ɽ
                cm.teachSkill(32110000, 10, 10); //������ɫ����
                cm.teachSkill(32120000, 0, 0); //���׺ڰ�����
                cm.teachSkill(32120001, 0, 0); //���׻�ɫ����
                cm.teachSkill(32121002, 30, 30); //�������
                cm.teachSkill(32121003, 30, 30); //쫷�
                cm.teachSkill(32121004, 30, 30); //�ڰ�����
                cm.teachSkill(32121006, 30, 0); //������
                cm.teachSkill(32121007, 30, 30); //ð�յ���ʿ
                //cm.teachSkill(32121008,5,5);//��ʿ����־
                cm.teachSkill(32120009, 30, 0); //��������
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 3300 && cm.getJob() <= 3312) {
                cm.teachSkill(33001000, 20, 20); //��������
                cm.teachSkill(33001001, 15, 15); //���ޱ���ʿ
                cm.teachSkill(33001002, 10, 10); //��������
                cm.teachSkill(33001003, 20, 20); //������
                cm.teachSkill(33100000, 20, 20); //��׼��
                cm.teachSkill(33101001, 20, 20); //ը�Ѽ�
                cm.teachSkill(33101002, 20, 20); //���ޱ�ŭ��
                cm.teachSkill(33101003, 10, 10); //���μ�
                cm.teachSkill(33101004, 20, 20); //����
                cm.teachSkill(33101005, 10, 10); //����
                cm.teachSkill(33100009, 20, 20); //�ռ�����
                cm.teachSkill(33100010, 10, 10); //����ѵ��
                cm.teachSkill(33110000, 20, 20); //��辫ͨ
                cm.teachSkill(33111001, 30, 30); //��Ұ���
                cm.teachSkill(33111002, 30, 30); //ʮ�ֹ���
                cm.teachSkill(33111003, 20, 20); //Ұ���ݽ�
                cm.teachSkill(33111004, 20, 20); //��ä
                cm.teachSkill(33111005, 20, 20); //��ӥ
                cm.teachSkill(33111006, 20, 20); //��צ���
                cm.teachSkill(33111007, 30, 30); //������̬
                cm.teachSkill(33110008, 10, 10); //����
                cm.teachSkill(33111009, 20, 20); //���о���
                cm.teachSkill(33111007, 30, 30); //������̬
                cm.teachSkill(33120000, 30, 30); //������
                cm.teachSkill(33121001, 30, 30); //�������
                cm.teachSkill(33121002, 30, 30); //������
                cm.teachSkill(33121004, 30, 30); //���۾���
                cm.teachSkill(33121007, 30, 30); //ð�յ���ʿ
                cm.teachSkill(33121009, 30, 30); //���������
                cm.teachSkill(33121005, 10, 10); //�񾭶���
                cm.teachSkill(33121008, 5, 5); //��ʿ����־
                cm.teachSkill(33120010, 10, 10); //Ұ�Ա���
                cm.teachSkill(33120011, 10, 10); //�����ռ�����
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 3500 && cm.getJob() <= 3512) {
                cm.teachSkill(35001001, 20, 20); //����������
                cm.teachSkill(35001002, 10, 10); //��������
                cm.teachSkill(35001003, 20, 20); //��۳��
                cm.teachSkill(35001004, 15, 15); //��ǹɨ��
                cm.teachSkill(35100000, 20, 20); //��е��ͨ
                cm.teachSkill(35101003, 20, 20); //ԭ�Ӵ�
                cm.teachSkill(35101004, 20, 20); //����ƽ���
                cm.teachSkill(35101005, 10, 10); //������
                cm.teachSkill(35101006, 20, 20); //��е����
                cm.teachSkill(35101007, 20, 20); //��������
                cm.teachSkill(35100008, 20, 20); //��׼������
                cm.teachSkill(35100011, 5, 5); //����ѵ��
                //cm.teachSkill(35101009, 20, 20); //ǿ������������
                //cm.teachSkill(35101010, 15, 15); //ǿ����ǹɨ��
                cm.teachSkill(35111001, 0, 0); //��������
                cm.teachSkill(35111002, 0, 0); //�ų�
                cm.teachSkill(35111004, 0, 0); //�������ף��ػ�ǹ
                cm.teachSkill(35111005, 15, 15); //������
                cm.teachSkill(35111011, 20, 20); //���ƻ�����
                cm.teachSkill(35111013, 20, 20); //��������
                cm.teachSkill(35110014, 20, 20); //��׼��еȭ
                cm.teachSkill(35111015, 20, 20); //���ȭ
                cm.teachSkill(35111016, 15, 15); //״̬����
                cm.teachSkill(35120000, 30, 30); //�ռ�����
                cm.teachSkill(35120001, 15, 15); //�����˾�ͨ
                cm.teachSkill(35121003, 30, 30); //ս��������̩̹
                cm.teachSkill(35121005, 30, 30); //�������ף�����ս��
                cm.teachSkill(35121006, 25, 25); //���Ƿ���
                cm.teachSkill(35121007, 30, 30); //ð�յ���ʿ
                cm.teachSkill(35121008, 5, 5); //��ʿ����־
                cm.teachSkill(35121009, 30, 30); //�����˹�����RM1
                cm.teachSkill(35121010, 20, 20); //�Ŵ���
                cm.teachSkill(35121012, 30, 30); //���ⱬ��
                cm.teachSkill(35121013, 20, 20); //�������ף��ػ�ǹ
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 430 && cm.getJob() <= 434) {
                cm.teachSkill(4001003, 10, 0); //������
                cm.teachSkill(4001011, 10, 0); //��Ծ
                cm.teachSkill(4000012, 10, 0); //����
                cm.teachSkill(4001013, 10, 0); //�쵶ն
                cm.teachSkill(4300000, 20, 0); //��׼˫��
                cm.teachSkill(4301003, 10, 0); //��Ӱ�Ṧ
                cm.teachSkill(4301004, 15, 0); //�����
                cm.teachSkill(4311002, 30, 0); //����ն
                cm.teachSkill(4311003, 20, 0); //˫���籩
                cm.teachSkill(4311005, 20, 0); //����
                cm.teachSkill(4310006, 10, 0); //����ѵ��
                cm.teachSkill(4311009, 10, 0); //����˫��
                cm.teachSkill(4321002, 5, 0); //���ⵯ
                cm.teachSkill(4321004, 20, 0); //�����ش�
                cm.teachSkill(4320005, 20, 0); //�����ö�Һ
                cm.teachSkill(4321006, 20, 0); //��Ӱ��Ծն
                cm.teachSkill(4330009, 10, 0); //Ӱ������
                cm.teachSkill(4311007, 10, 0); //��Ӱ������
                cm.teachSkill(4331000, 20, 0); //Ѫ���ȷ�
                cm.teachSkill(4330001, 10, 0); //����������
                cm.teachSkill(4331002, 30, 0); //�������
                cm.teachSkill(4331003, 20, 0); //����èͷӥ
                cm.teachSkill(4331006, 20, 0); //��������
                cm.teachSkill(4330007, 10, 0); //����͵ȡ
                cm.teachSkill(4330008, 20, 0); //����ڰ�
                cm.teachSkill(4341000, 30, 0); //ð�յ���ʿ
                cm.teachSkill(4340001, 30, 0); //�����ö�Һ
                cm.teachSkill(4341002, 30, 0); //�ռ�ն
                cm.teachSkill(4340010, 10, 0); //����
                cm.teachSkill(4341011, 30, 0); //ͻȻϮ��
                cm.teachSkill(4341004, 30, 0); //��ŭ����
                cm.teachSkill(4341006, 30, 0); //�����ٻ�
                cm.teachSkill(4341007, 10, 0); //����
                cm.teachSkill(4341008, 5, 0); //��ʿ����־
                cm.teachSkill(4341009, 30, 0); //����һ��
                cm.teachSkill(4340012, 10, 0); //������Һ
                cm.teachSkill(4340013, 10, 0); //˫��ר��
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() == 501 || cm.getJob() >= 530 && cm.getJob() <= 532) {
                cm.teachSkill(5011000, 20, 20); //������
                cm.teachSkill(5011001, 20, 20); //�ڻ�ȭ
                cm.teachSkill(5011002, 15, 15); //������
                cm.teachSkill(5010003, 10, 10); //��������
                cm.teachSkill(5301000, 20, 20); //ǿ����
                cm.teachSkill(5301001, 20, 20); //����ըҩͰ
                cm.teachSkill(5301002, 20, 20); //���ڼ���
                cm.teachSkill(5301003, 20, 20); //����ħ��
                cm.teachSkill(5300005, 20, 20); //��׼��
                cm.teachSkill(5300004, 15, 15); //�����ڻ�
                cm.teachSkill(5300008, 10, 10); //����ѵ��
                cm.teachSkill(5311000, 20, 20); //������
                cm.teachSkill(5311001, 20, 20); //���ӳ���ը��
                cm.teachSkill(5311003, 15, 15); //�ڻ���Ծ
                cm.teachSkill(5311002, 20, 20); //���ӳ����
                cm.teachSkill(5311004, 10, 10); //�����ľͰ
                cm.teachSkill(5311005, 20, 20); //��������
                cm.teachSkill(5310006, 15, 15); //����ǿ��
                cm.teachSkill(5310007, 20, 20); //����ǿ��
                cm.teachSkill(5310008, 20, 20); //���ӳ����
                cm.teachSkill(5310009, 15, 15); //������
                cm.teachSkill(5321000, 30, 30); //��ũ�����
                cm.teachSkill(5321001, 30, 30); //ŵ����˹ս��
                cm.teachSkill(5321003, 15, 15); //���Դ�ê
                cm.teachSkill(5321004, 15, 15); //˫��̥����֧Ԯ
                //cm.teachSkill(5321005, 20, 20); //ð�յ���ʿ
                cm.teachSkill(5320007, 5, 5); //˫��������
                cm.teachSkill(5320008, 10, 10); //��������ħ��
                cm.teachSkill(5320009, 30, 30); //����ȼ�յ�
                cm.teachSkill(5321010, 30, 30); //��������
                cm.teachSkill(5321012, 30, 30); //�����ڻ�
                cm.sendOk("��ϲ���������Գɹ�ȫ����!!");
                cm.dispose();
            } else if (cm.getJob() >= 3001 && cm.getJob() <= 3112) {
                cm.teachSkill(80000001, 1, 1); //��ħ֮ŭ
                cm.teachSkill(30010110, 1, 1); //��ħ��Ծ
                cm.teachSkill(30011109, 1, 1); //��ħ֮��
                cm.teachSkill(30010111, 1, 1); //��������
                cm.teachSkill(30010112, 1, 1); //��ħ֮ŭ
                cm.teachSkill(30010185, 1, 1); //��ħ֮Ѫ
                cm.teachSkill(31000004, 10, 1); //��ħѪ��ն1��ǿ��
                cm.teachSkill(31001000, 20, 1); //��ħѪ��ն1��ǿ��
                cm.teachSkill(31001001, 20, 1); //��ħѪ��ն1��ǿ��
                cm.teachSkill(31000002, 20, 1); //��ħѪ��ն1��ǿ��
                cm.teachSkill(31000003, 20, 1); //��ħѪ��ն1��ǿ��
                //��ת
                cm.teachSkill(31100007, 1, 1); //��ħѪ��ն1��ǿ��
                cm.teachSkill(31101000, 20, 20); //�������	
                cm.teachSkill(31101001, 20, 20); //�ڰ��͹�
                cm.teachSkill(31101002, 15, 15); //��ħ׷��
                cm.teachSkill(31101003, 20, 20); //
                cm.teachSkill(31100004, 20, 20); //
                cm.teachSkill(31101005, 20, 20); //
                cm.teachSkill(31100006, 20, 20); //
                cm.teachSkill(31100005, 20, 20); //
                //��ת
                cm.teachSkill(31110010, 1, 1); //��ħѪ��ն2��ǿ��
                cm.teachSkill(31111000, 20, 20); //�ڰ�����
                cm.teachSkill(31111001, 20, 20); //����ǣ��
                cm.teachSkill(31111003, 20, 20); //Ѫ�ȶ�ѻ
                cm.teachSkill(31111005, 20, 20); //��ħ����
                cm.teachSkill(31111004, 20, 20); //�ڰ�����
                cm.teachSkill(31110006, 15, 15); //а����
                cm.teachSkill(31110007, 20, 20); //������
                cm.teachSkill(31110008, 15, 15); //��������
                cm.teachSkill(31110009, 5, 5); //���޾�������
                //��ת
                cm.teachSkill(31120011, 1, 1); //��ħѪ��ն����ǿ��
                cm.teachSkill(31121000, 30, 30); //��ħ��ը
                cm.teachSkill(31121001, 30, 30); //��ħ�����
                cm.teachSkill(31121003, 20, 20); //����
                cm.teachSkill(31121006, 20, 20); //�ڰ�����
                cm.teachSkill(31121005, 30, 30); //�ڰ�����
                cm.teachSkill(31121007, 15, 15); //���޾���
                cm.teachSkill(31121002, 10, 10); //��Ѫ��֮��
                cm.teachSkill(31121004, 30, 30); //ð�յ���ʿ
                cm.teachSkill(31120008, 30, 30); //���׾�׼����
                cm.teachSkill(31120009, 30, 30); //Ƥ��Ӳ��
                cm.sendOk("��ϲ���������Գɹ�ȫ����!��輼��Ҳ������Ŷ!");
                cm.dispose();
            } else {
                cm.sendOk("��ǰְҵ�޷�������!");
                cm.dispose();
            }
        }
    }
}