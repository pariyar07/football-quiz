import React from 'react';

export function HomeCard() {
    const datas = [
        {
            img: "/assets/pl-image.png",
            alt: "premier league logo",
            title: "Premier League Quiz",
            para: "Test your PL knowledge",
            noOf: "5 Questions"
        }, {
            img: "/assets/ucl-img.png",
            alt: "champions league logo",
            title: "Champions League Quiz",
            para: "Test your UCL knowledge",
            noOf: "5 Questions"
        }
    ]
    return (
        <>
            {
                datas.map((data) => <div class="pl-quiz">
                        <a class="quiz-cover" href=".">
                            <img src={data.img} alt={data.alt}/>
                                <div class="quiz-cover-info">
                                    <h2>{data.title}</h2>
                                    <p>{data.para}</p>
                                    <p>{data.noOf}</p>
                                </div>
                        </a>
                    </div>)
            }
        </>
    );
}
