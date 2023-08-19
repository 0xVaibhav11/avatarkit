import React from 'react';
import { emojiAvatarForString, emoji3dAvatarForString } from './emojiAvatar';

export interface EmojiAvatarProps {
  string: string;
  emojiType: 'flat' | '3d';
  size?: number;
  borderRadius?: 50;
}

const Avatar: React.FC<EmojiAvatarProps> = (props) => {
  const { string, size, emojiType, borderRadius } = props;
  const { color, emoji } = emojiAvatarForString(string);
  const { color: color3d, emojiUrl } = emoji3dAvatarForString(string);

  const styles = {
    container: {
      display: 'flex',
      userSelect: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: `${borderRadius}%`,
      aspectRatio: '1/1',
      width: `${size ? size : 24}px`,
      backgroundColor: emojiType === 'flat' ? color : color3d,
      fontSize: `${(size ? size : 24) * 0.55}px`
    } as React.CSSProperties,
    img3d: {
      width: '61.8%',
      height: '61.8%',
      objectFit: 'contain',
      pointerEvents: 'none'
    } as React.CSSProperties
  };

  return (
    <>
      <div style={styles.container}>{emojiType === 'flat' ? emoji : <img style={styles.img3d} src={emojiUrl} alt="" />}</div>
    </>
  );
};

export default Avatar;
