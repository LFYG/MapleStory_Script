var laba = new Array(
        Array(0x00, "0x00 = ��ɫ"),
        Array(0x01, "0x01 = ��ɫ"),
        Array(0x06, "0x06 = ��ɫ"),
        Array(0x07, "0x07 = ��ɫ"),
        Array(0x08, "0x08 = ǳ��"),
        Array(0x09, "0x09 = ��ɫ"),
        Array(0x0A, "0x0A = �׵׺���"),
        Array(0x0B, "0x0B = ǳ��ɫ"),
        Array(0x0C, "0x0C = �׵�����"),
        Array(0x0D, "0x0D = �۵�����ɫ��"),
        Array(0x0F, "0x0F = ��Ƶ׺���"),
        Array(0x10, "0x10 = ��ɫ"),
        Array(0x11, "0x11 = �̵׺���"),
        Array(0x14, "0x14 = ǳ��ɫ"),
        Array(0x16, "0x16 = ������3��"),
        Array(0x19, "0x19 = ǳ��ɫ"),
        Array(0x1B, "0x1B = ǳ��ɫ"),
        Array(0x1C, "0x1C = ���ɫ����"),
        Array(0x1E, "0x1E = ����ɫ"),
        Array(0x1F, "0x1F = ǳ��ɫ"),
        Array(0x20, "0x20 = �׵׷���"),
        Array(0x21, "0x21 = ��׺���"),
        Array(0x23, "0x23 = ��׻���"),
        Array(0x24, "0x24 = �۵׺���"),
        Array(0x25, "0x25 = ǳ�Ƶ׺���"),
        Array(0x26, "0x26 = ���ǳ����"),
        Array(0x28, "0x28 = ���׺���"),
        Array(0x2A, "0x2A = ���ɫ")
    );

function start() {
    for (var i in laba) {
        cm.spouseMessage(laba[i][0], "��Ϣ��ʽչʾ��" + laba[i][1]);
    }
    cm.dispose();
}