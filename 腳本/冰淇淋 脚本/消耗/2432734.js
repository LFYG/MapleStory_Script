/* 
 * 2432734 - ����7��ʹ��ȯ - ��������ʹ��ȯ.\r\n#c˫���������7����ʹ�ú��������＼��.#
 */
var period = 90;
var mountSkillId = 80001553;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}