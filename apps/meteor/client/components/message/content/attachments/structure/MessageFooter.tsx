import React from 'react';
import type { ReactElement } from 'react';

type MessageFooterProps = {
  footer?: string;
};

export const MessageFooter = ({ footer }: MessageFooterProps): ReactElement | null => {
  if (!footer) return null;

  return (
    <div
      style={{
        fontSize: '0.75rem',
        opacity: 0.6,
        marginTop: '4px',
      }}
    >
      {footer}
    </div>
  );
};
cd apps/meteor/client/components/message/content/attachments/structure



