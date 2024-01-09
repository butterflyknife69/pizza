import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle  cx="134" cy="136" r="125" /> 
    <rect x="0" y="296" rx="10" ry="10" width="280" height="23" /> 
    <rect x="0" y="341" rx="10" ry="10" width="280" height="83" /> 
    <rect x="1" y="433" rx="10" ry="10" width="75" height="24" /> 
    <rect x="149" y="427" rx="18" ry="18" width="133" height="33" />
  </ContentLoader>
)

export default Skeleton

