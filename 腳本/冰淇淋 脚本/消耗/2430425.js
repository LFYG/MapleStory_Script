/* 
 * 2430425 - ����7��ʹ��ȯ - ��������ʹ��ȯ.\r\n#c˫���������7����ʹ�ú��������＼��.#
 */
var period = 7;
var mountSkillId = 20011034;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}