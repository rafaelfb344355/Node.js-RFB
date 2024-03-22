import React from 'react';

interface Link {
  code: string;
  original_url: string;
}

interface LinkListProps {
  links: Link[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <p>Código: {link.code}</p>
            <p>URL Original: {link.original_url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;