/* 
 * 2430433 - ����7��ʹ��ȯ - ��������ʹ��ȯ.\r\n#c˫���������7����ʹ�ú��������＼��.#
 */
var period = 7;
var mountSkillId = 80001009;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}