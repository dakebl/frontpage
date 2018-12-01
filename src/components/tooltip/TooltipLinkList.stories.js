// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import WithTooltip from './WithTooltip';
//
// import TooltipLinkList from './TooltipLinkList';
// import StoryLinkWrapper from './../lib/StoryLinkWrapper';
//
// // eslint-disable-next-line import/prefer-default-export
// export const links = [
//   { title: 'Settings', href: 'http://google.com' },
//   { title: 'Logout', href: 'http://google.com' },
//   { title: 'callback', onClick: action('onClick') },
// ];
//
// storiesOf('tooltip/TooltipLinkList', module)
//   .addDecorator(storyFn => (
//     <div style={{ height: '300px' }}>
//       <WithTooltip placement="top" mode="click" startOpen tooltip={storyFn()}>
//         <div>Tooltip</div>
//       </WithTooltip>
//     </div>
//   ))
//   .add('links', () => <TooltipLinkList links={links.slice(0, 2)} LinkWrapper={StoryLinkWrapper} />)
//   .add('links and callback', () => (
//     <TooltipLinkList links={links} LinkWrapper={StoryLinkWrapper} />
//   ));