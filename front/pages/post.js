import React from 'react';

import { Editor } from '@toast-ui/react-editor';

const Post = () => {
  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default Post;
