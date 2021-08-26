import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="145" cy="139" r="106" />
        <rect x="22" y="270" rx="0" ry="0" width="252" height="41" />
        <rect x="19" y="326" rx="0" ry="0" width="115" height="32" />
        <rect x="191" y="333" rx="0" ry="0" width="80" height="25" />
    </ContentLoader>
)

export default Preloader



