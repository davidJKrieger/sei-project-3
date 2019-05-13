import React from 'react'

//Header is a presentation component
//it simply renders the title of the App with some styling
function Header () {
    return (
        <div>
        <h1 id="title">DISPERSED</h1>
        <p>Collect and store your favorite dispersed campsites</p>
            <style>
                @import url('https://fonts.googleapis.com/css?family=Akronim');
            </style>
        </div>
    )

}

export default Header 