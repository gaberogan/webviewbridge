import React, { useEffect, useState } from 'react'

let currentHeading = 0

const WebApp = () => {
    useEffect(() => {
        const scrollToCurrentHeading = () => {
            const top = document.querySelectorAll('h1')[currentHeading].getBoundingClientRect().top + window.scrollY;
            window.scroll({ top, behavior: 'smooth' })
        }

        window.scrollToPreviousHeading = () => {
            if (currentHeading <= 0) return
            currentHeading--
            scrollToCurrentHeading()
          }
          
        window.scrollToNextHeading = () => {
            if (currentHeading >= document.querySelectorAll('h1').length - 1) return
            currentHeading++
            scrollToCurrentHeading()
        }
    }, [])

    return (
        <div>
            <h1>One</h1>
            <p>Nam sit amet libero sit amet odio vehicula hendrerit eget vel eros. Ut id aliquam enim. Fusce neque justo, pulvinar ac sapien fringilla, mattis aliquam neque. Cras eget euismod dui. Nunc odio neque, dictum a mauris vitae, posuere aliquet elit. Nam ullamcorper augue non massa rutrum, hendrerit pulvinar dui facilisis. Aliquam metus diam, luctus quis tincidunt quis, lacinia ut arcu. In id est nec orci venenatis hendrerit ac a elit. Nunc pellentesque nunc a purus tristique, sed auctor turpis commodo. In tincidunt efficitur massa, mattis scelerisque tellus posuere sit amet. Sed at facilisis dolor. Morbi massa risus, dictum in hendrerit sed, vehicula eleifend mi. Integer et tincidunt libero.</p>
            <h1>Two</h1>
            <p>Nam sit amet libero sit amet odio vehicula hendrerit eget vel eros. Ut id aliquam enim. Fusce neque justo, pulvinar ac sapien fringilla, mattis aliquam neque. Cras eget euismod dui. Nunc odio neque, dictum a mauris vitae, posuere aliquet elit. Nam ullamcorper augue non massa rutrum, hendrerit pulvinar dui facilisis. Aliquam metus diam, luctus quis tincidunt quis, lacinia ut arcu. In id est nec orci venenatis hendrerit ac a elit. Nunc pellentesque nunc a purus tristique, sed auctor turpis commodo. In tincidunt efficitur massa, mattis scelerisque tellus posuere sit amet. Sed at facilisis dolor. Morbi massa risus, dictum in hendrerit sed, vehicula eleifend mi. Integer et tincidunt libero.</p>
            <h1>Three</h1>
            <p>Nam sit amet libero sit amet odio vehicula hendrerit eget vel eros. Ut id aliquam enim. Fusce neque justo, pulvinar ac sapien fringilla, mattis aliquam neque. Cras eget euismod dui. Nunc odio neque, dictum a mauris vitae, posuere aliquet elit. Nam ullamcorper augue non massa rutrum, hendrerit pulvinar dui facilisis. Aliquam metus diam, luctus quis tincidunt quis, lacinia ut arcu. In id est nec orci venenatis hendrerit ac a elit. Nunc pellentesque nunc a purus tristique, sed auctor turpis commodo. In tincidunt efficitur massa, mattis scelerisque tellus posuere sit amet. Sed at facilisis dolor. Morbi massa risus, dictum in hendrerit sed, vehicula eleifend mi. Integer et tincidunt libero.</p>
            <h1>Four</h1>
            <p>Nam sit amet libero sit amet odio vehicula hendrerit eget vel eros. Ut id aliquam enim. Fusce neque justo, pulvinar ac sapien fringilla, mattis aliquam neque. Cras eget euismod dui. Nunc odio neque, dictum a mauris vitae, posuere aliquet elit. Nam ullamcorper augue non massa rutrum, hendrerit pulvinar dui facilisis. Aliquam metus diam, luctus quis tincidunt quis, lacinia ut arcu. In id est nec orci venenatis hendrerit ac a elit. Nunc pellentesque nunc a purus tristique, sed auctor turpis commodo. In tincidunt efficitur massa, mattis scelerisque tellus posuere sit amet. Sed at facilisis dolor. Morbi massa risus, dictum in hendrerit sed, vehicula eleifend mi. Integer et tincidunt libero.</p>
            <h1>Five</h1>
            <p>Nam sit amet libero sit amet odio vehicula hendrerit eget vel eros. Ut id aliquam enim. Fusce neque justo, pulvinar ac sapien fringilla, mattis aliquam neque. Cras eget euismod dui. Nunc odio neque, dictum a mauris vitae, posuere aliquet elit. Nam ullamcorper augue non massa rutrum, hendrerit pulvinar dui facilisis. Aliquam metus diam, luctus quis tincidunt quis, lacinia ut arcu. In id est nec orci venenatis hendrerit ac a elit. Nunc pellentesque nunc a purus tristique, sed auctor turpis commodo. In tincidunt efficitur massa, mattis scelerisque tellus posuere sit amet. Sed at facilisis dolor. Morbi massa risus, dictum in hendrerit sed, vehicula eleifend mi. Integer et tincidunt libero.</p>
        </div>
    )
}

export default WebApp