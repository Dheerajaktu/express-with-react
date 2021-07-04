import React from 'react'

export const Footer = () => {
    let footerStyle = {
        width: '100%',
        posiion: 'absolute',
        top: '100vh'

    }
    return (
        <div className="bg-dark text-light my-3 text-center" style={footerStyle}>
            Footer Works!
        </div>
    )
}
