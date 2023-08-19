const colors = [
  '#FC5C54',
  '#FFD95A',
  '#E95D72',
  '#6A87C8',
  '#5FD0F3',
  '#75C06B',
  '#FFDD86',
  '#5FC6D4',
  '#FF949A',
  '#FF8024',
  '#9BA1A4',
  '#EC66FF',
  '#FF8CBC',
  '#FF9A23',
  '#C5DADB',
  '#A8CE63',
  '#71ABFF',
  '#FFE279',
  '#B6B1B6',
  '#FF6780',
  '#A575FF',
  '#4D82FF',
  '#FFB35A'
] as const;

// Array for Avatars
const avatars = [
  { color: colors[0], emoji: '🌶' },
  { color: colors[1], emoji: '🤑' },
  { color: colors[2], emoji: '🐙' },
  { color: colors[3], emoji: '🫐' },
  { color: colors[4], emoji: '🐳' },
  { color: colors[0], emoji: '🤶' },
  { color: colors[5], emoji: '🌲' },
  { color: colors[6], emoji: '🌞' },
  { color: colors[7], emoji: '🐒' },
  { color: colors[8], emoji: '🐵' },
  { color: colors[9], emoji: '🦊' },
  { color: colors[10], emoji: '🐼' },
  { color: colors[11], emoji: '🦄' },
  { color: colors[12], emoji: '🐷' },
  { color: colors[13], emoji: '🐧' },
  { color: colors[8], emoji: '🦩' },
  { color: colors[14], emoji: '👽' },
  { color: colors[0], emoji: '🎈' },
  { color: colors[8], emoji: '🍉' },
  { color: colors[1], emoji: '🎉' },
  { color: colors[15], emoji: '🐲' },
  { color: colors[16], emoji: '🌎' },
  { color: colors[17], emoji: '🍊' },
  { color: colors[18], emoji: '🐭' },
  { color: colors[19], emoji: '🍣' },
  { color: colors[1], emoji: '🐥' },
  { color: colors[20], emoji: '👾' },
  { color: colors[15], emoji: '🥦' },
  { color: colors[0], emoji: '👹' },
  { color: colors[17], emoji: '🙀' },
  { color: colors[4], emoji: '⛱' },
  { color: colors[21], emoji: '⛵️' },
  { color: colors[17], emoji: '🥳' },
  { color: colors[8], emoji: '🤯' },
  { color: colors[22], emoji: '🤠' }
] as const;
// Array for 3d Avatars
function threedEmojiUrl(position: string) {
  return `https://cdn.hivaibhav.xyz/3demojis/emoji${position}.png`;
}

const threedavatars = [
  { color: colors[0], emojiUrl: threedEmojiUrl('1') },
  { color: colors[1], emojiUrl: threedEmojiUrl('2') },
  { color: colors[2], emojiUrl: threedEmojiUrl('3') },
  { color: colors[3], emojiUrl: threedEmojiUrl('4') },
  { color: colors[4], emojiUrl: threedEmojiUrl('5') },
  { color: colors[0], emojiUrl: threedEmojiUrl('6') },
  { color: colors[5], emojiUrl: threedEmojiUrl('7') },
  { color: colors[6], emojiUrl: threedEmojiUrl('8') },
  { color: colors[7], emojiUrl: threedEmojiUrl('9') },
  { color: colors[8], emojiUrl: threedEmojiUrl('10') },
  { color: colors[9], emojiUrl: threedEmojiUrl('11') },
  { color: colors[10], emojiUrl: threedEmojiUrl('12') },
  { color: colors[11], emojiUrl: threedEmojiUrl('13') },
  { color: colors[12], emojiUrl: threedEmojiUrl('14') },
  { color: colors[13], emojiUrl: threedEmojiUrl('15') },
  { color: colors[8], emojiUrl: threedEmojiUrl('16') },
  { color: colors[14], emojiUrl: threedEmojiUrl('17') },
  { color: colors[0], emojiUrl: threedEmojiUrl('18') },
  { color: colors[8], emojiUrl: threedEmojiUrl('19') },
  { color: colors[1], emojiUrl: threedEmojiUrl('20') },
  { color: colors[15], emojiUrl: threedEmojiUrl('21') },
  { color: colors[16], emojiUrl: threedEmojiUrl('22') },
  { color: colors[17], emojiUrl: threedEmojiUrl('23') },
  { color: colors[18], emojiUrl: threedEmojiUrl('24') },
  { color: colors[19], emojiUrl: threedEmojiUrl('25') },
  { color: colors[1], emojiUrl: threedEmojiUrl('26') },
  { color: colors[20], emojiUrl: threedEmojiUrl('27') },
  { color: colors[15], emojiUrl: threedEmojiUrl('28') },
  { color: colors[0], emojiUrl: threedEmojiUrl('29') },
  { color: colors[17], emojiUrl: threedEmojiUrl('30') },
  { color: colors[4], emojiUrl: threedEmojiUrl('31') },
  { color: colors[21], emojiUrl: threedEmojiUrl('32') },
  { color: colors[17], emojiUrl: threedEmojiUrl('33') },
  { color: colors[8], emojiUrl: threedEmojiUrl('34') },
  { color: colors[22], emojiUrl: threedEmojiUrl('35') }
] as const;

// Algo ( the heart 💟 ) to generate hash codes for the string
function numberHash(text: string) {
  let hash = 0;
  if (text.length === 0) return hash;
  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i);
    hash = hash * 31 + chr;
    hash |= 0;
  }
  return hash;
}

// Retunrning a Avatar obj
export function emojiAvatarForString(address: string) {
  const resolvedAddress = typeof address === 'string' ? address : '';
  const avatarIndex = Math.abs(numberHash(resolvedAddress.toLowerCase()) % avatars.length);
  return avatars[avatarIndex ?? 0];
}

// Retunrning a Avatar obj for 3d
export function emoji3dAvatarForString(address: string) {
  const resolvedAddress = typeof address === 'string' ? address : '';
  const avatarIndex = Math.abs(numberHash(resolvedAddress.toLowerCase()) % threedavatars.length);
  return threedavatars[avatarIndex ?? 0];
}
