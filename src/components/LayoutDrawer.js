import React from 'react';

export default function LayoutDrawer({ children, port }) {
  // get number of div
  const countChildren = () => {
    return React.Children.count(children)
  }

  // calculate div size
  const divHeightOrWidth = () => {
    return `${ 100 / countChildren() }`;
  }

  return (
    <div className="layout_drawer">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(
          child,
          { 
            className: `${port ? 'layout_port' : 'layout_landscape' }`,
            style: {
              height: `${port ? `${divHeightOrWidth()}%` :  '100%' }`,
              width: `${!port ?  `${divHeightOrWidth()}vw` :  '100vw' }`,
              background: `${child.props.colour}`
            }
          }
        )
      })}
    </div>
  )
}
