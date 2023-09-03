import { Feature } from '../../components'
import './style.css'

export default function WhatGPT3() {
    const featuresData = [
        {
            title: 'Chatbots',
            text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
        },
        {
            title: 'Knowledgebase',
            text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        },
        {
            title: 'Education',
            text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        },
    ]

    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature 
                    title='What is GPT-3'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                />
            </div>
            <div className="gpt3__whatgpt3-header">
                <div className="gradient__text">
                    <h1>The possibilities are beyond your imagination</h1>
                </div>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                {
                    featuresData.map(feature => (
                        <Feature 
                            title= {feature.title}
                            text= {feature.text}
                        />
                    ))
                }
            </div>
        </div>
    )
};
