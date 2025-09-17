import React from 'react';
import MDXHeading from './Heading';

const MDXComponents = {
  h1: (props: any) => <MDXHeading as="h1" {...props} />,
  h2: (props: any) => <MDXHeading as="h2" {...props} />,
  h3: (props: any) => <MDXHeading as="h3" {...props} />,
  h4: (props: any) => <MDXHeading as="h4" {...props} />,
  h5: (props: any) => <MDXHeading as="h5" {...props} />,
  h6: (props: any) => <MDXHeading as="h6" {...props} />,
};

export default MDXComponents;