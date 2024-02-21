import React from 'react';

const Box = ({
  title,
  content,
  backgroundColor,
  borderColor,
  borderRadius,
  boxShadow,
  onClick,
  onFocus,
  onBlur,
  tabIndex,
  children,
  className,
  style,
  ...restProps
}) => {
  const boxStyle = {
    backgroundColor: backgroundColor || 'white',
    border: borderColor ? `2px solid ${borderColor}` : 'none',
    borderRadius: borderRadius || '5px',
    boxShadow: boxShadow || 'none',
    padding: '20px',
    margin: '10px',
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  };

  return (
    <div
      className={`box ${className}`}
      style={boxStyle}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={tabIndex}
      {...restProps}
    >
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {children}
    </div>
  );
};

export default Box;
