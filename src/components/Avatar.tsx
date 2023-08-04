import React from 'react';
import { emojiAvatarForString } from './emojiAvatar';

export interface EmojiAvatarProps {
  string: string;
  emojiType: 'flat' | '3d' | 'animated-3d';
}

const EmojiAvatar: React.FC<EmojiAvatarProps> = (props) => {
  const { string } = props;
  const { color, emoji } = emojiAvatarForString(string);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color
    }
  };

  return (
    <>
      <div style={styles.container}>{emoji}</div>
    </>
  );
};

export default EmojiAvatar;
