/* 
 * 2430432 - ����7��ʹ��ȯ - ��������ʹ��ȯ.\r\n#c˫���������7����ʹ�ú��������＼��.#
 */
var period = 7;
var mountSkillId = 80001005;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}