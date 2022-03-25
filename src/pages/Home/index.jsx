import React from 'react';
import {HomeCard} from 'components/home-card';

export function Home() {
    return (
        <>
            <div class="quote">
                <h1>"Football is freedom!" - Bob Marley</h1>
            </div>
            <main class="quiz-wrapper">
                <h1>Select Quiz Tournament</h1>
                <div class="quiz-container">
                    <HomeCard/>
                </div>
            </main>
        </>
    );
}
